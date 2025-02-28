'use strict';

//global scope

function calcAge(birthYear) {
  //function scope
  const age = 2024 - birthYear;

  //firstName from global scope
  console.log(firstName);

  function printAge() {
    //age and birthyear from parent function calcAge, firstName from global scope
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    //block scope; CONST str is only available in the if block
    if (birthYear >= 1981 && birthYear <= 1996) {
      //firstName defined in parent scope above is not used
      const firstName = 'Steven';
      const str = `${firstName} you are a millenial`;
      console.log(str);

      //function is block scoped in strict mode = not available outside if block
      function add(a, b) {
        return a + b;
      }

      //updating a parent variable
      output = 'New Output';
    }

    console.log(output);

    //not available outside if block
    // console.log(str);
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'Bob';
calcAge(1983);
//no access to child scope
// console.log(age);
// printAge();

//Hoisting variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Bob';
let job = 'developer';
const year = 1991;

//only addDecl can be called before declaration. function is hoisted. CONST is not hoisted
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(arrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const arrow = (a, b) => a + B;

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  //this = undefined
  console.log(this);
};
calcAge1(1991);

const calcAge2 = birthYear => {
  console.log(2037 - birthYear);
  //this = window
  console.log(this);
};
calcAge2(1991);

const thisObj = {
  year: 1991,
  calcAge: function () {
    //this = object calling method = owner
    console.log(this);

    const arrowF = () => {
      console.log(this);
    };
    arrowF();
  },
};

thisObj.calcAge();

//gets stack memory addrees
let lastName = 'Williams';
// gets same stack memory address
let oldLastName = lastName;
//gets new stack memory address
lastName = 'Davis';
console.log(lastName, oldLastName);

//variable bill gets stack memory address pointing to heap memory address
const bill = {
  firstName: 'Bill',
  lastName: 'Smith',
  age: 27,
};

//variable billNameChange gets same stack memory address as bill pointing to same heap memory address as bill variable
const billNameChange = bill;
//value  in heap memory is changed
billNameChange.lastName = 'Jones';
//value in heap memory is retrieved for both variables - Bill Jones
console.log('Before Name Change', bill);
console.log('After Name Change', billNameChange);

//cannot change value in stack
// bill = {};
// billNameChange = {};

//to copy obect and create new stack variable pointing to new heap memory address use Object.assign(new, existing) will copy first level (objects (array)  in the copied object will not be copied)
const bill2 = {
  firstName: 'Bill',
  lastName: 'Smith',
  age: 27,
  family: ['Alice', 'Bob'],
};

const billCopy = Object.assign({}, bill2);
billCopy.lastName = ' Jones';
console.log('Before Name Change', bill2);
console.log('After Name Change', billCopy);

billCopy.family.push('Mary');
billCopy.family.push('John');

console.log('Before Name Change', bill2);
console.log('After Name Change', billCopy);
