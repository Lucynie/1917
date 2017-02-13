/**
 * Created by Administrator on 2016/12/26.
 */
$(function () {
    $(".banner .d1 .scroll2").scrollable({size:1,items:".banner .d1 .scroll2",speed:500,vertical:true,loop:true,next:".down"}).autoscroll({autoplay:true,interval:5000,steps:1});

    $(".home_02 .right .scroll").scrollable({size:2,items:"home_02 .right .scroll" ,speed:500,vertical:false,loop:true}).autoscroll({autoplay:true,interval:5000,steps:1});

    $(".concept .scroll").scrollable({size:2,items:".concept .scroll",speed:500,vertical:false,loop:true}).autoscroll({autoplay:true,interval:5000,steps:1});

    $(".about_03 .about_m1 .m_right .scroll").scrollable({size:1,items:".about_03 .about_m1 .m_right .scroll",speed:500,vertical:false,loop:true}).autoscroll({autoplay:true,interval:2000,steps:1}).navigator({navi:".scroll_ul",naviItem:"li",activeClass:"focus"});

    $(".about_05 .about_m5 .scroll").scrollable({size:1,items:".about_05 .about_m5 .scroll",speed:500,vertical:false,loop:true}).autoscroll({autoplay:true,interval:2000,steps:1}).navigator({navi:".scroll_ul",naviItem:"li",activeClass:"focus"});

    $(".life_03 .home_06 ul .li2 a").hover(function () {
        $(".life_03 .home_06 .weixin").toggle();
    })

    $('.gotop').click(function(){
        $('html, body').animate({scrollTop:0}, 1000);
    })

    $(".home_04 .m_01 .list_01 li").hover(function(){
        $(this).siblings().removeClass("hover");
        $(this).addClass("hover");
    })

    $(".r .a2,.a4").click(function () {
        $(".order_form").css("opacity","1");
        $(" .r .order_form .x").click(function () {
            $(" .r .order_form").css("opacity","0");
            })
        })
    })

       $("form").submit(function () {
           var i=true;
           var name=$(".name").val();
           var tel=$(".tel").val();
               if (!tel.match(/^(13[0-9]|15[^4]|18[^1|^4])\d{8}$/)) {
                   alert("请填写正确的手机号码！")
                   i=false;
                   return false;
               }
           if(i==true){
               alert("成功！");
           }
           return i;
       })


     $(".m_ul li a").click(function () {
         $(".sub").css("display","block");
         $(".x").click(function () {
             $(".sub").css("display","none" );
         })
     })

         $(".like_01 ul li a").click(function () {
             $(".gundong").show();
             $(".x").click(function () {
                 $(".gundong").hide();
             })
         })





     (function($){
         $(window).load(function(){
             $(".gundong").mCustomScrollbar({
                 scrollButtons:{
                     enable:false,
                     scrollType:"continuous",
                     scrollSpeed:20,
                     scrollAmount:40
                 },
                 autoDraggerLength:false,   //根据页面宽度调整滚动按钮的长度true/false
                 horizontalScroll:false,
                 advanced:{ updateOnContentResize:true}
             });
         });
     })(jQuery);

