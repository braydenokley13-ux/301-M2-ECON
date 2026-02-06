# 301-M2-ECON

Interactive business simulation game for 9th-10th graders.

Students play as a strategy leader and make economic decisions across 14 rounds. It teaches and tests:

- Principal-agent problems
- Risk-adjusted return
- Portfolio theory in business decisions
- Moral hazard in contracts
- Asset valuation under uncertainty
- Capital structure decisions
- Revenue recognition timing

## Why This Feels Like a Real Game

- Live business metrics: cash, growth, trust, compliance, risk
- Random market pulse events each round
- Prep actions with tradeoffs before each decision
- Timed rounds with difficulty levels
- Streak multipliers and valuation growth
- Lifelines: 50/50, hint, skip
- Win/fail state based on company health and risk
- End-of-run board report with achievements and study plan

## Files

- `index.html` -> game layout
- `styles.css` -> visuals and responsive UI
- `script.js` -> simulation logic and questions

## Run Locally

1. Open terminal.
2. Go to the project:
   ```bash
   cd /Users/braydenwhite/Documents/301-M2-ECON
   ```
3. Start server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open [http://localhost:8000](http://localhost:8000)

## GitHub Pages

1. Push files to repo root.
2. Open repo `Settings` -> `Pages`.
3. Under `Build and deployment`:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Save.

Live URL format:
`https://braydenokley13-ux.github.io/301-M2-ECON/`
