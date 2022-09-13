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
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passportNum === 12435332542) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, ahmed);

console.log(flight);
console.log(ahmed);
