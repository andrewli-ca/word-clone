import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import EndGameBanner from '../EndGameBanner';
import GuessInputForm from '../GuessInputForm';
import GuessResults from '../GuessResults';

function Game() {
  const [resetGameKey, setResetGameKey] = React.useReducer((r) => r + 1, 0);

  return <GameMain key={resetGameKey} resetGame={setResetGameKey} />;
}

function GameMain({ resetGame }) {
  const formRef = React.useRef(null);

  const [answer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  const [status, setStatus] = React.useState('running');

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

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
        action={<button onClick={resetGame}>Restart Game</button>}
      />
    </div>
  );
}

export default Game;
