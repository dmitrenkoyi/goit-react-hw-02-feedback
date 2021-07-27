import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.Feedback}>
      {Object.keys(options).map(label => (
        <button
          className={styles.Feedback__btn}
          key={label}
          type="button"
          onClick={() => onLeaveFeedback(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
