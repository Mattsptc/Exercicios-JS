var a = 3;
let b = 4;

var a = 30;
b = 40; // se por let da problema na redeclaracao do valor

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5
// c = 50 nao pode redeclarar um valor de constante
console.log(c);
