(function () {
  const slideshows = document.querySelectorAll("[data-avatar-slideshow]");
  if (!slideshows.length) return;

  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  slideshows.forEach((slideshow) => {
    const slides = Array.from(slideshow.querySelectorAll(".author__avatar-slide"));
    if (slides.length < 2 || prefersReducedMotion) return;

    let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
    let timer = null;

    function showNext() {
      slides[activeIndex].classList.remove("is-active");
      activeIndex = (activeIndex + 1) % slides.length;
      slides[activeIndex].classList.add("is-active");
    }

    function start() {
      if (!timer) timer = window.setInterval(showNext, 4200);
    }

    function stop() {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    }

    slideshow.addEventListener("mouseenter", stop);
    slideshow.addEventListener("mouseleave", start);
    slideshow.addEventListener("focusin", stop);
    slideshow.addEventListener("focusout", start);
    start();
  });
})();
