/**
 * Polyfill for ChildNode.remove()
 * More: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
 */
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if (this.parentNode === null) {
          return;
        }
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/**
 * After Drilldown is loaded this javascript will do some cleaning
 * on the DOM.
 */
// DOM drilldown header
var drilldownHead = document.querySelector('#drilldown-header')

// DOM drilldown form filters
var drilldownFilters = document.querySelector('div.drilldown-filters')
if(drilldownFilters) {
  var drilldownForms = drilldownFilters.querySelectorAll('form')
}


/**
 * This method created some simple funcionality on current drilldown forms
 *
 * @param element
 * @constructor
 */
var FormDrilldown = function(element) {

  if(!element) return

  // get DOM elements from forms
  var el = element
  var submit = el.querySelector('input[type="submit"]')
  var select = el.querySelector('select')

  // @todo to disable in server
  select.removeAttribute('style')

  // detect change on select element
  select.addEventListener('change', function() {
    // trigger submit button
    submit.click()
  })
}

/**
 * This method cleans unnecessary code on the selected filters
 *
 */
var cleanupSelectedFilters = function() {
  var selectedTags =  drilldownHead.querySelectorAll('.drilldown-header-value')

  // We loop over the selected filters to clean these
  for (i = 0; i < selectedTags.length; i++) {

    // if selected filter has only an '&' we remove this from the DOM
    if (selectedTags[i].innerText === '&') {
      selectedTags[i].remove()

      // if the filter is a selection we remove the first 3 characters and the last one so that
      // we can see the correct selection
    } else {

      // Remove ' or " from the end of selected filter values
      if(selectedTags[i].innerText[selectedTags[i].innerText.length - 1] === ("'" || '"')) {
        selectedTags[i].innerText = selectedTags[i].innerText.substr(0, selectedTags[i].innerText.length - 1)
      }

      // remove `~ '` from string
      // @todo not sure why the string was being added in the name of the filter
      if(selectedTags[i].innerText.substr(0, 3) === "~ '") {
        selectedTags[i].innerText = selectedTags[i].innerText.substr(3)
      }
    }
  }
}

// We use a setTimeout to wait for the DOM to be loaded
setTimeout(function(){

  if(!drilldownFilters) return;

  // On load we do a clean up on selected filters
  // The purpose is to remove inconsistences from SMW / Drilldown Filters
  cleanupSelectedFilters()

  // Detect change on select dropdown
  for(i = 0; i < drilldownForms.length; i++) {
    new FormDrilldown(drilldownForms[i])
  }

}, 0)

