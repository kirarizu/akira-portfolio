let slideIndexTop = 0;
showSlidesTop();

function showSlidesTop() {
    let i;
    let slidesTop = document.getElementsByClassName("slide-top");
    for (i = 0; i < slidesTop.length; i++) {
        slidesTop[i].style.display = "none";
    }
    slideIndexTop++;
    if (slideIndexTop > slidesTop.length) { slideIndexTop = 1 }
    slidesTop[slideIndexTop - 1].style.display = "block";
    setTimeout(showSlidesTop, 5000); // Change image every 5 seconds
}




let slideIndex = [1, 1, 1, 1];
let slideId = ["slidesa", "slidesb", "slidesc", "slidesd"]
let dotId = ["slider-1", "slider-2", "slider-3", "slider-4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlides(n, no) {
    showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    console.log(x);
    let dots = document.getElementsByClassName(dotId[no]);
    if (n > x.length) { slideIndex[no] = 1}
    if (n < 1) { slideIndex[no]= x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        console.log("ping");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex[no] -1].style.display = "block";
    dots[slideIndex[no]-1].className += " active";
}