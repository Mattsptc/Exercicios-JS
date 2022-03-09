let valor // nao inicializada
console.log(valor);
// console.log(valor2); da is not defined diferente de undefined
valor = null; // ausencia de valor, porem é definido
console.log(valor);
// console.log(valor.toString()); nao da pra ler propriedade de nulo

const produto = {};
console.log(produto.preco); // preco undefined 
produto.preco = 3.50;
console.log(produto);
console.log(produto.preco);

produto.preco = undefined // evite usar undefined
console.log(!!produto.preco);
console.log(produto);

produto.preco = null // sem preco
console.log(!!produto.preco);
