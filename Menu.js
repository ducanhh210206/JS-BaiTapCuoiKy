function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

const menudetailsSection = document.querySelector('.menu-details');
    const backToTopBtn = document.querySelector('.back-to-top');

    menudetailsSection.addEventListener('scroll', () => {
        if (menudetailsSection.scrollTop > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    function scrollToTop() {
        menudetailsSection.scrollTo({ top: 0, behavior: 'smooth' });
    }

document.addEventListener('DOMContentLoaded', showSlides);

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
});