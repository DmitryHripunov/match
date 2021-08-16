import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 1024) {
    document.body.style.cursor = 'none';

    const cursor = document.querySelector('.cursor__pointer');
    const follow = document.querySelector('.cursor__follower');

    window.addEventListener('mousemove', (e) => {
      gsap.to(cursor, 0, { x: e.clientX, y: e.clientY });
      gsap.to(follow, 0.6, { x: e.clientX, y: e.clientY });
    });

    [...document.querySelectorAll('a')].forEach((item) => {
      item.addEventListener('mouseenter', () => {
        follow.classList.add('is-hover');
      });

      item.addEventListener('mouseleave', () => {
        follow.classList.remove('is-hover');
      });
    });

    [...document.querySelectorAll('button')].forEach((item) => {
      item.addEventListener('mouseenter', () => {
        follow.classList.add('is-hover');
      });

      item.addEventListener('mouseleave', () => {
        follow.classList.remove('is-hover');
      });
    });

    [...document.querySelectorAll('input')].forEach((item) => {
      item.addEventListener('mouseenter', () => {
        follow.classList.add('is-hover');
      });

      item.addEventListener('mouseleave', () => {
        follow.classList.remove('is-hover');
      });
    });

    [...document.querySelectorAll('label')].forEach((item) => {
      item.addEventListener('mouseenter', () => {
        follow.classList.add('is-hover');
      });

      item.addEventListener('mouseleave', () => {
        follow.classList.remove('is-hover');
      });
    });

    [...document.querySelectorAll('textarea')].forEach((item) => {
      item.addEventListener('mouseenter', () => {
        follow.classList.add('is-hover');
      });

      item.addEventListener('mouseleave', () => {
        follow.classList.remove('is-hover');
      });
    });
  }
});

