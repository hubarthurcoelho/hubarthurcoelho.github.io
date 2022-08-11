import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div className="header-container">
      <header>
        <motion.div
          drag
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
        >
          <motion.button
            whileHover={{
              scale: 1.25,
            }}
            whileTap={{
              y: -10,
            }}
            className="nav-links"
            type="button"
          >
            <motion.p
              animate={{ rotate: [2, -2], y: [-1, 1], x: [1, -1] }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
              }}
            >
              _ABOUT
            </motion.p>
          </motion.button>

        </motion.div>
        <motion.div
          drag
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
        >
          <motion.button
            whileHover={{
              scale: 1.25,
            }}
            whileTap={{
              y: -10,
            }}
            className="nav-links"
            type="button"
          >
            <motion.p
              animate={{ rotate: [-1, 1], y: [1, -1], x: [1, -1] }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
              }}
            >
              _PROJECTS
            </motion.p>
          </motion.button>
        </motion.div>

        <motion.div
          drag
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
        >
          <motion.button
            whileHover={{
              scale: 1.25,
            }}
            whileTap={{
              y: -10,
            }}
            className="nav-links"
            type="button"
          >
            <motion.p
              animate={{ rotate: [-1, 1], y: [-1.5, 1.5], x: [1, -1] }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
              }}
            >
              _CONTACT

            </motion.p>
          </motion.button>
        </motion.div>
      </header>
    </div>
  );
}

export default Header;
