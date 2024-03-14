import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/slices/chatSlice';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
  const [msgText, setMsgText] = useState('');

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: 'Jitendra',
          message: 'learning react from namste react',
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className='col-span-2 border-2 border-black h-max ml-6 rounded-lg'>
      <h1 className='p-2'>Live Chat</h1>
      <div className='p-4 flex items-center h-[70vh] overflow-auto flex-col-reverse'>
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div className='p-3'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: 'Jitendra',
                message: msgText,
              })
            );
            setMsgText("");
          }}
        >
          <label>Chat</label>
          <input
            type='text'
            value={msgText}
            className='border ml-4 p-1'
            onChange={(e) => setMsgText(e.target.value)}
          />
          <button className='bg-green-400 px-2 mx-2 rounded-lg text-white'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
