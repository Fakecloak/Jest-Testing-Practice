class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        // sort the array
        const sortedArr = [...new Set(arr.sort((a, b) => a - b))];

        //helper recursive function to build the tree
        const build = (arr) => {

            if (arr.length === 0) return null; // base case

            const mid = Math.floor(arr.length / 2); // find middle index
            const root = new node(arr[mid]) // Create a node using middle value → this becomes root

            root.left = build(arr.slice(0, mid)); // recursively build left subtree
            root.right = build(arr.slice(mid + 1)); // recursively build right subtree

            return root;
        }

        return build(sortedArr);
    }
}

