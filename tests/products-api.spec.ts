

import { test, expect } from '@playwright/test';

test('GET products returns a successful response with product data', async ({ request }) => {
    const response = await request.get(
        'https://api.practicesoftwaretesting.com/products'
    );

    // Check that the API responds successfully
    expect(response.status()).toBe(200);

    // Read the response body
    const body = await response.json();

    // Check that the first product has a name
    expect(body.data[0].name).toBeTruthy();
});
