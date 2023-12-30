/* Builder Pattern 

In the Builder pattern, a builder class or object is responsible for constructing the final object. 
It provides a set of methods to configure and set the properties of the object being built. 
The construction process typically involves invoking these methods in a specific order to gradually build the object.
*/

class Car {
  constructor() {
    this.make = "";
    this.model = "";
    this.engine = "";
    this.wheels = 0;
  }

  displayInfo() {
    console.log(
      `Make: ${this.make}, Model: ${this.model}, Engine: ${this.engine}, Wheels: ${this.wheels}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setMake(make) {
    this.car.make = make;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  build() {
    return this.car;
  }
}

/* pretty long */
const carBuilder = new CarBuilder();
const car = carBuilder
  .setMake("Toyota")
  .setModel("Camry")
  .setEngine("V6")
  .setWheels(4)
  .build();

car.displayInfo();
