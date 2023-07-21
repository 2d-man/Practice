const stars = Array.from(document.querySelectorAll('.star'));
for(let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', () => {
        console.log(stars[i]);
        for(let j = 0; j <= i; j++) {
            stars[j].classList.toggle('star_active');
        }
    });
}

