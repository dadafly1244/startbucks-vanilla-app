const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


// 자동으로 날짜 받는 함수 만들기
// textContent를 통해서 요소의 내용을 알아내거나 지정할 수 있음
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022