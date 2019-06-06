import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const numberPadOrder = [10, 7, 8, 9, 4, 5, 6, 1, 2, 3];
  const [display, setDisplay] = useState('0');
  const [firstValue, setFirstValue] = useState(0);
  const [currentValue, setCurrentValue] = useState('0');
  const [operand, setOperand] = useState(null);

  const handleNumberClick = value => {
    const newValue =
      currentValue === '0' ? value.toString() : `${display}${value.toString()}`;
    setCurrentValue(newValue);
    setDisplay(newValue);
  };

  const handlePointClick = () => {
    if (currentValue.indexOf('.') > 0) return;
    const newValue = currentValue === '0' ? '0.' : `${display}.`;
    setCurrentValue(newValue);
    setDisplay(newValue);
  };

  const handleOperandClick = operation => {
    setCurrentValue('0');
    setFirstValue(Number(currentValue));
    setOperand(operation);
  };

  const handleEqualsClick = () => {
    const secondValue = Number(currentValue);
    let result;

    if (operand === '/') result = firstValue / secondValue;
    if (operand === 'x') result = firstValue * secondValue;
    if (operand === '+') result = firstValue + secondValue;
    if (operand === '-') result = firstValue - secondValue;

    setCurrentValue(result.toString());
    setFirstValue(result);
    setOperand(null);

    setDisplay(
      result
        .toFixed(7)
        .replace(/0+$/, '')
        .replace(/.$/, '')
    );
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
            <button onClick={() => handleOperandClick('/')} data-test="/">
              &#247;
            </button>
            <button onClick={() => handleOperandClick('x')} data-test="x">
              x
            </button>
            <button onClick={() => handleOperandClick('-')} data-test="-">
              -
            </button>
            <button onClick={() => handleOperandClick('+')} data-test="+">
              +
            </button>
            <button onClick={() => handleEqualsClick()} data-test="=">
              =
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default App;
