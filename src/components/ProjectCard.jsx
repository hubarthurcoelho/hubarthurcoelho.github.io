/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';
import { MyContext } from '../context/MyProvider';

export default function ProjectCard({ project }) {
  const { language } = useContext(MyContext);

  return (
    <motion.a
      id={project.id}
      rel="noreferrer"
      href={project.link}
      target="_blank"
      whileHover={{
        y: -3,
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
          src={project.image}
          alt={project.alt}
        />
        <h1>{project[language].title}</h1>
        <p>{project[language].description}</p>
      </motion.div>
    </motion.a>
  );
}

ProjectCard.propTypes = {
  project: propTypes.shape({
    id: propTypes.number.isRequired,
    link: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    portuguese: propTypes.shape({
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
    }),
    english: propTypes.shape({
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
    }),
  }).isRequired,
};
