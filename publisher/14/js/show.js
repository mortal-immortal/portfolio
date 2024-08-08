$(function(){
    move = setInterval(function(){
        $("#board_area .box ul").delay(2000).animate({
            top:"-24px"
        },function(){
            $("#board_area .box ul").append($("#board_area .box li:eq(0)"))
            $("#board_area .box ul").css({
                top:0
            })
        })
    })
})