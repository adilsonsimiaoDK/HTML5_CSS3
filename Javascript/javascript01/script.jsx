"use strict";
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
*/
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
