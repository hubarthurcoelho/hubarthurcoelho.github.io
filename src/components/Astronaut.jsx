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
          duration: 2,
          delay: 1,
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
        className="motion-intro-container"
        key="modal2"
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        <motion.div
          className="introduction-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [30, 0], x: [0, 30] }}
          transition={{
            duration: 1,
            delay: 3,
          }}
        >
          <h1 className="hello-text">{`${'<Hello world! />'}`}</h1>
          <h2 className="message">My name is Arthur Coelho,</h2>
          <p className="message">I'm a front end developer.</p>
          <p className="message job-info">My goal is to create responsive, easy-to-use, intuitive websites!</p>
          <p className="message">Feel free to explore!</p>
          {/* <p className="message warning">{`${'(⚠️But be aware of space-pirates)'}`}</p> */}
        </motion.div>

      </motion.div>

    </motion.div>
  );
}
