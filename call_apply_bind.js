console.log(
  "%c START | Call Apply Bind ",
  "color: black; font-style: italic; background-color: pink;padding: 2px; min-width: 300px"
);
const a = ["mango", "apple"];
console.log(a, `${a}`); //['mango', 'apple'] 'mango,apple'

const person = {
  fname: "Swati",
  lname: "G",
};

console.log(`${person}`); //[object Object]

//template literals concate array items

const person1 = {
  firstName: "Swati",
  lastName: "Gautam",
  printFullName: function (greeting, country) {
    console.log(
      `${greeting}, this is ${this.firstName} ${this.lastName} from ${country}`
    );
  },
};

person1.printFullName("hello", "India"); //hello, this is Swati Gautam from India

person2 = {
  firstName: "Chris",
  lastName: "Beny",
};

//call apply: substitutes specified object for the this value of called method

//call: passes arguments as comma separated variables, eg. (...ArgArray) this spreads array into separate variables

//apply: passes agruments as array

person1.printFullName.call(person2, ["Ni Hao", "Zhongguo"]); //Ni Hao,Zhongguo, this is Chris Ben from undefined

person1.printFullName.call(person2, ...["Ni Hao", "Zhongguo"]); //Ni Hao, this is Chris Ben from Zhongguo

person1.printFullName.apply(person2, ["Hai", "China"]); //Hai, this is Chris Ben from China

//bind: bind retutns a new function, with specified object for this
//debugger;
const result = person1.printFullName.bind(person2, ...["hello", "UK"]);

console.log(result.name); //hello, this is Chris Ben from UK undefined

console.log(
  "%c END | Call Apply Bind ",
  "color: black; font-style: italic; background-color: pink;padding: 2px"
);
