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