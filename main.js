let imgsmall = document.querySelector('.imagesmall');
let imagemain = document.querySelector('.imagemain');

let imagessmall = document.querySelectorAll('.imagesmall');
for (let i = 0; i<imagessmall.length; i++) {
    let maincrs = imagemain.src;
    /*let smallcrs = document.querySelector(src_id).src;*/
    /*console.log(imagemain.src);
     console.log(imagessmall[i].src);*/
    imagessmall[i].addEventListener('mouseover', function () {
            imagemain.src = imagessmall[i].src;
            /*document.querySelector(src_id).src = maincrs;
            /*imagessmall[i].crs = maincrs;
             console.log(maincrs);*/

        }
    );
}
    /*imagessmall[i].addEventListener('mouseover', function()
        {
           /* imagessmall[i].crs = maincrs;
            src_id_number = i+1;

           src_id = '#imagesmall'+src_id_number;


             console.log(document.querySelector(src_id).src);

        }
    );
    /*imagemain.addEventListener('mouseover', function()
        {
            /*console.log(imagemain.src);
            console.log(imagessmall[i].src);*/
            /*imagemain.src = maincrs;*/
            /*this.imagessmall[i].src = document.querySelectorAll('#imagesmall+[i]').src;
            console.log(document.querySelectorAll('#imagesmall+[i]').src);*/
       /* }
    );*/
/*}*/





/*let a = document.querySelectorAll('imagesmall');
for (let i=0;i< a.length; i++) {

    element.addEventListener('mouseover', function()
        {
            document.querySelector('div').innerHTML = 'This is div';

        }
    )
}*/





/*element.addEventListener('mouseover', function()
    {
        element.setAttribute('class','mainimg');
    }
)
/*element.addEventListener('mouseout', function()
{
    element.style.backgroundColor = '#ff0000';

}
)*/


/*document.getElementById("imagesmall1").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

    document.getElementById("MyElement").classList.toggle('MyClass');*/








/*let a = document.querySelector('div').innerHTML = 'This is div';
console.log(a);
let element = document.querySelector('div');
element.style.backgroundColor = '#000000';

element.addEventListener('mouseover', function()
{
    element.style.backgraundColor = '#ffffff';
}
)
element.addEventListener('mouseout', function()
{
    element.style.backgroundColor = '#ff0000';

}
)*/














/*document.getElementById("number1");
let number1 = document.getElementById('number1');
let value1 = document.getElementById('number1').value;

console.log(value1);*/


/*function handler() {
    let value1 = document.getElementById('number1').value;
    console.log(value1);
}

document.getElementById("number1").addEventListener("click", handler);*/



/*element.addEventListener("submit", function() {
    let number1 = form.elements.number1.value;
    if (number1 != "") {
        console.log(number1);
    }

});

/*event.preventDefault();*/
/*function getValue() {
    let value1 = document.getElementById('number1').value;

    console.log(value1);
}
document.getElementById("number1").onclick = getValue;*/

/*function a_value(o) {
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
/*}
else if (act = '-') {
 result = number1 - number2;
 console.log(result);
 }
 else {
 console.log('неправильное действие');
 }
 }*/

