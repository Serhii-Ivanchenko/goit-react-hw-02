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

  const goodFeedback = feedback.good;
  const neutralFeedback = feedback.neutral;
  const badFeedback = feedback.bad;
  const totalFeedback = goodFeedback + neutralFeedback + badFeedback;
  const positiveFeedback = Math.round(
    ((goodFeedback + neutralFeedback) / totalFeedback) * 100
  );

  const isNoFeedback = totalFeedback === 0;

  return (
    <>
      <Description />
      <Options onBtnClick={() => updateFeedback('good')}>Good</Options>
      <Options onBtnClick={() => updateFeedback('neutral')}>Neutral</Options>
      <Options onBtnClick={() => updateFeedback('bad')}>Bad</Options>

      <>
        {isNoFeedback ? (
          <></>
        ) : (
          <Options onBtnClick={resetFeedback}>Reset</Options>
        )}
      </>
      
      <Feedback
        noFeedback={isNoFeedback}
        good={goodFeedback}
        bad={badFeedback}
        neutral={neutralFeedback}
        total={totalFeedback}
        positive={positiveFeedback}
      />
  
    </>
  );
}

export default App;
