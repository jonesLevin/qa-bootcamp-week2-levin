

import { Page, Locator } from '@playwright/test';

export class ProductSearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly productNames: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('[data-test="search-query"]');
        this.searchButton = page.locator('[data-test="search-submit"]');
        this.productNames = page.locator('[data-test="product-name"]');
    }

    async navigate() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async searchForProduct(productName: string) {
        await this.searchInput.click();
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async getResults() {
        return this.page.locator('[data-test="search_completed"]');
    }
}
