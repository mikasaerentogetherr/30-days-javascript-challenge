// Day 4 : Loops

// Activity 1 : For Loop

//Task 1

for (let i = 1; i <= 10; i++)
  console.log(i)

// Task 2

let table = 5

for (let i = 1; i <= 10; i++)
  console.log(table + " * " + i + " = " + table * i)

// Activity 2: While Loop

// Task 3

let num = 1
let sum = 0
while (num <= 10)
  sum += num++
console.log(sum)

// Task 4

let num1 = 10
while (num1 >= 1)
  console.log(num1--)

// Activity 3: Do While Loop

// Task 5

let num2 = 1
do{
  console.log(num2++)
}while(num2 <= 5)

// Task 6

let factorial = 5
let result = 1
do{
  result *= factorial--
}while(factorial >= 1)
console.log(result)

// Activity 4: Nested Loops

// Task 7

let row = 5;

for (let i = 1; i <= row; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8

for (let i = 1; i <= 5; i++){
  if (i == 5){
    continue;
  }
  console.log(i)
}

// Task 9

for (let i = 1; i <= 10; i++){
  if (i == 7){
    break;
  }
  console.log(i)
}