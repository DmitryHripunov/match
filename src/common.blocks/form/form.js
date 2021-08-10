document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.js-input');

  inputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      const currentInput = e.currentTarget;
      if (currentInput.value.trim().length < 1) {
        currentInput.value = null;
        currentInput.classList.remove('is-focused');
      } else {
        currentInput.classList.add('is-focused');
      }
    });
  });

  const textarea = document.querySelector('textarea');

  function autosize() {
    const el = this;
    // const elParent = el.closest('.form__item');
    setTimeout(() => {
      el.style.cssText = 'height:auto;';
      el.style.cssText = `height:${el.scrollHeight}px`;
    }, 0);
  }

  textarea.addEventListener('keyup', autosize);
});
