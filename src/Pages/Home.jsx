import React, { useRef } from 'react';
import Header from '../components/Header';
import Astronaut from '../components/Astronaut';

function Home() {
  const mainRef = useRef(null);
  return (
    <main ref={mainRef}>
      <Header constrainDiv={mainRef} />
      <Astronaut />
    </main>
  );
}

export default Home;
