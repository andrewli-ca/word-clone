import React from 'react';

function GuessInputForm() {
  const [guessInput, setGuessInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ guess: guessInput });
    setGuessInput('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        onChange={(e) => setGuessInput(e.target.value.toUpperCase())}
        required
        pattern="\w{5,5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInputForm;
