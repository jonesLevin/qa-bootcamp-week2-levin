
import { test, expect } from '@playwright/test';

test('invalid login displays an error message', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-sign-in"]').click();
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill('jones@gmail.com');
    await page.locator('[data-test="email"]').press('Tab');
    await page.locator('[data-test="password"]').fill('1234567890');
    await page.locator('[data-test="login-submit"]').click();

    await expect(page.getByText('Invalid email or password')).toBeVisible();
});