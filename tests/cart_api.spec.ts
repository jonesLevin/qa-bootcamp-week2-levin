

import { test, expect } from '@playwright/test';

const BASE_URL = 'https://api.practicesoftwaretesting.com';

test('creates a cart, adds a product to the cart then verifies the response', async ({ request }) => {
    let cartId: string | undefined;

    try {
        // 1. Create a cart
        const createCartResponse = await request.post(`${BASE_URL}/carts`);

        expect(createCartResponse.status()).toBe(201);

        const cart = await createCartResponse.json();
        cartId = cart.id;

        expect(cart).toHaveProperty('id');
        expect(typeof cart.id).toBe('string');

        // 2. Get products and select one 
        const productsResponse = await request.get(`${BASE_URL}/products`);

        expect(productsResponse.status()).toBe(200);

        const productsBody = await productsResponse.json();
        const product = productsBody.data[0];

        expect(product).toBeDefined();
        expect(product).toHaveProperty('id');

        // 3. Add the product to the cart
        const quantity = 2;

        const addProductResponse = await request.post(
            `${BASE_URL}/carts/${cartId}`,
            {
                data: {
                    product_id: product.id,
                    quantity: quantity,
                },
            }
        );

        expect(addProductResponse.ok()).toBeTruthy();

        const addedProduct = await addProductResponse.json();
        expect(addedProduct.result).toBe('item added or updated');


        // 5. Read the cart back
        const getCartResponse = await request.get(
            `${BASE_URL}/carts/${cartId}`
        );

        expect(getCartResponse.status()).toBe(200);

        const cartContents = await getCartResponse.json();

        expect(cartContents).toBeDefined();
    } finally {
        // 6. Clean up the cart even if an assertion fails
        if (cartId) {
            await request.delete(`${BASE_URL}/carts/${cartId}`);
        }
    }
});

test('returns 404 when requesting a cart that does not exist', async ({ request }) => {
    const nonexistentCartId = '00000000-0000-0000-0000-000000000000';

    const response = await request.get(
        `${BASE_URL}/carts/${nonexistentCartId}`
    );

    expect(response.status()).toBe(404);
});
