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
// (id = undefined: id값 받아오는데 없을 수도 있음 => MsgItem에서 수정버튼이 눌려서 넘어온 id가 있을 경우 mutate를 통해 id가 전달되어 MsgList 레벨에서 onUpdate 실행)



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

    textRef.current.value = ''; // MsgList에 mutate를 통해 input값(text) 전달
    // (수정버튼이 눌려서 MsgInput에 id가 넘어오면 onUpdate가 실행되고 넘어온 id가 없으면 onCreate(생성)으로 실행됨)

    mutate(text, id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
      ref: textRef,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGFhMDYwY2RmN2ZhMTZiOGRhZGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEscUJBQXJCQyxFQUFxQjtBQUFBLE1BQXJCQSxFQUFxQix3QkFBaEJDLFNBQWdCO0FBQy9DO0FBQ0E7QUFDQSxNQUFNQyxPQUFPLEdBQUdMLDZDQUFNLENBQUMsSUFBRCxDQUF0QixDQUgrQyxDQUsvQzs7QUFDQSxNQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEI7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRnNCLENBR3RCOztBQUNBRCxJQUFBQSxDQUFDLENBQUNFLGVBQUYsR0FKc0IsQ0FNdEI7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHTCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQTdCLENBUHNCLENBUXRCOztBQUNBUCxJQUFBQSxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQWhCLEdBQXdCLEVBQXhCLENBVHNCLENBVXRCO0FBQ0E7O0FBQ0FWLElBQUFBLE1BQU0sQ0FBQ1EsSUFBRCxFQUFPUCxFQUFQLENBQU47QUFDRCxHQWJEOztBQWVBLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxZQUFRLEVBQUVHLFFBQTVDO0FBQUEsNEJBQ0U7QUFBVSxTQUFHLEVBQUVELE9BQWY7QUFBd0IsaUJBQVcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQTNCRDs7R0FBTUo7O0tBQUFBO0FBNkJOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW5wdXTsnZgg64K07Jqp7J2EIE1zZ0xpc3Tsl5DshJzripQgJ2NyZWF0ZSfsl5Ag7JO4IOqxsOqzoCBNc2dJdGVt7JeQ7ISc64qUICd1cGRhdGUn7JeQIOyTuCDsmIjsoJVcclxuLy8g6rCB6rCB7J2YIOqyveyasOyXkCDsiJjtlontlaAg66mU7ISc65Oc6rCAIOuLpOumhCA9PiAnbXV0YXRlJ+uhnCDrrYnrmrHqt7jroKQg7ISg7Ja47ZWY6rOgIOq3uCDslYjsl5AgaW5wdXTqsJIg7KCE64usXHJcbi8vIChpZCA9IHVuZGVmaW5lZDogaWTqsJIg67Cb7JWE7Jik64qU642wIOyXhuydhCDsiJjrj4Qg7J6I7J2MID0+IE1zZ0l0ZW3sl5DshJwg7IiY7KCV67KE7Yq87J20IOuIjOugpOyEnCDrhJjslrTsmKggaWTqsIAg7J6I7J2EIOqyveyasCBtdXRhdGXrpbwg7Ya17ZW0IGlk6rCAIOyghOuLrOuQmOyWtCBNc2dMaXN0IOugiOuyqOyXkOyEnCBvblVwZGF0ZSDsi6TtlokpXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgLy8gb25DaGFuZ2UsIG9uSW5wdXQg67Cp67KVIOyZuOyXkCB1c2VSZWbrpbwg7J207Jqp7ZWY64qUIOuwqeuyleydtCDsnojsnYxcclxuICAvLyBpbnB1dOywvSh0ZXh0YXJlYSnsnYQgdXNlUmVm66GcICfqsIDrpqztgrQnXHJcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gb25TdWJtaXQg7ZWo7IiY64qUIO2VhOyalFxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIC8vIOyDiOuhnOqzoOy5qCDrsKnsp4BcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIOydtOuypO2KuCDrsoTruJTrp4Eg67Cp7KeAXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIC8vIGlucHV07LC97JeQIOyeheugpeuQnCDqsJJcclxuICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAvLyAo6rCSIOqwgOyguOyYpOqzoCDrgpjrqbQpIGlucHV07LC9IOy0iOq4sO2ZlFxyXG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAvLyBNc2dMaXN07JeQIG11dGF0ZeulvCDthrXtlbQgaW5wdXTqsJIodGV4dCkg7KCE64usXHJcbiAgICAvLyAo7IiY7KCV67KE7Yq87J20IOuIjOugpOyEnCBNc2dJbnB1dOyXkCBpZOqwgCDrhJjslrTsmKTrqbQgb25VcGRhdGXqsIAg7Iuk7ZaJ65CY6rOgIOuEmOyWtOyYqCBpZOqwgCDsl4bsnLzrqbQgb25DcmVhdGUo7IOd7ISxKeycvOuhnCDsi6TtlonrkKgpXHJcbiAgICBtdXRhdGUodGV4dCwgaWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9J21lc3NhZ2VzX19pbnB1dCcgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPHRleHRhcmVhIHJlZj17dGV4dFJlZn0gcGxhY2Vob2xkZXI9J+uCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuJyAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+7JmE66OMPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRleHQiLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9