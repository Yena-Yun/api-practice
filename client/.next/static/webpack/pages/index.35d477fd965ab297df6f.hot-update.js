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
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
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
      defaultValue: text,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzVkNDc3ZmQ5NjVhYjI5N2RmNmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsdUJBQWhDQyxJQUFnQztBQUFBLE1BQWhDQSxJQUFnQywwQkFBekIsRUFBeUI7QUFBQSxxQkFBckJDLEVBQXFCO0FBQUEsTUFBckJBLEVBQXFCLHdCQUFoQkMsU0FBZ0I7QUFDMUQ7QUFDQTtBQUNBLE1BQU1DLE9BQU8sR0FBR04sNkNBQU0sQ0FBQyxJQUFELENBQXRCLENBSDBELENBSzFEOztBQUNBLE1BQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QjtBQUNBQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FGc0IsQ0FHdEI7O0FBQ0FELElBQUFBLENBQUMsQ0FBQ0UsZUFBRixHQUpzQixDQU10Qjs7QUFDQSxRQUFNUCxJQUFJLEdBQUdHLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsS0FBN0IsQ0FQc0IsQ0FRdEI7O0FBQ0FOLElBQUFBLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsS0FBaEIsR0FBd0IsRUFBeEIsQ0FUc0IsQ0FVdEI7QUFDQTs7QUFDQVYsSUFBQUEsTUFBTSxDQUFDQyxJQUFELEVBQU9DLEVBQVAsQ0FBTjtBQUNELEdBYkQ7O0FBZUEsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFlBQVEsRUFBRUcsUUFBNUM7QUFBQSw0QkFDRTtBQUFVLFNBQUcsRUFBRUQsT0FBZjtBQUF3QixrQkFBWSxFQUFFSCxJQUF0QztBQUE0QyxpQkFBVyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBM0JEOztHQUFNRjs7S0FBQUE7QUE2Qk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbnB1dOydmCDrgrTsmqnsnYQgTXNnTGlzdOyXkOyEnOuKlCAnY3JlYXRlJ+yXkCDsk7gg6rGw6rOgIE1zZ0l0ZW3sl5DshJzripQgJ3VwZGF0ZSfsl5Ag7JO4IOyYiOyglVxyXG4vLyDqsIHqsIHsnZgg6rK97Jqw7JeQIOyImO2Wie2VoCDrqZTshJzrk5zqsIAg64uk66aEID0+ICdtdXRhdGUn66GcIOutieuaseq3uOugpCDshKDslrjtlZjqs6Ag6re4IOyViOyXkCBpbnB1dOqwkiDsoITri6xcclxuLy8gKGlkID0gdW5kZWZpbmVkOiBpZOqwkiDrsJvslYTsmKTripTrjbAg7JeG7J2EIOyImOuPhCDsnojsnYwgPT4gTXNnSXRlbeyXkOyEnCDsiJjsoJXrsoTtirzsnbQg64iM66Ck7IScIOuEmOyWtOyYqCBpZOqwgCDsnojsnYQg6rK97JqwIG11dGF0ZeulvCDthrXtlbQgaWTqsIAg7KCE64us65CY7Ja0IE1zZ0xpc3Qg66CI67Ko7JeQ7IScIG9uVXBkYXRlIOyLpO2WiSlcclxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xyXG4gIC8vIG9uQ2hhbmdlLCBvbklucHV0IOuwqeuylSDsmbjsl5AgdXNlUmVm66W8IOydtOyaqe2VmOuKlCDrsKnrspXsnbQg7J6I7J2MXHJcbiAgLy8gaW5wdXTssL0odGV4dGFyZWEp7J2EIHVzZVJlZuuhnCAn6rCA66as7YK0J1xyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIG9uU3VibWl0IO2VqOyImOuKlCDtlYTsmpRcclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAvLyDsg4jroZzqs6Dsuagg67Cp7KeAXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyDsnbTrsqTtirgg67KE67iU66eBIOuwqeyngFxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAvLyBpbnB1dOywveyXkCDsnoXroKXrkJwg6rCSXHJcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgLy8gKOqwkiDqsIDsoLjsmKTqs6Ag64KY66m0KSBpbnB1dOywvSDstIjquLDtmZRcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgLy8gTXNnTGlzdOyXkCBtdXRhdGXrpbwg7Ya17ZW0IGlucHV06rCSKHRleHQpIOyghOuLrFxyXG4gICAgLy8gKOyImOygleuyhO2KvOydtCDriIzroKTshJwgTXNnSW5wdXTsl5AgaWTqsIAg64SY7Ja07Jik66m0IG9uVXBkYXRl6rCAIOyLpO2WieuQmOqzoCDrhJjslrTsmKggaWTqsIAg7JeG7Jy866m0IG9uQ3JlYXRlKOyDneyEsSnsnLzroZwg7Iuk7ZaJ65CoKVxyXG4gICAgbXV0YXRlKHRleHQsIGlkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdtZXNzYWdlc19faW5wdXQnIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9J+uCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuJyAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+7JmE66OMPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9