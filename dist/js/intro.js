// tabs
const tabEl = $(".find-category-tab");
const tabTit = tabEl.find(".category-tab-tit");
// .tab-item 옆에 .on 클래스를 삭제
tabEl.removeClass("on");
// 클릭했을 때 on 클래스가 나오게
tabEl.first().addClass("on");
// .tab-item .tit 을 클릭했을 때
tabTit.on("click", function () {
  // .tab-item 에 붙어있는 on을 먼저 삭제
  tabEl.removeClass("on");
  // 방금 클릭한 나(this)의 부모(parent())에게 .on 추가
  $(this).parent().addClass("on");
});
