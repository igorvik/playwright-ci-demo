# Playwright CI Demo

This project runs browser tests locally and in GitHub Actions.

## Setup

```bash
npm install
npx playwright install chromium
```

## Run tests

```bash
npm test
```

The suite runs against Chromium, Firefox, and WebKit. TypeScript can be checked independently with:

```bash
npm run typecheck
```

The HTML report is generated in `playwright-report/`. Open it with:

```bash
npm run report
```

Useful local modes:

```bash
npm run test:headed
npm run test:ui
```

The workflow in `.github/workflows/playwright.yml` runs on pushes to `main` and on pull requests. It installs Chromium, runs the suite, and uploads the HTML report as a workflow artifact.

On pushes to `main`, the workflow also publishes the HTML report to GitHub Pages. Open the `github-pages` deployment environment or the workflow summary to review the report in a browser. Enable **Settings > Pages > Source > GitHub Actions** once for the repository before the first deployment.