import React, { useState } from 'react';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';

import Stats from './Stats';
import QNA from './QNA';
import Layout from '../Layout';

const Result = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  replayQuiz,
  resetQuiz,
}) => {
  const [activeTab, setActiveTab] = useState('Stats');

  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };

  return (
    <Layout
      header={
        <>
          <Menu fluid widths={2}>
            <Menu.Item
              name="Stats"
              active={activeTab === 'Stats'}
              onClick={handleTabClick}
            />
            <Menu.Item
              name="QNA"
              active={activeTab === 'QNA'}
              onClick={handleTabClick}
            />
          </Menu>
        </>
      }
      body={
        <>
          {activeTab === 'Stats' && (
            <Stats
              totalQuestions={totalQuestions}
              correctAnswers={correctAnswers}
              timeTaken={timeTaken}
              replayQuiz={replayQuiz}
              resetQuiz={resetQuiz}
            />
          )}
          {activeTab === 'QNA' && (
            <QNA questionsAndAnswers={questionsAndAnswers} />
          )}
        </>
      }
      footer={
        <>
          <Button
            primary
            content="Start again"
            onClick={replayQuiz}
            size="big"
            fluid
            icon="redo"
            labelPosition="left"
            style={{ marginRight: 15, marginBottom: 8 }}
          />
          <Button
            color="teal"
            content="Back to Home"
            onClick={resetQuiz}
            size="big"
            fluid
            icon="home"
            labelPosition="left"
            style={{ marginBottom: 8 }}
          />
        </>
      }
    />
  );
};

export default Result;
