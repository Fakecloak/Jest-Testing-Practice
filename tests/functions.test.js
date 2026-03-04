

test.skip('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test.skip('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test.skip('calculator', () => {
    expect(calculator.add(1, 3)).toBe(4);
    expect(calculator.sub(4, 3)).toBe(1);
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.divide(4, 2)).toBe(2);
})

test.skip('analyzeArray', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test.skip('caesarCipher shift 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test.skip('caesarCipher test wrapping', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test.skip('caesarCipher test punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});


// Exercise 2 - contains
describe("contains", () => {
    const meaningOfLifeArray = [42];
    const object = {
        data: {
            duplicate: "e",
            stuff: {
                thing: {
                    banana: NaN,
                    moreStuff: {
                        something: "foo",
                        answer: meaningOfLifeArray,
                    },
                },
            },
            info: {
                duplicate: "e",
                magicNumber: 44,
                empty: null,
            },
        },
    };

    test.skip("true if the provided number is a value within the object", () => {
        expect(contains(object, 44)).toBe(true);
    });

    test.skip("true if the provided string is a value within the object", () => {
        expect(contains(object, "foo")).toBe(true);
    });

    test.skip("does not convert input string into a number when searching for a value within the object", () => {
        expect(contains(object, "44")).toBe(false);
    });

    test.skip("false if the provided string is not a value within the object", () => {
        expect(contains(object, "bar")).toBe(false);
    });

    test.skip("true if provided string is within the object, even if duplicated", () => {
        expect(contains(object, "e")).toBe(true);
    });

    test.skip("true if the object contains the same object by reference", () => {
        expect(contains(object, meaningOfLifeArray)).toBe(true);
    });

    test.skip("false if no matching object reference", () => {
        expect(contains(object, [42])).toBe(false);
    });

    test.skip("true if NaN is a value within the object", () => {
        expect(contains(object, NaN)).toBe(true);
    });

    test.skip("true if the provided value exists and is null", () => {
        expect(contains(object, null)).toBe(true);
    });
});


// Exercise 3 - totalIntegers
describe('totalIntegers', () => {
    test('Counts all integers in a simple array of only integers', () => {
        expect(totalIntegers([1, 2, 3])).toBe(3);
    });

    test.skip('Ignores non-number values', () => {
        expect(totalIntegers([1, 2, '3', 4])).toBe(3);
    });

    test.skip('Counts all integers in a plain object', () => {
        expect(totalIntegers({ a: 1, b: '2', c: 3 })).toBe(2);
    });

    test.skip('Does not find any integers in nested empty arrays', () => {
        expect(totalIntegers([[], [], []])).toBe(0);
    });

    test.skip('Counts integers in deeply nested arrays', () => {
        expect(totalIntegers([[[[[[[[[[[[[[4]]]]]], 246]]]]]]]])).toBe(2);
    });

    test.skip('Counts negative integers', () => {
        expect(totalIntegers([5, 7, -7, [45, -1, -0], [4, 7, -4, -4, -4, [777777, -45674]], [-5477654]])).toBe(14);
    });

    test.skip('Does not count non-integer numbers', () => {
        expect(totalIntegers([5, 7.7, 7, [45, 1, 0], [4.0, 7, [7.77777, 4567.4]], [5477.654]])).toBe(7);
    });

    test.skip('Returns undefined for non-array/object arguments', () => {
        expect(totalIntegers('2')).toBe(undefined);
        expect(totalIntegers(() => { })).toBe(undefined);
        expect(totalIntegers(42)).toBe(undefined);
        expect(totalIntegers(NaN)).toBe(undefined);
    });

    test.skip('Does not count NaN as an integer', () => {
        expect(totalIntegers([5, NaN, [NaN, NaN, 64], 4])).toBe(3);
    });

    test.skip('Counts all integers even with deeply nested containing multiple types', () => {
        expect(totalIntegers([NaN, [[{}], 555], '444', [], 74.0, undefined, [[() => { }], [4], Infinity, [[[], -44.0], [null, '-4'], NaN[[]], 6]], () => { }, [[], [-Infinity, ['4'], [4.7, -46.7], NaN]]])).toBe(5);
    });

    test.skip('Counts all integers when nested arrays and objects are mixed together', () => {
        expect(totalIntegers([4, 6, { a: 1, b: { a: [5, 10], b: 11 } }, 9])).toBe(7);
    });
});

describe("permutations", () => {
    test.skip("1 possible permutation for a set containing 0 numbers", () => {
        expect(permutations([])).toEqual([[]]);
    });

    test.skip("1 possible permutation for a set containing 1 number", () => {
        expect(permutations([1])).toEqual([[1]]);
    });

    test.skip("2 possible permutations for a set containing 2 numbers", () => {
        expect(permutations([1, 2]).sort()).toEqual(
            [
                [1, 2],
                [2, 1],
            ].sort(),
        );
    });

    test.skip("6 possible permutations for a set containing 3 numbers", () => {
        expect(permutations([1, 2, 3]).sort()).toEqual(
            [
                [1, 2, 3],
                [1, 3, 2],
                [2, 1, 3],
                [2, 3, 1],
                [3, 1, 2],
                [3, 2, 1],
            ].sort(),
        );
    });

    test.skip("24 possible permutations for a set containing 4 numbers", () => {
        expect(permutations([1, 2, 3, 4]).sort()).toEqual(
            [
                [1, 2, 3, 4],
                [1, 2, 4, 3],
                [1, 3, 2, 4],
                [1, 3, 4, 2],
                [1, 4, 2, 3],
                [1, 4, 3, 2],
                [2, 1, 3, 4],
                [2, 1, 4, 3],
                [2, 3, 1, 4],
                [2, 3, 4, 1],
                [2, 4, 1, 3],
                [2, 4, 3, 1],
                [3, 1, 2, 4],
                [3, 1, 4, 2],
                [3, 2, 1, 4],
                [3, 2, 4, 1],
                [3, 4, 1, 2],
                [3, 4, 2, 1],
                [4, 1, 2, 3],
                [4, 1, 3, 2],
                [4, 2, 1, 3],
                [4, 2, 3, 1],
                [4, 3, 1, 2],
                [4, 3, 2, 1],
            ].sort(),
        );
    });
});


describe('pascal', () => {
    test.skip('Gets the first row of pascal', () => {
        expect(pascal(1)).toEqual([1]);
    });

    test.skip('Gets the second row of pascal', () => {
        expect(pascal(2)).toEqual([1, 1]);
    });

    test.skip('Gets the third row of pascal', () => {
        expect(pascal(3)).toEqual([1, 2, 1]);
    });

    test.skip('Gets the fourth row of pascal', () => {
        expect(pascal(4)).toEqual([1, 3, 3, 1]);
    });

    test.skip('Gets the fifth row of pascal', () => {
        expect(pascal(5)).toEqual([1, 4, 6, 4, 1]);
    });

    test.skip('Gets the sixth row of pascal', () => {
        expect(pascal(6)).toEqual([1, 5, 10, 10, 5, 1]);
    });

    test.skip('Gets the seventh row of pascal', () => {
        expect(pascal(7)).toEqual([1, 6, 15, 20, 15, 6, 1]);
    });
});

import { capitalize, reverseString, calculator, analyzeArray, caesarCipher, contains, totalIntegers, permutations, pascal } from '../src/index.js';