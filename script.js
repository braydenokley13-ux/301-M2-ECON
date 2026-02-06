const questionBank = [
  {
    concept: "Principal-Agent Problems",
    title: "Sales Team Incentives",
    scenario:
      "Your sales reps get paid only for signing deals. They now offer big discounts that hurt profit and cash collection.",
    prompt: "What is the smartest policy change?",
    options: [
      "Increase commission even more so they close faster.",
      "Keep the plan, but send warning emails about discount abuse.",
      "Pay on profit margin, cash collected, and 90-day customer retention.",
      "Remove all incentives and only pay fixed salary.",
    ],
    bestIndex: 2,
    okayIndexes: [1],
    hint:
      "Pick the answer that rewards long-term company success, not just quick signatures.",
    explainBest:
      "Great choice. This aligns worker incentives with the business goal: healthy, lasting revenue.",
    explainOkay:
      "This helps a little, but warnings alone usually do not fix bad incentives.",
    explainRisky:
      "This makes behavior worse or removes motivation without solving the root issue.",
    impact: 8,
  },
  {
    concept: "Principal-Agent Problems",
    title: "Manager Wants Bigger Empire",
    scenario:
      "A manager wants 3 new projects mostly to grow their team size, but returns look weak.",
    prompt: "What should leadership do?",
    options: [
      "Approve all projects to keep the manager happy.",
      "Require risk-adjusted return targets and independent review before approval.",
      "Let the manager decide alone because they know their team best.",
      "Cut every project budget by half, no matter quality.",
    ],
    bestIndex: 1,
    okayIndexes: [3],
    hint: "Good governance means the same rules apply to every project.",
    explainBest:
      "Correct. Objective review prevents personal goals from beating company value.",
    explainOkay:
      "This controls spending, but it can block strong projects too.",
    explainRisky:
      "This gives too much room for self-serving decisions or poor capital allocation.",
    impact: 7,
  },
  {
    concept: "Risk-Adjusted Return",
    title: "Choosing Between Two Projects",
    scenario:
      "Project A: return 14%, volatility 8%. Project B: return 11%, volatility 4%. Risk-free rate: 3%.",
    prompt: "Which has better risk-adjusted return (Sharpe style)?",
    options: [
      "Project A, because 14% is the highest raw return.",
      "Project B, because it gives more extra return per unit of risk.",
      "They are equal because risk-free rate is the same for both.",
      "You cannot compare projects with different volatility.",
    ],
    bestIndex: 1,
    okayIndexes: [0],
    hint:
      "Do not pick only by highest return. Think: return compared to risk taken.",
    explainBest:
      "Exactly. Project B has stronger return for each unit of risk.",
    explainOkay:
      "High return is good, but ignoring risk can lead to weaker decisions.",
    explainRisky:
      "This misses the core idea of risk-adjusted comparison.",
    impact: 8,
  },
  {
    concept: "Risk-Adjusted Return",
    title: "Same Return, Different Downside",
    scenario:
      "Two launches both expect 12% return. Launch X downside deviation is 3%; Launch Y is 6%.",
    prompt: "Which launch is better for downside protection?",
    options: [
      "Launch X because it has lower downside risk for the same return.",
      "Launch Y because bigger downside means bigger upside too.",
      "Either one, because expected return is identical.",
      "Flip a coin because downside metrics are not useful.",
    ],
    bestIndex: 0,
    okayIndexes: [2],
    hint: "If return is equal, the safer downside usually wins.",
    explainBest: "Right. Lower downside risk improves quality of return.",
    explainOkay:
      "Expected return matters, but ignoring downside risk leaves value on the table.",
    explainRisky: "This choice misunderstands risk-adjusted decision making.",
    impact: 7,
  },
  {
    concept: "Portfolio Theory",
    title: "Business Mix Volatility",
    scenario:
      "Option 1 uses two products that rise and fall together. Option 2 mixes one cyclical product with a stable subscription service.",
    prompt: "Which mix likely lowers total volatility?",
    options: [
      "Option 1, because similar products are easier to run.",
      "Option 2, because lower correlation improves diversification.",
      "Option 1, because cycles always recover quickly.",
      "Both options have equal risk if revenue target is the same.",
    ],
    bestIndex: 1,
    okayIndexes: [0],
    hint: "Think about how different cash flows move together or separately.",
    explainBest:
      "Correct. Lower correlation helps smooth total business risk.",
    explainOkay:
      "Operations simplicity can help execution, but diversification risk still matters.",
    explainRisky:
      "This ignores how portfolio effects reduce overall volatility.",
    impact: 7,
  },
  {
    concept: "Portfolio Theory",
    title: "Too Much Revenue from One Customer",
    scenario:
      "Your biggest client gives 70% of company revenue. A plan suggests adding many smaller clients at slightly lower margin.",
    prompt: "What is the strongest reason to accept some smaller clients?",
    options: [
      "Lower concentration risk can improve long-term firm stability and value.",
      "Margins do not matter if revenue grows.",
      "Big-client concentration is always safer.",
      "Diversification only matters for stock portfolios, not businesses.",
    ],
    bestIndex: 0,
    okayIndexes: [1],
    hint: "One customer leaving could crash the business. Spread risk.",
    explainBest:
      "Exactly. Less dependence on one buyer reduces major downside risk.",
    explainOkay:
      "Revenue growth helps, but margin still matters a lot.",
    explainRisky: "This keeps dangerous concentration risk in place.",
    impact: 6,
  },
  {
    concept: "Moral Hazard in Contracts",
    title: "Guaranteed Executive Bonus",
    scenario:
      "A CEO gets a big guaranteed bonus even if performance misses targets badly.",
    prompt: "How should the contract be redesigned?",
    options: [
      "Keep guarantee and make it larger to reward loyalty.",
      "Use performance-based bonus with clawbacks and multi-year goals.",
      "Pay only fixed salary forever with no performance pay.",
      "Give a one-time signing bonus and remove KPIs.",
    ],
    bestIndex: 1,
    okayIndexes: [2],
    hint: "Good contracts connect pay to results over time.",
    explainBest:
      "Correct. It reduces moral hazard and rewards real long-term outcomes.",
    explainOkay:
      "This lowers moral hazard, but no performance component can hurt motivation.",
    explainRisky:
      "This keeps or increases the incentive to take risk without accountability.",
    impact: 8,
  },
  {
    concept: "Moral Hazard in Contracts",
    title: "Vendor Costs Keep Rising",
    scenario:
      "A vendor is paid cost-plus with no cap. Costs rise, but efficiency does not improve.",
    prompt: "Which contract design best fixes incentives?",
    options: [
      "Extend current terms because change creates conflict.",
      "Move to shared-savings or fixed-price + efficiency bonus.",
      "Pay all invoices faster to build trust.",
      "Add cost caps and quality targets with penalties.",
    ],
    bestIndex: 1,
    okayIndexes: [3],
    hint: "Pick terms where vendor wins when your company saves money too.",
    explainBest:
      "Strong answer. Shared incentives push real cost control.",
    explainOkay:
      "This helps and adds control, but can be less flexible than shared-savings design.",
    explainRisky:
      "This keeps weak incentives and likely keeps costs high.",
    impact: 7,
  },
  {
    concept: "Asset Valuation Under Uncertainty",
    title: "Expected Value Purchase",
    scenario:
      "A new feature may earn next year cash flow of $9M (30%), $5M (50%), or $1M (20%). Discount rate is 8%.",
    prompt: "What is the best estimate of max price to pay today?",
    options: ["Around $6.2M", "Around $5.0M", "Around $7.5M", "Around $3.2M"],
    bestIndex: 1,
    okayIndexes: [0],
    hint: "Find expected cash flow first, then discount it back one year.",
    explainBest:
      "Nice. Expected value is about $5.4M, discounted to about $5.0M today.",
    explainOkay:
      "Close, but this overpays based on the weighted outcomes.",
    explainRisky: "This is too far from the expected-value estimate.",
    impact: 8,
  },
  {
    concept: "Asset Valuation Under Uncertainty",
    title: "Build Now or Wait",
    scenario:
      "You can build a facility now, but a new regulation may raise costs soon. Waiting 6 months gives clearer information.",
    prompt: "What does good valuation logic say?",
    options: [
      "Build now. Waiting always destroys value.",
      "Treat waiting as a real option that can have value.",
      "Ignore uncertainty and use one forecast only.",
      "Only compare next-quarter accounting profit.",
    ],
    bestIndex: 1,
    okayIndexes: [2],
    hint: "Sometimes flexibility has value when uncertainty is high.",
    explainBest:
      "Correct. Waiting can avoid bad downside states and increase expected value.",
    explainOkay:
      "Forecasting helps, but one forecast alone misses option value.",
    explainRisky: "This ignores uncertainty management in valuation.",
    impact: 6,
  },
  {
    concept: "Capital Structure Decisions",
    title: "Financing a Stable Company",
    scenario:
      "A mature company has steady cash flow and moderate growth plans.",
    prompt: "What funding mix is usually strongest?",
    options: [
      "Use only equity forever.",
      "Use mostly short-term debt at maximum leverage.",
      "Use a balanced debt-equity mix to gain tax benefits while controlling distress risk.",
      "Issue debt until lenders push back.",
    ],
    bestIndex: 2,
    okayIndexes: [0],
    hint: "Good capital structure balances benefits and risk.",
    explainBest:
      "Right. Moderate leverage can help, but too much debt is dangerous.",
    explainOkay:
      "Safe but expensive. You may miss useful debt benefits.",
    explainRisky:
      "This over-leverages and raises default/distress risk too much.",
    impact: 7,
  },
  {
    concept: "Capital Structure Decisions",
    title: "Financing a Volatile Startup",
    scenario:
      "A biotech startup has uncertain cash flows and long R&D timelines.",
    prompt: "What financing is usually safer?",
    options: [
      "Heavy debt so founders avoid dilution.",
      "More equity financing to preserve flexibility and reduce default risk.",
      "Debt only because interest is tax deductible.",
      "Mix equity with milestone partnerships and grants.",
    ],
    bestIndex: 1,
    okayIndexes: [3],
    hint: "Uncertain cash flow and heavy debt are a risky mix.",
    explainBest:
      "Correct. Equity gives runway and reduces bankruptcy pressure.",
    explainOkay:
      "Also strong in many cases, but funding size/timing can be less certain.",
    explainRisky: "Too much debt can break early-stage companies.",
    impact: 7,
  },
  {
    concept: "Revenue Recognition Timing",
    title: "Annual SaaS Prepayment",
    scenario:
      "A customer prepays $120,000 on January 1 for 12 months of software access.",
    prompt: "How should revenue be recognized?",
    options: [
      "Record all $120,000 as revenue on January 1.",
      "Record $10,000 per month as service is delivered.",
      "Record all revenue at end of the year.",
      "Never record it as revenue.",
    ],
    bestIndex: 1,
    okayIndexes: [2],
    hint: "Revenue follows service delivery, not just cash receipt.",
    explainBest:
      "Exactly. Match revenue to when service is actually provided.",
    explainOkay:
      "This delays too much, but at least avoids immediate overstatement.",
    explainRisky: "This breaks accrual matching and misstates performance.",
    impact: 8,
  },
  {
    concept: "Revenue Recognition Timing",
    title: "Bundle: Hardware + Support",
    scenario:
      "A company sells hardware plus 2 years of support in one package price.",
    prompt: "What is the best recognition approach?",
    options: [
      "Recognize all as hardware revenue at shipment.",
      "Recognize everything only when support ends.",
      "Allocate price between hardware and support, then recognize each when delivered.",
      "Recognize all revenue when payment clears.",
    ],
    bestIndex: 2,
    okayIndexes: [1],
    hint:
      "Separate the obligations. Hardware is one, support over time is another.",
    explainBest:
      "Correct. This is the clearest match between performance and reported revenue.",
    explainOkay:
      "Better than immediate recognition, but still not the best matching method.",
    explainRisky: "This can overstate revenue and hurt trust/compliance.",
    impact: 8,
  },
];

