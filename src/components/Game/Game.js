import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import EndGameBanner from '../EndGameBanner';
import GuessInputForm from '../GuessInputForm';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const formRef = React.useRef(null);
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentGuess = e.target['guessInput'].value.toUpperCase();
    const nextGusesses = [...guesses, currentGuess];

    setGuesses(nextGusesses);

    const inputFieldElement = formRef.current.elements['guessInput'];
    inputFieldElement.value = '';

    if (currentGuess === answer) {
      setStatus('won');
      inputFieldElement.disabled = true;
    }

    if (
      currentGuess !== answer &&
      nextGusesses.length === NUM_OF_GUESSES_ALLOWED
    ) {
      setStatus('lost');
      inputFieldElement.disabled = true;
    }
  };

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInputForm
        ref={formRef}
        onSubmit={handleSubmit}
        disabled={status !== 'running'}
      />
      <EndGameBanner
        status={status}
        numGuesses={guesses.length}
        answer={answer}
      />
    </div>
  );
}

export default Game;
