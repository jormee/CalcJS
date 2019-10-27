import React from 'react';

import DisplayContextProvider from "./contexts/DisplayContext";
import Keypad from './Keys';
import Screen from './components/Screen';

import './index.css';

function App() {

  return (
    <DisplayContextProvider>
      <div  className='container'>
        <Screen />
        <Keypad />
      </div>
    </DisplayContextProvider>
  )
}

export default App;
