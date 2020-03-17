// To be added with its script on top when adding this in a page
// Read more: https://github.com/bigbite/macy.js

// Code from CDN
// <script src="https://cdn.jsdelivr.net/npm/macy@2"></script>

if(document.querySelector('#columns-container')) {
  // eslint-ignore-next-line no-unused-var
  var macyInstance = Macy({
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
}
