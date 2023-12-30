/* Iterator Pattern
The Iterator pattern is a behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. 
It allows you to traverse a collection of objects in a uniform manner, regardless of the specific implementation of the collection. 
The pattern separates the traversal logic from the collection, promoting a clean and flexible approach to iterating over elements.
*/

class Collection {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  createIterator() {}
}

//Concrete aggregate ... meaning..?

class ConcreteCollection extends Collection {
  createIterator() {
    return new ConcreteIterator(this);
  }
}

//Abstract Iterator
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {}

  next() {}
}

//ConcreteIterator

class ConcreteIterator extends Iterator {
  hasNext() {
    return this.index < this.collection.items.length;
  }

  next() {
    return this.collection.items[this.index++];
  }
}

const collection = new ConcreteCollection();
collection.addItem("Item 1");
collection.addItem("Item 2");
collection.addItem("Item 3");

const iterator = collection.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
