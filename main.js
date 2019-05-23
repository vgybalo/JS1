
let arr = [1, 2, 'apple', 'orange', 3, 4, ['pine', 'eve', 'rose'], 5, 6, ['red', 'green', 'blue'], true, 7, 8, 'stone'];
let string = [];
let number = [];
for (let i = 0; i<arr.length; i++) {
    let element = arr[i];
    if (typeof element == 'string') {
        string.push(element);
    }
    else if (typeof element == 'number') {
        number.push(element);
    }
    else if (typeof element == 'object') {
        for (let j = 0; j<element.length; j++) {
            let inner_element = element[j];
            if (typeof inner_element == 'string') {
                string.push(inner_element);
            }
            else if (typeof inner_element == 'number') {
                number.push(inner_element);
            }
        }
    }
}

for (let k = 0; k<string.length; k++) {
    console.log(string[k]);
}

for (let l = 0; l<number.length; l++) {
    console.log(number[l]);
}
