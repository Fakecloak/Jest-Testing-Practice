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

    includes(value) {
        let current = this.root;

        while (current !== null) {
            if (current.data === value) return true;

            if (current.data > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    insert(value) {
        // if the tree is empty, create a new node and make it the root
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        let current = this.root;

        while (true) {
            //if value exist do nothing 
            if (current.data === value) {
                return;
            }

            //node left side if value is smaller
            if (current.data > value) {
                // if left is null create new node
                if (current.left === null) {
                    current.left = new Node(value);
                    return;
                }
                // move to the left child
                current = current.left;
            } else {
                //node right side if value is greater
                if (current.right === null) {
                    current.right = new Node(value);
                    return;
                }
                // move to the right child
                current = current.right;
            }

        }
    }
}

