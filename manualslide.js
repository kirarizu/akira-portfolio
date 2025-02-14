let slideIndex = [1, 1, 1, 1];
let slideId = ["slidesa", "slidesb", "slidesc", "slidesd"]
let dotId = ["banner-slider", "edit-slider", "web-slider", "story-slider"]
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