const conceptTips = {
  "Principal-Agent Problems":
    "Check whether incentives reward what the company truly wants long-term.",
  "Risk-Adjusted Return":
    "Compare return and risk together. High return alone is not enough.",
  "Portfolio Theory":
    "Diversification and lower correlation can stabilize total results.",
  "Moral Hazard in Contracts":
    "Design contracts so people share upside and downside fairly.",
  "Asset Valuation Under Uncertainty":
    "Use expected value and include flexibility when uncertainty is high.",
  "Capital Structure Decisions":
    "Match debt level to how stable and predictable cash flow is.",
  "Revenue Recognition Timing":
    "Recognize revenue when work is delivered, not only when cash arrives.",
};

const marketEvents = [
  {
    title: "Market Pulse: Input Costs Jump",
    text: "Supplier prices rose this week. Cash pressure increases if spending is not controlled.",
    effects: { cash: -6, risk: 4 },
  },
  {
    title: "Market Pulse: Positive Press",
    text: "A strong media story boosts customer trust and inbound demand.",
    effects: { trust: 6, growth: 4 },
  },
  {
    title: "Market Pulse: Compliance Alert",
    text: "A competitor got fined. Investors now care more about internal controls.",
    effects: { compliance: -4, risk: 5 },
  },
  {
    title: "Market Pulse: Hiring Freeze",
    text: "Labor market tightened. Team capacity drops for fast expansions.",
    effects: { growth: -4, cash: 2 },
  },
  {
    title: "Market Pulse: Big Enterprise Lead",
    text: "A major potential customer opens talks. Growth upside appears.",
    effects: { growth: 6, risk: 2 },
  },
  {
    title: "Market Pulse: Audit Season",
    text: "Boards are asking for cleaner reporting and stronger governance.",
    effects: { compliance: 5, trust: 2 },
  },
  {
    title: "Market Pulse: Competitive Price War",
    text: "Competitors slash prices. Margin pressure rises this round.",
    effects: { cash: -5, growth: 3, risk: 3 },
  },
  {
    title: "Market Pulse: Debt Market Tightening",
    text: "Borrowing costs are climbing. Over-leverage looks riskier now.",
    effects: { risk: 6, cash: -3 },
  },
];

