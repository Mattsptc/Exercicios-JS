/* const resultado = nota => nota >= 7 ? 'Aprovado' : "Reprovado";

console.log(resultado(7.1))

function compras(trabalho1, trabalho2) {
    const tomarSorvete = trabalho1 || trabalho2
    const comprarTv50Pol = trabalho1 && trabalho2
    const comprarTv32Pol = !!(trabalho1 ^ trabalho2)
    return { tomarSorvete, comprarTv50Pol, comprarTv32Pol}

}
console.log(compras(false, true)) */


function imprimirNomeGritado(objeto) {
    console.log(objeto.name.toLowerCase() + "!!!!")
}

const objeto = { name: 'ROBERTO'}
imprimirNomeGritado(objeto)

function salarioLiquido(horasTrabalhadas, valorPorHora) {
    salarioBruto = horasTrabalhadas * valorPorHora
    salarioLiquido = salarioBruto - salarioBruto * 0.3
    return salarioLiquido
}
console.log(salarioLiquido(160, 10))

function receberNomeDoMes(numero) {
    switch(numero){
    case 1:
    return "Janeiro";
    case 2:
    return "Fevereiro";
    }
}
console.log(receberNomeDoMes(1))

const valores = [1, 2, 3, 4, 5, 6, 7,]
console.log(valores[0])
console.log(valores.length)
console.log(valores[3] - valores[2])
console.log(salarioLiquido - valores[2])

function pastelariaVendasMensais(vendasDiarias, vendasPorHoras) {
    vendasDiarias = vendasPorHoras * 10
    pastelariaVendasMensais = vendasDiarias * 25
    valorMedioDasVendas = 6
    return pastelariaVendasMensais
}
console.log(pastelariaVendasMensais(1, 20))
faturamentoTotal = pastelariaVendasMensais * valorMedioDasVendas
console.log(faturamentoTotal + ' Mil reais')
lucroTotal = faturamentoTotal * 20/100
console.log(lucroTotal + " Mil reais")

function cumprimentar(nome) {
    return "Ola " + nome + ' !'
    
}
console.log(cumprimentar("Jose"))

function nomeDaPessoa(numero) {
    switch(numero){
    case 1:
    return "Jose"
    case 2:
    return "Maria"
}}
console.log(nomeDaPessoa(1))

function randomic({ min = 1, max = 100}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { min: 5, max: 100}
console.log(randomic({min: 5}))

function maiorOuIgual(x, y) {
    const z = x - y
    return z > 0

}
console.log(maiorOuIgual(5, "5"))