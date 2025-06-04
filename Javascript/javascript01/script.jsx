'use strict';

/* let hasDriverslicense = false;
let passTest = true;
if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log("I can drive :D");

function logger() {
  console.log("My name is ADILSON");
}
logger();
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const juice = fruitProcessor(5, 1);
console.log(juice);

console.log(calcAge1);

//Function declaration you can before defined it
function calcAge1(birthYeah) {
  return 2030 - birthYeah;
}

//Function expression
const calcAge2 = function (birthYeah) {
  return 2030 - birthYeah;
};

//Arrow function
const calcAge3 = (birthYeah) => 2030 - birthYeah;

//Arrow function with many declaration
const yearsUntilRetirement = (birthYeah) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return retirement;
};
console.log(calcAge3(1981));


const cutPieces = function (fruit) {
  return fruit * 4;
};
function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} apples pieces and ${orangesPieces} oranges pieces`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYeah) {
  return 2040 - birthYeah;
};
const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  return ` ${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1981, "adilson"));

const scoreKoalas = [65, 54, 49];
const scoreDolphins = [4, 1, 1];
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(scoreKoala, scoreDolphin) {
  const scoreKoalas = calcAverage(...scoreKoala);
  const scoreDolphins = calcAverage(...scoreDolphin);
  if (scoreKoalas >= 2 * scoreDolphins) {
    return `Koala is the winner with average ${scoreKoalas}`;
  } else if (scoreDolphins >= 2 * scoreKoalas) {
    return `Dolphins win score ${scoreDolphins} and Koalas`;
  } else {
    return ` No team is  Win with `;
  }
}

console.log(checkWinner(scoreKoalas, scoreDolphins));

// const friend1 = 'Michel';
// const friend2 = 'Steven';
// const friend3 = 'Adilson';
// const friends = new Array('Michel', 'Steven', 'Peter');
// const calcAge = function (birthYeah) {
//   return 2025 - birthYeah;
// };

// friends[2] = 'Jay';
// friends[3] = ['Paulo'];
// console.log(friends);
// const years = [1981, 1967, 1999, 2010, 2019];
// console.log(calcAge(years[3]));
// const fullName = ['Adilson', 'Simiao', 'de'];
// fullName[3] = 'Souza';
// console.log(fullName);
// years;
// console.log(years.length);

// //add last
// friends.push(5);
// const newLenght = friends.push('Rafa');

// console.log(friends);
// for (let rep = 0; rep <= friends.length; rep++) {
//   if (typeof friends[rep] !== 'string') continue;
//   console.log('Only String with ' + ' ' + friends[rep]);
// }
// //add first
// friends.unshift('Marcos');
// console.log(friends);

// //remove first
// friends.shift('Marcos');
// console.log(friends);

// //remove last
// friends.pop();
// console.log(friends);
// var x = 5,
//   y = 8;
// console.log(x++);
// friend1.to;
// var num1 = 115;
// var num2 = 110;
// console.log(+num1 < num2);
// function solution(number) {
//   let acc = 0;
//   if (number <= 0) {
//     return 0;
//   } else if (number > 0)
//     for (let i = 0; i < number; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         acc = i + acc;
//       }
//     }
//   return acc;
// }

// const res = solution(10);
// console.log(res);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
function isPangram(sentence) {
  sentence = sentence
    .split(' ')
    .join('')
    .toLowerCase()
    .replace(/[^a-z]/g, '');
  const res = [...alphabet];
  return res.every(letter => sentence.includes(letter));
}

const result1 = isPangram('The quick brown fox jumps over the lazy dog 1 /');
console.log(result1);
const result2 = isPangram('aaa');
console.log(result2);

const measureKelvin = function () {
  //(C) Fix error
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celcius')),
  };

  //(B) Find
  // console.error(measurement);
  // console.warn(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// (A)Identify error
const kelvin = measureKelvin(10);
console.log(kelvin);

//How to solve problem
// 1) Undertanding the problem

// 2) Breaking up into su-problems


const printForecast = function (arr) {
  let account = 0;
  for (let i of arr) {
    account = account + 1;
    console.log(`... ${i}°C in ${account} days`);
  }
};
printForecast([17, 21, 23, -5, 0, 4]);

Let's say you're building a time traking application for freelancers. At some  point in buiding this app, you need a function that  receives daily work hours for a certain week, and returns
1. Total hours worked.
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5.Whether the week was full-time(worked 35 hours or more)
Test Data [7.5, 8, 6.5, 0, 8.5, 4, 0]

*/
const weekDays = [
  {
    hoursWork: [7.5, 8, 6.5, 0, 8.5, 4, 0],
    days: ['mon', 'tur', 'wen', 'thu', 'fri', 'sat', 'sunday'],
  },
];

const timeTracking = function (arr) {
  //Total hours worked.
  const sum = arr.reduce((acc, actualValue) => acc + actualValue, 0);
  const average = sum / arr.length;
  console.log(`Total hours worked ${sum}Hrs `);

  console.log(`Media of ${average.toFixed(2)} hours per day )}Hrs `);
  let acc = 0;
  let maxDay = '';

  weekDays.forEach(a => {
    a.hoursWork.forEach((hours, i) => {
      if (hours > acc) {
        acc = hours;
        maxDay = a.days[i];
      }
    });
  });
  console.log(`Dia com maior horas trabalhadas: ${maxDay}, horas ${acc}`);
};

const data1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];

timeTracking(data1);
