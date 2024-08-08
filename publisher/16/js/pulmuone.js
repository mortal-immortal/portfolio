$(function(){
    var n=0 //위치 지정용 n변수
    var t=0 //윈도우 높이값 용 t변수
    var moving=false    //체크용 변수

    // 오른쪽 버튼 설정
    $(".controller li").eq(n).find("a").addClass("on")

    $(".controller li a").on("click",function(e){
        e.preventDefault()  //a 링크 방지
        n=$(this).parent().index()  //li의 인덱스 번호 추출

        if(n>0){        //n이 0보다 크다면
            t=$(".sub").eq(n-1).offset().top
            // t는 위치가 0,1,2, 이렇게 얻어지게 해당위치를 찾아가는 변수 선언
        }else{
            t=0 //아니라면0
        }
        // console.log("t:"+t)  // 체크용
        $("html, body").stop().animate({
            scrollTop: t
        },800,function(){
            $(".controller li").find("a").removeClass("on")
            $(".controller li").eq(n).find("a").addClass("on")
        })  //scrollTop animate end
    })  //버튼 클릭 end

    // 메인화면
    $("header>nav>ul>li").on("mouseenter focusin",function(){
        $(".smn").show()
        $("#bg").show()
        $("this").siblings().removeClass("on")
        $("this").addClass("on")
        $("#inimg>p").hide()
        var index=$(this).index()
        $("#inimg>p").eq(index).show()
    })

    // 서브메뉴에 마우스 올렸을 때
    $(".smn").on("mouseenter focusin",function(){   //smn 범위에 들어갔을 때
        $("header>nav>ul>li").removeClass("on")     //모든 li의 removeClass 제거
        $(this).parent().addClass("on")             //선택된 li 부모(ul)만 addClass 추가

        var n=0
        $("header>nav>ul>li").each(function(){
            n=n+1
            if($("nav>ul>li.menu"+n+"").hasClass("on")){    //menu1,2,3,4,5,6이 on클래스를 가지고 있다면
                $("#inimg").find("navimg"+n+"").show()      //navimg1,2,3,4,5,6을 찾아서 보여준다
            }
        })
    })  //mouseenter focusin end

    //bg에서 마우스가 벗어났을 때
    $("#bg").on("mouseleave",function(){    //bg에서 마우스가 벗어 났을 때
        $("nav>ul>li").removeClass("on")    //nav ul li의 removeClass 제거
        $(".smn").hide()                    //smn 숨기기
        $("#bg").hide()                     //bg 숨기기
    })

    // smn에서 마우스가 벗어났을 때
    $(".smn").mouseleave(function(){        //bg에서 마우스가 벗어 났을 때
        $(this).parent("li").removeClass("on")  //smn의 부모(li) removeClass 제거
    })

    // nav에서 마우스가 벗어났을 때
    $("header>nav").mouseleave(function(){        //bg에서 마우스가 벗어 났을 때
        $(".smn").parent("li").removeClass("on")  //smn의 부모(li) removeClass 제거
    })
})