/**
 * Homework 5
 * @grade		8 / 10
 */
let ErrorHandler = {

    init: function () {
        let happyMessage = "";
        let errorMessage = '<span style="color:red;">Sorry, an error occurred!</span>'

        let error = document.getElementById("error");
        error.addEventListener("click", ErrorHandler.checkDate);
    },

    checkDate: function () {
        let myDiv = document.getElementById("myDiv");
        let d = new Date();
        let error = document.getElementById("error");

        if (d.getDay() === 2 || d.getDay() === 4) {
            ErrorHandler.happyMessage = "Welcome to class!";
            if(d %2 == 0){
                myDiv.innerHTML = ErrorHandler.happyMessage + "myDiv";
            }
            else{
                console.error("Sorry, it's not time for class!");
            }
        } else {
            ErrorHandler.happyMessage = "Enjoy your day off!";
        }
    },

    newDate: function () {
        let d = {
            newDate: new Date()
        };
        
        try {
            console.log("Sorry, an error occurred!");
        } catch (err) {
            console.error("CheckDate Error:", err);
            throw new Error(ErrorHandler.newDate);
        }
    }
};

window.onload = ErrorHandler.init;