const prepActions = {
  audit: {
    label: "Run Audit",
    text: "You tighten controls before decision-making.",
    effects: { compliance: 8, trust: 3, cash: -4, risk: -5 },
  },
  sales: {
    label: "Sales Sprint",
    text: "You push rapid growth before the board decision.",
    effects: { growth: 8, cash: 6, compliance: -4, risk: 4 },
  },
  training: {
    label: "Team Training",
    text: "You run manager training on incentives and accountability.",
    effects: { trust: 6, compliance: 5, cash: -3, growth: 2 },
  },
  hedge: {
    label: "Hedge Exposure",
    text: "You spend budget to lower downside volatility.",
    effects: { risk: -8, cash: -3, growth: -2 },
  },
};

const difficultyConfig = {
  analyst: { label: "Analyst", seconds: 35 },
  manager: { label: "Manager", seconds: 28 },
  cfo: { label: "CFO", seconds: 22 },
};

const styleProfiles = {
  balanced: {
    label: "Balanced Operator",
    metrics: { cash: 60, growth: 60, trust: 60, compliance: 60, risk: 40 },
  },
  aggressive: {
    label: "Aggressive Growth",
    metrics: { cash: 52, growth: 72, trust: 56, compliance: 52, risk: 50 },
  },
  defensive: {
    label: "Defensive Risk Control",
    metrics: { cash: 68, growth: 50, trust: 66, compliance: 70, risk: 30 },
  },
};

const HIGH_SCORE_KEY = "econ301M2HighScore";

const state = {
  playerName: "",
  difficulty: "manager",
  styleProfile: "balanced",
  timerMax: difficultyConfig.manager.seconds,
  timeLeft: difficultyConfig.manager.seconds,
  timerId: null,
  currentIndex: 0,
  selectedIndex: null,
  score: 0,
  valuation: 120,
  companyHealth: 60,
  currentStreak: 0,
  bestStreak: 0,
  correctCount: 0,
  answeredCount: 0,
  skippedCount: 0,
  roundLocked: false,
  prepUsedThisRound: false,
  currentPrepAction: null,
  lifelinesUsed: { fifty: false, hint: false, skip: false },
  eliminatedIndexes: [],
  questions: [],
  eventDeck: [],
  metrics: { cash: 60, growth: 60, trust: 60, compliance: 60, risk: 40 },
  conceptStats: {},
  roundDelta: { cash: 0, growth: 0, trust: 0, compliance: 0, risk: 0 },
  failed: false,
  failureReason: "",
};

