document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 1024) {
    const parallaxLinks = document.querySelectorAll('.js-data-hover');

    parallaxLinks.forEach((link) => {
      const parallax = link.querySelectorAll('.js-parallax');

      const transition = 'transition: transform 0.3s ease';

      link.addEventListener('mousemove', (e) => {
        const curTarget = e.currentTarget;
        const curSizes = curTarget.querySelector('.js-data-client');

        if (!curTarget.querySelector('.js-parallax') || !parallax[0]) return;

        const offsetX1 = ((e.clientX / (curSizes.clientWidth)) * 20) - 10;
        const offsetY1 = ((e.clientY / (curSizes.clientHeight * 4)) * 18) - 4;
        const offsetX2 = ((e.clientX / (curSizes.clientWidth)) * 16) - 8;
        const offsetY2 = ((e.clientY / (curSizes.clientHeight * 4)) * 16) - 3;

        if (curTarget.querySelector('.js-parallax')) {
          parallax[0].setAttribute(
            'style',
            `transform: translate(${offsetX1}px, ${offsetY1}px);`,
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
            `transform: translate(${offsetX1}px, ${offsetY1}px);`,
          );
        }
      });

      link.addEventListener('mouseleave', () => {
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
