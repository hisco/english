(function initializeFreePlayPianoGame() {
  "use strict";
  const ROUTE = "#/free-piano";
  const NOTE_DURATION_MS = 620;
  const NOTE_GAP_MS = 130;
  const NOTES = Object.freeze([
    Object.freeze({ id: "do", label: "Do", frequency: 261.63 }),
    Object.freeze({ id: "re", label: "Re", frequency: 293.66 }),
    Object.freeze({ id: "mi", label: "Mi", frequency: 329.63 }),
    Object.freeze({ id: "fa", label: "Fa", frequency: 349.23 }),
    Object.freeze({ id: "sol", label: "Sol", frequency: 392.0 }),
    Object.freeze({ id: "la", label: "La", frequency: 440.0 }),
    Object.freeze({ id: "ti", label: "Ti", frequency: 493.88 })
  ]);
  const state = {
    sequence: [],
    isPlaying: false,
    audioContext: null
  };
  window.LittleEnglishGamesCatalogAugmenters = window.LittleEnglishGamesCatalogAugmenters || [];
  window.LittleEnglishGamesRouteHandlers = window.LittleEnglishGamesRouteHandlers || [];
  window.LittleEnglishGamesCatalogAugmenters.push(addCatalogCard);
  window.LittleEnglishGamesRouteHandlers.push(handleRoute);
  document.addEventListener("DOMContentLoaded", () => {
    ensureScreen();
    syncVisibility();
  });
  window.addEventListener("hashchange", syncVisibility);
  function addCatalogCard(container) {
    if (container.querySelector('[data-game-id="free-piano"]')) {
      return;
    }
    const button = document.createElement("button");
    button.className = "catalog-card";
    button.type = "button";
    button.dataset.gameId = "free-piano";
    button.style.borderColor = "#8b5cf6";
    button.setAttribute("aria-label", "Free Piano. Make a song and play it back.");
    button.innerHTML = `
      <div class="catalog-emoji-row" aria-hidden="true">🎹 🎵 🔁</div>
      <div class="catalog-title-row">
        <h2>Free Piano</h2>
        <span class="status-badge unfinished">Play</span>
      </div>
      <p>Tap Do Re Mi keys, then play your song back.</p>
      <p>Make music</p>
    `;
    button.addEventListener("click", () => {
      window.location.hash = ROUTE;
    });
    container.append(button);
  }
  function handleRoute(hash) {
    if (hash !== ROUTE) {
      return false;
    }
    ensureScreen();
    showScreen();
    return true;
  }
  function ensureScreen() {
    if (document.getElementById("free-piano-screen")) {
      return;
    }
    const screen = document.createElement("section");
    screen.id = "free-piano-screen";
    screen.className = "screen game-screen free-play-piano-screen";
    screen.setAttribute("aria-labelledby", "free-piano-title");
    screen.innerHTML = `
      <div class="parent-exit" aria-label="Hold to return to games"></div>
      <header class="game-header">
        <div>
          <p class="eyebrow">Free Piano</p>
          <h1 id="free-piano-title">Make a song</h1>
        </div>
        <div class="header-actions">
          <button id="free-piano-back-button" class="soft-button" type="button">Game catalog</button>
          <div id="free-piano-progress" class="progress-pill">0 notes</div>
        </div>
      </header>
      <div class="free-piano-stage">
        <div class="card free-piano-picture-card" aria-label="Piano picture">
          <span class="free-piano-picture" aria-hidden="true">🎹</span>
        </div>
        <p id="free-piano-sequence" class="free-piano-sequence">Tap keys to make a song.</p>
        <div class="free-piano-actions">
          <button id="free-piano-play-button" class="soft-button" type="button">Play</button>
          <button id="free-piano-clear-button" class="soft-button" type="button">Clear</button>
        </div>
      </div>
      <div id="free-piano-keyboard" class="free-piano-keyboard" aria-label="Piano keys"></div>
    `;
    document.querySelector("main.app-shell").append(screen);
    screen.querySelector("#free-piano-back-button").addEventListener("click", () => {
      window.location.hash = "#/catalog";
      window.setTimeout(() => speakText("game catalog"), 60);
    });
    screen.querySelector("#free-piano-play-button").addEventListener("click", playSequence);
    screen.querySelector("#free-piano-clear-button").addEventListener("click", clearSequence);
    renderKeyboard();
    renderSequence();
  }
  function syncVisibility() {
    if (window.location.hash === ROUTE) {
      showScreen();
      return;
    }
    hideScreen();
  }
  function showScreen() {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.toggle("screen-active", screen.id === "free-piano-screen");
    });
    document.body.classList.add("is-game-active");
  }
  function hideScreen() {
    const screen = document.getElementById("free-piano-screen");
    if (screen) {
      screen.classList.remove("screen-active");
    }
  }
  function renderKeyboard(activeNoteId = "") {
    const keyboard = document.getElementById("free-piano-keyboard");
    if (!keyboard) {
      return;
    }
    keyboard.replaceChildren(...NOTES.map((note) => createKey(note, activeNoteId)));
  }
  function createKey(note, activeNoteId) {
    const button = document.createElement("button");
    button.className = `free-piano-key ${note.id === activeNoteId ? "is-playing" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", note.label);
    button.innerHTML = `
      <span class="free-piano-note">${note.label}</span>
      <span class="free-piano-name">${note.id}</span>
    `;
    button.addEventListener("click", () => handleKeyClick(note));
    return button;
  }
  function handleKeyClick(note) {
    if (state.isPlaying) {
      return;
    }
    state.sequence.push(note.id);
    playNote(note);
    renderKeyboard(note.id);
    window.setTimeout(() => renderKeyboard(), NOTE_DURATION_MS);
    renderSequence();
  }
  async function playSequence() {
    if (state.isPlaying || state.sequence.length === 0) {
      return;
    }
    state.isPlaying = true;
    for (const noteId of state.sequence) {
      const note = getNote(noteId);
      renderKeyboard(noteId);
      playNote(note);
      await wait(NOTE_DURATION_MS + NOTE_GAP_MS);
    }
    renderKeyboard();
    state.isPlaying = false;
  }
  function clearSequence() {
    if (state.isPlaying) {
      return;
    }
    state.sequence = [];
    renderKeyboard();
    renderSequence();
    speakText("clear");
  }
  function renderSequence() {
    const sequenceText = document.getElementById("free-piano-sequence");
    const progress = document.getElementById("free-piano-progress");
    if (!sequenceText || !progress) {
      return;
    }
    const labels = state.sequence.map((noteId) => getNote(noteId).label);
    sequenceText.textContent = labels.length > 0 ? labels.join(" · ") : "Tap keys to make a song.";
    progress.textContent = `${state.sequence.length} notes`;
  }
  function getNote(noteId) {
    return NOTES.find((note) => note.id === noteId) || NOTES[0];
  }
  function playNote(note) {
    const audioContext = getAudioContext();
    if (!audioContext) {
      return;
    }
    playPianoTone({ audioContext, frequency: note.frequency, startTime: audioContext.currentTime });
  }
  function playPianoTone(options) {
    const harmonics = [
      { ratio: 1, gain: 0.34, type: "triangle" },
      { ratio: 2, gain: 0.13, type: "sine" },
      { ratio: 3, gain: 0.055, type: "sine" }
    ];
    harmonics.forEach((harmonic) => {
      playPianoPartial({
        audioContext: options.audioContext,
        frequency: options.frequency * harmonic.ratio,
        startTime: options.startTime,
        gainValue: harmonic.gain,
        oscillatorType: harmonic.type
      });
    });
  }
  function playPianoPartial(options) {
    const duration = 0.9;
    const oscillator = options.audioContext.createOscillator();
    const gain = options.audioContext.createGain();
    oscillator.type = options.oscillatorType;
    oscillator.frequency.value = options.frequency;
    gain.gain.setValueAtTime(0.0001, options.startTime);
    gain.gain.exponentialRampToValueAtTime(options.gainValue, options.startTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(options.gainValue * 0.32, options.startTime + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, options.startTime + duration);
    oscillator.connect(gain);
    gain.connect(options.audioContext.destination);
    oscillator.start(options.startTime);
    oscillator.stop(options.startTime + duration + 0.04);
  }
  function getAudioContext() {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextConstructor) {
      return null;
    }
    if (!state.audioContext) {
      state.audioContext = new AudioContextConstructor();
    }
    return state.audioContext;
  }
  function speakText(text) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  function wait(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  }
})();
