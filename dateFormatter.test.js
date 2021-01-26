const dateFormatter = require('./dateFormatter');

test('gets YYMMDD returns YYYY/MM/DD and viceversa', () => {
  expect(dateFormatter('210126', 'long')).toBe('2021/01/26');
  expect(dateFormatter('2021/01/26', 'short')).toBe('210126');
});