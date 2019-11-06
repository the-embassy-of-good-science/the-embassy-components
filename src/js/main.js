// jQuery is needed by Bootstrap
import $ from 'jquery';

// SCSS files from bootstrap
import '../scss/main.scss';

// Import svg
import '../svgs/index';

// Import all bootstrap components
// import 'bootstrap';

// Import bootstrap components individualy
// import 'bootstrap/js/src/alert';
import 'bootstrap/js/src/button';
// import 'bootstrap/js/src/carousel';
// import 'bootstrap/js/src/collapse';
// import 'bootstrap/js/src/dropdown';
// import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/popover';
// import 'bootstrap/js/src/scrollspy';
// import 'bootstrap/js/src/tab';
// import 'bootstrap/js/src/toast';
import 'bootstrap/js/src/tooltip';
// import 'bootstrap/js/src/util';

// Initialize added components
// eslint-disable-next-line func-names
$(function() {
  // load popover
  $('[data-toggle="popover"]').popover();

  // load tooltip
  $('[data-toggle="tooltip"]').tooltip();
});
