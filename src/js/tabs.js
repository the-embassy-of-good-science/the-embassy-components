import $ from 'jquery';

$(function() {
  const traineeTab = document.querySelector('[data-tab="trainee"]');

  // Trainee tab active by default
  if (traineeTab) {
    traineeTab.classList.add('active');
  }

});

/**
 * Module to open links inside MediaWiki context
 */
$('.g-tab').on('click', function(e) {
  e.preventDefault();

  const trainerTab = document.querySelector('[data-tab="trainer"]');
  const traineeTab = document.querySelector('[data-tab="trainee"]');

  if (e.target.dataset.tab === 'trainer') {
    trainerTab.classList.add('active');
    traineeTab.classList.remove('active');
    document.querySelector('#data-tab-content-trainer').style.display = 'block';
    document.querySelector('#data-tab-content-trainee').style.display = 'none';

  }

  if (e.target.dataset.tab === 'trainee') {
    traineeTab.classList.add('active');
    trainerTab.classList.remove('active');
    document.querySelector('#data-tab-content-trainer').style.display = 'none';
    document.querySelector('#data-tab-content-trainee').style.display = 'block';
  }

});
