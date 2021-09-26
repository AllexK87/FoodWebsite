// **Menu bars
let menu = document.querySelector('#menu-bars');
let nav = document.querySelector('.header__menu');

menu.onclick = () =>{
    menu.classList.toggle('ic-times');
    nav.classList.toggle('menu-open')
}

// Search 
// Open
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
// Close
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// Sleider home
const swiper = new Swiper ('.home-slider', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
})

// Sleider Review
const swiperRev = new Swiper ('.review-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
})