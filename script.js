AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar_links a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Adiciona um evento de clique para o ícone do hamburger
document.querySelector(".hamburger").addEventListener("click", function() {
    // Alterna a classe "show-menu" na container
    document.querySelector(".container").classList.toggle("show-menu");
});
