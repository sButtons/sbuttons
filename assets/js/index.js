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

  checkActiveCategory();

  $(window).on('scroll', function(){
    checkActiveCategory();
  });
});
