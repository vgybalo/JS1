let a = 0;
function display(callback) {
    console.log(callback());
}




setTimeout( transfer , 1000);

function transfer() {
    a = 134;
    return a;
}

display (transfer);