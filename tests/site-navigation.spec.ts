import { test, expect } from '@playwright/test';

test.describe('Playwright documentation', () => {
  test('users can open the getting started guide from the home page', async ({ page }) => {
    await test.step('Open the Playwright home page', async () => {
      await page.goto('/');
    });

    await test.step('Open the getting started guide', async () => {
      await page.getByRole('link', { name: 'Get started' }).click();
    });

    await test.step('Verify the installation page', async () => {
      await expect(page).toHaveURL(/\/docs\/intro/);
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
  });

  test('the installation guide presents the supported package manager commands', async ({ page }) => {
    await test.step('Open the installation guide', async () => {
      await page.goto('/docs/intro');
    });

    await test.step('Verify the installation instructions', async () => {
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
      await expect(page.getByText('npm init playwright@latest')).toBeVisible();
      await expect(page.getByText('npx playwright install --with-deps')).toBeVisible();
    });
  });

  test('the code generation guide exposes the CLI workflow', async ({ page }) => {
    await test.step('Open the code generation guide', async () => {
      await page.goto('/docs/codegen');
    });

    await test.step('Verify the codegen workflow', async () => {
      await expect(page.getByRole('heading', { name: 'Codegen' })).toBeVisible();
      await expect(page.locator('code').filter({ hasText: 'npx playwright codegen' }).first()).toBeVisible();
      await expect(page.getByRole('link', { name: 'Test generator' })).toBeVisible();
    });
  });

  test('the home page links to MCP documentation', async ({ page }) => {
    await test.step('Open the Playwright home page', async () => {
      await page.goto('/');
    });

    await test.step('Open MCP documentation', async () => {
      await page.getByRole('link', { name: 'MCP', exact: true }).click();
    });

    await test.step('Verify the MCP introduction page', async () => {
      await expect(page).toHaveURL(/\/mcp\/introduction/);
      await expect(page.getByRole('heading', { name: 'Playwright MCP', exact: true })).toBeVisible();
      await expect(page.getByText('browser automation capabilities using Playwright')).toBeVisible();
    });
  });

  test('the home page exposes the Playwright API reference', async ({ page }) => {
    await test.step('Open the Playwright home page', async () => {
      await page.goto('/');
    });

    await test.step('Open the API reference', async () => {
      await page.getByRole('link', { name: 'API' }).click();
    });

    await test.step('Verify the API reference page', async () => {
      await expect(page).toHaveURL(/\/docs\/api\/class-playwright/);
      await expect(page.getByRole('heading', { name: 'Playwright' }).first()).toBeVisible();
    });
  });
});