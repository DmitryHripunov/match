import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const openMenu = document.querySelector('.js-burger-btn');
  const closeMenu = document.querySelector('.js-burger-btn-close');

  openMenu.addEventListener('click', () => {
    const tl = gsap.timeline();
    const options = {
      opacity: 1,
      translateY: 0,
      delay: -0.3,
      ease: 'power1',
    };

    tl.set('.decoration-block', {
      opacity: 0,
      delay: 0,
    })
      .set('.body', {
        className: 'no-scrolling',
      })
      .set('.burger-btn', {
        className: 'burger-btn is-hidden',
      })
      .set('.burger-btn_close', {
        className: 'burger-btn burger-btn_close is-active',
      })
      .set('.js-menu', {
        translateY: '-100%',
        className: 'menu is-opened',
      })
      .set('.header', {
        className: 'header is-modified',
      })
      .set(['.menu__nav-btn', '.menu__footer', '.js-item-1', '.js-item-2', '.js-item-3', '.js-item-4'], {
        opacity: 0,
        translateY: 50,
        ease: 'power1',
      })
      .to('.js-menu', {
        translateY: 0,
        duration: 0.3,
        ease: 'power1',
      })
      .to('.js-item-1', options)
      .to('.js-item-2', options)
      .to('.js-item-3', options)
      .to('.js-item-4', options)
      .to('.menu__nav-btn', options)
      .to('.menu__footer', options)
      .to('.decoration-block', {
        opacity: 1,
        delay: 0,
        duration: 0.02,
        ease: 'linear',
      });
    closeMenu.addEventListener('click', () => {
      tl.reverse();
    });
  });
});

