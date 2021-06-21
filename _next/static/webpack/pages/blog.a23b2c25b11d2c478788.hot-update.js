webpackHotUpdate_N_E("pages/blog",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BlogCard */ "./components/BlogCard.js");
/* harmony import */ var _components_BlogHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogHeader */ "./components/BlogHeader.js");
/* harmony import */ var _components_BlogAside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BlogAside */ "./components/BlogAside.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\pages\\blog\\index.js",
    _this = undefined;






var BlogList = function BlogList(_ref) {
  var entries = _ref.entries;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BlogHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      style: {
        padding: "0 13rem",
        background: "#f8f8f8"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 5,
        children: [entries.map(function (entry) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
            item: true,
            xs: "12",
            sm: "4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BlogCard__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BlogAside__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = BlogList;
/* harmony default export */ __webpack_exports__["default"] = (BlogList);

var _c;

$RefreshReg$(_c, "BlogList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCbG9nTGlzdCIsImVudHJpZXMiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1hcCIsImVudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2hDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBUyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLFNBQVg7QUFBc0JDLGtCQUFVLEVBQUU7QUFBbEMsT0FBaEI7QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENBQXpCO0FBQUEsbUJBQ0dGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLEtBQUQsRUFBVztBQUN0Qiw4QkFDRSxxRUFBQyxzREFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUMsSUFBZDtBQUFtQixjQUFFLEVBQUMsR0FBdEI7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUtELFNBTkEsQ0FESCxlQVFFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFpQkQsQ0FsQkQ7O0tBQU1MLFE7QUFvQlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuYTIzYjJjMjViMTFkMmM0Nzg3ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nQ2FyZFwiO1xyXG5pbXBvcnQgQmxvZ0hlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nSGVhZGVyXCI7XHJcbmltcG9ydCBCbG9nQXNpZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ0FzaWRlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZEFjdGlvbkFyZWEsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkTWVkaWEsXHJcbiAgQnV0dG9uLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgR3JpZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IEJsb2dMaXN0ID0gKHsgZW50cmllcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCbG9nSGVhZGVyIC8+XHJcbiAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBhZGRpbmc6IFwiMCAxM3JlbVwiLCBiYWNrZ3JvdW5kOiBcIiNmOGY4ZjhcIiB9fT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XHJcbiAgICAgICAgICB7ZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz1cIjEyXCIgc209XCI0XCI+XHJcbiAgICAgICAgICAgICAgICA8QmxvZ0NhcmQgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIDxCbG9nQXNpZGUgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==