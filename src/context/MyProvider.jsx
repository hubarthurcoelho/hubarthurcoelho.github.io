/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [display, setDisplay] = useState('about');
  const [language, setLanguage] = useState('english');

  const state = useMemo(() => ({
    display,
    setDisplay,
    language,
    setLanguage,
  }), [display, setDisplay, language, setLanguage]);

  return (
    <MyContext.Provider value={state}>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
