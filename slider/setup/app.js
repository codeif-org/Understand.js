const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

console.log(slides);

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  if (counter < slides.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  console.log(counter);
  carousel();
});

prevBtn.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  } else if (counter === 0) {
    counter = slides.length - 1;
  }
  console.log(counter);
  carousel();
});

function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
