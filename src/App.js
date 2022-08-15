import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import gif from './assets/universeLoop.mp4';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="video-wrapper">
          <video src={gif} autoPlay muted loop />
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
