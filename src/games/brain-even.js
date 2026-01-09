import mainEngine from "../index.js"
import randomIntFromInterval from "../randomNumber.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".'


const isEven = (number) => number % 2 === 0 ? 'yes' : 'no';

const getQuestionAndAnswer = () => {
    const question = randomIntFromInterval(1, 100);
    const questionRight = isEven(question);
    return [question, questionRight]
} 
const startEvenGame = () => {
    mainEngine (getQuestionAndAnswer, description)
}
        

export default startEvenGame