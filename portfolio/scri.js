// Scroll function from Donovan Hutchinson's Level Up Your CSS Animation Skills Udemy course
// Detect request animation frame
const scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
const elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight))
  );
}
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  const containerHeight = document.querySelector('.container-txt').offsetHeight;

  const vandit = document.getElementById('vandit');
  const tewari = document.getElementById('tewari');

  const progress = Math.min(scrollY / containerHeight, 1);

  vandit.style.transform = `translateX(${-progress * 100}%)`;
  tewari.style.transform = `translateX(${progress * 100}%)`;
  vandit.style.opacity = 1 - progress;
  tewari.style.opacity = 1 - progress;
  vandit.style.filter = `blur(${progress * 5}px)`;
  tewari.style.filter = `blur(${progress * 5}px)`;
});


