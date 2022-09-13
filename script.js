'use strict';

const bookings = [];

const createBook = function (flightNum, numPassenger = 1, price = 199) {
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

console.log(createBook('H123'));
console.log(createBook('LH123', 2, 300));
