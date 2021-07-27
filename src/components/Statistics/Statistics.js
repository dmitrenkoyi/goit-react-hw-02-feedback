import Notification from '../Notification';

import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total() ? (
    <div className={styles.Statictics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Total: {total()} </p>
      <p>Positive feedback: {positivePercentage()}% </p>
    </div>
  ) : (
    <Notification message={'No feedback given'} />
  );
};

export default Statistics;
