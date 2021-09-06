import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.js-input');
  const im = new Inputmask('+7 (999) 999-99-99', { showMaskOnHover: false });

  inputs.forEach((input) => {
    const phoneInputs = document.querySelectorAll("input[type='tel']");

    phoneInputs.forEach((mask) => {
      im.mask(mask);
    });

    input.addEventListener('change', (e) => {
      const currentInput = e.currentTarget;
      if (currentInput.value.trim().length < 1) {
        currentInput.value = {};
        currentInput.classList.remove('is-focused');
      } else {
        currentInput.classList.add('is-focused');
      }
    });
  });

  const textarea = document.querySelector('.js-textarea');
  const textareaCountLength = document.querySelector('.js-textarea-count');

  function autosize(e) {
    const el = this;
    setTimeout(() => {
      const lengthValue = e.target.value.length;
      textareaCountLength.textContent = lengthValue;
      el.style.cssText = `height:${el.scrollHeight}px`;
      if (el.value.trim().length < 1) {
        el.style.height = '32px';
      }
    }, 0);
  }

  if (textarea) {
    textarea.addEventListener('input', autosize);
  }
});
