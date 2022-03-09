
function cumprimentar(nome) {
    return "Olá, " + nome + "!"
    
    }
console.log(cumprimentar("maria"))

function converterIdadeEmAnosparaDias(idade) {
    return idade * 365 + " dias"
}
console.log(converterIdadeEmAnosparaDias(31))

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return 'Salario igual a R$' + (salarioLiquido)
}
console.log(calcularSalarioLiquido(160, 10))

/* const [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12] = [janeiro, fevereiro, marco, 
    abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro]
 */

    function receberNomeDoMes(numero) {
        switch(numero){
        case 1:
        return "janeiro";
        case 2:
        return "fevereiro";
        case 3:
        return "março";
        case 4:
        return "abril";
        case 5:
        return "maio";
        case 6:
        return "junho";
        case 7:
        return "julho";
        case 8:
        return "agosto";
        case 9:
        return "setembro";
        case 10:
        return "outubro";
        case 11:
        return "novembro";
        case 12:
        return "dezembro";
        }
        }
        
        console.log(receberNomeDoMes(1))