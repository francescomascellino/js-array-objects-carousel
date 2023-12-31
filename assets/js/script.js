/* Consegna:
Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo :gatto_che_urla:, questa volta usando gli oggetti.
:boolean-hug: Potete prendere come riferimento il codice scritto insieme nel live, che troverete direttamente nella mia repository di github a questo link: [https://github.com/fabiopacifici/104_js/tree/main/live_slider]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello? */

/* Define the slides list */
/* const slides = [
    './assets/img/01.webp', //0
    './assets/img/02.webp', //1
    './assets/img/03.webp', //etc
    './assets/img/04.webp',
    './assets/img/05.webp',
] */

const slides = [
    {
        path: 'https://picsum.photos/800/800?random=1',

    },

    {
        path: 'https://picsum.photos/800/800?random=2',

    },

    {
        path: 'https://picsum.photos/800/800?random=3',

    },

    {
        path: 'https://picsum.photos/800/800?random=4',

    },

    {
        path: 'https://picsum.photos/800/800?random=5',

    }

]

let activeSlide = 0;
let direction = "";
let looper;
let sliderSpeed = 1500;

// select the dom elements
const stopCarousel = document.getElementById("stop");
const backwardCarousel = document.getElementById("backward");
const forwardCarousel = document.getElementById("forward");
const sliderImagesEl = document.querySelector('.slider .images');
const thumbsElement = document.querySelector('.thumbnails');
const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');

/* Print all images into the dom */
// for in loop over the slides
for (const key in slides) {

    const slidePath = slides[key].path;
    console.log("slidepath = chiave:", key, "valore:", slidePath);

    const slideMarkup = `<img class="${activeSlide == key ? 'active' : ''}" src="${slidePath}" alt="">`;
    console.log("slide markup", slideMarkup);

    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup);
};


//CRATE IMG ARRAY
const slidesImages = document.querySelectorAll('.slider .images > img');
console.log("slider images =", slidesImages);

//Loops over the thumbs and prints them on the DOM
for (const key in slides) {

    const thumbPath = slides[key].path;
    console.log("thumbpath = chiave", key, "valore", thumbPath);

    const thumbMarkup = `<img class="${activeSlide == key ? 'active' : ''}" src="${thumbPath}" alt="">`;
    console.log("thumb markup", thumbMarkup);

    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup);
};

function sliderControl(direction) {

    // select the current slide
    const currentSlide = slidesImages[activeSlide];
    console.log("currentSlide = ", currentSlide);

    // remove the active class from the current slide
    currentSlide.classList.remove('active');

    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active');
    console.log("currentThumb = ", currentThumb);

    // remove the active class from the active thumb
    currentThumb.classList.remove('active');

    //after we remove the acrive class from the images we increment the activeSlide value by 1    
    if (direction == "next") {

        // increment the activeSlide of 1
        if (activeSlide === slidesImages.length - 1) {
            activeSlide = 0;
        } else {
            activeSlide++;
        }

    } else if (direction == "prev") {

        // increment the activeSlide of 1
        if (activeSlide == 0) {
            activeSlide = slidesImages.length - 1;

        } else {

            activeSlide--;

        }

    }

    console.log("activeSlide =", activeSlide);

    // after the if/else block, activeSlide has is value changed. we select again the slide with the new value to add the active class
    const nextSlide = slidesImages[activeSlide];
    console.log("nextSlide = ", nextSlide);

    // add the active class to the next slide
    nextSlide.classList.add('active');

    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumbnails img')[activeSlide];
    console.log("nextThumb = ", nextThumb);

    // add to the next thumb the active class
    nextThumb.classList.add('active');

    console.log("activeSlide = ", activeSlide);

};

//FERMA IL CAROSELLO
clearInterval(looper);

// intercept click on the next icon 
nextEl.addEventListener('click', () => { sliderControl("next") });

//FERMA IL CAROSELLO SE ATTIVO IL CLICK DI NEXT
nextEl.addEventListener('click', () => { clearInterval(looper) });

// intercept click on the prev icon
prevEl.addEventListener('click', () => { sliderControl("prev") });

//FERMA IL CAROSELLO SE ATTIVO IL CLICK DI PREV
prevEl.addEventListener('click', () => { clearInterval(looper) });

forwardCarousel.addEventListener("click", () => {

    clearInterval(looper);

    direction = "next";

    looper = setInterval(sliderControl, sliderSpeed, direction);
});

stopCarousel.addEventListener("click", () => {

    clearInterval(looper);

});

backwardCarousel.addEventListener("click", () => {

    clearInterval(looper);

    direction = "prev";

    looper = setInterval(sliderControl, sliderSpeed, direction);

});

//CAMBIO DIREZIONE UNICO PULSANTE (POCO PRATICO)
/* changeWay.addEventListener("click", () => {
    changeWay.classList.toggle("forward");
    changeWay.classList.toggle("backward");
    clearInterval(looper);

    if (changeWay.classList.contains("forward")) {


        changeWay.innerHTML = "BACKWARD";
        console.log(direction);
        clearInterval(looper);

        //PER PASSARE PARAMETRI A SET INTERVAL SI PUO' USARE UNA FUNZIONE ANONIMA
        // setInterval(() => { sliderControl("next") }, sliderSpeed);

        //O INSERIRLI DOPO IL TIMER

    }

    if (changeWay.classList.contains("backward")) {
        direction = "prev";
        changeWay.innerHTML = "FORWARD";
        console.log(direction);
        clearInterval(looper);
        looper = setInterval(sliderControl, sliderSpeed, direction);

    }

}) */

//CAROUSEL LOOP UNICA DIREZIONE
/* loop.addEventListener("click", () => {
    loop.classList.toggle("on");
    loop.classList.toggle("off");
    clearInterval(looper);

    if (loop.classList.contains("on")) {

    //PER PASSARE PARAMETRI A SET INTERVAL SI PUO' USARE UNA FUNZIONE ANONIMA
    setInterval(() => { sliderControl("next") }, sliderSpeed);

    //O INSERIRLI DOPO IL TIMER
    looper = setInterval(sliderControl, sliderSpeed, direction);

    loop.innerHTML = "FERMA IL CAROSELLO";
    }

    if (loop.classList.contains("off")) {
    clearInterval(looper);
    loop.innerHTML = "AVVIA IL CAROSELLO";

    }

}
) */