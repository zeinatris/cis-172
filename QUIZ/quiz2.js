/**
 * Quiz 2 focuses on functions and events
 *
 * @category    Quiz 2
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Zein Atris <zhatris@hawkmail.hfcc.edu>
 * @date        2020.02.13
 * @grade       10 / 10
 **/

// 1. Define a function that take two arguments, you can choose the name.
//      The function should them multiply them together and return the result
function multiply(price, shipping) {
    console.log("I DID IT!"); // Excellent work!
    return price*shipping;
}

// 2. Create a button with an id of multiply, with text that says "Multiple 4 and 7"
//      Add an onclick event to this button that calls the function above, passing in 4 and 7.


// 3. Write a function that displays a welcome message.txt to the user in the dev console or anywhere on the page.
function welcome ()
{
    console.log("Welcome");
};

// 4. Create a button with an id of welcome, with text that says "Display Welcome"
//      Add a JS created listener click event to this button that calls the welcome function above.
let w = document.getElementById("welcome")
w.addEventListener( "click", welcome );