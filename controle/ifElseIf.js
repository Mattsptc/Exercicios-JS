Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log("Quadro de Honra!")
    } else if(nota.entre(7.0, 8.99)){
        console.log("Aprovado")
    } else if(nota.entre(0, 6.9)){
        console.log("Reprovado")}
        else {
            console.log("Nota Invalida")}

        
    } 

   
console.log(imprimirResultado(1))
console.log(imprimirResultado(10))
console.log("Fim")
     