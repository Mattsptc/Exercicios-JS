function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20 // no caso seria um produto com esse preco
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 20000, desc: 0.20}
console.log(getPreco.call(carro)) // funcao call
console.log(getPreco.apply(carro)) // funcao apply

console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(carro, [0.17, '$'])) 
// no apply os parametros tem que estar em um array
