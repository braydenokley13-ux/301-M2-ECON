const questionBank = [
  {
    concept: "Principal-Agent Problems",
    title: "Commission Plan Misalignment",
    scenario:
      "A software company pays account executives only on signed contract value. Reps started offering heavy discounts and long payment terms to hit quarterly targets.",
    prompt: "Which policy best fixes the incentive problem?",
    options: [
      "Raise commissions so reps close even more deals quickly.",
      "Keep the plan and only audit discounts at year-end.",
      "Tie pay to gross margin, on-time collections, and 90-day retention.",
      "Remove all sales incentives and pay everyone the same salary.",
    ],
    correctIndex: 2,
    explanation:
      "This aligns agent behavior with owner value. Margin, cash collection, and retention reduce the gap between short-term sales behavior and long-term firm performance.",
    impact: 7,
  },
  {
    concept: "Principal-Agent Problems",
    title: "Empire-Building Manager",
    scenario:
      "A division manager wants to launch three new projects to increase team size and personal influence, even though projected returns are weak.",
    prompt: "What governance step is most economically sound?",
    options: [
      "Approve all projects to keep leadership motivated.",
      "Require each project to pass a risk-adjusted hurdle rate and independent capital review.",
      "Let the manager decide without review to move faster.",
      "Cut the entire budget by 50% no matter the project quality.",
    ],
    correctIndex: 1,
    explanation:
      "Formal capital allocation rules and independent review reduce self-serving decisions and force investment toward value-creating projects.",
    impact: 6,
  },
  {
    concept: "Risk-Adjusted Return",
    title: "Sharpe Ratio Decision",
    scenario:
      "You can fund one initiative. Project A has expected return 14% with 8% volatility. Project B has expected return 11% with 4% volatility. Risk-free rate is 3%.",
    prompt: "Which project has the better Sharpe ratio?",
    options: [
      "Project A, because 14% is the highest raw return.",
      "Project B, because (11%-3%)/4% is higher than (14%-3%)/8%.",
      "Both are equal because risk-free rate is the same.",
      "Cannot compare because they have different volatilities.",
    ],
    correctIndex: 1,
    explanation:
      "Sharpe A = 1.375 and Sharpe B = 2.0. Project B delivers more excess return per unit of risk.",
    impact: 8,
  },
  {
    concept: "Risk-Adjusted Return",
    title: "Downside Risk Focus",
    scenario:
      "Two product launches both forecast 12% expected return. Launch X has downside deviation 3%, Launch Y has downside deviation 6%. Risk-free is 2%.",
    prompt: "Using a downside-risk lens (Sortino-style), what is the better choice?",
    options: [
      "Launch X, because it has lower downside risk for the same return.",
      "Launch Y, because higher downside deviation means larger upside too.",
      "Either one, because expected return is equal.",
      "Choose randomly because downside measures are not useful.",
    ],
    correctIndex: 0,
    explanation:
      "When expected return is the same, lower downside deviation improves risk-adjusted performance.",
    impact: 6,
  },
  {
    concept: "Portfolio Theory",
    title: "Product Mix Correlation",
    scenario:
      "Your firm can combine two revenue lines. Option 1 pairs two highly cyclical products that move together. Option 2 pairs one cyclical product with a subscription service that is weakly correlated.",
    prompt: "Which portfolio should lower total earnings volatility?",
    options: [
      "Option 1, because similar products are easier to manage.",
      "Option 2, because lower correlation improves diversification.",
      "Option 1, because cyclical demand always rebounds quickly.",
      "Both options have the same risk if expected revenue is equal.",
    ],
    correctIndex: 1,
    explanation:
      "Portfolio theory favors lower correlation. Mixing less-correlated cash flows can reduce total volatility without sacrificing expected return.",
    impact: 7,
  },
  {
    concept: "Portfolio Theory",
    title: "Customer Concentration Risk",
    scenario:
      "Seventy percent of revenue comes from one enterprise customer. A proposal offers lower-margin SMB contracts across many buyers.",
    prompt: "What is the strongest economics argument for taking some SMB contracts?",
    options: [
      "Concentration risk falls, which can improve risk-adjusted enterprise value.",
      "Margins do not matter as long as contracts are signed.",
      "Single-customer dependence is always better for negotiation speed.",
      "Diversification only matters in stock markets, not operating businesses.",
    ],
    correctIndex: 0,
    explanation:
      "Reducing single-customer dependence lowers cash flow concentration risk. Lower firm risk can increase valuation multiples.",
    impact: 6,
  },
  {
    concept: "Moral Hazard in Contracts",
    title: "Guaranteed Executive Bonus",
    scenario:
      "A CEO contract guarantees a large annual bonus even if EBITDA misses target by a wide margin.",
    prompt: "Which redesign best limits moral hazard?",
    options: [
      "Keep the guarantee and increase bonus size for loyalty.",
      "Move to performance-based bonus with clawbacks and multi-year metrics.",
      "Pay all compensation as fixed salary forever.",
      "Add a one-time signing bonus and remove all KPIs.",
    ],
    correctIndex: 1,
    explanation:
      "Tying pay to long-term, measurable outcomes and adding clawbacks discourages risk-shifting and short-term manipulation.",
    impact: 8,
  },
  {
    concept: "Moral Hazard in Contracts",
    title: "Cost-Plus Vendor Contract",
    scenario:
      "Your logistics vendor is paid cost-plus with no cap, and costs keep rising without productivity gains.",
    prompt: "What contract structure is most likely to improve incentives?",
    options: [
      "Extend the same contract for stability.",
      "Switch to shared-savings or fixed-price-with-bonus-for-efficiency terms.",
      "Pay every invoice immediately with no review.",
      "Only threaten to terminate without changing terms.",
    ],
    correctIndex: 1,
    explanation:
      "Cost-plus without controls can reward higher spending. Shared-savings or efficiency-based structures align effort with cost control.",
    impact: 7,
  },
  {
    concept: "Asset Valuation Under Uncertainty",
    title: "Expected Value Pricing",
    scenario:
      "A new AI feature could generate next-year cash flow of $9M (30%), $5M (50%), or $1M (20%). Discount rate is 8%.",
    prompt: "What is the highest rational price to pay today (approximately)?",
    options: [
      "$6.2M",
      "$5.0M",
      "$7.5M",
      "$3.2M",
    ],
    correctIndex: 1,
    explanation:
      "Expected cash flow = 0.3*9 + 0.5*5 + 0.2*1 = 5.4M. Present value is about 5.4 / 1.08 = 5.0M.",
    impact: 8,
  },
  {
    concept: "Asset Valuation Under Uncertainty",
    title: "Value of Waiting",
    scenario:
      "You can build a new facility now, but upcoming regulation could increase compliance costs dramatically. Waiting 6 months gives better information.",
    prompt: "What does sound valuation logic suggest?",
    options: [
      "Invest immediately because delay always destroys value.",
      "Treat waiting as a real option that can have positive value under uncertainty.",
      "Ignore uncertainty and use a single-point forecast only.",
      "Value the project only by accounting profit next quarter.",
    ],
    correctIndex: 1,
    explanation:
      "Under uncertainty, managerial flexibility can be valuable. Waiting can avoid downside states and improve expected project value.",
    impact: 6,
  },
  {
    concept: "Capital Structure Decisions",
    title: "Debt vs Equity for Stable Cash Flows",
    scenario:
      "A mature business has predictable operating cash flows and moderate growth needs.",
    prompt: "Which financing strategy is typically most defensible?",
    options: [
      "Use only equity forever and avoid any debt.",
      "Use only short-term debt at maximum leverage.",
      "Use a balanced mix of debt and equity to capture tax shield while controlling distress risk.",
      "Issue debt until covenant limits are breached.",
    ],
    correctIndex: 2,
    explanation:
      "For stable firms, moderate leverage can lower WACC via tax benefits, but excessive debt raises expected distress costs.",
    impact: 7,
  },
  {
    concept: "Capital Structure Decisions",
    title: "Financing a Volatile Startup",
    scenario:
      "An early-stage biotech company has uncertain cash flows and long R&D cycles.",
    prompt: "What capital structure choice is usually safer?",
    options: [
      "High debt loading to avoid dilution at all costs.",
      "Heavier equity financing to preserve flexibility and reduce default risk.",
      "Debt-only financing because interest is tax deductible.",
      "Convert all expenses to leases so leverage is hidden.",
    ],
    correctIndex: 1,
    explanation:
      "When cash flows are uncertain, high leverage can force distress. More equity buys time and strategic flexibility.",
    impact: 6,
  },
  {
    concept: "Revenue Recognition Timing",
    title: "Annual SaaS Contract",
    scenario:
      "A customer prepays $120,000 for a 12-month software subscription on January 1.",
    prompt: "How should revenue be recognized under accrual principles?",
    options: [
      "Recognize all $120,000 as revenue on January 1 when cash arrives.",
      "Recognize $10,000 each month as service is delivered.",
      "Recognize revenue only when the contract ends.",
      "Do not recognize revenue because it is deferred forever.",
    ],
    correctIndex: 1,
    explanation:
      "Revenue is recognized when performance obligations are satisfied, not simply when cash is collected.",
    impact: 8,
  },
  {
    concept: "Revenue Recognition Timing",
    title: "Hardware + Support Bundle",
    scenario:
      "A company sells hardware plus two years of support for one bundled price.",
    prompt: "Which recognition approach is most accurate?",
    options: [
      "Recognize the full contract as hardware revenue at shipment.",
      "Recognize nothing until support period ends.",
      "Allocate transaction price to hardware and support, then recognize each as obligations are delivered.",
      "Recognize all revenue once payment clears, regardless of delivery.",
    ],
    correctIndex: 2,
    explanation:
      "Bundled contracts require allocation across distinct obligations. Hardware is recognized at transfer; support is recognized over time.",
    impact: 7,
  },
];

