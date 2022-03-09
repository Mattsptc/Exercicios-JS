const nome = "Rebeca";
const concatenacao = "Ola " + nome + '!';
const template = `
    Olá
        ${nome}!`;
console.log(concatenacao, template)

// expressões

console.log(`1 + 1 = ${1 + 1}`) // so o de dentro do $ que funciona

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);