// Grade: 10 / 10

let hw ={
    init:function ()
    {
    let read = document.getElementById('r')
    read.addEventListener('click', hw.onReadFile)
    let api = document.getElementById("s")
    api.addEventListener('click', hw.onAPIRequest)

    },

    onReadFile: function () {
        {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    document.getElementById("output").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "message.txt", true);
            xhttp.send();
    },

    onAPIRequest: function ( event ) {
        {
            let requestString = document.getElementById('output').value;

            console.log( "Request Object String: ", requestString );
            console.log( "Sending AJAX Request...." );

            try {
                hw.onAPIRequest('https://pokeapi.co/api/v2/pokemon/', JSON.parse(requestString));
                console.log("API request made successfully...");
            }
            catch( e )
            {
                console.error( "Request Error:", e.message );
        },
            onAPIRequest: function( url, data )
            {
                $.ajax( {method: "POST", url: url, data: data, complete: pageManager.getResponse} );
            },
            getResponse: function( response )
            {
                console.log("Response:", response.responseText);

}

window.onload = hw.init;