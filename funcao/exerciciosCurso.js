//1
function primeiroExercicio(a, b) {
    return console.log(a + b, a - b, a * b, a / b)

}
primeiroExercicio(2, 3)

//2

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

//3

function exponencial(base, expoente) {
    return console.log(Math.pow(base, expoente))
}
exponencial(10, 10)

//4

function divisao(dividendo, divisor) {
    return console.log(Math.floor(dividendo / divisor), dividendo % divisor)
}
divisao(10, 3)

// resposta do exercicio

function divisao2 (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao2(10, 3)

//5
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

//6
function jurosSimples (capitalInicial, taxaDeJuros, tempoAplicacao) {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoAplicacao)
}

console.log(jurosSimples(1000, 4/100, 30))
function jurosCompostos (capitalInicial, taxaDeJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoAplicacao
}
console.log(jurosCompostos(1000, 4/100, 30))

//7
function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

//8

function pontosDoPedro(recordesDePontuacao, piorJogo) {

}

//9
function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(29)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

//10
function numeroInteiro(param) {
    if (param % 3 == 0) {
        console.log('True')}
        else {
            console.log('False')
        }
    }
numeroInteiro(10)
numeroInteiro(9)

//11

function anoBissexto(param) {
    if (param % 4 == 0) {
        console.log("O ano é bissexto")}
        else {
            console.log("Não e ano bissexto")
        }
    }
anoBissexto(12)
anoBissexto(14)

//12 
function recursionFactorial(num){
    if (num === 0)
        return 1;
    else
        return num * recursionFactorial( num - 1 );
}
console.log(recursionFactorial(3))

//13
function DiaUtil(dia) {
    switch (Math.floor(dia)) {
    case 1: 
    console.log("Domingo - Fim de semana")
    break
    case 2:
    console.log("Segunda")
    break
    case 3:
    console.log("Terca")
    break
    case 4:
    console.log("Quarta")
    break
    case 5:
    console.log("Quinta")
    break
    case 6:
    console.log("Sexta")
    break
    case 7:
    console.log("Sabado - Fim de semana")
    break
    default:
    return console.log("Dia invalido")
  

}}
DiaUtil(10)
DiaUtil(1)
DiaUtil(2)

// 14

function Feira(fruta) {
    switch (fruta) {
    case "maca": 
        return console.log("Nao vendemos essa fruta aqui")
    case "kiwi": 
        return console.log("Estamos com escassez de kiwi")
    case "melancia":
        return console.log("Aqui está! É 3 reais o kg")
    default:
        return console.log("Nao temos essa opcao")

}
} 
Feira("maca")
Feira("kiwi")
Feira("melancia")
Feira("morango")

//15
function Revenda(modelo) {
    switch (modelo) {
        case "hatch":
        return console.log("Compra efetuada com sucesso")
        case "sedans":
        return console.log("Tem certeza que nao deseja outro modelo?")
        case "motocicletas":
        return console.log("Tem certeza que nao deseja outro modelo?")
        case "caminhonetes":
        return console.log("Tem certeza que nao deseja outro modelo?")
        default:
        return console.log("Nao trabalhamos com esses modelos")
    }
}
Revenda("hatch")
Revenda("sedans")
Revenda("moto")

//16

function Calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "+":
        return (num1 + num2)
        case "-":
        return (num1 - num2)
        case "/":
        return (num1 / num2)
        default:
        return console.log("Nao fazemos essa operacao")
    }}
console.log(Calculadora(1, 2, "+"))
console.log(Calculadora(2, 3, "/"))


//17

function AumentodeSalario(salario, planoDeTrabalho) {
    switch (planoDeTrabalho) {
        case "a":
        return console.log(salario + (salario * 10/100))
        case "b":
        return console.log(salario + (salario * 15/100))
        case "c":
        return console.log(salario + (salario *20/100))
        default:
        return console.log("Plano invalido")

    }
}
AumentodeSalario(1000, "a")
AumentodeSalario(1000, "c")
AumentodeSalario(1000, "d")

//18

function LerNumerosPorExtenso(numero) {
    switch (numero) {
        case 0:
        return console.log("Zero")
        case 1:
        return console.log("Um")
        case 2:
        return console.log("Dois")
        case 3:
        return console.log("Três")
        case 4:
        return console.log("Quatro")
        case 5:
        return console.log("Cinco")
        case 6:
        return console.log("Seis")
        case 7:
        return console.log("Sete")
        case 8:
        return console.log("oito")
        case 9:
        return console.log("nove")
        default:
        console.log("Numeracao invalida para o exercicio")
    }
}
LerNumerosPorExtenso(1)
LerNumerosPorExtenso(11)

//19

function Pedido(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return quantidade * 3
        case 200:
            return quantidade * 4
        case 300:
            return quantidade * 5.5
        case 400:
            return quantidade * 7.5
        default:
            return "Produto inexistente"


    }}

console.log(Pedido(100, 4))
console.log(Pedido(123, 3))

// 20

