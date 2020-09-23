/**
 * Create TeDropdownMenu component
 * @param el
 * @constructor
 */
var TeDropdownMenu;
TeDropdownMenu = function(el) {
  this.el = el;

  this.open = function(e) {
    e.preventDefault()
    this.el.classList.toggle('is-open');
  }.bind(this);

  this.resize = function() {
    if (!this.el.classList.contains('is-open')) return;
    this.open();
  }.bind(this);

  this.el.addEventListener('click', this.open);

  window.addEventListener('resize', this.resize);
};

/**
 * Select elements on the DOM
 * @type {NodeListOf<Element>}
 */
var dropdownMenus = document.querySelectorAll('[data-dropdown-trigger]');

/**
 * Initialise dropdown elements
 */
var i;
for (i = 0; i < dropdownMenus.length; i++) {
  new TeDropdownMenu(dropdownMenus[i]);
}
