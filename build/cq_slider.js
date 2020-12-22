var cq_swiper_quest = new Swiper('.cq_swiper_quest', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

var cq_swiper_included = new Swiper('.cq_included_swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    height:850,
    grabCursor: true,
    // autoHeight:true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // centeredSlides: true,
    // spaceBetween: 10,
    // slidesPerView: 3,
   breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }}
});


var cq_swiper_feedback = new Swiper('.cq_swiper_feedback', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // height:700,
    grabCursor: true,
    // autoHeight:true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // centeredSlides: true,
    // spaceBetween: 10,
    // slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }}
});


if (window.innerWidth < 960) {
// слайдер только для мобильного,
// для пакетов (для пакетов, на десктопе это таблица)
var swiper_table_mob = new Swiper('.cq_table_mob', {
    loop: true,
    grabCursor: true,
    // this shows a bit of the previous/next slides
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 10,
    });

    var swiper_table_mob = new Swiper('.cq_included_swiper_mobile', {
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
        },
        // this shows a bit of the previous/next slides
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
    });

}


