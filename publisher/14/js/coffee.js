$(function(){
    $("section .division .list li").click(function(){
        $("section .division .list li").removeClass("on")
        $(this).addClass("on")
        $("section .division .check li .c_box").removeClass("on")
        $("section .division .check li:eq(0) .c_box").addClass("on")
        $("section .info .info_box").removeClass("on")
        $("section .info .info_box").eq($(this).index()).addClass("on")
    })
    $("section .division .check li").click(function(){
        
        if($(this).index()==0){
            $("section .division .check li .c_box").removeClass("on")
            $(this).children(".c_box").addClass("on")
            $("section .info box").css({
                display:"block"
            })
        }else{
            $("section .division .check li:eq(0) .c_box").removeClass("on")
            if($(this).children(".c_box").hasClass("on")){
                $(this).children(".c_box").removeClass("on")
            }else{
                $(this).children(".c_box").addClass("on")
            }
        }
    })
    $("section .division").click(function(){
        if($("section .division .check li:eq(1) .c_box").hasClass("on") || $("section .division .check li:eq(0) .c_box").hasClass("on")){
            $("section .info .01").css({
                display:"block"
            })
        }else{
            $("section .info .01").css({
                display:"none"
            })
        }
        if($("section .division .check li:eq(2) .c_box").hasClass("on") || $("section .division .check li:eq(0) .c_box").hasClass("on")){
            $("section .info .02").css({
                display:"block"
            })
        }else{
            $("section .info .02").css({
                display:"none"
            })
        }
        if($("section .division .check li:eq(3) .c_box").hasClass("on") || $("section .division .check li:eq(0) .c_box").hasClass("on")){
            $("section .info .03").css({
                display:"block"
            })
        }else{
            $("section .info .03").css({
                display:"none"
            })
        }
        if($("section .division .check li:eq(4) .c_box").hasClass("on") || $("section .division .check li:eq(0) .c_box").hasClass("on")){
            $("section .info .04").css({
                display:"block"
            })
        }else{
            $("section .info .04").css({
                display:"none"
            })
        }
        if($("section .division .check li:eq(5) .c_box").hasClass("on") || $("section .division .check li:eq(0) .c_box").hasClass("on")){
            $("section .info .05").css({
                display:"block"
            })
        }else{
            $("section .info .05").css({
                display:"none"
            })
        }
        if($("section .division .check li:eq(6) .c_box").hasClass("on") || $("section .division .check li:eq(0) .c_box").hasClass("on")){
            $("section .info .06").css({
                display:"block"
            })
        }else{
            $("section .info .06").css({
                display:"none"
            })
        }
    })

    $("section .division .btn").click(function(){
        if($(this).hasClass("off")){
            $(this).attr("src", "coffee_image/list_up_btn.png");
            $("section .division .btm").css({
                display:"block"
            })
            $(this).removeClass("off")
        }else{
            $(this).attr("src", "coffee_image/list_down_btn.png");
            $("section .division .btm").css({
                display:"none"
            })
            $(this).addClass("off")
        }
    })

    $("section .select .sub").click(function(){
        $("section .select .list").css({
            display:"block"
        })
    })
    $("section .select>div").mouseleave(function(){
        $("section .select .list").css({
            display:"none"
        })
    })
    // $("section .select .c_box").click(function(){
    //     if($(this).hasClass("on")){
    //         $(this).removeClass("on")
    //     }else{
    //         $(this).addClass("on")
    //     }
    // })
    $("section .select .list>div").click(function(){
        if($(this).children(".c_box").hasClass("on")){
            $(this).children(".c_box").removeClass("on")
        }else{
            $(this).children(".c_box").addClass("on")
        }
    })
})