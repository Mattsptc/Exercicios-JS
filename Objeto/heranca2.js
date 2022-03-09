// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = "Z" // menos recomendado 
const avo = { attr1: "A", attr2: "X"}
const pai = {__proto__: avo, attr2: "B"}
const filho = {__proto__: pai, attr3: "C"}
console.log(filho.attr1, filho.attr2)
console.log(filho.attr0) // o avo aponta para object.prototype
console.log(filho.attr10)
console.log(filho.attr2)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }

}
const ferrari = {
    modelo: "f40",
    velMax: 324, // shadowing

}

const volvo = {
    modelo: "v40",
    status() {
        return `${this.modelo}: ${super.status()}` 
        //super xama o metodo do prototipo
    }
}
Object.setPrototypeOf(ferrari, carro) 
// estabeleceu q ferrari e prototipo de carro
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(120)
console.log(ferrari.status())
volvo.acelerarMais(300)
console.log(volvo.status())