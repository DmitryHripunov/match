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
