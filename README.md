# Say & Find English

A dependency-free static web game that helps young children practice spoken English words.

## Run locally

Serve the folder with any static web server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

The app uses browser emojis for pictures, the Web Speech API for spoken words, Web Audio for the happy sound, `localStorage` for pack progress, and a service worker so the game keeps working offline after the first load.