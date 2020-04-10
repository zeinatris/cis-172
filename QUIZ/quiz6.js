/**
 * Quiz 6 focuses on Form Validation
 *
 * @category    Quiz 6
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Zein Atris <zhatris@hawkmail.hfcc.edu>
 * @date        2020.04.09
 * @grade
 */

// Use this form as a reference for all questions below, but complete all of them using JavaScript (No HTML).
/*
<form id="myCryptoForm" >
    <input type="text" id="email" >

    <select id="favoriteCoin" >
        <option>-- SELECT AN OPTION BELOW --</option>
        <option>Bitcoin</option>
        <option>Ethereum</option>
        <option>XRP</option>
        <option>Other</option>
    </select>
</form>
*/

// 1 pt
// 1. Call a validateAndSaveEmail function when the email input loses focus (on blur).
validateAndSaveEmail.onblur = function () {


// 3 pts
// 2. Create a function called validateAndSaveEmail that checks the value of the email text box.
//          If the value is less than 5 characters then throw an error.
//          If the value does not contain an @ or . then throw an error.
//          The function does not need to save the email or do anything else.
    if (!this.value.includes('@')){
        alert("error");
    };

    if(nameInput.value.length < 5)
    {

        alert('Name should be longer than 4 characters!');

        return false;
    }
}


// 1 pt
// 3. Ensure a onFavCoinChange function executes every time the favoriteCoin select box changes (on change).
onFavCoinChange.onchange = function() {

    let favoriteCoin = document.getElementById("favoriteCoin").value

// 3 pts
// 4. Create a function called onFavCoinChange that checks the value of the select drop down.
//          If the value is Bitcoin, console.log this message "The coin to rule them all!"
//          If the value is Ethereum, console.log this message "Solidity smart contracts for the win!"
//          If the value is XRP, console.log this message "Bold move cotton!"
//          If the value is Other, console.log this message "You may be making a huge mistake..."

    if (favoriteCoin === "Bitcoin") {
        console.log("The coin to rule them all!")
    } else if (favoriteCoin === "Ethereum") {
        console.log("Solidity smart contracts for the win!")
    }
    else if (favoriteCoin === "XRP"){
        console.log("Bold move cotton!")
    }
    else if (favoriteCoin === "Other"){
        console.log("You may be making a huge mistake...")
    }

}

// 2 pts
// 5. Create an event that fires both functions created above when the form is submitted.
