class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Joao')
p1.falar()



const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome éé ${nome}`)
    }
}
const p2 = criarPessoa('Zezin')
p2.falar()
const p3 = criarPessoa("jonas")
p3.falar()
