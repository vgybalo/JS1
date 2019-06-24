let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let add_oper = document.querySelector('#addbutton');
let minus_oper = document.querySelector('#minusbutton');
let mult_oper = document.querySelector('#multbutton');
let div_oper = document.querySelector('#divbutton');
let calculate_oper = document.querySelector('#calculate');
let output = document.querySelector('#output');


let number1 = null;
let number2 = null;
let result = null;

input1.addEventListener('change', function () {
    number1 = Number(input1.value);
    console.log(number1);
    });
input2.addEventListener('change', function () {
    number2 = Number(input2.value);
    console.log(number2);
});




calculate = {
     numb1 : number1,
     numb2 : number2,
    result : null,

        add : function  () {
        result = number1 + number2;
        console.log(result);
    },
        minus : function  () {
        result = number1 - number2;
        console.log(result);
    },
        mult : function  () {
        result = number1 * number2;
        console.log(result);
    },
        devide : function  () {
        result = number1 / number2;
        console.log(result);
    },
        display : function  () {
        output.value = result;
    }

};


add_oper.addEventListener('click', calculate.add );
minus_oper.addEventListener('click', calculate.minus );
mult_oper.addEventListener('click', calculate.mult );
div_oper.addEventListener('click', calculate.devide );
calculate_oper.addEventListener('click',  calculate.display );
