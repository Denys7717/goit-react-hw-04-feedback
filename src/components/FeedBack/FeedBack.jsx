import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { useState } from 'react';

export const FeedBack = () => {
  const [good, SetGood] = useState(0);
  const [neutral, SetNeutral] = useState(0);
  const [bad, SetBad] = useState(0);

  const option = ['good', 'neutral', 'bad'];

  const handleClick = ({ target: { name } }) => {
    if (name === 'good') SetGood(prev => prev + 1);
    else if (name === 'neutral') SetNeutral(prev => prev + 1);
    else if (name === 'bad') SetBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      return Math.floor((good * 100) / countTotalFeedback());
    }
    return good;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={handleClick} options={option} />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
