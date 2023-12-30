/* Facade Pattern
The Facade Pattern provides a simplified interface to a complex subsystem, 
acting as a front-facing interface that hides the underlying implementation details. 
It offers a convenient way to interact with a complex system by providing a high-level interface.
*/

class SubsystemA {
  constructor() {}
  operationA() {
    console.log("Subsystem A operation");
  }
}

class SubsystemB {
  operationB() {
    console.log("Subsystem B operation");
  }
}

class Facade {
  constructor() {
    this.SubsystemA = new SubsystemA();
    this.SubsystemB = new SubsystemB();
  }

  operation() {
    this.SubsystemA.operationA();
    this.SubsystemB.operationB();
  }
}

const facade = new Facade();
facade.operation();

/* In this example, the code consists of three classes: SubsystemA, SubsystemB, and Facade. 
The SubsystemA and SubsystemB classes represent independent subsystems and have their respective operationA and operationB methods. 
The Facade class serves as a simplified interface that aggregates the functionality of the subsystems.

In the usage section, a facade instance of the Facade class is created. 
Invoking facade.operation() triggers the execution of operationA from SubsystemA and operationB from SubsystemB. 
As a result, the output displays "Subsystem A operation." followed by "Subsystem B operation." 
This demonstrates how the Facade pattern provides a unified and simplified interface to interact with complex subsystems, 
abstracting their complexities and making them easier to use.  */
