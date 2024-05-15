import Description from '../Description/Description';
import './App.css';

import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback(feedback.feedbackType + 1);
  };

  const resetFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
  };

  return (
    <>
      <Description />
      <button
        onClick={updateFeedback(() => {
          good;
        })}
      >
        Good
      </button>
      <button
        onClick={updateFeedback(() => {
          neutral;
        })}
      >
        Neutral
      </button>
      <button
        onClick={updateFeedback(() => {
          bad;
        })}
      >
        Bad
      </button>
      <button onClick={resetFeedback}>Reset</button>

      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total:</p>
      <p>Positive:</p>
    </>
  );
}

export default App;
