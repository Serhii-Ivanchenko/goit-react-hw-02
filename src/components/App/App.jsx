import Description from '../Description/Description';
import './App.css';

import { useState } from 'react';

function Options({ onBtnClick, children }) {
  return <button onClick={onBtnClick}>{children}</button>;
}

function Feedback({ children }) {
  return <p>{children}</p>;
}

function Notification() {
  return <p>No feedback yet</p>;
}

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

  const resetFeedback = feedbackType => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

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
            <Feedback>Positive: </Feedback>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
