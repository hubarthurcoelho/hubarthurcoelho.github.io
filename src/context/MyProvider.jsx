/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import React, { createContext } from 'react';

const MyContext = createContext();
const initialState = { display: 'astronaut' };

export default function MyProvider({ children }) {
  return (
    <MyContext.Provider value={initialState}>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