const conceptTips = {
  "Principal-Agent Problems":
    "Check whether incentives reward the behavior owners truly want, not just short-term visible output.",
  "Risk-Adjusted Return":
    "Always compare return per unit of risk using a metric like Sharpe or downside-adjusted return.",
  "Portfolio Theory":
    "Look beyond standalone returns. Correlation and concentration risk matter for total portfolio stability.",
  "Moral Hazard in Contracts":
    "Use performance gates, clawbacks, and shared upside/downside so behavior changes in the right direction.",
  "Asset Valuation Under Uncertainty":
    "Use probability-weighted cash flows, discounting, and real-option logic when timing flexibility has value.",
  "Capital Structure Decisions":
    "Choose leverage based on cash flow stability and distress risk, not tax shield alone.",
  "Revenue Recognition Timing":
    "Recognize revenue when obligations are fulfilled, not when cash is received.",
};

const HIGH_SCORE_KEY = "econ301M2HighScore";

const state = {
  playerName: "",
  currentIndex: 0,
  score: 0,
  companyHealth: 50,
  selectedIndex: null,
  questions: [],
  conceptStats: {},
};

const el = {
  startScreen: document.getElementById("start-screen"),
  gameScreen: document.getElementById("game-screen"),
  resultScreen: document.getElementById("result-screen"),
  startBtn: document.getElementById("start-btn"),
  restartBtn: document.getElementById("restart-btn"),
  playerName: document.getElementById("player-name"),
  highScore: document.getElementById("high-score"),
  roundText: document.getElementById("round-text"),
  scoreText: document.getElementById("score-text"),
  healthText: document.getElementById("health-text"),
  conceptTag: document.getElementById("concept-tag"),
  questionTitle: document.getElementById("question-title"),
  scenarioText: document.getElementById("scenario-text"),
  promptText: document.getElementById("prompt-text"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  submitBtn: document.getElementById("submit-btn"),
  nextBtn: document.getElementById("next-btn"),
  finalSummary: document.getElementById("final-summary"),
  finalScore: document.getElementById("final-score"),
  finalGrade: document.getElementById("final-grade"),
  finalHealth: document.getElementById("final-health"),
  conceptBreakdown: document.getElementById("concept-breakdown"),
  studyPlan: document.getElementById("study-plan"),
};

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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
    // Ignore storage errors in locked-down environments.
  }
}

