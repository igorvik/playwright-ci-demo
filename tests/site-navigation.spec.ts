import { test, expect } from '@playwright/test';

test.describe('Playwright documentation', () => {
  test('users can open the getting started guide from the home page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page).toHaveURL(/\/docs\/intro/);
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('the installation guide presents the supported package manager commands', async ({ page }) => {
    await page.goto('/docs/intro');

    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await expect(page.getByText('npm init playwright@latest')).toBeVisible();
    await expect(page.getByText('npx playwright install --with-deps')).toBeVisible();
  });

  test('the code generation guide exposes the CLI workflow', async ({ page }) => {
    await page.goto('/docs/codegen');

    await expect(page.getByRole('heading', { name: 'Codegen' })).toBeVisible();
    await expect(page.locator('code').filter({ hasText: 'npx playwright codegen' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Test generator' })).toBeVisible();
  });
});