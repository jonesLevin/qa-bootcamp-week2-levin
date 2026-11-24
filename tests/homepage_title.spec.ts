
import { test, expect } from '@playwright/test';

test('title matches expected value', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    await expect(page).toHaveTitle(/Practice Software Testing/i);
});