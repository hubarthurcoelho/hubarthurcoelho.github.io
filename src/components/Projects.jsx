/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
import React from 'react';
import { motion } from 'framer-motion';
import dragonsPit from '../assets/dragonsPitThumb.png';
import astronaut from '../assets/astronaut.png';

export default function Projects() {
  return (
    <div className="projects-page">
      <motion.div
        key="modal3"
        exit={{ x: [0, 4000], opacity: [1, 0], transition: { duration: 2, delay: 1.5 } }}
        className="projects-container"
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
      >
        <motion.a
          rel="noreferrer"
          href="https://github.com/hubarthurcoelho/personal-projects/tree/main/dragons-pit"
          target="_blank"
          whileHover={{
            scale: 1.05,
          }}
        >
          <motion.div
            className="project-card"
            animate={{ y: [-2, -1, 0, 1, 2] }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              times: [0, 0.25, 0.5, 0.75, 1],
              duration: 2,
            }}
          >
            <img
              src={dragonsPit}
              alt="dragonsPit"
            />
            <h1>Dragon's Pit</h1>
            <p>This was my very first Project...</p>
          </motion.div>
        </motion.a>
      </motion.div>
      <motion.div
        key="modal4"
        className="fetch-astronaut"
        exit={{ x: [-2000, 2000], transition: { duration: 3, delay: 0 } }}
        animate={{ x: [-4000, 4000] }}
        transition={{
          duration: 6,
        }}
      >
        <img src={astronaut} alt="astronaut" />
      </motion.div>
    </div>
  );
}