const el = {
  startScreen: document.getElementById("start-screen"),
  gameScreen: document.getElementById("game-screen"),
  resultScreen: document.getElementById("result-screen"),
  playerName: document.getElementById("player-name"),
  difficultySelect: document.getElementById("difficulty-select"),
  styleSelect: document.getElementById("style-select"),
  highScore: document.getElementById("high-score"),
  startBtn: document.getElementById("start-btn"),
  restartBtn: document.getElementById("restart-btn"),

  roundText: document.getElementById("round-text"),
  scoreText: document.getElementById("score-text"),
  valuationText: document.getElementById("valuation-text"),
  healthText: document.getElementById("health-text"),
  streakText: document.getElementById("streak-text"),
  multiplierText: document.getElementById("multiplier-text"),
  timeText: document.getElementById("time-text"),
  progressFill: document.getElementById("progress-fill"),
  timerBar: document.getElementById("timer-bar"),

  cashValue: document.getElementById("cash-value"),
  growthValue: document.getElementById("growth-value"),
  trustValue: document.getElementById("trust-value"),
  complianceValue: document.getElementById("compliance-value"),
  riskValue: document.getElementById("risk-value"),
  cashFill: document.getElementById("cash-fill"),
  growthFill: document.getElementById("growth-fill"),
  trustFill: document.getElementById("trust-fill"),
  complianceFill: document.getElementById("compliance-fill"),
  riskFill: document.getElementById("risk-fill"),

  pulseTitle: document.getElementById("pulse-title"),
  pulseText: document.getElementById("pulse-text"),

  prepAudit: document.getElementById("prep-audit"),
  prepSales: document.getElementById("prep-sales"),
  prepTraining: document.getElementById("prep-training"),
  prepHedge: document.getElementById("prep-hedge"),

  lifeline5050: document.getElementById("lifeline-5050"),
  lifelineHint: document.getElementById("lifeline-hint"),
  lifelineSkip: document.getElementById("lifeline-skip"),
  actionStatus: document.getElementById("action-status"),

  conceptTag: document.getElementById("concept-tag"),
  questionTitle: document.getElementById("question-title"),
  scenarioText: document.getElementById("scenario-text"),
  promptText: document.getElementById("prompt-text"),
  options: document.getElementById("options"),
  comboBanner: document.getElementById("combo-banner"),
  feedback: document.getElementById("feedback"),
  submitBtn: document.getElementById("submit-btn"),
  nextBtn: document.getElementById("next-btn"),

  finalSummary: document.getElementById("final-summary"),
  finalScore: document.getElementById("final-score"),
  finalGrade: document.getElementById("final-grade"),
  finalAccuracy: document.getElementById("final-accuracy"),
  finalStreak: document.getElementById("final-streak"),
  finalHealth: document.getElementById("final-health"),
  finalValuation: document.getElementById("final-valuation"),
  achievements: document.getElementById("achievements"),
  conceptBreakdown: document.getElementById("concept-breakdown"),
  studyPlan: document.getElementById("study-plan"),
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getHighScore() {
  try {
    return Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
  } catch {
    return 0;
  }
}

function setHighScore(value) {
  try {
    localStorage.setItem(HIGH_SCORE_KEY, String(value));
  } catch {
    // Ignore storage errors in restricted environments.
  }
}

function updateHighScoreLabel() {
  el.highScore.textContent = `Best score so far: ${getHighScore()}`;
}

function showScreen(name) {
  [el.startScreen, el.gameScreen, el.resultScreen].forEach((screen) => {
    screen.classList.add("hidden");
  });

  if (name === "start") el.startScreen.classList.remove("hidden");
  if (name === "game") el.gameScreen.classList.remove("hidden");
  if (name === "result") el.resultScreen.classList.remove("hidden");
}

function buildConceptStats() {
  const concepts = [...new Set(questionBank.map((question) => question.concept))];
  return Object.fromEntries(
    concepts.map((concept) => [concept, { best: 0, okay: 0, risky: 0, total: 0 }])
  );
}

function getMultiplier() {
  const bonus = Math.min(state.currentStreak * 0.15, 1.2);
  return 1 + bonus;
}

function recalcHealthAndValuation() {
  const safeRisk = 100 - state.metrics.risk;
  state.companyHealth = Math.round(
    (state.metrics.cash +
      state.metrics.growth +
      state.metrics.trust +
      state.metrics.compliance +
      safeRisk) /
      5
  );

  const valuationRaw =
    80 +
    state.metrics.cash * 0.6 +
    state.metrics.growth * 0.7 +
    state.metrics.trust * 0.55 +
    state.metrics.compliance * 0.45 -
    state.metrics.risk * 0.5 +
    state.score / 55;

  state.valuation = clamp(Math.round(valuationRaw), 0, 800);
}

function updateMeter(fillEl, value, dangerWhenHigh = false) {
  const width = clamp(value, 0, 100);
  fillEl.style.width = `${width}%`;
  fillEl.classList.remove("low", "critical");

  if (!dangerWhenHigh) {
    if (width <= 20) fillEl.classList.add("critical");
    else if (width <= 35) fillEl.classList.add("low");
  } else {
    if (width >= 75) fillEl.classList.add("critical");
    else if (width >= 55) fillEl.classList.add("low");
  }
}

function updateMetricBoard() {
  el.cashValue.textContent = String(state.metrics.cash);
  el.growthValue.textContent = String(state.metrics.growth);
  el.trustValue.textContent = String(state.metrics.trust);
  el.complianceValue.textContent = String(state.metrics.compliance);
  el.riskValue.textContent = String(state.metrics.risk);

  updateMeter(el.cashFill, state.metrics.cash);
  updateMeter(el.growthFill, state.metrics.growth);
  updateMeter(el.trustFill, state.metrics.trust);
  updateMeter(el.complianceFill, state.metrics.compliance);
  updateMeter(el.riskFill, state.metrics.risk, true);
}

function updateHud() {
  el.roundText.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;
  el.scoreText.textContent = String(state.score);
  el.valuationText.textContent = String(state.valuation);
  el.healthText.textContent = String(state.companyHealth);
  el.streakText.textContent = String(state.currentStreak);
  el.multiplierText.textContent = `x${getMultiplier().toFixed(2)}`;
  el.timeText.textContent = `${state.timeLeft}s`;

  const progress = (state.currentIndex / state.questions.length) * 100;
  el.progressFill.style.width = `${progress}%`;

  const timerPct = (state.timeLeft / state.timerMax) * 100;
  el.timerBar.style.width = `${clamp(timerPct, 0, 100)}%`;
  el.timerBar.classList.remove("warn", "danger");
  if (timerPct <= 35) el.timerBar.classList.add("warn");
  if (timerPct <= 15) el.timerBar.classList.add("danger");

  updateMetricBoard();
}

function formatDelta(value) {
  if (value > 0) return `+${value}`;
  if (value < 0) return `${value}`;
  return "0";
}

function deltaSummary() {
  const keys = ["cash", "growth", "trust", "compliance", "risk"];
  return keys
    .map((key) => `${key}: ${formatDelta(state.roundDelta[key])}`)
    .join(" | ");
}

function applyMetricChanges(changes) {
  Object.entries(changes).forEach(([key, delta]) => {
    if (typeof state.metrics[key] !== "number") return;
    state.metrics[key] = clamp(state.metrics[key] + delta, 0, 100);
    state.roundDelta[key] += delta;
  });

  recalcHealthAndValuation();
  updateHud();
}

function resetRoundDelta() {
  state.roundDelta = { cash: 0, growth: 0, trust: 0, compliance: 0, risk: 0 };
}

function setActionStatus(text, tone = "") {
  el.actionStatus.textContent = text;
  el.actionStatus.classList.remove("good", "warn", "bad");
  if (tone) el.actionStatus.classList.add(tone);
}

function enablePrepButtons(enabled) {
  [el.prepAudit, el.prepSales, el.prepTraining, el.prepHedge].forEach((button) => {
    button.disabled = !enabled;
    button.classList.remove("active");
  });

  if (state.currentPrepAction && prepActions[state.currentPrepAction]) {
    const button = document.querySelector(`[data-action="${state.currentPrepAction}"]`);
    if (button) button.classList.add("active");
  }
}

function updateLifelineButtons() {
  el.lifeline5050.disabled = state.lifelinesUsed.fifty || state.roundLocked;
  el.lifelineHint.disabled = state.lifelinesUsed.hint || state.roundLocked;
  el.lifelineSkip.disabled = state.lifelinesUsed.skip || state.roundLocked;

  el.lifeline5050.classList.toggle("used", state.lifelinesUsed.fifty);
  el.lifelineHint.classList.toggle("used", state.lifelinesUsed.hint);
  el.lifelineSkip.classList.toggle("used", state.lifelinesUsed.skip);
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  clearTimer();
  state.timeLeft = state.timerMax;
  updateHud();

  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      updateHud();
      clearTimer();
      resolveDecision("timeout");
      return;
    }
    updateHud();
  }, 1000);
}

