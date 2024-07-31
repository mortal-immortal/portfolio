$(function(){
    $(".sub_list li").click(function(){
        $(".sub_list li").removeClass("on")
        $("section").removeClass("on")
        $("section").eq($(this).index()).addClass("on")
        $(this).addClass("on")
        $("section").css({
            display:"none"
        })
        $("section").eq($(this).index()).css({
            display:"block"
        })
    })
})