// jQuery is needed by Bootstrap
// import $ from 'jquery';
import Macy from 'macy';

// SCSS files from bootstrap
import '../scss/main.scss';

// eslint-disable-next-line no-unused-vars
const macyInstance = Macy({
  // for all available options: https://github.com/bigbite/macy.js
  container: '#columns-container',
  columns: 3,
  margin: {
    x: 30,
    y: 30,
  },
  breakAt: {
    600: {
      columns: 1,
    },
    960: {
      columns: 2,
    },
  },
});
