import { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Feedbacks } from './Feedbacks/Feedbacks';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

interface AppState {
  good: number;
  neutral: number;
  bad: number;
}

export interface FeedbackIncrement {
  (name: string): void;
}

export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  addFeedback: FeedbackIncrement = name => {
    this.setState((prevState: Readonly<AppState>) => ({
      ...prevState,
      [name]: prevState[name as keyof AppState] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good / total) * 100);
  };
  render() {
    const {
      addFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      state,
    } = this;
    const options = Object.keys(state);
    return (
      <>
        <GlobalStyle />
        <Section tittle="Please leave feedback">
          <Feedbacks options={options} onAddFeedback={addFeedback} />
        </Section>

        <Section tittle="Statistics">
          <Notification
            message="There is no feedback"
            total={countTotalFeedback}
          >
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback}
              positiveFeedback={countPositiveFeedbackPercentage}
            />
          </Notification>
        </Section>
      </>
    );
  }
}
