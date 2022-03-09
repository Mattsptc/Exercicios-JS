function tratarErroELancar(erro) {
 //   throw new Error('Erro de processamento')
 // throw 10
 // throw true                 TODOS ESSES PODEM SER USADOR
 // throw 'mensagem'
 throw {
     nome: erro.name,
     msg: erro.message,
     date: new Date
 }} 

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!!") 
    } catch (e) {
        tratarErroELancar(e)
    }   finally {
            console.log('final')
    }
    
}
 


const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);