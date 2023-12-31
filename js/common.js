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
 * 날짜 계산
 */
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
