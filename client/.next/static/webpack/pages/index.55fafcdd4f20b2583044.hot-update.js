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
      startEdit = _ref.startEdit,
      onDelete = _ref.onDelete;
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
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "messages__buttons",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: onDelete,
        children: "\uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTVmYWZjZGQ0ZjIwYjI1ODMwNDQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFPQyxNQUFQLFFBQU9BLE1BQVA7QUFBQSxNQUFlQyxTQUFmLFFBQWVBLFNBQWY7QUFBQSxNQUEwQkMsSUFBMUIsUUFBMEJBLElBQTFCO0FBQUEsTUFBZ0NDLFFBQWhDLFFBQWdDQSxRQUFoQztBQUFBLE1BQTBDQyxTQUExQyxRQUEwQ0EsU0FBMUM7QUFBQSxNQUFxREMsU0FBckQsUUFBcURBLFNBQXJEO0FBQUEsTUFBZ0VDLFFBQWhFLFFBQWdFQSxRQUFoRTtBQUFBLHNCQUNkO0FBQUksYUFBUyxFQUFDLGdCQUFkO0FBQUEsNEJBQ0U7QUFBQSxpQkFDR04sTUFESCxFQUNXLEdBRFgsZUFFRTtBQUFBLGtCQUVHLElBQUlPLElBQUosQ0FBU04sU0FBVCxFQUFvQk8sY0FBcEIsQ0FBbUMsT0FBbkMsRUFBNEM7QUFDM0NDLFVBQUFBLElBQUksRUFBRSxTQURxQztBQUUzQ0MsVUFBQUEsS0FBSyxFQUFFLFNBRm9DO0FBRzNDQyxVQUFBQSxHQUFHLEVBQUUsU0FIc0M7QUFJM0NDLFVBQUFBLElBQUksRUFBRSxTQUpxQztBQUszQ0MsVUFBQUEsTUFBTSxFQUFFLFNBTG1DO0FBTTNDQyxVQUFBQSxNQUFNLEVBQUU7QUFBSzs7QUFOOEIsU0FBNUM7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFrQkdWLFNBQVMsZ0JBQ1I7QUFBQSw2QkFDRSw4REFBQyw4Q0FBRDtBQUFVLGNBQU0sRUFBRUQsUUFBbEI7QUFBNEIsVUFBRSxFQUFFSjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBRFEsR0FLUkcsSUF2QkosZUEwQkU7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFFRTtBQUFRLGVBQU8sRUFBRUcsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQVEsZUFBTyxFQUFFQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztLQUFNUjtBQW1DTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5cclxuY29uc3QgTXNnSXRlbSA9ICh7IGlkLCB1c2VySWQsIHRpbWVzdGFtcCwgdGV4dCwgb25VcGRhdGUsIGlzRWRpdGluZywgc3RhcnRFZGl0LCBvbkRlbGV0ZSB9KSA9PiAoXHJcbiAgPGxpIGNsYXNzTmFtZT0nbWVzc2FnZXNfX2l0ZW0nPlxyXG4gICAgPGgzPlxyXG4gICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgIDxzdWI+XHJcbiAgICAgICAgey8qIOyDgeychOyXkOyEnCB0aW1lc3RhbXAo7Iuk7KCcIOuCoOynnOqwkinsnYQg6rWs7ZWY6rOgIO2VmOychOyXkOyEnOuKlCDrgqDsp5zsnZgg7ZiV7YOc66eMIOyeoeyVhOyjvOq4sCAqL31cclxuICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS1InLCB7XHJcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSAvKiDsmKTsoIQg7Jik7ZuE66GcIOq1rOu2hCAqLyxcclxuICAgICAgICB9KX1cclxuICAgICAgPC9zdWI+XHJcbiAgICA8L2gzPlxyXG5cclxuICAgIHsvKiBpc0VkaXRpbmfsnbQgdHJ1ZeqwgCDrkJjrqbQgdGV4dCDrjIDsi6AgTXNnSW5wdXTssL0g66CM642U66eBICovfVxyXG4gICAgey8qIE1zZ0xpc3Tsl5DshJwgbWFw7Jy866GcIOq6vOuCtOyguCDsoITri6zrkJwgaWTsmYAg7ZWo6ruYIG11dGF0ZSBwcm9wc+yXkCBvblVwZGF0ZSDsoITri6wgPT4gdGV4dOyZgCBpZOqwgCDtlajqu5ggbXV0YXRl7JeQIOuTpOyWtOqwgOuptOyEnCBvbkNyZWF0ZSDrjIDsi6Agb25VcGRhdGUg7ZWo7IiY6rCAIOyLpO2WieuQqCAqL31cclxuICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IGlkPXtpZH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApIDogKFxyXG4gICAgICB0ZXh0XHJcbiAgICApfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlc19fYnV0dG9ucyc+XHJcbiAgICAgIHsvKiDsiJjsoJXrsoTtirwg7YG066atIOyLnCBzdGFydEVkaXQg7Iuk7ZaJKO2ZnOyEse2ZlCkgPT4gbWFw7Jy866GcIOuPjOuNmCB4KGl0ZW0pIOykkSDsiJjsoJXrsoTtirzsnbQg64iM66awIHjsnZggaWTqsIAgZWRpdGluZ0lk7JeQIOuTpOyWtOqwkCA9PiBlZGl0aW5nSWTsmYAg7ZiE7J6sIOywqOuhgOyXkOyEnCDrj4zqs6Ag7J6I642YIHjsnZggaWTqsIAg7J287LmY7ZWY66m0IGlzRWRpdGluZ+ydtCB0cnVl6rCAIOuQmOuptOyEnCB0ZXh0IOuMgOyLoCBNc2dJbnB1dOywvSDroIzrjZTrp4EqL31cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtO1xyXG4iXSwibmFtZXMiOlsiTXNnSW5wdXQiLCJNc2dJdGVtIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0Iiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiXSwic291cmNlUm9vdCI6IiJ9