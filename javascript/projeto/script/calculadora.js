let valor_campo = document.getElementById('resultado')

function calcular(tipo, valor){
if(tipo === 'acao'){
    if (valor === 'c') {
        valor_campo.value = ""
    }
    if(valor === '+'|| valor === '-'|| valor === '*'|| valor === '/'|| valor === '.'){
        valor_campo.value += valor
    }
    if(valor === '='){
        let valor_calc = eval(valor_campo.value);
        console.log(valor_calc);
        document.getElementById('resultado').value = valor_calc
    }
}else if(tipo === 'valor'){
    valor_campo.value += valor
}   
}