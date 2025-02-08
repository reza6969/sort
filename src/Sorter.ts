import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  // collection: number[];

  constructor(public collection: NumbersCollection) {}
  sort(): void {
    // const length = this.collection.length;
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if(this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}