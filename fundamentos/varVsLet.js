var numero = 1 
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log("fora = ", numero)

let numeroX = 1 
{
    let numeroX = 2
    console.log('dentro = ', numeroX)
}
console.log("fora = ", numeroX)
//let tem escopo apenas do bloco, ja var tem escopo global caso nao
// esteja dentro d um