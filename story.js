// Play jazz on hero button click
const heroBtn = document.querySelector('.story-btn');
if (heroBtn) {
  heroBtn.addEventListener('click', function () {
    const music = document.getElementById('bgMusic');
    if (music && music.paused) {
      music.volume = 0.4;
      music.play().catch(() => {});
    }
  });
}

// Scroll-reveal for .reveal and .reveal-img
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal, .reveal-img').forEach((el) => observer.observe(el));
})();
