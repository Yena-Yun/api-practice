"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgItem.js",
    _this = undefined;





var MsgItem = function MsgItem(_ref) {
  var id = _ref.id,
      userId = _ref.userId,
      timestamp = _ref.timestamp,
      text = _ref.text,
      onUpdate = _ref.onUpdate,
      isEditing = _ref.isEditing,
      startEdit = _ref.startEdit;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
    className: "messages__item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
      children: [userId, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("sub", {
        children: new Date(timestamp).toLocaleString('ko-KR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
          /* 오전 오후로 구분 */

        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, _this), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_0__.default, {
        mutate: onUpdate,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "messages__buttons",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }, _this);
};

_c = MsgItem;
/* harmony default export */ __webpack_exports__["default"] = (MsgItem);

var _c;

$RefreshReg$(_c, "MsgItem");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzdiYzg2MjE3M2UzMTZjYjI0YjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFPQyxNQUFQLFFBQU9BLE1BQVA7QUFBQSxNQUFlQyxTQUFmLFFBQWVBLFNBQWY7QUFBQSxNQUEwQkMsSUFBMUIsUUFBMEJBLElBQTFCO0FBQUEsTUFBZ0NDLFFBQWhDLFFBQWdDQSxRQUFoQztBQUFBLE1BQTBDQyxTQUExQyxRQUEwQ0EsU0FBMUM7QUFBQSxNQUFxREMsU0FBckQsUUFBcURBLFNBQXJEO0FBQUEsc0JBQ2Q7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQSw0QkFDRTtBQUFBLGlCQUNHTCxNQURILEVBQ1csR0FEWCxlQUVFO0FBQUEsa0JBRUcsSUFBSU0sSUFBSixDQUFTTCxTQUFULEVBQW9CTSxjQUFwQixDQUFtQyxPQUFuQyxFQUE0QztBQUMzQ0MsVUFBQUEsSUFBSSxFQUFFLFNBRHFDO0FBRTNDQyxVQUFBQSxLQUFLLEVBQUUsU0FGb0M7QUFHM0NDLFVBQUFBLEdBQUcsRUFBRSxTQUhzQztBQUkzQ0MsVUFBQUEsSUFBSSxFQUFFLFNBSnFDO0FBSzNDQyxVQUFBQSxNQUFNLEVBQUUsU0FMbUM7QUFNM0NDLFVBQUFBLE1BQU0sRUFBRTtBQUFLOztBQU44QixTQUE1QztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQWdCR1QsU0FBUyxnQkFDUjtBQUFBLDZCQUNFLDhEQUFDLDhDQUFEO0FBQVUsY0FBTSxFQUFFRCxRQUFsQjtBQUE0QixVQUFFLEVBQUVKO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFEUSxHQUtSRyxJQXJCSixlQXdCRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUVFO0FBQVEsZUFBTyxFQUFFRyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7S0FBTVA7QUFnQ04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyBpZCwgdXNlcklkLCB0aW1lc3RhbXAsIHRleHQsIG9uVXBkYXRlLCBpc0VkaXRpbmcsIHN0YXJ0RWRpdCB9KSA9PiAoXHJcbiAgPGxpIGNsYXNzTmFtZT0nbWVzc2FnZXNfX2l0ZW0nPlxyXG4gICAgPGgzPlxyXG4gICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgIDxzdWI+XHJcbiAgICAgICAgey8qIOyDgeychOyXkOyEnCB0aW1lc3RhbXAo7Iuk7KCcIOuCoOynnOqwkinsnYQg6rWs7ZWY6rOgIO2VmOychOyXkOyEnOuKlCDrgqDsp5zsnZgg7ZiV7YOc66eMIOyeoeyVhOyjvOq4sCAqL31cclxuICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS1InLCB7XHJcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSAvKiDsmKTsoIQg7Jik7ZuE66GcIOq1rOu2hCAqLyxcclxuICAgICAgICB9KX1cclxuICAgICAgPC9zdWI+XHJcbiAgICA8L2gzPlxyXG5cclxuICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IGlkPXtpZH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApIDogKFxyXG4gICAgICB0ZXh0XHJcbiAgICApfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlc19fYnV0dG9ucyc+XHJcbiAgICAgIHsvKiDsiJjsoJUg67KE7Yq87J2EIOuIhOultOuptCBzdGFydEVkaXQg7Zmc7ISx7ZmUICovfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbTtcclxuIl0sIm5hbWVzIjpbIk1zZ0lucHV0IiwiTXNnSXRlbSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0IiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiJdLCJzb3VyY2VSb290IjoiIn0=