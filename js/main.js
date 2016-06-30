jQuery(document).ready(function() {

// Banner =====================================================================
$("#banner-background").animate({opacity: "1"}, 1000);
  if ($(window).width() > 770) {
      $("#banner-icon").animate({opacity: "1", top: "180px"}, 2000);
      $("#banner-tagline").animate({opacity: "1", top: "120px"}, 2000);

  } else {
      $("#banner-icon").animate({opacity: "1", top: "220px"}, 2000);
      $("#banner-tagline").animate({opacity: "1", top: "120px"}, 2000);

  }

  $(window).resize(function() {
    if ($(window).width() > 770) {
      $("#banner-icon").css('top', "180px");

    } else {
      $("#banner-icon").css('top', "220px");

    }
  });


// Contact Form ===============================================================
$("#submit-message").click(function(e) {
  var name = $("#name").val();
  var phone = $('#telephone').val();
  var email = $("#email").val();
  if (name == '' || phone == '' || email == '') {
    e.preventDefault();
      if (name == '') {
         $("#name").css('border', "2px solid red")
      }

      if (phone == '') {
         $("#telephone").css('border', "2px solid red")
      }

      if (email == '') {
         $("#email").css('border', "2px solid red")
      }

      }
});

// Content Boxes ==============================================================
  var winHeight = jQuery(window).height();
  var winHeight = winHeight + 300;
  jQuery('body').css('min-height', winHeight+'px');

    jQuery(window).scroll(function () {

        if (jQuery(this).scrollTop() > 100) {
            if (jQuery('.totop').hasClass('visible') == false) {
                jQuery('.totop').stop().slideDown(1000);
                jQuery('.totop').addClass('visible');
            }
        } else {
            if (jQuery('.totop').hasClass('visible') == true) {
                jQuery('.totop').stop().slideUp(1000);
                jQuery('.totop').removeClass('visible');
              }
        }

        if (jQuery(this).scrollTop() > 700) {
            if (jQuery('.totop2').hasClass('visible2') == false) {
                jQuery('.totop2').stop().slideDown(1000);
                jQuery('.totop2').addClass('visible2');
            }
        } else {
            if (jQuery('.totop2').hasClass('visible2') == true) {
                jQuery('.totop2').stop().slideUp(1000);
                jQuery('.totop2').removeClass('visible2');
              }
        }

        if (jQuery(this).scrollTop() > 900) {
            if (jQuery('.totop3').hasClass('visible3') == false) {
                jQuery('.totop3').stop().slideDown(1000);
                jQuery('.totop3').addClass('visible3');
            }
        } else {
            if (jQuery('.totop3').hasClass('visible3') == true) {
                jQuery('.totop3').stop().slideUp(1000);
                jQuery('.totop3').removeClass('visible3');
              }
        }

        if (jQuery(this).scrollTop() > 1150) {
            if (jQuery('.totop4').hasClass('visible4') == false) {
                jQuery('.totop4').stop().slideDown(1000);
                jQuery('.totop4').addClass('visible4');
            }
        } else {
            if (jQuery('.totop4').hasClass('visible4') == true) {
                jQuery('.totop4').stop().slideUp(1000);
                jQuery('.totop4').removeClass('visible4');
              }
        }

        if (jQuery(this).scrollTop() > 1450) {
            if (jQuery('.totop5').hasClass('visible5') == false) {
                jQuery('.totop5').stop().slideDown(1000);
                jQuery('.totop5').addClass('visible5');
            }
        } else {
            if (jQuery('.totop5').hasClass('visible5') == true) {
                jQuery('.totop5').stop().slideUp(1000);
                jQuery('.totop5').removeClass('visible5');
              }
        }

        if (jQuery(this).scrollTop() > 1500) {
            jQuery('.totop6').css('opacity', '1');
        } else {
            jQuery('.totop6').css('opacity', '0');
        }
    });
});
