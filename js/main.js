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
const projetos = document.querySelectorAll('[data-projeto]')

botaoVerMais.addEventListener('click', () => {
    if(botaoVerMais.textContent === 'Ver Mais') {
        botaoVerMais.textContent = 'Ver Menos';
    } else {
        botaoVerMais.textContent = 'Ver Mais';
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
