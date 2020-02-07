function calc() {
    var a = parseInt(document.querySelector("#value").value)
    var op = parseInt(document.querySelector("#op").value)
    var equal

    if(op === "badd") {
        equal = a + a
    }
    else if(op === "bsub"){
        equal = a - a
    }
    else if(op === "bmul"){
        equal = a * a
    }
    else if(op === "bdiv"){
        equal = a / a
    }

    document.querySelector("#equal").innerHTML = equal
}
