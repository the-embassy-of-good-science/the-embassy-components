import $ from 'jquery';

/**
 * Module to add readmore
 */
$(function () {

  var allHasReadMore = $('.has-readmore');
  var readMore = '<span class=\"read-more\">Read more</span>'

  $.each(allHasReadMore, function (index, hasReadMore) {

    var readMoreEl = $(readMore).insertAfter(hasReadMore);

    $(readMoreEl).on('click', function (e) {
      $(this).hide()
      $(hasReadMore).addClass('open')
    })
  });
});
