/**
 * Quiz 4 focuses on DOM
 *
 * @category    Quiz 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Zein Atris <zhatris@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade
 */
// 1. Use the JS to get my footer into a variable called foot.
let foot = document.getElementById("myFoot");

// 2. Add an event to my footer to fire a method when clicked. Any method name is fine.
foot.addEventListener("click", foot.handleClick );

// 3. Store my title element in a variable called myTitle.
let myTitle = document.getElementsByTagName("title");

// 4. Use JS to change my Title and Footer to day "This Class rocks!"
document.title = "This Class rocks!";
document.footer = "This Class rocks!";