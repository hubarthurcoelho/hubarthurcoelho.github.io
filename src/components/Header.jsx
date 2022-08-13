import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logobgwhite.png';
import { MyContext } from '../context/MyProvider';

function Header() {
  const { setDisplay } = useContext(MyContext);

  return (
    <div className="header-container">
      <motion.div
        className="logo-container"
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <motion.img
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
      <motion.header
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
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
              _CONTACT

            </motion.p>
          </motion.button>
        </motion.div>
      </motion.header>
    </div>
  );
}

export default Header;

// Header.propTypes = {
//   constrainDiv: PropTypes.shape({}).isRequired,
// };
