/**
 * Quiz 1 focuses on variables and control structures
 *
 * @category    Quiz 1
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Zein Atris <zhatris@hawkmail.hfcc.edu>
 * @date        2020.01.30
 * @grade       8 / 10
 */

// 1. Define a constant named favBook that holds the name of your favorite book.
//      Also define a standard variables called favInt that contains your favorite int.
const myfavBook = "good";

let favInt = 42;

// 2. Write an if statement that meets the following conditions.
//      If favInt is greater than 42, console log the word BIGGER.
//      If favInt is less than 42, console log the word SMALLER.
//      If favInt is equal to 42, console log the word EQUAL.
 if (favInt > 42) {
     console.log("BIGGER")
 }
 if (favInt < 42){
     console.log("SMALLER")
 }
 if (favInt === 42){
     console.log("EQUAL")
 }

 // -1 pt
 // 3. Write a for loop that iterates 7 times. Log the name of your book in each iteration.
let c
for(c = 0; c <= 7; c++ )
{
    console.log(myfavBook);
}

/*
for( let i in c )
{
    console.log( myfavBook[i] );
}
*/

// -1 pt
// 4. Write a while loop that iterates until favInt is less than or equal to -42.
//      Inside the loop, write an if that will send a console error if favInt is 0.
//      The console error should read "ZERO DETECTED!"

while( favInt <= -42)
{
    favInt--;
    if (favInt === 0) {
        console.error("ZERO DETECTED!")
    }
}

