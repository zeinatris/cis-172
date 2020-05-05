// Grade: 10 / 10

let johnDiv = $("#JohnCena");
let pageHandler = {
  pageDiv: document.getElementById("myDiv"),
  showBtn: document.getElementById("show"),
  showBtn: addEventListener("click", johnDiv),
  jQuery: document.getElementById("jq"),

  init: function () {
    if (window.jQuery) {
      try {
        console.log("The page has loaded!");
      } catch (e) {
        console.error("Error! Please refresh the page.", e);
        throw new Error(pageHandler.init);
      }
    }
    if (cenaDiv) {
      cenaDiv = $("#myDiv");
      $("#JohnCena").hide();
    }
    if (pageHandler.showBtn) {
      $("#JohnCena").show();
    }
    $("#jq").on("click", pageHandler.jQuery);
  },
};
window.onload = pageHandler.init;
