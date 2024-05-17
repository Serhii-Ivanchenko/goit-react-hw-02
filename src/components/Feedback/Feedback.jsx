import Notification from "../Notification/Notification";

export default function Feedback({ good, bad, neutral, total, positive, noFeedback }) {
  return noFeedback ? (
    <Notification />
  ) : (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {bad} </p>
      <p>Bad: {neutral}</p>
      <p>Total: {total}</p>
      <p>Positive:{positive} </p>
    </div>
  );
}