/* function randomic({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 200, min: 1}
console.log(randomic(obj));
console.log(randomic({ min: 955}));
console.log(randomic({})); */
// console.log(randomic()) vai da erro pois esta desestruturando
// um objeto que esta undefined

function random({min = 1, max = 100}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { min: 5, max: 100}
console.log(random({min: 5}))
