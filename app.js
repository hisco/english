(function initializeApplication() {
  "use strict";
  const PACKS = Object.freeze([
    Object.freeze({
      id: "farm-animals",
      title: "Farm Animals",
      color: "#facc15",
      words: Object.freeze([
        Object.freeze({ word: "cow", emoji: "🐮" }),
        Object.freeze({ word: "pig", emoji: "🐷" }),
        Object.freeze({ word: "sheep", emoji: "🐑" }),
        Object.freeze({ word: "horse", emoji: "🐴" }),
        Object.freeze({ word: "chicken", emoji: "🐔" })
      ])
    }),
    Object.freeze({
      id: "wild-animals",
      title: "Wild Animals",
      color: "#fb7185",
      words: Object.freeze([
        Object.freeze({ word: "monkey", emoji: "🐵" }),
        Object.freeze({ word: "lion", emoji: "🦁" }),
        Object.freeze({ word: "tiger", emoji: "🐯" }),
        Object.freeze({ word: "elephant", emoji: "🐘" }),
        Object.freeze({ word: "zebra", emoji: "🦓" })
      ])
    }),
    Object.freeze({
      id: "vehicles",
      title: "Vehicles",
      color: "#38bdf8",
      words: Object.freeze([
        Object.freeze({ word: "tractor", emoji: "🚜" }),
        Object.freeze({ word: "car", emoji: "🚗" }),
        Object.freeze({ word: "bus", emoji: "🚌" }),
        Object.freeze({ word: "train", emoji: "🚂" }),
        Object.freeze({ word: "rocket", emoji: "🚀" })
      ])
    }),
    Object.freeze({
      id: "food",
      title: "Food",
      color: "#4ade80",
      words: Object.freeze([
        Object.freeze({ word: "apple", emoji: "🍎" }),
        Object.freeze({ word: "banana", emoji: "🍌" }),
        Object.freeze({ word: "pizza", emoji: "🍕" }),
        Object.freeze({ word: "bread", emoji: "🍞" }),
        Object.freeze({ word: "cookie", emoji: "🍪" })
      ])
    }),
    Object.freeze({
      id: "dinosaurs",
      title: "Dinosaurs",
      color: "#a3e635",
      words: Object.freeze([
        Object.freeze({ word: "dinosaur", emoji: "🦕" }),
        Object.freeze({ word: "t-rex", emoji: "🦖" }),
        Object.freeze({ word: "egg", emoji: "🥚" }),
        Object.freeze({ word: "volcano", emoji: "🌋" }),
        Object.freeze({ word: "bone", emoji: "🦴" })
      ])
    }),
    Object.freeze({
      id: "ocean",
      title: "Ocean",
      color: "#60a5fa",
      words: Object.freeze([
        Object.freeze({ word: "fish", emoji: "🐟" }),
        Object.freeze({ word: "whale", emoji: "🐳" }),
        Object.freeze({ word: "octopus", emoji: "🐙" }),
        Object.freeze({ word: "crab", emoji: "🦀" }),
        Object.freeze({ word: "shell", emoji: "🐚" })
      ])
    }),
    Object.freeze({
      id: "pets",
      title: "Pets",
      color: "#c084fc",
      words: Object.freeze([
        Object.freeze({ word: "dog", emoji: "🐶" }),
        Object.freeze({ word: "cat", emoji: "🐱" }),
        Object.freeze({ word: "rabbit", emoji: "🐰" }),
        Object.freeze({ word: "bird", emoji: "🐦" }),
        Object.freeze({ word: "turtle", emoji: "🐢" })
      ])
    }),
    Object.freeze({
      id: "toys",
      title: "Toys",
      color: "#f472b6",
      words: Object.freeze([
        Object.freeze({ word: "ball", emoji: "⚽" }),
        Object.freeze({ word: "blocks", emoji: "🧱" }),
        Object.freeze({ word: "kite", emoji: "🪁" }),
        Object.freeze({ word: "teddy bear", emoji: "🧸" }),
        Object.freeze({ word: "balloon", emoji: "🎈" })
      ])
    }),
    Object.freeze({
      id: "nature",
      title: "Nature",
      color: "#34d399",
      words: Object.freeze([
        Object.freeze({ word: "tree", emoji: "🌳" }),
        Object.freeze({ word: "flower", emoji: "🌼" }),
        Object.freeze({ word: "sun", emoji: "☀️" }),
        Object.freeze({ word: "moon", emoji: "🌙" }),
        Object.freeze({ word: "rainbow", emoji: "🌈" })
      ])
    }),
    Object.freeze({
      id: "home",
      title: "At Home",
      color: "#fb923c",
      words: Object.freeze([
        Object.freeze({ word: "bed", emoji: "🛏️" }),
        Object.freeze({ word: "chair", emoji: "🪑" }),
        Object.freeze({ word: "book", emoji: "📘" }),
        Object.freeze({ word: "bath", emoji: "🛁" }),
        Object.freeze({ word: "lamp", emoji: "💡" })
      ])
    })
  ]);
  const CHOICE_COUNT = 4;
  const WORDS_PER_PACK = 5;
  const LEVELS_PER_PACK = 2;
  const SCENARIOS_PER_PACK = WORDS_PER_PACK * LEVELS_PER_PACK;
  const TOTAL_SCENARIOS = PACKS.length * SCENARIOS_PER_PACK;
  const EXIT_HOLD_MS = 1600;
  const REVEAL_REPEAT_DELAY_MS = 700;
  const NEXT_SCENARIO_DELAY_MS = 350;
  const SPEECH_FALLBACK_MS = 1200;
  const STORAGE_KEY = "say-find-english-progress";
  const state = {
    currentPackIndex: 0,
    currentScenarioIndex: 0,
    hasRevealedChoices: false,
    isAdvancing: false,
    exitTimerId: 0,
    audioContext: null
  };
  const elements = {
    pickerScreen: document.getElementById("picker-screen"),
    gameScreen: document.getElementById("game-screen"),
    packGrid: document.getElementById("pack-grid"),
    promptCard: document.getElementById("prompt-card"),
    choiceGrid: document.getElementById("choice-grid"),
    helperText: document.getElementById("helper-text"),
    packTheme: document.getElementById("pack-theme"),
    gameProgress: document.getElementById("game-progress"),
    parentExit: document.getElementById("parent-exit")
  };
  const progress = loadProgress();
  renderPackPicker();
  bindEvents();
  registerServiceWorker();
  function bindEvents() {
    elements.promptCard.addEventListener("click", handlePromptCardClick);
    elements.parentExit.addEventListener("pointerdown", startParentExitHold);
    elements.parentExit.addEventListener("pointerup", cancelParentExitHold);
    elements.parentExit.addEventListener("pointercancel", cancelParentExitHold);
    elements.parentExit.addEventListener("pointerleave", cancelParentExitHold);
  }
  function renderPackPicker() {
    elements.packGrid.replaceChildren(...PACKS.map((pack, packIndex) => createPackCard(pack, packIndex)));
    showScreen("picker");
  }
  function createPackCard(pack, packIndex) {
    const button = document.createElement("button");
    const isCompleted = progress.completedPackIds.includes(pack.id);
    button.className = "pack-card";
    button.type = "button";
    button.style.borderColor = pack.color;
    button.setAttribute("aria-label", `${pack.title}. ${isCompleted ? "Finished" : "Not finished yet"}.`);
    button.addEventListener("click", () => startPack(packIndex));
    button.innerHTML = `
      <div class="pack-emoji-row" aria-hidden="true">${pack.words.map((item) => item.emoji).join(" ")}</div>
      <div class="pack-title-row">
        <h2>${pack.title}</h2>
        <span class="status-badge ${isCompleted ? "" : "unfinished"}">${isCompleted ? "Done" : "Play"}</span>
      </div>
      <p>5 picture rounds + 5 listening rounds</p>
    `;
    return button;
  }
  function startPack(packIndex) {
    state.currentPackIndex = packIndex;
    state.currentScenarioIndex = 0;
    state.isAdvancing = false;
    showScreen("game");
    renderScenario();
  }
  function renderScenario() {
    const pack = getCurrentPack();
    const scenario = getCurrentScenario();
    state.hasRevealedChoices = false;
    state.isAdvancing = false;
    elements.packTheme.textContent = pack.title;
    elements.gameProgress.textContent = `${state.currentScenarioIndex + 1} / ${SCENARIOS_PER_PACK}`;
    elements.promptCard.style.borderColor = pack.color;
    elements.promptCard.setAttribute("aria-label", `Hear ${scenario.word}`);
    elements.promptCard.replaceChildren(createPromptContent(scenario));
    elements.choiceGrid.replaceChildren();
    elements.helperText.textContent = scenario.hasPicture ? "Tap the big card to hear the word." : "Tap the big sound card, then find the word.";
  }
  function createPromptContent(scenario) {
    const fragment = document.createDocumentFragment();
    const icon = document.createElement("span");
    const label = document.createElement("span");
    icon.className = scenario.hasPicture ? "emoji" : "sound-only";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = scenario.hasPicture ? scenario.emoji : "🔊";
    label.className = "word-label";
    label.textContent = scenario.word;
    fragment.append(icon, label);
    return fragment;
  }
  function handlePromptCardClick() {
    const scenario = getCurrentScenario();
    void speakWord(scenario.word);
    if (state.hasRevealedChoices) {
      return;
    }
    state.hasRevealedChoices = true;
    elements.helperText.textContent = "Tap the cards. Every card speaks.";
    renderChoices(scenario);
    window.setTimeout(() => {
      void speakWord(scenario.word);
    }, REVEAL_REPEAT_DELAY_MS);
  }
  function renderChoices(scenario) {
    const choices = createChoices(scenario);
    const choiceCards = choices.map((choice) => createChoiceCard(choice, scenario.word));
    elements.choiceGrid.replaceChildren(...choiceCards);
  }
  function createChoices(scenario) {
    const otherWords = getAllWords().filter((item) => item.word !== scenario.word);
    const shuffledOthers = shuffleItems(otherWords).slice(0, CHOICE_COUNT - 1);
    return shuffleItems([scenario, ...shuffledOthers]);
  }
  function createChoiceCard(choice, answerWord) {
    const button = document.createElement("button");
    button.className = "card choice-card";
    button.type = "button";
    button.setAttribute("aria-label", choice.word);
    button.innerHTML = `
      <span class="emoji" aria-hidden="true">${choice.emoji}</span>
      <span class="word-label">${choice.word}</span>
    `;
    button.addEventListener("click", () => handleChoiceClick(choice, answerWord, button));
    return button;
  }
  async function handleChoiceClick(choice, answerWord, button) {
    if (state.isAdvancing) {
      return;
    }
    if (choice.word !== answerWord) {
      await speakWord(choice.word);
      return;
    }
    state.isAdvancing = true;
    button.classList.add("is-found");
    await speakWord(choice.word);
    playHappySound();
    window.setTimeout(advanceScenario, NEXT_SCENARIO_DELAY_MS);
  }
  function advanceScenario() {
    const isPackFinished = state.currentScenarioIndex + 1 >= SCENARIOS_PER_PACK;
    if (isPackFinished) {
      completeCurrentPack();
      renderPackPicker();
      return;
    }
    state.currentScenarioIndex += 1;
    renderScenario();
  }
  function completeCurrentPack() {
    const pack = getCurrentPack();
    if (!progress.completedPackIds.includes(pack.id)) {
      progress.completedPackIds.push(pack.id);
      saveProgress(progress);
    }
  }
  function getCurrentPack() {
    return PACKS[state.currentPackIndex];
  }
  function getCurrentScenario() {
    const pack = getCurrentPack();
    const wordIndex = state.currentScenarioIndex % WORDS_PER_PACK;
    const hasPicture = state.currentScenarioIndex < WORDS_PER_PACK;
    const wordItem = pack.words[wordIndex];
    return Object.freeze({ word: wordItem.word, emoji: wordItem.emoji, hasPicture });
  }
  function getAllWords() {
    return PACKS.flatMap((pack) => pack.words);
  }
  function shuffleItems(items) {
    const shuffledItems = [...items];
    for (let i = shuffledItems.length - 1; i > 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const currentItem = shuffledItems[i];
      shuffledItems[i] = shuffledItems[randomIndex];
      shuffledItems[randomIndex] = currentItem;
    }
    return shuffledItems;
  }
  function speakWord(word) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      return Promise.resolve();
    }
    window.speechSynthesis.cancel();
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(word);
      let hasResolved = false;
      utterance.lang = "en-US";
      utterance.rate = 0.82;
      utterance.pitch = 1.15;
      utterance.volume = 1;
      const resolveOnce = () => {
        if (hasResolved) {
          return;
        }
        hasResolved = true;
        resolve();
      };
      utterance.onend = resolveOnce;
      utterance.onerror = resolveOnce;
      window.setTimeout(resolveOnce, SPEECH_FALLBACK_MS);
      window.speechSynthesis.speak(utterance);
    });
  }
  function playHappySound() {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextConstructor) {
      return;
    }
    if (!state.audioContext) {
      state.audioContext = new AudioContextConstructor();
    }
    const audioContext = state.audioContext;
    const startTime = audioContext.currentTime;
    [523.25, 659.25, 783.99].forEach((frequency, index) => {
      playTone({ audioContext, frequency, startTime: startTime + index * 0.12 });
    });
  }
  function playTone(options) {
    const oscillator = options.audioContext.createOscillator();
    const gain = options.audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = options.frequency;
    gain.gain.setValueAtTime(0.0001, options.startTime);
    gain.gain.exponentialRampToValueAtTime(0.22, options.startTime + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, options.startTime + 0.18);
    oscillator.connect(gain);
    gain.connect(options.audioContext.destination);
    oscillator.start(options.startTime);
    oscillator.stop(options.startTime + 0.2);
  }
  function showScreen(screenName) {
    const isPicker = screenName === "picker";
    elements.pickerScreen.classList.toggle("screen-active", isPicker);
    elements.gameScreen.classList.toggle("screen-active", !isPicker);
    if (isPicker) {
      window.speechSynthesis?.cancel();
    }
  }
  function startParentExitHold(event) {
    event.preventDefault();
    elements.parentExit.classList.add("is-holding");
    state.exitTimerId = window.setTimeout(() => {
      cancelParentExitHold();
      renderPackPicker();
    }, EXIT_HOLD_MS);
  }
  function cancelParentExitHold() {
    elements.parentExit.classList.remove("is-holding");
    window.clearTimeout(state.exitTimerId);
    state.exitTimerId = 0;
  }
  function loadProgress() {
    try {
      const savedValue = window.localStorage.getItem(STORAGE_KEY);
      const parsedValue = savedValue ? JSON.parse(savedValue) : null;
      const completedPackIds = Array.isArray(parsedValue?.completedPackIds) ? parsedValue.completedPackIds : [];
      return { completedPackIds: completedPackIds.filter((packId) => PACKS.some((pack) => pack.id === packId)) };
    } catch (err) {
      return { completedPackIds: [] };
    }
  }
  function saveProgress(nextProgress) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProgress));
  }
  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }
    window.addEventListener("load", () => {
      void navigator.serviceWorker.register("./service-worker.js");
    });
  }
  window.SayFindEnglishGame = Object.freeze({
    getPackCount: () => PACKS.length,
    getScenarioCount: () => TOTAL_SCENARIOS
  });
})();
