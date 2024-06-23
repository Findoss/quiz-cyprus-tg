import React from 'react';
import {
  Message,
  MessageHeader,
  MessageItem,
  MessageList,
} from 'semantic-ui-react';

const QNA = ({ questionsAndAnswers }) => {
  return (
    <>
      {questionsAndAnswers.map(
        ({ question, user_answer, correct_answer, point }, i) => (
          <Message>
            <MessageHeader>
              No.{i + 1} {question}
            </MessageHeader>
            <MessageList>
              <MessageItem>
                Your Answers <strong>{user_answer}</strong>
              </MessageItem>
              <MessageItem>
                Correct Answers <strong>{correct_answer}</strong>
              </MessageItem>
              <MessageItem>
                Points <strong>{point}</strong>
              </MessageItem>
            </MessageList>
          </Message>
        )
      )}
    </>
  );
};

export default QNA;
