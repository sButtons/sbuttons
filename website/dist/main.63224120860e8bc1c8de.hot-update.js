webpackHotUpdate("main",{

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
            classes: buttonType.classes,
            variations: buttonType.variations ? buttonType.variations : []
          },
          type: {
            name: buttonType.label,
            shouldHaveRoundedType: buttonType.shouldHaveRoundedType !== undefined ? buttonType.shouldHaveRoundedType : true,
            shouldHaveBlockType: buttonType.shouldHaveBlockType !== undefined ? buttonType.shouldHaveBlockType : true,
            usesColors: buttonType.usesColors
          }
        };
        return true;
      } else {
        return buttonType.children.some(buttonChild => {
          if (buttonChild.type === type) {
            button = {
              button: {
                label: buttonChild.label,
                classes: buttonType.classes + " " + buttonChild.classes,
                variations: buttonChild.variations ? buttonChild.variations : []
              },
              type: {
                name: buttonType.label,
                shouldHaveRoundedType: buttonChild.shouldHaveRoundedType !== undefined ? buttonChild.shouldHaveRoundedType : true,
                shouldHaveBlockType: buttonChild.shouldHaveBlockType !== undefined ? buttonChild.shouldHaveBlockType : true,
                usesColors: buttonChild.usesColors
              }
            };
            return true;
          }

          return false;
        });
      }
    });
  }

  console.log("button", button);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "examples",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Common__WEBPACK_IMPORTED_MODULE_1__["default"], {
      activePage: "examples",
      pageTitle: "Examples",
      showMenuButton: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
        integrity: "sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "flex mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: _data_buttons_json__WEBPACK_IMPORTED_MODULE_4__.map((buttonType, index) => {
          if (!buttonType.children.length) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_SidebarLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
              to: `#${buttonType.type}`,
              text: buttonType.label,
              clickCallback: setCurrentButton,
              current: currentButton
            }, `${buttonType.type}_${index}`, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 36
            }, this);
          } else {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_SidebarLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                to: `#${buttonType.type}`,
                text: buttonType.label
              }, `${buttonType.type}_${index}`, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 37
              }, this), buttonType.children.map((button, buttonIndex) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_SidebarLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                to: `#${button.type}`,
                text: button.label,
                level: 1,
                clickCallback: setCurrentButton,
                current: currentButton
              }, `${index}_${buttonIndex}`, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 41
              }, this))]
            }, `${buttonType.type}_${index}`, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 33
            }, this);
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "container content lg:pr-20 md:w-8/12 pl-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          className: "text-4xl mb-7",
          children: button && button.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this), button && button.variations && button.variations.length && button.variations.map(variation => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_ButtonExample__WEBPACK_IMPORTED_MODULE_5__["default"], {
          button: {
            label: variation.label,
            classes: `${button.classes} ${variation.classes}`
          },
          type: button.type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }, this)), button && (!button.variations || !button.variations.length) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_ButtonExample__WEBPACK_IMPORTED_MODULE_5__["default"], {
          button: button.button,
          type: button.type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=main.63224120860e8bc1c8de.hot-update.js.map