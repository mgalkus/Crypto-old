console.log('crypto app');
const sections = document.querySelectorAll('section');
const points = document.querySelectorAll('.navigation .point');
const btn = document.querySelector('.menu');
const menu = document.querySelector('header nav');
const body = document.querySelector('body');

// paspaudus ant meniu mygtuko, nav'as prisitaikys mobiliai versijai ir negalima bus skrolint per uz ji esancias bet nematomas sekcijas:
btn.addEventListener('click', () => {
    menu.classList.toggle('active-menu');
    body.classList.toggle('no-scroll')
});

// einant per sekcijas, rutuliukai kairej patamses:
window.addEventListener('scroll', () => {
    sections.forEach((section, i) => {
        if (window.innerHeight / 2 + window.scrollY > section.offsetTop) {
            // nuimam visiem point klase active
            points.forEach((point) => point.classList.remove('active'));
            // i point'ui  uzdedam klase active
            points[i].classList.add('active')
        }
    })
});

// paspaudus ant rutuliuku, bus pereita i ta sekcija:
points.forEach((point, i) => {
    point.addEventListener('click', () => {
        window.scrollTo(0, sections[i].offsetTop)
    })
});