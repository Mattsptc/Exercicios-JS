// Armazendando funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => { // (o =>) substitui a palavra function
 return a + b
}
console.log(soma(2, 3));

// retorno implicito
const subtracao = (a, b) => a - b // quando nao tem chaves e pq a funcao tera 
// uma unica linha
console.log(subtracao(2, 3));