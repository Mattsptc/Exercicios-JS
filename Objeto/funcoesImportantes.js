const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 10,
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: "01/10/2020"
})
pessoa.dataNascimento = "01/11/2014" // variavel esta congelada pelo writable
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign ecma2015

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // joga os atributos no obj d destino
console.log(obj)
Object.freeze(obj)
obj.a = 123 // nao altera pois esta freeze
console.log(obj)