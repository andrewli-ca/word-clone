import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer) || range(5);

  const getCellClassName = (status) => (status ? `cell ${status}` : 'cell');

  return (
    <p className="guess">
      {guessResult.map((result, index) => (
        <span className={getCellClassName(result?.status)} key={index}>
          {result?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
