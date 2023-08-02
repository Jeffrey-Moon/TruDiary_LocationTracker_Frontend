import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WebSocketContextProvider } from './WebSocketContext';

ReactDOM.render(
  <React.StrictMode>
    <WebSocketContextProvider>
      <App />
    </WebSocketContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);