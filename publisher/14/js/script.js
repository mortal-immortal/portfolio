$(function () {

    //메인
    $("#slogan").animate({opacity:'1'},500);
    $("#drink1").delay(1000).animate({opacity:'1'},500);
    $("#drink2").delay(1500).animate({opacity:'1'},500);
    $("#drink3").delay(2000).animate({opacity:'1'},500);
    $("#drink4").delay(2500).animate({opacity:'1'},500);
    $(".slogan_btn").delay(2600).animate({opacity:'1'},500);

    //스크롤탑
    $(window).scroll(function () {

        var sct = $(window).scrollTop();
        var hello = $(".banner_1").offset();
        var hello2 = $(".banner_3").offset();
        var hello3 = $(".ma_area").offset();
        var hello4 = $(".store_area").offset();
    
        if(sct>hello.top-700) {
          $(".summer_bean").animate({left:"0px",opacity:"1"},1500,"easeOutQuad");
          $(".banner_1 div").animate({right:"0px",opacity:"1"},1500,"easeOutQuad");
        } 

        if(sct>hello2.top-700) {
            $(".prod_txt01").animate({left:"0px",opacity:"1"},2000,"easeOutQuad");
            $(".prod_txt02").delay(100).animate({left:"0px",opacity:"1"},2000,"easeOutQuad");
            $(".prod_btn").animate({opacity:"1"},1500,"easeOutQuad");
        }

        if(sct>hello3.top-700) {
            $(".ma_reserve").animate({opacity:"1"},2000,"easeOutQuad");
        }

        if(sct>hello4.top-700) {
            $(".store_left").animate({opacity:"1"},2000,"easeOutQuad");
            $(".main_story_txt_1").animate({right:"0px",opacity:"1"},2000,"easeOutQuad");
            $(".main_story_txt_2").delay(100).animate({right:"0px",opacity:"1"},2000,"easeOutQuad");
            $(".store_btn").delay(200).animate({right:"0px",opacity:"1"},2000,"easeOutQuad");
        }


      })
    



})//end

