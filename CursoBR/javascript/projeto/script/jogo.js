var altura = 0;
var largura = 0;
let vidas = 1;
let tempo = 10;
var criaMosca = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')
if(nivel === 'normal'){
    criaMosca=2000
}else if(nivel === 'dificil'){
    criaMosca = 1500
}else if(nivel === 'chucknorris'){
    criaMosca = 750
}
let cronometro = setInterval(function(){
    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo
    
    if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)

        window.location.href = 'vitoria.html';
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
},1000)

function ajustaTamanho(){
    var altura = window.innerHeight;
    var largura = window.innerWidth; 
    return altura, largura;
}
function randomicPosition(){
        //remover o mosquito existente
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas >3){
            window.location.href = 'fimDeJogo.html';
        }else {
            document.getElementById('v'+ vidas).src ="../img/coracao_vazio.png"
            vidas++
        }
        
    }





    var posicaoX = Math.floor(Math.random() * ajustaTamanho(largura)) - 90
    var posicaoY = Math.floor(Math.random() * ajustaTamanho(altura)) - 90


    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

     //   console.log(posicaoX, posicaoY);

    var mosquito = document.createElement('img')
    mosquito.src = '../img/mosca.png'
    mosquito.className = tamanhoAleatorio() +' ' + ladoOlha()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
        this.remove();
    }
    document.body.appendChild(mosquito)
    tamanhoAleatorio(mosquito)
}
function tamanhoAleatorio(mosquito){
    var classe = Math.floor(Math.random() * 3)


    switch(classe){
        case 0:
            return 'mosquito'
            
        case 1:
            return 'mosquito2';
   
        case 2:
            return 'mosquito3';

    }

}
function ladoOlha(){
    var classe = Math.floor(Math.random() * 2)


    switch(classe){
        case 0:
            return 'LadoA'
            
        case 1:
            return 'LadoB';

    }
}



ajustaTamanho();





