 const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']
 pilotos.pop() // ultimo item e retirado
 console.log(pilotos)

 pilotos.push('Verstappen')
 console.log(pilotos)

 pilotos.shift() // remove o 1 item da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pd add ou rem elementos

pilotos.splice(2, 0, 'Bottas', 'Massa2')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos) // o 3 foi removido

const algunsPilotos1 = pilotos.slice(2) // cria novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)