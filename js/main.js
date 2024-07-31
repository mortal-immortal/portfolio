$(function(){
    var mobile = false
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)==true || $(window).width()<=500){
        mobile = true
    }
    // alert(mobile)
    $(window).resize(function(){
        web=$(window).height()
        screen=$(window).width()
        step = 0
        $("body").trigger("mousewheel")
        $("html,body").stop().animate({
            scrollTop:step*web
        },function(){
            wheel=false
        })
        if(screen<=500){
            mobile = true
        }else{
            mobile = false
        }
    })

    // 연속 스크롤 방지
    if(mobile==false){
        const $body = document.querySelector('body');
        function preventScroll(e) {
            e.preventDefault();
        }
        $body.addEventListener('wheel', preventScroll, { passive: false });
    }

    var step=0
    var web=$(window).height()
    var screen=$(window).width()
    var intro=true

    var start
    var end
    // alert($("body section:has(:last)").index())

    // 인트로
    var guide_1 = false
    var guide_2 = false
    var guide_3 = false
    var guide_4 = false
    var title = setTimeout(function(){
        $("#title_bg .s1").animate({
            left:"-130%"
        },7000)
        $("#title_bg .s2").delay(500).animate({
            right:"-135%"
        },6500)
        $("#title_bg .s3").delay(1500).animate({
            left:"-145%"
        },6000)
        $("#title_bg .s4").delay(2000).animate({
            right:"-135%"
        },6500)
        $("#title_main span").eq(0).delay(200).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(1).delay(410).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(2).delay(630).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(3).delay(860).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(4).delay(1100).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(5).delay(1350).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(6).delay(1610).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(7).delay(1880).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(8).delay(2160).animate({
            left:0,
            opacity:1
        },1000)
        $("#title_main span").eq(0).delay(2500).animate({
            left:"-360px",
            opacity:0
        },600)
        $("#title_main span").eq(1).delay(2450).animate({
            left:"-360px",
            opacity:0
        },550)
        $("#title_main span").eq(2).delay(2400).animate({
            left:"-360px",
            opacity:0
        },500)
        $("#title_main span").eq(3).delay(2350).animate({
            left:"-360px",
            opacity:0
        },450)
        $("#title_main span").eq(4).delay(2300).animate({
            left:"-360px",
            opacity:0
        },400)
        $("#title_main span").eq(5).delay(2250).animate({
            left:"-360px",
            opacity:0
        },350)
        $("#title_main span").eq(6).delay(2200).animate({
            left:"-360px",
            opacity:0
        },300)
        $("#title_main span").eq(7).delay(2150).animate({
            left:"-360px",
            opacity:0
        },250)
        $("#title_main span").eq(8).delay(2100).animate({
            left:"-360px",
            opacity:0
        },200,function(){
            $('html,body').animate({
                scrollTop:0
            })
            if(mobile==false){
                $("#main .logo").stop().animate({
                    left: "65%",
                    top: "50%",
                    width: "500px",
                    height: "435px"
                })
            }else{
                $("#main .logo").stop().animate({
                    left: "50%",
                    top: "42%",
                    width: "250px",
                    height: "220px"
                })
            }
            $("#main .logo").addClass("shadow")
            step=0
            clearInterval(logo_c)
            logo_c = setInterval(logo_move,2000)
            $("#title").fadeOut(500)
            intro=false
            start=false
            end=false
            $("#cursor").css({
                display:"block"
            })
            // $("#cursor .c1").css({
            //     top:posY,
            //     left:posX
            // })
            $("#cursor .c2").css({
                top:$("#cursor .c1").offset().top-1,
                left:$("#cursor .c1").offset().left-1
            })
            $("#cursor .c3").css({
                top:$("#cursor .c2").offset().top+1,
                left:$("#cursor .c2").offset().left+1
            })

            var main_top=$("#main .logo").offset().top
            var main_left=$("#main .logo").offset().left-5
            $("#guide img").css({
                top:($("#cursor .c1").offset().top)-1,
                left:($("#cursor .c1").offset().left)-1
            })
            if(mobile==false){
                $("#guide img").stop().show(150).delay(1000).animate({
                    top: main_top+217.5,
                    left: main_left+250
                },1000,"easeInOutSine").animate({
                    scale:1
                },200).animate({
                    scale:.1,
                    top: main_top+212.5,
                    left: main_left+245
                },100).animate({
                    scale:1,
                    top: main_top+217.5,
                    left: main_left+250
                },350).animate({
                    scale:.1,
                    top: main_top+212.5,
                    left: main_left+245
                },100).animate({
                    scale:1,
                    top: main_top+117.5,
                    left: main_left+250
                },350).fadeOut(500)
            }else{
                $("#guide img").stop().show(150).delay(1000).animate({
                    top: main_top+107.5,
                    left: main_left+125
                },1000,"easeInOutSine").animate({
                    scale:1
                },200).animate({
                    scale:.1,
                    top: main_top+102.5,
                    left: main_left+120
                },100).animate({
                    scale:1,
                    top: main_top+107.5,
                    left: main_left+125
                },350).animate({
                    scale:.1,
                    top: main_top+102.5,
                    left: main_left+120
                },100).animate({
                    scale:1,
                    top: main_top+107.5,
                    left: main_left+125
                },350).fadeOut(500)
            }
        })
    })

    // 메인
    var main = setTimeout(function(){
        $("body").delay(6000).queue(function(next){
        // $("body").delay(0).queue(function(next){
            
            $("#main .bg").css({
                transform: "translateX(-50%) rotateZ(-65deg)"
            })
            if(mobile==false){
                $("#main .n_text").animate({
                    top:"80%"
                },2000)
            }else{
                $("#main .n_text").animate({
                    bottom:"24%"
                },2000)
            }
            $("#main .t_text").animate({
                left:0
            },2000)
            $("#main .t_text .t1").animate({
                left:"10px"
            },2000)
            $("#main .t_text .t2").delay(250).animate({
                left:0
            },1750)
            $("#main .t_text .t3").delay(500).animate({
                left:0
            },1500)
            $("#main .t_text .t4").delay(1000).animate({
                left:"13px"
            },1000)
            $("#main .bg span").animate({
                left:"100%"
            },3000,function(){
                $(this).css({
                    left: "-50%"
                })
                $(this).animate({
                    left:"100%"
                },2000)
            })
            next()
            $("#main .bg").delay(750).queue(function(b_next){
                $(this).css({
                    transform: "translateX(-50%) rotateZ(-40deg)"
                })
                b_next()
            })
            $("#main .bg").delay(750).queue(function(b_next){
                $(this).css({
                    transform: "translateX(-50%) rotateZ(-15deg)"
                })
                b_next()
            })
        })
    })

    $("#main .note").hover(function(){
        if(intro==false){
            $(this).fadeOut()
        }
    })

    // 로고
    var r_c = 0
    let logo_c = setInterval(logo_move,2000)

    function logo_move() {
        r_c+=60
        $("#main .logo .f_logo").eq(0).css({
            transform: "rotateZ("+r_c+"deg)"
        })
        $("#main .logo .f_logo").eq(1).delay(150).queue(function(next_c){
            $(this).css({
                transform: "rotateZ("+r_c+"deg)"
            })
            next_c()
        })
        $("#main .logo .f_logo").eq(2).delay(300).queue(function(next_c){
            $(this).css({
                transform: "rotateZ("+r_c+"deg)"
            })
            next_c()
        })
    }

    $("#main .logo").hover(function(){
        if(step!=0){
            $(this).addClass("shadow")
        }
    },function(){
        if(step!=0){
            $(this).removeClass("shadow")
        }
    })

    // 메뉴
    var m_open = false
    var m_box = false

    $("#main .logo").click(function(){
        if(intro==false&&m_open==false){
            m_open=true
            $("#menu i").css({
                rotate: "0deg"
            })
            $("#menu").stop().animate({
                top:"50%",
                opacity:1
            },750)
            $("#menu").animate({
                width:"30px",
                height:"30px"
            },200)
            $("#menu").animate({
                width:"3000px",
                height:"3000px"
            },500,function(){
                m_box = true
                $(this).css({
                    width:"100%",
                    height:"100%",
                    borderRadius:"0"
                })
                $("#menu li").stop().slideDown()
                $("#menu i").stop().animate({
                    opacity:1,
                    rotate: "720deg"
                },1500)
            })
        }
    })

    $("#menu i").click(function(){
        if(m_box==true){
            m_box=false
            $("#menu i").stop().animate({
                opacity:0
            })
            $("#menu li").stop().slideUp()
            $("#menu").css({
                width:"3000px",
                height:"3000px",
                borderRadius:"50%"
            })
            $("#menu").stop().animate({
                width:"0",
                height:"0"
            },1100,"easeOutBounce",function(){
                m_open=false
                $(this).css({
                    width: "50px",
                    height: "50px",
                    opacity:0,
                    top: "110%"
                })
            })
        }
    })
    $("#menu li").click(function(){
        if(m_box==true){
            m_box=false
            step = $(this).index()
            $("body").trigger("mousewheel")
            $("html,body").stop().animate({
                scrollTop:step*web
            },function(){
                wheel=false
            })
            $("#menu i").stop().animate({
                opacity:0
            })
            $("#menu li").stop().slideUp()
            $("#menu").css({
                width:"3000px",
                height:"3000px",
                borderRadius:"50%"
            })
            $("#menu").stop().animate({
                width:"0",
                height:"0"
            },1100,"easeOutBounce",function(){
                m_open=false
                $(this).css({
                    width: "50px",
                    height: "50px",
                    opacity:0,
                    top: "110%"
                })
            })
        }
    })

    // 탑
    $("#top").click(function(){
        step=0
        $("body").trigger("mousewheel")
        $("html,body").stop().animate({
            scrollTop:step*web
        },function(){
            wheel=false
        })
    })

    // 소개
    $("#about_me .main>div").hover(function(){
        if(step==1){
            $("#about_me .main>div").stop()
            $("#about_me .main>div .text").stop()
            $(this).css({
                zIndex:1
            })
            $(this).children(".box").css({
                width:"100%"
            })
            $(this).stop().animate({
                scale:1.1,
                bottom:"200px",
                height:"500px",
            }).fadeIn().siblings().stop().fadeOut()
            $(this).children(".box").children(".text").stop().delay(250).fadeIn()
        }
    },function(){
        if(step==1){
            $("#about_me .main>div").stop()
            $("#about_me .main>div .text").stop()
            $("#about_me .main>div").css({
                zIndex:0
            })
            if(mobile==false){
                $("#about_me .main>div .box").css({
                    width:"55%"
                })
            }else{
                $("#about_me .main>div .box").css({
                    width:"100%"
                })
            }
            if(mobile==false){
                $("#about_me .main .history").stop().animate({
                    bottom:"200px",
                    scale: 1,
                    height:"130px",
                }).fadeIn()
                $("#about_me .main .license").stop().animate({
                    bottom:"350px",
                    scale: .8,
                    height:"130px",
                }).fadeIn()
                $("#about_me .main .skill").stop().animate({
                    bottom:"460px",
                    scale: .6,
                    height:"130px",
                }).fadeIn()
            }else{
                $("#about_me .main .history").stop().animate({
                    bottom:"200px",
                    scale: 1,
                    height:"130px",
                }).fadeIn()
                $("#about_me .main .license").stop().animate({
                    bottom:"350px",
                    scale: 1,
                    height:"130px",
                }).fadeIn()
                $("#about_me .main .skill").stop().animate({
                    bottom:"460px",
                    scale: 1,
                    height:"130px",
                }).fadeIn()
            }
            $("#about_me .main>div .text").stop().fadeOut()
        }
    })

    $("#about_me .main .skill").hover(function(){
        $("#about_me .main .ps .bar").stop().delay(500).animate({
            width:"85%"
        },850)
        $("#about_me .main .ai .bar").stop().delay(500).animate({
            width:"90%"
        },900)
        $("#about_me .main .id .bar").stop().delay(500).animate({
            width:"50%"
        },500)
        $("#about_me .main .ae .bar").stop().delay(500).animate({
            width:"45%"
        },450)
        $("#about_me .main .hc .bar").stop().delay(500).animate({
            width:"100%"
        },1000)
        $("#about_me .main .js .bar").stop().delay(500).animate({
            width:"80%"
        },800)
        $("#about_me .main .vr .bar").stop().delay(500).animate({
            width:"50%"
        },500)
        $("#about_me .main .fg .bar").stop().delay(500).animate({
            width:"80%"
        },800)
    },function(){
        $("#about_me .main .skill .text .bar").stop().animate({
            width:0
        })
    })

    // 디자인
    $("#design .main .card .img").click(function(){
        $("#design .main").append($("#design .main .card").eq(0))
    })

    var drag = false
    var d_img
    var t_box
    var f_num = 0
    // 퍼블리셔
    var dragtop = setInterval(function(){
        if(mobile==false){
            if(drag==true){
                $("html,body").animate({
                    scrollTop:step*web
                },0,function(){
                    wheel=false
                })
            }
        }
    })

    $("#publisher .folder_number p").html("empty")

    // 카드
    var contact = setInterval(function(){
        $("#contact").append('<img class="bubble" src="./image/box/bubble.svg" alt="#">')
        $("#contact .bubble:last").css({
            zIndex:0,
            scale:(Math.random()*0.5)+0.5,
            left:Math.random()*100+"%",
            bottom:"-25%"
        })
        $("#contact .bubble:last").animate({
            bottom:"150%",
            scale:0
        },10000,"linear",function(){
            $(this).remove()
        })
    },400)

    $("#card").click(function(){
        $('#contact .text').remove()
        $("#card").css({
            transform: "translate(-50%,-50%) rotateX(90deg)"
        })
        $("#card").delay(500).queue(function(card){
            $("#card_back").css({
                opacity:1,
                transform: "translate(-50%,-50%) rotateX(0deg)"
            })
        })
    })


    // 드래그
    $("#publisher .img .box").draggable({
        // containment : 'parent',
        start : function(e){
            $(this).parent().css({
                zIndex:1
            }).siblings().css({
                zIndex:0
            })
            drag = true
            d_img = $(this).children("img").attr("src")
            t_box = $(this).parent()
            i_box = $(this)
            $("#publisher .check .img_show").attr("src",d_img)
            $("#publisher .check .img_show").css({
                display:"block"
            })
            $("#cursor").css({
                display:"none"
            })
            $("#publisher .img img").css({
                cursor: "move"
            })
            $("#publisher .folder img").css({
                pointerEvents:"all"
            })
            $("#publisher .check img").css({
                pointerEvents:"all"
            })
        },
        stop : function(){
            drag = false
            $("#publisher .img img").css({
                cursor: "none"
            })
            $("#publisher .folder img").css({
                pointerEvents:"none"
            })
            $("#publisher .check img").css({
                pointerEvents:"none"
            })
        }
    })

    $("#publisher .check").mouseleave(function(){
        if(drag==false){
            t_box.addClass("recycle")
            var pi_num = (t_box.index()+1)
            if($("#publisher .img .ib"+pi_num+"").hasClass("recycle")){
                $("#publisher .big_f .main .pf"+pi_num+"").addClass("on")
            }
            f_num++
            if(f_num>0){
                $("#publisher .folder_number p").html(f_num+"<br>check!")
            }
            if(i_box.hasClass("p1")){
                window.open("./publisher/1/DISTANT_HORIZONE.html")
            }
            if(i_box.hasClass("p2")){
                window.open("./publisher/2/Assemble.html")
            }
            if(i_box.hasClass("p3")){
                window.open("./publisher/3/index_faker.html")
            }
            if(i_box.hasClass("p4")){
                window.open("./publisher/4/asiana.html")
            }
            if(i_box.hasClass("p5")){
                window.open("./publisher/5/index.html")
            }
            if(i_box.hasClass("p6")){
                window.open("./publisher/6/index_pokemon.html")
            }
            if(i_box.hasClass("p7")){
                window.open("./publisher/7/index.html")
            }
            if(i_box.hasClass("p8")){
                window.open("./publisher/8/index_cosmetics.html")
            }
            if(i_box.hasClass("p9")){
                window.open("./publisher/9/nike.html")
            }
            if(i_box.hasClass("p10")){
                window.open("./publisher/10/index.html")
            }
            if(i_box.hasClass("p11")){
                window.open("./publisher/11/RADEON.html")
            }
            if(i_box.hasClass("p12")){
                window.open("./publisher/12/index.html")
            }
            if(i_box.hasClass("p13")){
                window.open("./publisher/13/한국닌텐도.html")
            }
            if(i_box.hasClass("p14")){
                window.open("./publisher/14/index.html")
            }
            if(i_box.hasClass("p15")){
                window.open("./publisher/15/index.html")
            }
            if(i_box.hasClass("p16")){
                window.open("./publisher/16/pulmuone.html")
            }
            if(i_box.hasClass("p17")){
                window.open("./publisher/17/index.html")
            }
            if(i_box.hasClass("p18")){
                window.open("./publisher/18/index.html")
            }
            if(i_box.hasClass("p19")){
                window.open("./publisher/19/hollys.html")
            }
            if(i_box.hasClass("p20")){
                window.open("./publisher/20/cafemememi.html")
            }
        }
    })

    $("#publisher .folder").hover(function(){
        if(drag==true){
            $("#publisher .folder img").attr("src","image/box/folder_open.svg")
        }
    },function(){
        $("#publisher .folder img").attr("src","image/box/folder.svg")
        if(drag==false){
            t_box.addClass("recycle")
            var pi_num = (t_box.index()+1)
            f_num++
            if(f_num>0){
                $("#publisher .folder_number p").html(f_num+"<br>check!")
            }
            if($("#publisher .img .ib"+pi_num+"").hasClass("recycle")){
                $("#publisher .big_f .main .pf"+pi_num+"").addClass("on")
            }
        }
    })

    $("#publisher .f_open").hover(function(){
        $("#publisher .folder img").attr("src","image/box/folder_open.svg")
    },function(){
        $("#publisher .folder img").attr("src","image/box/folder.svg")
    })

    var f_open = false
    $("#publisher .f_open").click(function(){
        if(f_open==false){
            $("#publisher .folder").css({
                display:"none"
            })
            $("#publisher .big_f").css({
                display:"block"
            })
            if(mobile==false){
                $("#publisher .big_f .bg").stop().animate({
                    bottom:"-35%"
                })
            }else{
                $("#publisher .big_f .bg").stop().animate({
                    bottom:"-10%"
                })
            }
            if(mobile==false){
                $("#publisher .big_f").stop().animate({
                    right: "-40%",
                    bottom: "-15%",
                    width: "140%",
                    height: "140%",
                },function(){
                    f_open=true
                })
            }else{
                $("#publisher .big_f").stop().animate({
                    right: "-140%",
                    bottom: "-40%",
                    width: "300%",
                    height: "140%",
                },function(){
                    f_open=true
                })
            }
        }
    })
    $("#publisher .big_f .bg").click(function(){
        if(f_open==true){
            $("#publisher .big_f .bg").stop().animate({
                bottom:"0"
            })
            $("#publisher .big_f").stop().animate({
                right: "-1%",
                bottom: "5%",
                width: "150px",
                height: "150px",
            },function(){
                $("#publisher .big_f").css({
                    display:"none"
                })
                f_open=false
                $("#publisher .folder").css({
                    display:"block"
                })
            })
        }
    })

    $("#publisher .big_f .main li").click(function(){
        var big_num = ($(this).index())+1
        $(this).removeClass("on")
        $(this).addClass("remove")
        f_num--
        if(f_num>0){
            $("#publisher .folder_number p").html(f_num+"<br>check!")
        }else{
            $("#publisher .folder_number p").html("empty")
        }
        if($("#publisher .big_f .main .pf"+big_num+"").hasClass("remove")){
            $("#publisher .img .ib"+big_num+"").removeClass("recycle")
            $("#publisher .big_f .main .pf"+big_num+"").removeClass("remove")
            $("#publisher .img .ib"+big_num+"").css({
                left:"-40%"
            })
            $("#publisher .img .p"+big_num+"").css({
                top:"-40%",
                left:0
            })
            $("#publisher .img .ib"+big_num+"").animate({
                left:Math.round(Math.random()*70)+"%"
            },2000,"easeOutCubic")
            $("#publisher .img .p"+big_num+"").animate({
                top:Math.round(Math.random()*70)+"%"
            },2000,"easeOutBounce")
        }
    })

    // 스크롤
    var wheel=true
    $("html,body").stop().animate({
        scrollTop:0
    },function(){
        wheel=false
    })

    $("body").on("mousewheel", function(event,delta){
        

        if(mobile==false){
            var w_top = $("#cursor .c1").offset().top
            if(delta>0 && mobile==false){ //마우스힐을 올렸을때
                if(wheel==false){
                    if(step!=0){
                        wheel=true
                        step--
                        // console.log(step)
                        // console.log(web)
                        // console.log(wheel)
                        $("html,body").stop().animate({
                            scrollTop:step*web
                        },function(){
                            $("#cursor .c1").css({
                                top:(w_top+12.5)-web
                            })
                            $("#cursor .c2").css({
                                top:$("#cursor .c1").offset().top-1
                            })
                            $("#cursor .c3").css({
                                top:$("#cursor .c2").offset().top+1
                            })
                            if(step!=4){
                                $("#guide img").css({
                                    top:$("#cursor .c1").offset().top-1,
                                    left:$("#cursor .c1").offset().left-1
                                })
                            }
                            wheel=false
                        })
                    }else{
                        step=0
                        wheel=false
                    }
                }
            } else if(delta<0 && mobile==false){ //마우스 휠을 내렸을때
                if(wheel==false){
                    if(step<$("body section:has(:last)").index()-1){
                        wheel=true
                        step++
                        // console.log(step)
                        // console.log(web)
                        // console.log(wheel)
                        $("html,body").stop().animate({
                            scrollTop:step*web
                        },function(){
                            $("#cursor .c1").css({
                                top:(w_top+12.5)+web
                            })
                            $("#cursor .c2").css({
                                top:$("#cursor .c1").offset().top-1
                            })
                            $("#cursor .c3").css({
                                top:$("#cursor .c2").offset().top+1
                            })
                            if(step!=4){
                                $("#guide img").css({
                                    top:$("#cursor .c1").offset().top-1,
                                    left:$("#cursor .c1").offset().left-1
                                })
                            }
                            wheel=false
                        })
                    }else{
                        step=$("body section:has(:last)").index()-1
                        wheel=false
                    }
                }
            }

            if(step==0&&intro==false){    //타이틀
                if(mobile==false){
                    if(start==false){
                        start=true
                        $("#main .logo").stop().animate({
                            left: "65%",
                            top: "50%",
                            width: "500px",
                            height: "435px"
                        })
                        $("#main .logo").addClass("shadow")
                        clearInterval(logo_c)
                        logo_c = setInterval(logo_move,2000)
                    }
                    $("#top").stop().fadeOut()
                }else{
                    if(start==false){
                        start=true
                        $("#main .logo").stop().animate({
                            left: "50%",
                            top: "42%",
                            width: "250px",
                            height: "220px"
                        })
                        $("#main .logo").addClass("shadow")
                        clearInterval(logo_c)
                        logo_c = setInterval(logo_move,2000)
                    }
                    $("#top").stop().fadeOut()
                }
            }else{
                if(mobile==false){
                    $("#main .logo").stop().animate({
                        left: "5%",
                        top: "8%",
                        width: "100px",
                        height: "88px"
                    })
                }else{
                    $("#main .logo").stop().animate({
                        left: "15%",
                        top: "8%",
                        width: "100px",
                        height: "88px"
                    })
                }
                $("#main .logo").removeClass("shadow")
                clearInterval(logo_c)
            }
            if(step==1&&intro==false){    //소개
                start=false
                end=false
                if(guide_1==false){
                    guide_1=true
                    $("#guide img").attr("src", "image/box/hand2.svg")
                    for(i=1;i<=10;i++){
                        $("#guide img").stop()
                        if(i==10){
                            $("#guide img").css({
                                scale:1
                            })
                        }
                    }
                    var about_top=$("#about_me .main").offset().top
                    var about_left=$("#about_me .main").offset().left
                    var about=$("#about_me .main").width()
                    $("#guide img").show(150).delay(1500).animate({
                        scale:1,
                        top: about_top+web-265,
                        left: about_left+about/2+about/4
                    },1000,"easeInOutSine").fadeOut(500)
                }
                $("#about_me .title").stop().animate({
                    left:"5%"
                },500)
                $("#about_me .title span").stop()
                $("#about_me .title span").eq(6).stop().animate({
                    left:"0%",
                    opacity:1
                },1050)
                $("#about_me .title span").eq(5).delay(250).stop().animate({
                    left:"0%",
                    opacity:1
                },1000)
                $("#about_me .title span").eq(4).delay(500).stop().animate({
                    left:"0%",
                    opacity:1
                },950)
                $("#about_me .title span").eq(3).delay(750).stop().animate({
                    left:"0%",
                    opacity:1
                },900)
                $("#about_me .title span").eq(2).delay(1000).stop().animate({
                    left:"0%",
                    opacity:1
                },850)
                $("#about_me .title span").eq(1).delay(1250).stop().animate({
                    left:"0%",
                    opacity:1
                },800)
                $("#about_me .title span").eq(0).delay(1500).stop().animate({
                    left:"0%",
                    opacity:1
                },750)
                $("#about_me .main .history").stop().animate({
                    bottom:"200px",
                    scale: 1
                },500)
                $("#about_me .main .license").stop().animate({
                    bottom:"350px",
                    scale: .8
                },1000)
                $("#about_me .main .skill").stop().animate({
                    bottom:"460px",
                    scale: .6
                },1500)
                $("#about_me .photo img").stop().animate({
                    left:"-45%"
                },750)
            }else{
                $("#about_me .title").stop().animate({
                    left:"-50%"
                })
                $("#about_me .title span").stop().animate({
                    left:"-50%",
                    opacity:0
                })
                $("#about_me .main>div").stop().animate({
                    bottom:"-200px",
                    scale: 1.5,
                    height:"130px",
                    zIndex:0
                }).fadeIn()
                $("#about_me .main>div .text").stop().fadeOut()
                $("#about_me .photo img").stop().animate({
                    left:"-10%"
                })
            }
            if(step==2&&intro==false){    //디자인
                start=false
                end=false
                if(guide_2==false){
                    guide_2=true
                    $("#guide img").attr("src", "image/box/hand2.svg")
                    for(i=1;i<=10;i++){
                        $("#guide img").stop()
                        if(i==10){
                            $("#guide img").css({
                                scale:1
                            })
                        }
                    }
                    var design_top=$("#design").offset().top+web/2
                    var design=$("#design .main").width()
                    var design_left=$("#design .main").offset().left+design*0.4
                    $("#guide img").fadeOut(500).show(50).show(50).show(50).delay(1500).animate({
                        scale:1,
                        top: design_top,
                        left: design_left
                    },1000,"easeInOutSine").animate({
                        scale:1
                    },200).animate({
                        scale:.1,
                        top: design_top-5,
                        left: design_left-5
                    },100).animate({
                        scale:1,
                        top: design_top,
                        left: design_left
                    },350).animate({
                        scale:.1,
                        top: design_top-5,
                        left: design_left-5
                    },100).animate({
                        scale:1,
                        top: design_top,
                        left: design_left
                    },350).fadeOut(500)
                }
                $("#design .title").stop().animate({
                    left:"5%"
                },500)
                $("#design .title span").stop()
                $("#design .title span").eq(5).delay(250).stop().animate({
                    left:"0%",
                    opacity:1
                },1000)
                $("#design .title span").eq(4).delay(500).stop().animate({
                    left:"0%",
                    opacity:1
                },950)
                $("#design .title span").eq(3).delay(750).stop().animate({
                    left:"0%",
                    opacity:1
                },900)
                $("#design .title span").eq(2).delay(1000).stop().animate({
                    left:"0%",
                    opacity:1
                },850)
                $("#design .title span").eq(1).delay(1250).stop().animate({
                    left:"0%",
                    opacity:1
                },800)
                $("#design .title span").eq(0).delay(1500).stop().animate({
                    left:"0%",
                    opacity:1
                },750)
                $("#design .main .card").stop().animate({
                    left:0,
                    scale:1
                },1250)
                $("#design .main .card .info").stop().animate({
                    right:"-55%"
                },1500)
                $("#design .main .card .info text").stop()
                $("#design .main .card .info .stroke").stop().delay(1000).animate({
                    strokeDashoffset: 0
                },3000)
                $("#design .main .card .info .fill").stop().delay(1500).animate({
                    opacity: 1
                },2500)
                $("#design .main .card .info .text").stop().delay(1500).slideDown(500)
            }else{
                $("#design .title").stop().animate({
                    left:"-50%"
                })
                $("#design .title span").stop().animate({
                    left:"-50%",
                    opacity:0
                })
                $("#design .main .card").stop().animate({
                    left:"-80%",
                    scale:0
                })
                $("#design .main .card .info").stop().animate({
                    right:"-280%"
                })
                $("#design .main .card .info text").stop()
                $("#design .main .card .info .stroke").animate({
                    strokeDashoffset: 600
                })
                $("#design .main .card .info .fill").animate({
                    opacity: 0
                })
                $("#design .main .card .info .text").stop().slideUp()
            }
            if(step==3&&intro==false){    //퍼블리셔
                start=false
                end=false
                if(guide_3==false){
                    guide_3=true
                    $("#guide img").attr("src", "image/box/hand2.svg")
                    for(i=1;i<=10;i++){
                        $("#guide img").stop()
                        if(i==10){
                            $("#guide img").css({
                                scale:1
                            })
                        }
                    }
                    $("#guide img").fadeOut(500).show(50).show(50).show(50).delay(2150).queue(function(point){
                        p1_top = ($(".p1").offset().top)+70
                        p1_left = ($(".p1").offset().left)+150
                        p2_top = ($(".p2").offset().top)+70
                        p2_left = ($(".p2").offset().left)+150
                        check_top = ($(".check").offset().top)+70
                        check_left = ($(".check").offset().left)+75
                        folder_top = ($(".folder").offset().top)+70
                        folder_left = ($(".folder").offset().left)+40
                        $("#guide img").animate({
                            scale:1,
                            top: p1_top,
                            left: p1_left
                        },1000,"easeInOutSine",function(){
                            $(this).attr("src", "image/box/hand.svg")
                        }).delay(500)
                        .animate({
                            scale:1,
                            top: check_top,
                            left: check_left
                        },1000,"easeInOutSine",function(){
                            $(this).attr("src", "image/box/hand3.svg")
                        }).fadeOut(500).animate({
                            scale:1,
                            opacity:1
                        },1000,function(){
                            $(this).attr("src", "image/box/hand2.svg")
                        }).show(150).animate({
                            scale:1,
                            top: p2_top,
                            left: p2_left
                        },1000,"easeInOutSine",function(){
                            $(this).attr("src", "image/box/hand.svg")
                        }).delay(500)
                        .animate({
                            top: folder_top,
                            left: folder_left
                        },1000,"easeInOutSine",function(){
                            $(this).attr("src", "image/box/hand3.svg")
                        }).fadeOut(500)
                        point()
                    })
                }
                $("#publisher .title").stop().animate({
                    left:"5%"
                },500)
                $("#publisher .title span").stop()
                $("#publisher .title span").eq(9).delay(250).stop().animate({
                    left:"0%",
                    opacity:1
                },1200)
                $("#publisher .title span").eq(8).delay(250).stop().animate({
                    left:"0%",
                    opacity:1
                },1150)
                $("#publisher .title span").eq(7).delay(250).stop().animate({
                    left:"0%",
                    opacity:1
                },1100)
                $("#publisher .title span").eq(6).delay(250).stop().animate({
                    left:"0%",
                    opacity:1
                },1050)
                $("#publisher .title span").eq(5).delay(250).stop().animate({
                    left:"0%",
                    opacity:1
                },1000)
                $("#publisher .title span").eq(4).delay(500).stop().animate({
                    left:"0%",
                    opacity:1
                },950)
                $("#publisher .title span").eq(3).delay(750).stop().animate({
                    left:"0%",
                    opacity:1
                },900)
                $("#publisher .title span").eq(2).delay(1000).stop().animate({
                    left:"0%",
                    opacity:1
                },850)
                $("#publisher .title span").eq(1).delay(1250).stop().animate({
                    left:"0%",
                    opacity:1
                },800)
                $("#publisher .title span").eq(0).delay(1500).stop().animate({
                    left:"0%",
                    opacity:1
                },750)
                $("#publisher .img .img_box").css({
                    left:"-40%"
                })
                $("#publisher .img .box").css({
                    left:"0",
                    top:"-40%"
                })
                $("#publisher .img .img_box").stop()
                $("#publisher .img .box").stop()
                for(i=1;i<=($("#publisher .img .img_box").last().index())+1;i++){
                    $("#publisher .img .ib"+i+"").animate({
                        left:Math.round(Math.random()*70)+"%"
                    },2000,"easeOutCubic")
                    $("#publisher .img .p"+i+"").animate({
                        top:Math.round(Math.random()*70)+"%"
                    },2000,"easeOutBounce")
                }
            }else{
                $("#publisher .title").stop().animate({
                    left:"-50%"
                })
                $("#publisher .title span").stop().animate({
                    left:"-50%",
                    opacity:0
                })
                if(f_open==true){
                    $("#publisher .big_f .bg").stop().animate({
                        bottom:"0"
                    })
                    $("#publisher .big_f").stop().animate({
                        right: "-1%",
                        bottom: "5%",
                        width: "150px",
                        height: "150px",
                    },function(){
                        $("#publisher .big_f").css({
                            display:"none"
                        })
                        f_open=false
                        $("#publisher .folder").css({
                            display:"block"
                        })
                    })
                }
            }
            if(step==4&&intro==false){
                if(end==false){
                    end==true
                }
                $("#guide img").css({
                    display:"none"
                })
                if(guide_4==false){
                    guide_4=true
                    var bubble = setInterval(function(){
                        $("#contact").append('<img class="bubble" src="./image/box/bubble.svg" alt="#">')
                        $("#contact .bubble:last").css({
                            scale:(Math.random()*0.5)+0.5,
                            left:($("#card").offset().left)*((Math.random()*4)+1),
                            bottom:-($("#card").offset().top-4265)*(Math.random()+0.5)
                        })
                        $("#contact .bubble:last").animate({
                            bottom:"150%",
                            scale:".1"
                        },3000,"linear",function(){
                            $(this).remove()
                        })
                    },50)
                    var bubble_bg = setInterval(function(){
                        $("#contact").append('<img class="bubble" src="./image/box/bubble.svg" alt="#">')
                        $("#contact .bubble:last").css({
                            zIndex:0,
                            scale:Math.random()+0.25,
                            left:($("#card").offset().left)*((Math.random()*5)+1),
                            bottom:-($("#card").offset().top-4265)*(Math.random()*1.5+0.5)
                        })
                        $("#contact .bubble:last").animate({
                            bottom:"150%",
                            scale:".1"
                        },4000,"linear",function(){
                            $(this).remove()
                        })
                    },150)
                    $("#contact .main").css({
                        left:"60%",
                        top:"0"
                    })
                    $("#contact #card").css({
                        top: "-75%",
                        scale: .1,
                        rotate: "0deg",
                    })
                    $("#contact #card").animate({
                        top: "70%",
                        scale: 0.8,
                        rotate: "-50deg",
                    },1000,"easeOutSine").animate({
                        top: "59%",
                        scale: 0.9,
                        rotate: "10deg",
                    },1000,"easeOutBack").animate({
                        top:"50%",
                        scale: 1,
                        rotate: "0deg",
                    },750,"easeInOutBack")
                    $("#contact .main").animate({
                        left: "-30%",
                    },1000,"easeOutSine").animate({
                        left: "5%",
                        top:"10%"
                    },1000,"easeOutCubic").animate({
                        left:"0%",
                        top:"0%"
                    },500,"easeInQuart",function(){
                        clearInterval(bubble)
                        clearInterval(bubble_bg)
                        $('#contact .text').animate({
                            opacity:1,
                            bottom:"15%"
                        })
                    })
                }
            }
            if(step!=0&&intro==false){
                $("#top").stop().fadeIn()
            }
        }

        if(guide_1==true&&step!=1){
            $("#guide img").css({
                display:"none"
            })
        }
        if(guide_2==true&&step!=2){
            $("#guide img").css({
                display:"none"
            })
        }
        if(guide_3==true&&step!=3){
            $("#guide img").css({
                display:"none"
            })
        }
        if(guide_4==true&&step!=4){
            $("#guide img").css({
                display:"none"
            })
        }
    })

    $(window).scroll(function(){
        if(mobile==true){
            console.log(step)
            if($(window).scrollTop()<web-600){
                if(step!=0){
                    step=0
                }
            }else if($(window).scrollTop()<2*web-200){
                if(step!=1){
                    step=1
                    if(step==1&&intro==false){    //소개
                        start=false
                        end=false
                        if(guide_1==false){
                            guide_1=true
                            $("#guide img").attr("src", "image/box/hand2.svg")
                            for(i=1;i<=10;i++){
                                $("#guide img").stop()
                                if(i==10){
                                    $("#guide img").css({
                                        scale:1
                                    })
                                }
                            }
                            var about_top=$("#about_me .main").offset().top
                            var about_left=$("#about_me .main").offset().left
                            var about=$("#about_me .main").width()
                            $("#guide img").show(150).delay(1500).animate({
                                scale:1,
                                top: about_top+web-265,
                                left: about_left+about/2+about/4
                            },1000,"easeInOutSine").fadeOut(500)
                        }
                        $("#about_me .title").stop().animate({
                            left:"5%"
                        },500)
                        $("#about_me .title span").stop()
                        $("#about_me .title span").eq(6).stop().animate({
                            left:"0%",
                            opacity:1
                        },1050)
                        $("#about_me .title span").eq(5).delay(250).stop().animate({
                            left:"0%",
                            opacity:1
                        },1000)
                        $("#about_me .title span").eq(4).delay(500).stop().animate({
                            left:"0%",
                            opacity:1
                        },950)
                        $("#about_me .title span").eq(3).delay(750).stop().animate({
                            left:"0%",
                            opacity:1
                        },900)
                        $("#about_me .title span").eq(2).delay(1000).stop().animate({
                            left:"0%",
                            opacity:1
                        },850)
                        $("#about_me .title span").eq(1).delay(1250).stop().animate({
                            left:"0%",
                            opacity:1
                        },800)
                        $("#about_me .title span").eq(0).delay(1500).stop().animate({
                            left:"0%",
                            opacity:1
                        },750)
                        $("#about_me .main .history").stop().stop().animate({
                            bottom:"200px",
                            scale: 1
                        },500)
                        $("#about_me .main .license").stop().stop().animate({
                            bottom:"350px",
                            scale: 1
                        },1000)
                        $("#about_me .main .skill").stop().stop().animate({
                            bottom:"460px",
                            scale: 1
                        },1500)
                        $("#about_me .photo img").stop().animate({
                            left:"-45%"
                        },750)
                    }
                }
            }else if($(window).scrollTop()<3*web-200){
                if(step!=2){
                    step=2
                    if(step==2&&intro==false){    //디자인
                        start=false
                        end=false
                        if(guide_2==false){
                            guide_2=true
                            $("#guide img").attr("src", "image/box/hand2.svg")
                            for(i=1;i<=10;i++){
                                $("#guide img").stop()
                                if(i==10){
                                    $("#guide img").css({
                                        scale:1
                                    })
                                }
                            }
                            var design_top=$("#design").offset().top+web/2
                            var design=$("#design .main").width()
                            var design_left=$("#design .main").offset().left+design*0.4
                            $("#guide img").fadeOut(500).show(50).show(50).show(50).delay(1500).animate({
                                scale:1,
                                top: design_top,
                                left: design_left
                            },1000,"easeInOutSine").animate({
                                scale:1
                            },200).animate({
                                scale:.1,
                                top: design_top-5,
                                left: design_left-5
                            },100).animate({
                                scale:1,
                                top: design_top,
                                left: design_left
                            },350).animate({
                                scale:.1,
                                top: design_top-5,
                                left: design_left-5
                            },100).animate({
                                scale:1,
                                top: design_top,
                                left: design_left
                            },350).fadeOut(500)
                        }
                        $("#design .title").stop().animate({
                            left:"5%"
                        },500)
                        $("#design .title span").stop()
                        $("#design .title span").eq(5).delay(250).stop().animate({
                            left:"0%",
                            opacity:1
                        },1000)
                        $("#design .title span").eq(4).delay(500).stop().animate({
                            left:"0%",
                            opacity:1
                        },950)
                        $("#design .title span").eq(3).delay(750).stop().animate({
                            left:"0%",
                            opacity:1
                        },900)
                        $("#design .title span").eq(2).delay(1000).stop().animate({
                            left:"0%",
                            opacity:1
                        },850)
                        $("#design .title span").eq(1).delay(1250).stop().animate({
                            left:"0%",
                            opacity:1
                        },800)
                        $("#design .title span").eq(0).delay(1500).stop().animate({
                            left:"0%",
                            opacity:1
                        },750)
                        $("#design .main .card").stop().animate({
                            left:0,
                            scale:1
                        },1250)
                        $("#design .main .card .info").stop().animate({
                            right:"-55%"
                        },1500)
                        $("#design .main .card .info text").stop()
                        $("#design .main .card .info .stroke").stop().delay(1000).animate({
                            strokeDashoffset: 0
                        },3000)
                        $("#design .main .card .info .fill").stop().delay(1500).animate({
                            opacity: 1
                        },2500)
                        $("#design .main .card .info .text").stop().delay(1500).slideDown(500)
                    }
                }
            }else if($(window).scrollTop()<4*web-200){
                if(step!=3){
                    step=3
                    if(step==3&&intro==false){    //퍼블리셔
                        start=false
                        end=false
                        if(guide_3==false){
                            guide_3=true
                            $("#guide img").attr("src", "image/box/hand2.svg")
                            for(i=1;i<=10;i++){
                                $("#guide img").stop()
                                if(i==10){
                                    $("#guide img").css({
                                        scale:1
                                    })
                                }
                            }
                            $("#guide img").fadeOut(500).show(50).show(50).show(50).delay(2150).queue(function(point){
                                p1_top = ($(".p1").offset().top)+70
                                p1_left = ($(".p1").offset().left)+150
                                p2_top = ($(".p2").offset().top)+70
                                p2_left = ($(".p2").offset().left)+150
                                check_top = ($(".check").offset().top)+70
                                check_left = ($(".check").offset().left)+75
                                folder_top = ($(".folder").offset().top)+70
                                folder_left = ($(".folder").offset().left)+40
                                $("#guide img").animate({
                                    scale:1,
                                    top: p1_top,
                                    left: p1_left
                                },1000,"easeInOutSine",function(){
                                    $(this).attr("src", "image/box/hand.svg")
                                }).delay(500)
                                .animate({
                                    scale:1,
                                    top: check_top,
                                    left: check_left
                                },1000,"easeInOutSine",function(){
                                    $(this).attr("src", "image/box/hand3.svg")
                                }).fadeOut(500).animate({
                                    scale:1,
                                    opacity:1
                                },1000,function(){
                                    $(this).attr("src", "image/box/hand2.svg")
                                }).show(150).animate({
                                    scale:1,
                                    top: p2_top,
                                    left: p2_left
                                },1000,"easeInOutSine",function(){
                                    $(this).attr("src", "image/box/hand.svg")
                                }).delay(500)
                                .animate({
                                    top: folder_top,
                                    left: folder_left
                                },1000,"easeInOutSine",function(){
                                    $(this).attr("src", "image/box/hand3.svg")
                                }).fadeOut(500)
                                point()
                            })
                        }
                        $("#publisher .title").stop().animate({
                            left:"5%"
                        },500)
                        $("#publisher .title span").stop()
                        $("#publisher .title span").eq(9).delay(250).stop().animate({
                            left:"0%",
                            opacity:1
                        },1200)
                        $("#publisher .title span").eq(8).delay(250).stop().animate({
                            left:"0%",
                            opacity:1
                        },1150)
                        $("#publisher .title span").eq(7).delay(250).stop().animate({
                            left:"0%",
                            opacity:1
                        },1100)
                        $("#publisher .title span").eq(6).delay(250).stop().animate({
                            left:"0%",
                            opacity:1
                        },1050)
                        $("#publisher .title span").eq(5).delay(250).stop().animate({
                            left:"0%",
                            opacity:1
                        },1000)
                        $("#publisher .title span").eq(4).delay(500).stop().animate({
                            left:"0%",
                            opacity:1
                        },950)
                        $("#publisher .title span").eq(3).delay(750).stop().animate({
                            left:"0%",
                            opacity:1
                        },900)
                        $("#publisher .title span").eq(2).delay(1000).stop().animate({
                            left:"0%",
                            opacity:1
                        },850)
                        $("#publisher .title span").eq(1).delay(1250).stop().animate({
                            left:"0%",
                            opacity:1
                        },800)
                        $("#publisher .title span").eq(0).delay(1500).stop().animate({
                            left:"0%",
                            opacity:1
                        },750)
                        $("#publisher .img .img_box").css({
                            left:"-40%"
                        })
                        $("#publisher .img .box").css({
                            left:"0",
                            top:"-40%"
                        })
                        $("#publisher .img .img_box").stop()
                        $("#publisher .img .box").stop()
                        for(i=1;i<=($("#publisher .img .img_box").last().index())+1;i++){
                            $("#publisher .img .ib"+i+"").animate({
                                left:Math.round(Math.random()*55)+"%"
                            },2000,"easeOutCubic")
                            $("#publisher .img .p"+i+"").animate({
                                top:Math.round(Math.random()*80)+"%"
                            },2000,"easeOutBounce")
                        }
                    }
                }
            }else if($(window).scrollTop()<5*web-200){
                if(step!=4){
                    step=4
                    if(step==4&&intro==false){
                        if(end==false){
                            end==true
                        }
                        $("#guide img").css({
                            display:"none"
                        })
                        if(guide_4==false){
                            guide_4=true
                            var bubble = setInterval(function(){
                                $("#contact").append('<img class="bubble" src="./image/box/bubble.svg" alt="#">')
                                $("#contact .bubble:last").css({
                                    scale:(Math.random()*0.5)+0.5,
                                    left:($("#card").offset().left)*((Math.random()*4)+1),
                                    bottom:-($("#card").offset().top-4265)*(Math.random()+0.5)
                                })
                                $("#contact .bubble:last").animate({
                                    bottom:"150%",
                                    scale:".1"
                                },3000,"linear",function(){
                                    $(this).remove()
                                })
                            },50)
                            var bubble_bg = setInterval(function(){
                                $("#contact").append('<img class="bubble" src="./image/box/bubble.svg" alt="#">')
                                $("#contact .bubble:last").css({
                                    zIndex:0,
                                    scale:Math.random()+0.25,
                                    left:($("#card").offset().left)*((Math.random()*5)+1),
                                    bottom:-($("#card").offset().top-4265)*(Math.random()*1.5+0.5)
                                })
                                $("#contact .bubble:last").animate({
                                    bottom:"150%",
                                    scale:".1"
                                },4000,"linear",function(){
                                    $(this).remove()
                                })
                            },150)
                            $("#contact .main").css({
                                left:"60%",
                                top:"0"
                            })
                            $("#contact #card").css({
                                top: "-75%",
                                scale: .1,
                                rotate: "0deg",
                            })
                            $("#contact #card").animate({
                                top: "70%",
                                scale: 0.8,
                                rotate: "-50deg",
                            },1000,"easeOutSine").animate({
                                top: "59%",
                                scale: 0.9,
                                rotate: "10deg",
                            },1000,"easeOutBack").animate({
                                top:"50%",
                                scale: 1,
                                rotate: "0deg",
                            },750,"easeInOutBack")
                            $("#contact .main").animate({
                                left: "-30%",
                            },1000,"easeOutSine").animate({
                                left: "5%",
                                top:"10%"
                            },1000,"easeOutCubic").animate({
                                left:"0%",
                                top:"0%"
                            },500,"easeInQuart",function(){
                                clearInterval(bubble)
                                clearInterval(bubble_bg)
                                $('#contact .text').animate({
                                    opacity:1,
                                    bottom:"15%"
                                })
                            })
                        }
                    }
                }
            }

            if(step==0&&intro==false){    //타이틀
                if(mobile==false){
                    if(start==false){
                        start=true
                        $("#main .logo").stop().animate({
                            left: "65%",
                            top: "50%",
                            width: "500px",
                            height: "435px"
                        })
                        $("#main .logo").addClass("shadow")
                        clearInterval(logo_c)
                        logo_c = setInterval(logo_move,2000)
                    }
                    $("#top").stop().fadeOut()
                }else{
                    if(start==false){
                        start=true
                        $("#main .logo").stop().animate({
                            left: "50%",
                            top: "42%",
                            width: "250px",
                            height: "220px"
                        })
                        $("#main .logo").addClass("shadow")
                        clearInterval(logo_c)
                        logo_c = setInterval(logo_move,2000)
                    }
                    $("#top").stop().fadeOut()
                }
            }else{
                if(mobile==false){
                    $("#main .logo").stop().animate({
                        left: "5%",
                        top: "8%",
                        width: "100px",
                        height: "88px"
                    })
                }else{
                    $("#main .logo").stop().animate({
                        left: "15%",
                        top: "8%",
                        width: "100px",
                        height: "88px"
                    })
                }
                $("#main .logo").removeClass("shadow")
                clearInterval(logo_c)
            }
        }
    })

    // 커서 + 타이틀 텍스트
    $(window).on("mousemove",function(e){
        var posX= e.pageX
        var posY= e.pageY
        var margin = ($("#publisher").width()-$("#publisher>.main").width())/2
        $("#main .t_text .text").css({
            top:-50+(posY/2.5)
        })
        $("#main .t_text .text h1").css({
            top:50-(posY/2.5)
        })
        $("#main .n_text .text").css({
            top:-15+(posY/10)
        })
        $("#main .n_text .text *").css({
            top:15-(posY/10)
        })

        if(intro==false && drag==false){
            $("#cursor").css({
                display:"block"
            })
        }
        if(wheel==false){
            $("#cursor .c1").delay(5).queue(function(next1){
                $(this).css({
                    top:posY,
                    left:posX
                })
                next1()
            })
            $("#cursor .c2").delay(15).queue(function(next2){
                $(this).css({
                    top:$("#cursor .c1").offset().top-1,
                    left:$("#cursor .c1").offset().left-1
                })
                next2()
            })
            $("#cursor .c3").delay(17).queue(function(next3){
                $(this).css({
                    top:$("#cursor .c2").offset().top+1,
                    left:$("#cursor .c2").offset().left+1
                })
                next3()
            })
        }
        if(drag==true){
            $("#publisher .check .img_show").css({
                top:(i_box.offset().top-(3*web))*1.6,
                left:200+(i_box.offset().left-screen+margin+150)*1.8
            })
        }
    })

})