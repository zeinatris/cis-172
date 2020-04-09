/**
 * Homework 4
 * @grade		10 / 10
 */
let PageManager = {

    init: function() {

        let btn1 = document.getElementById("btn1");
        btn1.addEventListener("click", PageManager.functionOne);

        let btn2 = document.getElementById("btn2");
        btn2.addEventListener("click", PageManager.functionTwo);

        let btn3 = document.getElementById("btn3");
        btn3.addEventListener("click", PageManager.functionThree);

        let Color = document.getElementById("color");
        Color.addEventListener('change', PageManager.colors);
    },

    functionOne: function (event)
    {
        console.log("event", event);
        let text = document.getElementById("a1")
        let newText = text.value;
        let h = document.getElementById("h");
        h.innerHTML = newText;
    },

    functionTwo: function (event)
    {
        console.log("myDiv", event);
        let a2 = document.getElementById("a2")
        let newText = a2.value;
        let myDiv = document.getElementById("myDiv");
        myDiv.innerHTML = newText;
    },

    functionThree : function three()
    {
        console.log(PageManager);
    },

    colors: function()
    {

        let color = document.getElementById("color");
        document.body.style.backgroundColor = document.getElementById("color").value;
    }
};
window.onload = PageManager.init;