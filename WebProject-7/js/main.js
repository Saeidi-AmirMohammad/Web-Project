$(document).ready(function () {
    $(".comments").owlCarousel({
        rtl: true,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
    })

    $(".img-gallery").owlCarousel({
        rtl: true,
        nav: false,
        items: 3,
        dots: true,
        center: true,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                center: false
            },

            768: {
                items: 3
            }
        }
    })

    $('#navbarNav .nav-item a').on('click', function (e) {
        let target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html , body').animate({
                scrollTop : target.offset().top
            },
            1500
            )
        }
    })

});

