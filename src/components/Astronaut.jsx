/* eslint-disable no-await-in-loop */
/* eslint-disable no-promise-executor-return */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import astronaut from '../assets/astronaut.png';
import { MyContext } from '../context/MyProvider';
import languages from '../data/languages';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Astronaut() {
  const { language } = useContext(MyContext);
  const { about } = languages[language];
  const [farewell, setFarewell] = useState('');

  const digitAnimation = async () => {
    const arrayText = about.farewell.split('');
    const newArray = [];
    for (let count = 0; count < arrayText.length; count += 1) {
      newArray.push(arrayText[count]);
      setTimeout(() => {
        setFarewell(newArray.join(''));
      }, 50);
      await wait(50);
    }
  };

  useEffect(() => {
    const initializeDigitAnimation = async () => {
      await wait(3000);
      digitAnimation();
    };
    setFarewell('');
    initializeDigitAnimation();
  }, [language]);

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
            className="astronaut-img"
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
            delay: 2.5,
          }}
        >
          <h1 className="hello-text">{about.helloText}</h1>
          <h2 className="message">{about.myName}</h2>
          <p className="message">{about.myJob}</p>
          <p className="message job-info">{about.whatIDo}</p>
          <p className="message farewell">{farewell}</p>
          {/* <p className="message warning">{`${'(⚠️But be aware of space-pirates)'}`}</p> */}
        </motion.div>

      </motion.div>

    </motion.div>
  );
}
