// pessoa aponta para end memoria 123 => {'joao'}
const pessoa = { nome: "Joao" }
pessoa.nome = 'Pedro'
console.log(pessoa)
// pessoa deixe de apontar para 123 e ir aponta para end 456 => 
// pessoa = { nome: "Ana" } vai dar erro

Object.freeze(pessoa) // congelar impossivel mexer no objeto - O obj se torna constante
pessoa.nome = 'Maria'
pessoa.end = "Rua Abc" // tbm nao funcionara
delete pessoa.nome // tbm nao e possivel
console.log(pessoa.nome) // continuara pedro

const pessoaConstante = Object.freeze({ nome: "Joao"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante.nome)