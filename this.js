"use strict";
console.log("this | START");
function demo() {
  const a = 10;
  console.log(this);
}
demo();
window.demo();

let anObject = {
  key1: "sample",
  key2: function () {
    console.log(this);
    console.log(this.key1);
  },
};

anObject.key2();

// arrow function

function sum1(a, b) {
  console.log("normal function this", this); // global object -- undefined
  return a + b;
}

const sum2 = (a, b) => {
  console.log("arrow function this", this); // global object - window
  return a + b;
};

/**  arrow function get value of this from 'enclosing lexical environment'
 * meaning this value of outer environment (parent) */

console.log(sum1(2, 4), sum2(3, 7));

function normalParent() {
  const demo = () => {
    console.log("arrow fn nested in regular fn -- this", this);
  };
  demo(); // undefined
}

normalParent();

const arrowParent = () => {
  const demo = () => {
    console.log("arrow fn nested in arrow fn -- this", this);
  };
  demo(); // global object - window
};

arrowParent();
console.log("this | END");
