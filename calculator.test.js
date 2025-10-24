
// calculator.test.js
const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
  test('add should return sum', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtract should return difference', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiply should return product', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('divide should return quotient', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide should throw an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Divide by zero');
  });
});
