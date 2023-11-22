import PropTypes from 'prop-types';

export const Notification = ({ children, message, total }) => {
  if (total() < 1) {
    return <>{message}</>;
  }
  return <>{children}</>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  total: PropTypes.func.isRequired,
};
