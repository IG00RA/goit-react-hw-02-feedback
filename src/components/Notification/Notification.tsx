export const Notification = ({ children, message, total }) => {
  if (total() < 1) {
    return <>{message}</>;
  }
  return <>{children}</>;
};
