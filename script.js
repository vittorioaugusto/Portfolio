AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar_links a');
    const toggleButton = document.querySelector('.toggle_button');
    const navbarLinks = document.querySelector('.navbar_links');
    const navLinks = document.querySelectorAll('.navbar_links a');

    let isMenuOpen = false;

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

    toggleButton.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;
        navbarLinks.classList.toggle('active', isMenuOpen);

        if (isMenuOpen) {
            toggleButton.innerHTML = '&#10005;';
        } else {
            toggleButton.innerHTML = '&#9776;';
        }

        toggleButton.classList.toggle('clicked');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarLinks.classList.remove('active');
            isMenuOpen = false;
            toggleButton.innerHTML = '&#9776;';
            toggleButton.classList.remove('clicked');
        });
    });
});


function changeColor(link) {
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function (element) {
        element.classList.remove('active');
    });

    link.classList.add('active');
}


function highlightOnScroll() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    document.querySelectorAll('.nav-link').forEach(function (link) {
        var targetId = link.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);

        if (targetSection) {
            var offsetTop = targetSection.offsetTop;
            var offsetBottom = offsetTop + targetSection.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}


function showPage(pageNumber) {
    var allSections = document.querySelectorAll('.page');
    allSections.forEach(function (div) {
        if (!div.classList.contains('contact-me')) {
            if (typeof AOS !== 'undefined' && AOS.init) {
                AOS.refreshHard();
            }
            div.style.display = 'none';
        }
    });

    // Mostra a seção da página selecionada
    var selectedSection = document.querySelector('.pag-' + pageNumber);
    if (selectedSection) {
        if (!selectedSection.classList.contains('contact-me')) {
            selectedSection.style.display = 'block';
        }
    }
}


window.addEventListener('scroll', highlightOnScroll);

window.addEventListener('load', highlightOnScroll);
