let botao = document.getElementById("botaoTema");
let icone = document.getElementById("iconeTema");
let textoBotao = document.getElementById("textoBotao");
let tituloPrincipal = document.getElementById("tituloPrincipal");
let mensagem = document.getElementById("mensagem");
let textoRodape = document.getElementById("textoRodape");

let titulos = document.querySelectorAll(".card h3");
let descricoes = document.querySelectorAll(".card p");
let precos = document.querySelectorAll(".card .preco");
let imagensCards = document.querySelectorAll(".card .verso img");
let horarios = document.querySelectorAll("#secao-horarios p");

botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        icone.innerHTML = "☀";
        textoBotao.textContent = "Modo Cafeteria";
        tituloPrincipal.textContent = "Neon Nexus Fliperama";
        mensagem.textContent = "Ambiente: Modo Arcade";
        textoRodape.textContent = "Neon Nexus Fliperama - 2026";

        titulos.item(0).textContent = "Soda Neon";
        descricoes.item(0).textContent = "Refrigerante artesanal de limão com abacaxi fermentado naturalmente e xarope de frutas vermelhas.";
        precos.item(0).textContent = "R$ 18,00";
        imagensCards.item(0).src = "img/img.4.jpg";

        titulos.item(1).textContent = "Mule Overdrive";
        descricoes.item(1).textContent = "O clássico da caneca trincando com espuma de gengibre e limão para dar um gás entre uma partida e outra.";
        precos.item(1).textContent = "R$ 24,00";
        imagensCards.item(1).src = "img/img.5.jpg";

        titulos.item(2).textContent = "Paradise Turbo";
        descricoes.item(2).textContent = "Mistura tropical refrescante de frutas cítricas com toque doce para nunca parar de jogar.";
        precos.item(2).textContent = "R$ 26,00";
        imagensCards.item(2).src = "img/img.6.jpg";

        horarios.item(0).innerHTML = "<strong>Terça a Quinta:</strong> 19h às 00h";
        horarios.item(1).innerHTML = "<strong>Sexta a Domingo:</strong> 18h às 02h";
        horarios.item(2).innerHTML = "<strong>Entrada:</strong> Gratuita (atendimento apenas presencial)";
    } else {
        icone.innerHTML = "☾";
        textoBotao.textContent = "Modo Arcade";
        tituloPrincipal.textContent = "Neon Nexus Café";
        mensagem.textContent = "Ambiente: Modo Cafeteria";
        textoRodape.textContent = "Neon Nexus Café - 2026";

        titulos.item(0).textContent = "Expresso 1-UP";
        descricoes.item(0).textContent = "Café expresso duplo intenso com raspas de canela.";
        precos.item(0).textContent = "R$ 10,00";
        imagensCards.item(0).src = "img/img.1.jpg";

        titulos.item(1).textContent = "Cappuccino Pixel";
        descricoes.item(1).textContent = "Café expresso cremoso com leite vaporizado e cacau em pó.";
        precos.item(1).textContent = "R$ 14,00";
        imagensCards.item(1).src = "img/img.2.jpg";

        titulos.item(2).textContent = "Mocha Final Boss";
        descricoes.item(2).textContent = "Café cremoso com calda de chocolate meio amargo e chantilly.";
        precos.item(2).textContent = "R$ 16,00";
        imagensCards.item(2).src = "img/img.3.jpg";

        horarios.item(0).innerHTML = "<strong>Segunda a Quinta:</strong> 09h às 19h";
        horarios.item(1).innerHTML = "<strong>Sexta a Domingo:</strong> 14h às 18h";
        horarios.item(2).innerHTML = "<strong>Entrada:</strong> Gratuita (atendimento apenas presencial)";
    }
});

let botaoFicha = document.getElementById("botaoFicha");
let campoEmail = document.getElementById("campoEmail");
let mensagemFicha = document.getElementById("mensagemFicha");

botaoFicha.addEventListener("click", function() {
    let email = campoEmail.value;

    if (email === "" || !email.includes("@")) {
        mensagemFicha.textContent = "Por favor, digite um e-mail válido.";
    } else {
        mensagemFicha.textContent = "Voucher de 1 ficha gratuita enviado para: " + email;
        campoEmail.value = "";
    }
});

let links = document.querySelectorAll(".link-menu");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        let idDestino = link.getAttribute("href").replace("#", "");
        let area = document.getElementById(idDestino);

        area.classList.add("destaque");

        setTimeout(function() {
            area.classList.remove("destaque");
        }, 2000);
    });
});

let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("virado");
    });
});
