function Pessoa () {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
} // usando arrow => o this nao varia
new Pessoa