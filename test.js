let result;

result = "5" + 3; // '53' (string)
result = "5" - 3; // 2 (number)
result = "5" * "3"; // 15 (number)
result = "10" / "2"; // 5 (number)
result = true + 1; // 2 (number)
result = false + 1; // 1 (number)
result = "hello" * 3; // NaN (Not a Number)
console.log(typeof "Hello"); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof { name: "John" }); // 'object'
console.log(typeof [1, 2, 3]); // 'object' (arrays are considered objects)
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object' (this is a known quirk in JavaScript)

console.log(5 == "5"); // true (loose equality allows type coercion)
console.log(5 === "5"); // false (strict equality requires both value and data type to match)

console.log(null == undefined); // true (type coercion)
console.log(null === undefined); // false (strict equality)

let fruit = "Apple";

switch (fruit) {
  case "Banana":
    console.log("Bananas are yellow.");
    break;
  case "Apple":
    console.log("Apples are red.");
    break;
  default:
    console.log("I don't know that fruit.");
}

let i = 0;
do {
  console.log(i); // This will log numbers 0 through 4.
  i++;
} while (i < 5);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 36,
  hobbies: ["Downhill", "Skateboarding", "hiking"],
  address: {
    street: "Dietmar-Hopp-Alle",
    city: "Walldorf",
    country: "Germany",
  },
};
console.log(person.firstName); // Outputs: "John"
console.log(person["lastName"]); // Outputs: "Doe"
console.log(person.address.city); // Outputs: "Walldorf"

let greet = function sayHello() {
  console.log("Hello, world!");
};

let greet1 = (name) => {
  console.log("Hello, " + name);
};

(function () {
  let message = "Hello, world!";
  console.log(message); // Output: "Hello, world!"
})();

console.log(message); // Output: Error: message is not defined

let person1 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

let person2 = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

if (true) {
  let blockVar = "I am inside a block!";
  console.log(blockVar); // Outputs: "I am inside a block!"
}

console.log(blockVar); // Error: blockVar is not defined

function myFunction() {
  var functionScopedVariable = "I am inside the function";
  console.log(functionScopedVariable); // Outputs: "I am inside the function"
}

myFunction();
console.log(functionScopedVariable); // Error: functionScopedVariable is not defined

const button = document.getElementById("myButton");
button.onclick = function () {
  alert("Button clicked!");
};

const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button clicked!");
});

function handleClick() {
  alert("Button clicked!");
  button.removeEventListener("click", handleClick);
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);

const parentElement = document.getElementById("parent");

parentElement.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert("Button clicked!");
  }
});

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal, // sets rabbit's prototype to be the animal object
};

console.log(rabbit.eats); // true

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayFullName = function () {
  return this.firstName + " " + this.lastName;
};

let person11 = new Person("John", "Doe");
console.log(person1.sayFullName()); // "John Doe"

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " eats.");
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = Object.create(Animal.prototype); // Rabbit now inherits from Animal
Rabbit.prototype.jump = function () {
  console.log(this.name + " jumps.");
};

let rabbit1 = new Rabbit("Bunny");
rabbit1.eat(); // "Bunny eats."
rabbit1.jump(); // "Bunny jumps."

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let rectangle = new Rectangle(10, 5);
console.log(rectangle.height); // 10
console.log(rectangle.width); // 5

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

let rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.area()); // 50

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }

  set height(value) {
    if (value <= 0) {
      console.log("Height must be a positive number.");
    } else {
      this.height = value;
    }
  }
}

let rectangle2 = new Rectangle(10, 5);
console.log(rectangle2.area); // 50

rectangle2.height = -10; // "Height must be a positive number."

class Shape {
  constructor(name) {
    this.name = name;
  }

  display() {
    return `This is a ${this.name}.`;
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super("Rectangle");
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

let rectangle3 = new Rectangle(10, 5);
console.log(rectangle3.display()); // "This is a Rectangle."
console.log(rectangle3.area()); // 50

console.log("Start");

setTimeout(function () {
  console.log("Inside setTimeout");
}, 3000);

console.log("End");

function fetchData(callback) {
  setTimeout(function () {
    console.log("Data fetched");
    callback();
  }, 2000);
}

fetchData(function () {
  console.log("Callback function executed");
});

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Data fetched!");
  }, 2000);
});

promise.then(function (data) {
  console.log(data); // 'Data fetched!' after 2 seconds
});

async function fetchAndLogData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}

fetchAndLogData();

sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("sap.training.sample.ControllerName", {
      onInit: function () {
        var oModel = new JSONModel({
          name: "John Doe",
          age: 30,
        });

        this.getView().setModel(oModel);
      },
    });
  }
);

sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sap.training.sample.ControllerName", {
    onInit: function () {
      // Initialization logic here
    },

    onButtonPress: function () {
      // Button press handling logic here
    },
  });
});
