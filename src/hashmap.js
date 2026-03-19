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
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.size++;
  }
}