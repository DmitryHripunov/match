import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 1024) {
    document.body.style.cursor = 'none';
  }

  const cursor = document.querySelector('.cursor__pointer');
  const follow = document.querySelector('.cursor__follower');

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, 0, { x: e.clientX, y: e.clientY });
    gsap.to(follow, 0.3, { x: e.clientX, y: e.clientY });
  });
});

