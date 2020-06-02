/**
 * After Drilldown is loaded this javascript will do some cleaning
 * on the DOM.
 */
// DOM drilldown header
var drilldownHead = document.querySelector('#drilldown-header')

// DOM drilldown form filters
var drilldownFilters = document.querySelector('#drilldown-filters')

// We use a setTimeout to wait for the DOM to be loaded
setTimeout(function(){
  //console.log(`Drilldown Cleanup`)
  var selectedTags =  drilldownHead.querySelectorAll('.drilldown-header-value')

  // We loop over the selected filters to clean these
  for (i = 0; i < selectedTags.length; i++) {

    // if selected filter has only an '&' we remove this from the DOM
    if (selectedTags[i].innerText === '&') {
      selectedTags[i].remove()

    // if the filter is a selection we remove the first 3 characters and the last one so that
    // we can see the correct selection
    } else {
      selectedTags[i].innerText = selectedTags[i].innerText.substr(3)
      selectedTags[i].innerText = selectedTags[i].innerText.substr(0, selectedTags[i].innerText.length - 1)
    }
  }

}, 0)
