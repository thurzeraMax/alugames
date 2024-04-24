validarNumero()

function validarNumero(){

    let numeroEscolhido = prompt('escolha um numero')
    if (numeroEscolhido == ''){
alert ( 'adicione um numero')}
}






function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');


    if (imagem.classList.contains('dashboard__item__img--rented')){
        alert ('O livro foi devolvido')
        imagem.classList.remove('dashboard__item__img--rented')
        botao.textContent = 'Alugar'
        botao.classList.remove ('dashboard__item__button--return')
    
    } else{ alert ('O livro foi alugado')
    imagem.classList.add('dashboard__item__img--rented')
    botao.textContent = 'Devolver'
    botao.classList.add ('dashboard__item__button--return') 

    }

  
    

}
