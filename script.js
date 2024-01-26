AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar_links a');
    const toggleButton = document.querySelector('.toggle_button');
    const navbarLinks = document.querySelector('.navbar_links');
    const navLinks = document.querySelectorAll('.navbar_links a');
    
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
        navbarLinks.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarLinks.classList.remove('active');
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

window.addEventListener('scroll', highlightOnScroll);

window.addEventListener('load', highlightOnScroll);
