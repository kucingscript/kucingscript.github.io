Swal.fire(
    'Selamat Datang',
    'Di Website Kucing Menangis',
    'info'
)

//scroll

$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 60
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});


//aos

function aos_init() {
    AOS.init({
        duration: 1000,
        once: true
    });
}
$(window).on('load', function () {
    aos_init();
});

//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//preloader

$(window).on('load', function () {
    if ($('.preloader').length) {
        $('.preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
});