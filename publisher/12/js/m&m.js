$(function(){
    var sc1_slider=setInterval(function(){
        $(".movie_box1").animate({left:"-100%"},50000,"linear",function(){
            $(this).css({
                left:0
            })
        })
    })
    
    var sc2_slider=setInterval(function(){
        $(".movie_box2").animate({right:"-100%"},50000,"linear",
        function(){
            $(this).css({
                right:0
            })
        })
    })
})