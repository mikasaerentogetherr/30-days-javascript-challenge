// Day 3 : Control Structure 

// Activity 1: If-Else Statements 

// Task 1

let num = 5

if (num > 0) {
  console.log("The number is positive.")
}
if (num < 0) {
  console.log("The number is negative.")
}
if (num === 0) {
  console.log("The number is zero.")
}

// Task 2

let age = 18

if (age >= 18){
  console.log("You are eligible For Voting");
}
else{
  console.log("You are not eligible For Voting");
}

// Activity 2: Nested If-Else Statements

// Task 3

let num1 = 10
let num2 = 5
let num3 = 8

if (num1 > num2 && num1 > num3){
  console.log("num1 is the greatest")
}
else if (num2 > num1 && num2 > num3){
  console.log("num2 is the greatest")
}
else{
  console.log("num3 is the greatest")
}

// Activity 3: Switch Case Statements

// Task 4

let day = 1

switch (day){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
    default:
    console.log("Invalid day");
    
}

// Task 5

let score = 85

switch (true){
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
  case score >= 60:
    console.log("D");
  case score >= 50:
    console.log("E");
  case score >= 40:
    console.log("F");
  default:
    console.log("Fail");
}

// Activity 4: Conditional (Ternary) Operator

// Task 6 

let num4 = 10

num4 % 2 === 0 ? console.log("Even") : console.log("Odd")

// Activity 5 : Combining Conditions 

// Task 7

let year = 2024

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
  console.log("Leap Year")
}
else{
  console.log("Not a Leap Year")
}