import React, { useState, useEffect } from 'react';

import {
  Item,
  Divider,
  Button,
  Message,
  Menu,
  Header,
} from 'semantic-ui-react';
import he from 'he';

import Countdown from '../Countdown';
import { getLetter } from '../../utils';
import Layout from '../Layout';

const Quiz = ({ data, countdownTime, endQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  useEffect(() => {
    if (questionIndex > 0) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questionIndex]);

  const handleItemClick = (e, { name }) => {
    setUserSlectedAns(name);
  };

  const handleNext = () => {
    let point = 0;
    if (userSlectedAns === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    const qna = questionsAndAnswers;
    qna.push({
      question: he.decode(data[questionIndex].question),
      user_answer: userSlectedAns,
      correct_answer: he.decode(data[questionIndex].correct_answer),
      point,
    });

    if (questionIndex === data.length - 1) {
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers: correctAnswers + point,
        timeTaken,
        questionsAndAnswers: qna,
      });
    }

    setCorrectAnswers(correctAnswers + point);
    setQuestionIndex(questionIndex + 1);
    setUserSlectedAns(null);
    setQuestionsAndAnswers(qna);
  };

  const timeOver = (timeTaken) => {
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers,
    });
  };

  return (
    <Layout
      header={
        <Item.Extra>
          <Header fluid block floated="left">
            <Header.Content>
              {`${questionIndex + 1} of ${data.length}`}
            </Header.Content>
          </Header>
          <Countdown
            countdownTime={countdownTime}
            timeOver={timeOver}
            setTimeTaken={setTimeTaken}
          />
        </Item.Extra>
      }
      body={
        <Message size="huge" floating>
          <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
        </Message>
      }
      footer={
        <>
          <Item.Description>
            <h3>Please choose one of the following answers:</h3>
          </Item.Description>
          <Divider />
          <Menu vertical fluid size="massive">
            {data[questionIndex].options.map((option, i) => {
              const letter = getLetter(i);
              const decodedOption = he.decode(option);

              return (
                <Menu.Item
                  key={decodedOption}
                  name={decodedOption}
                  active={userSlectedAns === decodedOption}
                  onClick={handleItemClick}
                >
                  <b style={{ marginRight: '8px' }}>{letter}</b>
                  {decodedOption}
                </Menu.Item>
              );
            })}
          </Menu>

          <Button
            primary
            content="Next"
            onClick={handleNext}
            floated="right"
            size="big"
            fluid
            disabled={!userSlectedAns}
          />
        </>
      }
    />
  );
};

export default Quiz;
