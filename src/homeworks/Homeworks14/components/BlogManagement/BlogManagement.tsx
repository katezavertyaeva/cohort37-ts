import { ChangeEvent, useState, createContext } from 'react';
import { BlogManagerContainer, TextArea, ButtonContainer } from './styles';
import {MessagePostContext} from './types'
import Button from 'components/Button/Button';
import Card from '../Card/Card';

export const MessagePost = createContext({
    message: '',
    onChange: ()=>{},
    setTextArea: ()=>{}
} as MessagePostContext);

function BlogManagement() {
  const [textArea, setTextArea] = useState<string>('');
  const [post, setPost] = useState<string>('');

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  };

  const onPost = () => {
    setPost(textArea);
    //setTextArea('');
  };

  return (
    <MessagePost.Provider value={{message: post, onChange: setPost, setTextArea: setTextArea}}>
      <BlogManagerContainer>
        <TextArea value={textArea} onChange={onChangeTextArea} />
        <ButtonContainer>
          <Button name="Post" onButtonClick={onPost} />
        </ButtonContainer>
        {post&&<Card />}
      </BlogManagerContainer>
    </MessagePost.Provider>
  );
}

export default BlogManagement;

// createContext
