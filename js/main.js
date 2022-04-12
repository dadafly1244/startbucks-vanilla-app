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


const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY >500){
    //배지 숨기기
    // badgeEL.style.display = "none";
    // gsap.to(요소, 지속시간(초), 옵션(객체));
    gsap.to(badgeEL, .6, {
      opacity : 0,
      display : 'none'
    })
  }else{
    //배지 보이기
    // badgeEL.style.display = "block";
    gsap.to(badgeEL, .6, {
      opacity : 1,
      display : 'block'
    })
  }
}, 300));
// _.throttle(함수, 밀리세컨단위시간) : 부하를 줌


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(초), 옵션(객체));
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7,//0.7,1.4,2.1,2.7
    opacity: 1,
  });
});

new Swiper('.notice-line .swiper',{
  direction:'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper', {
  slidesPerView:3,//한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이의 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop : true,
  // autoplay : {
  //   delay: 5000, //밀리 세컨 단위
  // }
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation:{
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

// 슬라이드영역토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion =false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion 
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임 처리
    promotionEl.classList.remove('hide');

  }
})