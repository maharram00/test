var  mySlider=[
    "photo/slider-4.jpg",
    "photo/slider-5.jpg",
    "photo/slider-6.jpg",

]
var img = document.querySelector("#slider img")
img.src =mySlider[0]
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
var currentSlide=0;
next.onclick = function(){
    currentSlide++;
    if
        (currentSlide >= mySlider.length){
            currentSlide = 0;
        }
    img.src = mySlider[currentSlide]
}
prev.onclick = function( ) {
    currentSlide--;

    if (currentSlide == -1){
        currentSlide = mySlider.length-1;

    }

    img.src = mySlider[currentSlide]
}