let PageManager = {

    init: function() {

        let btn1 = document.getElementById("btn1");
        btn1.addEventListener("click", PageManager.firstFunction);

        let btn2 = document.getElementById("btn2");
        btn2.addEventListener("click", PageManager.secondFunction);

        let btn3 = document.getElementById("btn3");
        btn3.addEventListener("click", PageManager.thirdFunction);

        let Color = document.getElementById("color");
        Color.addEventListener('change', PageManager.colorChange);
    },

    firstFunction: function (event)
    {
        console.log("event", event);
        let text = document.getElementById("a1")
        let newText = text.value;
        let h = document.getElementById("h");
        h.innerHTML = newText;
    },

    secondFunction: function (event)
    {
        console.log("myDiv", event);
        let a2 = document.getElementById("a2")
        let newText = a2.value;
        let myDiv = document.getElementById("myDiv");
        myDiv.innerHTML = newText;
    },

    thirdFunction : function three()
    {
        console.log(PageManager);
    },

    colorChange: function()
    {

        let color = document.getElementById("color");
        document.body.style.backgroundColor = document.getElementById("color").value;
    }
};
window.onload = PageManager.init;
