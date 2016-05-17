$(function (){
    //banner
    $(function (){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 2000,
            loop:true,
            pagination : '.swiper-pagination',
            onSlideChangeEnd:function (swiper){
                var index = mySwiper.activeIndex;
                var text = $(".swiper-slide img").eq(index).attr("alt");
                $(".banner-title").html(text);
            }
        });
    });
});

