import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import gif from './assets/videoEditadomp4.mp4';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="video-wrapper">
        <video src={gif} autoPlay muted loop />
      </div>
    </div>
  );
}

export default App;
