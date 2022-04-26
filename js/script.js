  
// THIS SCRIPT BELLOW
  
  
  $(".owl-carousel").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout:1800,
      items: 4, //items in the carousel
      loop: true,
      lazyLoad: true, //use for delaying images 
      responsive: {
          0 : {
              items: 1
          },
       
          960 : {
              items: 3
          },

          1980 : {
              items: 4
          }
        

      }
      

                
});