/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import astronaut from '../assets/astronaut.png';
import useDeviceWidth from '../hooks/useDeviceWidth';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [deviceWidth] = useDeviceWidth();
  const [displayedProject, setDisplayedProject] = React.useState(projects[0]);

  const backArrow = () => {
    const currentIndex = projects.indexOf(displayedProject);
    if (currentIndex === 0) {
      setDisplayedProject(projects[projects.length - 1]);
    } else {
      setDisplayedProject(projects[currentIndex - 1]);
    }
  };

  const nextArrow = () => {
    const currentIndex = projects.indexOf(displayedProject);
    if (currentIndex === projects.length - 1) {
      setDisplayedProject(projects[0]);
    } else {
      setDisplayedProject(projects[currentIndex + 1]);
    }
  };

  const astronautExit = deviceWidth < 900 ? {
    x: [-1000, 1000], transition: { duration: 3, delay: 0 },
  } : {
    x: [-2000, 2000], transition: { duration: 3, delay: 0 },
  };

  const astronautEntrance = deviceWidth < 900 ? { x: [-1500, 1500] } : { x: [-4000, 4000] };

  return (
    <motion.div className="projects-page">
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
        <NavigateBeforeIcon className="navigate-arrows" onClick={backArrow} />
        <ProjectCard project={displayedProject} />
        <NavigateNextIcon className="navigate-arrows" onClick={nextArrow} />
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
    </motion.div>

  );
}
