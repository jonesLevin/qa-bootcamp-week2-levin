

import { test, expect } from '@playwright/test';
import { ProductSearchPage } from '../pages/ProductSearchPage';

test('shopper can search for a product by name', async ({ page }) => {
    const productSearchPage = new ProductSearchPage(page);

    await productSearchPage.navigate();

    await productSearchPage.searchForProduct('pliers');

    const results = await productSearchPage.getResults();
    await expect(results.first()).toHaveText(/pliers/i);
});
