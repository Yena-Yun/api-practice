"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgInput.js",
    _this = undefined,
    _s = $RefreshSig$();

 // input의 내용을 MsgList에서는 'create'에 쓸 거고 MsgItem에서는 'update'에 쓸 예정
// 각각의 경우에 수행할 메서드가 다름 => 'mutate'로 뭉뚱그려 선언하고 그 안에 input값 전달



var MsgInput = function MsgInput(_ref) {
  _s();

  var mutate = _ref.mutate;
  // onChange, onInput 방법 외에 useRef를 이용하는 방법이 있음
  var textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // onSubmit 함수는 필요

  var onSubmit = function onSubmit(e) {
    // 새로고침 방지
    e.preventDefault(); // 이벤트 버블링 방지

    e.stopPropagation(); // input창에 입력된 값

    var text = textRef.current.value; // (값 가져오고 나면) input창 초기화

    textRef.current.value = ''; // 받아온 상위 메서드(mutate)에 input값 전달

    mutate(text);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
      ref: textRef,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(MsgInput, "w6wg8oN6T1JIeHvMfowtaM3MyjI=");

_c = MsgInput;
/* harmony default export */ __webpack_exports__["default"] = (MsgInput);

var _c;

$RefreshReg$(_c, "MsgInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzY2YTI3ZjJjMjZiZGFiMWVmMGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTs7OztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQy9CO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSCw2Q0FBTSxDQUFDLElBQUQsQ0FBdEIsQ0FGK0IsQ0FJL0I7O0FBQ0EsTUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQUZzQixDQUd0Qjs7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDRSxlQUFGLEdBSnNCLENBTXRCOztBQUNBLFFBQU1DLElBQUksR0FBR0wsT0FBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUE3QixDQVBzQixDQVF0Qjs7QUFDQVAsSUFBQUEsT0FBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUFoQixHQUF3QixFQUF4QixDQVRzQixDQVd0Qjs7QUFDQVIsSUFBQUEsTUFBTSxDQUFDTSxJQUFELENBQU47QUFDRCxHQWJEOztBQWVBLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxZQUFRLEVBQUVKLFFBQTVDO0FBQUEsNEJBQ0U7QUFBVSxTQUFHLEVBQUVELE9BQWY7QUFBd0IsaUJBQVcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQTFCRDs7R0FBTUY7O0tBQUFBO0FBNEJOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW5wdXTsnZgg64K07Jqp7J2EIE1zZ0xpc3Tsl5DshJzripQgJ2NyZWF0ZSfsl5Ag7JO4IOqxsOqzoCBNc2dJdGVt7JeQ7ISc64qUICd1cGRhdGUn7JeQIOyTuCDsmIjsoJVcclxuLy8g6rCB6rCB7J2YIOqyveyasOyXkCDsiJjtlontlaAg66mU7ISc65Oc6rCAIOuLpOumhCA9PiAnbXV0YXRlJ+uhnCDrrYnrmrHqt7jroKQg7ISg7Ja47ZWY6rOgIOq3uCDslYjsl5AgaW5wdXTqsJIg7KCE64usXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlIH0pID0+IHtcclxuICAvLyBvbkNoYW5nZSwgb25JbnB1dCDrsKnrspUg7Jm47JeQIHVzZVJlZuulvCDsnbTsmqntlZjripQg67Cp67KV7J20IOyeiOydjFxyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIG9uU3VibWl0IO2VqOyImOuKlCDtlYTsmpRcclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAvLyDsg4jroZzqs6Dsuagg67Cp7KeAXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyDsnbTrsqTtirgg67KE67iU66eBIOuwqeyngFxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAvLyBpbnB1dOywveyXkCDsnoXroKXrkJwg6rCSXHJcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgLy8gKOqwkiDqsIDsoLjsmKTqs6Ag64KY66m0KSBpbnB1dOywvSDstIjquLDtmZRcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG5cclxuICAgIC8vIOuwm+yVhOyYqCDsg4HsnIQg66mU7ISc65OcKG11dGF0ZSnsl5AgaW5wdXTqsJIg7KCE64usXHJcbiAgICBtdXRhdGUodGV4dCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nbWVzc2FnZXNfX2lucHV0JyBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICA8dGV4dGFyZWEgcmVmPXt0ZXh0UmVmfSBwbGFjZWhvbGRlcj0n64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC4nIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz7smYTro4w8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRleHQiLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9