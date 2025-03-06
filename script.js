document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = -1;

    function showSlides() {
        let slides = document.querySelectorAll(".slide");

        // Hide all slides by removing the 'active' class
        slides.forEach(slide => slide.classList.remove("active"));

        // Increment slideIndex
        slideIndex++;
        if (slideIndex == 2) {
            slideIndex = 0;  // Loop back to the first slide
        }
        console.log("Slides:", slides);  // Check if slides are being selected
        console.log("Current slide index:", slideIndex);

        console.log("Adding active class to slide", slideIndex);
        slides[slideIndex].classList.add("active")  // Add the 'active' class to the current slide

        // Repeat the function every 4 seconds
        setTimeout(showSlides, 4000);
    }

    showSlides();  // Start the slideshow immediately
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("manualSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}