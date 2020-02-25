/**
 * Quiz 3 focuses on Objects
 *
 * @category    Quiz 3
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Zein Atris <zhatris@hawkmail.hfcc.edu>
 * @date        2020.02.20
 * @grade       11 / 10
 * */

// 1. Define an object called SiteUser.
let siteUser = {};

// 2. Add the following properties to the SiteUser object.
//      Username, Email, Password, Cart, Cell, Visits, Preferences, LastSignIn.
//      Feel free to make up the data or values for these properties.
let SiteUser =
    {
        UserName:       userName.value,
        Email:          email.value,
        Password:       password.value,
        Cart:           cart.value,
        Cell:           cell.value,
        Visits:         visits.value,
        Preferences:    preferences.value,
        LastSignIn:     last.value,
// 3. Add a function to the SiteUser object called addVisit.
//      This function should increase the Visits property by 1.
        addVisit: function (){
            SiteUser.Visits = SiteUser.Visits + 1;
        },
// B. 1/2 
//      Add a function to the SiteUser object called addItemToCart.
//      This function should take an argument called item.
//      This function should then add that item to the cart array.
        addItemToCart: function (item) {
            SiteUser.Cart.push(item);
        }
    };

// 4. Call the addVisit method of the SiteUser object.
SiteUser.addVisit();