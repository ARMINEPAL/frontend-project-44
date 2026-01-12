import mainEngine from '../index.js'
import randomIntFromInterval from '../randomNumber.js'

const description = 'What number is missing in the progression?'

const progression = (start, step, numbersCount) => {
  let elements = []
  for (let i = 0; i < numbersCount; i += 1) {
    const currentElement = start + i * step
    elements.push(currentElement)
  }
  return elements
}

const missedElement = (elements, index) => {
  elements[index] = '..'
  return elements
}

const getQuestionAndAnswer = () => {
  const start = randomIntFromInterval(0, 10)
  const step = randomIntFromInterval(1, 10)
  const numbersCount = randomIntFromInterval(5, 10)
  const elements = progression(start, step, numbersCount)
  const index = randomIntFromInterval(0, elements.length - 1)
  const question = missedElement([...elements], index).join(' ')
  const questionRight = elements[index]
  return [question, questionRight]
}

const progressionGame = () => {
  mainEngine(getQuestionAndAnswer, description)
}

export default progressionGame
