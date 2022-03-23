(function ($) {
"use strict";


// meanmenu
$('#mobile-menu').meanmenu({
    meanScreenWidth: "768",
    meanMenuContainer: '.mobile-menu',
    
});


        jQuery("#logo").hover(function() {
            jQuery(".tool").stop().animate({
                width: "200px"
            }, 800);
        }, function() {
            jQuery(".tool").stop().animate({
                width: "0px"
            }, 800);
        });   
        jQuery(document).ready(function() {
            var toggled = false;
            jQuery('.subscribe').on('click', function() {
                if (!toggled)
                    searchBar();
                else
                    searchBarClose();
            });
            jQuery('.close').on('click', function() {
                if (!toggled)
                    searchBar();
                else
                    searchBarClose();
            });
        });

        function searchBar() {
            jQuery('#cloudfw_mailchimp-2').fadeIn('fast', function() {
                jQuery('.subscribebox').animate({
                    width: 'toggle'
                });
            });
        }

        function searchBarClose() {
            jQuery('.subscribebox').animate({
                width: 'toggle'
            }, function() {
                jQuery('#cloudfw_mailchimp-2').fadeOut('slow');
            });

        }

// data-background
$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") +")")
});

// Stikey Js  
    (function () {
      var nav = $('.menu-nav-sec');
      var scrolled = false;
      $(window).on('scroll', function () {
        if (120 < $(window).scrollTop() && !scrolled) {
          nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
          scrolled = true;
        }
        if (90 > $(window).scrollTop() && scrolled) {
          nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
          scrolled = false
        }
      });
    }());

// // slider-active
 $('.slider-active').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:5,
             nav:false
         },
         1000:{
             items:8
         }
     }
 })

  $('.owl-theme').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }
     }
 });
 

 // // mini-active
 $('.mini-slides').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class=" fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }
     }
 })
 // //  ui--carousel
 $('.testimonial-active').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }
     }
 })

 // // brand-active
 $('.brand-active').owlCarousel({
     loop:true,
     nav:false,
     dots:false,
     autoplay:true,
      navText:['<i class=" fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:3,
             nav:false
         },
         1000:{
             items:6
         }
     }
 })

 // service - active
$('.hero-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// blog - active
$('.blog-active').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.work-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// //  work-slider
//   $('.work-slider').owlCarousel({
//       loop:true,
//       nav:true,
//       dots:true,
//       autoplay:true,
//       navText:['<i class="fa fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
//       responsive:{
//           0:{
//               items:1,
//               nav:false
//           },
//           767:{
//               items:1,
//               nav:false
//           },
//           1000:{
//               items:1
//           }
//       }
//   })

  // service-active
 $('.service-active').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }

     }
 })

    // // like-slider
 $('.like-slider').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }
     }
 })


//  alada

 // // first-active
 $('.first').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
     navText:['<i class=" fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1,
            nav:false
        },
        1000:{
            items:1
        }
    }
})


  // // mini slider
 $('.footer-mini-active').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     autoplay:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
     responsive:{
         0:{
             items:1,
             nav:false
         },
         767:{
             items:1,
             nav:false
         },
         1000:{
             items:1
         }
     }
 })


/* magnificPopup img view */
$('.popup-image').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
  type: 'iframe'
});

 $(document).ready(function(){
      // init
         $(".cdev").circlos();


     });

 /*START WOW ANIMATION JS*/
       new WOW().init(); 
    /*END WOW ANIMATION JS*/



$(document).ready(function(){

$(".filter-button").click(function(){
var value = $(this).attr('data-filter');

if(value == "all")
{

$('.filter').show('1000');
}
else
{

$(".filter").not('.'+value).hide('3000');
$('.filter').filter('.'+value).show('3000');

}
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
   

  // As A jQuery Plugin -->

  var gallery = $('.client-image a').simpleLightbox({

      /* options */

  });

  // Initialize the plugin
const demo = document.querySelector('#demo');
const ps = new PerfectScrollbar(demo);

// Handle size change
document.querySelector('#resize').addEventListener('click', () => {

  // Get updated values
  width = document.querySelector('#width').value;
  height = document.querySelector('#height').value;
  
  // Set demo sizes
  demo.style.width = `${width}px`;
  demo.style.height = `${height}px`;
  
  // Update Perfect Scrollbar
  ps.update();
});

  
})(jQuery);	