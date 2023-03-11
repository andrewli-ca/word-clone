import React from 'react';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessResults from '../GuessResults';
import GuessInputForm from '../GuessInputForm';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const formRef = React.useRef(null);
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentGuess = e.target['guessInput'].value.toUpperCase();
    console.log({ guess: currentGuess });

    setGuesses((prevGuesses) => [...prevGuesses, currentGuess]);

    formRef.current.elements['guessInput'].value = '';
  };

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInputForm ref={formRef} onSubmit={handleSubmit} />
    </div>
  );
}

export default Game;
