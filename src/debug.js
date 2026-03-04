function permutations(arr) {
    if (arr.ength === 0) return [[]];

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

console.log(permutations([1, 2, 3]));

function pascal(n) {

    if (n === 1) return [1];

    const prev = pascal(n - 1);
    const row = [1];

    for (let i = 0; i < prev.length - 1; i++) {
        row.push(prev[i] + prev[i + 1]);
    }

    row.push(1);

    return row;
}

console.log(pascal(3));