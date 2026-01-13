import mainEngine from '../index.js'
import _ from 'lodash'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0 ? 'yes' : 'no'

const getQuestionAndAnswer = () => {
  const question = _.random(1, 100)
  const questionRight = isEven(question)
  return [question, questionRight]
}
const startEvenGame = () => {
  mainEngine (getQuestionAndAnswer, description)
}

export default startEvenGame
