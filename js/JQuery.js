$(document).ready(function() {
    //-----------------------Scroll animation-----------------------------
    $(window).scroll(function() {
        $('.project, .events, .team-highlights').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('fade-in');
            }
        });
    });

    //-------------------------------Navigation hover------------------------------
    $('.nav-links ul li').hover(
        function() {
            $(this).find('a').stop().animate({
                'padding-bottom': '5px'
            }, 200);
        },
        function() {
            $(this).find('a').stop().animate({
                'padding-bottom': '0'
            }, 200);
        }
    );

    //--------------------------------image hover-----------------------------------
    $('.project-col').hover(
        function() {
            $(this).find('img').stop().animate({
                'transform': 'scale(1.05)'
            }, 200);
        },
        function() {
            $(this).find('img').stop().animate({
                'transform': 'scale(1)'
            }, 200);
        }
    );

    //---------------------------------Parallax scrolling-------------------------------
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        $('.header').css({
            'background-position-y': (-scroll/2) + "px"
        });
    });

    //--------------------------------Smooth scroll----------------------------------
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    //-----------------------------Activity column animations--------------------------------------
    $('.activity-column').hover(
        function() {
            $(this).stop().animate({
                'transform': 'translateY(-10px)'
            }, 200);
        },
        function() {
            $(this).stop().animate({
                'transform': 'translateY(0)'
            }, 200);
        }
    );
});