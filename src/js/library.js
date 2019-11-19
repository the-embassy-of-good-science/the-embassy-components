// jQuery is needed by Bootstrap
import $ from 'jquery';

// Add library styles
import '../scss/components-library.scss';

// Import svg
import '../svgs/index';

// Import all bootstrap components
import 'bootstrap';

// Initialize added components
// eslint-disable-next-line func-names
$(function() {
  // load popover
  $('[data-toggle="popover"]').popover();

  // load tooltip
  $('[data-toggle="tooltip"]').tooltip();
});
