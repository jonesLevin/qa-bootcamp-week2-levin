
import { test, expect } from '@playwright/test';

test('search returns expected results', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="search-query"]').click();
    await page.locator('[data-test="search-query"]').fill('pliers');
    await page.locator('[data-test="search-submit"]').click();

    await expect(page.locator('[data-test="search-caption"]')).toHaveText('Searched for: pliers');
    // await expect(page.getByTestId('search-results-count')).toHaveText("4 products found for 'pliers'", { timeout: 50000 });
});