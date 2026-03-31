import { BinarySearchTree, node } from "../src/bst.js";

describe("Binary Search Tree", () => {
    test("should create a new BST", () => {
        const bst = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7]);
        expect(bst).toBeInstanceOf(BinarySearchTree);
    });
});

describe("Binary Search Tree", () => {
    test("for each", () => {
        const bst = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7]);

        bst.inOrderForEach(v => console.log(v));
        bst.preOrderForEach(v => console.log(v));
        bst.postOrderForEach(v => console.log(v));
    });
});