import './style.scss';

let slideIndex = 1;
let prevButton = document.querySelector('.gallery__prev-btn');
let nextButton = document.querySelector('.gallery__next-btn');
let cities = document.querySelectorAll('.completed-projects__gallery_li');

nextButton.onclick = function() {
    showSlides(slideIndex += 1);
}

prevButton.onclick = function() {
    showSlides(slideIndex -= 1);  
}

for(let i = 0; i < cities.length; i++) {
    cities[i].onclick = function() {
        showSlides(slideIndex = i + 1);
    }
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
let headerForm = document.querySelector('.header__content_form');
let footerForm = document.querySelector('.footer__content_form');
let cross = document.querySelector('.form__cross');

cross.onclick = function() {
    form.style.display = 'none';
}

headerForm.onclick = function() {
    form.style.display = 'block';
}
footerForm.onclick = function() {
    form.style.display = 'block';
}
