const rightSection = document.querySelector('.right');
    const backToTopBtn = document.querySelector('.back-to-top');

    rightSection.addEventListener('scroll', () => {
        if (rightSection.scrollTop > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    function scrollToTop() {
        rightSection.scrollTo({ top: 0, behavior: 'smooth' });
    }


    let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    slideTimer = setTimeout(showSlides, 5000); 
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n;
    showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
});