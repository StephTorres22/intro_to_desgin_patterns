/* Observer Pattern

The Observer Pattern establishes a one-to-many relationship between objects, 
where multiple observers are notified of changes in the subject's state. 
It enables loose coupling between objects and promotes event-driven communication.*/

class Subject {
  constructor() {
    this.observes = [];
  }

  addObserver(observer) {
    this.observes.push(observer);
  }

  removerObserver(observer) {
    if (this.observes.length > 0) {
      const index = this.observes.indexOf(observer);
      this.observes.splice(index, 1);
    }
  }

  notifyObservers() {
    this.observes.forEach((observer) => observer.update());
  }
}

class Observer {
  constructor() {}

  update() {
    console.log("Observer is notified of changes.");
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers();
