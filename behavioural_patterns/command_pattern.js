/* Command Pattern 
The Command Pattern encapsulates a request as an object, 
allowing you to parameterize clients with different requests, queue or log requests, and support undo operations. 
It decouples the sender of a request from the receiver, promoting loose coupling and flexibility.
*/

class Receiver {
  execute() {
    console.log("Reciever executes command.");
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.execute();
  }
}

class Invoker {
  setCommand(command) {
    this.command = command;
  }

  executeCommand() {
    this.command.execute();
  }
}

const receiver = new Receiver();
const command = new Command(receiver);

const invoker = new Invoker();

invoker.setCommand(command);
invoker.executeCommand();
