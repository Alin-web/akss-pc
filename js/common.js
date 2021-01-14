import $ from './jquery-3.5.1.min'
$(function () {
    // lis 失去 获得焦点
    $('.lis').hover(
        function () {
            $(this).children('a').addClass('adda')
            $(this).children('.lis_ul').show();
        },
        function () {
            $(this).children('a').removeClass('adda')
            $(this).children('.lis_ul').hide();
        }
    )
    // ul 获得 失去焦点
    $('.lis_ul').hover(
        function(){
            $(this).show();
        },
        function () {
            $(this).hide();
        }
    )
    
    // 检查下拉菜单事件
    $(window).on("scroll", function () { 
        if($(window).scrollTop() <= 100){
            $('.boxs').show().css('background-color','')
            $('.logo').removeClass('logos')
            $('.lis_a').removeClass('ax')
            $('.adds').removeClass('addblock1')
            // 
            $('.lis').hover(
                function () {
                    $(this).children('a').addClass('adda')
                    $(this).children('.lis_ul').show();
                },
                function () {
                    $(this).children('a').removeClass('adda')
                    $(this).children('.lis_ul').hide();
                }
            )
        }else if($(window).scrollTop() >= 600){
            $('.boxs').show().css('background-color','#fff')
            $('.logo').addClass('logos')
            $('.lis_a').addClass('ax')
            $('.adds').addClass('addblock1')
           // 前面的
            console.log('大于600');
            $('.lis').hover(
                function () {
                    $(this).children('a').addClass('addblock')
                    $(this).children('.lis_ul').show();
                },
                function () {
                    $(this).children('a').removeClass('addblock')
                    $(this).children('.lis_ul').hide();
                }
            )
        }else{
            $('.boxs').hide()
        }
       
    });
})