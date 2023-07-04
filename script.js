let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times'); // toggle class fa-times
    navbar.classList.toggle('active'); // toggle class active
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else
    {
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times'); // remove class fa-times
    navbar.classList.remove('active'); // remove class active   
});


window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else
    {
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times'); // remove class fa-times
    navbar.classList.remove('active'); // remove class active   
};