function getRandomEvent() {
  if (state.eventDeck.length === 0) {
    state.eventDeck = shuffleArray(marketEvents);
  }
  return state.eventDeck.pop();
}

function applyMarketEvent() {
  const event = getRandomEvent();
  el.pulseTitle.textContent = event.title;
  el.pulseText.textContent = event.text;
  applyMetricChanges(event.effects);
}

function setSelectedOption(index) {
  if (state.roundLocked) return;

  const buttons = el.options.querySelectorAll("button");
  if (!buttons[index] || buttons[index].disabled) return;

  state.selectedIndex = index;
  buttons.forEach((button, buttonIndex) => {
    button.classList.toggle("selected", buttonIndex === index);
  });
}

function renderOptions(question) {
  el.options.innerHTML = "";
  question.options.forEach((text, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.textContent = `${index + 1}. ${text}`;
    button.dataset.optionIndex = String(index);
    button.addEventListener("click", () => setSelectedOption(index));
    el.options.appendChild(button);
  });
}

function renderComboBanner() {
  if (state.currentStreak >= 2) {
    el.comboBanner.classList.remove("hidden");
    el.comboBanner.textContent = `Hot streak: ${state.currentStreak} best decisions in a row.`;
  } else {
    el.comboBanner.classList.add("hidden");
    el.comboBanner.textContent = "";
  }
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];

  state.roundLocked = false;
  state.selectedIndex = null;
  state.prepUsedThisRound = false;
  state.currentPrepAction = null;
  state.eliminatedIndexes = [];
  resetRoundDelta();

  el.conceptTag.textContent = question.concept;
  el.questionTitle.textContent = question.title;
  el.scenarioText.textContent = question.scenario;
  el.promptText.textContent = question.prompt;

  renderOptions(question);
  renderComboBanner();

  el.feedback.classList.add("hidden");
  el.feedback.className = "feedback hidden";
  el.feedback.innerHTML = "";
  el.submitBtn.disabled = false;
  el.nextBtn.classList.add("hidden");
  el.nextBtn.textContent =
    state.currentIndex === state.questions.length - 1 ? "See Board Report" : "Next Round";

  enablePrepButtons(true);
  updateLifelineButtons();
  setActionStatus("Round started. Choose one prep action, then lock your decision.");

  applyMarketEvent();
  startTimer();
  updateHud();
}

