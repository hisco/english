# Little English Games

A dependency-free static web catalog of gentle English listening games for young children.

## Games

- **Say & Find**: choose a themed pack, hear a word, explore cards, and find the matching picture. Each pack has five picture rounds and five sound-only rounds.
- **Pack My Bag**: hear what to pack, tap cards to explore their words, and put the matching item in the bag.
- **Who Is Doing It?**: hear noun and verb phrases, explore action cards, and match who is doing the action.
- **Number Find**: hear numbers, explore ordered choices, and find each number sequentially from 1 to 10.
- **Memory Lock**: copy four visible numbers to open a lock.
- **Memory Lock Plus**: peek at four numbers, remember the hidden one, and type the code to open the lock.

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
