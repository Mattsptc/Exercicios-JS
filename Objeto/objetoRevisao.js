const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: "a4",
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: "rua Abc",
            numero: 132,
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 18

    },{
        nome: "ana",
        idade: 21
    }
    
]}
carro.proprietario.endereco.numero = 1000; // modifica o atributo
console.log(carro)
delete carro.condutores
console.log(carro)
console.log(carro.condutores) // agora e undefined