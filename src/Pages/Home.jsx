import React, { useContext, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Astronaut from '../components/Astronaut';
import { MyContext } from '../context/MyProvider';

function Home() {
  const mainRef = useRef(null);
  const { display } = useContext(MyContext);
  console.log(display);
  return (
    <main ref={mainRef}>
      <Header constrainDiv={mainRef} />
      <AnimatePresence>
        {display === 'about' && <Astronaut />}
      </AnimatePresence>
    </main>
  );
}

export default Home;

// {display === 'about' && (
//   <AnimatePresence>
//     <motion.div>
//       <Astronaut />
//     </motion.div>
//   </AnimatePresence>
//   )}
