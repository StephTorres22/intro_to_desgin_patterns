/* Composite Pattern 
The Composite pattern is a structural design pattern that allows you to treat individual objects and compositions of objects uniformly. 
It enables you to create hierarchical structures where each element can be treated as a single object or a collection of objects. 
The pattern uses a common interface to represent both individual objects (leaf nodes) and compositions (composite nodes), 
allowing clients to interact with them uniformly.
*/

class Employee {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log(`  Employee: ${this.name}`);
  }
}

//Composite
class Manager extends Employee {
  constructor(name) {
    super(name);
    this.employees = [];
  }

  add(employee) {
    this.employees.push(employee);
  }

  remove(employee) {
    if (this.employees.length > 0) {
      const index = this.employees.indexOf(employee);

      this.employees.splice(index, 1);
    }
  }

  print() {
    console.log(this.name + "¬");
    for (const employee of this.employees) {
      employee.print();
    }
  }
}

const john = new Employee("John Doe");
const jane = new Employee("Jane Doe");

const mary = new Manager("Mary");
mary.add(jane);
mary.add(john);

const bob = new Manager("Bob");
const steve = new Employee("Steve");
const burt = new Employee("Burt");
bob.add(burt);
bob.add(steve);
bob.add(mary);

bob.print();

/* basic example, using strings not objs */
