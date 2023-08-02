import React, { useEffect, useRef, useState, useContext } from 'react';
import { WebSocketContext } from '../WebSocketContext'; 

const Chat = ({ user }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const ws = useContext(WebSocketContext);
  const chatBoxRef = useRef(null);

  const handleSendMessage = event => {
    event.preventDefault();
    if (message.trim() === '') {
      return;
    }

    const data = {
      sender: user.username,
      receiver: 'receiver_username', // Replace with the receiver's username
      message: message
    };

    ws.send(JSON.stringify(data));
    setMessage('');
  };

  useEffect(() => {
    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      setChatMessages(prevChatMessages => [...prevChatMessages, data]);
    };
  }, [ws]);

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [chatMessages]);

  return (
    <div>
      <ul ref={chatBoxRef} style={{ height: '400px', overflow: 'auto' }}>
        {chatMessages.map((chatMessage, index) => (
          <li key={index}>
            <strong>{chatMessage.sender}: </strong>
            <span>{chatMessage.message}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          name="message"
          placeholder="Type a message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
