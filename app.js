
var toggler = document.querySelector('.burger');
var siteHeader = document.querySelector('.site-header');

toggler.addEventListener('click', function(){
  siteHeader.classList.toggle('site-header__open');
});

toggler.addEventListener('click', function(){
  toggler.classList.toggle('burger__close');
});

var articleList = document.querySelector('.article__article-right');
var articleOpenBtn = document.querySelector('.article-right__buttons--left-btn');
var articleCloseBtn = document.querySelector('.article-right__buttons--right-btn');

articleOpenBtn.addEventListener('click', function(){
  articleList.classList.remove('article-right--open');
});

articleCloseBtn.addEventListener('click', function(){
  articleList.classList.add('article-right--open');
});

articleCloseBtn.addEventListener('click', function(){
  articleOpenBtn.classList.remove('article-right__btn-active');
});

articleCloseBtn.addEventListener('click', function(){
  articleCloseBtn.classList.add('article-right__btn-active');
});

articleOpenBtn.addEventListener('click', function(){
  articleCloseBtn.classList.remove('article-right__btn-active');
});

articleOpenBtn.addEventListener('click', function(){
  articleOpenBtn.classList.add('article-right__btn-active');
});
