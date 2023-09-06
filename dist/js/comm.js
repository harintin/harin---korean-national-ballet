// youtube.js
// comm.js 위에다 추가

// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "olM5ll1yQjo", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "olM5ll1yQjo", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      },
    },
  });
}

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

// tabs
const tabEl = $(".info-tabs-item");
const tabTit = tabEl.find(".info-tabs-tit");
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