function applyPrepAction(actionKey) {
  if (state.roundLocked) return;
  if (state.prepUsedThisRound) {
    setActionStatus("You already used your prep action this round.", "warn");
    return;
  }

  const action = prepActions[actionKey];
  if (!action) return;

  state.prepUsedThisRound = true;
  state.currentPrepAction = actionKey;
  applyMetricChanges(action.effects);
  enablePrepButtons(false);
  const button = document.querySelector(`[data-action="${actionKey}"]`);
  if (button) button.classList.add("active");
  setActionStatus(`Prep action used: ${action.label}. ${action.text}`, "good");
}

function markAnswerOutcomes(question, selectedIndex) {
  const buttons = el.options.querySelectorAll("button");
  buttons.forEach((button, index) => {
    button.disabled = true;
    button.classList.remove("selected");

    if (index === question.bestIndex) {
      button.classList.add("outcome-best", "best-path");
      return;
    }

    if (question.okayIndexes.includes(index)) {
      button.classList.add("outcome-mid");
    } else {
      button.classList.add("outcome-risky");
    }

    if (selectedIndex === index) {
      button.classList.add("selected");
    }
  });
}

function classifyOutcome(question, selectedIndex) {
  if (selectedIndex === question.bestIndex) return "best";
  if (question.okayIndexes.includes(selectedIndex)) return "okay";
  return "risky";
}

function impactFromDecision(outcome, impact) {
  if (outcome === "best") {
    return {
      cash: Math.ceil(impact / 2),
      growth: impact,
      trust: Math.max(1, impact - 2),
      compliance: Math.max(1, Math.ceil(impact / 2)),
      risk: -Math.max(2, Math.ceil(impact / 2)),
    };
  }

  if (outcome === "okay") {
    return {
      cash: Math.max(1, Math.floor(impact / 3)),
      growth: Math.max(1, Math.floor(impact / 2)),
      trust: 1,
      compliance: 0,
      risk: 1,
    };
  }

  return {
    cash: -Math.ceil(impact / 2),
    growth: -Math.ceil(impact / 3),
    trust: -Math.ceil(impact / 2),
    compliance: -Math.ceil(impact / 2),
    risk: Math.max(3, Math.ceil(impact / 2)),
  };
}

function calculatePoints(outcome) {
  if (outcome === "best") {
    const streakIfBest = state.currentStreak + 1;
    const multiplier = 1 + Math.min(streakIfBest * 0.15, 1.2);
    const base = 100 + state.timeLeft * 2;
    return Math.round(base * multiplier);
  }

  if (outcome === "okay") {
    return 45 + Math.round(state.timeLeft * 0.8);
  }

  if (outcome === "skip") {
    return 20;
  }

  if (outcome === "timeout") {
    return -20;
  }

  return -10;
}

function buildFeedback(question, outcome, points) {
  if (outcome === "best") {
    return {
      tone: "good",
      title: "Great strategic call.",
      body: question.explainBest,
      extra: `You earned ${points} points with multiplier and time bonus.`,
    };
  }

  if (outcome === "okay") {
    return {
      tone: "mid",
      title: "Decent, but not optimal.",
      body: question.explainOkay,
      extra: `You earned ${points} points.`,
    };
  }

  if (outcome === "skip") {
    return {
      tone: "mid",
      title: "Round skipped.",
      body: "Skipping avoids a bad choice now, but momentum and learning drop.",
      extra: `You earned ${points} points.`,
    };
  }

  if (outcome === "timeout") {
    return {
      tone: "bad",
      title: "Time ran out.",
      body: "Under time pressure, delayed decisions can hurt operations and trust.",
      extra: `You earned ${points} points.`,
    };
  }

  return {
    tone: "bad",
    title: "High-risk decision.",
    body: question.explainRisky,
    extra: `You earned ${points} points.`,
  };
}

function checkFailureState() {
  if (state.metrics.cash <= 0) {
    state.failed = true;
    state.failureReason = "Cash hit zero. The company could not keep operations running.";
    return true;
  }

  if (state.metrics.trust <= 0) {
    state.failed = true;
    state.failureReason = "Trust collapsed. Customers and investors pulled back.";
    return true;
  }

  if (state.metrics.compliance <= 0) {
    state.failed = true;
    state.failureReason = "Compliance failed. Regulatory pressure halted growth.";
    return true;
  }

  if (state.metrics.risk >= 95) {
    state.failed = true;
    state.failureReason = "Risk became extreme. The board forced emergency shutdown.";
    return true;
  }

  if (state.companyHealth <= 10) {
    state.failed = true;
    state.failureReason = "Overall health fell too low to recover this run.";
    return true;
  }

  return false;
}

