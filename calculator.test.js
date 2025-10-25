
// calculator.test.js
// calculator.test.js
const { add, subtract, multiply, divide, modulus } = require('./calculator');

describe('Calculator', () => {
  test('add should return sum', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtract should return difference', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  test('multiply should return product', () => {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('divide should return quotient', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });

  test('divide should throw an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
  });

  // For Modulus
  test('modulus should return remainder', () => {
    expect(modulus(10, 3)).toBe(1);
    expect(modulus(25, 5)).toBe(0);
  });

  test('modulus should throw an error when modulus by zero', () => {
    expect(() => modulus(7, 0)).toThrow('Cannot take modulus by zero');
  });
});

