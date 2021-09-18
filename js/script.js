let menu = document.querySelector('#menu-bars');
let nav = document.querySelector('.header__menu');

menu.onclick = () =>{
    menu.classList.toggle('ic-times');
    nav.classList.toggle('menu-open')
}