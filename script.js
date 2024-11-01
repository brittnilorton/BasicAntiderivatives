const problems = [
    { function: "x^2", antiderivative: "1/3 * x^3 + C" },
    { function: "3x", antiderivative: "3/2 * x^2 + C" },
    { function: "sin(x)", antiderivative: "-cos(x) + C" },
    { function: "e^x", antiderivative: "e^x + C" },
    { function: "1/x", antiderivative: "ln|x| + C" }
];

let currentProblem = 0;

function displayProblem() {
    document.getElementById("problem").innerText = `Find the antiderivative of: ${problems[currentProblem].function}`;
    document.getElementById("answer").value = '';
    document.getElementById("feedback").innerText = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = problems[currentProblem].antiderivative;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("feedback").innerText = "Correct! Well done.";
    } else {
        document.getElementById("feedback").innerText = `Incorrect. The correct answer is: ${correctAnswer}`;
    }

    currentProblem = (currentProblem + 1) % problems.length;
    setTimeout(displayProblem, 2000);
}

window.onload = displayProblem;
