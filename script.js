const problems = [
    { 
        function: "x^2", 
        correctAnswer: "\\frac{1}{3} x^3 + C", 
        options: [
            "\\frac{1}{3} x^3 + C",
            "\\frac{1}{2} x^2 + C",
            "x^3 + C",
            "2x + C"
        ] 
    },
    { 
        function: "3x", 
        correctAnswer: "\\frac{3}{2} x^2 + C", 
        options: [
            "\\frac{3}{2} x^2 + C",
            "3x^2 + C",
            "x^2 + C",
            "1.5x^2 + C"
        ] 
    },
    { 
        function: "2x", 
        correctAnswer: "x^2 + C", 
        options: [
            "2x^2 + C",
            "x^2 + C",
            "x^3 + C",
            "\\frac{2}{3} x^3 + C"
        ] 
    },
    { 
        function: "5", 
        correctAnswer: "5x + C", 
        options: [
            "5x + C",
            "x^5 + C",
            "25 + C",
            "5 + C"
        ] 
    },
    { 
        function: "4x^3", 
        correctAnswer: "x^4 + C", 
        options: [
            "x^4 + C",
            "\\frac{4}{5} x^5 + C",
            "4x^4 + C",
            "\\frac{1}{4} x^4 + C"
        ] 
    },
    { 
        function: "-\\sin(x)", 
        correctAnswer: "\\cos(x) + C", 
        options: [
            "-\\cos(x) + C",
            "\\cos(x) + C",
            "\\sin(x) + C",
            "-\\sin(x) + C"
        ] 
    },
    { 
        function: "e^x", 
        correctAnswer: "e^x + C", 
        options: [
            "e^x + C",
            "xe^x + C",
            "\\frac{1}{e^x} + C",
            "\\ln(x) + C"
        ] 
    },
    { 
        function: "x^{-1}", 
        correctAnswer: "\\ln|x| + C", 
        options: [
            "\\ln|x| + C",
            "-\\frac{1}{x} + C",
            "x \\ln(x) + C",
            "\\frac{1}{x} + C"
        ] 
    },
    { 
        function: "3x^2 + 2x", 
        correctAnswer: "x^3 + x^2 + C", 
        options: [
            "x^3 + x^2 + C",
            "\\frac{3}{4} x^4 + x^2 + C",
            "3x^3 + 2x + C",
            "\\frac{3}{2} x^3 + x + C"
        ] 
    },
    { 
        function: "\\frac{1}{x^2}", 
        correctAnswer: "-\\frac{1}{x} + C", 
        options: [
            "-\\frac{1}{x} + C",
            "\\frac{1}{x} + C",
            "-x + C",
            "-\\frac{1}{2} x^2 + C"
        ] 
    }
];

let currentProblem = 0;
let score = 0;

function displayProblem() {
    const problem = problems[currentProblem];
    document.getElementById("problem").innerHTML = `Find the antiderivative of: \\(${problem.function}\\)`;

    const optionsHtml = problem.options.map((option) => `
        <div class="option" onclick="checkAnswer('${option.replace(/\\/g, '\\\\')}')">
            \\(${option}\\)
        </div>
    `).join('');

    document.getElementById("options").innerHTML = optionsHtml;
    document.getElementById("feedback").innerText = '';
    MathJax.typeset(); // Rerender MathJax

    // Update score display
    document.getElementById("score").innerText = `Score: ${score}`;
}

function normalizeString(str) {
    return str.replace(/\s+/g, ' ').trim();
}

function checkAnswer(selectedOption) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.className = ''; // Reset classes

    // Normalize and log selected and correct answers for debugging
    const normalizedSelected = normalizeString(selectedOption);
    const normalizedCorrect = normalizeString(problems[currentProblem].correctAnswer);
    
    console.log("Normalized Selected Answer:", normalizedSelected);
    console.log("Normalized Correct Answer:", normalizedCorrect);
    
    // Log character codes for further diagnosis
    console.log("Character Codes Selected:", [...normalizedSelected].map(c => c.charCodeAt(0)));
    console.log("Character Codes Correct:", [...normalizedCorrect].map(c => c.charCodeAt(0)));

    // Compare using normalized strings
    if (normalizedSelected === normalizedCorrect) {
        feedbackElement.innerText = "Correct! Well done.";
        feedbackElement.classList.add("correct"); // Add class for correct feedback
        score++; // Increase score
    } else {
        feedbackElement.innerText = `Incorrect. The correct answer is: \\(${problems[currentProblem].correctAnswer}\\)`;
        feedbackElement.classList.remove("correct");
    }

    MathJax.typeset(); // Rerender MathJax for feedback
    currentProblem = (currentProblem + 1) % problems.length;
    setTimeout(displayProblem, 2000);
}

window.onload = displayProblem;
