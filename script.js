const prompt = require("prompt-sync")()

console.log("welcome to the computer quiz")

let correctAnswers = 0

const answer1 = prompt("What is the brain of the computer? ");
const correct_answer1 = "cpu";

if(answer1.toLowerCase() === correct_answer1) {
    console.log("your answer is correct")
    correctAnswers++
} else {
    console.log("you got it wrong!")
}



const answer2 = prompt("What is the full meaning of HP? ");
const correct_answer2 = "Hewllett Packard";

if(answer2.toLowerCase() === correct_answer2) {
    console.log("your answer is correct")
    correctAnswers++
} else {
    console.log("you got it wrong!")
}


console.log("you got", correctAnswers, "answers!")