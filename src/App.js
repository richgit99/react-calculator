import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [screenNumber, setScreenNumber] = useState('');

  function clear_function() {
    setScreenNumber('');
  }

  function addOne() {
    setScreenNumber(screenNumber + '1');
  }
  function addTwo() {
    setScreenNumber(screenNumber + '2');
  }
  function addThree() {
    setScreenNumber(screenNumber + '3');
  }
  function addFour() {
    setScreenNumber(screenNumber + '4');
  }
  function addFive() {
    setScreenNumber(screenNumber + '5');
  }
  function addSix() {
    setScreenNumber(screenNumber + '6');
  }
  function addSeven() {
    setScreenNumber(screenNumber + '7');
  }
  function addEight() {
    setScreenNumber(screenNumber + '8');
  }
  function addNine() {
    setScreenNumber(screenNumber + '9');
  }
  function add() {
    setScreenNumber(screenNumber + '+');
  }
  function sub() {
    setScreenNumber(screenNumber + '-');
  }
  function multiply() {
    setScreenNumber(screenNumber + '*');
  }
  function divide() {
    setScreenNumber(screenNumber + '/');
  }

  function equal_to() {
    try {
      const result = eval(screenNumber);

      setScreenNumber(result);
    }
    catch (err) {
      var error_message = 'Error , Invalid Operation';
      setScreenNumber(error_message);

      setTimeout(() => {
        setScreenNumber('');
      }, 1200);

    }
  }

  function backspace() {
    { var backspaced_string = screenNumber.toString().slice(0, -1) }
    setScreenNumber(backspaced_string);
  }

  return (
    <>
      <header>
        <h1>Free Online Calculator <small>by Richard Mascarenhas</small></h1>
      </header>

      <br />
      <div className="App">

        <h1> {screenNumber}</h1>

        <br />
        <div>
          <button onClick={addOne}>1</button>
          <button onClick={addTwo}>2</button>
          <button onClick={addThree}>3</button>
          <button onClick={addFour}>4</button>
          <button onClick={addFive}>5</button>
          <button onClick={addSix}>6</button>
          <button onClick={addSeven}>7</button>
          <button onClick={addEight}>8</button>
          <button onClick={addNine}>9</button>
          <button onClick={add}>+</button>
          <button onClick={sub}>-</button>
          <button onClick={multiply}>x</button>
          <button onClick={divide}>/</button>
          <button onClick={clear_function}>clear</button>
          <button onClick={equal_to}>=</button>
          <button onClick={backspace}>backspace</button>
        </div>

      </div>
    </>
  );
}

export default App;
