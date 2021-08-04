import { gsap } from 'gsap';

// let currentTextProps = { x: 0, y: 0 };
let column = -1;

for (let i = 0; i < 12; i++) {
  if (i % 4 === 0) column++;

  const topText = document.createElement('div');
  topText.classList.add('.animated-text__top');
  document.querySelector('.animated-text').append(topText);

  gsap.set(topText, {
    attr: { class: `animated-text__top ${column}` },
    textContent: 'Match agency',
    x: [60, 280, 500][column],
  });

  topText.tl = gsap.timeline({ paused: true, repeat: -1 })
    .fromTo(topText, { y: [-575, 800, 800][column], rotation: -0.05 }, {
      duration: [40, 35, 26][column], y: [800, -575, -575][column], rotation: 0.05, ease: 'none',
    })
    .progress((i % 4) / 4);
}


// const tl = gsap.timeline({ repeat: 30, repeatDelay: 1 });

// tl.to('.animated-text__top', { duration: 1, x: 200 });
