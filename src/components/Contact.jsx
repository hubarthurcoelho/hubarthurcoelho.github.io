/* eslint-disable no-useless-escape */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import astronaut from '../assets/astronaut.png';
import contactBackground from '../assets/contactBackground.png';
import useDeviceWidth from '../hooks/useDeviceWidth';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default function Contact() {
  const form = useRef();
  const [deviceWidth] = useDeviceWidth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');

  const astronautExit = deviceWidth < 900 ? {
    x: [-1000, 1000], transition: { duration: 3, delay: 0 },
  } : {
    x: [-2000, 2000], transition: { duration: 3, delay: 0 },
  };

  const isFormValid = () => {
    if (name === '') {
      setAlert('Name is required!');
      setTimeout(() => {
        setAlert('');
      }, 2000);
      return false;
    }
    if (!emailRegex.test(email)) {
      setAlert('Insert a valid email address!');
      setTimeout(() => {
        setAlert('');
      }, 2000);
      return false;
    }
    if (message === '') {
      setAlert('Message is required!');
      setTimeout(() => {
        setAlert('');
      }, 2000);
      return false;
    }
    return true;
  };

  const astronautEntrance = deviceWidth < 900 ? { x: [-1500, 1500] } : { x: [-4000, 4000] };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    emailjs.sendForm('service_0a3qpk7', 'template_nqd785g', form.current, 'rZBKyYGM8DfFSpeIf')
      .then((r) => {
        console.log(r);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
    setEmail('');
    setName('');
    setMessage('');
    setAlert('Message sent successfully!');
    setTimeout(() => {
      setAlert('');
    }, 2000);
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
        <label htmlFor="name">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="message">
          <p>Message</p>
          <textarea
            name="message"
            maxLength="155"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <p className="error-message">{alert}</p>
        <input type="submit" value="Send" className="submit-btn" />
      </motion.form>
      <motion.div
        key="modal7"
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
