import { forEach } from "lodash";

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return [...str].reverse().join("");
}

export const calculator = {

    add(num1, num2) {
        return num1 + num2;
    },

    sub(num1, num2) {
        return num1 - num2;
    },

    multiply(num1, num2) {
        return num1 * num2;
    },

    divide(num1, num2) {
        return num1 / num2;
    },

};

export function analyzeArray(arr) {

    const length = arr.length;
    const average = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return { length, average, min, max };
}


export function caesarCipher(str, shift) {
    const lowerCaseStr = /[a-z]/; // ASCII VALUE a = 97 z = 122
    const upperCaseStr = /^[A-Z]+$/; // ASCII VALUE A = 65 Z = 90

    let result = '';

    for (let char of str) {
        if (lowerCaseStr.test(char)) {
            let code = char.charCodeAt(0) - 97;
            let shifted = (code + shift) % 26;
            result += String.fromCharCode(shifted + 97);
        } else if (upperCaseStr.test(char)) {
            let code = char.charCodeAt(0) - 65;
            let shifted = (code + shift) % 26;
            result += String.fromCharCode(shifted + 65);
        } else {
            result += char;
        }
    };
    return result;
};

export function contains(obj, searchValue) {
    //get all values from object
    const values = Object.values(obj);

    //check if searchValue is in value
    if (values.includes(searchValue)) {
        return true;
    }

    for (const value of values) {
        if (typeof value === 'object' && value != null) {
            if (contains(value, searchValue)) return true;
        }
    }

    return false;
};

export function totalIntegers(arr) {
    let result = 0;

    if (typeof arr !== 'object' || arr === null) {
        return undefined;
    }
    if (Array.isArray(arr)) {
        const count = arr.filter(item => Number.isInteger(item));
        result += count.length;

        for (const value of arr) {
            if (typeof value === 'object' && value !== null) {
                result += totalIntegers(value);
            }
        }
    }

    else if (typeof arr === 'object' && arr !== null) {
        const values = Object.values(arr);
        const count = values.filter(item => Number.isInteger(item));
        result += count.length;

        for (const value of values) {
            if (typeof value === 'object' && value !== null) {
                result += totalIntegers(value);
            }
        }
    }

    return result;
}

export function permutations(arr) {
    if (arr.length === 0) return [[]];

    if (arr.length === 1) return [arr];

    const result = [];

    for (let value of arr) {
        const current = value;
        const remaining = arr.filter(item => item !== current);
        const perms = permutations(remaining);

        for (let perm of perms) {
            result.push([current, ...perm]);
        }
    }

    return result;
}

export function pascal(n) {

    //base case
    if (n === 1) return [1];

    const prev = pascal(n - 1); // recursion part: pascal(3) => pascal(2) => pascal(1)

    const row = [1] // for having 1 at the start of the array

    for (let i = 0; i < prev.length - 1; i++) { // loop for adding the numbers in middle
        row.push(prev[i] + prev[i + 1]);
    }

    row.push(1); // for having 1 at the end of the array

    return row;
}