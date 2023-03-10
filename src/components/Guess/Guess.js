import React from 'react';
import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';

function Guess({ guess = '' }) {
  if (guess) {
    return (
      <Column>
        {Array.from(guess).map((character, index) => {
          return <Cell key={index}>{character}</Cell>;
        })}
      </Column>
    );
  }

  return (
    <Column>
      {range(0, WORD_LENGTH).map((r, index) => (
        <Cell key={index}></Cell>
      ))}
    </Column>
  );
}
const Column = ({ children }) => {
  return <p className="guess">{children}</p>;
};

const Cell = ({ children }) => {
  return <span className="cell">{children}</span>;
};

export default Guess;
