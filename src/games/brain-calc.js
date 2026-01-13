import mainEngine from '../index.js'
import _ from 'lodash'

const description = 'What is the result of the expression?'

const operators = ['+', '-', '*']

const operation = (num1, num2, operator) => {
  let result

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    default:
      result = null
  }

  return result
}

const getQuestionAndAnswer = () => {
  const num1 = _.random(0, 10)
  const num2 = _.random(0, 10)
  const operator = operators[_.random(0, 2)]
  const question = `${num1} ${operator} ${num2}`
  const questionRight = operation(num1, num2, operator)
  return [question, questionRight]
}
const calcGame = () => {
  mainEngine (getQuestionAndAnswer, description)
}

export default calcGame
