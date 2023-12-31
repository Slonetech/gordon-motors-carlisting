let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times'); // toggle class fa-times
    navbar.classList.toggle('active'); // toggle class active
});

document.querySelector('#login-btn').addEventListener('click', () => {
    document.querySelector('.login-form-container').classList.toggle('active');
});

document.querySelector('#close-login-form').addEventListener('click', () => {
    document.querySelector('.login-form-container').classList.remove('active');
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else
    {
        document.querySelector('.header').classList.remove('active');
    }
 
});




window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else
    {
        document.querySelector('.header').classList.remove('active');
    }
};


document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(elm => {

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX*speed)/90;
    let y = (window.innerHeight - e.pageY*speed)/90;

    elm.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

};

document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach(elm => {

    elm.style.transform = `translateX(0px) translateY(0px)`;
});

}; 

// swiper js 
let swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides:true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,

      },
      "@0.75": {
        slidesPerView: 2,

      },
      "@1.00": {
        slidesPerView: 3,

      },
    },
  });


   swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides:true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,

      },
      "@0.75": {
        slidesPerView: 2,

      },
      "@1.00": {
        slidesPerView: 3,

      },
    },
  });

   swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides:true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,

      },
      "@0.75": {
        slidesPerView: 2,

      },
      "@1.00": {
        slidesPerView: 3,

      },
    },
  });