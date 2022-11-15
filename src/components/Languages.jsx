/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';
import english from '../assets/english.png';
import portuguese from '../assets/portuguese.png';
import { MyContext } from '../context/MyProvider';

export default function Languages({ className }) {
  const { setLanguage } = useContext(MyContext);
  return (
    <div className={className}>
      <motion.div
        animate={{ rotate: [1, -1], y: [-1, 1], x: [1, -1] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
        }}
        drag
        dragSnapToOrigin
      >
        <motion.input
          type="image"
          whileHover={{
            scale: 1.25,
          }}
          whileTap={{
            y: -10,
          }}
          src={english}
          onClick={() => setLanguage('english')}
          alt="change to english"
        />
      </motion.div>
      <motion.div
        drag
        dragSnapToOrigin
        animate={{ rotate: [-0.5, 0.5], y: [1, -1], x: [1, -1] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
        }}
      >
        <motion.input
          type="image"
          whileHover={{
            scale: 1.25,
          }}
          whileTap={{
            y: -10,
          }}
          src={portuguese}
          onClick={() => setLanguage('portuguese')}
          alt="mudar para português"
        />
      </motion.div>
    </div>
  );
}

Languages.propTypes = {
  className: propTypes.string.isRequired,
};
