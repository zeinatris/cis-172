let pageHandler = {
    pageDiv: null,

    init: function(){
        if (window.jQuery) {
            // jQuery is loaded
            console.log("Page has loaded!");
        } else {
            console.log("Doesn't Work");
        }
        try{

        }
        catch(e){
            console.error("Error please re load the page", e);
            throw new Error(pageHandler.init);
        }
    }

}
window.onload = pageHandler.init;