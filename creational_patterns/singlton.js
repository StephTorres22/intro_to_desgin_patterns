/* Singleton design pattern

The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.
This pattern is useful when you want to limit the number of instances of a class and ensure a single shared instance
is accessible throughout the application.


*/

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);

/* In this example, the Singleton class has a constructor that checks if an instance of the class already exists. 
If an instance doesn't exist (!Singleton.instance condition), it initializes the instance by assigning this to Singleton.instance. 
This ensures that subsequent calls to the constructor will return the same instance. 

NOT QUITE GETTING THE SYNTAX*/