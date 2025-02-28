let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Nic");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);

let country = "USA";
let continent = "North America";
let population = 300000000;

console.log(country);
console.log(continent);
console.log(population);

/* Challenge 1 calculate and compare BMI's */
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// bmi formula: BMI = mass  (height * height)/;
console.log("       Challenge 1");
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
//boolean mark bmi higher
let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

/* Challenge 2 improve challenge 1 */
console.log("        Challenge 2");
let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;

// bmi formula: BMI = mass  (height * height)/;
let BMIMark1 = massMark1 / (heightMark1 * heightMark1);
let BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
//boolean mark bmi higher
let markHigherBMI1 = BMIMark1 > BMIJohn1;

if (markHigherBMI1) {
  console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})! `);
} else {
  console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})!`);
}

//Challenge 3//
console.log("       Challenge 3");
// Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

let scoreDolphins = (88 + 91 + 160) / 3;
let scoreKoalas = (88 + 91 + 150) / 3;
if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else if (scoreKoalas > scoreDolphins) {
  console.log(`Koalas win the trophy`);
} else if (scoreKoalas === scoreDolphins) {
  console.log(`Both win the trophy`);
}

/* Challenge 4  */
console.log("        Challenge 4");
const day = "sunday";

switch (day) {
  case "monday":
    console.log(
      `${day.charAt(0).toUpperCase() + day.slice(1)} - Plan course structure`
    );
    console.log(`         Go to coding meetup`);
    break;
  case "tuesday":
    console.log(
      `${day.charAt(0).toUpperCase() + day.slice(1)} - Prepare theory videos`
    );
    break;
  case "wednesday":
  case "thursday":
    console.log(
      `${day.charAt(0).toUpperCase() + day.slice(1)} - Write code examples`
    );
    break;
  case "friday":
    console.log(
      `${day.charAt(0).toUpperCase() + day.slice(1)} - Record videos`
    );
    break;
  case "saturday":
  case "sunday":
    console.log(
      `${day.charAt(0).toUpperCase() + day.slice(1)} - Enjoy the weekend`
    );
    break;
  default:
    console.log("Not a valid day");
}

const bill = 400;
let tip = 0;
bill >= 50 && bill <= 300
  ? (tip = bill * (15 / 100))
  : (tip = bill * (20 / 100));
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
