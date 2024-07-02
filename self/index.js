$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center:true,
    nav:true,
    navText:[
        `<i class="fa-solid fa-angles-left"></i>`,
        `<i class="fa-solid fa-angles-right"></i>`,

    ],
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:3,
            nav:true,
        },
        1000:{
            items:3,
            nav:true,
            
        }
    }
})