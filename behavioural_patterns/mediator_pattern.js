/* Mediator Pattern
The Mediator pattern simplifies object communication by introducing a mediator object that serves as a central hub for coordinating interactions between objects. 
It encapsulates the communication logic and provides methods for objects to register, send, and receive messages.
*/

/* in this example we are limited to two, if we want more we hard code them in with respective set and notify methods. */
class Mediator {
  constructor() {
    this.colleague1 = null;
    this.colleague2 = null;
  }

  setColleague1(colleague) {
    this.colleague1 = colleague;
  }

  setColleague2(colleague) {
    this.colleague2 = colleague;
  }

  notifyColleague1(message) {
    this.colleague1.receive(message);
  }

  notifyColleague2(message) {
    this.colleague2.receive(message);
  }
}

class Colleague {
  constructor(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    this.mediator.notifyColleague2(message);
  }

  receive(message) {
    console.log(message);
  }
}

const mediator = new Mediator();

const col1 = new Colleague(mediator);
const col2 = new Colleague(mediator);

mediator.setColleague1(col1);
mediator.setColleague2(col2);

col1.send("Hey Col 2");

class MyMediator {
  constructor() {
    this.targets = [];
  }

  addTarget(target) {
    this.targets.push(target);
  }

  notifyTarget(target, message) {
    if (this.targets.length > 0) {
      const index = this.targets.indexOf(target);

      if (index >= 0) {
        // can't use if (index) as 0 counts as falsey!
        this.targets[index].recieve(message);
      }
    }
  }
}

/* means that more that one obj can send and recieve messages, uses array to hold targets/obj that mediators is mediating between! */
class MyColleagues {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
    this.mediator.addTarget(this);
  }

  /* changes mediators. */
  setMediator(mediator) {
    this.mediator = mediator;
    this.mediator.addTarget(this);
  }

  send(message, target) {
    this.mediator.notifyTarget(target, message);
  }

  recieve(message) {
    console.log(message);
  }
}

const myMediator = new MyMediator();

const myCol1 = new MyColleagues("col1", myMediator);
const myCol2 = new MyColleagues("col2", myMediator);

/* myCol1.setMediator(myMediator);
myCol2.setMediator(myMediator); */

myCol1.send(`Does my way work ${myCol2.name}?`, myCol2);
myCol2.send(`Yes it does ${myCol1.name}!`, myCol1);
