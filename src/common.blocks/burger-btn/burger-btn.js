import { gsap } from 'gsap';
import { showModal, hideModal } from '../helpers/helpers';

const toggleEl = document.querySelector('.js-burger-btn');
const contentEl = document.querySelector('.js-menu');
const bodyEl = document.body;
const header = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', () => {
  if (toggleEl) {
    const tl = gsap.timeline();

    toggleEl.addEventListener('click', (event) => {
      tl.set('.decoration-block', {
        opacity: 0,
        delay: 0,
      })
        .set('.js-menu', {
          translateY: -300,
        })
        .set(['.menu__footer', '.js-item-1', '.js-item-2', '.js-item-3', '.js-item-4'], {
          opacity: 0,
          translateY: 50,
          ease: 'power1',
        })
        .to('.js-menu', {
          translateY: 0,
          duration: 0.3,
          ease: 'power1',
        })
        .to('.js-item-1', {
          opacity: 1,
          translateY: 0,
          delay: -0.3,
          ease: 'power1',
        })
        .to('.js-item-2', {
          opacity: 1,
          translateY: 0,
          delay: -0.3,
          ease: 'power1',
        })
        .to('.js-item-3', {
          opacity: 1,
          translateY: 0,
          delay: -0.3,
          ease: 'power1',
        })
        .to('.js-item-4', {
          opacity: 1,
          translateY: 0,
          delay: -0.3,
          ease: 'power1',
        })
        .to('.menu__footer', {
          opacity: 1,
          translateY: 0,
          delay: -0.3,
          ease: 'power1',
        })
        .to('.decoration-block', {
          opacity: 1,
          delay: 0,
          duration: 0.02,
          ease: 'linear',
        });

      event.stopPropagation();
      // eslint-disable-next-line no-unused-expressions
      JSON.parse(toggleEl.getAttribute('aria-expanded')) ?
        hideModal(toggleEl, contentEl, bodyEl, null, header) :
        showModal(toggleEl, contentEl, bodyEl, null, header);
    });

    const handleClosure = event =>
      !contentEl.contains(event.target) && hideModal(toggleEl, contentEl, bodyEl, null, header);

    window.addEventListener('click', handleClosure);
    window.addEventListener('focusin', handleClosure);
  }
});

