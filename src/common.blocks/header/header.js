let lastScrollTop = 0;

$(window).scroll(() => {
  const topPos = $('html').scrollTop();
  if (topPos > 80) {
    $('.header').addClass('is-moved');
  }

  if (topPos < lastScrollTop) {
    $('.header').removeClass('is-moved');
  }
  lastScrollTop = topPos;
});

// $('.menu').scroll(() => {
//   const menuTopPos = $('.menu').scrollTop();
//   if (menuTopPos > 80) {
//     $('.header').addClass('is-moved');
//   }

//   if (menuTopPos < lastScrollTop) {
//     $('.header').removeClass('is-moved');
//   }
//   lastScrollTop = menuTopPos;
// });
