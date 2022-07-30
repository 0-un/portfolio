// 로딩

$('.arrow').on('click', function () {
    $('.click').css("display","none");
    $('.arrow__left, .arrow__right').toggleClass('rotate');
    $('.arrow__top').toggleClass('size');
    $('.arrow__top-ball').toggleClass('move');
    $('.arrow__fill').toggleClass('fill');
    $('.status__percent').toggleClass('appear');
    $('.title').toggleClass('typing');
    $('.icon_sad').css("display","block");


    setTimeout(function () {
        let duration = 5000; // 5 seconds
        $('.arrow__fill').stop().animate(
            { scaleX: 1 }, { //stop when the scale reaches 1
            duration: duration,
            progress: function (promise, progress, ms) {
                $('.status__percent').text(Math.round(progress * 100) + '%');
                if(Math.round(progress * 100)==100){
                    $('.icon_sad').css("display","none");
                    $('.icon_smile').css("display","block");
                    setTimeout(function () {
                        location.href = './main.html';
                    }, 1000);
                }
            }
        });

    }, 1000); // 1.8 seconds delay

});
