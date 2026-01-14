import readlineSync from 'readline-sync'
import greeting from './cli.js'

const roundCounts = 3

const mainEngine = (getQuestionAndAnswer, description) => {
  const name = greeting()
  console.log(description)

  for (let i = 1; i <= roundCounts; i += 1) {
    const [question, questionRight] = getQuestionAndAnswer()

    console.log(`Question: ${question}`)

    const answer = readlineSync.question('Your answer: ')

    if (questionRight == answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionRight}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default mainEngine
