import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:5000', {
      withCredentials: true,
    });

    socket.on('connect', () => {
      console.log('Connected to server');
      console.log('My socket ID:', socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Socket.io Test</div>;
};

export default App;
