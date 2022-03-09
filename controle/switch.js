const imprimirResultadoss = function (notassss) {
    switch(Math.floor(notassss)) {
        case 10:
        case 9:
            console.log("Quadro de Honra")
            break
        case 8:
        case 7:
        case 6:
            console.log("Aprovado")
            break
        case 5:
        case 4:
            console.log("Recuperacao")
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprovado")
            break
    }
}
imprimirResultadoss(10)
imprimirResultadoss(7.2)
imprimirResultadoss(4.9)
imprimirResultadoss(1.2)
console.log("Fim")