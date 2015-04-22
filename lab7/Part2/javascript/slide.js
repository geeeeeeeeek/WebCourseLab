// JavaScript Document
var numSlides = 0;
var currentSlide = 0;
function initializeSlideShow(n) {
    numSlides = n;
    showSlide(currentSlide, true);
}
function displaySlide(n) {
    showSlide(currentSlide, false);
    currentSlide = n;
    showSlide(currentSlide, true);
}
function showSlide(n, display) {
    var slide = document.getElementById("slide" + n).style;
    if (display) slide.display = "block";
    else slide.display = "none";
}
function goFirst() {
    //"first"按钮做了什么
    if (currentSlide != 0) {
        displaySlide(0)
    }
}
function goLast() {
    //"last"按钮做了什么
    if (currentSlide != 8) {
        displaySlide(8);
    }
}
function goNext() {
    //"next"按钮做了什么
    if (currentSlide != 8) {
        displaySlide(currentSlide + 1);
    }
}
function goPrevious() {
    //"previous"按钮做了什么
    if (currentSlide != 0) {
        displaySlide(currentSlide - 1);
    }
}