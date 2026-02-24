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