function carro(velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima
    
    this.falar = function () {
        console.log(`a velocidade maxima é ${this.velocidadeMaxima}`)
    }
}
const c1 = new carro(200)
c1.falar()

