const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('') // This goes to your localhost:8080
    await expect(page.getByText('ivysaur')).toBeVisible()
  })

  test('pokemon page can be navigated to', async ({ page }) => {
    await page.goto('')
    await page.click('text=ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})