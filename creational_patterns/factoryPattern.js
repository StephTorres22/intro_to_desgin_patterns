/* Factory pattern
The Factory Pattern provides a way to create objects without specifying their concrete classes. 
It encapsulates the object creation logic in a separate factory method, allowing flexibility, 
and decoupling between the creator and the created objects. */

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

/* no constructor */
class CarFactory {
  createCar(make, model) {
    return new Car(make, model);
  }
}

const factory = new CarFactory();
const myCar = factory.createCar("Ford", "Focus");

console.log(myCar);

/* A bit weird, already why decouple these two things.. assigning myCar = new Car, would achieve the same thing...
don't get the reasoning */

/* Constructor Pattern

The Constructor Pattern creates objects from a constructor function using the new keyword. 
It allows you to define and initialize object properties within the constructor function.*/

/* vscode know this is a constructor function */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const steph = new Person("Steph", 33);
console.log(steph);

/* Both of these patterns are similar to using factory functions, but they both hold reference to type/class of obj whereas a factory doesn't 
i.e...*/

function personFactory(name, age) {
  return { name, age };
}

const alex = personFactory("Alex", 32);
console.log(alex);
