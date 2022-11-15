/* eslint-disable linebreak-style */

import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logobgwhite.png';
import { MyContext } from '../context/MyProvider';
import useDeviceWidth from '../hooks/useDeviceWidth';
import languages from '../data/languages';
import Languages from './Languages';

function Header() {
  const { setDisplay, language } = useContext(MyContext);
  const [deviceWidth] = useDeviceWidth();
  const [showHeader, setHeader] = useState(true);
  const { header } = languages[language];

  const contactExit = deviceWidth < 900 ? {
    x: [0, -300], y: 50, opacity: 0, transition: { duration: 1 },
  } : {
    x: [0, -500], y: 50, opacity: 0, transition: { duration: 1 },
  };

  const projectExit = deviceWidth < 900 ? {
    x: [0, -150], opacity: 0, transition: { duration: 1 },
  } : {
    x: [0, -250], opacity: 0, transition: { duration: 1 },
  };

  return (
    <div className="header-container">
      <motion.div
        className="logo-container"
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 1,
          delay: 0,
        }}
      >
        <motion.input
          type="image"
          onTap={() => setHeader(!showHeader)}
          drag
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
          animate={{ y: [-2, 2] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2,
          }}
          className="logo"
          src={logo}
          alt="logo"
        />
      </motion.div>
      <AnimatePresence>
        {showHeader && (
        <motion.header className="menu-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: [-100, 0], y: [-100, 0], opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            drag
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
          >
            <motion.button
              key="about"
              exit={{
                x: [0, -100], y: -50, opacity: 0, transition: { duration: 1 },
              }}
              whileHover={{
                scale: 1.25,
              }}
              whileTap={{
                y: -10,
              }}
              className="nav-links"
              type="button"
              onTap={() => setDisplay('about')}
            >
              <motion.p
                animate={{ rotate: [1, -1], y: [-2, 2], x: [1, -1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2,
                }}
              >
                {header.about}
              </motion.p>
            </motion.button>

          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: [-300, 0], opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            drag
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
          >
            <motion.button
              key="projects"
              exit={projectExit}
              whileHover={{
                scale: 1.25,
              }}
              whileTap={{
                y: -10,
              }}
              className="nav-links"
              type="button"
              onTap={() => setDisplay('projects')}
            >
              <motion.p
                animate={{ rotate: [0.6, -0.6], y: [2, -2], x: [1, -1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2,
                }}
              >
                {header.projects}
              </motion.p>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: [-500, 0], y: [100, 0], opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            drag
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
          >
            <motion.button
              key="contact"
              exit={contactExit}
              whileHover={{
                scale: 1.25,
              }}
              whileTap={{
                y: -10,
              }}
              className="nav-links"
              type="button"
              onTap={() => setDisplay('contact')}
            >
              <motion.p
                animate={{ rotate: [-0.5, 0.5], y: [2, -2], x: [1, -1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2,
                }}
              >
                {header.contact}
              </motion.p>
            </motion.button>
          </motion.div>
        </motion.header>
        )}
      </AnimatePresence>
      { deviceWidth > 540 ? (
        <Languages className="languages-header" />
      ) : null}
    </div>
  );
}

export default Header;
