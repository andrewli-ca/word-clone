import React from 'react';
import { pluralize } from '../../utils';

const EndGameBanner = ({ status, numGuesses, answer }) => {
  if (status === 'won') {
    return <HappyBanner numGuesses={numGuesses} />;
  }

  if (status === 'lost') {
    return <SadBanner answer={answer} />;
  }

  return null;
};

const HappyBanner = ({ numGuesses }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{pluralize(numGuesses, 'guess', 'es')}</strong>.
      </p>
    </div>
  );
};

const SadBanner = ({ answer }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
};

export default EndGameBanner;
