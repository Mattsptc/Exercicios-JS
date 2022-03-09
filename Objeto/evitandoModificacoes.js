//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "promocao",

})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
// nao  da para adicionar ou excluir, porem pode mudar os valores
delete pessoa.nome
pessoa.descricao = 'Jovem'
console.log(pessoa)
pessoa.nome = 'reinaldo'
console.log(pessoa)

// Object.freeze = objeto selado + valores constantes