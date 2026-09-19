// Container Log — service worker
// Deliberately does NOT intercept the app's HTML at all — navigation
// requests are left completely alone and go straight to the network,
// exactly as if there were no service worker for that request. This is
// the safest option: it fully removes the service worker as a possible
// reason data or code updates look "stuck" after a refresh. Only a
// handful of static, rarely-changing assets (icons, manifest) get a
// light cache, purely so the icon still resolves if opened offline.
// Live data (GitHub API calls) is never touched by this file.

var CACHE_VERSION = "container-log-v3";
var APP_SHELL = [
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache){
      return cache.addAll(APP_SHELL);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(
        names.map(function(n){ return caches.delete(n); }) // drop everything from older versions of this file, no exceptions
      );
    }).then(function(){
      return caches.open(CACHE_VERSION).then(function(cache){ return cache.addAll(APP_SHELL); });
    }).then(function(){
      return self.clients.claim();
    })
  );
});

function isHtmlRequest(request){
  return request.mode === "navigate" ||
    (request.headers.get("accept") || "").indexOf("text/html") !== -1;
}

self.addEventListener("fetch", function(event){
  var url = new URL(event.request.url);

  // Anything cross-origin (GitHub API, Google Fonts, cdnjs): never touched.
  if(url.origin !== self.location.origin) return;

  // The HTML document itself: never touched either — always network,
  // never cached, never intercepted. This guarantees a refresh always
  // shows exactly what's on the server, with no service-worker layer
  // that could be serving something stale.
  if(event.request.method !== "GET" || isHtmlRequest(event.request)) return;

  // Everything else same-origin (icons, manifest.json): light cache with
  // background refresh, since these rarely change and this only affects
  // whether the icon shows up while offline — never app data.
  event.respondWith(
    caches.match(event.request).then(function(cached){
      var network = fetch(event.request).then(function(response){
        if(response && response.status === 200){
          var copy = response.clone();
          caches.open(CACHE_VERSION).then(function(cache){ cache.put(event.request, copy); });
        }
        return response;
      }).catch(function(){ return cached; });
      return cached || network;
    })
  );
});
