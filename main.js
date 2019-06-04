let input = document.querySelector('input');
let addValue = document.querySelector('#addbutton');
let cleanValue = document.querySelector('#cleanbutton');
let calculate = document.querySelector('#calculate');
let output = document.querySelector('#output');
let inputValues = [];
let c = 0;
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
calculate.addEventListener('click', indicate );

function calc () {
    let b= 1;
    for (let i = 0; i < inputValues.length; i++) {
        b *= Number(inputValues[i]);
    }
    c = b/ inputValues.length;
    console.log(c);
}

function indicate () {
    output.value = c;
}
