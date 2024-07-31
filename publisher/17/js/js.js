$(function(){
    var n=0;    //GNB 1Deph의 이동 번호 변수
    var distance    //GNB 1Deph의 이동량 변수
    var total=7     //GNB 1Deph의 전체 메뉴의 개수 변수

    //GNB 1Deph
    $(window).resize(function(){
        distance=$("#gnb .menu").width()/3
    })
    $(window).trigger("resize")

    $("#gnb .prev").click(function(e){
        e.preventDefault()
        if(n>0){
            n--
            $("#gnb .menu ul").animate({
                left:n*(-1)*distance
            })
        }
    })
    $("#gnb .next").click(function(e){
        e.preventDefault()
        if(n<total-3){
            n++
            $("#gnb .menu ul").animate({
                left:n*(-1)*distance
            })
        }
    })

    // Keyvisual
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        autoplay:true,
        smartSpeed:400
    })

    // Search Form
    $(".search").click(function(e){
        e.preventDefault()
        $(this).toggleClass("active")
        $(".search_open").toggleClass("active")
        $(".search_open input[type=text]").focus()
    })

    // Mobile GNB
    $("#header .tab").click(function(e){
        e.preventDefault()
        $(".wrapper").addClass("ismenu")
        $("#header").addClass("ismenu")
        $("#header .tab").addClass("active")
        $(".gnb_open").addClass("active")
        $("body, html").addClass("prevent")
        $(".gnb_open .location li").first().find("a").focus()
        $(".dim").fadeIn(300)
    })

    $(".dim").click(function(){
        $(".wrapper").removeClass("ismenu")
        $("#header").removeClass("ismenu")
        $("#header .tab").removeClass("active")
        $(".gnb_open").removeClass("active")
        $("body, html").removeClass("prevent")
        $(".dim").fadeOut(300)
        $(".gnb_open .color .tit").removeClass("active")
        $(".gnb_open .color .tit").next(".tab_con").slideUp(300)
        $(".gnb_open .pattern .tit").removeClass("active")
        $(".gnb_open .pattern .tit").next(".tab_con").slideUp(300)
    })
    $(".sns li").last().focusout(function(){
        if($(".gnb_open").hasClass("active")){
            $(".gnb_open .location li").first().find("a").focus()
        }
    })
    $(".gnb_open .color .tit, .gnb_open .pattern .tit").click(function(e){
        e.preventDefault()
        $(this).toggleClass("active")
        $(this).next(".tab_con").slideToggle(300)
    })

    // Slim Scroll
    $(".gnb_open_inner").slimscroll({
        height:"100%"
    })

    // Top Button
    $(window).scroll(function(){
        t=$(window).scrollTop()
        
        if(t>180){
            $(".btn_top a").fadeIn(200)
        }else{
            $(".btn_top a").fadeOut(200)
        }
    })
    $(window).trigger("scroll")

    $(".btn_top a").click(function(e){
        e.preventDefault()
        $("body, html").animate({
            scrollTop:0
        })
    })

    // Story Tab
    $("#story .story_list>ul>li").click(function(e){
        e.preventDefault()
        $("#story .story_list>ul>li").removeClass("active")
        $(this).addClass("active")
        $("#story .photo").removeClass("active")
        $(this).children(".photo").addClass("active")
    })
})