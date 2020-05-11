let hw ={
    init:function ()
    {
    let read = document.getElementById('r')
    read.addEventListener('click', hw)
    let api = document.getElementById("s")
    api.addEventListener('click', hw)
    }
}

window.onload = hw.init;