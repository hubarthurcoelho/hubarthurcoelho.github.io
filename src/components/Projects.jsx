/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import dragonsPit from '../assets/dragonsPitThumb.png';
import snakeGame from '../assets/snakeGameThumb.png';
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
        {/* INICIO DRAGONS PIT */}
        <motion.a
          rel="noreferrer"
          href="https://hubarthurcoelho.io/dragons-pit"
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
              alt="dragons Pit"
            />
            <h1>Dragon's Pit</h1>
            <p>This was my very first Project, quite challenging...</p>
          </motion.div>
        </motion.a>
        {/* FIM DRAGONS PIT */}
        {/* INICIO SNAKE GAME */}
        <motion.a
          rel="noreferrer"
          href="https://hubarthurcoelho.io/snake-game"
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
              src={snakeGame}
              alt="Snake Game"
            />
            <h1>Snake Game</h1>
            <p>An attempt to create a nostalgic experience</p>
          </motion.div>
        </motion.a>
        {/* FIM SNAKE GAME */}
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
