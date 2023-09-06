// 공지사항 스크롤 탭
const tabEl = $(".or-notice-ul");
const tabTit = tabEl.find(".notice-more button");
// .tab-item 옆에 .on 클래스를 삭제
tabEl.removeClass("blind");
// .tab-item .tit 을 클릭했을 때
tabTit.on("click", function () {
  // .tab-item 에 붙어있는 on을 먼저 삭제
  tabEl.removeClass("blind");
});
