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
})({"assets/js/buttons-examples.js":[function(require,module,exports) {
$(document).ready(function () {
  //default button class
  var defaultClass = "sbtn"; //button color variations

  var buttonColors = ["blue-btn", "pink-btn", "red-btn", "green-btn", "yellow-btn", "orange-btn", "purple-btn", "black-btn"]; //list of button types

  var buttons = [{
    type: "basic",
    label: "Basic Buttons",
    classes: "basic-btn",
    children: []
  }, {
    type: "animated",
    label: "Animated Buttons",
    classes: "",
    children: [{
      type: "click",
      label: "Click",
      classes: "click-btn"
    }, {
      type: "fill-color-down",
      label: "Fill Color - Down",
      classes: "fill-color-btn down-fill"
    }, {
      type: "fill-color-left",
      label: "Fill Color - Left",
      classes: "fill-color-btn"
    }, {
      type: "fill-color-right",
      label: "Fill Color - Right",
      classes: "fill-color-btn right-fill"
    }, {
      type: "fill-color-up",
      label: "Fill Color - Up",
      classes: "fill-color-btn up-fill"
    }, {
      type: "hinge",
      label: "Hinge",
      classes: "hinge-btn"
    }, {
      type: "invert",
      label: "Invert",
      classes: "invert-btn"
    }, {
      type: "next",
      label: "Next Button",
      classes: "next-arrow-btn"
    }, {
      type: "nudge",
      label: "Nudge",
      classes: "nudge-btn"
    }, {
      type: "previous",
      label: "Previous Button",
      classes: "previous-arrow-btn"
    }, {
      type: "pulse",
      label: "Pulse",
      classes: "pulse-btn"
    }, {
      type: "scale",
      label: "Scale",
      classes: "scale-btn"
    }, {
      type: "shake",
      label: "Shake",
      classes: "shake-btn"
    }, {
      type: "shine",
      label: "Shine",
      classes: "shine-btn"
    }, {
      type: "skew",
      label: "Skew",
      classes: "skew-btn"
    }]
  }, {
    type: "hover",
    label: "Hover Buttons",
    classes: "hover-btn",
    children: []
  }, {
    type: "icon",
    label: "Icon Buttons",
    classes: "",
    children: [{
      type: "buy-me-coffee",
      label: "Buy Me Coffee Button",
      classes: "buy-me-coffee-btn",
      text: "Buy me coffee"
    }, {
      type: "download",
      label: "Download Button",
      classes: "download-btn",
      text: "Download"
    }, {
      type: "like",
      label: "Like Button",
      classes: "like-btn",
      text: ""
    }]
  }, {
    type: "outline",
    label: "Outline Buttons",
    classes: "outline-btn",
    children: []
  }, {
    type: "social",
    label: "Social Buttons",
    classes: "social-btn",
    variations: [{
      classes: "facebook",
      text: "Login with Facebook"
    }, {
      classes: "google",
      text: "Login with Google"
    }, {
      classes: "instagram",
      text: "Login with Instagram"
    }, {
      classes: "linkedin",
      text: "Login with LinkedIn"
    }, {
      classes: "twitter",
      text: "Login with Twitter"
    }, {
      classes: "weibo",
      text: "Login with Weibo"
    }],
    children: []
  }];
  var sidebar = $(".sidebar-list"),
      content = $("#content");

  function getButtonHtml(classes, textClasses, buttonText) {
    if (buttonText === false) {
      buttonText = "Button";
    }

    return "\n            <div class=\"button-container\">\n                <button class=\"".concat(classes, "\" role=\"Button\">").concat(buttonText, "</button><br>\n                <small class=\"button-caption-sub\">").concat(textClasses, "</small><br>\n            </div>\n        ");
  }

  function getMenuLinkHtml(type, label, isSubMenu) {
    return '<a href="#' + type + '" ' + (isSubMenu ? 'class="submenu-link" ' : "") + ">" + label + "</a>";
  }

  function createSection(button, shouldAddToSidebar) {
    var heading = "h1";

    if (shouldAddToSidebar) {
      // add link to sidebar
      sidebar.append(getMenuLinkHtml(button.type, button.label, false));
    } else {
      heading = "h3";
    }

    var section = $('<section id="' + button.type + '">');
    section.append("<" + heading + ' class="section-header">' + button.label + "</" + heading + ">");

    if (button.hasOwnProperty("variations")) {
      var buttonGrid = $('<div class="button-grid">');

      for (var j = 0; j < button.variations.length; j++) {
        buttonGrid.append(getButtonHtml("".concat(defaultClass, " ").concat(button.classes, " ").concat(button.variations[j].classes), ".".concat(defaultClass, " .").concat(button.classes, " .").concat(button.variations[j].classes), button.variations[j].hasOwnProperty("text") ? button.variations[j].text : false));
      }

      section.append(buttonGrid);
    } else {
      if (button.hasOwnProperty("children") && button.children.length) {
        //add children buttons
        var submenu = $('<div class="submenu-links">');

        for (var j = 0; j < button.children.length; j++) {
          var childSection = createSection(button.children[j], false);
          childSection.appendTo(section);

          if (j !== 0) {
            childSection.before('<hr class="secondary-hr">');
          }

          submenu.append(getMenuLinkHtml(button.children[j].type, button.children[j].label, true));
        }

        sidebar.append(submenu);
      } else {
        //add type buttons
        var normalButtonsGrid = $('<div class="button-grid">'),
            roundedButtonsGrid = $('<div class="button-grid">'),
            buttonText = button.hasOwnProperty("text") ? button.text : false;

        for (var j = 0; j < buttonColors.length; j++) {
          normalButtonsGrid.append(getButtonHtml("".concat(defaultClass, " ").concat(button.classes, " ").concat(buttonColors[j]), ".".concat(defaultClass, " .").concat(button.classes, " .").concat(buttonColors[j]), buttonText));
          roundedButtonsGrid.append(getButtonHtml("".concat(defaultClass, " ").concat(button.classes, " btn-rounded ").concat(buttonColors[j]), ".".concat(defaultClass, " .").concat(button.classes, " .btn-rounded .").concat(buttonColors[j]), buttonText));
        }

        section.append(normalButtonsGrid);
        section.append(roundedButtonsGrid);
      }
    }

    return section;
  }

  for (var i = 0; i < buttons.length; i++) {
    var section = createSection(buttons[i], true);
    section.appendTo(content).before('<hr class="secondary-hr">');
  }
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/buttons-examples.js"], null)
//# sourceMappingURL=/buttons-examples.f79506a2.js.map