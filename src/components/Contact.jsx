/* eslint-disable linebreak-style */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import astronaut from '../assets/astronaut.png';

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
    <div className="contact-page">
      <motion.form
        animate={{ x: [-4000, 0] }}
        transition={{
          duration: 6,
        }}
        ref={form}
        onSubmit={sendEmail}
        className="form"
      >
        <label htmlFor="user_name">
          Name
          <input type="text" name="user_name" id="user_name" />
        </label>
        <label htmlFor="user_email">
          Email
          <input type="email" name="user_email" id="user_email" />
        </label>
        <label htmlFor="message">
          Message
          <textarea name="message" id="message" />
        </label>
        <input type="submit" value="Send" className="submit-btn" />
      </motion.form>
      <motion.div
        className="fetch-astronaut"
        animate={{ x: [-4000, 4000] }}
        transition={{
          duration: 6,
        }}
      >
        <img src={astronaut} alt="astronaut" />
      </motion.div>
    </div>
  );
}
