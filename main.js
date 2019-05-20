/*let b = 1;
let c = +prompt("Введите число для расчета факториала");
for (let i = 1; i<=c; i++) {
    b = b * i;
}
console.log(b);*/

let b = 1;
let c = +prompt("Введите число для расчета факториала");
let i = 1;
while (i<=c) {
    b = b * i;
    i++;
}
console.log(b);
