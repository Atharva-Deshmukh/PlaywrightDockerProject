import { test, expect } from '@playwright/test';

test.describe('GET API', () => {
  test('API Test - 1', async ({ request }) => {
    const response = await request.get(`${process.env.API_BASE_URL}/users`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveLength(10);
  });

  test('Repository Variable', async () => {
    expect(Number(process.env.REPO_VARIABLE)).toBe(31);
  });
});
