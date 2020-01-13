import $ from 'jquery';

/**
 * Module to open links inside MediaWiki context
 */
$('.te-mw-link').on('click', function(e) {
  e.preventDefault();

  // does not do anything if href is undefined
  if (this.dataset.href === undefined) {
    return;
  }

  // specific to go back
  if (this.dataset.href === '#' && this.dataset.target === 'back') {
    window.history.back();
    return;
  }

  // check if its target
  if (this.dataset.target === '_self' || this.dataset.target === undefined) {
    window.location.href = this.dataset.href;
  } else if (
      this.dataset.target === '_blank' ||
      this.dataset.href !== undefined
  ) {
    window.open(this.dataset.href);
  }
});
