var slideIndex = 0;
carousel();


function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  console.log(slideIndex);
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); 
}

var slideIndex1 = 0;
carousel1();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("mySlidess");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex1++;
  console.log(slideIndex);
  if (slideIndex1 > x.length) {
    slideIndex1 = 1
  }
  x[slideIndex1-1].style.display = "block";
  setTimeout(carousel1, 5000); 
}
