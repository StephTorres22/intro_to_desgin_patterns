/* Strategy Pattern 
The Strategy Pattern allows you to encapsulate interchangeable algorithms within separate strategy objects. 
It enables dynamic selection of algorithms at runtime, promoting flexibility and extensibility.
*/

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  executeStrat() {
    this.strategy.execute();
  }
}

class ConcreteStrategyA {
  execute() {
    console.log("Strat A is executed.");
  }
}

class ConcreteStrategyB {
  execute() {
    console.log("Strat B is executed");
  }
}

const contextA = new Context(new ConcreteStrategyA());
contextA.executeStrat();

const contextB = new Context(new ConcreteStrategyB());
contextB.executeStrat();
