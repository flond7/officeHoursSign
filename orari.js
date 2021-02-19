/* 
Il sistema è settato per uno slider con tre pagine/slide. 
Per aggiungerne una creare nell'html un div con id "pageFour", 
Nel js aggiungere una nuova funzione, fadeOutFour in cui far sparire
pageFour e comparire il pageOne. 

Modificare la funzione fadeOutThree perchè a comparire sia pageFour
e non pageOne.

*/


const timeDelay = 18000;    // tempo in cui la slide orari rimane visibile, in ms
const timeTransition = 800; // tempo di aggiornamento della loading bar
const timeFrame = (timeDelay - timeTransition) / 100;

var width = 0;              // width iniziale per la loading bar
var loadingInterval;

var hightlightTime = 6000;  // tempo in cui l'avviso è evidenziato
var i = 1;                  // 1 per poter semplificare il ciclo if else

window.onload = function () {
    var pageOne = document.getElementById("pageOne");
    var pageTwo = document.getElementById("pageTwo");
    var pageThree = document.getElementById("pageThree");
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    fadeOutThree();
    highlight();
};

function fadeOutOne() {
    setTimeout(function () {
        pageOne.classList.remove("animate__fadeIn");
        pageOne.style.display = "none";
        pageTwo.classList.add("animate__fadeIn");
        pageTwo.style.display = "block";
        fadeOutTwo();
        loadingInterval = setInterval(loadBar, timeFrame);
    }, timeDelay);
}

function fadeOutTwo() {
    setTimeout(function () {
        pageTwo.classList.remove("animate__fadeIn");
        pageTwo.style.display = "none";
        pageThree.classList.add("animate__fadeIn");
        pageThree.style.display = "block";
        fadeOutThree();
        loadingInterval = setInterval(loadBar, timeFrame);
    }, timeDelay);
}

function fadeOutThree() {
    setTimeout(function () {
        pageThree.classList.remove("animate__fadeIn");
        pageThree.style.display = "none";
        pageOne.classList.add("animate__fadeIn");
        pageOne.style.display = "block";
        fadeOutOne();
        loadingInterval = setInterval(loadBar, timeFrame);
    }, timeDelay);
}

function loadBar() {
    var loading = document.getElementById("loading-bar");
    if (width >= 100) {
        width = 0;
        clearInterval(loadingInterval);
    } else {
        width++;
        loading.style.width = width + "%";
    }
}

function highlight() {
    var avvisi = document.getElementsByClassName('avviso');
    setTimeout(function () {
        if (i < avvisi.length) {
            avvisi[i - 1].classList.remove("highlighted");
            avvisi[i].classList.add("highlighted");
            i++;
        } else {
            i = 0;
            let n = avvisi.length - 1;
            avvisi[n].classList.remove("highlighted");
            avvisi[i].classList.add("highlighted");
            i++;
        };
        highlight()
    },hightlightTime);
}