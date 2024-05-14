import { useContext } from 'react';
import { MessageContainer, MessageComponent } from './styles';
import { MessagePost } from '../BlogManagement/BlogManagement';
import Button from 'components/Button/Button';

function Message() {
  const { message, onChange, setTextArea } = useContext(MessagePost);

  const onDelete = () => {
    onChange('');
    setTextArea('');
  };

  console.log(message);

  return (
    <MessageComponent>
      <MessageContainer>{message}</MessageContainer>
      <Button name="Delete" onButtonClick={onDelete} />
    </MessageComponent>
  );
}

export default Message;

//useContext
