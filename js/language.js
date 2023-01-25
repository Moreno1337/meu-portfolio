const traducoes = {
    navETitulos: {
        projetos: 'Projects',
        sobreMim: 'About Me',
        contato: 'Contact',
    },
    destaque: {
        texto: 'Well structured, responsive and agile building of websites. Focused in constant progress and growth, seeking to learn and to keep myself always updated, so that I can take the projects in which I work on towards continuous success.',
    },
    projetos: {
        privatecode: {
            titulo: 'Order Screen',
            descricao: 'PrivateCode company challenge - Dinamic order screen for a pizza place, using HTML, CSS and JavaScript.',
        },
        spotify: {
            titulo: 'Spotify LP',
            descricao: 'Recriation of the Spotify BR Landing Page, using the oficial site as visual reference.',
        },
        hzc: {
            titulo: 'HZC',
            descricao: 'CSS Flexbox and Grid layout focused project.',
        },
        vandecosPizzaria: {
            titulo: "Vandeco's Pizzaria",
            descricao: 'Personal project of a fictional local pizza place, using HTML and CSS.',
        },
        robotron: {
            titulo: 'Robotron 2000',
            descricao: 'JavaScript project with DOM manipulation focus.',
        },
        emBreve: {
            titulo: 'Coming Soon!',
            descricao: 'A project will be added here soon.'
        },
        verProjeto: 'see project',
    },
    sobreMim: {
        texto: 'Within the various ramifications present in the programming world, I turned myself towards the front-end development. From there on, I started to deeply study the main technologies utilized, seeking to gain the competences necessary to become a developer. Currently, I already have acquired a lot of knowledge and I keep, constantly, studying more, always improving my skills and not settling down.',
        curriculo: 'Curriculum',
        html: 'Well structured websites construction',
        css: 'Beautiful and responsive design',
        javascript: 'Bringing life to the website',
    },
    rodape: {
        copyright: '&copy; 2022 João Moreno Portfolio - All rights reserved | Developed by <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-moreno-9ab40b176/" target="_blank" rel="noopener noreferral" class="rodape__link">João Moreno</a>',
    }
};
const portugues = {
    navETitulos: {
        projetos: 'Projetos',
        sobreMim: 'Sobre Mim',
        contato: 'Contato',
    },
    destaque: {
        texto: 'Construção de sites bem estruturados e responsivos com agilidade. Focado no progresso e crescimento constante, buscando aprender e manter-se sempre atualizado para levar os projetos em que estiver envolvido ao constante e contínuo sucesso.',
    },
    projetos: {
        privatecode: {
            titulo: 'Tela de Pedidos',
            descricao: 'Desafio da empresa PrivateCode - Tela de pedidos dinâmica de uma pizzaria, utilizando HTML, CSS e JavaScript.',
        },
        spotify: {
            titulo: 'LP do Spotify',
            descricao: 'Recriação da Landing Page do Spotify BR, usando o site oficial como base visual.',
        },
        hzc: {
            titulo: 'HZC',
            descricao: 'Projeto com foco em utilização de CSS Flexbox e Grid layout.',
        },
        vandecosPizzaria: {
            titulo: "Vandeco's Pizzaria",
            descricao: 'Projeto pessoal, utilizando HTML e CSS, de um site para uma pizzaria local fictícia.',
        },
        robotron: {
            titulo: 'Robotron 2000',
            descricao: 'Projeto JavaScript com foco em manipulação do DOM.',
        },
        emBreve: {
            titulo: 'Em Breve!',
            descricao: 'Um projeto será adicionado aqui em breve.',
        },
        verProjeto: 'ver projeto',
    },
    sobreMim: {
        texto: 'Dentro das variadas ramificações presentes no mundo da programação, eu me tornei para o lado do desenvolvimento front-end. A partir daí, passei a estudar profundamente as principais tecnologias utilizadas, buscando adquirir as competências necessárias para me tornar um desenvolvedor. Atualmente, já adquiri bastante conhecimento e continuo constantemente estudando mais, sempre aprimorando minhas habilidades e sabendo que sempre há mais para ser aprendido.',
        curriculo: 'Currículo',
        html: 'Construção de websites bem estruturados',
        css: 'Design trabalhado e responsivo',
        javascript: 'Trazendo vida ao site',
    },
    rodape: {
        copyright: '&copy; 2022 Portfólio João Moreno - Todos os direitos reservados | Desenvolvido por <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-moreno-9ab40b176/" target="_blank" rel="noopener noreferral" class="rodape__link">João Moreno</a>',
    },
};

const navegacaoLinks = document.querySelectorAll('.cabecalho__link');
const textoDestaque = document.querySelector('.destaque__texto');
const tituloDasSecoes = document.querySelectorAll('.titulo--secao');
const conteudoProjetos = document.querySelectorAll('[data-projetos]');
const textoSobreMim = document.querySelector('.sobre-mim__texto');
const curriculo = document.querySelector('.sobre-mim__curriculo');
const descricaoSkillsSobreMim = document.querySelectorAll('.sobre-mim__skills-descricao');
const copyright = document.querySelector('.rodape__copyright');

