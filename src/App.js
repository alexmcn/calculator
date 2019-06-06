import React from 'react';
import './App.scss';

const App = () => {
  const numberPadOrder = [10, 7, 8, 9, 4, 5, 6, 1, 2, 3];

  return (
    <div className="App">
      <article className="calculator">
        <div className="screen">1234</div>
        <div className="brand">
          <img
            alt="Equal Experts"
            src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg"
          />
        </div>

        <div className="pad">
          <div className="numberKeys">
            {numberPadOrder.map((order, index) => (
              <button key={index} style={{ order }}>
                {index}
              </button>
            ))}
            <button style={{ order: 11 }}>.</button>
          </div>
          <div className="operatorKeys">/ x - =</div>
        </div>
      </article>
    </div>
  );
};

export default App;
