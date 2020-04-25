let PageManager = {

    init: function () {

        let btn1 = document.getElementById("btn1");
        btn1.addEventListener("click", PageManager.functionOne);

        let btn2 = document.getElementById("btn2");
        btn2.addEventListener("click", PageManager.functionTwo);

        let btn3 = document.getElementById("btn3");
        btn3.addEventListener("click", PageManager.functionThree);

        let Color = document.getElementById("color");
        Color.addEventListener('change', PageManager.colors);

        let selectBox = document.getElementById("color");
        selectBox.addEventListener('change', PageManager.updateColor);

        let cookieManager = cookieManager.getCookies();
        cookieManager.setCookie("Name:", "Zein Atris")
        cookieManager.setCookie("Class:", "CIS-172")
        cookieManager.setCookie("Email:", "zatris@gmail.com")
        cookieManager.setCookie("Date:", date);
        cookieManager.setCookie("Movie:", "Fist Of Fury");


    },

    functionOne: function (event) {
        console.log("event", event);
        let text = document.getElementById("a1")
        let newText = text.value;
        let h = document.getElementById("h");
        h.innerHTML = newText;
    },

    functionTwo: function (event) {
        console.log("myDiv", event);
        let a2 = document.getElementById("a2")
        let newText = a2.value;
        let myDiv = document.getElementById("myDiv");
        myDiv.innerHTML = newText;
    },

    functionThree: function three() {
        console.log(PageManager);
    },

    colors: function () {

        let color = document.getElementById("color");
        document.body.style.backgroundColor = document.getElementById("color").value;

        let bgcolor = localStorage.getItem('background-color');
        console.log("bgcolor:", bgcolor);

        if (!bgcolor)
            localStorage.setItem("background-color", "white");
            $('body').css("background-color", bgcolor);
    },

    updateColor: function (event)
    {
        let sb = event.target;
        localStorage.setItem( "background-color", sb.value );

        $('body').css("background-color", sb.value);
    },

    OnClick:function () {
        if(PageManager.onclick.valueOf === null || PageManager.onclick.valueOf === -1 ){
            onclick.valueOf = 1;
        }
        let integer = 0;
        if (PageManager.onclick.valueOf === integer.toExponential) {
            integer += integer;
        }
        localStorage.setItem( "background-color", "white" );

        $('Clicker').css("clicker", Onclick);
        return document.cookie;
    }
};

window.onload = PageManager.init;