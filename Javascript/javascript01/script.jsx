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
*/
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
function solution(number) {
  let acc = 0;
  if (number <= 0) {
    return 0;
  } else if (number > 0)
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        acc = i + acc;
      }
    }
  return acc;
}

const res = solution(10);
console.log(res);
