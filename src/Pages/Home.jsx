import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import astronaut from '../assets/astronaut.png';

function Home() {
  const mainRef = useRef(null);
  return (
    <main ref={mainRef}>
      <Header constrainDiv={mainRef} />
      <motion.div
        className="astronaut"
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
      >
        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 5,
          }}
        >
          <motion.img
            drag
            dragSnapToOrigin
            dragConstraints={mainRef}
            dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
            src={astronaut}
            alt="astronaut"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Home;
