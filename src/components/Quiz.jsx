import { useState } from 'react';
import QUESTION from '../../questions';
import quizComplete from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTION.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const suffleAnswers = [...QUESTION[activeQuestionIndex].answers];
  suffleAnswers.sort((a, b) => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTION[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
