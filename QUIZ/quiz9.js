/**
 * Quiz 9 focuses on AJAX
 *
 * @category    Quiz 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.04.30
 * @grade
 */


// 4 pts
// 1. Create a JS object called cartData and save 3 properties in it.
//    The properties should be name, price, and quantity; feel free to give them any values.
let cartDate = {
    name: "Name",
    price: "Price",
    quantity: "Quantity"
};

// 1 pts
// 2. Create a variable called cartDatabaseUrl and set it to the following string.
//              https://example.com/api/v2/cart
let cartDatabaseUrl = "https://example.com/api/v2/cart";

// 3 pts
// 3. Send an ajax POST request to the url in the cartDatabaseUrl variable, and pass along the cartData object
$.ajax( {method: "POST", url: url, cartData: data, complete: cartDate.getResponse} );

// 2 pts
// 4. Assume the api responded and the resulting response string is stored in a variable called responseString.
//          Parse the response string into an object and store it in a variable called responseObj.
var responseString = JSON.parse(response.responseText);


// 2 pts
// E. Name a http status codes for success and one for error.
if( json.statusCode == '200' )
{
    $('#alerts').append( '<div class="alert alert-success alert-dismissible fade show text-left" role="alert">' + json.message + ' ' + closeButton + '</div>' );
}
else if( json.statusCode == '500' )
{
    $('#alerts').append( '<div class="alert alert-danger alert-dismissible fade show text-left" role="alert">' + json.message + ' ' + closeButton + '</div>' );
}
}
catch( e )
{
    console.error( "Response Error:", e.message );
}
}
