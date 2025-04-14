"use strict";
/** printed console outputs are in strict mode */

console.log("global this value", this); // global object - window

/**
 * In non-strict mode : substitution happens, if value of this keyword is
 * undefined or null, this keyword will be repplaced with the global object
 */

function demo() {
  const a = 10;
  console.log(this);
}
demo(); //undefined
window.demo(); // window (context is set for the function)

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
 * meaning this value of outer environment (parent)
 */

console.log(sum1(2, 4), sum2(3, 7));

function normalParent() {
  const demo = () => {
    console.log("arrow fn nested in regular fn, this value = ", this);
  };
  demo(); // undefined
}

normalParent();

const arrowParent = () => {
  const demo = () => {
    console.log("arrow fn nested in arrow fn, this value = ", this);
  };
  demo(); // global object - window
};

arrowParent();

function normalParent2() {
  console.log("parent2 this value = ", this);
  function normalChild() {
    console.log("normal fn nested in normal function, this value =", this);
  }
  normalChild(); // undefined
}

normalParent2(); // undefined

/**
 * In strict mode : Normal function value of this is undefined
 * In non-strict mode : Normal funtion value of this is global object - window
 * In strict and non strict mode : arrow function value of this is always
 * global object - window (due to enclosing lexical environment)
 */

//window.normalParent2();
/** global object - window ( because context set)
 * but the inner child normalChild will be undefined even though parent has
 * window context
 * normal child functions DO NOT inherit enclosing parent this value
 */

class Code {
  constructor() {
    console.log("class code contructor this value = ", this);
  }
}

const obj = new Code(); // Code {} object

/** Question : 1 */
function getThis() {
  console.log("getThis = ", this);
}

const apple = {
  getThis,
};

getThis(); // undefined
apple.getThis(); // apple object

/** Question : 2 */
const getThis2 = () => {
  console.log("getThis2 = ", this);
};

const apple2 = {
  getThis2,
};

getThis2(); // window object
apple2.getThis2(); // window object
