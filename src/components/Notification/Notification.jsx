import propTypes from 'prop-types';

export const Notification = ({ massage }) => {
  return <h2>{massage}</h2>;
};

Notification.propTypes = {
  massage: propTypes.string,
};
