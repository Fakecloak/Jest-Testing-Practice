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

    delete(value, root = this.root) {

        // If tree/subtree is empty → nothing to delete
        if (root === null) {
            return null;
        }

        // Go LEFT if value is smaller
        if (value < root.data) {
            root.left = this.delete(value, root.left);
        }
        // Go RIGHT if value is greater
        else if (value > root.data) {
            root.right = this.delete(value, root.right);
        }
        // Node FOUND
        else {
            // Case 1: No children (leaf)
            if (root.left === null && root.right === null) {
                return null;
            }
            // Case 2: Only right child
            if (root.left === null) {
                return root.right;
            }
            // Case 2: Only left child
            if (root.right === null) {
                return root.left;
            }

            // Case 3: Two children
            // Step 1: Find smallest in right subtree
            let temp = root.right;
            while (temp.left !== null) {
                temp = temp.left;
            }
            // Step 2: Replace value
            root.data = temp.data;
            // Step 3: Delete duplicate
            root.right = this.delete(temp.data, root.right);
        }
        // Return updated node
        return root;
    }



    // EX:        10
    //       /    \
    //      5      15
    //     / \    /  \
    //    3   7  12  20
    levelOrderForEach(callback) {

        // if no callback
        if (!callback) {
            throw new Error("Callback is required");
        }

        // if tree empty
        if (this.root === null) return;

        let queue = [];              // create queue
        queue.push(this.root);       // start with root

        while (queue.length > 0) {

            let current = queue.shift();   // remove first element

            callback(current.data);        // call callback with value

            // add left child if exists
            if (current.left !== null) {
                queue.push(current.left);
            }

            // add right child if exists
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }

    //in-order traversal : left → root → right
    inOrderForEach(callback, node = this.root) {

        if (!callback) throw new Error("Callback required");

        if (node === null) return;

        this.inOrderForEach(callback, node.left); // for left subtree
        callback(node.data); // for root
        this.inOrderForEach(callback, node.right); // for right subtree
    }

    //pre-order traversal : root → left → right
    preOrderForEach(callback, node = this.root) {
        if (!callback) throw new Error("Callback required");

        if (node === null) return;

        callback(node.data); // for root
        this.preOrderForEach(callback, node.left); // for left subtree
        this.preOrderForEach(callback, node.right); // for right subtree
    }
}

