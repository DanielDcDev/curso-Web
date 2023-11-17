class Despesa_{
    constructor( ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor 
    }
    validationData(){
        for (let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}   
            }return true
        }
    }

class Bd_{
    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    
    getNextId(){
        let nextId = localStorage.getItem('id')
        return parseInt(nextId)+ 1
    }
        cadaster(d) {
            let id = this.getNextId()

            localStorage.setItem(id, JSON.stringify(d)) 
            
            localStorage.setItem('id', id)
        }
    }

let bd = new Bd_()

function CadastrarDispesa(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')
        
    let despesa = new Despesa_(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if(despesa.validationData()) {
		//bd.gravar(despesa)

		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_conteudo').innerHTML = 'Despesa foi cadastrada com sucesso!'
		document.getElementById('modal_btn').innerHTML = 'Voltar'
		document.getElementById('modal_btn').className = 'btn btn-success'

		//dialog de sucesso
		$('#modalRegistraDespesa').modal('show') 
	} else {
		
		document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!'
		document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
		document.getElementById('modal_btn').className = 'btn btn-danger'

		//dialog de erro
		$('#modalRegistraDespesa').modal('show') 
	}
}
function carregaListaDespesas(){
    
}
