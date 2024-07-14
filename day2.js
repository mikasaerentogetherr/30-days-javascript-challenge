// Day 2 : Operators

//Activity 1 : Arithmetic Operations 

// Task 1

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);

// Task 2

let num3 = 8;
let num4 = 3;

console.log(num3 - num4);

// Task 3

let num5 = 6;
let num6 = 4;

console.log(num5 * num6);

// Task 4

let num7 = 9;
let num8 = 2;

console.log(num7 / num8);

// Task 5

let num9 = 10;
let num10 = 3;

console.log(num9 % num10);

// Activity 2 : Assignment Operators

// Task 6

let num11 = 10;
num11 += 5;

console.log(num11);

// Task 7

let num12 = 20;
num12 -= 7;

console.log(num12);

// Activity 3 : Comparison Operators

// Task 8

let num13 = 10;
let num14 = 5;

console.log(num13 > num14)
console.log(num13 < num14)

// Task 9

let num15 = 8;
let num16 = 8;

console.log(num15 >= num16)
console.log(num15 <= num16)

// Task 10

let num17 = 6;
let num18 = "6";
let num19 = 6;
let num20 = 6;

console.log(num17 === num18)
console.log(num19 == num20)

// Activity 4 : Logical Operators

// Task 11

let num21 = 10;
let num22 = 5;

console.log(num21 > num22 && num21 < num22)

// Task 12

let num23 = 8;
let num24 = 3;

console.log(num23 > num24 || num23 < num24)

// Task 13

let num25 = 6;
let num26 = 4;

console.log(!(num25 > num26))

// Activity 5 : Ternary Operator

// Task 14

let num27 = 10;

num27 > 0 ? console.log("Positive") : console.log("Negative")

// Feature Request 

// 1

let number1 = 10;
let number2 = 5;

console.log(`The Addition of ${number1} & ${number2} is ${number1 + number2}`)

console.log(`The Subtraction of ${number1} & ${number2} is ${number1 - number2}`)

console.log(`The Multiplication of ${number1} & ${number2} is ${number1 * number2}`)

console.log(`The Division of ${number1} & ${number2} is ${number1 / number2}`)

console.log(`The Remainder of ${number1} & ${number2} is ${number1 % number2}`)


// 2

let number3 = 8;
let number4 = 3;

console.log(`Logical And of ${number3} & ${number4} is ${number3 > number4 && number3 < number4}`)

console.log(`Logical Or of ${number3} & ${number4} is ${number3 > number4 || number3 < number4}`)

console.log(`Logical Not of ${number3} & ${number4} is ${!(number3 > number4)}`)

// 3

let number5 = 6;

number5 > 0 ? console.log(`The Number ${number5} Is Positive`) : console.log(`The Number ${number5} Is Negative`)