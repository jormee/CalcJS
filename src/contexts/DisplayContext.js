import React, { useState, createContext} from 'react';

export const DisplayContext = createContext();

const DisplayContextProvider = props => {

  //declare state variables
  const [currentValue, setCurrentValue] = useState('0');
  const [lastClicked, setLastClicked] = useState('');
  const [formula, setFormula] = useState('0');
  const [isEvaluated, setEvaluated] = useState(true)

  //declare regex to check input
  const includesDecimal = /[.]/g;
  const isOperator = /[*/+-]/g;

  // handle input of numbers
  const input = e => {
    setLastClicked(e.target.value)
    
    if(!isEvaluated){
      if(formula==='0'){
        setCurrentValue(e.target.value)
        setFormula(e.target.value)
      } else {
        setCurrentValue(currentValue + e.target.value)
        setFormula(formula + e.target.value)
      }
    } else {
      setCurrentValue(e.target.value)
      setFormula(e.target.value)
    }
    setEvaluated(false)
  }

  //handle decimal inputs
  const inputDecimal = (e) => {
    setLastClicked(e.target.value)
    if(!includesDecimal.test(currentValue)) {
      setCurrentValue(currentValue + e.target.value)
      setFormula(formula + e.target.value)
    }
  }

  // handle operator input
  const inputOperator = e => {
    setLastClicked(e.target.value)
    if(!isEvaluated){
      switch(isOperator.test(lastClicked)){
        case false || e.target.value==='-':
          setFormula(formula + e.target.value)
          setCurrentValue(e.target.value)
          break;
        case true:
          setFormula(formula.replace(isOperator, e.target.value))
          setCurrentValue(e.target.value)
          break;
        default:
          setFormula(formula + e.target.value)
          setCurrentValue(e.target.value)
      }
    } else {
      setEvaluated(false)
      setFormula(currentValue + e.target.value)
      setCurrentValue(e.target.value)
    }
  }

  //clears the screen and stops current operation
  const clear = () => {
    setLastClicked('')
    setFormula('0')
    setCurrentValue('0')
    setEvaluated(true)
  }

  //evaluates the result of the input
  const evaluate = () => {
    setCurrentValue(eval(formula));
    setEvaluated(true);
  }

  return(
    <DisplayContext.Provider value={{ currentValue, formula, input, evaluate, clear, inputDecimal, inputOperator }}>
      {props.children}
    </DisplayContext.Provider>
  )
}

export default DisplayContextProvider;