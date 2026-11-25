
import { test, expect } from '@playwright/test';

test('search for pliers returns relevant products', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="search-query"]').click();
    await page.locator('[data-test="search-query"]').fill('pliers');
    await page.locator('[data-test="search-submit"]').click();

    const locator = page.locator('[data-test="search_completed"]');

    await expect(locator.first()).toHaveText(/pliers/i);
});