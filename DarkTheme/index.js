const slider = document.getElementById('checkbox');
const body = Array.from(document.getElementsByTagName('body'))[0];

slider.addEventListener('click', () => {
    console.log(body);
    body.classList.toggle('light-mode');
});