function resolveDecision(rawOutcome) {
  if (state.roundLocked) return;

  const question = state.questions[state.currentIndex];
  clearTimer();
  state.roundLocked = true;

  let outcome = rawOutcome;
  if (rawOutcome === "answer") {
    outcome = classifyOutcome(question, state.selectedIndex);
  }

  const stats = state.conceptStats[question.concept];
  stats.total += 1;

  if (outcome === "best") {
    stats.best += 1;
    state.correctCount += 1;
    state.currentStreak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.currentStreak);
  } else if (outcome === "okay") {
    stats.okay += 1;
    state.currentStreak = 0;
  } else {
    stats.risky += 1;
    state.currentStreak = 0;
  }

  if (outcome === "skip") {
    state.skippedCount += 1;
  } else {
    state.answeredCount += 1;
  }

  const points = calculatePoints(outcome);
  state.score = Math.max(0, state.score + points);

  if (outcome === "skip") {
    applyMetricChanges({ cash: -2, growth: -2, trust: -1, compliance: 0, risk: 1 });
  } else if (outcome === "timeout") {
    applyMetricChanges({ cash: -3, growth: -3, trust: -2, compliance: -1, risk: 3 });
  } else {
    applyMetricChanges(impactFromDecision(outcome, question.impact));
  }

  if (outcome === "answer" || outcome === "best" || outcome === "okay" || outcome === "risky") {
    markAnswerOutcomes(question, state.selectedIndex);
  } else {
    markAnswerOutcomes(question, null);
  }

  const feedbackPack = buildFeedback(question, outcome, points);
  el.feedback.className = `feedback ${feedbackPack.tone}`;
  el.feedback.classList.remove("hidden");
  el.feedback.innerHTML = `
    <h3>${feedbackPack.title}</h3>
    <p>${feedbackPack.body}</p>
    <p><strong>Best path:</strong> ${question.options[question.bestIndex]}</p>
    <p><strong>Round metric change:</strong> ${deltaSummary()}</p>
    <p>${feedbackPack.extra}</p>
  `;

  el.submitBtn.disabled = true;
  el.nextBtn.classList.remove("hidden");
  updateLifelineButtons();
  enablePrepButtons(false);
  setActionStatus(`Round resolved as: ${feedbackPack.title}`, feedbackPack.tone === "good" ? "good" : "warn");

  if (checkFailureState()) {
    el.nextBtn.textContent = "See Board Report";
  }

  updateHud();
}

function handleSubmit() {
  if (state.roundLocked) return;

  if (state.selectedIndex === null) {
    setActionStatus("Pick a decision option first.", "warn");
    return;
  }

  resolveDecision("answer");
}

function handleNextRound() {
  if (!state.roundLocked) return;

  if (state.failed || state.currentIndex >= state.questions.length - 1) {
    showResults();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function useFiftyFifty() {
  if (state.roundLocked || state.lifelinesUsed.fifty) return;

  const question = state.questions[state.currentIndex];
  const keep = new Set([question.bestIndex, ...question.okayIndexes.slice(0, 1)]);
  const eliminatePool = question.options
    .map((_, index) => index)
    .filter((index) => !keep.has(index));

  const eliminated = shuffleArray(eliminatePool).slice(0, 2);
  state.eliminatedIndexes = eliminated;

  const buttons = el.options.querySelectorAll("button");
  eliminated.forEach((index) => {
    const button = buttons[index];
    if (!button) return;
    button.disabled = true;
    button.classList.add("eliminated");
    if (state.selectedIndex === index) {
      state.selectedIndex = null;
      button.classList.remove("selected");
    }
  });

  state.lifelinesUsed.fifty = true;
  updateLifelineButtons();
  setActionStatus("50/50 used. Two weaker options were removed.", "good");
}

function useHint() {
  if (state.roundLocked || state.lifelinesUsed.hint) return;

  const question = state.questions[state.currentIndex];
  state.lifelinesUsed.hint = true;
  updateLifelineButtons();
  setActionStatus(`Hint: ${question.hint}`, "good");
}

function useSkip() {
  if (state.roundLocked || state.lifelinesUsed.skip) return;

  state.lifelinesUsed.skip = true;
  updateLifelineButtons();
  resolveDecision("skip");
}

function getLetterGrade(percent) {
  if (percent >= 92) return "A";
  if (percent >= 84) return "B";
  if (percent >= 75) return "C";
  if (percent >= 65) return "D";
  return "F";
}

function renderAchievements(accuracy) {
  const achievements = [];

  if (!state.failed) achievements.push("Survivor: completed the full 14-round business run.");
  if (state.bestStreak >= 4) achievements.push("Momentum Builder: reached a 4+ best-decision streak.");
  if (accuracy >= 80) achievements.push("Sharp Thinker: 80%+ strategic accuracy.");
  if (state.companyHealth >= 70) achievements.push("Healthy Operator: finished with strong company health.");
  if (state.metrics.risk <= 35) achievements.push("Risk Manager: kept risk controlled by endgame.");
  if (!state.lifelinesUsed.fifty && !state.lifelinesUsed.hint && !state.lifelinesUsed.skip) {
    achievements.push("No Training Wheels: completed run with no lifelines.");
  }

  if (achievements.length === 0) {
    achievements.push("No special badges this run. Replay and improve your strategy mix.");
  }

  el.achievements.innerHTML = "";
  achievements.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    el.achievements.appendChild(li);
  });
}

