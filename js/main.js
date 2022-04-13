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
const toTopEl = document.querySelector('#to-top');
//lodash cdn 에서 제공하는 throttle함수 사용
// _.throttle(함수, 밀리세컨단위시간) : 사용자가 화면에서 스크롤을 사용할 때, 최대한 적게 사용하기 위해서 넣었음
// _.throttle(함수, 밀리세컨단위시간) : 부하를 줌
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY >500){
    //배지 숨기기
    // badgeEL.style.display = "none";
    // gsap.to(요소, 지속시간(초), 옵션(객체));
    gsap.to(badgeEL, .6, {
      opacity : 0,
      display : 'none'
    });
    //버튼 보이기 
    gsap.to('#to-top' , .2, {
      //x축으로 원래위치로 옮겨서 버튼이 보이게 하기!
      x:0
    });
  }else{
    //배지 보이기
    // badgeEL.style.display = "block";
    gsap.to(badgeEL, .6, {
      opacity : 1,
      display : 'block'
    });
    //버튼 숨기기
    //gsap.to()에 요소를 찾아서 넣어도 좋지만, css 선택자를 넣어도 동작함!
    // gsap.to('#to-top' , .2, {
    gsap.to(toTopEl , .2, {
      //x축으로 100px 옮겨서 버튼이 사라지게 하기!
      x:100
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


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
    prevEl : '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next'
  }
});

new Swiper('.awards .swiper',{
  autoplay: true,
  loop : true,
  spaceBetween : 30,
  slidesPerView: 5,
  navigation: {
    nextEl: ".awards .swiper-button-next",
    prevEl: ".awards .swiper-button-prev"
  }
})



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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


// 애니메이션
function floatingObject(selector, delay, size) {
  // gsap.to(요소,동작시간(초),옵션);
  gsap.to(selector, random(1.5, 2.5), 
  {
    y: size,
    repeat:-1,
    yoyo :true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });

}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic 
    .Scene({
      triggerElement : spyEl, //보여짐 여부를 감시할 요소를 
      triggerHook : .8 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})


// 자동으로 날짜 받는 함수 만들기
// textContent를 통해서 요소의 내용을 알아내거나 지정할 수 있음
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022

// 페이지 상단으로 스크롤

