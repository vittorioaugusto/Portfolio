AOS.init();

// Adiciona um evento de clique para cada link do menu
document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", function(event) {
        // Previne o comportamento padrão de clicar no link
        event.preventDefault();

        // Obtém o destino da rolagem a partir do atributo href do link
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Verifica se o elemento alvo existe
        if (targetElement) {
            // Faz a rolagem suave para o elemento alvo
            targetElement.scrollIntoView({
                behavior: "smooth"
            });

            // Fecha o menu removendo a classe "show-menu" da container
            document.querySelector(".container").classList.remove("show-menu");
        }
    });
});

// Adiciona um evento de clique para o ícone do hamburger
document.querySelector(".hamburger").addEventListener("click", function() {
    // Alterna a classe "show-menu" na container
    document.querySelector(".container").classList.toggle("show-menu");
});
