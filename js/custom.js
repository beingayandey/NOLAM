// ! Pre Loader By Jquery

// $(window).on("load", function () {
//     $("#pre_Loader").fadeOut(2000);
// });

// =======================<<<<<>>>>>=======================


// ! Custom Fixed NavBar

// $(function () {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 400) {
//             $("header").addClass("active");
//         } else {
//             $("header").removeClass("active");
//         }
//     });
// });

// =======================<<<<<>>>>>=======================


// ! Back To Top (Jquery)

// let btn = $('#backToTop');
// $(window).on('scroll', function () {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });
// btn.on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, '1000');
// });


// =======================<<<<<>>>>>=======================

// ! Easy Responsive Tabs

// $(document).ready(function () {
//     $('#horizontalTab').easyResponsiveTabs({
//         type: 'default',
//         width: 'auto',
//         fit: true,
//         closed: 'accordion',
//         activate: function (event) {
//             var $tab = $(this);
//             var $info = $('#tabInfo');
//             var $name = $('span', $info);
//             $name.text($tab.text());
//             $info.show();
//         }
//     });
// });

// =======================<<<<<>>>>>=======================


// ! Swiper Slider

// var swiper = new Swiper(".mySwiper", {
//     loop: true,
//     // centeredSlides: true,
//     slidesPerView: 3,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 1000,
//         disableOnInteraction: true,
//     },
//     speed: 1500,
//     // direction: "vertical",
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// Autoplay Stop on Hover

/* $(".swiper").mouseenter(function () {
    swiper.autoplay.stop();
});

$(".swiper").mouseleave(function () {
    swiper.autoplay.start();
});

*/
const links = document.querySelectorAll('[id^="link"]');
const menuimgs = document.querySelectorAll('[id^="m_mnu_img"]');

function activateMenuImage(menuimg) {
    menuimgs.forEach(element => {
        element.classList.remove('active');
        element.style.display = 'none';
    });

    menuimg.classList.add('active');
    menuimg.style.display = 'block';
}

links.forEach((link, index) => {
    link.addEventListener('mouseover', () => {
        activateMenuImage(menuimgs[index]);
    });
});


var swiper = new Swiper(".mySwiper", {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: true,
    // },
    speed: 1500,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        // when window width is <= 499px
        360: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        575: {
            slidesPerView: 1,
            spaceBetweenSlides: 40
        },
        576: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },
        990: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },
        991: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        }
    },
    mousewheel: true,
    keyboard: true,
});

// =======================<<<<<>>>>>=======================
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         let obj = document.getElementById(id),
//             current = start,
//             range = end - start,
//             increment = end > start ? 1 : -1,
//             step = Math.abs(Math.floor(duration / range)),
//             timer = setInterval(() => {
//                 current += increment;
//                 obj.textContent = current;
//                 if (current == end) {
//                     clearInterval(timer);
//                 }
//             }, step);
//     }
//     counter("count1", 10, 250, 4500);
//     counter("count2", 10, 350, 3000);
//     counter("count3", 1000, 4500, 4500);
//     counter("count4", 1, 95, 4500);
// });

// * If this code start problem then uncommendout the upper previous code and delete this * 
document.addEventListener("DOMContentLoaded", () => {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    function startCounterOnScroll(id, start, end, duration) {
        const obj = document.getElementById(id);

        function counter() {
            let current = start, range = end - start, increment = end > start ? 1 : -1, step = Math.abs(Math.floor(duration / range));
            const timer = setInterval(() => { current += increment; obj.textContent = current; if (current == end) clearInterval(timer); }, step);
        }

        if (isInViewport(obj)) counter();

        window.addEventListener("scroll", () => isInViewport(obj) && counter());
    }

    startCounterOnScroll("count1", 10, 250, 4500);
    startCounterOnScroll("count2", 10, 350, 3000);
    startCounterOnScroll("count3", 1000, 4500, 4500);
    startCounterOnScroll("count4", 1, 95, 4500);
});
