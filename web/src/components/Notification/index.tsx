import {useEffect} from "react";
import {useModal} from "context";
import {Container} from "./styled";
import {Typography} from "components";

interface NotificationProps {
  icon: JSX.Element;
  message: string;
}

export const Notification: React.FC<NotificationProps> = ({icon, message}) => {
  const {onClose} = useModal();

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 2000);
  }, []);

  return (
    <Container>
      {icon}
      <Typography variant="title">{message}</Typography>
    </Container>
  );
};
