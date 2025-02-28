"use strict";

console.log(`\n---Using "strict" produces error message--- \n`);
undeclared();

function undeclared() {
  let hasDriversLicense = false;
  const passTest = true;

  //Undefined variable typo
  try {
    if (passTest) hasDriverLicense = true;
  } catch (ERR) {
    console.log(ERR);
  }
  if (hasDriversLicense) {
    console.log("I can drive");
  }
}

//Reserved word
// const interface = "Audio";

logger(`\n---This is a call to logger function---\n`);

function logger(message) {
  console.log(message);
}

//call function with args
console.log(`\n`);
logger(fruitProcessor(5, 0));
logger(fruitProcessor(2, 4));

//function with parms
function fruitProcessor(apples, oranges) {
  //   logger(`apples ${apples}, oranges ${oranges}`);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

//built in function
logger(
  `\n---This is a call to Number Built In Function--- -  ${Number("23")}\n`
);

logger(`\n---Function Declaration - declared as "function" calcAge1---\n`);
logger(`   ${calcAge1(1971)}`);
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

logger(`\n ---Function Expression - declared as variable calcAge2--- \n`);
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
logger(`   ${calcAge2(1971)}`);

logger(
  `\n---Arrow function - declared as variable calcAge3 with arrow function---\n`
);

console.log("\n");
const calcAge3 = (birthYear) => 2024 - birthYear;
logger(`   ${calcAge3(1971)}`);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1971, "Joe"));
console.log(yearsUntilRetirement(1980, "Bob"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function processor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(processor(2, 3));

const calcAgeA = function (birthYear) {
  return 2024 - birthYear;
};

const yearsTilRetirement = function (birthYear, firstName) {
  const age = calcAgeA(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsTilRetirement(1971, "Tom"));
console.log(yearsTilRetirement(1951, "Bill"));

console.log("\n");
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No team wins`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

console.log(`\n     ---Self Executing Function \n\n(function () {
  console.log('function');})()---`);
(function () {
  console.log(`function`);
})();

console.log(`\n           Arrays \n`);
console.log(`const friends = ["Michael", "Steven", "Peter"];`);
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(`\n`);
console.log(`const years = new Array(1991, 1984, 2008, 2020);`);
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(`\nconsole.log(friends[0]);`);
console.log(friends[0]);
console.log(`\nconsole.log(friends[2]);`);
console.log(friends[2]);

console.log(`\nconsole.log(friends.length);`);
console.log(friends.length);

console.log(`\nconsole.log(friends[friends.length - 1]);`);
console.log(friends[friends.length - 1]);

console.log(`\nfriends[2] = 'Jay';`);
friends[2] = "Jay";
console.log(friends);

const firstName = "Bob";
const Bob = [firstName, "Smith", 2024 - 1971, "developer", friends];
console.log(Bob);

console.log(`\nconsole.log(calcAge1(years[0]));`);
console.log(calcAge1(years[0]));
console.log(`\nconsole.log(calcAge1(years[1]));`);
console.log(calcAge1(years[1]));
console.log(`\ncalcAge1(years[years.length - 1])`);
console.log(calcAge1(years[years.length - 1]));

console.log(`\nconst ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
]`);
const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];
console.log(ages);

console.log(`\n          ARRAY METHODS`);

console.log(
  `\n---friends.push('Peter') - push method adds to end of array returns length of mutated array---`
);
let newLength = friends.push("Peter");
console.log(friends);
console.log(`New Length - ${newLength}`);

console.log(
  `\n---friends.unshift('John') - unshift method adds to beginning of array returns length of mutated array---`
);
newLength = friends.unshift("John");
console.log(friends);
console.log(`New Length - ${newLength}`);

console.log(
  `\n---friends.pop(); - pop method removes last element returns element value---`
);
let popped = friends.pop();
console.log(friends);
console.log(`Popped element - ${popped}`);

console.log(
  `\n---friends.shift(); - shift method removes first element returns element value---`
);
popped = friends.shift();
console.log(friends);
console.log(`Shifted element - ${popped}`);

console.log(
  `\n---friends.indexOf('Steven'); - indexOf method returns position in array---`
);
let index = friends.indexOf("Steven");
console.log(friends);
console.log(`Element index - ${index}`);

console.log(
  `\n---friends.indexOf('Mickey'); - indexOf method returns -1 if not in array---`
);
index = friends.indexOf("Mickey");
console.log(friends);
console.log(`Element index - ${index}`);

console.log(
  `\n---friends.include('Mickey'); - includes method returns true/false (strict equality)---`
);
index = friends.includes("Mickey");
console.log(friends);
console.log(`Includes - ${index}`);
console.log(
  `\n---friends.include('Steven'); - includes method returns true/false (strict equality)---`
);
index = friends.includes("Steven");
console.log(friends);
console.log(`Includes - ${index}`);

console.log(`\n          ---CHALLENGE 2`);

const calcTip = function (bill) {
  let tip = 0;
  bill >= 50 && bill <= 300
    ? (tip = bill * (15 / 100))
    : (tip = bill * (20 / 100));
  return tip;
};

const bills = [125, 555, 44];
console.log("Bills", bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("Tips", tips);
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log("Totals", totals);

console.log(`\n           Objects \n`);

console.log(`---Objects contain key/value pairs - keys = properties - object literal syntax\nconst bobObj = {
  firstName: "Bob",
  lastName: "Smith",
  age: 2024 - 1971,
  friends: friends,
};---`);

const bobObj = {
  firstName: " Bob",
  lastName: "Smith",
  birthYear: 1971,
  friends: friends,
  hasDriversLicense: false,
  job: "Developer",
  // calcAge: function () {
  //   console.log(`\n     "this"`);
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    //Bob is a xx year old xxx and he as a/no drivers license
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
  },
};

console.log(bobObj);

console.log(`\n     ---Objects - Dot vs Bracket notation---`);

console.log(
  `\n     ---Dot notation to retrieve elements \n console.log(bobObj.lastName)---`
);
console.log(bobObj.lastName);

console.log(
  `\n     ---Bracket notation to retrieve elements pass string \n console.log(bobObj['lastName'])---`
);
console.log(bobObj["lastName"]);

console.log(
  `\n     ---Bracket notation can use expressions \n console.log(bobObj["first" + nameKey])\n console.log(bobObj["last" + nameKey]))---`
);
const nameKey = "Name";
console.log(bobObj["first" + nameKey]);
console.log(bobObj["last" + nameKey]);

// const wantToKnow = prompt(
//   "What do you want to know about Bob? Choose between lastName, age, friends."
// );

// if (bobObj[wantToKnow]) {
//   console.log(bobObj[wantToKnow]);
// } else {
//   console.log(`That is not an available property`);
// }

console.log(`\n---Add properties to an object - Bob.location = "Texas";---`);
Bob.location = "Texas";
console.log(Bob); //

console.log(
  `${bobObj.firstName} has ${bobObj.friends.length} friends, and his best friend is ${bobObj.friends[0]}`
);

console.log(
  `\n     ---Object Methods - function assigned to object property - calcAge & getSummary---`
);
console.log(bobObj.calcAge());
console.log(bobObj.age);

//Bob is a xx year old xxx and he as a/no drivers license
console.log(bobObj.getSummary());

console.log(`\n     ---Challenge 3`);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
console.log(
  `${mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName}'s BMI (${
    mark.bmi > john.bmi ? mark.bmi : john.bmi
  }) is higher than ${mark.bmi > john.bmi ? john.fullName : mark.fullName}'s (${
    mark.bmi > john.bmi ? john.bmi : mark.bmi
  })!`
);

//Replace HTML div span text with button
console.log(`\n     ---Replace HTML div text with button---`);
let parent = document.querySelectorAll(".parent");
console.log(parent);
addButton(parent[0]);

function addButton(child) {
  let element = null;
  let style = null;
  element = document.createElement("button");
  style = element.style;
  style.position = "absolute";
  style.visibility = "visible";
  style.display = "inline";
  element.innerHTML = "HTML text changed to button";
  child.innerHTML = "";
  child.appendChild(element);

  //add click event
  element.addEventListener("click", (e) => {
    alert(element.innerText);
  });
}

console.log(`\n     For Loop`);
console.log(
  `\n ---three parts to for loop \n for(1.initial loop counter value; 2.loop keeps running while this condition is true; 3.update counter )\n for(let rep = 1; rep <= 10; rep++){code to execute for each repetition}---`
);
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Repetition ${rep}`);
}

