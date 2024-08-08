//최서현
$(document).ready(function() {
    var videos = $('cs_.bxslider video'); // 모든 비디오 요소를 가져옵니다.
   var totalVideos = videos.length; // 비디오의 총 개수를 가져옵니다.
   var currentIndex = 0; // 현재 재생 중인 비디오의 인덱스를 저장할 변수입니다.
   var progressBar = $('cs_.progress-bar'); // 진행 바 요소를 가져옵니다.

   // 모든 비디오를 숨기고, 첫 번째 비디오만 보여줍니다.
   videos.hide();
   $(videos[0]).show();

   // 첫 번째 비디오 재생
   playVideo(videos[0]);
   
   // 비디오 재생을 처리하는 함수
   function playVideo(video) {
   $(video).get(0).play(); // 비디오 재생
   updateProgressBar(video); // 진행 바 업데이트
   }
   
   // 비디오의 종료 이벤트를 처리하는 함수
   videos.on('ended', function() {
       var currentVideo = this;

   // 현재 비디오를 숨깁니다.
       $(currentVideo).hide();
   
   // 현재 인덱스를 업데이트하고 다음 비디오의 인덱스를 계산합니다.
       currentIndex = (currentIndex + 1) % totalVideos;
   
   // 다음 비디오를 보여주고 재생합니다.
       var nextVideo = videos[currentIndex];
       $(nextVideo).show();
       playVideo(nextVideo);
   });
   
   // 비디오의 시간 업데이트 이벤트를 처리하는 함수
   function updateProgressBar(video) {
       $(video).on('timeupdate', function() {
           var currentTime = this.currentTime;
           var duration = this.duration;
           var percentagePlayed = (currentTime / duration) * 100;
           progressBar.css('width', percentagePlayed + '%');
   });
   }
});

$(function(){
// fixed bt
var test=false
$(".cs_mbt").click(function(){
   if (test==false){
       $(".cs_m_box").css({
       height:"550px",
       opacity:"1"
       });
       test=true
   }else{
       $(".cs_m_box").css({
       height:"0px",
       opacity:"0"
       });
       test=false
   }
})
});