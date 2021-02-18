/* 
Il sistema è settato per uno slider con tre pagine/slide. 
Per aggiungerne una creare nell'html un div con id "pageFour", 
Nel js aggiungere una nuova funzione, fadeOutFour in cui far sparire
pageFour e comparire il pageOne. 

Modificare la funzione fadeOutThree perchè a comparire sia pageFour
e non pageOne.

*/

// tempo in cui la slide orari rimane visibile, in ms
const timeDelay = 3000;

window.onload = function () {
    console.log("test");
    var pageOne = document.getElementById("pageOne")
    var pageTwo = document.getElementById("pageTwo")
    var pageThree = document.getElementById("pageThree")
    fadeOutThree();
};
function fadeOutOne() {
    setTimeout(function () {
        pageOne.classList.remove("animate__fadeIn");
        pageOne.style.display = "none";
        pageTwo.classList.add("animate__fadeIn");
        pageTwo.style.display = "block";
        fadeOutTwo();
    }, timeDelay);
}

function fadeOutTwo() {
    setTimeout(function () {
        pageTwo.classList.remove("animate__fadeIn");
        pageTwo.style.display = "none";
        pageThree.classList.add("animate__fadeIn");
        pageThree.style.display = "block";
        fadeOutThree();
    }, timeDelay);
}

function fadeOutThree() {
    setTimeout(function () {
        pageThree.classList.remove("animate__fadeIn");
        pageThree.style.display = "none";
        pageOne.style.display = "block";
        pageOne.classList.add("animate__fadeIn");
        fadeOutOne();
    }, timeDelay);
}