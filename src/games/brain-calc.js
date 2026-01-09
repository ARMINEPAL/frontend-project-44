import mainEngine from "../index.js"
import randomIntFromInterval from "../randomNumber.js";

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
    const num1 = randomIntFromInterval(0, 10);
    const num2 = randomIntFromInterval(0, 10);
    const operator = operators[randomIntFromInterval(0,2)]
    const question = `${num1} ${operator} ${num2}`
    const questionRight = operation(num1, num2, operator);
    return [question, questionRight]
} 
const calcGame = () => {
    mainEngine (getQuestionAndAnswer, description)
}
        

export default calcGame