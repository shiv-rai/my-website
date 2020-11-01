const responsive = {
    0:{
        items: 1
    },
    320:{
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {
    $nav=$('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*   click event on toggle menu    */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 2500,
    responsive: responsive

});



    // AOS Instance
    AOS.init();
    
});


