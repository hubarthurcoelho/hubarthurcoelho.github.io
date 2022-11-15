/* eslint-disable linebreak-style */
import React, { useContext, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Astronaut from '../components/Astronaut';
import { MyContext } from '../context/MyProvider';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  const mainRef = useRef(null);
  const { display } = useContext(MyContext);
  return (
    <main ref={mainRef}>
      <AnimatePresence>
        <Header constrainDiv={mainRef} />
      </AnimatePresence>
      <AnimatePresence>
        {display === 'about' && <Astronaut />}
      </AnimatePresence>
      <AnimatePresence>
        {display === 'projects' && <Projects />}
      </AnimatePresence>
      <AnimatePresence>
        {display === 'contact' && <Contact />}
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default Home;
