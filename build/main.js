
function hamburger_toggle(){
    $('#nav').toggle();
    $('.pda_menu').toggleClass('open');
}


$(document).ready(function () {

    // $('.owl-carousel').owlCarousel();

    var mySwiper_rec = new Swiper ('.swiper2', {

        // loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        grabCursor: true,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },

    });


     var mySwiper = new Swiper ('.swiper1', {

        // loop: true,
         grabCursor: true,
         // centeredSlides: true,
        // slidesPerView: 4,
        // spaceBetween: 30,
        //  navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
         pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },

    });


    var mySwiper = new Swiper ('.swipernews', {

        // loop: true,
        grabCursor: true,
        // centeredSlides: true,
        // slidesPerView: 4,
        // spaceBetween: 30,
        //  navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },

    });
});