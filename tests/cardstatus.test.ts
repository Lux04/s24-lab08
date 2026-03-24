import { describe, expect, test } from '@jest/globals'
import { newFlashCard } from '../src/cards/flashcard.js'
import { newCardStatus } from '../src/cards/cardstatus.js'

describe('CardStatus', () => {
  test('should return associated card', () => {
    const card = newFlashCard('Q1', 'A1')
    const status = newCardStatus(card)

    expect(status.getCard()).toEqual(card)
  })

  test('should start with empty results', () => {
    const card = newFlashCard('Q1', 'A1')
    const status = newCardStatus(card)

    expect(status.getResults()).toEqual([])
  })

  test('should record results in order', () => {
    const card = newFlashCard('Q1', 'A1')
    const status = newCardStatus(card)

    status.recordResult(true)
    status.recordResult(false)
    status.recordResult(true)

    expect(status.getResults()).toEqual([true, false, true])
  })

  test('getResults should return a copy, not the original array', () => {
    const card = newFlashCard('Q1', 'A1')
    const status = newCardStatus(card)

    status.recordResult(true)

    const results = status.getResults()
    results.push(false)

    expect(status.getResults()).toEqual([true])
  })

  test('clearResults should reset results', () => {
    const card = newFlashCard('Q1', 'A1')
    const status = newCardStatus(card)

    status.recordResult(true)
    status.recordResult(false)
    status.clearResults()

    expect(status.getResults()).toEqual([])
  })
})