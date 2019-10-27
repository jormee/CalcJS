import React, { useContext } from 'react';
import { DisplayContext } from './contexts/DisplayContext';

const Keypad = () => {
  
  const { input, evaluate, inputOperator, inputDecimal, clear } = useContext(DisplayContext);

  const keys = [
    {id: 'one', value: '1', action: input},
    {id: 'two', value: '2', action: input},
    {id: 'three', value: '3', action: input},
    {id: 'four', value: '4', action: input},
    {id: 'five', value: '5', action: input},
    {id: 'six', value: '6', action: input},
    {id: 'seven', value: '7', action: input},
    {id: 'eight', value: '8', action: input},
    {id: 'nine', value: '9', action: input},
    {id: 'zero', value: '0', action: input},
    {id: 'decimal', value: '.', action: inputDecimal}, 
    {id: 'add', value: '+', action: inputOperator},
    {id: 'subtract', value: '-', action: inputOperator},
    {id: 'divide', value: '/', action: inputOperator},
    {id: 'multiply', value: '*', action: inputOperator}, 
    {id: 'equals', value: '=', action: evaluate},
    {id: 'clear', value: 'c', action: clear}
  ]

  return(
    <div className='keypad'>
      {keys.map(key => <button id={key.id} key={key.id} className= {'button'} value={key.value} onClick={key.action}>{key.value}</button>)}
    </div>
  )
}

export default Keypad;
