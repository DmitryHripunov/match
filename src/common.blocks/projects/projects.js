import Parallax from 'parallax-js';

const parallaxItems = document.querySelectorAll('.js-projects-parallax');

parallaxItems.forEach((item) => {
  const parallaxInstance = new Parallax(item, {
    hoverOnly: true,
    invertX: false,
    invertY: false,
    calibrateX: false,
    calibrateY: false,
    // clipRelativeInput: true,
    // scalarX: 20,
    // scalarY: 20,
  });
  parallaxInstance.friction(0.6, 0.6);
});
