# 301-M2-ECON

Business-focused HTML game that teaches and tests these concepts:

- Principal-agent problems in organizations
- Risk-adjusted return calculations
- Portfolio theory for business/project mix decisions
- Moral hazard in guaranteed contracts
- Asset valuation under uncertainty
- Capital structure decisions
- Revenue recognition timing

## Project Files

- `index.html` -> app layout
- `styles.css` -> design and responsive styles
- `script.js` -> game logic, questions, scoring, report card

## Run Locally

1. Open Terminal.
2. Go to this folder:
   ```bash
   cd /Users/braydenwhite/Documents/301-M2-ECON
   ```
3. Start a local static server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open [http://localhost:8000](http://localhost:8000)

## Push To GitHub Account `braydenokley13-ux`

1. In GitHub (while logged into `braydenokley13-ux`), create a new empty repo named `301-M2-ECON`.
2. In Terminal, run:
   ```bash
   cd /Users/braydenwhite/Documents/301-M2-ECON
   git init
   git config user.name "braydenokley13-ux"
   git config user.email "YOUR_EMAIL_FOR_BRAYDENOKLEY13_UX"
   git add .
   git commit -m "Initial commit: 301-M2-ECON business economics game"
   git branch -M main
   git remote add origin https://github.com/braydenokley13-ux/301-M2-ECON.git
   git push -u origin main
   ```

### If you get login/account mismatch

- Option A (GitHub CLI):
  ```bash
  gh auth logout -h github.com
  gh auth login -h github.com
  ```
  Then sign in with `braydenokley13-ux`.

- Option B (HTTPS token): use a Personal Access Token from `braydenokley13-ux` as the password when Git asks.

## Enable GitHub Pages

1. Go to repo `Settings` -> `Pages`.
2. Under `Build and deployment`, choose `Deploy from a branch`.
3. Choose branch `main` and folder `/ (root)`.
4. Save.
5. Wait 1-2 minutes.
6. Your site URL will be:
   `https://braydenokley13-ux.github.io/301-M2-ECON/`
