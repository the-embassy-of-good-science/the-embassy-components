// jQuery is needed by Bootstrap
import $ from 'jquery';
// import Macy from 'macy';

// SCSS files from bootstrap
import '../scss/main.scss';

/**
 * Navigation module
 */
import './navigation';

// The Embassy content MediaWiki hyperlinks
// const mediaWikiContentHyperlinks = document.querySelectorAll('.te-mw-link');

// [...mediaWikiContentHyperlinks].forEach(el => {
//   el.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(el);
//   });
// });

// import './mediawikiContentLinks';

// eslint-disable-next-line no-unused-vars
// const macyInstance = Macy({
//   // for all available options: https://github.com/bigbite/macy.js
//   container: '#columns-container',
//   columns: 3,
//   margin: {
//     x: 30,
//     y: 30,
//   },
//   breakAt: {
//     600: {
//       columns: 1,
//     },
//     960: {
//       columns: 2,
//     },
//   },
// });

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


