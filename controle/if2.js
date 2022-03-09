function teste1(num) {
    if(num > 7) {
        console.log(num)
        console.log("Final")
    }
}
teste1(6)
teste1(8)
teste1(7.2)

function teste2(num) {
    if(num > 7); /* o ; finalizou a sentenca */ { 
        console.log(num)
    }
} // nao usar ; com as estruturas de controle
teste2(6)
teste2(8)