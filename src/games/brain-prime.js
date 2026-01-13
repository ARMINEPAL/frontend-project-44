import mainEngine from '../index.js'
import _ from 'lodash'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num < 2) return 'no'
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no'
  }
  return 'yes'
}

const getQuestionAndAnswer = () => {
  const question = _.random(0, 100)
  const questionRight = isPrime(question)
  return [question, questionRight]
}

const primeGame = () => {
  mainEngine(getQuestionAndAnswer, description)
}

export default primeGame
