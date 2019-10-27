import React, { useContext } from 'react';

import { DisplayContext } from "../contexts/DisplayContext";

const Screen = () => {

  const { currentValue, formula } = useContext(DisplayContext)

  return(
    <div className='screen'>
      <p className='formula'>{formula}</p>
      <p id='display'>{currentValue}</p>
    </div>
  )
}

export default Screen;