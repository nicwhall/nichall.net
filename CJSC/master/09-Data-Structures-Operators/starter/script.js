'use strict';
const italianFoods = new Set([
  'pasta',
  'gnocci',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avacado',
  'garlic',
]);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //deconstructing passed object with defaults
  orderDelivery({ time = ' ', address = '', starterIndex = 1, mainIndex = 0 }) {
    console.log(
      '================ orderDelivery function deconstructs passed object'
    );
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      '================ orderPasta function deconstructs ingredients'
    );
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  //
  orderPizza(mainIng, ...otherIng) {
    console.log(
      '================ arguments combined into array with rest (...) syntax'
    );
    console.log(mainIng);
    console.log(otherIng);
  },
};

//passing Object to function that destructures
restaurant.orderDelivery({
  time: '22:30',
  address: 'Smith St',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderPizza('sausage', 'olives', 'peppers', 'mushrooms');

const arr = [2, 3, 4];
//
console.log('================ destructure array into variables');
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//destructure first two elements
console.log('================ destructure first two elements of an array');
let [first, second] = restaurant.categories;
console.log(first, second);

//space to skip element
console.log('================ destructure skip element elements of an array');
const [first1, , third] = restaurant.categories;
console.log(first1, third);

//reassign value of variables
console.log('================ reassign value of variables');
[first, second] = [second, first];
console.log(first, second);

//destructure a returned array
console.log('================ destructure a returned array');
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//destructure nested array
console.log('================ destructure a nested array into variables');
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default variables
const [p = 1, q = 1, r = 1] = [8, 9];
console.log('================ assign default values for non matched elements');
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

console.log(
  '================ destructure array of book objects into object variables'
);
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

console.log('================ destructure array of rating arrays');
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

console.log(
  '================ destructure array into variables with default values for non matched'
);
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(ratingStars, fiveStarRatings, oneStarRatings, threeStarRatings);

// const ingredients = [
//   prompt("Let's make pasta. Ingredient 1?"),
//   prompt("Let's make pasta. Ingredient 2?"),
//   prompt("Let's make pasta. Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta([...ingredients]);

// Object destructuring
console.log('================');
console.log('================ OBJECT destructuring');
console.log('================');
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
};
console.log(person);

// Destructuring
console.log('================ destructure object elements into variables');
let { firstName, lastName } = person;
console.log(firstName, lastName);

//restaurant object
const { name, categories, openingHours1 } = restaurant;
console.log(name, categories, openingHours1);

//rename variables
console.log(
  '================ destructure object elements into variables and change variable names'
);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, hours);

console.log(
  '================ destructure object arrays into new array variables'
);
const { mainMenu = [], starterMenu = [] } = restaurant;
console.log(mainMenu, starterMenu);

//mutating variables
console.log('================ mutating variables');
let a = 111;
let b = 999;
console.log(`a=${a}, b=${b}`);
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(`a=${a}, b=${b}`);

//nested objects
console.log('================ destructure nested objects');
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

console.log('================ ');
console.log('================ SPREAD ARRAYS ...');
console.log('================ ');
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersOne, numbersTwo);
console.log(numbersCombined);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1, arr2);
arr1 = [...arr1, ...arr2];
console.log(arr1);
console.log(...arr1);

console.log('================ spread array and add element');
console.log(restaurant.mainMenu);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

console.log('================ create array from 2 existing arrays');
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

console.log('================ create array elements from string');
const str1 = 'Happy';
const letters = [...str1];
console.log(letters);

console.log('================ ');
console.log('================ SPREAD OBJECTS ...');
console.log('================ ');
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

console.log('================ create object from 2 existing objects');
console.log(myVehicle);
console.log(updateMyVehicle);
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);

console.log('================ spread object and add elements');
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//
console.log('================ ');
console.log('================ REST array destructuring');
console.log('================ ');

const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [item1, , item3, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(item1, item3, otherFood);

//objects
console.log('================ ');
console.log('================ REST object destructuring.');
console.log('================ ');
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

console.log('================function  with arbitrary number of arguments');
console.log(
  '================combine function arguments to array with rest syntax'
);
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

console.log('================ ');
console.log('================ Short circuiting OR (||)');
console.log('================ ');
//
console.log(3 || 'bill');
console.log(null || 'bill');
console.log(undefined || null);
console.log(undefined || null || true);

const guests1 = restaurant.numGuests || 2;
console.log(guests1);

console.log('================ ');
console.log('================ Short circuiting &&');
console.log('================ ');
console.log(3 && 'bill');
console.log(null && 'bill');
console.log(undefined && null);
console.log(true && true && false);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms');
}

console.log('================true so orderPizza called');
console.log(
  "if (restaurant.orderPizza) \n{ restaurant.orderPizza('mushrooms');\n }\nrestaurant.orderPizza && restaurant.orderPizza();"
);
restaurant.orderPizza && restaurant.orderPizza();

console.log('================');
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 2;
console.log(guest2);

