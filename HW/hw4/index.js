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

    firstFunction: function ()
    {
        let h = document.getElementById("h");
        let a1 = document.getElementById("a1");
        PageManager.h = a1.value;
    },

    secondFunction: function ()
    {
        let myDiv = document.getElementById("myDiv");
        let a2 = document.getElementById("a2");
        PageManager.btn2 = myDiv + a2.value;
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