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

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')

const prevEl = document.querySelector('.prev')

const nextEl = document.querySelector('.next')

/* Print all images into the dom */
// loop over the slides 

for (const key in slides) {

    console.log("key", key);
    const slidePath = slides[key].path;
    console.log("slidepath", slidePath);

    const slideMarkup = `<img class="${activeSlide == key ? 'active' : ''}" src="${slidePath}" alt="">`;
    console.log("slide markup", slideMarkup);

    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup);
};


/* for (let i = 0; i < slides.length; i++) {

    const slidePath = slides[i];
    console.log(slidePath);

    // TERNARY OPERATOR

    // if(condition) {
    // // code to run
    // } else {
    // // code to run
    // }

    // // with ternary operator

    // condition ? 'code to run' : 'code to run'


    //for each slide we create a markup element. if activeSlide is === i it has the active class. This make the code show the first image as for now activeSlide = 0. the other images will be printed on the markup without the "active" class.    
    const slideMarkup = `<img class="${activeSlide === i ? 'active' : ''}" src="${slidePath}" alt="">`

    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

} */

/* 
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);

/* 
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
*/

/* 
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
*/

//select thumbnails DOM elements
const thumbsElement = document.querySelector('.thumbnails')

//Loops over the thumbs and prints them on the DOM
for (const key in slides) {

    console.log("key", key);
    const thumbPath = slides[key].path;
    console.log("slidepath", thumbPath);

    const thumbMarkup = `<img class="${activeSlide == key ? 'active' : ''}" src="${thumbPath}" alt="">`;
    console.log("slide markup", thumbPath);

    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup);
};

/* for (let i = 0; i < slides.length; i++) {

    //The thumb path is the same as the slides
    const thumbPath = slides[i];

    //for each thumbnail we create a markup element. if activeSlide is === i it has the active class. This make the code show the first image as for now activeSlide = 0. the other images will be printed on the markup without the "active" class.
    const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath}" alt="">`

    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)

} */

// intercept click on the next icon 
nextEl.addEventListener('click', function () {
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

})

console.log("activeSlide = ", activeSlide);

// intercept click on the prev icon
prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');

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
    if (activeSlide === 0) {

        activeSlide = slidesImages.length - 1

    } else {

        // decrement the activeSlide of 1
        activeSlide--
        console.log("activeSlide = ", activeSlide);

    }

    // after the if/else block, activeSlide has is value changed. we select again the slide with the new value to add the active class
    const nextSlide = slidesImages[activeSlide]
    console.log("nextSlide = ", nextSlide);

    // add the active class to the next slide
    nextSlide.classList.add('active')

    // select the next thumb to show
    const nextThumb = document.querySelectorAll('.thumbnails img')[activeSlide];
    console.log("nextThumb = ", nextThumb);

    // add to the next thumb the active class
    nextThumb.classList.add('active')

})

