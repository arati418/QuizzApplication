import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const subjects = [
  { id: 1, name: "Java" },
  { id: 2, name: "Python" },
  { id: 3, name: "General Aptitude" },
];

// Sample questions for each subject
const javaQuestions = [
  {
    id: 1,
    question: "1.What is Java?",
    options: [
      "A. Java is a sequence-dependent programming language",
      "B. Java is a code dependent programming language",
      "C. Java is a platform-dependent programming language",
      "D. Java is a platform-independent programming language",
    ],
    correctAnswer: "D",
  },
  // Add more Java questions

  {
    id: 1,
    question: "2.Which of the following is true about Java?",
    options: [
      "A. Java is a high-level programming language",
      "B. Java is an interpreted language",
      "C. Java is a statically typed language",
      "D. Java is a markup language",
    ],
    correctAnswer: "A",
  },

  {
    id: 1,
    question: "3.What is the main purpose of the Java Virtual Machine (JVM)?",
    options: [
      "A. To convert Java bytecode into machine code",
      "B. To execute Java bytecode on any platform",
      "C. To compile Java source code into bytecode",
      "D. To interpret Java source code directly",
    ],
    correctAnswer: "B",
  },
  {
    id: 1,
    question: "4.What is the correct syntax to declare a variable in Java?",
    options: [
      "A. variableName = value;",
      "B. var variableName = value;",
      "C. int variableName = value;",
      "D. variableName := value;",
    ],
    correctAnswer: "C",
  },
  {
    id: 1,
    question:
      "5.Which of the following access modifiers restricts access the most in Java?",
    options: ["A. private", "B. protected", "C. public", "D. default"],
    correctAnswer: "A",
  },
  {
    id: 1,
    question: "6.In Java, how do you create a new instance of a class?",
    options: [
      "A. new Object();",
      "B. create Object();",
      "C. Object.newInstance();",
      "D. Object.create();",
    ],
    correctAnswer: "A",
  },
  {
    id: 1,
    question: "7.Which statement is used to exit from a loop in Java?",
    options: ["A. break;", "B. continue;", "C. exit;", "D. return;"],
    correctAnswer: "A",
  },
  {
    id: 1,
    question:
      "8.What is the correct way to define a method in Java that does not return any value?",
    options: [
      "A. void methodName() {}",
      "B. methodName() {}",
      "C. method methodName() {}",
      "D. int methodName() {}",
    ],
    correctAnswer: "A",
  },
  {
    id: 1,
    question: "9.Which keyword is used to define a constant variable in Java?",
    options: ["A. static", "B. final", "C. const", "D. var"],
    correctAnswer: "B",
  },
  {
    id: 1,
    question: "10.What is the default value of a boolean variable in Java?",
    options: ["A. true", "B. false", "C. null", "D.  0"],
    correctAnswer: "B",
  },
];

