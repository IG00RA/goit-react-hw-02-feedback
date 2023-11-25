interface NotificationProps {
  children: ReactElement<any, any>;
  message: string;
  total: () => number;
}

export const Notification: React.FC<NotificationProps> = ({
  children,
  message,
  total,
}) => {
  if (total() < 1) {
    return <>{message}</>;
  }
  return <>{children}</>;
};
