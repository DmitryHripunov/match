document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('.js-submit');

  if (submitBtn) {
    const popup = document.querySelector(submitBtn.dataset.target);

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.add('is-active');
      document.body.classList.add('no-scrolling');
    });

    if (popup) {
      popup.querySelector('.js-popup-wrapper').addEventListener('click', (event) => {
        // eslint-disable-next-line no-underscore-dangle
        event._isClickWithinPopup = true;
      });

      popup.querySelectorAll('.js-close-popup').forEach((close) => {
        close.addEventListener('click', (event) => {
        // eslint-disable-next-line no-underscore-dangle
          if (event._isClickWithinPopup) return;
          popup.classList.remove('is-active');
          document.body.classList.remove('no-scrolling');
        });
      });

      popup.addEventListener('click', (event) => {
        // eslint-disable-next-line no-underscore-dangle
        if (event._isClickWithinPopup) return;
        popup.classList.remove('is-active');
        document.body.classList.remove('no-scrolling');
      });
    }
  }
});
