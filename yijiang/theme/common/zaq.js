/**
 * Created by Administrator on 2016/12/13.
 */
$(function () {
    $(".home_01 .d2 .scroll").scrollable({size:1,items:".home_01 .d2 .scroll",speed:500,loop:true}).autoscroll({autoplay:true,interval:5000,steps:1});
})
$(function(){
    $(".banner h2 ul li a img").each(function(k,img){
        new JumpObj(img,10);
        $(".banner h2 ul li a img").hover(function(){this.parentNode.parentNode.className="hover"});
    });
    $(".footer .foot_01 ul li img").each(function(k,img){
        new JumpObj(img,10);
        $(".footer .foot_01 ul li img").hover(function(){this.parentNode.parentNode.className="hover"});
    });
});


