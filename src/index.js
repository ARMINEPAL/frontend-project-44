import readlineSync from 'readline-sync'

const mainEngine = (getQuestionAndAnswer, description) => {

    console.log ('Welcome to the Brain Games!')
    
    const name = readlineSync.question('May I have your name?: ')
    
    console.log (`Hello, ${name}`);
    console.log(description);

    const roundCounts = 3;
    for (let i = 1; i <= roundCounts; i += 1) {
        const [question, questionRight] = getQuestionAndAnswer();

        console.log(`Question: ${question}`);

        const answer = readlineSync.question('Your answer: ');

        if (questionRight == answer) {
            console.log('Correct!')
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionRight}'.`);
            console.log(`Let's try again, ${name}!`)
return
        }
    }
console.log(`Congratulations, ${name}!`);
}

export default mainEngine;