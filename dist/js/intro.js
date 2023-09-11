// tabs
// tabbed content
// http://www.entheosweb.com/tutorials/css/tabs.asp
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();

  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel");
  $("#" + d_activeTab).fadeIn();

  $(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");

  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});

/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
$("ul.tabs li").last().addClass("tab_last");

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
