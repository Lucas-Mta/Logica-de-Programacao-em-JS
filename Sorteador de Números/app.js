function sortear() {

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let numeroAleatorio;
    let sorteados = [];

    for(let i = 0; i < quantidade; i++) {
        numeroAleatorio = sorteiaNumeroAleatorio(de, ate);

        while(sorteados.includes(numeroAleatorio)) {
            numero = sorteiaNumeroAleatorio(de, ate);
        }

        sorteados.push(numeroAleatorio);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function sorteiaNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora </label>';
    reiniciarBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    
    if(botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }
    else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciarBotao() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.contains('container__botao')
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}

