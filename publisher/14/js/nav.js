$(function(){
    $(".search").click(function(){
        $(this).animate({
            width:180
        },function(){
            $(this).children("input").css({
                display:"block"
            })
        })
    })
    var list_num = 0
    $(".top_menu li").mouseover(function(){
        list_num = $(this).index()
        $(".n_menu .list").stop().css({
            display:"none"
        })
        $(".n_menu .list").eq(list_num).stop().slideDown()
    })
    $("nav").mouseleave(function(){
        $(".n_menu .list").slideUp()
    })

})