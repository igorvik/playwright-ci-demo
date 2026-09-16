import { test, expect } from '@playwright/test';

test('Playwright home page has the expected title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Playwright/);
});

test('Playwright home page links to the docs', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
});