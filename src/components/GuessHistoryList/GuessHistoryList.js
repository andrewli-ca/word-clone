import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessHistoryList({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        return <Guess key={index} guess={guesses[index]} />;
      })}
    </div>
  );
}

export default GuessHistoryList;
