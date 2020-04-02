let PageManager = {

    init: function() {

        let btnOne = document.getElementById("btnOne");
        btnOne.addEventListener("click", PageManager.firstFunction);

        let btnTwo = document.getElementById("btnTwo");
        btnTwo.addEventListener("click", PageManager.secondFunction);

        let btnThree = document.getElementById("btnThree");
        btnThree.addEventListener("click", PageManager.thirdFunction);

        let changeColor = document.getElementById('colors');
        changeColor.addEventListener('change', PageManager.colorChange);
    },

    firstFunction: function ()
    {
        let header = document.getElementById("h1");
        let txtBox1 = document.getElementById("txtBox1");
        PageManager.header = txtBox1.value;
    },

    secondFunction: function ()
    {
        let pageDiv = document.getElementById("pageDiv");
        let txtBox2 = document.getElementById("txtBox2");
        PageManager.btnTwo = pageDiv + txtBox2.value;
    },

    thirdFunction : function three()
    {
        console.log(PageManager);
    },

    colorChange: function()
    {

        let colors = document.getElementById("colors");
        document.body.style.backgroundColor = document.getElementById("colors").value;
    }
};
window.onload = PageManager.init;