const arrayDuplicator = require('./arrayDuplicator');

test('gets array, returns new array', () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
  expect(arrayDuplicator(arr1)).not.toBe(arr1);
  expect(arrayDuplicator(arr1)).toEqual(arr1);
});