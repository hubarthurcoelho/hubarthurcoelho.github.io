import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import gif from './assets/videoEditado.webm';

function App() {
  return (
    <div className="App">
      <div className="video-wrapper">
        <video src={gif} autoPlay muted loop />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
