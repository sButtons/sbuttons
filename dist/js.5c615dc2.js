// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/index.js":[function(require,module,exports) {
$(document).ready(function () {
  $.fn.isOnScreen = function () {
    var win = $(window);
    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    var marginHeader = 80;
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() - marginHeader;
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight() - marginHeader;
    return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
  };

  function checkActiveCategory() {
    $("section").each(function () {
      if ($(this).isOnScreen()) {
        var sidebarLink = $(".sidebar a[href='#" + $(this).attr("id") + "']");
        $(".sidebar a.active").removeClass("active");
        sidebarLink.addClass("active");
        var hasClass = sidebarLink.hasClass("submenu-link"),
            nextHasClass = sidebarLink.next().hasClass("submenu-links");

        if (hasClass || !hasClass && !nextHasClass) {
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

  function checkNavbar() {
    if (!$(".content").isOnScreen()) {
      $(".navbar").addClass("scrolling");
      $(".sidebar").addClass("scrolling");
    } else {
      $(".navbar").removeClass("scrolling");
      $(".sidebar").removeClass("scrolling");
    }
  }

  function checkScrollTop() {
    if ($(window).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  }

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

  function copy(textToCopy, $element) {
    //temp input
    var input = $('<input type="text" value=\'' + textToCopy + "' />");
    input.appendTo("body");
    input.get(0).select();
    input.get(0).setSelectionRange(0, 99999);
    /*For mobile devices*/

    document.execCommand("copy"); //remove temp input

    input.remove(); //hide tooltip

    setTimeout(function () {
      return $element.tooltip("hide");
    }, 1500);
  }

  function downloadGithubCssRaw() {
    var link = "https://raw.githubusercontent.com/shahednasser/sbuttons/master/dist/sbuttons.min.css";

    if (window.fetch) {
      fetch(link).then(function (resp) {
        return resp.blob();
      }).then(function (blob) {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "sbuttons.min.css";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }).catch(function (err) {
        return console.log(err);
      });
    } else {
      window.location.href = link;
    }
  }

  var copiedTooltipOptions = {
    title: "Copied",
    trigger: "click",
    placement: "bottom"
  };
  initTheme();
  checkActiveCategory();
  checkNavbar();
  checkScrollTop();
  $(window).on("scroll", function () {
    checkNavbar();
    checkActiveCategory();
    checkScrollTop();
  });
  $(".scroll-top").click(function () {
    var scrollSpeed = 100;
    /* Default */

    if ($(window).width() <= 640) scrollSpeed = 210;
    /* For small (mobile) Screens */

    $("html, body").animate({
      scrollTop: 0
    }, scrollSpeed);
  });
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
  $(".sidebar-toggler").on("click", function (e) {
    var sidebar = $(".sidebar");
    e.stopPropagation();
    sidebar.toggleClass("hide-sidebar");
    $("#shade").toggleClass("shown");
  }); //Closes sidebar if screen size is less than 768 pixels

  $(".sidebar a").on("click", function () {
    var w = document.body.clientWidth;

    if (w < 768) {
      var sidebar = $(".sidebar");
      $("#shade").toggleClass("shown");
      sidebar.addClass("animate__slideOutLeft");
      window.setTimeout(function () {
        sidebar.toggleClass("hide-sidebar");
        sidebar.removeClass("animate__slideOutLeft");
      }, 1000);
    }
  });
  $("body").click(function (event) {
    var sidebar = $(".sidebar");
    var targetElement = $(event.target);

    if ($(window).width() <= 767 && !targetElement.hasClass("sidebar") && !targetElement.parents(".sidebar").length && sidebar.hasClass("animate__slideInLeft") && !sidebar.hasClass("hide-sidebar")) {
      $("#shade").toggleClass("shown");
      sidebar.addClass("animate__slideOutLeft");
      window.setTimeout(function () {
        sidebar.toggleClass("hide-sidebar");
        sidebar.removeClass("animate__slideOutLeft");
      }, 1000);
    }
  });
  $(".close-sidebar").on("click", function () {
    var sidebar = $(".sidebar");
    $("#shade").toggleClass("shown");
    sidebar.addClass("animate__slideOutLeft");
    window.setTimeout(function () {
      sidebar.toggleClass("hide-sidebar");
      sidebar.removeClass("animate__slideOutLeft");
    }, 1000);
  });
  $(".toggle-theme").on("click", function () {
    toggleTheme();
  });
  $("#downloadGithubRawHeader, #downloadGithubRawHowTo").on("click", downloadGithubCssRaw);
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37319" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/index.js"], null)
//# sourceMappingURL=/js.5c615dc2.js.map