const bobArray = [
  "Bob",
  "Smith",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

console.log(`\n ---for loop to process each element of an array---`);
const types = [];
for (let i = 0; i < bobArray.length; i++) {
  console.log(`${bobArray[i]}`);

  //create array of types
  types.push(typeof bobArray[i]);
}

console.log(types);

const ages1 = [];

for (let i = 0; i < years.length; i++) {
  ages1.push(2024 - years[i]);
}
console.log(ages);

console.log(`\n ---for loop continue and break---`);
console.log(`\n ---continue if not string--`);
for (let i = 0; i < bobArray.length; i++) {
  if (typeof bobArray[i] !== "string") continue;
  console.log(`${bobArray[i]}`);
}
console.log(`\n ---break when number found---`);
for (let i = 0; i < bobArray.length; i++) {
  if (typeof bobArray[i] === "number") break;
  console.log(`${bobArray[i]}`);
}
console.log(`\n ---loop backwards---`);
for (let i = bobArray.length - 1; i >= 0; i--) {
  console.log(`${i}, ${bobArray[i]}`);
}
console.log(`\n ---inner loop---`);

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting Exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Repetition ${rep} `);
  }
}

console.log(`\n ---while loop---`);
console.log(
  `\n ---one part to while loop \n while(1.loop keeps running while this condition is true)\n let rep = 1; \nwhile(rep <= 10){code to execute for each repetition;\nrep++;}---`
);
let rep = 1;
while (rep <= 10) {
  console.log(`Repetition ${rep} `);
  rep++;
}

console.log(`\n --- loop while dice not 6---`);
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is ending`);
}

console.log(`\n          ---CHALLENGE 4`);
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
  let tip = calcTip(bills1[i]);
  tips1.push(tip);
  totals1.push(tip + bills1[i]);
  console.log(`${bills1[i]}, ${tips1[i]}, ${totals1[i]}`);
}

const calcAverage1 = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};
console.log(`\n          ---CHALLENGE 4 bonus`);
console.log(`Average = ${calcAverage1(totals1)}`);
