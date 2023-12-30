/* Bridge Builder 
The Bridge pattern is a structural design pattern that separates the abstraction and implementation of a system, 
allowing it to evolve independently. It introduces a bridge between the two by using an interface or abstract class. 
Here's an example code snippet to illustrate the Bridge pattern:
*/

class Shape {
  constructor(colour) {
    this.colour = colour;
  }

  draw() {}
}

//concrete abstraction
class Circle extends Shape {
  constructor(colour) {
    super();
    this.colour = colour;
  }
  draw() {
    console.log(`Drawing a ${this.colour} circle`);
  }
}

class Square extends Shape {
  draw() {
    console.log(`Drawing a ${this.colour} square`);
  }
}

//Implementor
class Colour {
  getColour() {}
}

//concrete implementors
class RedColour extends Colour {
  getColour() {
    return "red";
  }
}

class BlueColour extends Colour {
  getColour() {
    return "blue";
  }
}

//usage
const redCircle = new Circle(new RedColour().getColour());
redCircle.draw();
const blueSquare = new Square(new BlueColour().getColour());
blueSquare.draw();

/* hmmm */
/*  Slightly different to the code example in the article... in the article the getColour() method isn't called/invoked when defining redCircle and blueSquare*/
