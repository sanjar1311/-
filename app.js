
var toggler = document.querySelector('.burger');
var siteHeader = document.querySelector('.site-header');

toggler.addEventListener('click', function(){
  siteHeader.classList.toggle('nav-open');
});

toggler.addEventListener('click', function(){
  toggler.classList.toggle('burger__close');
});
