import { test, expect } from '@playwright/test';

test('visual animation test', async ({ page }) => {
  await page.goto('/');
  
  // Check initial render
  const container = await page.locator('.illusion-container');
  await expect(container).toBeVisible();
  
  // Capture initial state
  const initialStyle = await container.evaluate(el => el.style.animation);
  
  // Click and verify animation change
  await container.click();
  const newStyle = await container.evaluate(el => el.style.animation);
  expect(newStyle).not.toBe(initialStyle);
});

test('accessibility', async ({ page }) => {
  await page.goto('/');
  
  // Test keyboard navigation
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => document.activeElement?.tagName);
  expect(focused.toLowerCase()).toBe('div');
  
  // Check for ARIA attributes
  const container = await page.locator('.illusion-container');
  await expect(container).toHaveAttribute('role', 'button');
});