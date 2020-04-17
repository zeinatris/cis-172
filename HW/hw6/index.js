let johnDiv = $( '#JohnCena' );
let pageHandler = {
    pageDiv: document.getElementById("newDiv"),
    showBtn: document.getElementById("showBtn"),
    showBtn: addEventListener("click", johnDiv),
    jQuery: document.getElementById("jQueryBtn"),

    init: function(){

        if (window.jQuery){
            try{
                console.log("The page has loaded!");
            }
            catch(e){
                console.error("Error! Please refresh the page.", e);
                throw new Error(pageHandler.init);
            }
        }
        if (cenaDiv) {
            cenaDiv = $('#myDiv');
            $('#JohnCena').hide();
        }
        if (pageHandler.showBtn){
            $('#JohnCena').show();
        }
        $('#jQueryBtn').on( "click",pageHandler.jQuery );
    }
}
window.onload = pageHandler.init;