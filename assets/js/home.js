window.setTimeout(function(){
  var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    loop:true,
    centeredSlides: false,
    spaceBetween: 15,
    cssMode: true, 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          grabCursor: true,
          cssMode:false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          grabCursor: true,
          cssMode:false,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
          grabCursor: true,
          cssMode:false,
        },
      },
  });
},1000)


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
});


  // *********** Accordion **************//
  document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion__item");
    if (accordionItems.length > 0) {
      accordionItems[0].classList.add("active");
      const firstItemContent = accordionItems[0].querySelector(".item__content");
      firstItemContent.style.maxHeight = firstItemContent.scrollHeight + "px";
    }
  
    const accordionBtns = document.querySelectorAll(".item__header");
  
    accordionBtns.forEach((accordion) => {
      accordion.onclick = function () {
        this.classList.toggle("active");
  
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          this.querySelector('.item__icon svg').style.transform = 'rotate(0deg)';
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          this.querySelector('.item__icon svg').style.transform = 'rotate(180deg)';
        }
      };
    });
  });
  
  const menuBar = document.getElementById('menu-bar');
  const navbar = document.querySelector('.navbar');
  const headerLogo = document.querySelector('.header .logo');
  let isMenuOpen = false;
  menuBar.addEventListener('click',()=>{
    if (isMenuOpen) {
      // If the menu is open, revert to the initial state
      menuBar.style.marginLeft = ''; // Clear the style
      headerLogo.style.display = ''; // Clear the style
      navbar.style.cssText = ''; // Clear the style
      navbar.classList.remove('mobile-menu');
      menuBar.classList.remove("fade-in");
      menuBar.classList.add("fade-out");


    }else{
      menuBar.classList.add("fade-in")
      menuBar.style.marginLeft='auto'
      headerLogo.style.display='none';
      navbar.style.cssText='display:flex';
      navbar.classList.toggle('mobile-menu');
    }
    isMenuOpen = !isMenuOpen; 
  })