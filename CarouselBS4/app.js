const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const nextBtn = document.querySelector(".carousel__button--right");
const prevBtn = document.querySelector(".carousel__button--left");

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.left = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    nextBtn.classList.remove("is-hidden");
    prevBtn.classList.add("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    nextBtn.classList.add("is-hidden");
    prevBtn.classList.remove("is-hidden");
  } else {
    nextBtn.classList.remove("is-hidden");
    prevBtn.classList.remove("is-hidden");
  }
};

nextBtn.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot= currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide=> slide===nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot,nextDot);
  hideShowArrows(slides,prevBtn,nextBtn,nextIndex);
});

prevBtn.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot= currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide=> slide===prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot,prevDot);
  hideShowArrows(slides,prevBtn,nextBtn,prevIndex);
});
});
