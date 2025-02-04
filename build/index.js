"use strict";
class Sorter {
    // collection: number[];
    constructor(collection) {
        // this.collection = collection;
        this.collection = collection;
    }
    sort() {
        // const length = this.collection.length;
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is number[]
                // if collection is an array of numbers
                if (this.collection instanceof Array) {
                    // collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // only going to work if collection is a string
                // if collection is a string, do this logic instead
                // ~~~ logic to compare and swap chartcters in string 
                if (typeof this.collection === 'string') {
                    // this.collection.
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
