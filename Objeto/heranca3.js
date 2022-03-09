const pai = {
    nome: "Pedro",
    corDoCabelo: "preto"
}
const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai, {
    nome: { value: "Bia", writable: false, enumerable: true }
})
console.log(filha2.nome)
filha2.nome = "carla"
console.log(`${filha2.nome}, ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    console.log(key)
}
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por heranca: ${key}`)
    // saber se o atributo veio por heranca
}
Object.freeze(filha1) 