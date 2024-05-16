import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Options from '../Options/Options';

import './App.css';

import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options onBtnClick={() => updateFeedback('good')}>Good</Options>
      <Options onBtnClick={() => updateFeedback('neutral')}>Neutral</Options>
      <Options onBtnClick={() => updateFeedback('bad')}>Bad</Options>

      <>
        {totalFeedback === 0 ? (
          <></>
        ) : (
          <Options onBtnClick={resetFeedback}>Reset</Options>
        )}
      </>

      <div>
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <div>
            <Feedback>Good: {feedback.good}</Feedback>
            <Feedback>Neutral: {feedback.neutral}</Feedback>
            <Feedback>Bad: {feedback.bad}</Feedback>
            <Feedback>Total: {totalFeedback}</Feedback>
            <Feedback>Positive: {positiveFeedback}%</Feedback>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
