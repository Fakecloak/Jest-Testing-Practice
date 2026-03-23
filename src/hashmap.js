export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    // create bucket if not exist
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // check if key already exist in bucket
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }

    // add new key-value pair
    bucket.push({ key, value });
    this.size++;

    // check if resize is needed after adding new key-value pair
    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
  }

  resize() {
    const oldBuckets = this.buckets; //saving old array data

    this.capacity *= 2; //doubling the capacity
    this.buckets = new Array(this.capacity).fill(null); //creating new array with new capacity

    this.size = 0; //resetting size

    //copying old data to new array
    oldBuckets.forEach(bucket => {
      //checking if bucket is not empty
      if (bucket !== null) {
        //iterating through each pair in the bucket
        bucket.forEach(pair => {
          //setting the pair in the new array using set method
          this.set(pair.key, pair.value);
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
        for (let j = 0; j < bucket.length; j++) {
          arr.push(bucket[j].key);
        }
      }
    }

    return arr;
  }

  // returns an array containing all the values.
  values() {
    const arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      if (bucket !== null) {
        for (let j = 0; j < bucket.length; j++) {
          arr.push(bucket[j].value);
        }
      }
    }

    return arr;
  }

  entries() {
    const arr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      if (bucket !== null) {
        for (let j = 0; j < bucket.length; j++) {
          arr.push([bucket[j].key, bucket[j].value]);
        }
      }
    }

    return arr;
  }
}