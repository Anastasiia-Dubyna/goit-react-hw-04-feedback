import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback_list}>
      {Object.keys(options).map(name => (
        <li key={name}>
          <button
            className={css.button}
            type="button"
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.shape(
    propTypes.string.isRequired,
    propTypes.number.isRequired
  ),
  onLeaveFeedback: propTypes.func,
};
