const toggleIcon = document.getElementById("toggleIcon");
const accountInfo = document.querySelector(".infomation_account");

toggleIcon.addEventListener("click", function () {
  accountInfo.classList.toggle("hidden");
});
const headingTimes = document.querySelector(".heading__times");
let timeRemaining = 10 * 60; // 10 phút tính bằng giây

function updateCountdown() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  headingTimes.textContent = formattedTime;

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    const questionsJSON = JSON.stringify(questions);
    localStorage.setItem("questions", questionsJSON);
    const score = calculateScore(questions);

    window.location.href = "/score.html?score=" + score;
  } else {
    timeRemaining--;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
window.Array = [1, 2, 3, 4, 5];
const questions = [
  {
    id: 1,
    question: "Câu hỏi 1: Đâu là quốc gia lớn nhất thế giới?",
    options: ["A. Trung Quốc", "B. Nga", "C. Mỹ", "D. Anh"],
    correctAnswer: "B. Nga",
    selectAnswer: "",
  },
  {
    id: 2,
    question:
      "Câu hỏi 2: Ai là vị tướng lĩnh quân đội nổi tiếng của La Mã cổ đại?",
    options: [
      "A. Julius Caesar",
      "B. Alexander Đại đế",
      "C. Napoleon Bonaparte",
    ],
    correctAnswer: "A. Julius Caesar",
    selectAnswer: "",
  },
  {
    id: 3,
    question: "Câu hỏi 3: Đâu là loài vật thông minh nhất trên Trái Đất?",
    options: ["A. Khỉ", "B. Cá heo", "C. Vượn"],
    correctAnswer: "B. Cá heo",
    selectAnswer: "",
  },
  {
    id: 4,
    question: "Câu hỏi 4: Ai là tác giả cuốn tiểu thuyết Harry Potter?",
    options: ["A. J.K. Rowling", "B. Stephen King", "C. Dan Brown"],
    correctAnswer: "A. J.K. Rowling",
    selectAnswer: "",
  },
  {
    id: 5,
    question: "Câu hỏi 5: Đâu là ngôn ngữ lập trình phổ biến nhất hiện nay?",
    options: ["A. Python", "B. Java", "C. C++"],
    correctAnswer: "A. Python",
    selectAnswer: "",
  },
  {
    id: 6,
    question: "Ai là tác giả cuốn tiểu thuyết 'To Kill a Mockingbird'?",
    options: ["A. Harper Lee", "B. F. Scott Fitzgerald", "C. Ernest Hemingway"],
    correctAnswer: "A. Harper Lee",
    selectAnswer: "",
  },
  {
    id: 7,
    question: "Ai là tác giả cuốn tiểu thuyết '1984'?",
    options: ["A. George Orwell", "B. Aldous Huxley", "C. Ray Bradbury"],
    correctAnswer: "A. George Orwell",
    selectAnswer: "",
  },
  {
    id: 8,
    question: "Ai là tác giả cuốn tiểu thuyết 'Pride and Prejudice'?",
    options: ["A. Jane Austen", "B. Emily Brontë", "C. Charlotte Brontë"],
    correctAnswer: "A. Jane Austen",
    selectAnswer: "",
  },
  {
    id: 9,
    question: "Ai là tác giả cuốn tiểu thuyết 'The Great Gatsby'?",
    options: ["A. F. Scott Fitzgerald", "B. Ernest Hemingway", "C. Mark Twain"],
    correctAnswer: "A. F. Scott Fitzgerald",
    selectAnswer: "",
  },
  {
    id: 10,
    question: "Ai là tác giả cuốn tiểu thuyết 'Moby Dick'?",
    options: ["A. Herman Melville", "B. Nathaniel Hawthorne", "C. Mark Twain"],
    correctAnswer: "A. Herman Melville",
    selectAnswer: "",
  },
  {
    id: 11,
    question: "Ai là tác giả cuốn tiểu thuyết 'The Catcher in the Rye'?",
    options: [
      "A. J.D. Salinger",
      "B. F. Scott Fitzgerald",
      "C. Ernest Hemingway",
    ],
    correctAnswer: "A. J.D. Salinger",
    selectAnswer: "",
  },
  {
    id: 12,
    question: "Ai là tác giả cuốn tiểu thuyết 'Brave New World'?",
    options: ["A. Aldous Huxley", "B. George Orwell", "C. Ray Bradbury"],
    correctAnswer: "A. Aldous Huxley",
    selectAnswer: "",
  },
  {
    id: 13,
    question: "Ai là tác giả cuốn tiểu thuyết 'Jane Eyre'?",
    options: ["A. Charlotte Brontë", "B. Emily Brontë", "C. Jane Austen"],
    correctAnswer: "A. Charlotte Brontë",
    selectAnswer: "",
  },
  {
    id: 14,
    question: "Ai là tác giả cuốn tiểu thuyết 'The Lord of the Rings'?",
    options: ["A. J.R.R. Tolkien", "B. C.S. Lewis", "C. J.K. Rowling"],
    correctAnswer: "A. J.R.R. Tolkien",
    selectAnswer: "",
  },
  {
    id: 15,
    question: "Ai là tác giả cuốn tiểu thuyết 'The Chronicles of Narnia'?",
    options: ["A. C.S. Lewis", "B. J.R.R. Tolkien", "C. Roald Dahl"],
    correctAnswer: "A. C.S. Lewis",
    selectAnswer: "",
  },
  {
    id: 16,
    question: "Phép tính 2 + 2 bằng bao nhiêu?",
    options: ["A. 3", "B. 4", "C. 5"],
    correctAnswer: "B. 4",
    selectAnswer: "",
  },
  {
    id: 17,
    question: "Phép tính 5 x 7 bằng bao nhiêu?",
    options: ["A. 20", "B. 35", "C. 42"],
    correctAnswer: "C. 42",
    selectAnswer: "",
  },
  {
    id: 18,
    question: "Phép tính 10 - 3 bằng bao nhiêu?",
    options: ["A. 5", "B. 7", "C. 10"],
    correctAnswer: "B. 7",
    selectAnswer: "",
  },
  {
    id: 19,
    question: "Phép tính 15 / 3 bằng bao nhiêu?",
    options: ["A. 2", "B. 5", "C. 15"],
    correctAnswer: "B. 5",
    selectAnswer: "",
  },
  {
    id: 20,
    question: "Phép tính 8 + 4 * 2 bằng bao nhiêu?",
    options: ["A. 16", "B. 20", "C. 24"],
    correctAnswer: "C. 24",
    selectAnswer: "",
  },
  {
    id: 21,
    question: "Phép tính 2^3 bằng bao nhiêu?",
    options: ["A. 2", "B. 4", "C. 8"],
    correctAnswer: "C. 8",
    selectAnswer: "",
  },
  {
    id: 22,
    question: "Phép tính căn bậc hai của 16 bằng bao nhiêu?",
    options: ["A. 2", "B. 4", "C. 8"],
    correctAnswer: "B. 4",
    selectAnswer: "",
  },
  {
    id: 23,
    question: "Phép tính 7! (giai thừa của 7) bằng bao nhiêu?",
    options: ["A. 14", "B. 35", "C. 5040"],
    correctAnswer: "C. 5040",
    selectAnswer: "",
  },
  {
    id: 24,
    question: "Phép tính 3.14 làm tròn đến mấy chữ số thập phân?",
    options: ["A. 1", "B. 2", "C. 3"],
    correctAnswer: "B. 2",
    selectAnswer: "",
  },
  {
    id: 25,
    question: "Phép tính 2^(-4) bằng bao nhiêu?",
    options: ["A. 1/2", "B. 1/4", "C. 1/16"],
    correctAnswer: "C. 1/16",
    selectAnswer: "",
  },
  {
    id: 26,
    question: "Phép tính 9 mod 4 (phần dư của phép chia) bằng bao nhiêu?",
    options: ["A. 1", "B. 2", "C. 3"],
    correctAnswer: "C. 3",
    selectAnswer: "",
  },
  {
    id: 27,
    question: "Phép tính 2 * 3^2 bằng bao nhiêu?",
    options: ["A. 6", "B. 18", "C. 24"],
    correctAnswer: "B. 18",
    selectAnswer: "",
  },
  {
    id: 28,
    question: "Phép tính log(100) cơ số 10 bằng bao nhiêu?",
    options: ["A. 1", "B. 2", "C. 10"],
    correctAnswer: "B. 2",
    selectAnswer: "",
  },
  {
    id: 29,
    question: "Phép tính 3/4 + 1/2 bằng bao nhiêu?",
    options: ["A. 1/8", "B. 5/4", "C. 7/4"],
    correctAnswer: "C. 7/4",
    selectAnswer: "",
  },
  {
    id: 30,
    question: "Phép tính 2^5 bằng bao nhiêu?",
    options: ["A. 8", "B. 16", "C. 32"],
    correctAnswer: "C. 32",
    selectAnswer: "",
  },
];

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

    if (option === question.selectAnswer) {
      optionInput.checked = true;
    }

    optionInput.addEventListener("change", () => {
      const value = document.querySelector(
        `input[name="question-${questionIndex}"]:checked`
      ).value;

      checkAnswers(value, questionIndex);
    });

    const optionLabel = document.createElement("label");

    optionLabel.setAttribute("for", optionId);
    optionLabel.textContent = option;
    optionLabel.style.marginLeft = "20px";
    optionLabel.style.marginTop = "100px";
    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option");
    optionContainer.appendChild(optionInput);
    optionContainer.appendChild(optionLabel);

    questionElement.appendChild(optionContainer);
  });

  questionElement.style.marginBottom = "20px";

  return questionElement;
}
function calculateScore(questions) {
  let score = 0;

  questions.forEach((question) => {
    if (question.selectAnswer === question.correctAnswer) {
      score++;
    }
  });

  return score;
}

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  const questionsJSON = JSON.stringify(questions);
  localStorage.setItem("questions", questionsJSON);
  const score = calculateScore(questions);

  window.location.href = "/score.html?score=" + score;
});
// if (minutes === 0 && seconds === 0) {
//   const questionsJSON = JSON.stringify(questions);
//   localStorage.setItem("questions", questionsJSON);
//   const score = calculateScore(questions);

//   window.location.href = "/score.html?score=" + score;
// }
