import mainEngine from "../index.js"
import randomIntFromInterval from "../randomNumber.js";

const description ='Find the greatest common divisor of given numbers.'

const gcd = (num1, num2) => {
    while (num2 !== 0) {
        let temp  = num2
        num2 = num1 % num2
        num1 = temp
    }
    return num1
}
const getQuestionAndAnswer = () => {
    const num1 = randomIntFromInterval(0, 100);
    const num2 = randomIntFromInterval(0, 100);
    const question = `${num1} ${num2}`;
    const questionRight = gcd(num1, num2);
    return [question, questionRight]
} 

const gcdGame = () => {
    mainEngine (getQuestionAndAnswer, description)
}
        

export default gcdGame