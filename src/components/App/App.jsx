import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Options from '../Options/Options';

import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const initialFeedbackDisplay = () => {
  const savedFeedback = localStorage.getItem('current-feedback');
  return savedFeedback !== null ? JSON.parse(savedFeedback) : initialFeedback;
};

function App() {
  const [feedback, setFeedback] = useState(initialFeedbackDisplay);

  useEffect(() => {
    localStorage.setItem('current-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const goodFeedback = feedback.good;
  const neutralFeedback = feedback.neutral;
  const badFeedback = feedback.bad;
  const totalFeedback = goodFeedback + neutralFeedback + badFeedback;
  const positiveFeedback = Math.round(
    ((goodFeedback + neutralFeedback) / totalFeedback) * 100
  );

  return (
    <>
      <Description />

      <Options
        options={['good', 'neutral', 'bad']}
        onFeedbackBtnClick={updateFeedback}
        onResetBtnClick={resetFeedback}
        isResetBtnVisible={totalFeedback > 0}
      />

      {totalFeedback ? (
        <Feedback
          good={goodFeedback}
          bad={badFeedback}
          neutral={neutralFeedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
