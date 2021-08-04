import { gsap } from 'gsap';

// gsap.set('.cursor__pointer', { xPersent: -50, yPersent: -50 });
// gsap.set('.cursor__follower', { xPersent: -50, yPersent: -50 });

const cursor = document.querySelector('.cursor__pointer');
const follow = document.querySelector('.cursor__follower');

window.addEventListener('mousemove', (e) => {
  gsap.to(cursor, 0, { x: e.clientX, y: e.clientY });
  gsap.to(follow, 0.5, { x: e.clientX, y: e.clientY });
});
