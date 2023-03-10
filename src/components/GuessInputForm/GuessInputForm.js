import React from 'react';

function GuessInputForm({ onSubmit }, ref) {
  return (
    <form ref={ref} className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        name="guessInput"
        type="text"
        required
        pattern="[A-Za-z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default React.forwardRef(GuessInputForm);
