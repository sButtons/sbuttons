webpackHotUpdate("main",{

/***/ "./src/components/ButtonExample.js":
/*!*****************************************!*\
  !*** ./src/components/ButtonExample.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonSection */ "./src/components/ButtonSection.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Me\\Web Development\\sbuttons\\website\\src\\components\\ButtonExample.js";




function ButtonExample({
  button: {
    label,
    classes
  },
  type: {
    name,
    shouldHaveRoundedType,
    shouldHaveBlockType
  }
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "button-example-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
      children: ["Type: ", name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ButtonSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Basic",
      classes: classes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), shouldHaveRoundedType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ButtonSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Rounded",
      classes: `${classes} rounded-btn`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, this), shouldHaveBlockType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ButtonSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Block",
      classes: `${classes} block-btn`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

_c = ButtonExample;
/* harmony default export */ __webpack_exports__["default"] = (ButtonExample);

var _c;

__webpack_require__.$Refresh$.register(_c, "ButtonExample");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ButtonSection.js":
/*!*****************************************!*\
  !*** ./src/components/ButtonSection.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _data_button_colors_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/button-colors.json */ "./src/data/button-colors.json");
var _data_button_colors_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/button-colors.json */ "./src/data/button-colors.json", 1);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Me\\Web Development\\sbuttons\\website\\src\\components\\ButtonSection.js";







function ButtonSection({
  title,
  classes
}) {
  function getCopyClasses(classes) {
    return "." + classes.replaceAll(new RegExp("/\\s/"), ".");
  }

  function showToast() {
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success('Copied!', {
      className: 'dark:bg-gray-800',
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "flex flex-row flex-wrap",
      children: _data_button_colors_json__WEBPACK_IMPORTED_MODULE_4__.map((color, index) => {
        const buttonClasses = `${classes} ${color}`,
              copyClasses = getCopyClasses(buttonClasses);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "pr-5 pb-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
            className: `${classes} ${color}`,
            children: "Button"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default.a, {
            text: copyClasses,
            onCopy: showToast,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              className: "text-sm text-gray-500",
              children: [copyClasses, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiCopy"], {
                className: "pl-3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

_c = ButtonSection;
/* harmony default export */ __webpack_exports__["default"] = (ButtonSection);

var _c;

__webpack_require__.$Refresh$.register(_c, "ButtonSection");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/data/button-colors.json":
/*!*************************************!*\
  !*** ./src/data/button-colors.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"blue-btn\",\"pink-btn\",\"red-btn\",\"green-btn\",\"yellow-btn\",\"orange-btn\",\"purple-btn\",\"black-btn\",\"white-btn\"]");

/***/ }),

/***/ "./src/data/buttons.json":
/*!*******************************!*\
  !*** ./src/data/buttons.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"basic\",\"label\":\"Basic Buttons\",\"classes\":\"basic-btn\",\"children\":[],\"shouldHaveRoundedType\":true},{\"type\":\"styles\",\"label\":\"Button Styles\",\"classes\":\"\",\"children\":[{\"type\":\"click\",\"label\":\"Click\",\"classes\":\"click-btn\"},{\"type\":\"dashed\",\"label\":\"Dashed\",\"classes\":\"dashed-btn\"},{\"type\":\"disable\",\"label\":\"Disabled\",\"classes\":\"disabled-btn\"},{\"type\":\"gradient\",\"label\":\"Gradient\",\"classes\":\"gradient-btn\"},{\"type\":\"xsmall\",\"label\":\"Extra-small\",\"classes\":\"xsmall-btn\",\"text\":\"Extra-small\"},{\"type\":\"xlarge\",\"label\":\"Extra-large\",\"classes\":\"xlarge-btn\",\"text\":\"Extra-large\"},{\"type\":\"glossy\",\"label\":\"Glossy\",\"classes\":\"glossy-btn\",\"text\":\"Glossy\",\"shouldHaveRoundedType\":false},{\"type\":\"glow\",\"label\":\"Glow\",\"classes\":\"glow-btn\"},{\"type\":\"key\",\"label\":\"Key\",\"classes\":\"key-btn\",\"text\":\"START\"},{\"type\":\"neon-border\",\"label\":\"Neon Border\",\"text\":\"button\",\"classes\":\"neon-border-btn\",\"shouldHaveRoundedType\":true},{\"type\":\"outline\",\"label\":\"Outline\",\"classes\":\"outline-btn\"},{\"type\":\"rounded-bottom\",\"label\":\"Rounded Bottom\",\"classes\":\"rounded-bottom-btn\",\"text\":\"Rounded Bottom\",\"shouldHaveRoundedType\":false},{\"type\":\"rounded-diagonal-tl\",\"label\":\"Rounded Diagonal (Top Left)\",\"classes\":\"rounded-diagonal-tl-btn\",\"text\":\"TopLeft-BottomRight\",\"shouldHaveRoundedType\":false},{\"type\":\"rounded-diagonal-tr\",\"label\":\"Rounded Diagonal (Top Right)\",\"classes\":\"rounded-diagonal-tr-btn\",\"text\":\"TopRight-BottomLeft\",\"shouldHaveRoundedType\":false},{\"type\":\"rounded-top\",\"label\":\"Rounded Top\",\"classes\":\"rounded-top-btn\",\"text\":\"Rounded Top\",\"shouldHaveRoundedType\":false},{\"type\":\"stack\",\"label\":\"Stack\",\"classes\":\"stack-btn\",\"text\":\"Button\"},{\"type\":\"striped\",\"label\":\"Striped\",\"classes\":\"striped-btn\"}]},{\"type\":\"animated\",\"label\":\"Animated Buttons\",\"classes\":\"\",\"children\":[{\"type\":\"atom\",\"label\":\"Atom\",\"classes\":\"atom-btn\",\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false},{\"type\":\"aura-pulse\",\"label\":\"Aura Pulse\",\"classes\":\"aurapulse-btn\"},{\"type\":\"bounce\",\"label\":\"Bounce\",\"classes\":\"bouncy-btn\"},{\"type\":\"colored-on-hover\",\"label\":\"Colored On Hover\",\"classes\":\"colored-on-hover-btn\"},{\"type\":\"diagonalHover\",\"label\":\"Diagonal Background on Hover\",\"classes\":\"diag-btn\"},{\"type\":\"expanding\",\"label\":\"Expanding Border\",\"classes\":\"expanding-btn\"},{\"type\":\"fill-color-down\",\"label\":\"Fill Color - Down\",\"classes\":\"fill-color-btn down-fill\"},{\"type\":\"fill-color-left\",\"label\":\"Fill Color - Left\",\"classes\":\"fill-color-btn\"},{\"type\":\"fill-color-right\",\"label\":\"Fill Color - Right\",\"classes\":\"fill-color-btn right-fill\"},{\"type\":\"fill-color-up\",\"label\":\"Fill Color - Up\",\"classes\":\"fill-color-btn up-fill\"},{\"type\":\"fill-color-sideways\",\"label\":\"Fill Color - Sideways\",\"classes\":\"fill-color-btn sideways-fill\"},{\"type\":\"flash\",\"label\":\"Flash\",\"classes\":\"flash-btn\"},{\"type\":\"gradient-border\",\"label\":\"Gradient Border\",\"classes\":\"gradient-border\",\"text\":\"Button\",\"shouldHaveRoundedType\":false,\"variations\":[{\"classes\":\"\",\"text\":\"Gradient Border\"}]},{\"type\":\"hinge\",\"label\":\"Hinge\",\"classes\":\"hinge-btn\"},{\"type\":\"invert\",\"label\":\"Invert\",\"classes\":\"invert-btn\"},{\"type\":\"liquid\",\"label\":\"Liquid\",\"classes\":\"liquid-btn\"},{\"type\":\"loading\",\"label\":\"Loading\",\"classes\":\"loading-btn\",\"variations\":[{\"text\":\"loading left\",\"classes\":\"spin left purple-btn\"},{\"text\":\"loading left\",\"classes\":\"bounce left green-btn\"},{\"text\":\"loading right\",\"classes\":\"spin  right red-btn\"},{\"text\":\"loading right\",\"classes\":\"bounce right pink-btn\"},{\"text\":\"loading left\",\"classes\":\"heart-beat left blue-btn\"},{\"text\":\"loading left\",\"classes\":\"slide left yellow-btn\"},{\"text\":\"loading right\",\"classes\":\"heart-beat right black-btn\"},{\"text\":\"loading right\",\"classes\":\"slide right orange-btn\"}],\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false},{\"type\":\"neon\",\"label\":\"Neon\",\"classes\":\"neon-btn\"},{\"type\":\"next\",\"label\":\"Next\",\"classes\":\"next-arrow-btn\"},{\"type\":\"nudge\",\"label\":\"Nudge\",\"classes\":\"nudge-btn\"},{\"type\":\"papercurl\",\"label\":\"Paper Curl\",\"classes\":\"papercurl-btn\"},{\"type\":\"previous\",\"label\":\"Previous\",\"classes\":\"previous-arrow-btn\"},{\"type\":\"pudding\",\"label\":\"Pudding\",\"classes\":\"pudding-btn\"},{\"type\":\"pulse\",\"label\":\"Pulse\",\"classes\":\"pulse-btn\"},{\"type\":\"rainbow\",\"label\":\"Rainbow\",\"classes\":\"rainbow-btn\"},{\"type\":\"ripple\",\"label\":\"Ripple\",\"classes\":\"ripple-btn\"},{\"type\":\"scale\",\"label\":\"Scale\",\"classes\":\"scale-btn\"},{\"type\":\"shake\",\"label\":\"Shake\",\"classes\":\"shake-btn\"},{\"type\":\"shine\",\"label\":\"Shine\",\"classes\":\"shine-btn\"},{\"type\":\"skew\",\"label\":\"Skew\",\"classes\":\"skew-btn\"},{\"type\":\"snake\",\"label\":\"Snake Border\",\"classes\":\"snake-btn\"},{\"type\":\"splash\",\"label\":\"Splash\",\"classes\":\"splash-btn\"},{\"type\":\"Spotlight\",\"label\":\"Spotlight\",\"classes\":\"spotlight-btn\"},{\"type\":\"spring\",\"label\":\"Spring\",\"classes\":\"spring-btn\"},{\"type\":\"striped-animated\",\"label\":\"Striped\",\"classes\":\"striped-animated-btn\"},{\"type\":\"transparent\",\"label\":\"Transparent On Hover\",\"classes\":\"transparent-btn\"},{\"type\":\"vibrate\",\"label\":\"Vibrate\",\"classes\":\"vibrate-btn\"}]},{\"type\":\"hover\",\"label\":\"Hover Buttons\",\"classes\":\"hover-btn\",\"children\":[]},{\"type\":\"icon\",\"label\":\"Icon Buttons\",\"classes\":\"\",\"children\":[{\"type\":\"base-icon\",\"label\":\"Base Icon\",\"classes\":\"icon-btn\",\"variations\":[{\"classes\":\"icon-right purple-btn\",\"text\":\"base icon button <i class='fas fa-book'></i>\"},{\"text\":\"<i class='fab fa-apple'></i>\"},{\"classes\":\"icon-left green-btn\",\"text\":\"<i class='fas fa-pen'></i> base icon button\"}],\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false},{\"type\":\"star\",\"label\":\"Star\",\"classes\":\"star-btn\",\"text\":\"\",\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false,\"variations\":[{\"classes\":\"\",\"text\":\"Star (Inactive)\"},{\"classes\":\"active\",\"text\":\"Star (Active)\"}]},{\"type\":\"grow\",\"label\":\"Grow\",\"classes\":\"grow-btn\",\"text\":\"\",\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false},{\"type\":\"hatch\",\"label\":\"Hatch\",\"classes\":\"hatch-btn\",\"text\":\"\",\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false},{\"type\":\"like\",\"label\":\"Like\",\"classes\":\"like-btn\",\"text\":\"\",\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false,\"variations\":[{\"classes\":\"\"}]}]},{\"type\":\"social\",\"label\":\"Social Buttons\",\"classes\":\"social-btn\",\"variations\":[{\"classes\":\"apple\",\"text\":\"Login with Apple\"},{\"classes\":\"bitbucket\",\"text\":\"Login with Bitbucket\"},{\"classes\":\"discord\",\"text\":\"Login with Discord\"},{\"classes\":\"facebook\",\"text\":\"Login with Facebook\"},{\"classes\":\"flickr\",\"text\":\"Login with Flickr\"},{\"classes\":\"github\",\"text\":\"Login with Github\"},{\"classes\":\"gitlab\",\"text\":\"Login with GitLab\"},{\"classes\":\"google\",\"text\":\"Login with Google\"},{\"classes\":\"instagram\",\"text\":\"Login with Instagram\"},{\"classes\":\"linkedin\",\"text\":\"Login with LinkedIn\"},{\"classes\":\"microsoft\",\"text\":\"Login with Microsoft\"},{\"classes\":\"reddit\",\"text\":\"Login with Reddit\"},{\"classes\":\"snapchat\",\"text\":\"Login with Snapchat\"},{\"classes\":\"steam\",\"text\":\"Login with Steam\"},{\"classes\":\"twitter\",\"text\":\"Login with Twitter\"},{\"classes\":\"tumblr\",\"text\":\"Login with Tumblr\"},{\"classes\":\"weibo\",\"text\":\"Login with Weibo\"},{\"classes\":\"whatsapp\",\"text\":\"Login with Whatsapp\"}],\"children\":[]},{\"type\":\"special\",\"label\":\"Special Buttons\",\"classes\":\"\",\"children\":[{\"type\":\"code-btn\",\"label\":\"Code\",\"classes\":\"code-btn\",\"variations\":[{\"text\":\"Code\"}]},{\"type\":\"handwritten-btn\",\"label\":\"Handwritten\",\"classes\":\"handwritten-btn\",\"variations\":[{\"text\":\"Handwritten\"}]},{\"type\":\"neu-btn\",\"label\":\"Neumorphic\",\"classes\":\"neu-btn\"},{\"type\":\"play-game\",\"label\":\"Play game\",\"classes\":\"play-game-btn\",\"text\":\"\"},{\"type\":\"rainbow-border\",\"label\":\"Rainbow Border\",\"classes\":\"rainbow-border-btn\",\"shouldHaveRoundedType\":false,\"variations\":[{\"text\":\"Rainbow\"}]},{\"type\":\"retro\",\"label\":\"Retro\",\"classes\":\"retro-btn\",\"variations\":[{\"classes\":\"\",\"text\":\"Continue\"},{\"classes\":\"retro-btn-proceed\",\"text\":\"Proceed\"},{\"classes\":\"retro-btn-reset\",\"text\":\"Reset\"}]},{\"type\":\"toggle\",\"label\":\"Toggle (on and off)\",\"classes\":\"toggle-btn\",\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false,\"variations\":[{\"classes\":\"toggle-on-btn\",\"text\":\"\"},{\"classes\":\"toggle-off-btn\",\"text\":\"\"}]},{\"type\":\"win95-btn\",\"label\":\"Windows 95\",\"classes\":\"win95-btn\",\"variations\":[{\"classes\":\"\",\"text\":\"Yes\"},{\"classes\":\"\",\"text\":\"No\"}]},{\"type\":\"disco-btn\",\"label\":\"Disco\",\"classes\":\"disco-btn\",\"shouldHaveRoundedType\":false,\"shouldHaveBlockType\":false,\"variations\":[{\"text\":\"Disco\"}]}]}]");

/***/ }),

/***/ "./src/pages/Examples/index.js":
/*!*************************************!*\
  !*** ./src/pages/Examples/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common */ "./src/pages/Common.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var _components_SidebarLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SidebarLink */ "./src/components/SidebarLink.js");
/* harmony import */ var _data_buttons_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/buttons.json */ "./src/data/buttons.json");
var _data_buttons_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/buttons.json */ "./src/data/buttons.json", 1);
/* harmony import */ var _components_ButtonExample__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ButtonExample */ "./src/components/ButtonExample.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Me\\Web Development\\sbuttons\\website\\src\\pages\\Examples\\index.js",
    _s = __webpack_require__.$Refresh$.signature();









function Examples() {
  _s();

  const [currentButton, setCurrentButton] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //todo set currentbutton intial value
    if (window.location.hash) {
      setCurrentButton(window.location.hash);
    } else {
      if (_data_buttons_json__WEBPACK_IMPORTED_MODULE_4__.length) {
        //set the first button as current button
        if (_data_buttons_json__WEBPACK_IMPORTED_MODULE_4__[0].children.length) {
          setCurrentButton('#' + _data_buttons_json__WEBPACK_IMPORTED_MODULE_4__[0].children[0].type);
        } else {
          setCurrentButton('#' + _data_buttons_json__WEBPACK_IMPORTED_MODULE_4__[0].type);
        }
      }
    }
  }, []);
  let button = null;

  if (currentButton) {
    const type = currentButton.replace("#", "");
    _data_buttons_json__WEBPACK_IMPORTED_MODULE_4__.some(buttonType => {
      if (buttonType.type === type) {
        button = {
          button: {
            label: buttonType.label,
            classes: buttonType.classes
          },
          type: {
            name: buttonType.name,
            shouldHaveRoundedType: buttonType.shouldHaveRoundedType,
            shouldHaveBlockType: buttonType.shouldHaveBlockType
          }
        };
        return true;
      } else {
        buttonType.children.some(buttonChild => {
          if (buttonChild.type === type) {
            button = {
              button: {
                label: buttonChild.label,
                classes: buttonChild.classes
              },
              type: {
                name: buttonType.name,
                shouldHaveRoundedType: buttonType.shouldHaveRoundedType,
                shouldHaveBlockType: buttonType.shouldHaveBlockType
              }
            };
            return true;
          }
        });
      }

      return false;
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "examples",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Common__WEBPACK_IMPORTED_MODULE_1__["default"], {
      activePage: "examples",
      pageTitle: "Documentation",
      showMenuButton: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
        integrity: "sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "flex mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: _data_buttons_json__WEBPACK_IMPORTED_MODULE_4__.map((buttonType, index) => {
          if (!buttonType.children.length) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_SidebarLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
              to: `#${buttonType.type}`,
              text: buttonType.label,
              clickCallback: setCurrentButton
            }, `${buttonType.type}_${index}`, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 36
            }, this);
          } else {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_SidebarLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                to: `#${buttonType.type}`,
                text: buttonType.label
              }, `${buttonType.type}_${index}`, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 37
              }, this), buttonType.children.map((button, buttonIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_SidebarLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                to: `#${button.type}`,
                text: button.label,
                level: 1,
                clickCallback: setCurrentButton
              }, `${index}_${buttonIndex}`, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 41
              }, this))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 33
            }, this);
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "container content lg:pr-20 md:w-8/12 pl-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          className: "text-4xl mb-7",
          children: "Examples"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this), button && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_ButtonExample__WEBPACK_IMPORTED_MODULE_5__["default"], {
          button: button.button,
          type: button.type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 32
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, this);
}

_s(Examples, "RxY4kASi1MZU0AYSoBkJ50a9GOM=");

_c = Examples;
/* harmony default export */ __webpack_exports__["default"] = (Examples);

var _c;

__webpack_require__.$Refresh$.register(_c, "Examples");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.2360179dc3a5087be47d.hot-update.js.map