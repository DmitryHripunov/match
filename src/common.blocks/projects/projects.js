import Parallax from 'parallax-js';

const parallaxItems = document.querySelectorAll('.js-projects-parallax');

parallaxItems.forEach((item) => {
  const parallaxInstance = new Parallax(item, {
    hoverOnly: true,
  });
  parallaxInstance.friction(0.6, 0.6);
});
