export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

// https://stackoverflow.com/a/39835908/5323457
export const pluralize = (count, noun, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;
