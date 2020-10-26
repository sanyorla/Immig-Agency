(function($) {
    "use strict";
    var win = $(window);
    $('.gallery-item').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', 
        gallery:{
            enabled:true
        },
        zoom: {
            enabled: true, 
            duration: 300,
            easing: 'ease-in-out'
        }
    });
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    /* SUBSCRIBE FORM */
    /* declare contactForm */


    /* 1 contactForm */
    var $contactForm = $('#subscribeform1');
    $(".result-error").hide();
    $(".result-success").hide();
    /* adding rules for validation fields */
    $contactForm.validate({
        errorClass: 'section__popup__form-error',
        rules: {
            form_name1: {
                required: true
            },
            form_phone1: {
                required: true
            }
        },
        /* adding error message text for validation fields */
        messages: {
            form_name1: {
                required: "This field is required"
            },
            form_phone1: {
                required: "This field is required"
            }
        },
        /* ajax request properties */
        submitHandler: function() {
            /* get values from form fields */
            var form_data = {
                'Name': $('#form_name1').val(),
                'Phone': $('#form_phone1').val()
            }
            for (var key in form_data) {
                var value = form_data[key];
                form_data[value.name] = value.value;
            }
            $.ajax({
                type: 'POST',
                url: '../../sendmail.php',
                data: form_data,
                dataType: "json",
            }).done(function(data) {
                if (data.type == "error") {
                    $(".result-error").show();
                    $(".result-error").html(data.text);
                }
                if (data.type == "done") {
                    $(".result-success").show();
                    $(".result-success").html(data.text);
                    $(".result-error").hide();
                }
            });
            $('.result-error').hide();
        }
    });
    // /* 2 contactForm */
    var $contactForm2 = $('#subscribeform2');
    $(".result-error2").hide();
    $(".result-success2").hide();
    /* adding rules for validation fields */
    $contactForm2.validate({
        errorClass: 'section-callback__form-field-error',
        rules: {
            form_name2: {
                required: true
            },
            form_phone2: {
                required: true
            },
            form_email2: {
                required: true,
                email: true
            }
        },
        /* adding error message text for validation fields */
        messages: {
            form_name2: {
                required: "This field is required"
            },
            form_phone2: {
                required: "This field is required"
            },
            form_email2: {
                required: "This field is required",
                email: "Please enter a valid email"
            }
        },
        /* ajax request properties */
        submitHandler: function() {
            /* get values from form fields */
            var form_data = {
                'Name': $('#form_name2').val(),
                'Phone': $('#form_phone2').val(),
                'Email': $('#form_email2').val()
                
            }
            for (var key in form_data) {
                var value = form_data[key];
                form_data[value.name] = value.value;
            }
            $.ajax({
                type: 'POST',
                url: '../../sendmail.php',
                data: form_data,
                dataType: "json",
            }).done(function(data) {
                if (data.type == "error") {
                    $(".result-error2").show();
                    $(".result-error2").html(data.text);
                }
                if (data.type == "done") {
                    $(".result-success2").show();
                    $(".result-success2").html(data.text);
                    $(".result-error2").hide();
                }
            });
            $('.result-error2').hide();
        }
    });
    // /* 3 contactForm */
    var $contactForm3 = $('#subscribeform3');
    $(".result-error3").hide();
    $(".result-success3").hide();
    /* adding rules for validation fields */
    $contactForm3.validate({
        errorClass: 'section-callback__form-field-error',
        rules: {
            form_name3: {
                required: true
            },
            form_phone3: {
                required: true
            },
            form_email3: {
                required: true,
                email: true
            }
        },
        /* adding error message text for validation fields */
        messages: {
            form_name3: {
                required: "This field is required"
            },
            form_phone3: {
                required: "This field is required"
            },
            form_email3: {
                required: "This field is required",
                email: "Please enter a valid email"
            }
        },
        /* ajax request properties */
        submitHandler: function() {
            /* get values from form fields */
            var form_data = {
                'Name': $('#form_name3').val(),
                'Phone': $('#form_phone3').val(),
                'Email': $('#form_email3').val()
                
            }
            for (var key in form_data) {
                var value = form_data[key];
                form_data[value.name] = value.value;
            }
            $.ajax({
                type: 'POST',
                url: '../../sendmail.php',
                data: form_data,
                dataType: "json",
            }).done(function(data) {
                if (data.type == "error") {
                    $(".result-error3").show();
                    $(".result-error3").html(data.text);
                }
                if (data.type == "done") {
                    $(".result-success3").show();
                    $(".result-success3").html(data.text);
                    $(".result-error3").hide();
                }
            });
            $('.result-error3').hide();
        }
    });
    /* SMOOTH SCROLL */
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[class="anchor"]')
        .not('[href*="#v-tabs-item"]') // for bootstrap tabs
        .not('[href*="#collapse"]') // for bootstrap accordion
        .on('click' , function(event) {
            if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
                var trigger = this;
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function() {
                        window.location.href = trigger.href;
                    });
                }
            }
        });
    $('.to-top').on('click', function(e) {
        $('html,body').animate({
            scrollTop: 0
        }, 1100);
        e.preventDefault();
    });
    /* MENU DROPDOWN */
    $('.navbar-nav .dropdown  > a').on('click hover', function(e) {
        if ((win.width() <= 1039) && (win.width() >= 768)) {
            e.preventDefault();
            window.location = this.href;
        }
    });
    $('.navbar-nav .dropdown  > a').on('click hover', function(e) {
        if ((win.width() > 1039)) {
            e.preventDefault();
            window.location = this.href;
        }
    });
    $('.navbar-nav .dropdown  > .dropdown-toggle').on('click hover', function(e) {
        if ((win.width() <= 767)) {
            e.preventDefault();
            $(this).parent().children('ul').toggleClass('show');
            if (!$(this).parent().children('ul').hasClass('show')) {
                window.location = this.href;
            }
        }
    });
    $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
        
            var viewportTop = win.scrollTop();
            var viewportBottom = viewportTop + win.height();
        
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };
     var win = $(window);
     win.on('resize scroll', function() {
            if ($('.section-counters__block--text').isInViewport()) {
               $('.section-counters__value').each(function() {
                var $this = $(this),
                  countTo = $this.attr('data-count');
                $({
                  countNum: $this.text()
                }).animate({
                    countNum: countTo
                  },
                  {
                    duration: 2000,
                    easing: 'linear',
                    step: function() {
                      $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                      $this.text(this.countNum);
                    }
                  });
              })
            }
        });
    /* popup on page load */
    // setTimeout(function() {
    //     $('.section__popup[data-name=popup_susbscribe]').fadeIn();
    //     $('body').css('overflow', 'hidden');
    // }, 5000);
    // $('.popup__close').click(function() {
    //     $('body').css('overflow', 'visible');
    //     $('.section__popup').fadeOut();
    // });
    /* popup-btn */
    $('.btn_popup').click(function(e) {
        e.preventDefault();
        var name = $(this).data('name');
        $('.section__popup[data-name=popup_subscribe]').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $('.popup__close').click(function() {
        $('body').css('overflow', 'visible');
        $('.section__popup').fadeOut();
    });
    /* PRELOADER */
    setTimeout(function() {
        $('.loader').fadeOut();
        $('.page-load').fadeOut();
    }, 1500);
    win.scroll(function() {
        if (win.scrollTop() > 200) {
            $('.to-top').addClass('to-top-visible');
        } else {
            $('.to-top').removeClass('to-top-visible');
        }
    });
})(jQuery);