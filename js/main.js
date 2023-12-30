/**
 * 헤더의 검색 부분 클릭 시 변환 코드
 */
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

/**
 * 헤더의 배지 부분을 특정 스크롤 이상 지나면 사라지는 코드
 */
const badgeEl = document.querySelector("header .badges");
// 브라우저 창
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
); //0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지

/**
 * 새로고침 시 section 부분의 이미지가 딜레이를 갖고 나타나게끔 하는 코드
 */
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션);
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true, // 자동재생 여부
  loop: true, // 반복재생 여부
});
new Swiper(".promotion .swiper", {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 첫번째 슬라이드가 가운데 오도록 하기
  loop: true,
  autoplay: {
    delay: 5000, // ms 단위 (기본값 3000)
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});
