
let addbutton = document.querySelector('#addbutton');
let input1 = document.querySelector('#input1');
let block1 = document.querySelector('.block1');
let main_form = document.querySelector('.main_form');
/*let block2 = document.querySelector('.block2');
 let h1_2 = document.querySelector('.block2_h1');*/
let i = 1;

addbutton.addEventListener('click', function () {
    let div = document.createElement('div');
    let input2 = document.createElement('input');
    let div2 = document.createElement('div');


    //let inner_div1 = document.querySelector('.block2');


    div.innerHTML = input1.value;
    input2.type = 'button';
    input2.value = '-';
    div.id = i-1;
    i++;
    console.log(i);

    block1.appendChild(div);
    div.appendChild(input2);
    div.appendChild(div2);
    div2.innerHTML = i-1;

    /*e.target.addEventListener('click', function () {
     div2.innerHTML = i;
     i++;
     });*/
    for (let i = 0; i < main_form.childNodes.length; i++) {
        //console.log(main_form.childNodes[i])
        console.log(main_form.childNodes.index);

    }


    input2.addEventListener('click', function() {

        div.remove();

        i++;
    });


    //block1.insertBefore(div, block1.children[0]);
    div.style.width = '200px';
    div.style.height = '100px';
    div.style.backgroundColor = "#fa0";

});












