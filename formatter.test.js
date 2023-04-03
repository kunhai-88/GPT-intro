const { numberWithCommas } = require('./formatter.js');

describe('numberWithCommas', () => {
  it('should format a number with commas', () => {
    expect(numberWithCommas(1234567)).toBe('1,234,567');
    expect(numberWithCommas(1234567.89, { digit: 2 })).toBe('1,234,567.89');
    expect(numberWithCommas('+1234567')).toBe('+1,234,567');
  });

  it('should return "--" for non-number input', () => {
    expect(numberWithCommas('abc')).toBe('--');
    expect(numberWithCommas(undefined)).toBe('--');
    expect(numberWithCommas(null)).toBe('--');
  });
});