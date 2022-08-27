//  variables=>o'zgaruvchilar
// var
// let
// const

// var

// var data = "JavaScript";
// data = "PHP";

// var data = "Go Lang";

// console.log(data);

// let

// let color = "red";

// console.log(color);

// const

// const country = "BMW";

// console.log(country);

// sm dan metrga o'tqazish

// let a=+prompt ('Son kiriting:');

// console.log(a/100+" metr");

//  kg dan tonnaga o'tqazish

// let m=+prompt('son kiriting: ');

// console.log(m/1000+ " tonna");

// let a = +prompt(" Son kiriting :");

// if (a % 2) {
//   console.log("juft son");
// } else {
//   console.log("toq son");
// }

// const hasGoodVision = true;
// const hasDriverLIcence = true;

// if (hasGoodVision == true && (hasDriverLIcence == true)) {
//   console.log("You can drive");
// } else {
//   console.log("you can't drive");
// }

let seconds=7852;
let hour=3600;
let minute=60;

let hourValue = Math.floor(seconds/hour);

let minuteValue = seconds%=hour;

let secondValue =minuteValue%=minute

console.log(`${hourValue}hour ${minuteValue}minute ${secondValue}seconds `);