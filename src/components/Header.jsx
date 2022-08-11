import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import logo from '../assets/logobgwhite.png';

function Header({ constrainDiv }) {
  return (
    <div className="header-container">
      <motion.header
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 0.5,
        }}
      >
        <motion.div
          animate={{ rotate: [360, 720] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 50,
          }}
        >
          <motion.img
            drag
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
            className="logo"
            src={logo}
            alt="logo"
          />
        </motion.div>
        <motion.div
          drag
          dragElastic={0.2}
          dragSnapToOrigin
          dragConstraints={constrainDiv}
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
              animate={{ rotate: [1, -1], y: [-2, 2], x: [1, -1] }}
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
              animate={{ rotate: [0.6, -0.6], y: [2, -2], x: [1, -1] }}
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
              animate={{ rotate: [-0.5, 0.5], y: [2, -2], x: [1, -1] }}
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
      </motion.header>
    </div>
  );
}

export default Header;

Header.propTypes = {
  constrainDiv: PropTypes.shape({}).isRequired,
};
