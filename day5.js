// Day 5 : Functions

// Activity 1: Function declartion

// Task 1

function EvenAndOdd() {
   if(num % 2 == 0){
        console.log("Even")
           }
             else{
                 console.log("Odd")
                   }
                   }

                   let num = 15
                   EvenAndOdd(num)

                   // Task 2

                   function square(num1){
                     return num1 * num1
                     }

                     console.log(square(5))

                     // Activity 2: Function Expression

                     // Task 3

                     function maxNum(num1, num2){
                       if(num1 > num2){
                           console.log(`The maximum number is ${num1}`)
                             }
                               else if (num2 > num1){
                                   console.log(`The maximum number is ${num2}`)
                                     }
                                       else{
                                           consle.log("Both numbers are equal")
                                             }
                                             }

                                             maxNum(10, 20)

                                             // Task 4

                                             function concatString(str1, str2){
                                               return str1 + str2
                                               }

                                               let string = concatString("Hello", "World")

                                               console.log(string)

                                               // Activity 3: Arrow Function

                                               // Task 5

                                               function add(num1, num2){
                                                 return num1 + num2
                                                 }

                                                 let sum = add(10, 20)

                                                 console.log(sum)

                                                 // Task 6

                                                 let strCheck = (str,char) => {
                                                   return str.includes(char)
                                                   }

                                                   console.log(strCheck("Hello", "o"))

                                                   // Activity 4 : Function Parameters & Default Vaules

                                                   // Task 7

                                                   let product = (num1, num2=9) => {
                                                     return num1 * num2
                                                     }

                                                     let result = product(10)
                                                     console.log(result)

                                                     // Task 8

                                                     let greet =(name, age=21)=>(`Hello ${name}, you are ${age} years old`)

                                                     console.log(greet("John"))

                                                     // Activity 5: Higher order funcitons

                                                     //Task 9

                                                     function higher(fun, number) {
                                                         return fun(number) * fun(number)
                                                         };
                                                         const fun = function (number) {
                                                             return number * number;
                                                             };
                                                             const result2 = higher(fun, 8);
                                                             console.log(result2);

                                                             //Task 10

                                                             function higherOrder(fun2, fun3, value) {
                                                                 const result = fun2(value);
                                                                     const anotherResult = fun3(result);
                                                                         console.log(anotherResult);
                                                                         }

                                                                         function fun2(value) {
                                                                             return value - 2;
                                                                             }
                                                                             function fun3(resu) {
                                                                                 return resu - 3;
                                                                                 }
                                                                                 const value = 20;

                                                                                 higherOrder(fun2, fun3, value)