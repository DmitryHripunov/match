document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 1024) {
    const parallaxLinks = document.querySelectorAll('[data-hover-icon]');

    parallaxLinks.forEach((link) => {
      const parallax = link.querySelectorAll('.js-parallax-icon');

      const transition = 'transition: transform 0.3s ease';

      document.addEventListener('mousemove', (e) => {
        const curTarget = e.currentTarget;
        const curSizes = curTarget.querySelector('[data-client-icon]');

        if (!curTarget.querySelector('.js-parallax-icon') || !parallax[0]) return;

        const offsetX1 = ((e.clientX / (curSizes.clientWidth)) * 30) - 15;
        const offsetY1 = ((e.clientY / (curSizes.clientHeight)) * 20) - 10;
        const offsetX2 = ((e.clientX / (curSizes.clientWidth)) * 20) - 10;
        const offsetY2 = ((e.clientY / (curSizes.clientHeight)) * 10) - 5;

        if (curTarget.querySelector('.js-parallax-icon')) {
          parallax[0].setAttribute(
            'style',
            `transform: translate(${offsetX1}px, ${offsetY1}px) scale(1.05);`,
          );
        }
        if (parallax[1]) {
          parallax[1].setAttribute(
            'style',
            `transform: translate(${offsetX2}px, ${offsetY2}px);`,
          );
        }
        if (parallax[2]) {
          parallax[2].setAttribute(
            'style',
            `transform: translate(${offsetX1}px, ${offsetY1}px);`,
          );
        }
        if (parallax[3]) {
          parallax[3].setAttribute(
            'style',
            `transform: translate(${offsetX2}px, ${offsetY2}px);`,
          );
        }
        if (parallax[4]) {
          parallax[4].setAttribute(
            'style',
            `transform: translate(${offsetX1}px, ${offsetY1}px);`,
          );
        }
        if (parallax[5]) {
          parallax[5].setAttribute(
            'style',
            `transform: translate(${offsetX2}px, ${offsetY2}px);`,
          );
        }
      });

      document.addEventListener('mouseleave', () => {
        parallax.forEach((item) => {
          const time = setTimeout(() => {
            item.removeAttribute('style');
          }, 300);
          clearTimeout(time);
          item.setAttribute('style', transition);
        });
      });
    });
  }
});
