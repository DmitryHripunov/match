function hideModal(toggle, content, body, focus = null, switchingClass = null) {
  toggle.setAttribute('aria-expanded', false);
  content.setAttribute('aria-hidden', true);

  if (toggle.classList.contains('is-active')) {
    body.classList.remove('no-scrolling');
    toggle.classList.remove('is-active');
    content.classList.remove('is-opened');
    if (switchingClass) {
      switchingClass.classList.remove('menu-opened');
    }

    if (focus) {
      focus.focus();
    }
  }
}

function showModal(toggle, content, body, focus = null, switchingClass = null) {
  toggle.setAttribute('aria-expanded', true);
  content.setAttribute('aria-hidden', false);

  body.classList.add('no-scrolling');
  toggle.classList.add('is-active');
  content.classList.add('is-opened');
  if (switchingClass) {
    switchingClass.classList.add('menu-opened');
  }

  if (focus) {
    focus.focus();
  }
}

export { hideModal, showModal };
