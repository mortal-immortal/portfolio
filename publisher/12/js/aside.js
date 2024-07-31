$(function(){
    var ds_section3_top0=setInterval(function(){
        $("#section3 .ds_top").eq(0).animate({
            left:"100%"
        },10000,function(){
            $("#section3 .ds_top").css({
                left: "-110%"
            })
        })
    })
    var ds_section3_top1=setInterval(function(){
        $("#section3 .ds_top").eq(1).animate({
            left:"100%"
        },10000,function(){
            $("#section3 .ds_top").css({
                left: "-110%"
            })
        })
    },5000)
    var ds_section3_bottom0=setInterval(function(){
        $("#section3 .ds_bottom").eq(0).animate({
            right:"100%"
        },10000,function(){
            $("#section3 .ds_bottom").css({
                right: "-110%"
            })
        })
    })
    var ds_section3_bottom1=setInterval(function(){
        $("#section3 .ds_bottom").eq(1).animate({
            right:"100%"
        },10000,function(){
            $("#section3 .ds_bottom").css({
                right: "-110%"
            })
        })
    },5000)
    var ds_aside=false
    $("aside").hover(function(){
        $(".ds_aside_chara").animate({
            width:"0",
            height:"0",
            right: "25%"
        },500,function(){
            $(this).css({
                display:"none"
            })
            $(".ds_ball").css({
                display:"none"
            })
        })
        $(".ds_aside_logo").animate({
            width:"100%"
        })
        $(".ds_aside_bottom img").eq(0).animate({
            bottom:0
        },function(){
        $(".ds_aside_bottom img").eq(1).animate({
            bottom:0
        },150,function(){
        $(".ds_aside_bottom img").eq(2).animate({
            bottom:0
        },150,function(){
        $(".ds_aside_bottom img").eq(3).animate({
            bottom:0
        },150,function(){
        $(".ds_aside_bottom img").eq(4).animate({
            bottom:0
        },150,function(){
        $(".ds_aside_bottom img").eq(5).animate({
            bottom:0
        },150,function(){
        $(".ds_aside_bottom img").eq(6).animate({
            bottom:0
        },100,function(){
            $(".ds_aside_bottom").animate({
                bottom:"200px"
            },function(){
            var ds_aside=true
            // alert(ds_aside)
            
            if (ds_aside=true){
            $(".ds_aside_bottom img").eq(0).hover(function(){
                $('aside').css({
                    background: "brown"
                })
                $(".ds_aside_logo").css({
                    background:"none",
                    top:250
                }).text("ciao, i'm Brown")
            },function(){
                $('aside').css({
                    background: "rgb(255, 210, 0)"
                })
                $(".ds_aside_logo").css({
                    background: "url(../ds_images/로고.svg)no-repeat center/contain",
                    top:"50%"
                }).text("")
            })
            $(".ds_aside_bottom img").eq(1).hover(function(){
                $('aside').css({
                    background: "orange"
                })
                $(".ds_aside_logo").css({
                    background:"none",
                    top:250,
                    fontSize:150
                }).text("booo, who's there?")
            },function(){
                $('aside').css({
                    background: "rgb(255, 210, 0)"
                })
                $(".ds_aside_logo").css({
                    background: "url(../ds_images/로고.svg)no-repeat center/contain",
                    top:"50%",
                    fontSize:200
                }).text("")
            })
            $(".ds_aside_bottom img").eq(2).hover(function(){
                $('aside').css({
                    background: "purple"
                })
                $(".ds_aside_logo").css({
                    background:"none",
                    top:250
                }).text("hi! i'm Purple")
            },function(){
                $('aside').css({
                    background: "rgb(255, 210, 0)"
                })
                $(".ds_aside_logo").css({
                    background: "url(../ds_images/로고.svg)no-repeat center/contain",
                    top:"50%"
                }).text("")
            })
            $(".ds_aside_bottom img").eq(3).hover(function(){
                $('aside').css({
                    background: "red"
                })
                $(".ds_aside_logo").css({
                    background:"none",
                    top:250
                }).text("hey, i'm Red")
            },function(){
                $('aside').css({
                    background: "rgb(255, 210, 0)"
                })
                $(".ds_aside_logo").css({
                    background: "url(../ds_images/로고.svg)no-repeat center/contain",
                    top:"50%"
                }).text("")
            })
            $(".ds_aside_bottom img").eq(4).hover(function(){
                $('aside').css({
                    background: "yellow"
                })
                $(".ds_aside_logo").css({
                    background:"none",
                    top:250,
                    textShadow: "1px 1px black",
                    fontSize:150
                }).text("howdy, i'm Yellow")
            },function(){
                $('aside').css({
                    background: "rgb(255, 210, 0)"
                })
                $(".ds_aside_logo").css({
                    background: "url(../ds_images/로고.svg)no-repeat center/contain",
                    top:"50%",
                    textShadow: "none",
                    fontSize:200
                }).text("")
            })
            $(".ds_aside_bottom img").eq(5).hover(function(){
                $('aside').css({
                    background: "green"
                })
                $(".ds_aside_logo").css({
                    background:"none",
                    top:250
                }).text("hiya, i'm Green")
            },function(){
                $('aside').css({
                    background: "rgb(255, 210, 0)"
                })
                $(".ds_aside_logo").css({
                    background: "url(../ds_images/로고.svg)no-repeat center/contain",
                    top:"50%"
                }).text("")
            })
            $(".ds_aside_bottom img").eq(6).hover(function(){
                $('aside').css({
                    background: "blue"
                })
                $(".ds_aside_logo").css({
                    background:"none",
                    top:250
                }).text("sup, i'm Blue")
            },function(){
                $('aside').css({
                    background: "rgb(255, 210, 0)"
                })
                $(".ds_aside_logo").css({
                    background: "url(../ds_images/로고.svg)no-repeat center/contain",
                    top:"50%"
                }).text("")
            })
            }
            })
        })
        })
        })
        })
        })
        })
        })
    })
    $(window).on("scroll",function(){
        var ds_test=$(this).scrollTop();
        // $(".test").text(ds_test);
        if(ds_test>=ds_footer_top){
            $("footer .ds_top .ds_main").css({
                // background: "url(../ds_images/footer.png) no-repeat center"
                backgroundSize: "100%"
            })
        }
        $(".mouse").fadeOut(500)
        if(ds_test==0){
            $(".mouse").fadeIn(500)
        }
    })
    var ds_footer_top=$("footer").offset().top-150;

    if($(".move_text").offset().left==0){
        $(".move_text").stop().animate({
            left:"-100%"
        },15000,"linear")
    }
    
    var text_slide1=setInterval(function(){
        if(-1*($(".ds_move1 .move_text").offset().left)>=$(".ds_move1 .move_text span:eq(0)").width()+75){
            $(".ds_move1 .move_text").stop()
            $(".ds_move1 .move_text span:eq(0)").appendTo(".ds_move1 .move_text")
            $(".ds_move1 .move_text").css({
                left:"0"
            })
            $(".ds_move1 .move_text").stop().animate({
                left:"-100%"
            },15000,"linear")
        }
    })
    var text_slide2=setInterval(function(){
        if(-1*($(".ds_move2 .move_text").offset().left)>=$(".ds_move2 .move_text span:eq(0)").width()+75){
            $(".ds_move2 .move_text").stop()
            $(".ds_move2 .move_text span:eq(0)").appendTo(".ds_move2 .move_text")
            $(".ds_move2 .move_text").css({
                left:"0"
            })
            $(".ds_move2 .move_text").stop().animate({
                left:"-100%"
            },15000,"linear")
        }
    })
    $(".ds_move1").css({
        transform: "rotate(5deg)",
        left:"-20px",
        top:"-100px"
    })
    $(".ds_move2").css({
        transform: "rotate(-5deg)",
        left:"-20px",
        top:"200px"
    })


    var n = 0; //오른쪽 버튼 위치지정변수 선언
        var t = 0; //윈도우의 높이 지정 변수
        var moving=false    //움직이고 있는지 아닌지를 부울함수형식으로 변수선언
        $(".controller li").eq(n).find("a").addClass("on")
        $(".controller li a").click(function(e){
            e.preventDefault()  //a링크 막아주기
            n=$(this).parent().index()  //0,2,3,4,
            // console.log("n:"+n)
            if(n>0){
            t=$(".sub").eq(n-1).offset().top
        }else{
            t=0
        }
        // console.log("t:"+t)
        $("html,body").stop().animate({
            scrollTop:t
        },800,function(){
            $(".controller li").find("a").removeClass("on")
            $(".controller li").eq(n).find("a").addClass("on")
        })  //animate end
        })  //button click end
        $("body,html").on("mousewheel",function(e,delta){
            $(".move_text").stop().animate({
                left:"-300%"
            },1000,"linear")
        })
        // $("body,html").on(!"mousewheel",function(e,delta){
        //     $(".move_text").animate({
        //         left:"-100%"
        //     },5000,"linear")
        // })
})  // end