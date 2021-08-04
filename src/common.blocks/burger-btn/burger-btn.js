import { showModal, hideModal } from '../helpers/helpers';

const toggleEl = document.querySelector('.js-burger-btn');
const contentEl = document.querySelector('.js-menu');
const bodyEl = document.body;
const header = document.querySelector('.header');

if (toggleEl) {
  toggleEl.addEventListener('click', (event) => {
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

