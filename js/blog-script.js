// Initialize Preloader
var loader = document.getElementById("preloader");

// Function to hide the loader
function hideLoader() {
    loader.style.display = 'none';
}

    setTimeout(hideLoader, 2000);

// change navbar styles on scroll:
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 60);
})


// show/hide faq answer :
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('open');

        //Change icon
        const icon = faq.querySelector('.faq_icon i');

        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }
        else{
            icon.className = 'uil uil-plus';
        }
    })
})

// show/hide nav menu bar:
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");

menuBtn.addEventListener('click', ()=> {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

//cllose navbar function
const closeNav  =  ()=> {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);





 // taext animation effect...........
 var typed = new Typed('.auto-type', {
    strings: ['Welcome In Our Page','Join With us' , 'Be A member of us' , 'Grow Your Skills'],
    typeSpeed: 90,
    backSpeed: 70,
    loop:true,
  })





  //for owl carousel***************************************
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 4,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      //   nav: true,
      navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')],
      //   navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav2.owl-nav2-next')],
  
    });
  });
  

