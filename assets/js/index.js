$(document).ready(function () {
  // Responsive viewport section
  $.fn.isOnScreen = function () {
    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft(),
    };

    var marginHeader = 81;
    var offsetFooter = 200;

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() - marginHeader;

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom =
      bounds.top + this.outerHeight() - marginHeader - offsetFooter;

    return !(
      viewport.right < bounds.left ||
      viewport.left > bounds.right ||
      viewport.bottom < bounds.top ||
      viewport.top > bounds.bottom
    );
  };

  // Sidebar Links section
  function checkActiveCategory() {
    $("section").each(function () {
      if ($(this).isOnScreen()) {
        var sidebarLink = $(".sidebar a[href='#" + $(this).attr("id") + "']");
        $(".sidebar a.active").removeClass("active");
        sidebarLink.addClass("active");
        var hasClass = sidebarLink.hasClass("submenu-link"),
          nextHasClass = sidebarLink.next().hasClass("submenu-links");
        if (hasClass || (!hasClass && !nextHasClass)) {
          var parent = sidebarLink.parent(),
            hasClass = parent.hasClass("submenu-links");
          if (hasClass && !parent.hasClass("show")) {
            $(".submenu-links.show").removeClass("show");
            parent.addClass("show");
          } else if (!hasClass) {
            $(".submenu-links.show").removeClass("show");
          }
          return false;
        }
      }
    });
  }

  function toggleSidebarSubmenu(event) {
    var className = event.srcElement.classList[0].toString();
    $(`.${className} + .submenu-links`).toggleClass("show");
  }

  document.addEventListener(
    "click",
    function (event) {
      if (!event.target.matches(".has-children-links")) return;
      event.preventDefault();
      toggleSidebarSubmenu(event);
    },
    false
  );

  // Navbar toggle here
  function checkNavbar() {
    if (!$(".content").isOnScreen()) {
      $(".navbar").addClass("scrolling");
    } else {
      $(".navbar").removeClass("scrolling");
    }
  }

  // Back-to-Top button toggles here
  function checkScrollTop() {
    if ($(window).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  }
  // Sidebar Links section - end

  // Theme section
  function setTheme(themeName) {
    document.body.setAttribute("data-theme", themeName);
    localStorage.setItem("currentTheme", themeName);
    $(".toggle-theme i").toggleClass("fa-moon fa-sun");
  }

  function initTheme() {
    if (localStorage.getItem("currentTheme") === "dark") {
      setTheme("dark");
    }
  }

  function toggleTheme() {
    if (localStorage.getItem("currentTheme") !== "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  // Theme section - end

  // Sidebar/Navigation Links section
  function toggleSidebar() {
    let sidebar = $(".sidebar");
    if (!sidebar.hasClass("hide-sidebar")) {
      let sidebar = $(".sidebar");
      $(".shade").removeClass("shown");
      sidebar.addClass("animate__slideOutLeft");
      window.setTimeout(function () {
        sidebar.addClass("hide-sidebar");
        sidebar.removeClass("animate__slideOutLeft");
      }, 1000);
    } else {
      let sidebar = $(".sidebar");
      sidebar.removeClass("hide-sidebar");
      $(".shade").addClass("shown");
    }
  }

  $(".sidebar-toggler").on("click", function (e) {
    e.stopPropagation();
    toggleSidebar();
  });

  //Closes sidebar if screen size is less than 768 pixels
  $(".sidebar a").on("click", function () {
    var w = document.body.clientWidth;
    if (w < 768) {
      toggleSidebar();
    }
  });

  $(".close-sidebar").on("click", toggleSidebar);
  // Sidebar/Navigation Links section - End

  // Load functions on page load
  initTheme();
  checkActiveCategory();
  checkNavbar();
  checkScrollTop();

  $(window).on("scroll", function () {
    checkNavbar();
    checkActiveCategory();
    checkScrollTop();
  });

  // Scroll-to-Top button event
  $(".scroll-top").click(function () {
    let scrollSpeed = 100; /* Default */
    if ($(window).width() <= 640)
      scrollSpeed = 210; /* For small (mobile) Screens */
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      scrollSpeed
    );
  });

  //  Text Copy-Select functionality
  function copy(textToCopy, $element) {
    //temp input
    var input = $('<input type="text" value=\'' + textToCopy + "' />");
    input.appendTo("body");
    input.get(0).select();
    input.get(0).setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    //remove temp input
    input.remove();
    //hide tooltip
    setTimeout(() => $element.tooltip("hide"), 1500);
  }

  /**
   * Copy tooltip functionality
   * @param {object} copiedTooltipOptions
   */
  // Copied tooltip functions
  var copiedTooltipOptions = {
    title: "Copied",
    trigger: "click",
    placement: "bottom",
  };

  $(".button-caption-sub").tooltip(copiedTooltipOptions);

  $(".button-caption-sub").click(function () {
    var classes = $(this).text().trim();
    classes = classes.replace(/\./g, "");
    copy(classes, $(this));
  });

  $(".script-copy").tooltip(copiedTooltipOptions);

  $(".script-copy").click(function () {
    var script = $(this).text().trim();
    copy(script, $(this));
  });

  // Theme changer button
  $(".toggle-theme").on("click", function () {
    toggleTheme();
  });

  // Download Button button
  $(
    "#downloadGithubRawHeader, #downloadGithubRawButton, #downloadGithubRawHowTo"
  ).on("click", downloadGithubCssRaw);

  function downloadGithubCssRaw() {
    var link =
      "https://raw.githubusercontent.com/sButtons/sbuttons/master/dist/sbuttons.min.css";
    if (window.fetch) {
      fetch(link)
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = "sbuttons.min.css";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        .catch((err) => console.log(err));
    } else {
      window.location.href = link;
    }
  }

  // Body event
  $("body").click(function (event) {
    var sidebar = $(".sidebar");
    var targetElement = $(event.target);
    if (
      $(window).width() <= 767 &&
      !targetElement.hasClass("sidebar") &&
      !targetElement.parents(".sidebar").length &&
      sidebar.hasClass("animate__slideInLeft") &&
      !sidebar.hasClass("hide-sidebar")
    ) {
      toggleSidebar();
    }
  });
});
