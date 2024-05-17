import Notification from '../Notification/Notification';
import clsx from 'clsx';
import css from './Feedback.module.css';

export default function Feedback({
  good,
  bad,
  neutral,
  total,
  positive,
  noFeedback,
}) {
  return noFeedback ? (
    <Notification />
  ) : (
    <div className={css.feedbackList}>
      <p className={css.feedbackItem}>Good: {good}</p>
      <p className={css.feedbackItem}>Neutral: {bad} </p>
      <p className={css.feedbackItem}>Bad: {neutral}</p>
      <p className={css.feedbackItem}>Total: {total}</p>
      <p
        className={clsx(
          css.feedbackItem,
          positive >= 50 ? css.isPositive : css.isNotPositive
        )}
      >
        Positive: {positive}%
      </p>
    </div>
  );
}
