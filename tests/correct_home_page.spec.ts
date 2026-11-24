
import { test, expect } from '@playwright/test';

test('correct home page', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await expect(page.getByRole('link', { name: 'Practice Software Testing -' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sort' })).toBeVisible();
    // await expect(page.getByTitle('Home Categories Hand ToolsPower ToolsOtherSpecial ToolsRentalsContactSign in EN')).toBeVisible();
});
