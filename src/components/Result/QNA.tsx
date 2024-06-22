import React from 'react';
import {
  Message,
  MessageHeader,
  MessageItem,
  MessageList,
} from 'semantic-ui-react';
import Layout from '../Layout';

const QNA = ({ questionsAndAnswers }) => {
  return (
    <>
      {questionsAndAnswers.map(
        ({ question, user_answer, correct_answer, point }, i) => (
          <Message>
            <MessageHeader>
              {' '}
              No.<span>{i + 1}</span> <span>{question}</span>
            </MessageHeader>
            <MessageList>
              <MessageItem>
                Your Answers <span>{user_answer}</span>
              </MessageItem>
              <MessageItem>
                Correct Answers <span>{correct_answer}</span>
              </MessageItem>
              <MessageItem>
                Points <span>{point}</span>
              </MessageItem>
            </MessageList>
          </Message>
        )
      )}
    </>
  );
};

export default QNA;
