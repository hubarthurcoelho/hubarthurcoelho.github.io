/* eslint-disable linebreak-style */
import React from 'react';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';

export default function ProjectCard({ project }) {
  return (
    <motion.a
      rel="noreferrer"
      href={project.link}
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
          src={project.image}
          alt={project.alt}
        />
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </motion.div>
    </motion.a>
  );
}

ProjectCard.propTypes = {
  project: propTypes.shape({
    link: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};
