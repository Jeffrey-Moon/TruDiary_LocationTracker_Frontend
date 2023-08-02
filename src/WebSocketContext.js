// WebSocketContext.js
import React, { createContext, useState, useEffect } from 'react';

const WebSocketContext = createContext(null);

const WebSocketContextProvider = ({ children }) => {
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');
    setWebSocket(ws);

    // Clean up on unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={webSocket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketContext, WebSocketContextProvider };