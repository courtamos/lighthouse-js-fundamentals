const sayHello = function (name) {
  console.log('Hello, ' + name);
};

sayHello('Caliban');
sayHello('Miranda');
sayHello('Ferdinand');

// console log
const sayHelloToConsole = function (name) {
  console.log('Hello, ' + name);
};
sayHelloToConsole('John');

// return
const returnSayHello = function (name) {
  return 'Hello, ' + name;
};
const greeting = returnSayHello('John');
// can console log later for output
console.log(greeting);
