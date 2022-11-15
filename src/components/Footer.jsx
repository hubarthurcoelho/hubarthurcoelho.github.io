/* eslint-disable linebreak-style */
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import Languages from './Languages';
import useDeviceWidth from '../hooks/useDeviceWidth';

export default function Footer() {
  const [deviceWidth] = useDeviceWidth();

  return (
    <motion.footer
      className="contact-links"
      animate={{ x: [-4000, 0] }}
      transition={{
        duration: 1,
        delay: 0,
      }}
    >
      <motion.a
        href="https://www.linkedin.com/in/arthurccoelho/"
        target="_blank"
        className="icon-div"
        animate={{ rotate: [0.6, -0.6], y: [2, -2], x: [1, -1] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.25,
          }}
          whileTap={{
            y: -10,
          }}
        >
          {/* LINKEDIN ICON */}
          <LinkedInIcon />
        </motion.div>
      </motion.a>
      <motion.a
        className="icon-div"
        href="https://github.com/hubarthurcoelho"
        target="_blank"
        animate={{ rotate: [-0.5, 0.5], y: [1, -1], x: [1, -1] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.25,
          }}
          whileTap={{
            y: -10,
          }}
        >
          {/* GITHUB ICON */}
          <GitHubIcon />
        </motion.div>
      </motion.a>
      <motion.a
        className="icon-div"
        href="https://wa.me/+5582981827748"
        target="_blank"
        drag
        dragSnapToOrigin
        animate={{ rotate: [1, -1], y: [-1, 1], x: [1, -1] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 2,
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.25,
          }}
          whileTap={{
            y: -10,
          }}
        >
          {/* WHATSAPP ICON */}
          <WhatsAppIcon />
        </motion.div>
      </motion.a>
      { deviceWidth <= 540 ? (
        <Languages className="languages" />
      ) : null}
    </motion.footer>
  );
}
