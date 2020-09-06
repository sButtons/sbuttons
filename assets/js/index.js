$(document).ready(function(){
  $.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

  };

  function checkActiveCategory(){
    $("section").each(function(){
      if($(this).isOnScreen()){
        var sidebarLink = $(".sidebar a[href='#" + $(this).attr('id') + "']");
        $(".sidebar a.active").removeClass("active");
        sidebarLink.addClass("active");
        var hasClass = sidebarLink.hasClass('submenu-link'),
            nextHasClass = sidebarLink.next().hasClass('submenu-links');
        if (hasClass || (!hasClass && !nextHasClass)) {
          var parent = sidebarLink.parent(),
              hasClass = parent.hasClass('submenu-links');
          if (hasClass && !parent.hasClass('show')) {
            $(".submenu-links.show").removeClass('show');
            parent.addClass('show');
          } else if (!hasClass) {
            $(".submenu-links.show").removeClass('show');
          }
          return false;
        }
      }
    });
  }

  function checkNavbar() {
    if (!$(".content").isOnScreen()) {
      $(".navbar").addClass('scrolling');
      $(".icon-link img").attr('src', 'assets/github-blue.svg');
      $(".sidebar").addClass('scrolling');
    } else {
      $(".navbar").removeClass('scrolling');
      $(".icon-link img").attr('src', 'assets/github.svg');
      $(".sidebar").removeClass('scrolling');
    }
  }

  checkActiveCategory();
  checkNavbar();

  $(window).on('scroll', function(){
    checkNavbar();
    checkActiveCategory();
  });

  
  $(window).load(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $('.scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
      return false;
  });



});


