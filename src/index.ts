/**
 * This program calculates the needed length for a board foot
 *     to be 144 inches³.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-09-24
 */

import promptSync from 'prompt-sync'

/**
 * @param {number} userHeight parameter one as a number
 * @param {number} userWidth parameter two as a number
 * @returns {number} return userLength value as a number
 */
function BoardFoot (userHeight: number, userWidth: number): number {
  // process
  const volume = 144
  const userLength = volume / (userWidth * userHeight)

  return userLength
}

const prompt = promptSync()

try {
  // input & output
  const numberInput = prompt('Enter a width: ')
  const userWidth = parseFloat(numberInput)
  const numberInputTwo = prompt('Enter a height: ')
  const userHeight = parseFloat(numberInputTwo)

  if (isNaN(userWidth) || isNaN(userHeight)) {
    throw new Error('\nThat is an invalid number.')
  }

  if (userWidth <= 0 || userHeight <= 0) {
    throw new Error('\nThat is an invalid number.')
  }

  console.log(
    `\nThe required length is ${BoardFoot(
      userHeight,
      userWidth
    )} inches for the board foot to be 144 inches³.`
  )
  console.log('\nDone.')
} catch (e) {
  console.log('\nThat is an invalid input.')
}
