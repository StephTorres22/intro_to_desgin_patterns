/* Prototype Pattern

The Prototype pattern in JavaScript focuses on creating objects by cloning or extending existing objects as prototypes. 
It allows us to create new instances without explicitly defining their classes. 
In this pattern, objects act as prototypes for creating new objects, enabling inheritance and the sharing of properties,
and methods among multiple objects.
*/

/* Prototype Object */
const carPrototype = {
  wheels: 4,
  startEngine() {
    return "Engine started.."; // have to use return if you want to change things as string in the log message.
  }, //need this comma, objs der
  stopEngine() {
    console.log("Engine stopped..");
  },
};

/* This is helpful to see how JS deals with obj and class creation, don't usually use this syntax so good to see 

calling global Object, using the create method, pass in the structure/template*/
const car1 = Object.create(carPrototype);

/* can assign new key value pair on the obj, as well as having access to pre-defined method on carPrototype obj */
car1.make = "Honda";
car1.model = "Jazz";

console.log(`${car1.make} ${car1.model}`, car1.startEngine());
