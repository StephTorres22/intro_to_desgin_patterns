/* Adapater Pattern
The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate by acting as a bridge between them. 
It provides a way to convert the interface of one object into another interface that clients expect.
*/

class LegacyPrinter {
  constructor() {}
  printLegacy(text) {
    console.log(`Legacy printing: ${text}`);
  }
}

//Target interface
class Printer {
  constructor() {}
  print(text) {}
}

//Adatper
class PrinterAdapter extends Printer {
  constructor() {
    super(); //Remeber when using extends need to use super
    this.LegacyPrinter = new LegacyPrinter();
  }

  print(text) {
    this.LegacyPrinter.printLegacy(text);
  }
}

const printer = new PrinterAdapter();
printer.print("Hello World");

/* In this code, the Adapter pattern is used to bridge the gap between the LegacyPrinter class and a desired Printer interface. 
The PrinterAdapter extends the Printer class and internally utilizes the LegacyPrinter to adapt the print method. 
When printer.print("Hello, World!") is called, it effectively triggers the legacy printing functionality with the output "Legacy Printing: Hello, World!". 
This shows how the Adapter pattern enables the integration of incompatible components by providing a standardized interface. */

