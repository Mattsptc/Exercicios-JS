//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(20, 6);
imprimirSoma(2, 3, 5, 7, 8); // ele vai somar os 2 primeiros e ignorar o resto

//Funcao com retorno

function soma(a, b = 1) {
    return a + b
}
// soma nao iria retornar nada
console.log(soma(2, 3));
console.log(soma(2)); // a + b
console.log(soma());