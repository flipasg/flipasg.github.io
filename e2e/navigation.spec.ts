import { expect, test } from '@playwright/test'

test('site navigation and UX', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page.getByText('About Me')).toBeVisible()
  await expect(page.getByText('Projects')).toBeVisible()
  await expect(page.getByText('Blog')).toBeVisible()
  await expect(page.getByText('Skills')).toBeVisible()
  // Example navigation test
  await page.click('text=Projects')
  await expect(page.getByText('Projects')).toBeVisible()
})
