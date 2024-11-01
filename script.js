const problems = [
    { function: "x^2", antiderivative: "\\frac{1}{3} x^3 + C" },
    { function: "3x", antiderivative: "\\frac{3}{2} x^2 + C" },
    { function: "\\sin(x)", antiderivative: "-\\cos(x) + C" },
    { function: "e^x", antiderivative: "e^x + C" },
    { function: "\\frac{1}{x}", antiderivative: "\\ln|x| + C" }
];

let currentProblem = 0;

function displayProblem() {
    document.getElementById("problem").innerHTML = `Find the antiderivative of: \\(${problems[currentProblem].function}\\)`;
    document.getElementById("answer").value = '';
    document.getElementById("feedback").innerText = '';
    MathJax.typeset(); // Rerender the MathJax
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = problems[currentProblem].antiderivative;

    const feedbackElement = document.getElementById("feedback");
    feedbackElement.className = ''; // Reset classes

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.innerText = "Correct! Well done.";
        feedbackElement.classList.add("correct"); // Add class for correct feedback
    } else {
        feedbackElement.innerText = `Incorrect. The correct answer is: \\(${correctAnswer}\\)`;
        feedbackElement.classList.remove("correct");
    }

    MathJax.typeset(); // Rerender the MathJax for feedback
    currentProblem = (currentProblem + 1) % problems.length;
    setTimeout(displayProblem, 2000);
}

window.onload = displayProblem;
