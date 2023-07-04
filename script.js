let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times'); // toggle class fa-times
    navbar.classList.toggle('active'); // toggle class active
});