const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log("Aprovado!")
    }    else {
            console.log("Reprovado!")
        }
    
}
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado("Epa")

function inverso(valor) {
    const tipo = typeof valor
    if(tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else return "booleano ou numeros esperados, mas o parametro e do tipo ${tipo}"
}
console.log(inverso(true))