webpackHotUpdate("main",{

/***/ "../../use-dark-mode-hook/src/useDarkMode.js":
/*!*******************************************************************!*\
  !*** C:/Me/Web Development/use-dark-mode-hook/src/useDarkMode.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../use-dark-mode-hook/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



function useDarkMode({
  initialValue = false,
  darkModeClass = 'dark',
  lightModeClass = 'light',
  element = 'body'
} = {}) {
  const [isDarkMode, setDarkMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const elm = document.querySelector(element);

  const toggleDarkMode = function (on = true) {
    setDarkMode(on);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let theme = localStorage.getItem('theme');

    if (!theme) {
      theme = lightModeClass; //default value
    }

    toggleDarkMode(theme === darkModeClass);
  }, [lightModeClass, darkModeClass]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const theme = isDarkMode ? darkModeClass : lightModeClass;

    if (!elm.classList.contains(theme)) {
      elm.classList.add(theme);
      const oppositeTheme = isDarkMode ? lightModeClass : darkModeClass;

      if (elm.classList.contains(oppositeTheme)) {
        elm.classList.remove(oppositeTheme);
      }
    }

    localStorage.setItem('theme', theme);
  }, [isDarkMode, elm, darkModeClass, lightModeClass]);

  if (!elm) {
    console.error(`useDarkMode ERROR: ${element} is not defined in the document`);
    return;
  }

  return [isDarkMode, toggleDarkMode];
}

/* harmony default export */ __webpack_exports__["default"] = (useDarkMode);

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
//# sourceMappingURL=main.d76641e628c3c95cb173.hot-update.js.map