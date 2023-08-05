import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };
  countPositivePercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good * 100) / total);
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositivePercentage();
    return (
      <div>
        <Section title="Please leave feedback:">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="statistics">
          {total > 0 ? (
            <Statistics
              total={total}
              {...this.state}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification massage="There is no feedback.." />
          )}
        </Section>
      </div>
    );
  }
}
