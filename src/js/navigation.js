/**
 * Navigation module
 */

var navigation = document.querySelector('.navigation');
var mobileTrigger = document.querySelector('.nav-trigger');
var navigationCheckbox = document.querySelector('#nav-trigger-home');

mobileTrigger.addEventListener('click', function(){
  navigation.classList.toggle('is-open')
  document.body.style.overflow = navigation.classList.contains('is-open') ? 'hidden' : '';
});

window.addEventListener('resize', function(e){
  if(window.innerWidth >= 1024 && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    document.body.style.overflow = ''
    navigationCheckbox.checked = false
  }
});
