const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // gera um texto nao renderiza funcoes

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))

// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
// No JSON todos objetivos devem ser delimitados com aspas Duplas

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
