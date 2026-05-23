# Little English Games

A dependency-free static web catalog of gentle English listening games for young children.

## Games

- **Say & Find**: choose a themed pack, hear a word, explore cards, and find the matching picture. Each pack has five picture rounds and five sound-only rounds.
- **Pack My Bag**: hear what to pack, tap cards to explore their words, and put the matching item in the bag.
- **Who Is Doing It?**: hear noun and verb phrases, explore action cards, and match who is doing the action.
- **Number Find**: hear numbers, explore ordered choices, and find each number sequentially from 1 to 10.
- **Memory Lock**: copy four visible numbers to open a lock.
- **Memory Lock Plus**: peek at four numbers, remember the hidden one, and type the code to open the lock.



## Completion celebration

When a child completes a game, the app shows a short confetti celebration and a random positive message such as "You are the winner!" or "What a champ!" before returning to the catalog or pack picker.

## Levels

The catalog includes a global **Settings** screen that affects every game:

- **Level 1: Learn** keeps the original guided behavior: predictable order, smaller pools, and simpler choices.
- **Level 2: Mix** adds more randomness: larger word/object/action pools, shuffled rounds, randomized number choices, and random memory lock codes.

Wrong taps and failed memory attempts remain gentle: no penalties, no negative sounds, and the child can keep trying.


## Run locally

Serve the folder with any static web server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

The app uses browser emojis for pictures, the Web Speech API for spoken words, Web Audio for the happy sound, `localStorage` for progress, and a service worker so the games keep working offline after the first load.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

After the PR is merged to `main`, enable GitHub Pages for the repository:

1. Open **Settings -> Pages** in GitHub.
2. Set **Source** to **GitHub Actions**.
3. Push or re-run the **Deploy static site to GitHub Pages** workflow.

The app is fully static and uses relative asset paths, so it works from the GitHub Pages project path, for example `https://hisco.github.io/english/`. Hash routes such as `#/catalog` and `#/numbers` keep browser navigation working without server rewrites.

## Install on Android

After the GitHub Pages site is live, Android users can install it like an app:

1. Open the site in Chrome, for example `https://hisco.github.io/english/`.
2. Open the Chrome menu.
3. Tap **Install app** or **Add to Home screen**.
4. Launch **English Games** from the home screen.

The installed app opens in standalone mode without the browser address bar and keeps working offline after the first successful load.
