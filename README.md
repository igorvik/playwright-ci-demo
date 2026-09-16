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