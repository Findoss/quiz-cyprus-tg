import React, { useState } from 'react';
import {
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
  FormInput,
  Input,
} from 'semantic-ui-react';
import Layout from '../Layout';
import { shuffle } from '../../utils';

import { TG } from '../../libs/telegram';

import { langsSelector, langsPremium } from '../../constants/langs';
import {
  categoriesPremium,
  categoriesSelector,
} from '../../constants/categories';
import { numOfQuestionsSelector } from '../../constants/numOfQuestions';

import PLANS from '../../store/plan';
import COUNTDOWN_TIME from '../../constants/countdownTime';
import { QUIZ } from '../../constants/quiz';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState('-1');
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [lang, setLang] = useState('ell');

  const [countdownTime, setCountdownTime] = useState({
    minutes: 300,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };

  let allFieldsSelected = false;
  if (
    category &&
    numOfQuestions &&
    (countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);

    QUIZ.forEach((element) => {
      element.options = shuffle([
        element.correct_answer,
        ...element.incorrect_answers,
      ]);
    });

    setProcessing(false);
    startQuiz(QUIZ, countdownTime.minutes);
  };

  return (
    <Layout
      header={
        <Item>
          Your plan: <strong>{PLANS.free}</strong>
          {/* Your plan: <strong>{PLANS.premium}</strong> (аctive until 15.12.25) */}
          <br />
          <br />
          {PLANS.premium} features:
          <ol>
            <li>📚 All categories: {categoriesPremium.join(', ')}</li>
            <li>🌍 Languages: {langsPremium.join(', ')}</li>
            <li>♾️ No limit questions</li>
            <li>🙅🏻‍♂️ Without advertising</li>
          </ol>
          <Button
            color="green"
            content={`Buy ${PLANS.premium} for a 1 month`}
            size="big"
            fluid
            icon="cart"
            labelPosition="left"
            style={{ marginBottom: 8 }}
          />
          {error && (
            <Message error onDismiss={() => setError(null)}>
              <Message.Header>Error!</Message.Header>
              {error.message}
            </Message>
          )}
          <Divider />
        </Item>
      }
      body={
        <Item.Group divided>
          <Item>
            <Item.Content>
              <Item.Meta>
                <p>In which category do you want to play the quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="category"
                  placeholder="Select Quiz Category"
                  options={categoriesSelector}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                  disabled={processing}
                />
                <br />
                <p>How many questions do you want in your quiz?</p>
                <Dropdown
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Select No. of Questions"
                  options={numOfQuestionsSelector}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                  disabled={processing}
                />
                <br />
                <p>
                  What is the translation of the language to add to the quiz?
                </p>
                <Dropdown
                  fluid
                  selection
                  name="lang"
                  placeholder="Select Lang"
                  options={langsSelector}
                  value={lang}
                  onChange={(e, { value }) => setLang(value)}
                  disabled={processing}
                />
                <br />
                <p>Please select the countdown time for your quiz.</p>
                <Dropdown
                  compact
                  search
                  selection
                  name="minutes"
                  placeholder="min"
                  options={COUNTDOWN_TIME.minutes}
                  value={countdownTime.minutes}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
              </Item.Meta>
              <Divider />
              <pre>{JSON.stringify(TG.WebApp.initDataUnsafe, null, 2)}</pre>
            </Item.Content>
          </Item>
        </Item.Group>
      }
      footer={
        <Button
          fluid
          primary
          size="big"
          icon="play"
          labelPosition="left"
          content={processing ? 'Processing...' : 'Start'}
          onClick={fetchData}
          disabled={!allFieldsSelected || processing}
        />
      }
    />
  );
};

export default Main;
