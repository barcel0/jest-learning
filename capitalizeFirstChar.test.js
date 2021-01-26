const capitalizeFirstChar = require('./capitalizeFirstChar');

test('gets banana, returns Banana', () => {
  expect(capitalizeFirstChar('banana')).toBe('Banana');
});

test('gets non string values, returns empty', () => {
  expect(capitalizeFirstChar(4)).toBe('');
  expect(capitalizeFirstChar(true)).toBe('');
  expect(capitalizeFirstChar({ msg: 'hi there' })).toBe('');
  expect(capitalizeFirstChar(null)).toBe('');
  expect(capitalizeFirstChar(undefined)).toBe('');
  expect(capitalizeFirstChar([1, 2, 3])).toBe('');
});