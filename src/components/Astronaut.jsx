/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
import React from 'react';
import { motion } from 'framer-motion';
import astronaut from '../assets/astronaut.png';

export default function Astronaut() {
  return (
    <motion.div className="astronaut">
      <motion.div
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 1,
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
            key="modal"
            exit={{ x: [0, -100, 5000] }}
            transition={{
              duration: 2,
              times: [0, 0.3, 1],
            }}
            drag
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
            src={astronaut}
            alt="astronaut"
          />
        </motion.div>
      </motion.div>

      <motion.div
        key="modal2"
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [30, 0], x: [0, 30] }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          <h1 className="hello-text">Hello World!</h1>
          <h2 className="message">This is still a work in progress...</h2>
        </motion.div>

      </motion.div>

    </motion.div>
  );
}
