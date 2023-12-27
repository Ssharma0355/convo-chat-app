import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await axios.get('/api/chat');
      setChats(response.data); // Use response.data instead of just response
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  // Hook that runs when the component is first mounted
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
