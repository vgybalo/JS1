function a_value(o) {
    let number1 = o.value;
    console.log(number1);
}
function a_value2(o) {
    let number2 = o.value;
    console.log(number2);
}
function a_value3(o) {
    let act = o.value;
    console.log(act);
}


function Result (number1, number2, act) {
    let result = null;
    if (act = '+') {
        result = number1 + number2;
        console.log(number1);
        console.log(number2);
        /*console.log(result);*/
    }
    else if (act = '-') {
        result = number1 - number2;
        console.log(result);
    }
    else {
        console.log('неправильное действие');
    }
}

