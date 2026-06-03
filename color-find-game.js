(function initializeColorFindGame() {
  "use strict";
  const ROUTE = "#/color-find";
  const SESSION_COUNT = 10;
  const COLORS = Object.freeze([
    Object.freeze({ word: "red", value: "#ef4444" }),
    Object.freeze({ word: "blue", value: "#3b82f6" }),
    Object.freeze({ word: "green", value: "#22c55e" }),
    Object.freeze({ word: "yellow", value: "#facc15" }),
    Object.freeze({ word: "orange", value: "#fb923c" }),
    Object.freeze({ word: "purple", value: "#8b5cf6" }),
    Object.freeze({ word: "pink", value: "#f472b6" }),
    Object.freeze({ word: "black", value: "#111827" }),
    Object.freeze({ word: "white", value: "#ffffff" }),
    Object.freeze({ word: "brown", value: "#92400e" })
  ]);
  const state = {
    scenarios: [],
    scenarioIndex: 0,
    isAdvancing: false,
    hasRevealedChoices: false
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
    if (container.querySelector('[data-game-id="color-find"]')) {
      return;
    }
    const button = document.createElement("button");
    button.className = "catalog-card";
    button.type = "button";
    button.dataset.gameId = "color-find";
    button.style.borderColor = "#3b82f6";
    button.setAttribute("aria-label", "Color Find. Hear a color and choose it.");
    button.innerHTML = `
      <div class="catalog-emoji-row" aria-hidden="true">🟥 🟦 🟩</div>
      <div class="catalog-title-row">
        <h2>Color Find</h2>
        <span class="status-badge unfinished">Play</span>
      </div>
      <p>Tap the rectangle to hear a color, then find it.</p>
      <p>Find colors</p>
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
    startGame();
    return true;
  }
  function ensureScreen() {
    if (document.getElementById("color-find-screen")) {
      return;
    }
    const screen = document.createElement("section");
    screen.id = "color-find-screen";
    screen.className = "screen game-screen color-find-screen";
    screen.setAttribute("aria-labelledby", "color-find-title");
    screen.innerHTML = `
      <div class="parent-exit" aria-label="Hold to return to games"></div>
      <header class="game-header">
        <div>
          <p class="eyebrow">Color Find</p>
          <h1 id="color-find-title">Find the color</h1>
        </div>
        <div class="header-actions">
          <button id="color-find-back-button" class="soft-button" type="button">Game catalog</button>
          <div id="color-find-progress" class="progress-pill">1 / 10</div>
        </div>
      </header>
      <div class="color-stage">
        <button id="color-find-prompt-card" class="card color-prompt-card" type="button" aria-label="Hear the color">
          <span id="color-find-swatch" class="color-swatch" aria-hidden="true"></span>
        </button>
        <p id="color-find-helper-text" class="helper-text">Tap the rectangle to hear the color.</p>
      </div>
      <div id="color-find-choice-grid" class="color-choice-grid" aria-label="Color choices"></div>
    `;
    document.querySelector("main.app-shell").append(screen);
    screen.querySelector("#color-find-back-button").addEventListener("click", () => {
      window.location.hash = "#/catalog";
      window.setTimeout(() => speakText("game catalog"), 60);
    });
    screen.querySelector("#color-find-prompt-card").addEventListener("click", handlePromptClick);
  }
  function syncVisibility() {
    if (window.location.hash === ROUTE) {
      ensureScreen();
      showScreen();
      return;
    }
    hideScreen();
  }
  function startGame() {
    state.scenarioIndex = 0;
    state.scenarios = createScenarios();
    state.isAdvancing = false;
    showScreen();
    renderScenario();
  }
  function createScenarios() {
    const firstRound = shuffleItems(COLORS).slice(0, 5).map((color) => Object.freeze({ color, hasColor: true }));
    const secondRound = firstRound.map((scenario) => Object.freeze({ color: scenario.color, hasColor: false }));
    return firstRound.concat(secondRound);
  }
  function showScreen() {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.toggle("screen-active", screen.id === "color-find-screen");
    });
    document.body.classList.add("is-game-active");
  }
  function hideScreen() {
    const screen = document.getElementById("color-find-screen");
    if (screen) {
      screen.classList.remove("screen-active");
    }
  }
  function renderScenario() {
    const scenario = getCurrentScenario();
    state.hasRevealedChoices = false;
    state.isAdvancing = false;
    getProgressElement().textContent = `${state.scenarioIndex + 1} / ${SESSION_COUNT}`;
    getHelperElement().textContent = scenario.hasColor ? "Tap the rectangle to hear the color." : "Tap the empty rectangle to hear the color.";
    const swatch = getSwatchElement();
    swatch.classList.toggle("is-empty", !scenario.hasColor);
    swatch.style.background = scenario.hasColor ? scenario.color.value : "";
    getChoiceGrid().replaceChildren();
  }
  function handlePromptClick() {
    const scenario = getCurrentScenario();
    speakText(scenario.color.word);
    if (state.hasRevealedChoices) {
      return;
    }
    state.hasRevealedChoices = true;
    getHelperElement().textContent = "Tap the matching color.";
    renderChoices(scenario.color);
  }
  function renderChoices(answer) {
    const others = COLORS.filter((color) => color.word !== answer.word);
    const choices = shuffleItems([answer, ...shuffleItems(others).slice(0, 3)]).map((choice) => createChoiceButton(choice, answer.word));
    getChoiceGrid().replaceChildren(...choices);
  }
  function createChoiceButton(color, answerWord) {
    const button = document.createElement("button");
    button.className = "color-choice";
    button.type = "button";
    button.style.background = color.value;
    button.setAttribute("aria-label", color.word);
    button.addEventListener("click", () => handleChoiceClick(color, answerWord, button));
    return button;
  }
  function handleChoiceClick(color, answerWord, button) {
    if (state.isAdvancing) {
      return;
    }
    speakText(color.word);
    if (color.word !== answerWord) {
      return;
    }
    state.isAdvancing = true;
    button.classList.add("is-found");
    window.setTimeout(advanceScenario, 420);
  }
  function advanceScenario() {
    const isFinished = state.scenarioIndex + 1 >= state.scenarios.length;
    if (isFinished) {
      getHelperElement().textContent = "Great color finding!";
      window.location.hash = "#/catalog";
      return;
    }
    state.scenarioIndex += 1;
    renderScenario();
  }
  function getCurrentScenario() {
    return state.scenarios[state.scenarioIndex] || state.scenarios[0];
  }
  function getProgressElement() {
    return document.getElementById("color-find-progress");
  }
  function getHelperElement() {
    return document.getElementById("color-find-helper-text");
  }
  function getSwatchElement() {
    return document.getElementById("color-find-swatch");
  }
  function getChoiceGrid() {
    return document.getElementById("color-find-choice-grid");
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
  function speakText(text) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
})();