function updateHighScoreLabel() {
  const highScore = getHighScore();
  el.highScore.textContent = `Best score so far: ${highScore}`;
}

function buildConceptStats() {
  const concepts = [...new Set(questionBank.map((item) => item.concept))];
  return Object.fromEntries(
    concepts.map((concept) => [concept, { correct: 0, total: 0 }])
  );
}

function resetGameState() {
  state.currentIndex = 0;
  state.score = 0;
  state.companyHealth = 50;
  state.selectedIndex = null;
  state.questions = shuffleArray(questionBank);
  state.conceptStats = buildConceptStats();
}

function showScreen(screenName) {
  const all = [el.startScreen, el.gameScreen, el.resultScreen];
  all.forEach((screen) => screen.classList.add("hidden"));

  if (screenName === "start") {
    el.startScreen.classList.remove("hidden");
  }
  if (screenName === "game") {
    el.gameScreen.classList.remove("hidden");
  }
  if (screenName === "result") {
    el.resultScreen.classList.remove("hidden");
  }
}

function updateHud() {
  el.roundText.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;
  el.scoreText.textContent = String(state.score);
  el.healthText.textContent = String(state.companyHealth);
}

function markSelectedOption(index) {
  const optionButtons = el.options.querySelectorAll("button");
  optionButtons.forEach((button, optionIndex) => {
    button.classList.toggle("selected", optionIndex === index);
  });
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  state.selectedIndex = null;
  updateHud();

  el.conceptTag.textContent = question.concept;
  el.questionTitle.textContent = question.title;
  el.scenarioText.textContent = question.scenario;
  el.promptText.textContent = question.prompt;

  el.options.innerHTML = "";
  question.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.textContent = optionText;
    button.addEventListener("click", () => {
      state.selectedIndex = index;
      markSelectedOption(index);
    });
    el.options.appendChild(button);
  });

  el.feedback.classList.add("hidden");
  el.feedback.innerHTML = "";
  el.submitBtn.disabled = false;
  el.nextBtn.classList.add("hidden");
  el.nextBtn.textContent =
    state.currentIndex === state.questions.length - 1 ? "See Report Card" : "Next Round";
}

