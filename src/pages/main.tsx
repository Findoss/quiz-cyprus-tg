import React, { useEffect } from 'react';
import { Item, Dropdown, Divider, Button, Message } from 'semantic-ui-react';

import { LayoutMain } from '../components/Layout';
import { selectorUserPlan, useStoreUser } from '../store/user';
import { PLAN } from '../store/plan';
import {
  CATEGORIES,
  selectorCategoriesPremium,
  selectorCategoriesDropdown,
  useStoreCategories,
} from '../store/categories';
import {
  LANGS,
  selectorLangsPremium,
  useStoreLangs,
  selectorLangsDropdown,
} from '../store/langs';
import { useStoreAlert } from '../store/alert';

const Main = () => {
  const { alert, showAlert, resetAlert } = useStoreAlert();

  const userPlan = useStoreUser(selectorUserPlan);
  const { auth } = useStoreUser((state) => state);
  const categoriesPremium = useStoreCategories(selectorCategoriesPremium);
  const langsPremium = useStoreLangs(selectorLangsPremium);
  const categoriesDropdown = useStoreCategories(selectorCategoriesDropdown);
  const langsDropdown = useStoreLangs(selectorLangsDropdown);

  useEffect(() => {
    auth()
      .then((data) => {
        if (data.error !== undefined) {
          console.log(111, data);
          showAlert({
            type: 'error',
            title: 'Error auth',
            message: data.error,
          });
        } else {
          console.log(222, data);
          showAlert({
            type: 'info',
            title: 'Good auth',
            message: data.jwt,
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
          Your plan: <strong>{PLAN[userPlan]}</strong>
          {/* Your plan: <strong>{PLANS.premium}</strong> (аctive until 15.12.25) */}
          <br />
          <br />
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
                  options={categoriesDropdown ?? []}
                  value={CATEGORIES.demo.text}
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
                  placeholder="Select Lang"
                  options={langsDropdown ?? []}
                  value={LANGS.ell.text}
                  onChange={(e, { value }) => {}}
                  disabled={false}
                />
              </Item.Meta>
              <Divider />
            </Item.Content>
          </Item>
        </Item.Group>
      }
      footer={null}
    />
  );
};

export default Main;
