$( document ).ready(function() {
   


$('.mySlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    // stagePadding: 250,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }

    }
});



$('.clientImgSlide').owlCarousel({
    nav: true,
  navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/icons/readmore.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/icons/readmore.svg'></div>"],
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6    }

    }
})



$('.appSilder ').owlCarousel({

    nav: false,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
  
        600:{
            items:1
        },
      
        991:{
            items:1    }

    }
})

$('.industry').owlCarousel({
    loop:true,
    nav: true,
    navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/icons/readmore.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/icons/readmore.svg'></div>"],
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:2
        },
  
        600:{
            items:3
        },
      
        991:{
            items:4    }

    }
})


$('.funSlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    // stagePadding: 250,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }

    }
});


$('.divSlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    // stagePadding: 250,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }

    }
});

$('.accoSlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    // stagePadding: 250,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }

    }
});
// header stick

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbar-default").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar-default").removeClass("active");
    }
});

});

$( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  } );


  $(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.itembox').show('1000');
        }
        else {
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
          }
    })
    });
    // add active class on selected item
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });




    $(document).ready(function(){
        $(".openMenu").click(function(){
          $(".myNav").addClass("active");
        });
        $(".hideMe").click(function(){
            $(".myNav").removeClass("active");
          });
    
        
      });