function scoreAnswer() {
  if (state.selectedIndex === null) {
    el.feedback.classList.remove("hidden");
    el.feedback.innerHTML =
      '<p class="feedback-title bad">Pick an answer first.</p><p>Tap one option, then submit.</p>';
    return;
  }

  const question = state.questions[state.currentIndex];
  const isCorrect = state.selectedIndex === question.correctIndex;
  const stats = state.conceptStats[question.concept];

  stats.total += 1;
  if (isCorrect) {
    stats.correct += 1;
    state.score += 100;
    state.companyHealth = Math.min(100, state.companyHealth + question.impact);
  } else {
    const penalty = Math.max(2, Math.ceil(question.impact / 2));
    state.companyHealth = Math.max(0, state.companyHealth - penalty);
  }

  const optionButtons = el.options.querySelectorAll("button");
  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correctIndex) {
      button.classList.add("correct");
    }
    if (index === state.selectedIndex && index !== question.correctIndex) {
      button.classList.add("incorrect");
    }
  });

  const titleClass = isCorrect ? "good" : "bad";
  const titleText = isCorrect ? "Correct decision." : "Not the best decision.";
  const answerText = question.options[question.correctIndex];

  el.feedback.classList.remove("hidden");
  el.feedback.innerHTML = `
    <p class="feedback-title ${titleClass}">${titleText}</p>
    <p>${question.explanation}</p>
    <p><strong>Best answer:</strong> ${answerText}</p>
  `;

  updateHud();
  el.submitBtn.disabled = true;
  el.nextBtn.classList.remove("hidden");
}

function getLetterGrade(percent) {
  if (percent >= 90) return "A";
  if (percent >= 80) return "B";
  if (percent >= 70) return "C";
  if (percent >= 60) return "D";
  return "F";
}

function renderConceptBreakdown() {
  el.conceptBreakdown.innerHTML = "";

  Object.entries(state.conceptStats).forEach(([concept, metrics]) => {
    const percent = metrics.total === 0 ? 0 : Math.round((metrics.correct / metrics.total) * 100);
    const card = document.createElement("article");
    card.className = "breakdown-card";
    card.innerHTML = `
      <p><strong>${concept}</strong></p>
      <p>Correct: ${metrics.correct} / ${metrics.total}</p>
      <p>Mastery: ${percent}%</p>
    `;
    el.conceptBreakdown.appendChild(card);
  });
}

function renderStudyPlan() {
  el.studyPlan.innerHTML = "";

  const weakConcepts = Object.entries(state.conceptStats)
    .filter(([, metrics]) => metrics.total > 0 && metrics.correct / metrics.total < 0.7)
    .map(([concept]) => concept);

  if (weakConcepts.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Strong work across all concepts. Replay and aim for a perfect score.";
    el.studyPlan.appendChild(item);
    return;
  }

  weakConcepts.forEach((concept) => {
    const item = document.createElement("li");
    item.textContent = `${concept}: ${conceptTips[concept]}`;
    el.studyPlan.appendChild(item);
  });
}

function showResults() {
  const maxScore = state.questions.length * 100;
  const percent = Math.round((state.score / maxScore) * 100);
  const grade = getLetterGrade(percent);
  const highScoreBefore = getHighScore();

  if (state.score > highScoreBefore) {
    setHighScore(state.score);
  }
  updateHighScoreLabel();

  const nameText = state.playerName ? `${state.playerName}, ` : "";
  el.finalSummary.textContent = `${nameText}you completed all rounds. Your economics decision score is ${percent}%.`;
  el.finalScore.textContent = `${state.score} / ${maxScore}`;
  el.finalGrade.textContent = grade;
  el.finalHealth.textContent = String(state.companyHealth);

  renderConceptBreakdown();
  renderStudyPlan();
  showScreen("result");
}

function handleNextRound() {
  if (state.currentIndex >= state.questions.length - 1) {
    showResults();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function startGame() {
  state.playerName = el.playerName.value.trim();
  resetGameState();
  showScreen("game");
  renderQuestion();
}

el.startBtn.addEventListener("click", startGame);
el.submitBtn.addEventListener("click", scoreAnswer);
el.nextBtn.addEventListener("click", handleNextRound);
el.restartBtn.addEventListener("click", startGame);

updateHighScoreLabel();
showScreen("start");
