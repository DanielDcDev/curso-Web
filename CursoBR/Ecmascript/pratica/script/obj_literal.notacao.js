let nome = 'Jorge' //document.getElementById('nome').value
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function (){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}
let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()

console.log(objeto2)
objeto2.exibirResumo()