const pythonQuestions = [
  {
    id: 2,
    question: "1.What is Python?",
    options: [
      "A. Python is a compiled language",
      "B. Python is a dynamically typed language",
      "C. Python is a markup language",
      "D. Python is a database language",
    ],
    correctAnswer: "B",
  },
  // Add more Python questions
  {
    id: 2,
    question: "2.Which statement is used to exit from a loop in Python?",
    options: ["A.  end", "B. break", "C. exist", "D. stop"],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "3.What is the output of print(2 * 3) in Python?",
    options: ["A. 5", "B. 6", "C. 7", "D. 8"],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "4.Which of the following data types is immutable in Python?",
    options: ["A. list", "B. dictionary", "C. tuple", "D. set"],
    correctAnswer: "C",
  },
  {
    id: 2,
    question: "5.What is the result of 3 ** 2 in Python?",
    options: ["A. 5", "B. 6", "C. 9", "D. 12"],
    correctAnswer: "C",
  },
  {
    id: 2,
    question: "6.Which function is used to get the length of a list in Python?",
    options: ["A.  count()", "B. length()", "C. size()", "D. len()"],
    correctAnswer: "D",
  },
  {
    id: 2,
    question: "7.What does the += operator do in Python?",
    options: [
      "A. Adds two numbers",
      "B. Subtracts two numbers",
      "C. Multiplies two numbers",
      "D. Adds the value on its right to the variable on its left and assigns the result to the variable",
    ],
    correctAnswer: "D",
  },
  {
    id: 2,
    question:
      "8.Which of the following is the correct way to open a file named 'example.txt' for writing in Python?",
    options: [
      "A. file = open('example.txt', 'r')",
      "B. file = open('example.txt', 'w')",
      "C. file = open('example.txt', 'w')",
      "D. file = open('example.txt', 'w')",
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "9.What does the not operator do in Python?",
    options: [
      "A. Returns the bitwise NOT of a number",
      "B. Returns the logical NOT of a boolean value",
      "C. Returns the bitwise XOR of two numbers",
      "D. Returns the logical AND of two boolean values",
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "10.Which statement is used to define a function in Python?",
    options: ["A. def", "B. function", "C. define", "D. func"],
    correctAnswer: "A",
  },
];

const generalAptitudeQuestions = [
  {
    id: 3,
    question: "1.What is the square root of 144?",
    options: ["A. 12", "B. 14", "C. 10", "D. 16"],
    correctAnswer: "A",
  },
  // Add more General Aptitude questions
  {
    id: 3,
    question:
      "2.If a box contains 8 red balls and 6 blue balls, what is the probability of drawing a red ball at random?",
    options: ["A. 1/3", "B. 3/7", "C. 4/7", "D. 3/4"],
    correctAnswer: "C",
  },
  {
    id: 3,
    question: "3.If x = 2 and y = 3, what is the value of 2x + 3y?",
    options: ["A. 7", "B. 12", "C. 13", "D. 15"],
    correctAnswer: "B",
  },
  {
    id: 3,
    question: "4.What is the next number in the sequence: 1, 4, 9, 16, ...?",
    options: ["A. 24", "B. 25", "C. 36", "D. 49"],
    correctAnswer: "D",
  },
  {
    id: 3,
    question: "5.Which of the following is a prime number?",
    options: ["A. 12", "B. 15", "C. 19", "D. 24"],
    correctAnswer: "C",
  },
  {
    id: 3,
    question:
      "6.If a car travels at a speed of 60 miles per hour, how many miles will it travel in 3 hours?",
    options: ["A. 90 miles", "B. 120 miles", "C. 150 miles", "D. 180 miles"],
    correctAnswer: "B",
  },
  {
    id: 3,
    question:
      "7.What is the area of a rectangle with length 8 units and width 5 units?",
    options: [
      "A. 13 sq.units",
      "B. 32 sq.units",
      "C. 40 sq.units",
      "D. 64 sq.uints",
    ],
    correctAnswer: "C",
  },
  {
    id: 3,
    question:
      "8.If a book originally costs $30 and is discounted by 20%, what is the discounted price?",
    options: ["A. $6", "B. $12", "C. $18", "D. $24"],
    correctAnswer: "D",
  },
  {
    id: 3,
    question: "9.What is the sum of the first 10 positive integers?",
    options: ["A. 45", "B. 50", "C. 55", "D. 60"],
    correctAnswer: "C",
  },
  {
    id: 3,
    question:
      "10.If the ratio of boys to girls in a class is 3:2 and there are 20 boys, how many girls are there?",
    options: ["A. 10", "B. 15", "C. 20", "D. 25"],
    correctAnswer: "B",
  },
];

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleSubjectSelection = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(10).fill(null));
    setShowResults(false);
  };

  const handleAnswerSelection = (option) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  // Inside the return statement, update the button code as follows:
  // Inside the return statement, update the button code as follows:
  <button onClick={handleNextQuestion}>Next</button>;

  const calculateMarks = () => {
    let marks = 0;

    // Check if selectedSubject is null
    if (!selectedSubject) {
      console.error("No subject selected");
      return marks;
    }

    // Retrieve questions for the selected subject
    const questions = getQuestions(selectedSubject);

    // Ensure questions array is not empty
    if (!questions || questions.length === 0) {
      console.error("No questions available for the selected subject");
      return marks;
    }

    console.log("User answers:", userAnswers);

    // Iterate over userAnswers array and compare with correct answers
    userAnswers.forEach((answer, index) => {
      const question = questions[index];

      console.log("Question:", question);

      // Ensure question object exists and contains correctAnswer property
      if (question && question.correctAnswer) {
        console.log("Correct answer:", question.correctAnswer);
        if (answer === question.correctAnswer) {
          marks++;
        }
      } else {
        console.error(
          `Invalid question or missing correctAnswer at index ${index}`
        );
      }
    });

    console.log("Final marks:", marks);

    return marks;
  };

  const getQuestions = (subject) => {
    if (!subject) return [];
    switch (subject.id) {
      case 1:
        return javaQuestions;
      case 2:
        return pythonQuestions;
      case 3:
        return generalAptitudeQuestions;
      default:
        return [];
    }
  };

  const retakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(10).fill(null));
    setShowResults(false);
  };

  const handleSubmit = () => {
    // Logic to handle the submission of quiz answers
    // For example, you can calculate the final score and display results
    const finalScore = calculateMarks();

    // Display results
    alert(`Your final score is: ${finalScore}`);
    setShowResults(true);
  };

  return (
    <div>
      <h1>Quiz Application</h1>
      <div>
        <h2>Select Subject:</h2>
        <ul>
          {subjects.map((subject) => (
            <li key={subject.id}>
              <button onClick={() => handleSubjectSelection(subject)}>
                {subject.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedSubject && !showResults && (
        <div>
          <h2>Selected Subject: {selectedSubject.name}</h2>
          <h3>Question {currentQuestionIndex + 1} of 10:</h3>
          <p>{getQuestions(selectedSubject)[currentQuestionIndex]?.question}</p>
          <div>
            {getQuestions(selectedSubject)[currentQuestionIndex]?.options.map(
              (option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={option}
                    name="answer"
                    value={option}
                    onChange={() => handleAnswerSelection(option)}
                    checked={userAnswers[currentQuestionIndex] === option}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              )
            )}
          </div>
          <button onClick={() => handleNextQuestion(null)}>Next</button>
        </div>
      )}
      {selectedSubject && showResults && (
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {showResults && (
        <div>
          <h2>Quiz Results:</h2>
          <p>Total Marks: {calculateMarks()}</p>
          <button onClick={retakeQuiz}>Retake Quiz</button>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
