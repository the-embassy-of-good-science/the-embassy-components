/**
 * Navigation module
 */

document.querySelector('#nav-trigger-home').addEventListener('click', function(){
  document.querySelector('.navigation').classList.toggle('is-open');
  document.body.style.overflow = document.querySelector('.navigation').classList.contains('is-open') ? 'hidden' : '';
});

window.addEventListener('resize', function(e){
  if(window.innerWidth >= 1024 && document.querySelector('.navigation').classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    document.body.style.overflow = ''
    navigationCheckbox.checked = false
  }
});

