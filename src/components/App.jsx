import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, item) => acc + item, 0);
  };

  const countPositivePercentage = () => {
    const total = countTotalFeedback();
    const { good } = setGood;
    return Math.round((good * 100) / total);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositivePercentage();

  return (
    <div>
      <Section title="Please leave feedback:">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification massage="There is no feedback.." />
        )}
      </Section>
    </div>
  );
};
