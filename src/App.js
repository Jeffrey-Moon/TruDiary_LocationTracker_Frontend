import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import MapView from './components/MapView';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { WebSocketContextProvider } from './WebSocketContext'; // Import WebSocketContextProvider

class App extends React.Component {
  state = {
    user: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/me`)
      .then((response) => {
        this.setState({ user: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error, loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    }

    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<MapView />} />
          <Route
            path="/chat"
            element={<Chat user={this.state.user} />}
          />
          {/* Add more routes as necessary */}
        </Routes>
      </Router>
    );
  }
}

const AppWithWebSocket = () => (
  <WebSocketContextProvider>
    <App />
  </WebSocketContextProvider>
);

export default AppWithWebSocket;