function traducaoNavETitulos(domElement, idioma) {
    domElement.forEach( (element) => {
        if(idioma === 'en-us') {
            if(element.innerHTML == 'Projetos') {
                element.innerHTML = traducoes.navETitulos.projetos;
            } else if(element.innerHTML == 'Sobre Mim') {
                element.innerHTML = traducoes.navETitulos.sobreMim;
            } else if(element.innerHTML == 'Contato') {
                element.innerHTML = traducoes.navETitulos.contato;
            }
        } else if(idioma === 'pt-br') {
            if(element.innerHTML == 'Projects') {
                element.innerHTML = portugues.navETitulos.projetos;
            } else if(element.innerHTML == 'About Me') {
                element.innerHTML = portugues.navETitulos.sobreMim;
            } else if(element.innerHTML == 'Contact') {
                element.innerHTML = portugues.navETitulos.contato;
            }
        }
    });
}

function traduzirSite(idioma) {
    traducaoNavETitulos(navegacaoLinks, idioma);
    traducaoNavETitulos(tituloDasSecoes, idioma);

    if(idioma === 'en-us') {
        textoDestaque.innerHTML = traducoes.destaque.texto;
        
        conteudoProjetos.forEach( (projeto) => {
            projeto.parentNode.children[1].innerHTML = traducoes.projetos.verProjeto;
        
            if(projeto.dataset.projetos == 'privatecode') {
                projeto.children[1].innerHTML = traducoes.projetos.privatecode.titulo;
                projeto.children[2].innerHTML = traducoes.projetos.privatecode.descricao;
            } else if(projeto.dataset.projetos == 'spotify') {
                projeto.children[1].innerHTML = traducoes.projetos.spotify.titulo;
                projeto.children[2].innerHTML = traducoes.projetos.spotify.descricao;
            } else if(projeto.dataset.projetos == 'hzc') {
                projeto.children[2].innerHTML = traducoes.projetos.hzc.descricao;
            } else if(projeto.dataset.projetos == 'vandecosPizzaria') {
                projeto.children[2].innerHTML = traducoes.projetos.vandecosPizzaria.descricao;
            } else if(projeto.dataset.projetos == 'robotron') {
                projeto.children[2].innerHTML = traducoes.projetos.robotron.descricao;
            } else if(projeto.dataset.projetos == 'emBreve') {
                projeto.children[0].children[0].innerHTML = traducoes.projetos.emBreve.titulo;
                projeto.children[1].innerHTML = traducoes.projetos.emBreve.titulo;
                projeto.children[2].innerHTML = traducoes.projetos.emBreve.descricao;
            }
        });
        
        textoSobreMim.innerHTML = traducoes.sobreMim.texto;
        curriculo.innerHTML = traducoes.sobreMim.curriculo;
        
        descricaoSkillsSobreMim.forEach( (descricao) => {
            if(descricao.previousElementSibling.innerHTML == 'HTML 5') {
                descricao.innerHTML = traducoes.sobreMim.html;
            } else if(descricao.previousElementSibling.innerHTML == 'CSS 3') {
                descricao.innerHTML = traducoes.sobreMim.css;
            } else if(descricao.previousElementSibling.innerHTML == 'JavaScript') {
                descricao.innerHTML = traducoes.sobreMim.javascript;
            }
        });
        
        copyright.innerHTML = traducoes.rodape.copyright;
        if(botaoVerMais.innerHTML == 'Ver Mais') {
            botaoVerMais.innerHTML = 'See More';
        } else {
            botaoVerMais.innerHTML = 'See Less';
        }
    } else if(idioma === 'pt-br') {
        textoDestaque.innerHTML = portugues.destaque.texto;

        conteudoProjetos.forEach( (projeto) => {
            projeto.parentNode.children[1].innerHTML = portugues.projetos.verProjeto;
        
            if(projeto.dataset.projetos == 'privatecode') {
                projeto.children[1].innerHTML = portugues.projetos.privatecode.titulo;
                projeto.children[2].innerHTML = portugues.projetos.privatecode.descricao;
            } else if(projeto.dataset.projetos == 'spotify') {
                projeto.children[1].innerHTML = portugues.projetos.spotify.titulo;
                projeto.children[2].innerHTML = portugues.projetos.spotify.descricao;
            } else if(projeto.dataset.projetos == 'hzc') {
                projeto.children[2].innerHTML = portugues.projetos.hzc.descricao;
            } else if(projeto.dataset.projetos == 'vandecosPizzaria') {
                projeto.children[2].innerHTML = portugues.projetos.vandecosPizzaria.descricao;
            } else if(projeto.dataset.projetos == 'robotron') {
                projeto.children[2].innerHTML = portugues.projetos.robotron.descricao;
            } else if(projeto.dataset.projetos == 'emBreve') {
                projeto.children[0].children[0].innerHTML = portugues.projetos.emBreve.titulo;
                projeto.children[1].innerHTML = portugues.projetos.emBreve.titulo;
                projeto.children[2].innerHTML = portugues.projetos.emBreve.descricao;
            }
        });

        textoSobreMim.innerHTML = portugues.sobreMim.texto;
        curriculo.innerHTML = portugues.sobreMim.curriculo;

        descricaoSkillsSobreMim.forEach( (descricao) => {
            if(descricao.previousElementSibling.innerHTML == 'HTML 5') {
                descricao.innerHTML = portugues.sobreMim.html;
            } else if(descricao.previousElementSibling.innerHTML == 'CSS 3') {
                descricao.innerHTML = portugues.sobreMim.css;
            } else if(descricao.previousElementSibling.innerHTML == 'JavaScript') {
                descricao.innerHTML = portugues.sobreMim.javascript;
            }
        });

        copyright.innerHTML = portugues.rodape.copyright;

        if(botaoVerMais.innerHTML == 'See More') {
            botaoVerMais.innerHTML = 'Ver Mais';
        } else {
            botaoVerMais.innerHTML = 'Ver Menos';
        }
    }
    
}

