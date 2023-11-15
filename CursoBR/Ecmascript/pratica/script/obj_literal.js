class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }   
    Descricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`);
    }
}
let produto = new Produto('notebook', 2200)
produto.Descricao()

let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function(){
        console.table(`${this.descricao} por apenas ${this.preco}`);
    }
}

produtoLiteral.verDescricao()

/*
formulario => servidor
Recupera dados e monta um objeto literal
obj literal => JSON=> HTTP=> Server => Armazena
*/