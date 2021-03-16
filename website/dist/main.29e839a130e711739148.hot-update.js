webpackHotUpdate("main",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var use_dark_mode_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-dark-mode-hook */ "./node_modules/use-dark-mode-hook/dist/index.js");
/* harmony import */ var use_dark_mode_hook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_dark_mode_hook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Me\\Web Development\\sbuttons\\website\\src\\components\\Header.js",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable jsx-a11y/anchor-is-valid */







function Header({
  activePage = null,
  showMenuButton = false
}) {
  _s();

  const [isDarkMode, toggleDarkMode] = use_dark_mode_hook__WEBPACK_IMPORTED_MODULE_3___default()();
  const [previousWidth, setPreviousWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);
  const menu = document.getElementById('sidebar');
  const menuToggleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const openClasses = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return ['animate__slideInLeft'];
  }, []),
        closeClasses = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return ['animate__slideOutLeft', '-left-1/2'];
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
    if (e.target.id !== 'sidebar' && !e.target.isSameNode(menuToggleRef.current) && !menuToggleRef.current.contains(e.target) && !menu.contains(e.target) && menu.classList.contains(openClasses)) {
      changeSidebarClassesCallback([closeClasses[0]], openClasses);
    }
  }

  const closeSidebarCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(closeSidebar, [changeSidebarClassesCallback, closeClasses, menu, openClasses]);
  const toggleSidebarCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(toggleSidebar, [changeSidebarClassesCallback, closeClasses, menu, openClasses]);
  const resizeListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (window.innerWidth < 768 && previousWidth >= 768 && !menu.classList.contains(openClasses)) {
      toggleSidebarCallback();
    } else {
      changeSidebarClassesCallback(openClasses, closeClasses);
      setPreviousWidth(window.innerWidth);
    }
  }, [previousWidth, menu, openClasses, toggleSidebarCallback, changeSidebarClassesCallback, closeClasses]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (showMenuButton) {
      window.addEventListener('resize', resizeListener);
      document.body.addEventListener('click', closeSidebarCallback);
      return () => {
        window.removeEventListener('resize', resizeListener);
        document.body.removeEventListener('click', closeSidebarCallback);
      };
    }
  }, [showMenuButton, resizeListener, closeSidebarCallback]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("nav", {
    className: "shadow-sm py-5 dark:bg-gray-600 bg-white dark:text-white transition-colors duration-100",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "container flex flex-row mx-auto",
      children: [showMenuButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "md:hidden flex w-1/12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
          className: "focus:outline-none hover:opacity-100 opacity-40 transition-none",
          onClick: toggleSidebar,
          ref: menuToggleRef,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiMenu"], {
            size: "1.5rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: `lg:w-2/12 ${showMenuButton ? 'md:w-4/12 w-3/12' : 'w-4/12'}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: "/images/logo-colored.png",
          alt: "Logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "md:flex hidden items-center lg:w-6/12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/documentation",
          className: "block border-b-2 border-transparent hover:border-red-600 mr-3 ml-4 text-xl text-gray-600 dark:text-white" + (activePage === 'documentation' ? ' border-red-600' : ''),
          children: "Docs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/examples",
          className: "block border-b-2 border-transparent hover:border-red-600 mx-3 text-xl text-gray-600 dark:text-white" + (activePage === 'examples' ? ' border-red-600' : ''),
          children: "Examples"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/projects-using-sbuttons",
          className: "block border-b-2 border-transparent hover:border-red-600 mx-3 lg:text-xl text-sm text-gray-600 dark:text-white" + (activePage === 'projects' ? ' border-red-600' : ''),
          children: "Projects Using sButtons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "justify-end flex items-center lg:w-4/12 md:w-2/12 w-4/12 md:mx-0 mr-0 ml-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "https://github.com/sButtons/sbuttons",
          className: "hover:opacity-100 opacity-40 px-3 transition-none",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiGithub"], {
            size: "1.5rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(use_dark_mode_hook__WEBPACK_IMPORTED_MODULE_3__["DarkModeToggler"], {
          isDarkMode: isDarkMode,
          toggleDarkMode: toggleDarkMode,
          buttonClassName: "focus:outline-none hover:opacity-100 opacity-40 px-3 transition-none"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
          className: "block group md:hidden px-3 relative focus:outline-none align-text-bottom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiMoreVertical"], {
            size: "1.5rem",
            className: "hover:opacity-100 opacity-40 transition-none"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "absolute bg-gray-100 dark:bg-gray-700 group-hover:block group-focus:block hidden right-1.5 shadow-md top-9",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              className: "block dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-100 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 text-gray-500 text-lg text-left",
              to: "/documentation",
              children: "Get Started"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              className: "block dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-100 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 text-gray-500 text-lg text-left",
              to: "/examples",
              children: "Examples"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              className: "block dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-100 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 text-gray-500 text-md text-left",
              to: "/projects-using-sbuttons",
              children: "Projects Using sButtons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

_s(Header, "OMhuF4dKGTIIciOrwlvkqqG8ZoQ=", false, function () {
  return [use_dark_mode_hook__WEBPACK_IMPORTED_MODULE_3___default.a];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

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
//# sourceMappingURL=main.29e839a130e711739148.hot-update.js.map