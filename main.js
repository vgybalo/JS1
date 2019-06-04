let input = document.querySelector('input');
let addValue = document.querySelector('#addbutton');
let cleanValue = document.querySelector('#cleanbutton');
let calculate = document.querySelector('#calculate');
let inputValues = [];

addValue.addEventListener('click', function () {

        inputValues.push(input.value);
        console.log(inputValues);
    }
);

cleanValue.addEventListener('click', function () {
        inputValues.pop();
        console.log(inputValues);
    }
);

calculate.addEventListener('click', calc );


function calc () {
    let b= 1;
    for (let i = 0; i < inputValues.length; i++) {
        b *= Number(inputValues[i]);
    }
    let c = b/ inputValues.length;
    console.log(c);
}
