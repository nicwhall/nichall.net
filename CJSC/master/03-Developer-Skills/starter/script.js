'use strict';

//note A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. For example, take 153 (3 digits), which is narcissistic  (base 10):
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// function narcissistic(value) {
//   const strValue = value.toString();
//   const strLength = value.toString().length;
//   let calc = 0;

//   for (let i = 0; i < strValue.length; i++) {
//     calc += Number(strValue[i]) ** strLength;
//   }
//   return calc === value;
// }

//array.reduce(function(total, currentValue), initialValue)
//reduce method returns a single value: the function's accumulated result
//split value into array use reduce to sum array and compare to original value
function narcissistic(value) {
  // console.log(
  //   ('' + value).split('').reduce(function (p, c) {
  //     console.log(p + Math.pow(c, ('' + value).length));
  //     return p + Math.pow(c, ('' + value).length);
  //   }, 0)
  // );
  return (
    ('' + value).split('').reduce(function (p, c) {
      return p + Math.pow(c, ('' + value).length);
    }, 0) == value
  );
}

//console.log(narcissistic(153));

//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//   16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// function digitalRoot(n) {
//   let digit = n;
//   while (digit.toString().length !== 1) {
//     digit = num(digit);
//     if (digit.toString().length === 1) break;
//   }
//   return digit;
// }

// const num = (n) => {
//   return ('' + n).split('').reduce(function (total, current) {
//     return total + Number(current);
//   }, 0);
// };

//942 - 1 = 941, 941 % 9 = 5, 5 + 1 = 6
//16 - 1 = 15, 15 % 9 = 6, 6 + 1 = 7
function digitalRoot(n) {
  console.log(941 % 9);
  return ((n - 1) % 9) + 1;
}

//console.log(digitalRoot(942));

//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//[-2, 1, -3, 4, -1, 2, 1, -5, 4]
// should be 6: [4, -1, 2, 1]

function maxSequence(arr) {
  // if (arr.length === 0 || arr.every((num) => num < 0)) {
  //   return 0;
  // }

  // if (arr.every((num) => num > 0)) {
  //   return arr.reduce((tot, curr) => tot + curr, 0);
  // }

  // let res = arr[0];
  // let maxEnding = arr[0];

  // for (let i = 1; i < arr.length; i++) {
  //   // Find the maximum sum ending at index i by either extending
  //   // the maximum sum subarray ending at index i - 1 or by
  //   // starting a new subarray from index i
  //   maxEnding = Math.max(maxEnding + arr[i], arr[i]);

  //   // Update res if maximum subarray sum ending at index i > res
  //   res = Math.max(res, maxEnding);
  // }
  // return res;

  let min = 0,
    ans = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

// console.log(maxSequence([-19, -38, 38]));

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temps1 = [3, -2, -6, -1, 'error', 9, 13, 17, 25, 14, 9, 5];

// 1) Understanding the problem
//What is temperature amplitude? Difference between highest and lowest temperature in the array.
//How to compute max and min temps?
// What is a sensor error and what to do?

// 2) Breaking up into sub-problems
// How to ignore sensor errors
// find max value in array
// find min value in array
// subtract min from max and return result (amplitude)

const calcTempAmplitude = function (temps, temps1) {
  //merge arrays
  temps = [...temps, ...temps1];

  //remove elements that are not numbers ('error')
  for (let i = 0; i < temps.length; ++i) {
    if (typeof temps[i] != 'number') temps.splice(i, 1);
  }

  //return amplitude use spread operator '...' to get max and min
  return Math.max(...temps) - Math.min(...temps);
};

const amplitude = calcTempAmplitude(temps, temps1);
console.log(amplitude);

// PROBLEM 2: see solution above
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// debugger;
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees Celsius:')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

console.log(`                                  ---CHALLENGE 1---`);
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let strForecast = '';
  for (let i = 0; i < arr.length; i++) {
    strForecast += `... ${arr[i].toString()}C in ${(i + 1).toString()} days `;
  }
  console.log(strForecast + ' ...');
};
printForecast(data1);
