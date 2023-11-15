class Animal{
    constructor(){
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }
    dormir(){
        console.log('dormindo');
    }
}

class Cachorro extends Animal{
    constructor(){
        super()
        this.orelhas = 'grandes e caidas'
    }
    correr(){
        console.log('correndo');
    }
    
    rosnar(){
        console.log('rosnando');
    }
}
class Passaro extends Animal{
    constructor(){
        super()
        this.bico = 'curto'
    }
    voar(){
        console.log('voar');
    }

}
class Papagaio extends Passaro{
    constructor(){
        super()
        this.sabeFalar = true
    }
    falar(){
        console.log('falar');
    }
}
let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()
console.table(cachorro)
console.table(passaro)
console.table(papagaio)

/*
cachorro.dormir()
passaro.dormir()
papagaio.falar()*/