function renderConceptBreakdown() {
  el.conceptBreakdown.innerHTML = "";

  Object.entries(state.conceptStats).forEach(([concept, metrics]) => {
    const mastery = metrics.total === 0 ? 0 : Math.round((metrics.best / metrics.total) * 100);
    const card = document.createElement("article");
    card.className = "breakdown-card";
    card.innerHTML = `
      <p><strong>${concept}</strong></p>
      <p>Best: ${metrics.best} | Okay: ${metrics.okay} | Risky: ${metrics.risky}</p>
      <p>Mastery: ${mastery}%</p>
    `;
    el.conceptBreakdown.appendChild(card);
  });
}

function renderStudyPlan() {
  el.studyPlan.innerHTML = "";

  const weakConcepts = Object.entries(state.conceptStats)
    .filter(([, metrics]) => metrics.total > 0 && metrics.best / metrics.total < 0.65)
    .map(([concept]) => concept);

  if (weakConcepts.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Strong across all concepts. Next goal: increase speed and keep risk lower.";
    el.studyPlan.appendChild(li);
    return;
  }

  weakConcepts.forEach((concept) => {
    const li = document.createElement("li");
    li.textContent = `${concept}: ${conceptTips[concept]}`;
    el.studyPlan.appendChild(li);
  });
}

function showResults() {
  clearTimer();

  const maxPerRound = 220;
  const maxScore = state.questions.length * maxPerRound;
  const percent = Math.round((state.score / maxScore) * 100);
  const grade = getLetterGrade(percent);
  const accuracy =
    state.questions.length === 0
      ? 0
      : Math.round((state.correctCount / state.questions.length) * 100);

  if (state.score > getHighScore()) {
    setHighScore(state.score);
  }
  updateHighScoreLabel();

  const player = state.playerName ? `${state.playerName}, ` : "";
  const modeLabel = `${difficultyConfig[state.difficulty].label} mode`;

  if (state.failed) {
    el.finalSummary.textContent = `${player}your company run ended early in ${modeLabel}. ${state.failureReason}`;
  } else {
    el.finalSummary.textContent = `${player}you completed the full simulation in ${modeLabel}. You kept the company operating and finished with ${state.valuation} valuation.`;
  }

  el.finalScore.textContent = `${state.score} / ${maxScore}`;
  el.finalGrade.textContent = grade;
  el.finalAccuracy.textContent = `${accuracy}%`;
  el.finalStreak.textContent = String(state.bestStreak);
  el.finalHealth.textContent = String(state.companyHealth);
  el.finalValuation.textContent = String(state.valuation);

  renderAchievements(accuracy);
  renderConceptBreakdown();
  renderStudyPlan();
  showScreen("result");
}

function resetGameState() {
  state.playerName = el.playerName.value.trim();
  state.difficulty = el.difficultySelect.value;
  state.styleProfile = el.styleSelect.value;
  state.timerMax = difficultyConfig[state.difficulty].seconds;
  state.timeLeft = state.timerMax;
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.score = 0;
  state.valuation = 120;
  state.companyHealth = 60;
  state.currentStreak = 0;
  state.bestStreak = 0;
  state.correctCount = 0;
  state.answeredCount = 0;
  state.skippedCount = 0;
  state.roundLocked = false;
  state.prepUsedThisRound = false;
  state.currentPrepAction = null;
  state.lifelinesUsed = { fifty: false, hint: false, skip: false };
  state.eliminatedIndexes = [];
  state.questions = shuffleArray(questionBank);
  state.eventDeck = shuffleArray(marketEvents);
  state.metrics = { ...styleProfiles[state.styleProfile].metrics };
  state.conceptStats = buildConceptStats();
  state.failed = false;
  state.failureReason = "";

  resetRoundDelta();
  recalcHealthAndValuation();
  updateHud();
}

function startGame() {
  clearTimer();
  resetGameState();
  showScreen("game");
  renderQuestion();
}

function attachPrepListeners() {
  [el.prepAudit, el.prepSales, el.prepTraining, el.prepHedge].forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      applyPrepAction(action);
    });
  });
}

function handleKeyboard(event) {
  if (el.gameScreen.classList.contains("hidden")) return;

  const key = event.key.toLowerCase();

  if (["1", "2", "3", "4"].includes(key)) {
    event.preventDefault();
    setSelectedOption(Number(key) - 1);
    return;
  }

  if (key === "enter") {
    event.preventDefault();
    if (!el.submitBtn.disabled && !el.submitBtn.classList.contains("hidden")) {
      handleSubmit();
    }
    return;
  }

  if (key === "n") {
    event.preventDefault();
    if (!el.nextBtn.classList.contains("hidden")) {
      handleNextRound();
    }
    return;
  }

  if (key === "f") {
    event.preventDefault();
    useFiftyFifty();
    return;
  }

  if (key === "h") {
    event.preventDefault();
    useHint();
    return;
  }

  if (key === "s") {
    event.preventDefault();
    useSkip();
  }
}

el.startBtn.addEventListener("click", startGame);
el.restartBtn.addEventListener("click", startGame);
el.submitBtn.addEventListener("click", handleSubmit);
el.nextBtn.addEventListener("click", handleNextRound);
el.lifeline5050.addEventListener("click", useFiftyFifty);
el.lifelineHint.addEventListener("click", useHint);
el.lifelineSkip.addEventListener("click", useSkip);
document.addEventListener("keydown", handleKeyboard);

attachPrepListeners();
updateHighScoreLabel();
showScreen("start");
