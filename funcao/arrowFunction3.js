let comparaComThis = function (param) {
    console.log(this === param)
}
// function normal escreve no escopo global
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(this) //false
comparaComThis(obj)

let comparaComThis2 = param => {
    console.log(this === param)
} // o arrow foi dentro do modulo
comparaComThis2(global) 
comparaComThis2(module.exports) //dentro do modulo
comparaComThis2(this)//true

comparaComThis2 = comparaComThis2.bind(obj)
comparaComThis2(obj) // nao da pra mudar o this ent = false
comparaComThis2(module.exports) // nao da para usar o bind na arrow function