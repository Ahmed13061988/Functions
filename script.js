'use strict';

const bookings = [];

const createBook = function (
  flightNum,
  numPassenger = 1,
  price = 100 * numPassenger
) {
  //ES5
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

// console.log(createBook('H123'));
// console.log(createBook('LH123', 2, 300));
// console.log(createBook('LH234', 4));

const flight = 'LH234';

const ahmed = {
  name: 'Ahmed Hussein',
  passportNum: 12435332542,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // this will not work, it will be the data that we passed not this data
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passportNum === 12435332542) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};

//checkIn(flight, ahmed);

// console.log(flight);
// console.log(ahmed);

// const newPassport = function (person) {
//   person.passportNum = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(ahmed);
// checkIn(flight, ahmed);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed String ${fn(str)}`);
  console.log(`${fn.name}`);
  // Higher-order function
};

//transformer('AHmed', oneWord);

//transformer('i love JavaScript', upperFirstWord); //upperFirstWord and oneWord are callBack functions

const high5 = function () {
  console.log('👋');
};
//document.body.addEventListener('click', high5);

const multiply = function (number) {
  const [num1, ...numbers] = number;
  return [num1], [numbers];
};

const solve = function (num, fun) {
  console.log(`${fun(num)}`);
};

solve([1, 2, 3, 4], multiply);

//Function returning a function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

// const greeterHey = greet('Hey');

// greeterHey('Ahmed');
// greeterHey('Ali');

// greet('Hello')('Ahmed');

// const greetArrow = greeting => name => console.log(`${greeting}, ${name}`);

// greetArrow('Hi')('Abbas');

// const long = x1 => x2 => x3 => x4 => x5 => x6 => x7 => x8 => x9 => x10 =>
//   console.log(`${x1} ${x2} ${x3} ${x4} ${x5} ${x6} ${x7} ${x8} ${x9} ${x10}`);

// long('Why')('am')('I')('doing')('this')('with')('my')('precious')('time')('?');
const lufthanza = {
  airline: 'Lufthanza',
  iataCode: 'LH',
  bookings: [],
  book(fligthNum, name) {
    console.log(
      `${name}, booked a seat on ${this.airline} flight ${this.iataCode}${fligthNum}`
    );
    this.bookings.push({ fligth: `${this.iataCode}${fligthNum}`, name });
  },
};

lufthanza.book(100, 'Ahmed');
lufthanza.book(365, 'John Smith');
console.log(lufthanza);

const book = lufthanza.book;
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

console.log(eurowings);

// book(234, "john smith") ==> this will throw an error because this keyword will be undefined

// book.call(eurowings, 234, 'Ahmed Alubaidi');

// console.log(eurowings);

// const iraq = {
//   airline: 'Iraqi Air Lines',
//   iataCode: 'IQ',
//   bookings: [],
// };

// book.call(iraq, 256, 'Abbas Abd Djamil');

// const info = [244, 'Atyaf Almahdi'];
// book.apply(iraq, [234, 'Ammar Alsa3ede']);
// book.call(iraq, ...info);
// console.log(iraq);

// const bookEu = book.bind(eurowings); //Bind always returns a new function
// const bookIq = book.bind(iraq);
// const bookLh = book.bind(lufthanza);
// const bookEu23 = book.bind(eurowings, 23); // specify the flight number by passing it to the arguements.
// bookEu23('Mawlood');
// bookEu23('Adil');
// bookEu(213, 'Ahmed'); // this function will be used only on eurowing object

// lufthanza.planes = 300;
// lufthanza.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
//   console.log(this);
// };

// const btn = document.querySelector('.buy');
// btn.addEventListener('click', lufthanza.buyPlane.bind(lufthanza));

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT1 = addTaxRate(0.23);
// console.log(addVAT1(100));

console.log('-------------------------------');

// const runOnce = function () {
//   console.log('This will never run again');
// };

// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('arrow function that will called once'))();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();

//a closure gives a function access to all variables of it's parent function, even after the parent function returned has returned. The function keeps reference to it's outer scope, which preserves the scope chain throughtout time.

//A closure makes sure that a function doesn't loose connection to the variables that existed at the function's birthplace.
console.dir(booker);

//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// The f() here is a different function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
