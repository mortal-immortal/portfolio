$(function() {
    $("article").mouseover(function(){
        var vid=$(this).find("video").get(0);
        vid.currentTime=0;
        vid.play();

        $(this).stop().animate({width:"50%"},1000,function(){
            $(this).find("h3").stop().animate({right:"20px",opacity:1},400);
            $(this).find("p").stop().animate({right:"20px"},800);
        });
        $(this).find("video").stop().animate({opacity:"1"},1200)
    });

    $("article").mouseout(function(){
        var vid=$(this).find("video").get(0);
        vid.pause();

        $(this).stop().animate({width:"12%"},700);
        $(this).find("video").stop().animate({opacity:"0"},2000);
        $(this).find("h3").stop().animate({right:"-500px",opacity:0},200);
        $(this).find("p").stop().animate({right:"-400px"},200);
    })
});