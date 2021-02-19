/* 
Il sistema è settato per uno slider con tre pagine/slide. 
Per aggiungerne una creare nell'html un div con id "pageFour", 
Nel js aggiungere una nuova funzione, fadeOutFour in cui far sparire
pageFour e comparire il pageOne. 

Modificare la funzione fadeOutThree perchè a comparire sia pageFour
e non pageOne.

*/

// tempo in cui la slide orari rimane visibile, in ms
const timeDelay = 12000;
// tempo di aggiornamento della loading bar
const timeTransition = 800;
const timeFrame = (timeDelay - timeTransition) / 100;
// width iniziale per la loading bar
var width = 0;
var loadingInterval;

window.onload = function () {
    var pageOne = document.getElementById("pageOne");
    var pageTwo = document.getElementById("pageTwo");
    var pageThree = document.getElementById("pageThree");
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    //loadingInterval = setInterval(loadBar, timeFrame);
    fadeOutThree();
};

function fadeOutOne() {
    setTimeout(function () {
        pageOne.classList.remove("animate__fadeIn");
        pageOne.style.display = "none";
        pageTwo.classList.add("animate__fadeIn");
        pageTwo.style.display = "block";
        fadeOutTwo();
        loadingInterval = setInterval(loadBar, timeFrame);
        //console.log("fun 1 "+loadingInterval);
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
        //console.log("fun 2 "+loadingInterval);
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
        //console.log("fun 3 "+loadingInterval);
    }, timeDelay);
}

function loadBar() {
    var loading = document.getElementById("loading-bar");
    if (width >= 100) {
        width = 0;
        clearInterval(loadingInterval);
        //console.log("loadbar "+loadingInterval);
    } else {
        width++;
        loading.style.width = width + "%";
    }
}