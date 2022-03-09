const pessoa = {
    saudacao: "Bom Dia!",
    saudacao2: "boa tarde",
    falar() {
        console.log(this.saudacao, this.saudacao2)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()
const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()

const falar2 = pessoa.falar // pessoa.falar nao foi alterado bind apenas ligou
falar2()