console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana")
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1], aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Joaquim'
console.log(aprovados[3])
aprovados.push('Abia')
aprovados.shift()
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'ZeCarlos'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // vai ordernar o array em ordem alfabetica
console.log(aprovados) 

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // o ultimo algarismo define quantos itens serao excl
console.log(aprovados)

aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados) // metodo splice serve p add ou remover itens