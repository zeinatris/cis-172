/**
 * Quiz 1 focuses on variables and control structures
 *
 * @category    Quiz 1
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Zein Atris <zhatris@hawkmail.hfcc.edu>
 * @date        2020.01.30
 */

const myfavBook = "good";

let favInt = 42;
 if (favInt > 42) {
     console.log("BIGGER")
 }
 if (favInt < 42){
     console.log("SMALLER")
 }
 if (favInt === 42){
     console.log("EQUAL")
 }

let c
for(c = 0; c <= 7; c++ )
{
    console.log("good", c);
}

for( let i in c )
{
    console.log( myfavBook[i] );
}


while( favInt <= -42)
{
    favInt--;
if (favInt === 0)
    console.error("ZERO DETECTED!")
}

