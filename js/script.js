// Menu bars
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

// Swiper
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