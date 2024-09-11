$("#fame-slider").owlCarousel({
  autoplay: false,  // Autoplay enabled
  autoplayTimeout: 2000,  // Set autoplay to 2 seconds (2000ms)
  smartSpeed: 2300,  // Speed of sliding animation
  items: 4,  
  loop: true,  
  margin: 10,  
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,  
  dots: false,  
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>"
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      margin:10,
      nav: false, 
      dots: true,
    },
    480: {
      items: 2,
      
    },
    568: {
      items: 2.3,
       
    },
    600: {
      items: 3, 
     
    },
    667: {
      items: 3,  
      
    },
    1000: {
      items: 3, 
    },
    1190: {
      items: 4, 
    }
  }
});
