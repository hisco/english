(function initializeApplication() {
  "use strict";
  const SAY_FIND_PACKS = Object.freeze([
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
  const BAG_ROUNDS = Object.freeze([
    Object.freeze({ word: "book", emoji: "📘" }),
    Object.freeze({ word: "apple", emoji: "🍎" }),
    Object.freeze({ word: "teddy bear", emoji: "🧸" }),
    Object.freeze({ word: "ball", emoji: "⚽" }),
    Object.freeze({ word: "cookie", emoji: "🍪" }),
    Object.freeze({ word: "banana", emoji: "🍌" }),
    Object.freeze({ word: "blocks", emoji: "🧱" }),
    Object.freeze({ word: "kite", emoji: "🪁" }),
    Object.freeze({ word: "lamp", emoji: "💡" }),
    Object.freeze({ word: "car", emoji: "🚗" })
  ]);
  const ACTION_BASE_ROUNDS = Object.freeze([
    Object.freeze({ phrase: "dog runs", noun: "dog", verb: "runs", nounEmoji: "🐶", verbEmoji: "🏃" }),
    Object.freeze({ phrase: "cat sleeps", noun: "cat", verb: "sleeps", nounEmoji: "🐱", verbEmoji: "💤" }),
    Object.freeze({ phrase: "bird sings", noun: "bird", verb: "sings", nounEmoji: "🐦", verbEmoji: "🎵" }),
    Object.freeze({ phrase: "fish swims", noun: "fish", verb: "swims", nounEmoji: "🐟", verbEmoji: "🌊" }),
    Object.freeze({ phrase: "monkey eats", noun: "monkey", verb: "eats", nounEmoji: "🐵", verbEmoji: "🍌" })
  ]);
  const NUMBER_ROUNDS = Object.freeze([
    Object.freeze({ number: 1, word: "one" }),
    Object.freeze({ number: 2, word: "two" }),
    Object.freeze({ number: 3, word: "three" }),
    Object.freeze({ number: 4, word: "four" }),
    Object.freeze({ number: 5, word: "five" }),
    Object.freeze({ number: 6, word: "six" }),
    Object.freeze({ number: 7, word: "seven" }),
    Object.freeze({ number: 8, word: "eight" }),
    Object.freeze({ number: 9, word: "nine" }),
    Object.freeze({ number: 10, word: "ten" })
  ]);
  const MEMORY_CODES = Object.freeze([
    Object.freeze([1, 2, 3, 4]),
    Object.freeze([2, 5, 8, 0]),
    Object.freeze([3, 1, 4, 2]),
    Object.freeze([6, 7, 8, 9]),
    Object.freeze([9, 0, 1, 2])
  ]);
  const MEMORY_KEYPAD_NUMBERS = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  const MEMORY_MODES = Object.freeze({ visible: "visible", hidden: "hidden" });
  const CHOICE_COUNT = 4;
  const WORDS_PER_PACK = 5;
  const LEVELS_PER_PACK = 2;
  const SAY_FIND_SCENARIOS_PER_PACK = WORDS_PER_PACK * LEVELS_PER_PACK;
  const SAY_FIND_TOTAL_SCENARIOS = SAY_FIND_PACKS.length * SAY_FIND_SCENARIOS_PER_PACK;
  const ACTION_SCENARIOS_PER_GAME = ACTION_BASE_ROUNDS.length * LEVELS_PER_PACK;
  const NUMBER_SCENARIOS_PER_GAME = NUMBER_ROUNDS.length;
  const MEMORY_CODE_LENGTH = 4;
  const MEMORY_PEEK_MS = 2500;
  const EXIT_HOLD_MS = 1600;
  const NEXT_SCENARIO_DELAY_MS = 350;
  const SPEECH_FALLBACK_MS = 1200;
  const STORAGE_KEY = "little-english-games-progress";
  const LEGACY_STORAGE_KEY = "say-find-english-progress";
  const ROUTES = Object.freeze({
    catalog: "#/catalog",
    sayFindPacks: "#/say-find",
    packBag: "#/pack-my-bag",
    actionGame: "#/who-is-doing-it",
    numberGame: "#/numbers",
    memoryLock: "#/memory-lock",
    memoryLockHidden: "#/memory-lock-hidden"
  });
  const GAMES = Object.freeze([
    Object.freeze({
      id: "say-find",
      title: "Say & Find",
      emoji: "🐵 🚜 🍎",
      color: "#7c3aed",
      description: "Hear a word, tap cards, and find the matching picture.",
      actionLabel: "Choose packs"
    }),
    Object.freeze({
      id: "pack-my-bag",
      title: "Pack My Bag",
      emoji: "🎒 📘 🍎",
      color: "#22c55e",
      description: "Hear what to pack, explore every card, and put the right thing in the bag.",
      actionLabel: "Start packing"
    }),
    Object.freeze({
      id: "who-is-doing-it",
      title: "Who Is Doing It?",
      emoji: "🐶 🏃 🎵",
      color: "#38bdf8",
      description: "Listen for a noun and a verb, then find who is doing the action.",
      actionLabel: "Hear actions"
    }),
    Object.freeze({
      id: "number-find",
      title: "Number Find",
      emoji: "1 2 3",
      color: "#f97316",
      description: "Hear numbers and find them in order from 1 to 10.",
      actionLabel: "Count 1 to 10"
    }),
    Object.freeze({
      id: "memory-lock",
      title: "Memory Lock",
      emoji: "🔒 1 2",
      color: "#f59e0b",
      description: "Look at a four-number lock code and type it back to open the lock.",
      actionLabel: "Open locks"
    }),
    Object.freeze({
      id: "memory-lock-hidden",
      title: "Memory Lock Plus",
      emoji: "🔒 ? 4",
      color: "#ef4444",
      description: "Peek at the code, remember the hidden number, and type all four numbers.",
      actionLabel: "Try hidden code"
    })
  ]);
  const state = {
    sayFindPackIndex: 0,
    sayFindScenarioIndex: 0,
    hasRevealedSayFindChoices: false,
    hasRevealedBagChoices: false,
    hasRevealedActionChoices: false,
    hasRevealedNumberChoices: false,
    isAdvancing: false,
    bagScenarioIndex: 0,
    actionScenarioIndex: 0,
    numberScenarioIndex: 0,
    memoryLockIndex: 0,
    memoryMode: MEMORY_MODES.visible,
    memoryInput: [],
    isMemoryCodeVisible: true,
    isMemoryOpen: false,
    memoryPeekTimerId: 0,
    exitTimerId: 0,
    audioContext: null
  };
  const elements = {
    catalogScreen: document.getElementById("catalog-screen"),
    packPickerScreen: document.getElementById("pack-picker-screen"),
    sayFindScreen: document.getElementById("say-find-screen"),
    packBagScreen: document.getElementById("pack-bag-screen"),
    gameCatalog: document.getElementById("game-catalog"),
    catalogBackButton: document.getElementById("catalog-back-button"),
    packGrid: document.getElementById("pack-grid"),
    sayFindBackButton: document.getElementById("say-find-back-button"),
    sayFindPromptCard: document.getElementById("say-find-prompt-card"),
    sayFindChoiceGrid: document.getElementById("say-find-choice-grid"),
    sayFindHelperText: document.getElementById("say-find-helper-text"),
    sayFindPackTheme: document.getElementById("say-find-pack-theme"),
    sayFindProgress: document.getElementById("say-find-progress"),
    sayFindParentExit: document.getElementById("say-find-parent-exit"),
    packBagBackButton: document.getElementById("pack-bag-back-button"),
    packBagPromptCard: document.getElementById("pack-bag-prompt-card"),
    packBagPromptLabel: document.getElementById("pack-bag-prompt-label"),
    packBagChoiceGrid: document.getElementById("pack-bag-choice-grid"),
    packBagHelperText: document.getElementById("pack-bag-helper-text"),
    packBagProgress: document.getElementById("pack-bag-progress"),
    packBagParentExit: document.getElementById("pack-bag-parent-exit"),
    actionGameScreen: document.getElementById("action-game-screen"),
    actionGameBackButton: document.getElementById("action-game-back-button"),
    actionGamePromptCard: document.getElementById("action-game-prompt-card"),
    actionGameChoiceGrid: document.getElementById("action-game-choice-grid"),
    actionGameHelperText: document.getElementById("action-game-helper-text"),
    actionGameProgress: document.getElementById("action-game-progress"),
    actionGameParentExit: document.getElementById("action-game-parent-exit"),
    numberGameScreen: document.getElementById("number-game-screen"),
    numberGameBackButton: document.getElementById("number-game-back-button"),
    numberGamePromptCard: document.getElementById("number-game-prompt-card"),
    numberGameChoiceGrid: document.getElementById("number-game-choice-grid"),
    numberGameHelperText: document.getElementById("number-game-helper-text"),
    numberGameProgress: document.getElementById("number-game-progress"),
    numberGameParentExit: document.getElementById("number-game-parent-exit"),
    memoryLockScreen: document.getElementById("memory-lock-screen"),
    memoryLockBackButton: document.getElementById("memory-lock-back-button"),
    memoryLockCard: document.getElementById("memory-lock-card"),
    memoryLockIcon: document.getElementById("memory-lock-icon"),
    memoryLockStatus: document.getElementById("memory-lock-status"),
    memoryLockEyebrow: document.getElementById("memory-lock-eyebrow"),
    memoryLockTitle: document.getElementById("memory-lock-title"),
    memoryLockProgress: document.getElementById("memory-lock-progress"),
    memoryCodeDisplay: document.getElementById("memory-code-display"),
    memoryInputDisplay: document.getElementById("memory-input-display"),
    memoryLockHelperText: document.getElementById("memory-lock-helper-text"),
    memoryKeypad: document.getElementById("memory-keypad"),
    memoryLockParentExit: document.getElementById("memory-lock-parent-exit")
  };
  const progress = loadProgress();
  bindEvents();
  renderCurrentRoute();
  registerServiceWorker();
  function bindEvents() {
    elements.catalogBackButton.addEventListener("click", () => navigateTo(ROUTES.catalog));
    elements.sayFindBackButton.addEventListener("click", () => navigateTo(ROUTES.sayFindPacks));
    elements.packBagBackButton.addEventListener("click", () => navigateTo(ROUTES.catalog));
    elements.actionGameBackButton.addEventListener("click", () => navigateTo(ROUTES.catalog));
    elements.numberGameBackButton.addEventListener("click", () => navigateTo(ROUTES.catalog));
    elements.memoryLockBackButton.addEventListener("click", () => navigateTo(ROUTES.catalog));
    elements.sayFindPromptCard.addEventListener("click", handleSayFindPromptClick);
    elements.packBagPromptCard.addEventListener("click", handlePackBagPromptClick);
    elements.actionGamePromptCard.addEventListener("click", handleActionPromptClick);
    elements.numberGamePromptCard.addEventListener("click", handleNumberPromptClick);
    elements.memoryLockCard.addEventListener("click", handleMemoryLockClick);
    window.addEventListener("hashchange", renderCurrentRoute);
    bindParentExit(elements.sayFindParentExit, () => navigateTo(ROUTES.sayFindPacks));
    bindParentExit(elements.packBagParentExit, () => navigateTo(ROUTES.catalog));
    bindParentExit(elements.actionGameParentExit, () => navigateTo(ROUTES.catalog));
    bindParentExit(elements.numberGameParentExit, () => navigateTo(ROUTES.catalog));
    bindParentExit(elements.memoryLockParentExit, () => navigateTo(ROUTES.catalog));
  }
  function bindParentExit(element, exitHandler) {
    element.addEventListener("pointerdown", (event) => startParentExitHold(event, element, exitHandler));
    element.addEventListener("pointerup", () => cancelParentExitHold(element));
    element.addEventListener("pointercancel", () => cancelParentExitHold(element));
    element.addEventListener("pointerleave", () => cancelParentExitHold(element));
  }
  function renderCurrentRoute() {
    const hash = window.location.hash || ROUTES.catalog;
    if (!window.location.hash) {
      navigateTo(ROUTES.catalog, { replace: true });
      return;
    }
    if (hash === ROUTES.catalog || hash === "#/") {
      renderCatalog();
      return;
    }
    if (hash === ROUTES.sayFindPacks) {
      renderPackPicker();
      return;
    }
    if (hash.startsWith(`${ROUTES.sayFindPacks}/`)) {
      startSayFindPack(getSayFindPackIndexFromRoute(hash));
      return;
    }
    if (hash === ROUTES.packBag) {
      startPackBagGame();
      return;
    }
    if (hash === ROUTES.actionGame) {
      startActionGame();
      return;
    }
    if (hash === ROUTES.numberGame) {
      startNumberGame();
      return;
    }
    if (hash === ROUTES.memoryLock) {
      startMemoryLockGame(MEMORY_MODES.visible);
      return;
    }
    if (hash === ROUTES.memoryLockHidden) {
      startMemoryLockGame(MEMORY_MODES.hidden);
      return;
    }
    navigateTo(ROUTES.catalog, { replace: true });
  }
  function navigateTo(hash, options = {}) {
    if (window.location.hash === hash) {
      renderCurrentRoute();
      return;
    }
    if (options.replace) {
      window.history.replaceState(null, "", hash);
      renderCurrentRoute();
      return;
    }
    window.location.hash = hash;
  }
  function getSayFindPackRoute(packIndex) {
    return `${ROUTES.sayFindPacks}/${packIndex}`;
  }
  function getSayFindPackIndexFromRoute(hash) {
    const packIndex = Number(hash.replace(`${ROUTES.sayFindPacks}/`, ""));
    if (Number.isInteger(packIndex) && packIndex >= 0 && packIndex < SAY_FIND_PACKS.length) {
      return packIndex;
    }
    return 0;
  }
  function renderCatalog() {
    elements.gameCatalog.replaceChildren(...GAMES.map(createCatalogCard));
    showScreen("catalog");
  }
  function createCatalogCard(game) {
    const button = document.createElement("button");
    const isCompleted = progress.completedGameIds.includes(game.id);
    button.className = "catalog-card";
    button.type = "button";
    button.style.borderColor = game.color;
    button.setAttribute("aria-label", `${game.title}. ${game.description}`);
    button.addEventListener("click", () => navigateToGame(game.id));
    button.innerHTML = `
      <div class="catalog-emoji-row" aria-hidden="true">${game.emoji}</div>
      <div class="catalog-title-row">
        <h2>${game.title}</h2>
        <span class="status-badge ${isCompleted ? "" : "unfinished"}">${isCompleted ? "Done" : "Play"}</span>
      </div>
      <p>${game.description}</p>
      <p>${game.actionLabel}</p>
    `;
    return button;
  }
  function navigateToGame(gameId) {
    if (gameId === "say-find") {
      navigateTo(ROUTES.sayFindPacks);
      return;
    }
    if (gameId === "pack-my-bag") {
      navigateTo(ROUTES.packBag);
      return;
    }
    if (gameId === "who-is-doing-it") {
      navigateTo(ROUTES.actionGame);
      return;
    }
    if (gameId === "number-find") {
      navigateTo(ROUTES.numberGame);
      return;
    }
    if (gameId === "memory-lock") {
      navigateTo(ROUTES.memoryLock);
      return;
    }
    navigateTo(ROUTES.memoryLockHidden);
  }
  function renderPackPicker() {
    elements.packGrid.replaceChildren(...SAY_FIND_PACKS.map((pack, packIndex) => createPackCard(pack, packIndex)));
    showScreen("pack-picker");
  }
  function createPackCard(pack, packIndex) {
    const button = document.createElement("button");
    const isCompleted = progress.completedSayFindPackIds.includes(pack.id);
    button.className = "pack-card";
    button.type = "button";
    button.style.borderColor = pack.color;
    button.setAttribute("aria-label", `${pack.title}. ${isCompleted ? "Finished" : "Not finished yet"}.`);
    button.addEventListener("click", () => navigateTo(getSayFindPackRoute(packIndex)));
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
  function startSayFindPack(packIndex) {
    state.sayFindPackIndex = packIndex;
    state.sayFindScenarioIndex = 0;
    state.isAdvancing = false;
    showScreen("say-find");
    renderSayFindScenario();
  }
  function renderSayFindScenario() {
    const pack = getCurrentSayFindPack();
    const scenario = getCurrentSayFindScenario();
    state.hasRevealedSayFindChoices = false;
    state.isAdvancing = false;
    elements.sayFindPackTheme.textContent = pack.title;
    elements.sayFindProgress.textContent = `${state.sayFindScenarioIndex + 1} / ${SAY_FIND_SCENARIOS_PER_PACK}`;
    elements.sayFindPromptCard.style.borderColor = pack.color;
    elements.sayFindPromptCard.setAttribute("aria-label", `Hear ${scenario.word}`);
    elements.sayFindPromptCard.replaceChildren(createSayFindPromptContent(scenario));
    elements.sayFindChoiceGrid.replaceChildren();
    elements.sayFindHelperText.textContent = scenario.hasPicture ? "Tap the big card to hear the word." : "Tap the big sound card, then find the word.";
  }
  function createSayFindPromptContent(scenario) {
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
  function handleSayFindPromptClick() {
    const scenario = getCurrentSayFindScenario();
    void speakText(scenario.word);
    if (state.hasRevealedSayFindChoices) {
      return;
    }
    state.hasRevealedSayFindChoices = true;
    elements.sayFindHelperText.textContent = "Tap the cards. Every card speaks.";
    renderSayFindChoices(scenario);
  }
  function renderSayFindChoices(scenario) {
    const choiceCards = createSayFindChoices(scenario).map((choice) => createSayFindChoiceCard(choice, scenario.word));
    elements.sayFindChoiceGrid.replaceChildren(...choiceCards);
  }
  function createSayFindChoices(scenario) {
    const otherWords = getAllSayFindWords().filter((item) => item.word !== scenario.word);
    const shuffledOthers = shuffleItems(otherWords).slice(0, CHOICE_COUNT - 1);
    return shuffleItems([scenario, ...shuffledOthers]);
  }
  function createSayFindChoiceCard(choice, answerWord) {
    const button = document.createElement("button");
    button.className = "card choice-card";
    button.type = "button";
    button.setAttribute("aria-label", choice.word);
    button.innerHTML = `
      <span class="emoji" aria-hidden="true">${choice.emoji}</span>
      <span class="word-label">${choice.word}</span>
    `;
    button.addEventListener("click", () => handleSayFindChoiceClick(choice, answerWord, button));
    return button;
  }
  async function handleSayFindChoiceClick(choice, answerWord, button) {
    if (state.isAdvancing) {
      return;
    }
    if (choice.word !== answerWord) {
      await speakText(choice.word);
      return;
    }
    state.isAdvancing = true;
    button.classList.add("is-found");
    await speakText(choice.word);
    playHappySound();
    window.setTimeout(advanceSayFindScenario, NEXT_SCENARIO_DELAY_MS);
  }
  function advanceSayFindScenario() {
    const isPackFinished = state.sayFindScenarioIndex + 1 >= SAY_FIND_SCENARIOS_PER_PACK;
    if (isPackFinished) {
      completeSayFindPack();
      navigateTo(ROUTES.sayFindPacks);
      return;
    }
    state.sayFindScenarioIndex += 1;
    renderSayFindScenario();
  }
  function completeSayFindPack() {
    const pack = getCurrentSayFindPack();
    addUnique(progress.completedSayFindPackIds, pack.id);
    if (progress.completedSayFindPackIds.length === SAY_FIND_PACKS.length) {
      addUnique(progress.completedGameIds, "say-find");
    }
    saveProgress(progress);
  }
  function getCurrentSayFindPack() {
    return SAY_FIND_PACKS[state.sayFindPackIndex];
  }
  function getCurrentSayFindScenario() {
    const pack = getCurrentSayFindPack();
    const wordIndex = state.sayFindScenarioIndex % WORDS_PER_PACK;
    const hasPicture = state.sayFindScenarioIndex < WORDS_PER_PACK;
    const wordItem = pack.words[wordIndex];
    return Object.freeze({ word: wordItem.word, emoji: wordItem.emoji, hasPicture });
  }
  function getAllSayFindWords() {
    return SAY_FIND_PACKS.flatMap((pack) => pack.words);
  }
  function startPackBagGame() {
    state.bagScenarioIndex = 0;
    state.isAdvancing = false;
    showScreen("pack-bag");
    renderPackBagScenario();
  }
  function renderPackBagScenario() {
    const scenario = getCurrentPackBagScenario();
    state.hasRevealedBagChoices = false;
    state.isAdvancing = false;
    elements.packBagProgress.textContent = `${state.bagScenarioIndex + 1} / ${BAG_ROUNDS.length}`;
    elements.packBagPromptCard.style.borderColor = "#22c55e";
    elements.packBagPromptCard.setAttribute("aria-label", `Hear pack the ${scenario.word}`);
    elements.packBagPromptLabel.textContent = "Tap the bag";
    elements.packBagChoiceGrid.replaceChildren();
    elements.packBagHelperText.textContent = "Tap the bag to hear what to pack.";
  }
  function handlePackBagPromptClick() {
    const scenario = getCurrentPackBagScenario();
    const phrase = getPackBagPhrase(scenario.word);
    elements.packBagPromptLabel.textContent = phrase;
    void speakText(phrase);
    if (state.hasRevealedBagChoices) {
      return;
    }
    state.hasRevealedBagChoices = true;
    elements.packBagHelperText.textContent = "Tap things to hear them. Pack the right one.";
    renderPackBagChoices(scenario);
  }
  function renderPackBagChoices(scenario) {
    const choiceCards = createPackBagChoices(scenario).map((choice) => createPackBagChoiceCard(choice, scenario.word));
    elements.packBagChoiceGrid.replaceChildren(...choiceCards);
  }
  function createPackBagChoices(scenario) {
    const otherItems = getAllPackBagChoiceItems().filter((item) => item.word !== scenario.word);
    const shuffledOthers = shuffleItems(otherItems).slice(0, CHOICE_COUNT - 1);
    return shuffleItems([scenario, ...shuffledOthers]);
  }
  function createPackBagChoiceCard(choice, answerWord) {
    const button = document.createElement("button");
    button.className = "card choice-card";
    button.type = "button";
    button.setAttribute("aria-label", choice.word);
    button.innerHTML = `
      <span class="emoji" aria-hidden="true">${choice.emoji}</span>
      <span class="word-label">${choice.word}</span>
    `;
    button.addEventListener("click", () => handlePackBagChoiceClick(choice, answerWord, button));
    return button;
  }
  async function handlePackBagChoiceClick(choice, answerWord, button) {
    if (state.isAdvancing) {
      return;
    }
    if (choice.word !== answerWord) {
      await speakText(choice.word);
      return;
    }
    state.isAdvancing = true;
    button.classList.add("is-found");
    elements.packBagPromptLabel.textContent = `${choice.word} packed!`;
    await speakText(choice.word);
    playHappySound();
    window.setTimeout(advancePackBagScenario, NEXT_SCENARIO_DELAY_MS);
  }
  function advancePackBagScenario() {
    const isGameFinished = state.bagScenarioIndex + 1 >= BAG_ROUNDS.length;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, "pack-my-bag");
      saveProgress(progress);
      navigateTo(ROUTES.catalog);
      return;
    }
    state.bagScenarioIndex += 1;
    renderPackBagScenario();
  }
  function getCurrentPackBagScenario() {
    return BAG_ROUNDS[state.bagScenarioIndex];
  }
  function getPackBagPhrase(word) {
    return `Pack the ${word}`;
  }
  function getAllPackBagChoiceItems() {
    const uniqueItems = new Map();
    BAG_ROUNDS.concat(getAllSayFindWords()).forEach((item) => {
      if (!uniqueItems.has(item.word)) {
        uniqueItems.set(item.word, item);
      }
    });
    return Array.from(uniqueItems.values());
  }
  function startActionGame() {
    state.actionScenarioIndex = 0;
    state.isAdvancing = false;
    showScreen("action-game");
    renderActionScenario();
  }
  function renderActionScenario() {
    const scenario = getCurrentActionScenario();
    state.hasRevealedActionChoices = false;
    state.isAdvancing = false;
    elements.actionGameProgress.textContent = `${state.actionScenarioIndex + 1} / ${ACTION_SCENARIOS_PER_GAME}`;
    elements.actionGamePromptCard.style.borderColor = "#38bdf8";
    elements.actionGamePromptCard.setAttribute("aria-label", `Hear ${scenario.phrase}`);
    elements.actionGamePromptCard.replaceChildren(createActionPromptContent(scenario));
    elements.actionGameChoiceGrid.replaceChildren();
    elements.actionGameHelperText.textContent = scenario.hasPicture ? "Tap the big card to hear the noun and action." : "Tap the sound card, then find the action.";
  }
  function createActionPromptContent(scenario) {
    const fragment = document.createDocumentFragment();
    const icon = document.createElement("span");
    const label = document.createElement("span");
    icon.className = scenario.hasPicture ? "action-pair" : "sound-only";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = scenario.hasPicture ? `${scenario.nounEmoji} ${scenario.verbEmoji}` : "🔊";
    label.className = "word-label";
    label.textContent = scenario.phrase;
    fragment.append(icon, label);
    return fragment;
  }
  function handleActionPromptClick() {
    const scenario = getCurrentActionScenario();
    void speakText(scenario.phrase);
    if (state.hasRevealedActionChoices) {
      return;
    }
    state.hasRevealedActionChoices = true;
    elements.actionGameHelperText.textContent = "Tap each card to hear the noun and verb.";
    renderActionChoices(scenario);
  }
  function renderActionChoices(scenario) {
    const choiceCards = createActionChoices(scenario).map((choice) => createActionChoiceCard(choice, scenario.phrase));
    elements.actionGameChoiceGrid.replaceChildren(...choiceCards);
  }
  function createActionChoices(scenario) {
    const otherItems = ACTION_BASE_ROUNDS.filter((item) => item.phrase !== scenario.phrase);
    const shuffledOthers = shuffleItems(otherItems).slice(0, CHOICE_COUNT - 1);
    return shuffleItems([scenario, ...shuffledOthers]);
  }
  function createActionChoiceCard(choice, answerPhrase) {
    const button = document.createElement("button");
    button.className = "card choice-card";
    button.type = "button";
    button.setAttribute("aria-label", choice.phrase);
    button.innerHTML = `
      <span class="action-pair" aria-hidden="true">${choice.nounEmoji} ${choice.verbEmoji}</span>
      <span class="word-label">${choice.phrase}</span>
    `;
    button.addEventListener("click", () => handleActionChoiceClick(choice, answerPhrase, button));
    return button;
  }
  async function handleActionChoiceClick(choice, answerPhrase, button) {
    if (state.isAdvancing) {
      return;
    }
    if (choice.phrase !== answerPhrase) {
      await speakText(choice.phrase);
      return;
    }
    state.isAdvancing = true;
    button.classList.add("is-found");
    await speakText(choice.phrase);
    playHappySound();
    window.setTimeout(advanceActionScenario, NEXT_SCENARIO_DELAY_MS);
  }
  function advanceActionScenario() {
    const isGameFinished = state.actionScenarioIndex + 1 >= ACTION_SCENARIOS_PER_GAME;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, "who-is-doing-it");
      saveProgress(progress);
      navigateTo(ROUTES.catalog);
      return;
    }
    state.actionScenarioIndex += 1;
    renderActionScenario();
  }
  function getCurrentActionScenario() {
    const baseIndex = state.actionScenarioIndex % ACTION_BASE_ROUNDS.length;
    const hasPicture = state.actionScenarioIndex < ACTION_BASE_ROUNDS.length;
    const baseRound = ACTION_BASE_ROUNDS[baseIndex];
    return Object.freeze({
      phrase: baseRound.phrase,
      noun: baseRound.noun,
      verb: baseRound.verb,
      nounEmoji: baseRound.nounEmoji,
      verbEmoji: baseRound.verbEmoji,
      hasPicture
    });
  }
  function startNumberGame() {
    state.numberScenarioIndex = 0;
    state.isAdvancing = false;
    showScreen("number-game");
    renderNumberScenario();
  }
  function renderNumberScenario() {
    const scenario = getCurrentNumberScenario();
    state.hasRevealedNumberChoices = false;
    state.isAdvancing = false;
    elements.numberGameProgress.textContent = `${state.numberScenarioIndex + 1} / ${NUMBER_SCENARIOS_PER_GAME}`;
    elements.numberGamePromptCard.style.borderColor = "#f97316";
    elements.numberGamePromptCard.setAttribute("aria-label", `Hear ${scenario.word}`);
    elements.numberGamePromptCard.replaceChildren(createNumberCardContent(scenario));
    elements.numberGameChoiceGrid.replaceChildren();
    elements.numberGameHelperText.textContent = "Tap the big number to hear it.";
  }
  function createNumberCardContent(item) {
    const fragment = document.createDocumentFragment();
    const numberElement = document.createElement("span");
    const label = document.createElement("span");
    numberElement.className = "number-symbol";
    numberElement.setAttribute("aria-hidden", "true");
    numberElement.textContent = String(item.number);
    label.className = "word-label";
    label.textContent = item.word;
    fragment.append(numberElement, label);
    return fragment;
  }
  function handleNumberPromptClick() {
    const scenario = getCurrentNumberScenario();
    void speakText(scenario.word);
    if (state.hasRevealedNumberChoices) {
      return;
    }
    state.hasRevealedNumberChoices = true;
    elements.numberGameHelperText.textContent = "Tap the numbers. Every number speaks.";
    renderNumberChoices(scenario);
  }
  function renderNumberChoices(scenario) {
    const choiceCards = createNumberChoices(scenario).map((choice) => createNumberChoiceCard(choice, scenario.number));
    elements.numberGameChoiceGrid.replaceChildren(...choiceCards);
  }
  function createNumberChoices(scenario) {
    const firstNumber = Math.min(Math.max(scenario.number - 1, 1), NUMBER_ROUNDS.length - CHOICE_COUNT + 1);
    return NUMBER_ROUNDS.slice(firstNumber - 1, firstNumber - 1 + CHOICE_COUNT);
  }
  function createNumberChoiceCard(choice, answerNumber) {
    const button = document.createElement("button");
    button.className = "card choice-card";
    button.type = "button";
    button.setAttribute("aria-label", choice.word);
    button.append(createNumberCardContent(choice));
    button.addEventListener("click", () => handleNumberChoiceClick(choice, answerNumber, button));
    return button;
  }
  async function handleNumberChoiceClick(choice, answerNumber, button) {
    if (state.isAdvancing) {
      return;
    }
    if (choice.number !== answerNumber) {
      await speakText(choice.word);
      return;
    }
    state.isAdvancing = true;
    button.classList.add("is-found");
    await speakText(choice.word);
    playHappySound();
    window.setTimeout(advanceNumberScenario, NEXT_SCENARIO_DELAY_MS);
  }
  function advanceNumberScenario() {
    const isGameFinished = state.numberScenarioIndex + 1 >= NUMBER_SCENARIOS_PER_GAME;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, "number-find");
      saveProgress(progress);
      navigateTo(ROUTES.catalog);
      return;
    }
    state.numberScenarioIndex += 1;
    renderNumberScenario();
  }
  function getCurrentNumberScenario() {
    return NUMBER_ROUNDS[state.numberScenarioIndex];
  }
  function startMemoryLockGame(memoryMode) {
    clearMemoryPeekTimer();
    state.memoryMode = memoryMode;
    state.memoryLockIndex = 0;
    state.isAdvancing = false;
    showScreen("memory-lock");
    renderMemoryLockRound();
  }
  function renderMemoryLockRound() {
    clearMemoryPeekTimer();
    state.memoryInput = [];
    state.isAdvancing = false;
    state.isMemoryOpen = false;
    state.isMemoryCodeVisible = state.memoryMode === MEMORY_MODES.visible;
    elements.memoryLockEyebrow.textContent = state.memoryMode === MEMORY_MODES.hidden ? "Memory Lock Plus" : "Memory Lock";
    elements.memoryLockTitle.textContent = state.memoryMode === MEMORY_MODES.hidden ? "Remember the hidden number" : "Open the lock";
    elements.memoryLockProgress.textContent = `${state.memoryLockIndex + 1} / ${MEMORY_CODES.length}`;
    elements.memoryLockIcon.textContent = "🔒";
    elements.memoryLockStatus.textContent = "Locked";
    elements.memoryLockCard.style.borderColor = state.memoryMode === MEMORY_MODES.hidden ? "#ef4444" : "#f59e0b";
    elements.memoryLockHelperText.textContent = getMemoryInitialHelpText();
    renderMemoryCodeDisplay();
    renderMemoryInputDisplay();
    renderMemoryKeypad();
  }
  function getMemoryInitialHelpText() {
    if (state.memoryMode === MEMORY_MODES.hidden) {
      return "Tap the lock to peek. One number will hide.";
    }
    return "Type the four visible numbers to open the lock.";
  }
  function handleMemoryLockClick() {
    if (state.memoryMode !== MEMORY_MODES.hidden || state.isMemoryOpen) {
      return;
    }
    revealMemoryCodeTemporarily("Watch the code, then type all four numbers.");
  }
  function renderMemoryCodeDisplay() {
    const hiddenIndex = getMemoryHiddenIndex();
    const codeDigits = getCurrentMemoryCode().map((digit, digitIndex) => {
      const digitElement = document.createElement("span");
      const isHidden = state.memoryMode === MEMORY_MODES.hidden && !state.isMemoryCodeVisible && !state.isMemoryOpen && digitIndex === hiddenIndex;
      digitElement.className = `memory-digit ${isHidden ? "is-hidden" : ""}`;
      digitElement.textContent = isHidden ? "?" : String(digit);
      return digitElement;
    });
    elements.memoryCodeDisplay.replaceChildren(...codeDigits);
  }
  function renderMemoryInputDisplay() {
    const inputSlots = Array.from({ length: MEMORY_CODE_LENGTH }, (_, index) => {
      const slot = document.createElement("span");
      slot.className = "memory-input-slot";
      slot.textContent = state.memoryInput[index] === undefined ? "" : String(state.memoryInput[index]);
      return slot;
    });
    elements.memoryInputDisplay.replaceChildren(...inputSlots);
  }
  function renderMemoryKeypad() {
    const keys = MEMORY_KEYPAD_NUMBERS.map((number) => {
      const button = document.createElement("button");
      button.className = "memory-key";
      button.type = "button";
      button.textContent = String(number);
      button.setAttribute("aria-label", `Type ${number}`);
      button.addEventListener("click", () => handleMemoryNumberClick(number));
      return button;
    });
    elements.memoryKeypad.replaceChildren(...keys);
  }
  function handleMemoryNumberClick(number) {
    if (state.isAdvancing || state.isMemoryOpen || state.memoryInput.length >= MEMORY_CODE_LENGTH) {
      return;
    }
    state.memoryInput.push(number);
    renderMemoryInputDisplay();
    if (state.memoryInput.length !== MEMORY_CODE_LENGTH) {
      return;
    }
    if (hasMatchingMemoryInput()) {
      openMemoryLock();
      return;
    }
    resetMemoryInputAfterMiss();
  }
  function hasMatchingMemoryInput() {
    const code = getCurrentMemoryCode();
    return code.every((digit, index) => digit === state.memoryInput[index]);
  }
  function openMemoryLock() {
    clearMemoryPeekTimer();
    state.isAdvancing = true;
    state.isMemoryOpen = true;
    state.isMemoryCodeVisible = true;
    elements.memoryLockIcon.textContent = "🔓";
    elements.memoryLockStatus.textContent = "Opened!";
    elements.memoryLockHelperText.textContent = "The lock opened!";
    renderMemoryCodeDisplay();
    playHappySound();
    window.setTimeout(advanceMemoryLock, NEXT_SCENARIO_DELAY_MS + 450);
  }
  function resetMemoryInputAfterMiss() {
    state.memoryInput = [];
    renderMemoryInputDisplay();
    if (state.memoryMode === MEMORY_MODES.hidden) {
      revealMemoryCodeTemporarily("Try again. Watch the hidden number.");
      return;
    }
    elements.memoryLockHelperText.textContent = "Try again. Type the code from the start.";
  }
  function revealMemoryCodeTemporarily(helperText) {
    clearMemoryPeekTimer();
    state.isMemoryCodeVisible = true;
    elements.memoryLockHelperText.textContent = helperText;
    renderMemoryCodeDisplay();
    state.memoryPeekTimerId = window.setTimeout(() => {
      state.isMemoryCodeVisible = false;
      elements.memoryLockHelperText.textContent = "Now type the four numbers.";
      renderMemoryCodeDisplay();
    }, MEMORY_PEEK_MS);
  }
  function clearMemoryPeekTimer() {
    window.clearTimeout(state.memoryPeekTimerId);
    state.memoryPeekTimerId = 0;
  }
  function advanceMemoryLock() {
    const isGameFinished = state.memoryLockIndex + 1 >= MEMORY_CODES.length;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, getMemoryGameId());
      saveProgress(progress);
      navigateTo(ROUTES.catalog);
      return;
    }
    state.memoryLockIndex += 1;
    renderMemoryLockRound();
  }
  function getCurrentMemoryCode() {
    return MEMORY_CODES[state.memoryLockIndex];
  }
  function getMemoryHiddenIndex() {
    return state.memoryLockIndex % MEMORY_CODE_LENGTH;
  }
  function getMemoryGameId() {
    return state.memoryMode === MEMORY_MODES.hidden ? "memory-lock-hidden" : "memory-lock";
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
  function addUnique(values, value) {
    if (!values.includes(value)) {
      values.push(value);
    }
  }
  function speakText(text) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      return Promise.resolve();
    }
    window.speechSynthesis.cancel();
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
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
    elements.catalogScreen.classList.toggle("screen-active", screenName === "catalog");
    elements.packPickerScreen.classList.toggle("screen-active", screenName === "pack-picker");
    elements.sayFindScreen.classList.toggle("screen-active", screenName === "say-find");
    elements.packBagScreen.classList.toggle("screen-active", screenName === "pack-bag");
    elements.actionGameScreen.classList.toggle("screen-active", screenName === "action-game");
    elements.numberGameScreen.classList.toggle("screen-active", screenName === "number-game");
    elements.memoryLockScreen.classList.toggle("screen-active", screenName === "memory-lock");
    if (screenName !== "memory-lock") {
      clearMemoryPeekTimer();
    }
    window.speechSynthesis?.cancel();
  }
  function startParentExitHold(event, element, exitHandler) {
    event.preventDefault();
    element.classList.add("is-holding");
    state.exitTimerId = window.setTimeout(() => {
      cancelParentExitHold(element);
      exitHandler();
    }, EXIT_HOLD_MS);
  }
  function cancelParentExitHold(element) {
    element.classList.remove("is-holding");
    window.clearTimeout(state.exitTimerId);
    state.exitTimerId = 0;
  }
  function loadProgress() {
    try {
      const savedValue = window.localStorage.getItem(STORAGE_KEY);
      const legacyValue = window.localStorage.getItem(LEGACY_STORAGE_KEY);
      const parsedValue = savedValue ? JSON.parse(savedValue) : null;
      const parsedLegacyValue = legacyValue ? JSON.parse(legacyValue) : null;
      const completedGameIds = getValidGameIds(parsedValue?.completedGameIds);
      const completedSayFindPackIds = getValidSayFindPackIds(parsedValue?.completedSayFindPackIds || parsedValue?.completedPackIds || parsedLegacyValue?.completedPackIds);
      return { completedGameIds, completedSayFindPackIds };
    } catch (err) {
      return { completedGameIds: [], completedSayFindPackIds: [] };
    }
  }
  function getValidGameIds(gameIds) {
    if (!Array.isArray(gameIds)) {
      return [];
    }
    return gameIds.filter((gameId) => GAMES.some((game) => game.id === gameId));
  }
  function getValidSayFindPackIds(packIds) {
    if (!Array.isArray(packIds)) {
      return [];
    }
    return packIds.filter((packId) => SAY_FIND_PACKS.some((pack) => pack.id === packId));
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
  window.LittleEnglishGames = Object.freeze({
    getGameCount: () => GAMES.length,
    getSayFindPackCount: () => SAY_FIND_PACKS.length,
    getSayFindScenarioCount: () => SAY_FIND_TOTAL_SCENARIOS,
    getPackBagScenarioCount: () => BAG_ROUNDS.length,
    getActionScenarioCount: () => ACTION_SCENARIOS_PER_GAME,
    getNumberScenarioCount: () => NUMBER_SCENARIOS_PER_GAME,
    getMemoryLockCount: () => MEMORY_CODES.length
  });
  window.SayFindEnglishGame = Object.freeze({
    getPackCount: () => SAY_FIND_PACKS.length,
    getScenarioCount: () => SAY_FIND_TOTAL_SCENARIOS
  });
})();
