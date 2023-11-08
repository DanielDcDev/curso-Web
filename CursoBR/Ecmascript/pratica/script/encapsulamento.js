class Tv{
    constructor(){
        this._relacaoCanais = Array(2,4,5,7,10)
        this._canalAtivo = 5
        this._volume = 5
    }
    get canalAtivo(){
        return this._canalAtivo
    }
    get relacaoCanais(){
        return this._relacaoCanais
    }
    get volume(){
        return this._volume
    }
    set canalAtivo(canal){
        if(this._relacaoCanais.indexOf(canal)!== -1){
        this._canalAtivo = canal
        }
    }
    set relacaoCanais(canais){
        this._canalAtivo = canais
    }
    set volume(volume){
        this._canalAtivo = volume
    }
    
    
}
let tv = new Tv()
console.log(tv.volume);