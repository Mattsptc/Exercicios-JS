const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)                // esse e o callback
fabricantes.forEach(function(a) {
    console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante))