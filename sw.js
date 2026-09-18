// Container Log — service worker
// Network-first for the app's HTML, so a redeploy is visible on the very
// next load instead of being masked by a stale cached copy. Static assets
// (icons, manifest) are cache-first with a background refresh, since they
// change rarely. Live data (GitHub API calls) always goes to the network —
// this service worker never touches those.

var CACHE_VERSION = "container-log-v2";
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
        names.filter(function(n){ return n !== CACHE_VERSION; })
             .map(function(n){ return caches.delete(n); })
      );
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

  // Only handle same-origin GET requests. Everything else (GitHub API,
  // Google Fonts, cdnjs) goes straight to the network so data is always
  // current and never accidentally cached.
  if(event.request.method !== "GET" || url.origin !== self.location.origin){
    return;
  }

  if(isHtmlRequest(event.request)){
    // Network-first: always try to get the latest index.html. Only use
    // the cached copy if the network is unavailable (offline).
    event.respondWith(
      fetch(event.request).then(function(response){
        if(response && response.status === 200){
          var copy = response.clone();
          caches.open(CACHE_VERSION).then(function(cache){ cache.put(event.request, copy); });
        }
        return response;
      }).catch(function(){
        return caches.match(event.request).then(function(cached){
          return cached || caches.match("./index.html");
        });
      })
    );
    return;
  }

  // Static assets: serve from cache immediately if present, and refresh
  // the cache in the background for next time.
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
