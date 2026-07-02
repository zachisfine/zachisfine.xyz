(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const grid = document.querySelector('.parallax__grid');
  const glows = document.querySelectorAll('.parallax__glow');
  if (!grid && !glows.length) return;

  let ticking = false;
  function update() {
    const y = window.scrollY || window.pageYOffset;
    if (grid) grid.style.transform = 'translate3d(0,' + (y * -0.15) + 'px,0)';
    glows.forEach(function (g, i) {
      const rate = 0.25 + i * 0.08;
      g.style.transform = 'translate3d(0,' + (y * -rate) + 'px,0)';
    });
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
})();
