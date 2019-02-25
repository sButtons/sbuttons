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
        $(".sidebar a.active").removeClass("active");
        $(".sidebar a[href='#" + $(this).attr('id') + "']").addClass("active");
        return false;
      }
    });
  }

  checkActiveCategory();

  $(window).on('scroll', function(){
    checkActiveCategory();
  });
});
