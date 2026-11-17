
// Identifica a página atual
const paginaAtual = window.location.pathname.split("/").pop();

// Seleciona todos os links do menu
const links = document.querySelectorAll(".menu a");

// Destaca a página que está aberta
links.forEach((link) => {

    const destino = link.getAttribute("href");

    if (destino === paginaAtual) {
        link.classList.add("ativo");
    }

});
