let dobro = function (a) {
    return 2 * a
}
console.log(dobro(2))

// Funcao arrow
dobro = (a) => {
    return 2 * a
}

// funcao arrow reduzida e com retorno implicito
triplo = b => 3 * b // usado apenas para 1 linha de codigo de funcao

console.log(triplo(5))
console.log(triplo(Math.PI))
let ola = function () {
    return "Ola"
}
ola = () => 'Ola'
console.log(ola()) // () funcao sem parametros