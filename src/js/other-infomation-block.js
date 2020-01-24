/**
 * This module uses masonry from https://masonry.desandro.com/
 */
var elem = document.querySelector('.other-information-grid');

var msnry = new Masonry( elem, {
  itemSelector: '.other-information-block',
  percentPosition: true,
  gutter: 10
});

// Grab number of grid items
var gridItems = document.querySelectorAll('.other-information-block');

if(gridItems) {

  // Set collapse of grid items
  for (var i = 0; i < gridItems.length; i++) {
    new otherInformationBlock(gridItems[i]);
  }
}

function otherInformationBlock(el) {
  this.el = el;
  this.trigger = this.el.querySelector('.other-information-last');
  this.items = this.el.querySelectorAll('.other-information-item');
  this.length = this.el.querySelectorAll('.other-information-item').length;

  var open = function(e) {
    e.preventDefault()
    this.trigger.classList.remove('is-visible')

    for (var i = 3; i < this.items.length; i++) {
      this.items[i].classList.remove('is-hidden');
    }

    setTimeout(cleanup, 100)
  }.bind(this);

  var cleanup = function(e) {
    this.trigger.removeEventListener('click', open)
  }.bind(this)

  if(this.length > 3) {
    this.trigger.querySelector('a').innerHTML = "+ "+ (this.length-3) +" more";
    this.trigger.classList.add('is-visible');

    for (var i = 3; i < this.items.length; i++) {
      this.items[i].classList.add('is-hidden')
    }

    this.trigger.addEventListener('click', open);
  }
}

