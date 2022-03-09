function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.3);

function seForVerdadeEuFalo(valor) {
    if(valor) { // como so tem o valor ele vai converter em true/false
        console.log('É verdade... ' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0) // somente o que for true aparecera no console
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})