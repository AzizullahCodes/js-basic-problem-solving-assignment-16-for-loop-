// js-practice for loop
// ques no 1 
// var  fruits = ['apple','mango','banana','orange'];
// var search = prompt('what fruit you are searching');
// var isfound = false;
// for(i = 0; i < fruits.length; i ++){if(search === fruits[i]){
//     isfound = true;
//     break;
// }}
// if(isfound === true){console.log(search,'found in list')}
// else{console.log(search,'is not found in list')}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ques no 2 
// var students = ['ali','hmza','waseem'];
// var searchStudent = prompt('enter student name you are searching');
// var isfound = false;
// for (i = 0; i < students.length; i++){if(searchStudent === students[i]){
//     isfound = true;
//     break;
// }}
// if (isfound === true){console.log(searchStudent,'is available in list')}
// else{console.log(searchStudent,'is not in list')}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ques no 3 
// Print 1 to 10
// Use a for loop to print numbers from 1 to 10.
// ans 
// for (i = 1; i < 10; i++){console.log(i)}
// =====================================================================================
// ques no 4
// Even Numbers (2 to 20)
// Print all even numbers from 2 to 20.
// ans 
// for ( i = 2 ; i <= 20 ;i += 2){console.log(i)}
// ============================================================================
// ques no 5 
// Sum of Numbers (1 to 100)
// Use a loop to calculate and print the sum of numbers from 1 to 100.
// ans 
// var sum = 0;
// for(var i = 1; i <= 100; i++){sum += i;}
// document.write(`the sum of number 1 to 100 = ${sum}`)
// =================================================================================
// ques no 6
// Multiplication Table
// Ask the user for a number and print its multiplication table up to 10.
// Example: Table of 5 → 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50
// ans 
// var number = +prompt('enter a number');
// if(number >= 1 && number !== -1)
// {for (var i = 1 ; i <= 10; i++){ document.write(`${number} x ${i} = ${number * i} <br>`);
// }}
// else {document.write(`invalid entery`)}
// ==================================================================================================
// ques no 7
// Reverse counting from 20 to 1
// // ans 
// for(var i = 20 ; i >= 1 ; i--){document.write(`${i} <br>`)}
// =================================================================================
// ques no 8 
// Print all odd numbers between 1 and 50
// ans 
// for (var i = 1 ; i <= 50; i +=2){document.write(`${i}<br>`)}
// ==========================================================================
// ques no 9
// Print the squares of numbers from 1 to 10
// Example: 1² = 1, 2² = 4, 3² = 9...
// ans 
// for(var i = 1 ; i < 11 ; i++){document.write(`${i* i}<br>`)}
// =====================================================================================
// ques no 10 
// Print all numbers divisible by 3 and 5 between 1 and 100

// ans 
// for(var i = 2 ; i < 100; i++){if(i % 3 === 0 && i % 5 === 0){document.write(`${i}<br>`)}}
//=====================================================================================
// ques no 11 
 // Ask the user to enter a number
    // let number = prompt("Enter a number to find its factorial:");
    // number = Number(number); // Convert input to a number

    // let factorial = 1;

    // if (!isNaN(number) && number >= 0) {
    //   for (let i = 1; i <= number; i++) {
    //     factorial *= i; // Multiply each number to factorial
    //   }

    //   document.write(`The factorial of ${number} is: ${factorial}`);
    // } else {
    //   document.write("Please enter a valid non-negative number.");
    // }
// ============================================================================
// ques no 12
// Write a JavaScript program using a for loop that prints numbers from 1 to 10 and also prints the square of each number.

// ✅ Expected Output:
// Number: 1, Square: 1
// Number: 2, Square: 4
// Number: 3, Square: 9
// Number: 4, Square: 16
// ...
// Number: 10, Square: 100
// ans 
// for(var i = 1 ; i <= 10; i++){console.log('Number:',i + ','+ 'Square:',i*i)}
// ====================================================================================
// ques no 13
// ⭐ Task 4: Print a Line of Stars
// Print 10 stars (*) in a single line.
// Expected Output:
// **********
// 👉 Hint: Use a loop to add stars to a string and log the string once.

// ans
// var stars = '';
//  for(var i = 1; i <= 10; i++){stars +='*';}
//  console.log(stars)
// ==========================================================================================
// ques no 14
// var animals = ['goat','cow','hen','dog'];
// var search  = prompt('enter animal name you are searching');
// var isAvailable = false;
// for(var i = 0; i < animals.length; i++){if(search === animals[i])
//    { isAvailable = true;
//     break;}

// }
// if(isAvailable === true){console.log('animal you are searching is available')}
// else{console.log('animal is not available')}
// =====================================================================
// ques no 15
// Sum of First N Natural Numbers
// Ask the user for a number n, and calculate the sum of numbers from 1 to n.
// ans 
// var n = +prompt('enter a natural number');
// var factorial = 1;
// for(var i = 1; i <= n; i++ ){factorial = factorial * i }
// console.log(factorial)
// =============================================================================
// ques no 16 
// find factorial of any number take by prompt
// ans
// var num = +prompt('enter any number');
// var factorial = 1;
// for(var i = 1; i<= num; i++){factorial = factorial * i}
// console.log(factorial);
// ==========================================================================
// ques no 17 
// Multiplication Table
// Ask the user for a number and print its multiplication table up to 10.
// ans 
// var enter_number = +prompt('enter a number')

// for(var i = 1; i<=10; i++){console.log(i*enter_number)}
// ===============================================================================
// ques no 18 
// Reverse Counting
// Print numbers from 10 to 1 using a for loop.
// ans 
// for(var i = 10; i >= 1; i--){document.write(`${i}<br>`)}
// =============================================================================================
// ques no 19
// Print All Odd Numbers from 1 to 50
// ans 
// for(var i = 1 ; i <= 50 ; i++){if(i % 2 !== 0){console.log(i)}}
// ======================================================================================
// ques no 20 
// print all even numbers from 1 to 100
// for(i = 1; i <= 100; i++){if(i%2 === 0){console.log(i)}}
// =========================================================================
// ques no 21 
// Find the Sum of Digits of a Number
// Example: If the number is 123, output should be 1 + 2 + 3 = 6.
// ans 
var num = +prompt('enter number');
for(var i = 1; i<= num; i++){console.log(i)}