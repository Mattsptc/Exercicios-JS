let a = 3; // local

global.b = 123

this.c = 456

this.d = false
this.e = 'teste'

console.log(this.a);
console.log(global.a); // = global === window
console.log(global.b);
console.log(this.c);
console.log(module.exports.c); // exporta para fora
console.log(module.exports === this);
console.log(module.exports);

// module.exports = { e:456, f: false, g: 'teste' }

// criando uma variavel SEM VAR E LET arriscado - nao faca isto
abc = 3;
console.log(global.abc);