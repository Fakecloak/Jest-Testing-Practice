import { capitalize, reverseString, calculator, analyzeArray } from '../src/index.js';

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('calculator', () => {
    expect(calculator.add(1, 3)).toBe(4);
    expect(calculator.sub(4, 3)).toBe(1);
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.divide(4, 2)).toBe(2);
})

test('analyzeArray', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});