import { test, expect } from '@playwright/test';

test.describe('GET API', () => {
  test('API Test - 1', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveLength(10);
  });

  test('API Test - 2', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(4);
  });

  test('API Test - 3', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeLessThan(100);
  });
});