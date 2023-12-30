/* Module Pattern
The Module Pattern encapsulates related methods and properties into a single module, providing a clean way to organize and protect the code. 
It allows for private and public members, enabling information hiding and preventing global namespace pollution.
*/

const MyModule = (function () {
  //private
  let privateVariable = "I am private";

  function privateMethod() {
    console.log("This is a private method");
  }

  //public
  return {
    publicVarialbe: "I am public",

    publicMethod() {
      console.log(
        "This is a public method, I'll call the private variable and method, get access to results"
      );
      console.log(privateVariable);
      privateMethod();
    },
  };
})();

console.log(MyModule.publicVarialbe);
MyModule.publicMethod();

/* In this example, the code uses an immediately invoked function expression (IIFE) to encapsulate private and public members. 
The module has private variables and methods, as well as public variables and methods. 
When accessed, the public members provide the expected output. 
This pattern allows for controlled access to encapsulated private members while exposing selected public members.  */
