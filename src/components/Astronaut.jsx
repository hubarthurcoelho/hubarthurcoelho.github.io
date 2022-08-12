/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
import React from 'react';
import { motion } from 'framer-motion';
import astronaut from '../assets/astronaut.png';

export default function Astronaut() {
  return (
    <motion.div
      className="astronaut"
      animate={{ x: [-4000, 0] }}
      transition={{
        duration: 1.2,
        delay: 0.7,
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
          dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
          src={astronaut}
          alt="astronaut"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [30, 0], x: [0, 30] }}
        transition={{
          duration: 0.1,
          delay: 2.3,
        }}
      >
        <h1 className="hello-text">Hello World!</h1>
        {' '}
        {' '}
        <h2 className="message">This is still a work in progress...</h2>
      </motion.div>
    </motion.div>
  );
}
