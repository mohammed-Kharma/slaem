   $(function(){
       $(".panel:first").css("display","block");
    $(".accordion").click(function(){
      $(this).next().slideToggle(1000);
      $(".panel").not($(this).next()).slideUp(1000);
      // $(".panel").not($(this).next().show());
    });
    $('.c-silder').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    var owl2 = $('.owl-carousel');
owl2.owlCarousel();
$('.arr-tow').click(function() {
owl2.trigger('next.owl.carousel');
})

$('.arr-one').click(function() {

owl2.trigger('prev.owl.carousel', [300]);
});
// -----------------------------------------


   });
   //Javacript for responsive navigation menu
   const menuBtn = document.querySelector(".menu-btn");
   const navigation = document.querySelector(".navigation");

   menuBtn.addEventListener("click", () => {
     menuBtn.classList.toggle("active");
     navigation.classList.toggle("active");
   });

   //Javacript for video slider navigation
   const btns = document.querySelectorAll(".nav-btn");
   const slides = document.querySelectorAll(".video-slide");
   const contents = document.querySelectorAll(".content");

   var sliderNav = function(manual){
     btns.forEach((btn) => {
       btn.classList.remove("active");
     });

     slides.forEach((slide) => {
       slide.classList.remove("active");
     });

     contents.forEach((content) => {
       content.classList.remove("active");
     });

     btns[manual].classList.add("active");
     slides[manual].classList.add("active");
     contents[manual].classList.add("active");
   }

   btns.forEach((btn, i) => {
     btn.addEventListener("click", () => {
       sliderNav(i);
     });
   });

   
   AOS.init();
  //  ---------------------------------------------------------
  
