function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}`)
    } else {
        return console.log(area)
    }
    }
area(6, 4)
area(1, 4)
area(2)
area()
area(1, 4, 60, 66, 90) // funciona mesmo com params a +
area(5, 6)