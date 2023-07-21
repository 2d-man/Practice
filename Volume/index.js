const volume = Array.from(document.querySelectorAll('.volume-rect'));
const down = document.getElementsByClassName('volume-down')[0];
const up = document.getElementsByClassName('volume-up')[0];
const indicator = document.querySelector('.indicator');
let counter = 0;

up.addEventListener('click', () => {
    if(counter < 10) {
        counter++;
        indicator.textContent++;
        volume[counter-1].classList.add('volume-rect__active');
    }
});

down.addEventListener('click', () => {
    if(indicator.textContent > 0) {
        counter--;
        indicator.textContent--;
        volume[counter].classList.remove('volume-rect__active');
    }
});

