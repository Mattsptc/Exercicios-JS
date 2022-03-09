// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
    const saudacao = "Falaa pessoal" // contexto léxico 2
    return saudacao
}
// Objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 31,
    peso: 90,
    endereco: {
        logradouro: 'Rua Xingu', 
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);