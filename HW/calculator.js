function number(num){
    let a = document.getElementById('input');
    switch(num){
        case 1:
            a.value += '1';
            break;
        case 2:
            a.value += '2';
            break;
        case 3:
            a.value += '3';
            break;
        case 4:
            a.value += '4';
            break;
        case 5:
            a.value += '5';
            break;
        case 6:
            a.value += '6';
            break;
        case 7:
            a.value += '7';
            break;
        case 8:
            a.value += '8';
            break;
        case 9:
            a.value += '9';
            break;
        case 0:
            a.value += '0';
            break;
    }
}

function oper(oper){
    let a = document.getElementById('input');
    switch(oper){
        case '+':
            a.value += '+';
            break;
        case '-':
            a.value += '-';
            break;
        case '*':
            a.value += '*';
            break;
        case '/':
            a.value += '/';
            break;
    }
}

function equal(){
    let a = document.getElementById('input');
    ans = Math.floor(+eval(a.value));
    document.getElementById('input').value = '=' + ans;
}