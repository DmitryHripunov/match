import mixitup from 'mixitup';

if ($('.js-hashtags').length) {
  const mixer = mixitup('.js-hashtags', {// eslint-disable-line
    selectors: {
      target: '.projects__item',
    },
    animation: {
      duration: 300,
    },
  });

  $('.js-hashtag-item a').click((e) => {
    $('.js-hashtag-item').removeClass('is-active');

    $(e.target).closest('.js-hashtag-item').addClass('is-active');
  });
}
