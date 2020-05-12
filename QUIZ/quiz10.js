/**
 * Quiz 10 is cumulative
 *
 * Have a great summer, and stay safe!
 *
 * @category    Quiz 10
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Zein Atris <zhatris@hawkmail.hfcc.edu>
 * @date        2020.05.07
 * @grade       6.5 / 10 
 */

// 0.5 / 1 pts
// 1. Take this JSON string below, and convert it into an object called discordUser using the JSON library.
// {"uid":64029,""name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}
try {
    let discordUser = JSON.parse('{"uid":64029,"name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}');



// 1 / 2 pts
// 2. Load the discordUser object created above into a localStorage object called currentUser.
localStorage.setItem('currentUser', discordUser);


// 2 / 4 pts
// 3. Check to make sure the uid and age properties of the discordUser object are numbers.
//          Also check to ensure the name and type properties are strings.
//          If any of these are false, then throw an Error.
if (isNaN(discordUser))
{
    //alert("Must input numbers"); // I would not use an alert.....ever
    throw new Error("Must input numbers");
    return false;
}

if(inputtxt.value.match(discordUser))
{
    return true;
}
else
{
    //alert("Please enter a letter");
    throw new Error("Please enter a letter");
    return false;
}

// 1 pts
// 4. Create an AJAX POST request to the following URL, and be sure to pass the discordUser object with it.
//              https://notdiscord.com/api/v2/user/save

discordUser.makeRequest('https://notdiscord.com/api/v2/user/save', JSON.parse(requestString));

// 2 pts
// 5. Wrap this whole file in a try, and then add a catch at the bottom.
//          The catch should log the error object you pass in to the console.error method.


}
catch( e )
{
    console.error( "Request Error:", e.message );
}
