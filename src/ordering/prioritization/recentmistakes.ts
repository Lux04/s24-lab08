import { CardStatus } from '../../cards/cardstatus.js'
import { CardOrganizer } from '../cardorganizer.js'

function newRecentMistakesFirstSorter (): CardOrganizer {
  /**
   * Checks whether the card was answered incorrectly in the last round.
   *
   * @param cardStatus The {@link CardStatus} object
   * @return true if the latest result is incorrect, otherwise false
   */
  function hasRecentMistake (cardStatus: CardStatus): boolean {
    const results = cardStatus.getResults()

    if (results.length === 0) {
      return false
    }

    return !results[results.length - 1]
  }

  return {
    /**
     * Orders the cards so that those answered incorrectly in the last round
     * appear first, while preserving the original order inside each group.
     *
     * @param cards The {@link CardStatus} objects to order.
     * @return The ordered cards.
     */
    reorganize: function (cards: CardStatus[]): CardStatus[] {
      const recentMistakes = cards.filter(card => hasRecentMistake(card))
      const others = cards.filter(card => !hasRecentMistake(card))

      return [...recentMistakes, ...others]
    }
  }
};

export { newRecentMistakesFirstSorter }
