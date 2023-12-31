/**
 * 헤더의 배지 부분을 특정 스크롤 이상 지나면 사라지는 코드
 * _.throttle(함수, 시간)
 */
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
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
      // 버튼 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
); //0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지
toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0, // gsap의 scrollToPlugin
  });
});

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
// 다중 요소 슬라이드
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 요소를 숨기는 토글 기능
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

// 플로팅이 둥둥 뜨는 애니메이션
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
const floatingObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 다시 되돌리는
    ease: Power1.easeInOut, // 통통튀는 느낌 없애기
    delay: random(0, delay),
  });
};
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// 스크롤 찾기
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 전체 뷰포트의 80%에 걸렸을 때, 트리거
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
