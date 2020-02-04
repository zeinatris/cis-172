/**
 * HW 1 focuses on variables and control structures
 *
 * @category    HW 1
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Zein Atris <zhatris@hawkmail.hfcc.edu>
 * @date        2020.01.30
 * @grade       10 / 10
 */

 //strings
let myName = "Zein Atris";
let myMajor = "Web Developer";
let myFunfact = "Creating websites";
const myClass = 'CIS-172';

//console.log
console.log("Name:",myName);
console.log("Major:",myMajor);
console.log("Fun Fact:",myFunfact);
console.log("I am using JS in",myClass);

//global scope
var myEmail = ("zeinatris@yahoo.com");
console.log("Email: ",myEmail)

//for loop
let a;
for(a = 10; a <= 20; a++ )
{
    console.log("this is a for loop a: ", a);
}
//while loop
let counter = 10;
while( counter > 0 )
{
    counter--;
    console.log("Counter:", counter);
}

//if/else statement
let name = "Mr.Banks";

if (name === "Mr.Banks"){
    console.log("Welcome back professor!");
}
else {
    console.log("Welcome",myName,"what is your major?",myMajor);
}