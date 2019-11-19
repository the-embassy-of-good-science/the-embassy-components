// jQuery is needed by Bootstrap
import $ from 'jquery';

import '../scss/components-library.scss';

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
