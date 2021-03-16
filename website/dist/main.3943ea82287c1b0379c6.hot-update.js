webpackHotUpdate("main",{

/***/ "./src/components/MenuToggler.js":
/*!***************************************!*\
  !*** ./src/components/MenuToggler.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Me\\Web Development\\sbuttons\\website\\src\\components\\MenuToggler.js",
    _s = __webpack_require__.$Refresh$.signature();






function MenuToggler() {
  _s();

  const menu = document.getElementById('sidebar');
  const menuToggleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const openClasses = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return ['animate__slideInLeft'];
  }, []),
        closeClasses = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return ['animate__slideOutLeft', '-left-full'];
  }, []);

  function changeSidebarClasses(add, remove) {
    menu.classList.remove(...remove);
    menu.classList.add(...add);
  }

  const changeSidebarClassesCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(changeSidebarClasses, [menu]);

  function toggleSidebar() {
    if (menu) {
      let add = openClasses,
          remove = closeClasses;

      if (menu.classList.contains(openClasses)) {
        add = closeClasses;
        remove = openClasses;
      }

      changeSidebarClassesCallback(add, remove);
    }
  }

  function closeSidebar(e) {
    if (e.target && menuToggleRef && e.target.id !== 'sidebar' && !e.target.isSameNode(menuToggleRef.current) && !menuToggleRef.current.contains(e.target) && !menu.contains(e.target) && menu.classList.contains(openClasses)) {
      changeSidebarClassesCallback([closeClasses[0]], openClasses);
    }
  }

  const closeSidebarCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(closeSidebar, [changeSidebarClassesCallback, closeClasses, menu, openClasses]);
  const resizeListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (window.innerWidth >= 768) {
      changeSidebarClassesCallback([closeClasses[1]], closeClasses);
    }
  }, [changeSidebarClassesCallback, closeClasses]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', resizeListener);
    document.body.addEventListener('click', closeSidebarCallback);
    return () => {
      window.removeEventListener('resize', resizeListener);
      document.body.removeEventListener('click', closeSidebarCallback);
    };
  }, [resizeListener, closeSidebarCallback]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "md:hidden flex sm:w-1/12 w-2/12 sm:pl-0 pl-3",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      className: "focus:outline-none hover:opacity-100 opacity-40 transition-none",
      onClick: toggleSidebar,
      ref: menuToggleRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiMenu"], {
        size: "1.5rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

_s(MenuToggler, "DYhRjulTCpTL7C+LPlX3SYdkUB0=");

_c = MenuToggler;
/* harmony default export */ __webpack_exports__["default"] = (MenuToggler);

var _c;

__webpack_require__.$Refresh$.register(_c, "MenuToggler");

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
//# sourceMappingURL=main.3943ea82287c1b0379c6.hot-update.js.map