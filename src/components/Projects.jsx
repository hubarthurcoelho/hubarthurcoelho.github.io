/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import astronaut from '../assets/astronaut.png';
import useDeviceWidth from '../hooks/useDeviceWidth';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const ids = projects.map((project) => project.id);
  const [deviceWidth] = useDeviceWidth();
  const [currentId, setCurrentId] = useState(1);

  const navigateBack = () => {
    if (currentId - 1 === 0) {
      setCurrentId(ids[ids.length - 1]);
      return;
    }
    setCurrentId(currentId - 1);
  };

  const navigateForward = () => {
    if (currentId === ids[ids.length - 1]) {
      setCurrentId(1);
      return;
    }
    setCurrentId(currentId + 1);
  };

  const astronautExit = deviceWidth < 900 ? {
    x: [-1000, 1000], transition: { duration: 3, delay: 0 },
  } : {
    x: [-2000, 2000], transition: { duration: 3, delay: 0 },
  };

  const astronautEntrance = deviceWidth < 900 ? { x: [-2000, 2000] } : { x: [-4000, 4000] };

  return (
    <motion.div className="projects-page">
      <motion.a
        exit={{ x: [0, 4000], opacity: [1, 0], transition: { duration: 2, delay: 1.5 } }}
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        href={`#${currentId}`}
        onClick={navigateBack}
      >
        <NavigateBeforeIcon className="navigate-arrows" />
      </motion.a>
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
      <motion.div
        key="modal4"
        className="fetch-astronaut"
        exit={astronautExit}
        animate={astronautEntrance}
        transition={{
          duration: 6,
        }}
      >
        <img src={astronaut} alt="astronaut" />
      </motion.div>
      <motion.a
        exit={{ x: [0, 4000], opacity: [1, 0], transition: { duration: 2, delay: 1.5 } }}
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        href={`#${currentId}`}
        onClick={navigateForward}
      >
        <NavigateNextIcon className="navigate-arrows" />
      </motion.a>
    </motion.div>

  );
}
