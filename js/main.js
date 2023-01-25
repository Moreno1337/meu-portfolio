const menuSanduiche = document.querySelector('[data-sanduiche]');
const navegacao = document.querySelector('.cabecalho__navegacao');

menuSanduiche.addEventListener('click', () => mostraMenu());

function mostraMenu() {
    if(navegacao.classList.length == 2) {
        navegacao.classList.remove('cabecalho__esconde');
    } else {
        navegacao.classList.add('cabecalho__esconde');
    }
}

const botaoVerMais = document.querySelector('.projetos__ver-mais');
const projetos = document.querySelectorAll('[data-projeto]');

botaoVerMais.addEventListener('click', () => {
    if(botaoVerMais.textContent === 'Ver Mais') {
        botaoVerMais.textContent = 'Ver Menos';
    } else if(botaoVerMais.textContent === 'See More') {
        botaoVerMais.textContent = 'See Less';
    } else if(botaoVerMais.textContent === 'Ver Menos') {
        botaoVerMais.textContent = 'Ver Mais';
    } else if(botaoVerMais.textContent === 'See Less') {
        botaoVerMais.textContent = 'See More';
    }
    mostraMaisProjetos();
})

function mostraMaisProjetos() {
    projetos.forEach( (elemento) => {
        if(elemento.classList.length == 2) {
            if(elemento.dataset.projeto == 'celular') {
                elemento.classList.remove('esconde-celular');
            } else {
                elemento.classList.remove('esconde-tablet');
            }
        
        } else {
            if(elemento.dataset.projeto == 'celular') {
                elemento.classList.add('esconde-celular');  
            } else {
                elemento.classList.add('esconde-tablet');
            }
        }
    });
}

const botaoIdioma = document.querySelector('.botao-idioma');

botaoIdioma.addEventListener('click', () => {
    if(botaoIdioma.dataset.idioma == 'pt-br') {
        botaoIdioma.innerHTML = 'Language: ';
        let img = document.createElement('img');
        img.setAttribute('alt', 'Language EN-US');
        img.setAttribute('src', 'assets/icon/usa.png');
        img.setAttribute('class', 'botao-idioma-imagem');

        botaoIdioma.dataset.idioma = 'en-us';
    
        botaoIdioma.appendChild(img);
        botaoIdioma.classList.remove('botao-idioma--brasil');
        botaoIdioma.classList.add('botao-idioma--usa');
        traduzirSite('en-us');
    } else {
        botaoIdioma.innerHTML = 'Idioma: ';
        let img = document.createElement('img');
        img.setAttribute('alt', 'Idioma PT-BR');
        img.setAttribute('src', 'assets/icon/brasil.png');
        img.setAttribute('class', 'botao-idioma-imagem');

        botaoIdioma.dataset.idioma = 'pt-br';
    
        botaoIdioma.appendChild(img);
        botaoIdioma.classList.remove('botao-idioma--usa');
        botaoIdioma.classList.add('botao-idioma--brasil');
        traduzirSite('pt-br');
    }
});
