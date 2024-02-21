import { useRef } from 'react';

export default function Answer({
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
}) {
  const suffleAnswers = useRef();

  if (!suffleAnswers.current) {
    suffleAnswers.current = [...answers];
    suffleAnswers.current.sort((a, b) => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {suffleAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClass}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
