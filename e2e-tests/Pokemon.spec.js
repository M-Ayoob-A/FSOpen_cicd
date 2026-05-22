// @ts-check
import { test, expect } from '@playwright/test'
import { describe } from 'node:test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')

    await expect(page.getByText('ivysaur')).toBeVisible()

    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })
  test('expect a pokemon description to be visible', async ({ page })=> 
  {
    await page.goto('http://localhost:8080/pokemon/ivysaur')
    await expect(
      page.getByText(
        'chlorophyll'
      )
    ).toBeVisible()
  })
})