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
  const WEATHER_BASE_ROUNDS = Object.freeze([
    Object.freeze({ word: "sunny", emoji: "☀️" }),
    Object.freeze({ word: "cloudy", emoji: "☁️" }),
    Object.freeze({ word: "rainy", emoji: "🌧️" }),
    Object.freeze({ word: "snowy", emoji: "❄️" }),
    Object.freeze({ word: "windy", emoji: "💨" })
  ]);
  const WEATHER_LEVEL_TWO_ROUNDS = Object.freeze([
    Object.freeze({ word: "stormy", emoji: "⛈️" }),
    Object.freeze({ word: "foggy", emoji: "🌫️" }),
    Object.freeze({ word: "rainbow", emoji: "🌈" }),
    Object.freeze({ word: "hot", emoji: "🥵" }),
    Object.freeze({ word: "cold", emoji: "🥶" })
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
  const CELEBRATION_MESSAGES = Object.freeze([
    "You are the winner!",
    "What a champ!",
    "You did it!",
    "Amazing job!",
    "Super star!",
    "Fantastic work!",
    "Great thinking!",
    "Way to go!",
    "You opened it!",
    "Brilliant!"
  ]);
  const CONFETTI_COLORS = Object.freeze(["#facc15", "#38bdf8", "#f472b6", "#22c55e", "#fb923c", "#a78bfa"]);
  const CONFETTI_COUNT = 48;
  const CELEBRATION_DURATION_MS = 2300;
  const LEVELS = Object.freeze({ learn: 1, mix: 2 });
  const SAY_FIND_LEVEL_TWO_EXTRA_WORDS = Object.freeze({
    "farm-animals": Object.freeze([
      Object.freeze({ word: "duck", emoji: "🦆" }),
      Object.freeze({ word: "goat", emoji: "🐐" }),
      Object.freeze({ word: "donkey", emoji: "🫏" }),
      Object.freeze({ word: "rooster", emoji: "🐓" }),
      Object.freeze({ word: "turkey", emoji: "🦃" })
    ]),
    "wild-animals": Object.freeze([
      Object.freeze({ word: "giraffe", emoji: "🦒" }),
      Object.freeze({ word: "bear", emoji: "🐻" }),
      Object.freeze({ word: "fox", emoji: "🦊" }),
      Object.freeze({ word: "panda", emoji: "🐼" }),
      Object.freeze({ word: "kangaroo", emoji: "🦘" })
    ]),
    vehicles: Object.freeze([
      Object.freeze({ word: "bicycle", emoji: "🚲" }),
      Object.freeze({ word: "taxi", emoji: "🚕" }),
      Object.freeze({ word: "truck", emoji: "🚚" }),
      Object.freeze({ word: "boat", emoji: "⛵" }),
      Object.freeze({ word: "airplane", emoji: "✈️" })
    ]),
    food: Object.freeze([
      Object.freeze({ word: "carrot", emoji: "🥕" }),
      Object.freeze({ word: "cheese", emoji: "🧀" }),
      Object.freeze({ word: "grapes", emoji: "🍇" }),
      Object.freeze({ word: "strawberry", emoji: "🍓" }),
      Object.freeze({ word: "watermelon", emoji: "🍉" })
    ]),
    dinosaurs: Object.freeze([
      Object.freeze({ word: "sauropod", emoji: "🦕" }),
      Object.freeze({ word: "raptor", emoji: "🦖" }),
      Object.freeze({ word: "fossil", emoji: "🪨" }),
      Object.freeze({ word: "leaf", emoji: "🍃" }),
      Object.freeze({ word: "meteor", emoji: "☄️" })
    ]),
    ocean: Object.freeze([
      Object.freeze({ word: "dolphin", emoji: "🐬" }),
      Object.freeze({ word: "shark", emoji: "🦈" }),
      Object.freeze({ word: "lobster", emoji: "🦞" }),
      Object.freeze({ word: "seal", emoji: "🦭" }),
      Object.freeze({ word: "starfish", emoji: "⭐" })
    ]),
    pets: Object.freeze([
      Object.freeze({ word: "hamster", emoji: "🐹" }),
      Object.freeze({ word: "mouse", emoji: "🐭" }),
      Object.freeze({ word: "fish", emoji: "🐟" }),
      Object.freeze({ word: "puppy", emoji: "🐕" }),
      Object.freeze({ word: "kitten", emoji: "🐈" })
    ]),
    toys: Object.freeze([
      Object.freeze({ word: "robot", emoji: "🤖" }),
      Object.freeze({ word: "yo-yo", emoji: "🪀" }),
      Object.freeze({ word: "doll", emoji: "🪆" }),
      Object.freeze({ word: "puzzle", emoji: "🧩" }),
      Object.freeze({ word: "drum", emoji: "🥁" })
    ]),
    nature: Object.freeze([
      Object.freeze({ word: "cloud", emoji: "☁️" }),
      Object.freeze({ word: "snow", emoji: "❄️" }),
      Object.freeze({ word: "mountain", emoji: "⛰️" }),
      Object.freeze({ word: "fire", emoji: "🔥" }),
      Object.freeze({ word: "water", emoji: "💧" })
    ]),
    home: Object.freeze([
      Object.freeze({ word: "door", emoji: "🚪" }),
      Object.freeze({ word: "window", emoji: "🪟" }),
      Object.freeze({ word: "sofa", emoji: "🛋️" }),
      Object.freeze({ word: "clock", emoji: "🕘" }),
      Object.freeze({ word: "toothbrush", emoji: "🪥" })
    ])
  });
  const BAG_LEVEL_TWO_ITEMS = Object.freeze([
    Object.freeze({ word: "pencil", emoji: "✏️" }),
    Object.freeze({ word: "shoes", emoji: "👟" }),
    Object.freeze({ word: "bottle", emoji: "🍼" }),
    Object.freeze({ word: "hat", emoji: "🧢" }),
    Object.freeze({ word: "key", emoji: "🔑" }),
    Object.freeze({ word: "spoon", emoji: "🥄" }),
    Object.freeze({ word: "cup", emoji: "🥤" }),
    Object.freeze({ word: "star", emoji: "⭐" })
  ]);
  const ACTION_LEVEL_TWO_ROUNDS = Object.freeze([
    Object.freeze({ phrase: "cow jumps", noun: "cow", verb: "jumps", nounEmoji: "🐮", verbEmoji: "⬆️" }),
    Object.freeze({ phrase: "duck walks", noun: "duck", verb: "walks", nounEmoji: "🦆", verbEmoji: "🚶" }),
    Object.freeze({ phrase: "baby laughs", noun: "baby", verb: "laughs", nounEmoji: "👶", verbEmoji: "😄" }),
    Object.freeze({ phrase: "horse drinks", noun: "horse", verb: "drinks", nounEmoji: "🐴", verbEmoji: "💧" }),
    Object.freeze({ phrase: "lion roars", noun: "lion", verb: "roars", nounEmoji: "🦁", verbEmoji: "📣" })
  ]);
  const CHOICE_COUNT = 4;
  const WORDS_PER_PACK = 5;
  const LEVELS_PER_PACK = 2;
  const SAY_FIND_SCENARIOS_PER_PACK = WORDS_PER_PACK * LEVELS_PER_PACK;
  const SAY_FIND_TOTAL_SCENARIOS = SAY_FIND_PACKS.length * SAY_FIND_SCENARIOS_PER_PACK;
  const ACTION_SCENARIOS_PER_GAME = ACTION_BASE_ROUNDS.length * LEVELS_PER_PACK;
  const NUMBER_SCENARIOS_PER_GAME = NUMBER_ROUNDS.length;
  const WEATHER_SCENARIOS_PER_GAME = WEATHER_BASE_ROUNDS.length * LEVELS_PER_PACK;
  const MEMORY_CODE_LENGTH = 4;
  const MEMORY_PEEK_MS = 2500;
  const EXIT_HOLD_MS = 1600;
  const NEXT_SCENARIO_DELAY_MS = 350;
  const SPEECH_FALLBACK_MS = 1200;
  const STORAGE_KEY = "little-english-games-progress";
  const LEGACY_STORAGE_KEY = "say-find-english-progress";
  const ROUTES = Object.freeze({
    catalog: "#/catalog",
    settings: "#/settings",
    sayFindPacks: "#/say-find",
    packBag: "#/pack-my-bag",
    actionGame: "#/who-is-doing-it",
    numberGame: "#/numbers",
    weatherGame: "#/weather",
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
      id: "weather-find",
      title: "What Is the Weather?",
      emoji: "☀️ ☁️ 🌧️",
      color: "#0ea5e9",
      description: "Hear the weather word and find the matching weather icon.",
      actionLabel: "Find weather"
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
    sayFindScenarios: [],
    bagScenarios: [],
    actionScenarios: [],
    numberScenarios: [],
    weatherScenarios: [],
    memoryCodes: [],
    memoryHiddenIndexes: [],
    hasRevealedSayFindChoices: false,
    hasRevealedBagChoices: false,
    hasRevealedActionChoices: false,
    hasRevealedNumberChoices: false,
    hasRevealedWeatherChoices: false,
    isAdvancing: false,
    bagScenarioIndex: 0,
    actionScenarioIndex: 0,
    numberScenarioIndex: 0,
    weatherScenarioIndex: 0,
    memoryLockIndex: 0,
    memoryMode: MEMORY_MODES.visible,
    memoryInput: [],
    isMemoryCodeVisible: true,
    isMemoryOpen: false,
    memoryPeekTimerId: 0,
    celebrationTimerId: 0,
    exitTimerId: 0,
    audioContext: null
  };
  const elements = {
    catalogScreen: document.getElementById("catalog-screen"),
    settingsScreen: document.getElementById("settings-screen"),
    packPickerScreen: document.getElementById("pack-picker-screen"),
    sayFindScreen: document.getElementById("say-find-screen"),
    packBagScreen: document.getElementById("pack-bag-screen"),
    gameCatalog: document.getElementById("game-catalog"),
    levelBadge: document.getElementById("level-badge"),
    settingsButton: document.getElementById("settings-button"),
    settingsBackButton: document.getElementById("settings-back-button"),
    levelOneButton: document.getElementById("level-one-button"),
    levelTwoButton: document.getElementById("level-two-button"),
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
    weatherGameScreen: document.getElementById("weather-game-screen"),
    weatherGameBackButton: document.getElementById("weather-game-back-button"),
    weatherGamePromptCard: document.getElementById("weather-game-prompt-card"),
    weatherGameChoiceGrid: document.getElementById("weather-game-choice-grid"),
    weatherGameHelperText: document.getElementById("weather-game-helper-text"),
    weatherGameProgress: document.getElementById("weather-game-progress"),
    weatherGameParentExit: document.getElementById("weather-game-parent-exit"),
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
    memoryLockParentExit: document.getElementById("memory-lock-parent-exit"),
    celebrationOverlay: document.getElementById("celebration-overlay"),
    celebrationMessage: document.getElementById("celebration-message"),
    confettiField: document.getElementById("confetti-field")
  };
  const progress = loadProgress();
  bindEvents();
  bindViewportGuards();
  renderCurrentRoute();
  registerServiceWorker();
  function bindEvents() {
    elements.settingsButton.addEventListener("click", () => navigateTo(ROUTES.settings));
    elements.settingsBackButton.addEventListener("click", () => navigateToCatalogWithSpeech());
    elements.levelOneButton.addEventListener("click", () => setGameLevel(LEVELS.learn));
    elements.levelTwoButton.addEventListener("click", () => setGameLevel(LEVELS.mix));
    elements.catalogBackButton.addEventListener("click", () => navigateToCatalogWithSpeech());
    elements.sayFindBackButton.addEventListener("click", () => navigateTo(ROUTES.sayFindPacks));
    elements.packBagBackButton.addEventListener("click", () => navigateToCatalogWithSpeech());
    elements.actionGameBackButton.addEventListener("click", () => navigateToCatalogWithSpeech());
    elements.numberGameBackButton.addEventListener("click", () => navigateToCatalogWithSpeech());
    elements.weatherGameBackButton.addEventListener("click", () => navigateToCatalogWithSpeech());
    elements.memoryLockBackButton.addEventListener("click", () => navigateToCatalogWithSpeech());
    elements.sayFindPromptCard.addEventListener("click", handleSayFindPromptClick);
    elements.packBagPromptCard.addEventListener("click", handlePackBagPromptClick);
    elements.actionGamePromptCard.addEventListener("click", handleActionPromptClick);
    elements.numberGamePromptCard.addEventListener("click", handleNumberPromptClick);
    elements.weatherGamePromptCard.addEventListener("click", handleWeatherPromptClick);
    elements.memoryLockCard.addEventListener("click", handleMemoryLockClick);
    window.addEventListener("hashchange", renderCurrentRoute);
    bindParentExit(elements.sayFindParentExit, () => navigateTo(ROUTES.sayFindPacks));
    bindParentExit(elements.packBagParentExit, () => navigateTo(ROUTES.catalog));
    bindParentExit(elements.actionGameParentExit, () => navigateTo(ROUTES.catalog));
    bindParentExit(elements.numberGameParentExit, () => navigateTo(ROUTES.catalog));
    bindParentExit(elements.weatherGameParentExit, () => navigateTo(ROUTES.catalog));
    bindParentExit(elements.memoryLockParentExit, () => navigateTo(ROUTES.catalog));
  }
  function bindParentExit(element, exitHandler) {
    element.addEventListener("pointerdown", (event) => startParentExitHold(event, element, exitHandler));
    element.addEventListener("pointerup", () => cancelParentExitHold(element));
    element.addEventListener("pointercancel", () => cancelParentExitHold(element));
    element.addEventListener("pointerleave", () => cancelParentExitHold(element));
  }
  function bindViewportGuards() {
    let lastTouchEndTime = 0;
    updateAppViewportHeight();
    window.addEventListener("resize", updateAppViewportHeight);
    window.addEventListener("orientationchange", updateAppViewportHeight);
    window.visualViewport?.addEventListener("resize", updateAppViewportHeight);
    window.visualViewport?.addEventListener("scroll", updateAppViewportHeight);
    document.addEventListener("gesturestart", preventGestureDefault, { passive: false });
    document.addEventListener("gesturechange", preventGestureDefault, { passive: false });
    document.addEventListener("gestureend", preventGestureDefault, { passive: false });
    document.addEventListener("touchmove", (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, { passive: false });
    document.addEventListener("touchend", (event) => {
      const currentTime = Date.now();
      if (currentTime - lastTouchEndTime < 320) {
        event.preventDefault();
      }
      lastTouchEndTime = currentTime;
    }, { passive: false });
    window.addEventListener("wheel", (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    }, { passive: false });
  }
  function updateAppViewportHeight() {
    const viewportHeight = Math.round(window.visualViewport?.height || window.innerHeight || document.documentElement.clientHeight);
    document.documentElement.style.setProperty("--app-viewport-height", `${viewportHeight}px`);
  }
  function preventGestureDefault(event) {
    event.preventDefault();
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
    if (hash === ROUTES.settings) {
      renderSettings();
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
    if (hash === ROUTES.weatherGame) {
      startWeatherGame();
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
  function navigateToCatalogWithSpeech() {
    navigateTo(ROUTES.catalog);
    window.setTimeout(() => {
      void speakText("game catalog");
    }, 60);
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
    updateLevelBadge();
    elements.gameCatalog.replaceChildren(...GAMES.map(createCatalogCard));
    showScreen("catalog");
  }
  function renderSettings() {
    elements.levelOneButton.classList.toggle("is-selected", progress.level === LEVELS.learn);
    elements.levelTwoButton.classList.toggle("is-selected", progress.level === LEVELS.mix);
    showScreen("settings");
  }
  function setGameLevel(level) {
    progress.level = level;
    saveProgress(progress);
    renderSettings();
  }
  function updateLevelBadge() {
    elements.levelBadge.textContent = progress.level === LEVELS.mix ? "Level 2: Mix" : "Level 1: Learn";
  }
  function isLevelTwo() {
    return progress.level === LEVELS.mix;
  }
  function getLevelLabel() {
    return isLevelTwo() ? "Level 2" : "Level 1";
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
    if (gameId === "weather-find") {
      navigateTo(ROUTES.weatherGame);
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
    const packWords = getSayFindPackWords(pack);
    button.className = "pack-card";
    button.type = "button";
    button.style.borderColor = pack.color;
    button.setAttribute("aria-label", `${pack.title}. ${isCompleted ? "Finished" : "Not finished yet"}.`);
    button.addEventListener("click", () => navigateTo(getSayFindPackRoute(packIndex)));
    button.innerHTML = `
      <div class="pack-emoji-row" aria-hidden="true">${packWords.slice(0, 5).map((item) => item.emoji).join(" ")}</div>
      <div class="pack-title-row">
        <h2>${pack.title}</h2>
        <span class="status-badge ${isCompleted ? "" : "unfinished"}">${isCompleted ? "Done" : "Play"}</span>
      </div>
      <p>${isLevelTwo() ? "Mixed rounds from a bigger word pool" : "5 picture rounds + 5 listening rounds"}</p>
    `;
    return button;
  }
  function startSayFindPack(packIndex) {
    state.sayFindPackIndex = packIndex;
    state.sayFindScenarioIndex = 0;
    state.sayFindScenarios = createSayFindScenarios(getCurrentSayFindPack());
    state.isAdvancing = false;
    showScreen("say-find");
    renderSayFindScenario();
  }
  function renderSayFindScenario() {
    const pack = getCurrentSayFindPack();
    const scenario = getCurrentSayFindScenario();
    state.hasRevealedSayFindChoices = false;
    state.isAdvancing = false;
    elements.sayFindPackTheme.textContent = `${pack.title} · ${getLevelLabel()}`;
    elements.sayFindProgress.textContent = `${state.sayFindScenarioIndex + 1} / ${state.sayFindScenarios.length}`;
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
    const choices = [scenario, ...shuffledOthers];
    return isLevelTwo() ? shuffleItems(choices) : shuffleItems(choices);
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
    const isPackFinished = state.sayFindScenarioIndex + 1 >= state.sayFindScenarios.length;
    if (isPackFinished) {
      completeSayFindPack();
      showCompletionCelebration(() => navigateTo(ROUTES.sayFindPacks));
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
    if (state.sayFindScenarios.length === 0) {
      state.sayFindScenarios = createSayFindScenarios(getCurrentSayFindPack());
    }
    return state.sayFindScenarios[state.sayFindScenarioIndex];
  }
  function createSayFindScenarios(pack) {
    const packWords = getSayFindPackWords(pack);
    if (!isLevelTwo()) {
      const levelOneWords = packWords.slice(0, WORDS_PER_PACK);
      return levelOneWords.map((item) => Object.freeze({ ...item, hasPicture: true })).concat(
        levelOneWords.map((item) => Object.freeze({ ...item, hasPicture: false }))
      );
    }
    return shuffleItems(packWords).slice(0, SAY_FIND_SCENARIOS_PER_PACK).map((item, index) => Object.freeze({
      ...item,
      hasPicture: index % 3 !== 1
    }));
  }
  function getSayFindPackWords(pack) {
    return pack.words.concat(SAY_FIND_LEVEL_TWO_EXTRA_WORDS[pack.id] || []);
  }
  function getAllSayFindWords() {
    return SAY_FIND_PACKS.flatMap((pack) => getSayFindPackWords(pack));
  }
  function startPackBagGame() {
    state.bagScenarioIndex = 0;
    state.bagScenarios = createPackBagScenarios();
    state.isAdvancing = false;
    showScreen("pack-bag");
    renderPackBagScenario();
  }
  function renderPackBagScenario() {
    const scenario = getCurrentPackBagScenario();
    state.hasRevealedBagChoices = false;
    state.isAdvancing = false;
    elements.packBagProgress.textContent = `${state.bagScenarioIndex + 1} / ${state.bagScenarios.length}`;
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
    const isGameFinished = state.bagScenarioIndex + 1 >= state.bagScenarios.length;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, "pack-my-bag");
      saveProgress(progress);
      showCompletionCelebration(() => navigateTo(ROUTES.catalog));
      return;
    }
    state.bagScenarioIndex += 1;
    renderPackBagScenario();
  }
  function getCurrentPackBagScenario() {
    if (state.bagScenarios.length === 0) {
      state.bagScenarios = createPackBagScenarios();
    }
    return state.bagScenarios[state.bagScenarioIndex];
  }
  function createPackBagScenarios() {
    const pool = isLevelTwo() ? BAG_ROUNDS.concat(BAG_LEVEL_TWO_ITEMS) : BAG_ROUNDS;
    return isLevelTwo() ? shuffleItems(pool).slice(0, BAG_ROUNDS.length) : [...BAG_ROUNDS];
  }
  function getPackBagPhrase(word) {
    return `Pack the ${word}`;
  }
  function getAllPackBagChoiceItems() {
    const uniqueItems = new Map();
    const bagPool = isLevelTwo() ? BAG_ROUNDS.concat(BAG_LEVEL_TWO_ITEMS) : BAG_ROUNDS;
    bagPool.concat(getAllSayFindWords()).forEach((item) => {
      if (!uniqueItems.has(item.word)) {
        uniqueItems.set(item.word, item);
      }
    });
    return Array.from(uniqueItems.values());
  }
  function startActionGame() {
    state.actionScenarioIndex = 0;
    state.actionScenarios = createActionScenarios();
    state.isAdvancing = false;
    showScreen("action-game");
    renderActionScenario();
  }
  function renderActionScenario() {
    const scenario = getCurrentActionScenario();
    state.hasRevealedActionChoices = false;
    state.isAdvancing = false;
    elements.actionGameProgress.textContent = `${state.actionScenarioIndex + 1} / ${state.actionScenarios.length}`;
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
    const otherItems = getActionChoicePool().filter((item) => item.phrase !== scenario.phrase);
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
    const isGameFinished = state.actionScenarioIndex + 1 >= state.actionScenarios.length;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, "who-is-doing-it");
      saveProgress(progress);
      showCompletionCelebration(() => navigateTo(ROUTES.catalog));
      return;
    }
    state.actionScenarioIndex += 1;
    renderActionScenario();
  }
  function getCurrentActionScenario() {
    if (state.actionScenarios.length === 0) {
      state.actionScenarios = createActionScenarios();
    }
    return state.actionScenarios[state.actionScenarioIndex];
  }
  function createActionScenarios() {
    if (!isLevelTwo()) {
      return ACTION_BASE_ROUNDS.map((item) => Object.freeze({ ...item, hasPicture: true })).concat(
        ACTION_BASE_ROUNDS.map((item) => Object.freeze({ ...item, hasPicture: false }))
      );
    }
    return shuffleItems(getActionChoicePool()).slice(0, ACTION_SCENARIOS_PER_GAME).map((item, index) => Object.freeze({
      ...item,
      hasPicture: index % 2 === 0
    }));
  }
  function getActionChoicePool() {
    return isLevelTwo() ? ACTION_BASE_ROUNDS.concat(ACTION_LEVEL_TWO_ROUNDS) : ACTION_BASE_ROUNDS;
  }
  function startNumberGame() {
    state.numberScenarioIndex = 0;
    state.numberScenarios = createNumberScenarios();
    state.isAdvancing = false;
    showScreen("number-game");
    renderNumberScenario();
  }
  function renderNumberScenario() {
    const scenario = getCurrentNumberScenario();
    state.hasRevealedNumberChoices = false;
    state.isAdvancing = false;
    elements.numberGameProgress.textContent = `${state.numberScenarioIndex + 1} / ${state.numberScenarios.length}`;
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
    if (isLevelTwo()) {
      const others = NUMBER_ROUNDS.filter((item) => item.number !== scenario.number);
      return shuffleItems([scenario, ...shuffleItems(others).slice(0, CHOICE_COUNT - 1)]);
    }
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
    const isGameFinished = state.numberScenarioIndex + 1 >= state.numberScenarios.length;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, "number-find");
      saveProgress(progress);
      showCompletionCelebration(() => navigateTo(ROUTES.catalog));
      return;
    }
    state.numberScenarioIndex += 1;
    renderNumberScenario();
  }
  function getCurrentNumberScenario() {
    if (state.numberScenarios.length === 0) {
      state.numberScenarios = createNumberScenarios();
    }
    return state.numberScenarios[state.numberScenarioIndex];
  }
  function createNumberScenarios() {
    return isLevelTwo() ? shuffleItems(NUMBER_ROUNDS) : [...NUMBER_ROUNDS];
  }
  function startWeatherGame() {
    state.weatherScenarioIndex = 0;
    state.weatherScenarios = createWeatherScenarios();
    state.isAdvancing = false;
    showScreen("weather-game");
    renderWeatherScenario();
  }
  function renderWeatherScenario() {
    const scenario = getCurrentWeatherScenario();
    state.hasRevealedWeatherChoices = false;
    state.isAdvancing = false;
    elements.weatherGameProgress.textContent = `${state.weatherScenarioIndex + 1} / ${state.weatherScenarios.length}`;
    elements.weatherGamePromptCard.style.borderColor = "#0ea5e9";
    elements.weatherGamePromptCard.setAttribute("aria-label", `Hear ${scenario.word}`);
    elements.weatherGamePromptCard.replaceChildren(createWeatherPromptContent(scenario));
    elements.weatherGameChoiceGrid.replaceChildren();
    elements.weatherGameHelperText.textContent = scenario.hasPicture ? "Tap the big card to hear the weather." : "Tap the sound card, then find the weather.";
  }
  function createWeatherPromptContent(scenario) {
    const fragment = document.createDocumentFragment();
    const icon = document.createElement("span");
    const label = document.createElement("span");
    icon.className = scenario.hasPicture ? "weather-symbol" : "sound-only";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = scenario.hasPicture ? scenario.emoji : "🔊";
    label.className = "word-label";
    label.textContent = scenario.word;
    fragment.append(icon, label);
    return fragment;
  }
  function handleWeatherPromptClick() {
    const scenario = getCurrentWeatherScenario();
    void speakText(scenario.word);
    if (state.hasRevealedWeatherChoices) {
      return;
    }
    state.hasRevealedWeatherChoices = true;
    elements.weatherGameHelperText.textContent = "Tap the weather icons. Every icon speaks.";
    renderWeatherChoices(scenario);
  }
  function renderWeatherChoices(scenario) {
    const choiceCards = createWeatherChoices(scenario).map((choice) => createWeatherChoiceCard(choice, scenario.word));
    elements.weatherGameChoiceGrid.replaceChildren(...choiceCards);
  }
  function createWeatherChoices(scenario) {
    const otherItems = getWeatherChoicePool().filter((item) => item.word !== scenario.word);
    return shuffleItems([scenario, ...shuffleItems(otherItems).slice(0, CHOICE_COUNT - 1)]);
  }
  function createWeatherChoiceCard(choice, answerWord) {
    const button = document.createElement("button");
    button.className = "card choice-card";
    button.type = "button";
    button.setAttribute("aria-label", choice.word);
    button.innerHTML = `
      <span class="weather-symbol" aria-hidden="true">${choice.emoji}</span>
      <span class="word-label">${choice.word}</span>
    `;
    button.addEventListener("click", () => handleWeatherChoiceClick(choice, answerWord, button));
    return button;
  }
  async function handleWeatherChoiceClick(choice, answerWord, button) {
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
    window.setTimeout(advanceWeatherScenario, NEXT_SCENARIO_DELAY_MS);
  }
  function advanceWeatherScenario() {
    const isGameFinished = state.weatherScenarioIndex + 1 >= state.weatherScenarios.length;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, "weather-find");
      saveProgress(progress);
      showCompletionCelebration(() => navigateTo(ROUTES.catalog));
      return;
    }
    state.weatherScenarioIndex += 1;
    renderWeatherScenario();
  }
  function getCurrentWeatherScenario() {
    if (state.weatherScenarios.length === 0) {
      state.weatherScenarios = createWeatherScenarios();
    }
    return state.weatherScenarios[state.weatherScenarioIndex];
  }
  function createWeatherScenarios() {
    if (!isLevelTwo()) {
      return WEATHER_BASE_ROUNDS.map((item) => Object.freeze({ ...item, hasPicture: true })).concat(
        WEATHER_BASE_ROUNDS.map((item) => Object.freeze({ ...item, hasPicture: false }))
      );
    }
    return shuffleItems(getWeatherChoicePool()).slice(0, WEATHER_SCENARIOS_PER_GAME).map((item, index) => Object.freeze({
      ...item,
      hasPicture: index % 3 !== 1
    }));
  }
  function getWeatherChoicePool() {
    return isLevelTwo() ? WEATHER_BASE_ROUNDS.concat(WEATHER_LEVEL_TWO_ROUNDS) : WEATHER_BASE_ROUNDS;
  }
  function startMemoryLockGame(memoryMode) {
    clearMemoryPeekTimer();
    state.memoryMode = memoryMode;
    state.memoryLockIndex = 0;
    state.memoryCodes = createMemoryCodes();
    state.memoryHiddenIndexes = createMemoryHiddenIndexes();
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
    elements.memoryLockProgress.textContent = `${state.memoryLockIndex + 1} / ${state.memoryCodes.length}`;
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
    keys.push(createMemoryClearButton());
    elements.memoryKeypad.replaceChildren(...keys);
  }
  function createMemoryClearButton() {
    const button = document.createElement("button");
    button.className = "memory-key memory-clear-key";
    button.type = "button";
    button.textContent = "Clear";
    button.setAttribute("aria-label", "Clear typed numbers");
    button.addEventListener("click", handleMemoryClearClick);
    return button;
  }
  function handleMemoryNumberClick(number) {
    if (state.isAdvancing || state.isMemoryOpen || state.memoryInput.length >= MEMORY_CODE_LENGTH) {
      return;
    }
    void speakText(getMemoryNumberWord(number));
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
  function handleMemoryClearClick() {
    if (state.isAdvancing || state.isMemoryOpen || state.memoryInput.length === 0) {
      return;
    }
    state.memoryInput = [];
    renderMemoryInputDisplay();
    elements.memoryLockHelperText.textContent = "Cleared. Type the code again.";
    void speakText("clear");
  }
  function hasMatchingMemoryInput() {
    const code = getCurrentMemoryCode();
    return code.every((digit, index) => digit === state.memoryInput[index]);
  }
  function getMemoryNumberWord(number) {
    if (number === 0) {
      return "zero";
    }
    const numberItem = NUMBER_ROUNDS.find((item) => item.number === number);
    return numberItem ? numberItem.word : String(number);
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
    speakHiddenMemoryNumber();
    state.memoryPeekTimerId = window.setTimeout(() => {
      state.isMemoryCodeVisible = false;
      elements.memoryLockHelperText.textContent = "Now type the four numbers.";
      renderMemoryCodeDisplay();
    }, MEMORY_PEEK_MS);
  }
  function speakHiddenMemoryNumber() {
    if (state.memoryMode !== MEMORY_MODES.hidden || state.isMemoryOpen) {
      return;
    }
    const hiddenNumber = getCurrentMemoryCode()[getMemoryHiddenIndex()];
    void speakText(getMemoryNumberWord(hiddenNumber));
  }
  function clearMemoryPeekTimer() {
    window.clearTimeout(state.memoryPeekTimerId);
    state.memoryPeekTimerId = 0;
  }
  function advanceMemoryLock() {
    const isGameFinished = state.memoryLockIndex + 1 >= state.memoryCodes.length;
    if (isGameFinished) {
      addUnique(progress.completedGameIds, getMemoryGameId());
      saveProgress(progress);
      showCompletionCelebration(() => navigateTo(ROUTES.catalog));
      return;
    }
    state.memoryLockIndex += 1;
    renderMemoryLockRound();
  }
  function getCurrentMemoryCode() {
    if (state.memoryCodes.length === 0) {
      state.memoryCodes = createMemoryCodes();
    }
    return state.memoryCodes[state.memoryLockIndex];
  }
  function createMemoryCodes() {
    if (!isLevelTwo()) {
      return MEMORY_CODES.map((code) => Object.freeze([...code]));
    }
    return Array.from({ length: MEMORY_CODES.length }, () => Object.freeze(
      Array.from({ length: MEMORY_CODE_LENGTH }, () => Math.floor(Math.random() * 10))
    ));
  }
  function createMemoryHiddenIndexes() {
    if (!isLevelTwo()) {
      return MEMORY_CODES.map((_, index) => index % MEMORY_CODE_LENGTH);
    }
    return MEMORY_CODES.map(() => Math.floor(Math.random() * MEMORY_CODE_LENGTH));
  }
  function getMemoryHiddenIndex() {
    if (state.memoryHiddenIndexes.length === 0) {
      state.memoryHiddenIndexes = createMemoryHiddenIndexes();
    }
    return state.memoryHiddenIndexes[state.memoryLockIndex];
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
  function showCompletionCelebration(afterCelebration) {
    window.clearTimeout(state.celebrationTimerId);
    const celebrationMessage = getRandomCelebrationMessage();
    elements.celebrationMessage.textContent = celebrationMessage;
    renderConfetti();
    elements.celebrationOverlay.hidden = false;
    void speakText(celebrationMessage);
    state.celebrationTimerId = window.setTimeout(() => {
      hideCompletionCelebration();
      afterCelebration();
    }, CELEBRATION_DURATION_MS);
  }
  function hideCompletionCelebration() {
    elements.celebrationOverlay.hidden = true;
    elements.confettiField.replaceChildren();
    window.clearTimeout(state.celebrationTimerId);
    state.celebrationTimerId = 0;
  }
  function getRandomCelebrationMessage() {
    return CELEBRATION_MESSAGES[Math.floor(Math.random() * CELEBRATION_MESSAGES.length)];
  }
  function renderConfetti() {
    const pieces = Array.from({ length: CONFETTI_COUNT }, (_, index) => {
      const piece = document.createElement("span");
      const color = CONFETTI_COLORS[index % CONFETTI_COLORS.length];
      piece.className = "confetti-piece";
      piece.style.background = color;
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.animationDelay = `${Math.random() * 260}ms`;
      piece.style.setProperty("--confetti-x", `${Math.random() * 80 - 40}vw`);
      return piece;
    });
    elements.confettiField.replaceChildren(...pieces);
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
    const isGameScreen = ["say-find", "pack-bag", "action-game", "number-game", "weather-game", "memory-lock"].includes(screenName);
    updateAppViewportHeight();
    document.body.classList.toggle("is-game-active", isGameScreen);
    elements.catalogScreen.classList.toggle("screen-active", screenName === "catalog");
    elements.settingsScreen.classList.toggle("screen-active", screenName === "settings");
    elements.packPickerScreen.classList.toggle("screen-active", screenName === "pack-picker");
    elements.sayFindScreen.classList.toggle("screen-active", screenName === "say-find");
    elements.packBagScreen.classList.toggle("screen-active", screenName === "pack-bag");
    elements.actionGameScreen.classList.toggle("screen-active", screenName === "action-game");
    elements.numberGameScreen.classList.toggle("screen-active", screenName === "number-game");
    elements.weatherGameScreen.classList.toggle("screen-active", screenName === "weather-game");
    elements.memoryLockScreen.classList.toggle("screen-active", screenName === "memory-lock");
    if (screenName !== "memory-lock") {
      clearMemoryPeekTimer();
    }
    if (!elements.celebrationOverlay.hidden) {
      hideCompletionCelebration();
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
      const level = getValidLevel(parsedValue?.level);
      return { completedGameIds, completedSayFindPackIds, level };
    } catch (err) {
      return { completedGameIds: [], completedSayFindPackIds: [], level: LEVELS.learn };
    }
  }
  function getValidLevel(level) {
    return level === LEVELS.mix ? LEVELS.mix : LEVELS.learn;
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
    getWeatherScenarioCount: () => WEATHER_SCENARIOS_PER_GAME,
    getMemoryLockCount: () => MEMORY_CODES.length,
    getCurrentLevel: () => progress.level
  });
  window.SayFindEnglishGame = Object.freeze({
    getPackCount: () => SAY_FIND_PACKS.length,
    getScenarioCount: () => SAY_FIND_TOTAL_SCENARIOS
  });
})();
