import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { useState } from 'react';

export const FeedBack = () => {
  const [good, SetGood] = useState(0);
  const [neutral, SetNeutral] = useState(0);
  const [bad, SetBad] = useState(0);

  const handleClick = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        SetGood(prev => prev + 1);
        break;
      case 'neutral':
        SetNeutral(prev => prev + 1);
        break;
      case 'bad':
        SetBad(prev => prev + 1);
        break;
      default:
        break;
    }
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
        <FeedbackOptions
          onLeaveFeedback={handleClick}
          options={Object.keys({ good, neutral, bad })}
        />
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
