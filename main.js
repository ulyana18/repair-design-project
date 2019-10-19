let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('gallery__photo');
    if (n > slides.length) {
    slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';

    let titles = document.getElementsByClassName('completed-projects__gallery_li');
    for (i = 0; i < titles.length; i++) {
        titles[i].style.color = 'rgba(255, 255, 255, 0.3)';
    }
    titles[slideIndex - 1].style.color = '#E3B873';
}

/////////////////////////////////////

let form = document.querySelector('.main__form');
let body = document.querySelector('.container');

function hide_form() {
    form.style.display = 'none';
}
function show_form() {
    form.style.display = 'block';
}
