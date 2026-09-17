import { test, expect } from '@playwright/test';

test('Playwright home page has the expected title', async ({ page }) => {
  await test.step('Open the Playwright home page', async () => {
    await page.goto('/');
  });

  await test.step('Verify the page title identifies Playwright', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('Playwright home page links to the docs', async ({ page }) => {
  await test.step('Open the Playwright home page', async () => {
    await page.goto('/');
  });

  await test.step('Open the getting started documentation', async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
  });

  await test.step('Verify the documentation URL', async () => {
    await expect(page).toHaveURL(/.*intro/);
  });
});