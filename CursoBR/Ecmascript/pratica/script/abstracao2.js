/*
class Cadeira {
    constructor(qtde_pernas, giratoria, cor){
        this.qtde_pernas =  qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if(this.giratoria === true){
            console.log('girou')
        } else {
            console.log('Cadeira não é giratória')
        }
    }
}
let cadeiras = Array()
cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))

console.table(cadeiras)
 */
class Sofa{
    constructor(lugares, cor, formato){
        this.lugares = lugares
        this.cor = cor
        this.formato = formato
    }

    qtdPessoas(){
        console.log('cabem '+ lugares +' pessoas')    
    }
}
let sofas = Array()
sofas.push(new Sofa(4, 'vermelho', 'l'))
console.log(sofas);
