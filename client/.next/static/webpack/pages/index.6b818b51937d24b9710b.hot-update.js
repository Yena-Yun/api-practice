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

    textRef.current.value = ''; // 받아온 상위 메서드(mutate)에 input값 전달 (만약 id가 있을 경우 id도 전달 -> 이때는 onUpdate로 진행됨)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmI4MThiNTE5MzdkMjRiOTcxMGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEscUJBQXJCQyxFQUFxQjtBQUFBLE1BQXJCQSxFQUFxQix3QkFBaEJDLFNBQWdCO0FBQy9DO0FBQ0E7QUFDQSxNQUFNQyxPQUFPLEdBQUdMLDZDQUFNLENBQUMsSUFBRCxDQUF0QixDQUgrQyxDQUsvQzs7QUFDQSxNQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEI7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRnNCLENBR3RCOztBQUNBRCxJQUFBQSxDQUFDLENBQUNFLGVBQUYsR0FKc0IsQ0FNdEI7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHTCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQTdCLENBUHNCLENBUXRCOztBQUNBUCxJQUFBQSxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQWhCLEdBQXdCLEVBQXhCLENBVHNCLENBVXRCOztBQUNBVixJQUFBQSxNQUFNLENBQUNRLElBQUQsRUFBT1AsRUFBUCxDQUFOO0FBQ0QsR0FaRDs7QUFjQSxzQkFDRTtBQUFNLGFBQVMsRUFBQyxpQkFBaEI7QUFBa0MsWUFBUSxFQUFFRyxRQUE1QztBQUFBLDRCQUNFO0FBQVUsU0FBRyxFQUFFRCxPQUFmO0FBQXdCLGlCQUFXLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0ExQkQ7O0dBQU1KOztLQUFBQTtBQTRCTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGlucHV07J2YIOuCtOyaqeydhCBNc2dMaXN07JeQ7ISc64qUICdjcmVhdGUn7JeQIOyTuCDqsbDqs6AgTXNnSXRlbeyXkOyEnOuKlCAndXBkYXRlJ+yXkCDsk7gg7JiI7KCVXHJcbi8vIOqwgeqwgeydmCDqsr3smrDsl5Ag7IiY7ZaJ7ZWgIOuplOyEnOuTnOqwgCDri6TrpoQgPT4gJ211dGF0ZSfroZwg662J65qx6re466CkIOyEoOyWuO2VmOqzoCDqt7gg7JWI7JeQIGlucHV06rCSIOyghOuLrFxyXG4vLyAoaWQgPSB1bmRlZmluZWQ6IGlk6rCSIOuwm+yVhOyYpOuKlOuNsCDsl4bsnYQg7IiY64+EIOyeiOydjCA9PiBNc2dJdGVt7JeQ7IScIOyImOygleuyhO2KvOydtCDriIzroKTshJwg64SY7Ja07JioIGlk6rCAIOyeiOydhCDqsr3smrAgbXV0YXRl66W8IO2Gte2VtCBpZOqwgCDsoITri6zrkJjslrQgTXNnTGlzdCDroIjrsqjsl5DshJwgb25VcGRhdGUg7Iuk7ZaJKVxyXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xyXG4gIC8vIG9uQ2hhbmdlLCBvbklucHV0IOuwqeuylSDsmbjsl5AgdXNlUmVm66W8IOydtOyaqe2VmOuKlCDrsKnrspXsnbQg7J6I7J2MXHJcbiAgLy8gaW5wdXTssL0odGV4dGFyZWEp7J2EIHVzZVJlZuuhnCAn6rCA66as7YK0J1xyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIG9uU3VibWl0IO2VqOyImOuKlCDtlYTsmpRcclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAvLyDsg4jroZzqs6Dsuagg67Cp7KeAXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyDsnbTrsqTtirgg67KE67iU66eBIOuwqeyngFxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAvLyBpbnB1dOywveyXkCDsnoXroKXrkJwg6rCSXHJcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgLy8gKOqwkiDqsIDsoLjsmKTqs6Ag64KY66m0KSBpbnB1dOywvSDstIjquLDtmZRcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgLy8g67Cb7JWE7JioIOyDgeychCDrqZTshJzrk5wobXV0YXRlKeyXkCBpbnB1dOqwkiDsoITri6wgKOunjOyVvSBpZOqwgCDsnojsnYQg6rK97JqwIGlk64+EIOyghOuLrCAtPiDsnbTrlYzripQgb25VcGRhdGXroZwg7KeE7ZaJ65CoKVxyXG4gICAgbXV0YXRlKHRleHQsIGlkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdtZXNzYWdlc19faW5wdXQnIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IHBsYWNlaG9sZGVyPSfrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULicgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPuyZhOujjDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0ZXh0IiwiY3VycmVudCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==