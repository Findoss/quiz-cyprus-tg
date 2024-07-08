import React, { useEffect } from 'react';
import {
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
  Radio,
} from 'semantic-ui-react';

import { LayoutMain } from '../components/Layout';
import { selectorUserPlan, useStoreUser } from '../store/user';
import { PLAN } from '../store/plan';
import {
  selectorCategoriesPremium,
  selectorCategoriesDropdown,
  useStoreCategories,
} from '../store/categories';
import {
  selectorLangsPremium,
  useStoreLangs,
  selectorLangsDropdown,
} from '../store/langs';
import { useStoreAlert } from '../store/alert';
import { useStoreQuizSettings } from '../store/quiz-settings';
import { selectorModesDropdown, useStoreMode } from '../store/mode';

import './style.css';

const Main = () => {
  const { alert, showAlert, resetAlert } = useStoreAlert();

  const userPlan = useStoreUser(selectorUserPlan);
  const { auth } = useStoreUser((state) => state);

  const categoriesPremium = useStoreCategories(selectorCategoriesPremium);
  const langsPremium = useStoreLangs(selectorLangsPremium);

  const categoriesDropdown = useStoreCategories(
    selectorCategoriesDropdown(userPlan)
  );
  const langsDropdown = useStoreLangs(selectorLangsDropdown(userPlan));
  const modesDropdown = useStoreMode(selectorModesDropdown(userPlan));

  const { category, lang, mode, setQuizSetting } = useStoreQuizSettings();

  useEffect(() => {
    auth()
      .then((data) => {
        if (data.error !== undefined) {
          showAlert({
            type: 'error',
            title: 'Error auth',
            message: data.error,
          });
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <LayoutMain
      header={
        <Item>
          {alert.message && (
            <Message {...{ [alert.type]: true }} onDismiss={resetAlert}>
              <Message.Header>{alert.title}</Message.Header>
              <span>{alert.message}</span>
            </Message>
          )}
          <h3>Your plan: {userPlan}</h3>
          {userPlan === PLAN.free && (
            <>
              {PLAN.premium} features:
              <ol>
                <li>📚 All categories: {categoriesPremium.join(', ')}</li>
                <li>🌍 Languages: {langsPremium.join(', ')}</li>
                <li>♾️ No limit questions</li>
                <li>🙅🏻‍♂️ Without advertising</li>
              </ol>
              <Button
                color="green"
                content={`Buy ${PLAN.premium}`}
                size="big"
                fluid
                icon="cart"
                labelPosition="left"
                style={{ marginBottom: 8 }}
              />
            </>
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
                  placeholder="category"
                  options={categoriesDropdown ?? []}
                  value={category}
                  onChange={(e, { value }) => {
                    setQuizSetting('category', value);
                  }}
                  disabled={false}
                />
                <br />
                <p>
                  What is the translation of the language to add to the quiz?
                </p>
                <Dropdown
                  fluid
                  selection
                  name="lang"
                  placeholder="lang"
                  options={langsDropdown ?? []}
                  value={lang}
                  onChange={(e, { value }) => {
                    setQuizSetting('lang', value);
                  }}
                  disabled={false}
                />
                <br />
                <p>Mode?</p>

                {modesDropdown.map((radio) => (
                  <>
                    <Radio
                      label={radio.text}
                      name="radioGroup"
                      value={radio.value}
                      checked={radio.value === mode}
                      onChange={(e, { value }) => {
                        setQuizSetting('mode', value);
                      }}
                    />
                    <br /> <br />
                  </>
                ))}
              </Item.Meta>
              <Divider />
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
          content={'Start'}
          onClick={() => {}}
        />
      }
    />
  );
};

export default Main;
