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

transformer('AHmed', oneWord);

transformer('i love JavaScript', upperFirstWord); //upperFirstWord and oneWord are callBack functions

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
