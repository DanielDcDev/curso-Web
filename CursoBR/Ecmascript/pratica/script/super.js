class Animal{
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    dormir(){
        console.log('dormindo');
    }
}
class Passaro extends Animal{
    constructor(bico,cor, tamanho, peso){
        super('azul',10, 7)
        this.bico = bico
    }
    voar(){
        console.log('voar');
    }

}
class Papagaio extends Passaro{
    constructor(sabeFalar, cor, tamanho, peso){
        super('medio',cor, tamanho, peso)
        this.sabeFalar = sabeFalar
        if(sabeFalar == true){
            this.sabeFalar = 'sabe Falar'
        }else{
            this.sabeFalar = 'nao Sabe'
        }
    }
    falar(){
        console.log('falar');
    }
    
}

let papagaio = new Papagaio(false, 'Verde', 10, 80)
