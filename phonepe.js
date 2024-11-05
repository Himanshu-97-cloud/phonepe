const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showImage() {
    const offset = -index * 100; 
    slides.style.transform = `translateX(${offset}%)`; 
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active'); 
}

function showNextImage() {
    index = (index + 1) % images.length; 
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`; 
}


setInterval(showNextImage, 5000);

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        index = parseInt(dot.dataset.index); 
        showImage(); 
    });
});

