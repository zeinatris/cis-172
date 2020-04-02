let ErrorHandler = {

    init: function () {
        let happyMessage = "";
        let errorMessage = document.getElementById("e");

        let error = document.getElementById("error");
        error.addEventListener("click", ErrorHandler.checkDate);
    },

    checkDate: function () {
        let myDiv = document.getElementById("myDiv");
        let d = new Date();
        let error = document.getElementById("error");

        if (d === 'Tuesday' || d === 'Thursday') {
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
        }
        try {
            console.log("Sorry, an error occurred!");
        } catch (err) {
            console.error("CheckDate Error:", err);
            throw new Error(ErrorHandler.newDate);
        }
    }
};

window.onload = ErrorHandler.init;