(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        /* MOBILE DETECTION */
        var is_mobile = ((/Mobile|Android|iPhone|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera) ? true : false);

        /* BROWSER WINDOW DETECTION */
        var browser_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var browser_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        var top_offset = 0;
        top_offset = $('.header-area').innerHeight();
        var footerHeight = $('.footer-area').innerHeight();
        var copyrightHeight = $('.copyright-area').innerHeight();

        $(".main-content").css({
            'min-height': 'calc(100vh - ' + (top_offset + footerHeight + copyrightHeight) + 'px)'
        });

        // Smooth Scrolling
        $('a.smooth-scorll[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - top_offset
                    }, 1000);
                    return false;
                }
            }
        });


        $(window).on('scroll', function () {
            var scrollTop = $(window).scrollTop();
            
            if (scrollTop > 200) {
                $('.scroll-to-top').addClass('active');
            } else {
                $('.scroll-to-top').removeClass('active');
            }

        });


        $(document).on("click", ".scroll-to-top", function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });



        $(document).on("click", ".header-menu-button", function () {
            if ($('.fullwidth-menu-area').css("display") == "none") {
                TweenMax.to(".backdrop-area", 0.5, { opacity: 1, display: 'block', ease: Power2.easeInOut });
                TweenMax.fromTo(".fullwidth-menu-area", 0.5, { xPercent: 100 }, { xPercent: 0, display: 'block', ease: Expo.easeOut });
            } else if ($('.fullwidth-menu-area').css("display") == "block") {
                TweenMax.to(".backdrop-area", 0.5, { opacity: 0, display: 'none', ease: Power2.easeInOut });
                TweenMax.to(".fullwidth-menu-area", 0.5, { xPercent: 100, display: 'none', ease: Expo.easeOut });
            } else {
                TweenMax.to(".backdrop-area", 0.5, { opacity: 0, display: 'none', ease: Power2.easeInOut });
                TweenMax.to(".fullwidth-menu-area", 0.5, { xPercent: 100, display: 'none', ease: Expo.easeOut });
            }
        });

        $('.backdrop-area, .header-menu-close-button').click(function () {
            TweenMax.to(".backdrop-area", 0.5, { opacity: 0, display: 'none', ease: Power2.easeInOut });
            TweenMax.to(".fullwidth-menu-area", 0.5, { xPercent: 100, display: 'none', ease: Expo.easeOut });
        });

        const heroSlider = new Swiper(".hero__slider", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: true,
            navigation: {
                nextEl: '.hero__slider .swiper-button-next',
                prevEl: '.hero__slider .swiper-button-prev',
            },
            pagination: {
                el: ".hero__slider .swiper-pagination",
                clickable: true,
            },
        });

       
        $("#form-wit-project-select").select2({
            minimumResultsForSearch: -1,
        }).on('change', function () {
            // console.log($(this).val());
            var id = '.page-content-image .pic-mobile .box' + $(this).val();
            $('.page-content-image .pic-mobile [class^="box"]').removeClass('active');
            // console.log(id);
            $(id).addClass('active');
        });
    });

    jQuery(window).load(function () {
        // jQuery("#preloader").fadeOut(1000);
    });
})(jQuery);