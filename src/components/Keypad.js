import React, { useContext } from 'react';

import { DisplayContext } from '../contexts/DisplayContext';

import { keys } from '../Keys';

const Keypad = () => {
  
  // const { input, evaluate } = useContext(DisplayContext);

  return(
    keys.map(key => <button id={key.id} key={key.id} value={key.value} onClick={key.action}>{key.value}</button>)
  )
}

export default Keypad;