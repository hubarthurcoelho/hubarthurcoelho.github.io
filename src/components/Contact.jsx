/* eslint-disable linebreak-style */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import astronaut from '../assets/astronaut.png';
import contactBackground from '../assets/contactBackground.png';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0a3qpk7', 'template_nqd785g', form.current, 'rZBKyYGM8DfFSpeIf')
      .then((r) => {
        console.log(r);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <motion.div className="contact-page">
      <motion.img
        key="modal5"
        exit={{ x: [0, 4000], opacity: [1, 0], transition: { duration: 2, delay: 1.5 } }}
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        className="contact-background"
        src={contactBackground}
        alt="contactBackground"
      />
      <motion.form
        key="modal6"
        exit={{ x: [0, 4000], opacity: [1, 0], transition: { duration: 2, delay: 1.5 } }}
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        ref={form}
        onSubmit={sendEmail}
        className="form"
      >
        <h2>Transmit a message to my spaceship!</h2>
        <label htmlFor="user_name">
          <p>Name</p>
          <input type="text" name="user_name" id="user_name" />
        </label>
        <label htmlFor="user_email">
          <p>Email</p>
          <input type="email" name="user_email" id="user_email" />
        </label>
        <label htmlFor="message">
          <p>Message</p>
          <textarea name="message" maxLength="155" id="message" />
        </label>
        <input type="submit" value="Send" className="submit-btn" />
      </motion.form>
      <motion.div
        key="modal7"
        className="fetch-astronaut"
        exit={{ x: [-2000, 2000], transition: { duration: 3, delay: 0 } }}
        animate={{ x: [-4000, 4000] }}
        transition={{
          duration: 6,
        }}
      >
        <img src={astronaut} alt="astronaut" />
      </motion.div>
    </motion.div>
  );
}
