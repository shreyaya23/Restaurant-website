const menu_btn = document.querySelector('.nav__icon');
const close_btn = document.querySelector('.nav__close-icon');
const menu = document.querySelector('.nav__list');
const nav_bg_overlay = document.querySelector('.nav__bg-overlay');

const navOpen = ()=>{
    menu.classList.add('show');
    nav_bg_overlay.classList.add('active');
    //Lo de abajo sirve para que no podamos scrollear en el nav
    document.body.style = 'visibility: visible; height:100vh; width:100vw; overflow:hidden;'; 
    menu_btn.classList.add('active');

}

const navClose = ()=>{
    menu.classList.remove('show');
    nav_bg_overlay.classList.remove('active');
    document.body.style = 'visibility: visible; height:initial; width:100%; overflow-x:hiden;';


}

menu_btn.addEventListener('click',navOpen);
close_btn.addEventListener('click', navClose);
nav_bg_overlay.addEventListener('click', navClose);

//AOS - initialize
AOS.init({
    offset: 200,
    delay: 100,
    duration:400,
    easing: 'ease',
    once: false,
    mirror: false,
    ancorPlacement: 'top-bottom'
})