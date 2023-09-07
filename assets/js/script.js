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
        path: './assets/img/01.webp',
        // status: "active",
    },

    {
        path: './assets/img/02.webp',
        // status: "active",
    },

    {
        path: './assets/img/03.webp',
        // status: "active",
    },

    {
        path: './assets/img/04.webp',
        // status: "active",
    },

    {
        path: './assets/img/05.webp',
        // status: "active",
    }

]

let activeSlide = 0;
let direction = "";

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images');

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

//select thumbnails DOM elements
const thumbsElement = document.querySelector('.thumbnails');

//Loops over the thumbs and prints them on the DOM
for (const key in slides) {

    const thumbPath = slides[key].path;
    console.log("thumbpath = chiave", key, "valore", thumbPath);

    const thumbMarkup = `<img class="${activeSlide == key ? 'active' : ''}" src="${thumbPath}" alt="">`;
    console.log("thumb markup", thumbMarkup);

    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup);
};

// intercept click on the next icon 
nextEl.addEventListener('click', sliderControl

    /* function () {
        console.log('cliccato su next');
    
        // select the current slide
        const currentSlide = slidesImages[activeSlide]
        console.log("currentSlide = ", currentSlide);
    
        // remove the active class from the current slide
        currentSlide.classList.remove('active')
    
        // select the active thumb
        const currentThumb = document.querySelector('.thumbnails > img.active')
        console.log("currentThumb = ", currentThumb);
    
        // remove the active class from the active thumb
        currentThumb.classList.remove('active');
    
        //after we remove the acrive class from the images we increment the activeSlide value by 1
        if (activeSlide === slidesImages.length - 1) {
            activeSlide = 0
    
        } else {
    
            // increment the activeSlide of 1
            activeSlide++
            console.log("activeSlide = ", activeSlide);
    
        }
    
        // after the if/else block, activeSlide has is value changed. we select again the slide with the new value to add the active class
        const nextSlide = slidesImages[activeSlide]
        console.log("nextSlide = ", nextSlide);
    
        // add the active class to the next slide
        nextSlide.classList.add('active');
    
        // select the next thumb
        const nextThumb = document.querySelectorAll('.thumbnails img')[activeSlide];
        console.log("nextThumb = ", nextThumb);
    
        // add to the next thumb the active class
        nextThumb.classList.add('active');
    
    } */

);

function sliderControl() {

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
    if (activeSlide === slidesImages.length - 1) {
        activeSlide = 0;

    } else {
        // increment the activeSlide of 1
        activeSlide++;
    }

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

// intercept click on the prev icon
prevEl.addEventListener('click', () => {

    // console.log('cliccato su prev');

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
    if (activeSlide === 0) {

        activeSlide = slidesImages.length - 1

    } else {

        // decrement the activeSlide of 1
        activeSlide--
        console.log("activeSlide = ", activeSlide);

    };

    // after the if/else block, activeSlide has is value changed. we select again the slide with the new value to add the active class
    const nextSlide = slidesImages[activeSlide];
    console.log("nextSlide = ", nextSlide);

    // add the active class to the next slide
    nextSlide.classList.add('active');

    // select the next thumb to show
    const nextThumb = document.querySelectorAll('.thumbnails img')[activeSlide];
    console.log("nextThumb = ", nextThumb);

    // add to the next thumb the active class
    nextThumb.classList.add('active');

})

