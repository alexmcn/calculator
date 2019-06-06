import React from 'react';
import './App.scss';

const App = () => {
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
        <p>Calculator</p>
      </article>
    </div>
  );
};

export default App;
