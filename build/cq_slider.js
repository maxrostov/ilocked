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

var cq_swiper_included = new Swiper('.cq_swiper_included', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },



    breakpoints: {
        640: {
            slidesPerView: 1,
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
//
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })