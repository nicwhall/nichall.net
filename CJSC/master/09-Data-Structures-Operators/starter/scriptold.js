'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = ' ',
    address = '',
    starterIndex = 1,
    mainIndex = 0,
  }) {
    console.log(
      `-------passing Object to function that destructures--------------\n`
    );

    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  //arguments combined into array with rest syntax
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Smith St',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderPizza('sausage', 'olives', 'peppers', 'mushrooms');

const arr = [2, 3, 4];
//destructure
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//destructure first two elements
let [first, second] = restaurant.categories;
console.log(first, second);

//space to skip element
// const [first, , third] = restaurant.categories;
// console.log(first, third);

//reassign value of variables
[first, second] = [second, first];
console.log(first, second);

//destructure a returned array
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//destructure nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default variables
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Assignments
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(ratingStars);

// const ingredients = [
//   prompt("Let's make pasta. Ingredient 1?"),
//   prompt("Let's make pasta. Ingredient 2?"),
//   prompt("Let's make pasta. Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta([...ingredients]);

// Object destructuring
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
};

// Destructuring
let { firstName, lastName } = person;
console.log(firstName, lastName);

//restaurant object
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

//rename variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, hours);

const { mainMenu = [], starterMenu = [] } = restaurant;
console.log('i am here', mainMenu, starterMenu);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//Spread arrays
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1);
arr1 = [...arr1, ...arr2];
console.log(arr1);
console.log(...arr1);

console.log(restaurant.mainMenu);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

console.log('================create new array from 2 existing arrays');
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

for (const item of menu1) console.log(item);

console.log('================create array from string');
const str1 = 'Happy';
const letters = [...str1];
console.log(letters);

//Spread objects
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red',
};

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow',
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//rest parameters destructuring
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [item1, , item3, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(item1, item3, otherFood);

//objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//function parameters arbitrary number of arguements
//combines arguments to array with rest syntax
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(3, 6, 7, 8, 9);

const xx = [23, 5, 7];
//spread to elements
add(...xx);

//Short circuiting OR
console.log(3 || 'bill');
console.log(null || 'bill');
console.log(undefined || null);
console.log(undefined || null || true);

const guests1 = restaurant.numGuests || 2;
console.log(guests1);

//Short circuiting &&
console.log(3 && 'bill');
console.log(null && 'bill');
console.log(undefined && null);
console.log(true && true && false);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms');
}

//true so orderPizza called
restaurant.orderPizza && restaurant.orderPizza();

restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 2;
console.log(guests1);

//only if null or undefined will be falsy
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//same as above - Logical OR assignment
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

//anonymize owner
// rest1.owner = rest1.owner && '<anonymous>';
// console.log(rest1.owner);
// rest2.owner = rest2.owner && '<anonymous>';
// console.log(rest2.owner);
rest1.owner &&= '<anonymous>';
console.log(rest1.owner);
rest2.owner &&= '<anonymous>';
console.log(rest2.owner);

//challenge 1
const players1 = ['goalKeeper1', 'fieldplayer1'];
const players2 = ['goalKeeper2'];
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
