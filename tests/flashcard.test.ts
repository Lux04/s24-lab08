import { describe, expect, test } from '@jest/globals'
import { newFlashCard } from '../src/cards/flashcard.js'

describe('FlashCard', () => {
  test('should create card and return question and answer', () => {
    const card = newFlashCard('What is Java?', 'A programming language')

    expect(card.getQuestion()).toBe('What is Java?')
    expect(card.getAnswer()).toBe('A programming language')
  })

  test('checkSuccess should ignore case and surrounding spaces', () => {
    const card = newFlashCard('Capital of Mongolia', 'Ulaanbaatar')

    expect(card.checkSuccess('ulaanbaatar')).toBe(true)
    expect(card.checkSuccess('   ULAANBAATAR   ')).toBe(true)
    expect(card.checkSuccess('Darkhan')).toBe(false)
  })

  test('toString should return correct format', () => {
    const card = newFlashCard('Q1', 'A1')

    expect(card.toString()).toBe('FlashCard[Q1, A1]')
  })

  test('equals should return true for same question and answer', () => {
    const card1 = newFlashCard('Q1', 'A1')
    const card2 = newFlashCard('Q1', 'A1')
    const card3 = newFlashCard('Q2', 'A2')

    expect(card1.equals(card2)).toBe(true)
    expect(card1.equals(card3)).toBe(false)
  })
})