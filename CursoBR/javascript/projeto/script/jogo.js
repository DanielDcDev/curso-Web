var altura = 0;
var largura = 0;
    

function ajustaTamanho(){
    var altura = window.innerHeight;
    var largura = window.innerWidth; 
    return altura, largura;
}

ajustaTamanho();
function randomicPosition(){

    var posicaoX = Math.floor(Math.random() * ajustaTamanho(largura)) - 90
    var posicaoY = Math.floor(Math.random() * ajustaTamanho(altura)) - 90


    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

        console.log(posicaoX, posicaoY);

    var mosquito = document.createElement('img')
    mosquito.src = '../img/mosca.png'
    mosquito.className = 'mosquito'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}






