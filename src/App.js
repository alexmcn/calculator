import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const numberPadOrder = [10, 7, 8, 9, 4, 5, 6, 1, 2, 3];
  const [display, setDisplay] = useState('0');

  const handleNumberClick = value => {
    if (display === '0') {
      setDisplay(value.toString());
    } else {
      setDisplay(`${display}${value.toString()}`);
    }
  };

  const handlePointClick = () => {
    if (display.indexOf('.') > 0) return;
    if (display === '0') {
      setDisplay('0.');
    } else {
      setDisplay(`${display}.`);
    }
  };

  return (
    <div className="App">
      <article className="calculator">
        <div className="screen" data-test="display">
          {display}
        </div>

        <div className="brand">
          <img
            alt="Equal Experts"
            src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg"
          />
        </div>

        <div className="pad">
          <div className="numberKeys">
            <button className="clear">Clear</button>
            {numberPadOrder.map((order, index) => (
              <button
                key={index}
                style={{ order }}
                onClick={() => handleNumberClick(index)}
                data-test={`number-${index}`}
              >
                {index}
              </button>
            ))}
            <button
              style={{ order: 11 }}
              onClick={() => handlePointClick()}
              data-test="."
            >
              .
            </button>
          </div>
          <div className="operatorKeys">
            <button>&#247;</button>
            <button>x</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default App;
