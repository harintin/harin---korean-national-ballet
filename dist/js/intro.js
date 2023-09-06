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

// nav
$(function () {
  // nav
  // #gnb .link-depth1 을 클릭했을 때
  // $("#gnb .link-depth1").on("click", function () {
  //   // #gnb .depth1 > li 에 있는 active 클래스 삭제
  //   $(".depth1 li").removeClass("active");
  //   // 내가 클릭한 아이에게 .active 클래스 추가
  //   $(this).parent().addClass("active");
  //   // $(this).parents("li").addClass("active");
  // });

  // 조건문
  $("#gnb .depth1-lst > li > h2").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      // 만약 .active를 가지고 있다면
      $("#gnb .depth1-lst > li").removeClass("active");
    } else {
      // .active를 가지고 있지 않다면
      $("#gnb .depth1-lst > li").removeClass("active");
      $(this).parent().addClass("active");
    }
  });
});
