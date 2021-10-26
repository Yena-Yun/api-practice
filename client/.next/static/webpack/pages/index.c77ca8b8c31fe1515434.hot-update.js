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
// (id = undefined: id값 받아오는데 없을 수도 있음 => onCreate에는 text만 들어가 처리될 것이고 id가 있으면 onUpdate에 id가 text와 함께 들어가 처리될 것임)



var MsgInput = function MsgInput(_ref) {
  _s();

  var mutate = _ref.mutate,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id;
  // onChange, onInput 방법 외에 useRef를 이용하는 방법이 있음
  // input창(textarea)을 useRef로 '가리킴'
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
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzc3Y2E4YjhjMzFmZTE1MTU0MzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEscUJBQXJCQyxFQUFxQjtBQUFBLE1BQXJCQSxFQUFxQix3QkFBaEJDLFNBQWdCO0FBQy9DO0FBQ0E7QUFDQSxNQUFNQyxPQUFPLEdBQUdMLDZDQUFNLENBQUMsSUFBRCxDQUF0QixDQUgrQyxDQUsvQzs7QUFDQSxNQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEI7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRnNCLENBR3RCOztBQUNBRCxJQUFBQSxDQUFDLENBQUNFLGVBQUYsR0FKc0IsQ0FNdEI7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHTCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQTdCLENBUHNCLENBUXRCOztBQUNBUCxJQUFBQSxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQWhCLEdBQXdCLEVBQXhCLENBVHNCLENBVXRCOztBQUNBVixJQUFBQSxNQUFNLENBQUNRLElBQUQsQ0FBTjtBQUNELEdBWkQ7O0FBY0Esc0JBQ0U7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFlBQVEsRUFBRUosUUFBNUM7QUFBQSw0QkFDRTtBQUFVLFNBQUcsRUFBRUQsT0FBZjtBQUF3QixpQkFBVyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBMUJEOztHQUFNSjs7S0FBQUE7QUE0Qk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbnB1dOydmCDrgrTsmqnsnYQgTXNnTGlzdOyXkOyEnOuKlCAnY3JlYXRlJ+yXkCDsk7gg6rGw6rOgIE1zZ0l0ZW3sl5DshJzripQgJ3VwZGF0ZSfsl5Ag7JO4IOyYiOyglVxyXG4vLyDqsIHqsIHsnZgg6rK97Jqw7JeQIOyImO2Wie2VoCDrqZTshJzrk5zqsIAg64uk66aEID0+ICdtdXRhdGUn66GcIOutieuaseq3uOugpCDshKDslrjtlZjqs6Ag6re4IOyViOyXkCBpbnB1dOqwkiDsoITri6xcclxuLy8gKGlkID0gdW5kZWZpbmVkOiBpZOqwkiDrsJvslYTsmKTripTrjbAg7JeG7J2EIOyImOuPhCDsnojsnYwgPT4gb25DcmVhdGXsl5DripQgdGV4dOunjCDrk6TslrTqsIAg7LKY66as65CgIOqyg+ydtOqzoCBpZOqwgCDsnojsnLzrqbQgb25VcGRhdGXsl5AgaWTqsIAgdGV4dOyZgCDtlajqu5gg65Ok7Ja06rCAIOyymOumrOuQoCDqsoPsnoQpXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgLy8gb25DaGFuZ2UsIG9uSW5wdXQg67Cp67KVIOyZuOyXkCB1c2VSZWbrpbwg7J207Jqp7ZWY64qUIOuwqeuyleydtCDsnojsnYxcclxuICAvLyBpbnB1dOywvSh0ZXh0YXJlYSnsnYQgdXNlUmVm66GcICfqsIDrpqztgrQnXHJcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gb25TdWJtaXQg7ZWo7IiY64qUIO2VhOyalFxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIC8vIOyDiOuhnOqzoOy5qCDrsKnsp4BcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIOydtOuypO2KuCDrsoTruJTrp4Eg67Cp7KeAXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIC8vIGlucHV07LC97JeQIOyeheugpeuQnCDqsJJcclxuICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAvLyAo6rCSIOqwgOyguOyYpOqzoCDrgpjrqbQpIGlucHV07LC9IOy0iOq4sO2ZlFxyXG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAvLyDrsJvslYTsmKgg7IOB7JyEIOuplOyEnOuTnChtdXRhdGUp7JeQIGlucHV06rCSIOyghOuLrFxyXG4gICAgbXV0YXRlKHRleHQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9J21lc3NhZ2VzX19pbnB1dCcgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPHRleHRhcmVhIHJlZj17dGV4dFJlZn0gcGxhY2Vob2xkZXI9J+uCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuJyAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+7JmE66OMPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRleHQiLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9