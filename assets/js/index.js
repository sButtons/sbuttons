$(document).ready(function(){
  $.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };

    var marginHeader = 80;

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() - marginHeader;

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight() - marginHeader;

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

  function checkScrollTop() {
    if ($(window).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  };

  checkActiveCategory();
  checkNavbar();
  checkScrollTop();

  $(window).on('scroll', function(){
    checkNavbar();
    checkActiveCategory();
    checkScrollTop();
  });

  $(".scroll-top").click(function () {
    let scrollSpeed = 100; /* Default */
    if ($(window).width() <= 640)
       scrollSpeed = 210; /* For small (mobile) Screens */
    $("html, body").animate({
          scrollTop: 0,
       }, scrollSpeed);
  });
  

  $(".button-caption-sub").tooltip({title:'Copied',trigger:'click',placement:'bottom'});

  $(".button-caption-sub").click(function () {
      var classes = $(this).text().trim();
      classes = classes.replace(/\./g, '');

      //temp input
      var input = $('<input type="text" value="' + classes + '" />');
      input.appendTo('body');
      input.get(0).select();
      input.get(0).setSelectionRange(0, 99999); /*For mobile devices*/
      document.execCommand("copy");
      //remove temp input
      input.remove();
      //hide tooltip
      setTimeout(()=>$(this).tooltip('hide'),1500);
  });

});




