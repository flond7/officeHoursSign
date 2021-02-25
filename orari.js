/* 
Il sistema è settato per uno slider con tre pagine/slide. 
Per aggiungerne una creare nell'html un div con id "pageFour", 
Nel js aggiungere una nuova funzione, fadeOutFour in cui far sparire
pageFour e comparire il pageOne. 

Modificare la funzione fadeOutThree perchè a comparire sia pageFour
e non pageOne.

If you need to add other pages
1 - add a var with the page name as getElementById
2 - add a display none to the new page
3 - add the var to the page array


*/

const timeDelay = 18000;    // how long the page stays visible, in ms
const timeTransition = 800; // transition time
const timeFrame = (timeDelay - timeTransition) / 100;

var width = 0;              // loading bar initial width
var loadingInterval;

var hightlightTime = 6000;  // how long notices are highlighted
var i = 1;                  // start with one to simplify if else cycle for notices

var pages = [];
var j = 1;

window.onload = function () {

    var pageOne = document.getElementById("pageOne");
    var pageTwo = document.getElementById("pageTwo");
    var pageThree = document.getElementById("pageThree");
    /* if you add other pages add the getElementById here */

    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    /* if you add other pages add the display: none here */

    pages = [pageOne, pageTwo, pageThree];
    /* if you add other page add the name in the array above */

    fade();
    highlight();
};

function fade() {
    setTimeout(function () {
        if (j < pages.length) {
            pages[j - 1].classList.remove("animate__fadeIn");
            pages[j - 1].style.display = "none";
            pages[j].classList.add("animate__fadeIn");
            pages[j].style.display = "block";
            j++;
        } else {
            j = 0;
            let n = pages.length - 1;
            pages[n].classList.remove("animate__fadeIn");
            pages[n].style.display = "none";
            pages[j].classList.add("animate__fadeIn");
            pages[j].style.display = "block";
            j++;
        };
        loadingInterval = setInterval(loadBar, timeFrame);
        fade();
    }, timeDelay);
}

function fade_e() {
    loadingInterval = setInterval(loadBar, timeFrame);
    setTimeout(function () {
        if (j >= pages.length) {
            j = 0;
            currentPage = pages[j];
            previousPage = pages[pages.length - 1];
        } else {
            currentPage = pages[j];
            previousPage = pages[j - 1];
        }
        previousPage.classList.remove("animate__fadeIn");
        previousPage.style.display = "none";
        currentPage.classList.add("animate__fadeIn");
        currentPage.style.display = "block";
        j++;
        fade();
    }, timeDelay);
}

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
    }, hightlightTime);
}