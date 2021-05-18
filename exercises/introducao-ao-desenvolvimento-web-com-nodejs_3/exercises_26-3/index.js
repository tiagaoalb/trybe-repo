const checkNumber = (int) => {
  if (typeof int !== 'number') return 'it must be a number';
  if (int > 0) return 'positive';
  if (int < 0) return 'negative';
  if (int === 0) return 'neutral';
}

module.exports = checkNumber;
