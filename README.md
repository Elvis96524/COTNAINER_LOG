# Container Log

A single-page web app for tracking containers, truck deliveries, and history —
installable on any phone, with data optionally stored in a GitHub repo so every
device reads and writes the same data.

## What's in this folder

```
index.html          the whole app (one file — HTML, CSS, and JS)
manifest.json        makes the app installable on phones ("Add to Home Screen")
sw.js                 service worker — lets the app shell open even offline
icons/                app icons used by manifest.json and the browser tab
```

There is no build step and no server code. It's a static site.

## 1. Put it on GitHub Pages (hosting)

1. Create a new GitHub repository (public or private — Pages works with either
   on paid plans; free plans need a public repo for Pages).
2. Upload every file in this folder, **keeping the folder structure**
   (`index.html`, `manifest.json`, `sw.js`, and the `icons/` folder all at the
   repo's top level, or all together inside one subfolder — just keep them
   together).
3. In the repo, go to **Settings → Pages**, set "Source" to the branch you
   uploaded to (e.g. `main`) and the folder you put the files in, then save.
4. GitHub gives you a URL like `https://your-username.github.io/your-repo/`.
   Open it — that's the live app.

## 2. Install it on a phone

Open that URL in the phone's browser:

- **iPhone (Safari):** tap Share → **Add to Home Screen**.
- **Android (Chrome):** tap the ⋮ menu → **Add to Home Screen** / **Install app**.

It opens full-screen, with its own icon, like a normal app.

## 3. Turn on shared data (optional, but this is the "GitHub as backend" part)

Without this step, the app still works — it just saves data only to
whichever phone/browser you're using, like a notebook that stays in one
place. To make every device share the same data:

1. Create **a second, separate GitHub repository** to hold the data (keeping
   data separate from the app's code is cleaner, but you can reuse the same
   repo if you prefer — just pick a path that doesn't collide with the app
   files, e.g. `data/container-log.json`).
2. Create a **fine-grained personal access token**:
   - GitHub → Settings → Developer settings → Personal access tokens →
     Fine-grained tokens → Generate new token.
   - Under "Repository access", choose **Only select repositories** and pick
     the data repo from step 1.
   - Under "Permissions", set **Contents** to **Read and write**. Leave
     everything else as "No access".
   - Generate the token and copy it — GitHub only shows it once.
3. In the app, tap **⚙ Sync settings** (top right) and fill in:
   - **Personal access token** — the token from step 2
   - **Repo owner** — your GitHub username or org name
   - **Repo name** — the data repo from step 1
   - **Branch** — usually `main`
   - **Data file path** — e.g. `data/container-log.json` (the app creates
     this file automatically the first time it saves, if it doesn't exist)
4. Tap **Save & connect**. The badge next to the button should turn into
   **● Synced (GitHub)**.

Do this same setup (same token, repo, branch, path) on every phone or
computer that should share the data. Any of them can then tap **⟳ Refresh**
to pull in whatever the others have saved. Every save shows up as a commit
in the data repo, so you also get a full audit trail of changes for free —
viewable any time in the repo's commit history.

### Things worth knowing about this setup

- **The token lives only in that browser's local storage.** It's never sent
  anywhere except GitHub's own API. Anyone who can use that browser/device
  can read the token, so only put it on devices you trust, and give the
  token access to nothing but the one data repo.
- **If the data repo is public, the JSON file is publicly readable** (not
  writable — that still needs the token). Use a private repo if the data
  is sensitive; the token setup above still works the same way.
- **Saves are batched, not instant** — the app waits about 1.5 seconds after
  your last change before pushing, so a burst of quick edits becomes one
  commit rather than many.
- **Two people saving at the exact same moment:** GitHub rejects the second
  write and the app automatically re-pulls the latest version and asks you
  to redo your last change if it didn't make it in. This is uncommon at
  normal usage levels.
- **No internet / GitHub unreachable:** the app keeps working from the last
  data it has cached on that device, and shows a "⚠ Sync error" badge. Use
  ⟳ Refresh once you're back online.
- You can disconnect at any time from **⚙ Sync settings → Disconnect** —
  the app drops back to saving only on that device.
