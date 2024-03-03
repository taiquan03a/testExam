const storedQuestionsJSON = localStorage.getItem("questions");
const questions = JSON.parse(storedQuestionsJSON);

const questionButtons = document.querySelectorAll(".question-button");
const questionContainer = document.querySelector("#question-container");

questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const questionNumbers = button.getAttribute("data-question").split(",");
    const questionsToShow = questionNumbers.map((number) =>
      getQuestion(number)
    );

    questionContainer.innerHTML = "";
    questionsToShow.forEach((question) => {
      questionIndex = question.id - 1;
      questionContainer.appendChild(
        createQuestionElement(question, questionIndex)
      );
    });
  });
});
function getQuestion(questionNumber) {
  const index = questionNumber - 1;
  return questions[index];
}
function checkAnswers(selectedAnswers, questionId) {
  questions[questionId].selectAnswer = selectedAnswers;
}

function createQuestionElement(question, questionIndex) {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");

  const questionText = document.createElement("p");
  questionText.textContent = question.question;
  questionText.style.fontWeight = "bold";

  questionElement.appendChild(questionText);

  question.options.forEach((option, index) => {
    const optionId = `option-${questionIndex}-${index}`;

    const optionInput = document.createElement("input");
    optionInput.setAttribute("type", "radio");
    optionInput.setAttribute("id", optionId);
    optionInput.setAttribute("name", `question-${questionIndex}`);
    optionInput.setAttribute("value", option);

    if (optionInput.value === questions[questionIndex].selectAnswer) {
      optionInput.checked = true;
    }
    optionInput.addEventListener("change", () => {
      const value = document.querySelector(
        `input[name="question-${questionIndex}"]:checked`
      ).value;

      checkAnswers(value, questionIndex);
    });
    optionInput.setAttribute("disabled", true);
    const optionLabel = document.createElement("label");
    optionLabel.setAttribute("for", optionId);
    optionLabel.textContent = option;
    optionLabel.style.marginLeft = "10px";

    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option");
    optionContainer.appendChild(optionInput);
    optionContainer.appendChild(optionLabel);

    optionContainer.style.marginTop = "10px";
    optionContainer.style.padding = "5px 10px";
    optionContainer.style.border = "1px solid #ccc";
    optionContainer.style.borderRadius = "5px";
    optionContainer.style.cursor = "pointer";

    questionElement.appendChild(optionContainer);
  });
  questionElement.style.marginBottom = "20px";

  return questionElement;
}
