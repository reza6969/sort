class Sorter {
  // collection: number[];

  constructor(public collection: number[]) {
    // this.collection = collection;

  }
  sort(): void {
    
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);