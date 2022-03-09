const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
function exec() {
    const valor = 'Local'
    minhaFuncao()
  
}

exec()   // Global pq a funcao carrega o contexto no ql foi declarada