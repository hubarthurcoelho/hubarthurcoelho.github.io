import React, { useContext, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Astronaut from '../components/Astronaut';
import { MyContext } from '../context/MyProvider';
import Projects from '../components/Projects';

function Home() {
  const mainRef = useRef(null);
  const { display } = useContext(MyContext);
  return (
    <main ref={mainRef}>
      <animatePresence>
        <Header constrainDiv={mainRef} />
      </animatePresence>
      <AnimatePresence>
        {display === 'about' && <Astronaut />}
      </AnimatePresence>
      <AnimatePresence>
        {display === 'projects' && <Projects />}
      </AnimatePresence>
    </main>
  );
}

export default Home;