console.log('================ NULLISH coalescing operator ??');
console.log(
  '================only if null or undefined will be falsy, zero is truthy\n  restaurant.numGuests = 0;\n const guestCorrect = restaurant.numGuests ?? 10;\n console.log(guestCorrect);\n'
);
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('================rest1. rest2 objects');
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};
console.log(rest1);
console.log(rest2);
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
//same as above - Logical OR assignment
console.log(
  '================\nrest1.numGuests ??= 10;\nrest2.numGuests ??= 10;'
);
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

console.log('================anonymize owner');
// rest1.owner = rest1.owner && '<anonymous>';
// console.log(rest1.owner);
// rest2.owner = rest2.owner && '<anonymous>';
// console.log(rest2.owner);
rest1.owner &&= '<anonymous>';
console.log(rest1.owner);
rest2.owner &&= '<anonymous>';
console.log(rest2.owner);

console.log('================ ');
console.log('================ Looping Arrays (For(x of y)');
console.log('================ ');

console.log('================ Iterate over an array');
for (const item of menu1) console.log(item);
console.log(
  '================ Iterate over an array and get index, value for each item'
);
for (const [i, el] of menu1.entries()) {
  // console.log(item);
  //each item is an array containing each index and value e.g. [ 0, "Focaccia" ]
  console.log(`${i + 1}: ${el}`);
}

console.log('================');
console.log('================ OPTIONAL CHAINING');
console.log('================');
console.log('error received if object property does not exist');
// console.log(restaurant.openingHours.mon.open);

console.log(
  '================ optional chaining ("?.") \n ================ console.log(restaurant.openingHours.mon?.open); \n ================ only executes if everything before the optional operator exists (not exists =  null or undefined)'
);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(
    `On ${day.charAt(0).toUpperCase() + day.slice(1)} we open at ${open}`
  );
}

console.log('================Check for a method before calling');
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

console.log('================Check for a array element');
const users = [{ name: 'Nic', email: 'nic@home.com' }];
console.log(users[1]?.name ?? 'User array empty');

console.log('================');
console.log('================ LOOPING OBJECTS');
console.log('================');

console.log('================ loop property names (keys)');
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

console.log('================ loop property values');
const values = Object.values(openingHours);
console.log(values);

console.log('================ loop entire object');
const entries = Object.entries(openingHours);
// console.log(entries);
//detructure entries array
for (const [day, { open, close }] of entries) {
  console.log(
    `On ${
      day.charAt(0).toUpperCase() + day.slice(1)
    } we open at ${open} and close at ${close}`
  );
}

console.log('================');
console.log('================CHALLENGE 1');
console.log('================');
console.log('================array of players. index 1 is always goalkeeper');
console.log('================');
const game = {
  team1: 'team 1',
  team2: 'team 2',
  players1: [
    'goalKeeper1',
    'fieldplayer11',
    'fieldplayer12',
    'fieldplayer13',
    'fieldplayer14',
    'fieldplayer15',
    'fieldplayer16',
    'fieldplayer17',
    'fieldplayer18',
    'fieldplayer19',
    'fieldplayer110',
    'fieldplayer111',
  ],
  players2: [
    'goalKeeper2',
    'fieldplayer21',
    'fieldplayer22',
    'fieldplayer23',
    'fieldplayer24',
    'fieldplayer25',
    'fieldplayer26',
    'fieldplayer27',
    'fieldplayer28',
    'fieldplayer29',
    'fieldplayer210',
    'fieldplayer211',
  ],
  score: '4:0',
  scored: ['player11', 'player23'],
  date: 'Nov 9th, 2021',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
console.log(game.players1, game.players2);
//2.
const [gk, ...fieldPlayers] = game.players1;
console.log(gk, fieldPlayers);
//3
//combine arrays
const allPlayers = [...game.players1, ...game.players2];
console.log('All Players', allPlayers);
//4
const players1Final = [...game.players1, 'Thiago', 'Couthino', 'Perisic'];
console.log(players1Final);
//5
console.log('================ destructure object elements into variables');
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
//6
const printGoals = function (...players) {
  console.log(players);
  console.log(players.length);
};
//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

console.log('================');
console.log('================Challenge 2');
console.log('================');
//1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);
//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
//4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

console.log('================');
console.log('================SETS');
console.log('================');
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
ordersSet.forEach(el => {
  console.log(el);
});

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

ordersSet.clear();
console.log(ordersSet);

console.log('================sets example');
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);
const staffUnique = new Set(staff);
console.log(staffUnique);
const staffUnique1 = [...new Set(staff)];
console.log(staffUnique1);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log([...'happy']);
console.log(new Set('Happy'));
console.log(new Set('Happy').size);

console.log('Italian Foods', italianFoods);
console.log('Mexican Foods', mexicanFoods);
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Common Foods', commonFoods);
console.log('Common Foods', [...commonFoods]);

const italianMexican = italianFoods.union(mexicanFoods);
console.log('Union', italianMexican);
//same as above
console.log(new Set([...italianFoods, ...mexicanFoods]));

const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log('Different Mexican', uniqueMexican);
const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log('Different  Italian', uniqueItalian);

const allUnique = mexicanFoods.symmetricDifference(italianFoods);
console.log('All Unique', allUnique);

const isDisjoint = italianFoods.isDisjointFrom(mexicanFoods);
console.log(isDisjoint);
