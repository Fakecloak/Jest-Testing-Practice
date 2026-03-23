class hashSet {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null);
    }

    hash(key) {
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode = (hashCode * 31 + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return;
            }
        }

        bucket.push({ key });
        this.size++;

        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    resize() {
        const oldBuckets = this.buckets;

        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;

        this.buckets.forEach(bucket => {
            if (bucket !== null) {
                bucket.forEach(pair => {
                    this.set(pair.key);
                })
            }
        })
    }

    get(key) {
        //hashing the key to get the index
        const index = this.hash(key);

        //getting the bucket index
        const bucket = this.buckets[index];

        //checking if bucket is empty
        if (bucket === null) return null;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }

        // if key not found on loop
        return null;
    }

    //same as get method but return true or false
    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket === null) return false;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return true;
            }
        }

        return false;
    }

    //same as get/has method but remove the key value pair and return true or false
    remove(key) {
        const index = this.hash(key);

        const bucket = this.buckets[index];

        if (bucket === null) return false;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1); //removes that key value pair from bucket
                this.size--;
                return true;
            }
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null); //creating new array with new capacity.
        this.size = 0;
    }

    // returns an array containing all the keys inside the hash map.
    keys() {
        const arr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            if (bucket !== null) {
                for (let j = 0; j < bsucket.length; j++) {
                    arr.push(bucket[j].key);
                }
            }
        }

        return arr;
    }
}

