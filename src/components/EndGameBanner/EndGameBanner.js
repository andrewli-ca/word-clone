import React from 'react';
import { pluralize } from '../../utils';
import Banner from '../Banner';

function EndGameBanner({ status, numGuesses, answer, action }) {
  if (status === 'won') {
    return <HappyBanner numGuesses={numGuesses} action={action} />;
  }

  if (status === 'lost') {
    return <SadBanner answer={answer} action={action} />;
  }

  return null;
}

function HappyBanner({ numGuesses, action }) {
  return (
    <Banner className="happy" action={action}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{pluralize(numGuesses, 'guess', 'es')}</strong>.
      </p>
    </Banner>
  );
}

function SadBanner({ answer, action }) {
  return (
    <Banner className="happy" action={action}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default EndGameBanner;
