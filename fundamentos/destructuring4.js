function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]));
console.log(rand([3]));
console.log(rand([0, 1]));
console.log(rand([, 10]));
// console.log(rand()); vai da erro pois esta undefined