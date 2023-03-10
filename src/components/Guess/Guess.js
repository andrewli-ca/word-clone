import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span className="cell" key={index}>
          {guess && guess.charAt(index)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
