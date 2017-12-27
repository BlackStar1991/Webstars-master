$(document).ready(function () {

    //  ANCHOR-LIST
    var menu_selector = ".js-anchor-list";

    function onScroll() {
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function () {
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }


    $(document).on("scroll", onScroll);

    $(".anchor-aside__link").click(function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top - 50
        }, 500, function () {
            window.location.hash = hash - 50;
            $(document).on("scroll", onScroll);


        });
    });


//  menu-fix
    $(window).scroll(function () {
        var lengthScroll = $(".js-height-sect").outerHeight();
        var heightPadding = $(".js-fix-menu").outerHeight();
        var top = $(document).scrollTop();

        if (top >= lengthScroll) {
            $(".js-fix-menu").addClass('fix');
            $('.header-page').css('padding-bottom', heightPadding);
        } else {
            $(".js-fix-menu").removeClass('fix');
            $('.js-header').css('padding-bottom', '0');
        }
    });

//  open-search
    $('.js-open-search').click(function () {
        $('.js-search-form').slideToggle(300);
    });

    //  open-search
    $('.js-leng-list .leng-btn').click(function () {
        $(this).closest('.js-leng-list').toggleClass('active');
        $(this).closest('.leng-list__item').addClass('active').siblings().removeClass('active');
    });

    //  mobil-social
    $('.js-open-social').click(function () {
        $('.header-page__social-list').toggleClass('active');
    });

    //  open-mobil-menu
    $('.js-open-menu').click(function () {
        $('.header-page__menu').toggleClass('active');
    });

    //  open-contact-menu
    $('.js-open-contact').click(function () {
        $('.header-page__contact-list').toggleClass('active');
    });

//  circle-silder
    $(window).on('load resize', function () {
        if ($(document).width() > 1030) {
            var firstTitleSect = $('[data-number="item-1"]').find('.circ-item__title').text()
            var firstMainImg = $('.circ-item .circ-item__pic').attr('src');

            $('.circle-nav__item-title').text(firstTitleSect);
            $('.circle-nav__pic').attr('src', firstMainImg);

            $('.circ-item').click(function () {
                $('.circle-nav__item').css('opacity', '0');
                $('.circle-nav__item').animate({
                    opacity: "1"
                }, 500);

                //    id rotate
                var dataNumb = $(this).attr('data-number');

                $(this).closest('.slider-list').removeAttr('id');
                $(this).closest('.slider-list').attr('id', dataNumb);

                //    color title
                $('.circ-list__item').removeClass('active');
                $(this).closest('.circ-list__item').addClass('active');

                //    add title
                var titleSect = $(this).find('.circ-item__title').text();

                $('.circle-nav__item-title').text('');
                $('.circle-nav__item-title').text(titleSect);

                //    add img
                var mainImg = $(this).find('.circ-item__pic').attr('src');

                $('.circle-nav__pic').attr('src', false);
                $('.circle-nav__pic').attr('src', mainImg);
            });
        }

        if ($(document).width() < 1030 && $(document).width() > 777) {
            $('.circ-list__item').equivalent();
        }
    });

//  video-portfolio
    $('.portfolio-item').hover(function () {
        var vid = $(this).find('.main-video')[0];
        if (vid.paused == true) {
            vid.currentTime = 0;
            vid.play();
        } else {
            vid.pause();
        }
    });

    //  input placeholder
    $('body').on('change', '.input-item__input', function () {
        if ($(this).val().length > 0) {
            $(this).closest('.input-item').addClass('active');
        } else {
            $(this).closest('.input-item').removeClass('active');
        }
    });

    $(".js-carousel-1").slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false
    });
});


//preloader

$(window).on('load', function () {
    $('.preloader').fadeOut(500);

    setTimeout(function () {
        $('.top-section__desc, .main-title__ico, .scroll-mouse').addClass('active');
    }, 500);


    setTimeout(function () {
        $('body').addClass('load');
    }, 1500);
});














