import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.text}>good: {good}</p>
      <p className={css.text}>neutral: {neutral}</p>
      <p className={css.text}>bad: {bad}</p>
      <p className={css.text}>total: {total}</p>
      <p className={css.text}>positivePercentage: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
