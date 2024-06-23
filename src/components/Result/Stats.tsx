import React from 'react';
import { Message } from 'semantic-ui-react';
import { calculateScore, calculateGrade, timeConverter } from '../../utils';

const Stats = ({ totalQuestions, correctAnswers, timeTaken }) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <>
      <Message textAlign="center" block>
        {remarks}
      </Message>
      <Message>
        Grade: <strong>{grade}</strong>
      </Message>
      <Message>
        Total Questions: <strong>{totalQuestions}</strong>
      </Message>
      <Message>
        Correct Answers: <strong>{correctAnswers}</strong>
      </Message>
      <Message>
        Your Score: <strong>{score}%</strong>
      </Message>
      <Message>
        Passing Score: <strong>60%</strong>
      </Message>
      <Message>
        Time Taken:{' '}
        {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Message>
    </>
  );
};

export default Stats;
