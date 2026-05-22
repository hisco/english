# Little English Games

A dependency-free static web catalog of gentle English listening games for young children.

## Games

- **Say & Find**: choose a themed pack, hear a word, explore cards, and find the matching picture. Each pack has five picture rounds and five sound-only rounds.
- **Pack My Bag**: hear what to pack, tap cards to explore their words, and put the matching item in the bag.
- **Who Is Doing It?**: hear noun and verb phrases, explore action cards, and match who is doing the action.

## Run locally

Serve the folder with any static web server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

The app uses browser emojis for pictures, the Web Speech API for spoken words, Web Audio for the happy sound, `localStorage` for progress, and a service worker so the games keep working offline after the first load.
