import { getZero } from "./timer";
function slider() {
  //Slider
  const slides = document.querySelectorAll(".offer__slide");
  const curr = document.querySelector("#current");
  const total = document.querySelector("#total");
  const slider = document.querySelector(".offer__slider");
  let slidesIndex = 0;
  total.textContent = getZero(slides.length);

  slider.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "offer__slider-prev") {
      slidesIndex--;
      if (slidesIndex < 0) {
        slidesIndex = slides.length - 1;
      }
    }
    if (target.className === "offer__slider-next") {
      slidesIndex++;
      if (slidesIndex > slides.length - 1) {
        slidesIndex = 0;
      }
    }
    hideSlide();
    showSlide(slidesIndex);
  });

  function showSlide(i = 0) {
    slides[i].style.display = "block";
    curr.textContent = getZero(i + 1);
  }
  function hideSlide() {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
  }
  hideSlide();
  showSlide();
}

export default slider;
