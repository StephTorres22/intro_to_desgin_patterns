/* Decorator Pattern 
The Decorator Pattern allows you to add behavior or modify the existing behavior of an object dynamically. 
It enhances the functionality of an object by wrapping it with one or more decorators without modifying its structure.
*/

class Coffee {
  constructor() {}
  getCost() {
    return 1;
  }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 0.5;
  }
}

const myCoffee = new Coffee();
const coffeeWithMilk = new CoffeeDecorator(myCoffee);

console.log(coffeeWithMilk.getCost());

/* In this example, the CoffeeDecorator class wraps a base Coffee object and adds additional functionality. 
It has a getCost method that calculates the total cost by combining the cost of the base coffee with an additional cost of 0.5.

In the usage section, a myCoffee instance of the Coffee class is created. 
Then, a coffeeWithMilk instance of the CoffeeDecorator class is instantiated, passing myCoffee as an argument. 
When coffeeWithMilk.getCost() is called, it returns the total cost of the coffee with the added cost from the decorator, 
resulting in an output of 1.5. This example illustrates how the decorator pattern can extend the functionality of an object 
by dynamically adding or modifying its properties or methods.  */
