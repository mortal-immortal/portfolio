$(function(){
    $("body,html").stop().animate({ //페이지 로딩되자마자 제일 상단 스크롤 이동
        scrollTop:0
    },1500,"swing")

    $(window).scroll(function(){    //화면 스크롤 시 사용자가 스크롤한 만큼의 거리를 저장
        var scroll=$(this).scrollTop()

        for(var i=0; i<5; i++){ //스크롤값과 박스의 z축 연동
            $("section>article").eq(i).css({
                transform:"translateZ(" + parseInt((-5000*i)+scroll) + "px)"
            })
        }
        for(var i=0; i<5; i++){
            if(scroll>=i*5000 && scroll<(i+1)*5000){
                $(".scrollNavi li").removeClass()
                $(".scrollNavi li").eq(i).addClass("on")
                $("article").removeClass()
                $("article").eq(i).addClass("on")
            }
        }
    })

    // 스크롤 네비게이션 클릭 시 스크롤 이동
    $(".scrollNavi li").on("click",function(){
        var a = $(this).index()
        top=a
        $("body,html").stop().animate({
            scrollTop:5000*a
        },1500,"swing")
    })

    // 화면에서 마우스 무브 시 박스안의 콘텐츠 움직이기
    $("body").on("mousemove",function(e){
        var posX = e.pageX/100
        var posY = e.pageY/150

        $(".obj1g").css({
            left:-175-posX,
            bottom:0-posY
        })
        $(".obj1c").css({
            right:50-posX,
            botom:0-posY
        })

        $(".obj2g").css({
            left:-175-posX,
            bottom:0-posY
        })
        $(".obj2c").css({
            right:50-posX,
            botom:0-posY
        })

        $(".obj3g").css({
            right:-175-posX,
            bottom:50-posY
        })
        $(".obj3c").css({
            left:50-posX,
            botom:0-posY
        })

        $(".obj4g").css({
            left:-175-posX,
            bottom:100-posY
        })
        $(".obj4c").css({
            right:50-posX,
            botom:0-posY
        })

        $(".obj5g").css({
            right:-175-posX,
            bottom:120-posY
        })

        $(".obj5c").css({
            left:50-posX,
            botom:0-posY
        })
    })
    // $("body").click(function(){
    //     console.log($("html,body").scrollTop())
    // })
    var top=0
    $("body").on("mousewheel", function(event,delta){
        // console.log($(window).scrollTop())
        if(delta>0){ //마우스힐을 올렸을때
            if(top!=0){
                top--
                $("html,body").stop().animate({
                    scrollTop:top*5000
                })
            }
        } else if(delta<0){ //마우스 휠을 내렸을때
            console.log(top)
            if(top<=3){
                top++
                $("html,body").stop().animate({
                    scrollTop:top*5000
                })
            }else if($(window).scrollTop()>=20000){
                $("html,body").stop().animate({
                    scrollTop:top*5000
                })
            }
        }
    })
})