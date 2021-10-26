"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // 유저아이디 배열



var UserIds = ['roy', 'jay']; // 유저아이디 (둘 중에 하나) 랜덤하게 넣기
// UserIds 배열의 인덱스에 랜덤 함수 넣기
// 2개뿐일 때는 Math.round만 처리 -> 0 또는 1

var getRamdomUserId = function getRamdomUserId() {
  return UserIds[Math.round(Math.random())];
}; // 3개 이상일 때는 Math.random() 뒤에 배열의 길이 곱하기
// const getRamdomUserId = () => UserIds[Math.round(Math.random() * UserIds.length)];
// Array(50): 공간이 50개인 배열 생성
// .fill(0): 50개의 공간을 아무 값으로나 채움
// .map(val, i): map으로 꺼내는 val이 중요하지 않으면 '_'로 처리 (=> i만 사용하려는 경우)
// ()(return) 안에 {} (=> 객체 반환)


var originalMsgs = Array(50).fill(0).map(function (_, i) {
  return {
    id: i + 1,
    userId: getRamdomUserId(),
    timestamp: 1234567890123 + i * 1000 * 60
    /* i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> '1분' 단위로 증가 */
    ,
    text: "".concat(i + 1, " mock text")
  };
}).reverse();
/* 최근 순서로 찍히도록 (SNS)  */
// const msgs = [
//   {
//     id: 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 /* 총 13자리 필요 */,
//     text, '1 mock text'
//   },
// ];

var MsgList = function MsgList() {
  _s();

  // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값인 길이 50의 댓글배열은 '변하는 요소'가 됨 => state로 선언
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(originalMsgs),
      msgs = _useState[0],
      setMsgs = _useState[1]; // 새글 생성하는 함수


  var onCreate = function onCreate(text) {
    // 새글 객체를 구성
    var newMsg = {
      // 이제는 map으로 얻은 id가 아닌 기존 댓글배열의 길이를 이용 (=> key와 text 옆에 나타나는 인덱스)
      id: msgs.length + 1,
      userId: getRamdomUserId(),
      timestamp: Date.now()
      /* 현재 날짜 및 시간 */
      ,
      text: "".concat(msgs.length + 1, " ").concat(text)
    };

    var onUpdate = function onUpdate(id, text) {
      // 수정할 Item의 인덱스를 findIndex로 찾음
      // findIndex: 배열메서드 -> 배열을 돌면서 조건을 만족하는 item의 'id'를 반환 (cf. filter: 특정 조건을 만족하는 item만 뽑아서 '새 배열'로 반환)
      var targetIndex = msgs.findIndex(function (msg) {
        return msg.id === id;
      }); // 찾는 id가 없으면(-1) 기존 댓글배열 그대로 반환

      if (targetIndex < 0) return msgs; // 특정 Item의 text를 input값으로 바꿈

      var copy = _objectSpread({}, msgs);

      copy.id = id;
      copy.text = text;
      setMsgs([copy].concat((0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(msgs)));
    }; // 댓글배열에 setter 함수와 spread 연산자를 이용하여 새글 객체를 추가


    setMsgs(function (msgs) {
      return [newMsg].concat((0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(msgs));
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({}, x), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "0rHCd0+xzNh1d+KPpUdLMZZ9PRQ=");

_c = MsgList;
/* harmony default export */ __webpack_exports__["default"] = (MsgList);

var _c;

$RefreshReg$(_c, "MsgList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjdmZWMyN2Q2NGY4ZDkwZGJjZDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNRyxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQixFQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEIsRUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUNsQkMsSUFEa0IsQ0FDYixDQURhLEVBRWxCQyxHQUZrQixDQUVkLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDZEMsSUFBQUEsRUFBRSxFQUFFRCxDQUFDLEdBQUcsQ0FETTtBQUVkRSxJQUFBQSxNQUFNLEVBQUVYLGVBQWUsRUFGVDtBQUdkWSxJQUFBQSxTQUFTLEVBQUUsZ0JBQWdCSCxDQUFDLEdBQUcsSUFBSixHQUFXO0FBQUc7QUFIM0I7QUFJZEksSUFBQUEsSUFBSSxZQUFLSixDQUFDLEdBQUcsQ0FBVDtBQUpVLEdBQVg7QUFBQSxDQUZjLEVBUWxCSyxPQVJrQixFQUFyQjtBQVFjO0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBQ0Esa0JBQXdCbkIsK0NBQVEsQ0FBQ1EsWUFBRCxDQUFoQztBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQUZvQixDQUlwQjs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0wsSUFBRCxFQUFVO0FBQ3pCO0FBQ0EsUUFBTU0sTUFBTSxHQUFHO0FBQ2I7QUFDQVQsTUFBQUEsRUFBRSxFQUFFTSxJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUZMO0FBR2JULE1BQUFBLE1BQU0sRUFBRVgsZUFBZSxFQUhWO0FBSWJZLE1BQUFBLFNBQVMsRUFBRVMsSUFBSSxDQUFDQyxHQUFMO0FBQVc7QUFKVDtBQUtiVCxNQUFBQSxJQUFJLFlBQUtHLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQW5CLGNBQXdCUCxJQUF4QjtBQUxTLEtBQWY7O0FBUUEsUUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2IsRUFBRCxFQUFLRyxJQUFMLEVBQWM7QUFDN0I7QUFDQTtBQUNBLFVBQU1XLFdBQVcsR0FBR1IsSUFBSSxDQUFDUyxTQUFMLENBQWUsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ2hCLEVBQUosS0FBV0EsRUFBcEI7QUFBQSxPQUFmLENBQXBCLENBSDZCLENBSzdCOztBQUNBLFVBQUljLFdBQVcsR0FBRyxDQUFsQixFQUFxQixPQUFPUixJQUFQLENBTlEsQ0FRN0I7O0FBQ0EsVUFBSVcsSUFBSSxxQkFBUVgsSUFBUixDQUFSOztBQUNBVyxNQUFBQSxJQUFJLENBQUNqQixFQUFMLEdBQVVBLEVBQVY7QUFDQWlCLE1BQUFBLElBQUksQ0FBQ2QsSUFBTCxHQUFZQSxJQUFaO0FBQ0FJLE1BQUFBLE9BQU8sRUFBRVUsSUFBRiw4SUFBV1gsSUFBWCxHQUFQO0FBQ0QsS0FiRCxDQVZ5QixDQXlCekI7OztBQUNBQyxJQUFBQSxPQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLGNBQVdHLE1BQVgsOElBQXNCSCxJQUF0QjtBQUFBLEtBQUQsQ0FBUDtBQUNELEdBM0JEOztBQTZCQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsZ0JBQ0dGLElBQUksQ0FBQ1QsR0FBTCxDQUFTLFVBQUNxQixDQUFEO0FBQUEsNEJBQ1IsOERBQUMsNkNBQUQsb0JBQXdCQSxDQUF4QixHQUFjQSxDQUFDLENBQUNsQixFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBVUQsQ0E1Q0Q7O0dBQU1LOztLQUFBQTtBQThDTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCDrsLDsl7RcclxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUICjrkZgg7KSR7JeQIO2VmOuCmCkg656c642k7ZWY6rKMIOuEo+q4sFxyXG4vLyBVc2VySWRzIOuwsOyXtOydmCDsnbjrjbHsiqTsl5Ag656c642kIO2VqOyImCDrhKPquLBcclxuLy8gMuqwnOu/kOydvCDrlYzripQgTWF0aC5yb3VuZOunjCDsspjrpqwgLT4gMCDrmJDripQgMVxyXG5jb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG5cclxuLy8gM+qwnCDsnbTsg4Hsnbwg65WM64qUIE1hdGgucmFuZG9tKCkg65Kk7JeQIOuwsOyXtOydmCDquLjsnbQg6rOx7ZWY6riwXHJcbi8vIGNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogVXNlcklkcy5sZW5ndGgpXTtcclxuXHJcbi8vIEFycmF5KDUwKTog6rO16rCE7J20IDUw6rCc7J24IOuwsOyXtCDsg53shLFcclxuLy8gLmZpbGwoMCk6IDUw6rCc7J2YIOqzteqwhOydhCDslYTrrLQg6rCS7Jy866Gc64KYIOyxhOybgFxyXG4vLyAubWFwKHZhbCwgaSk6IG1hcOycvOuhnCDqurzrgrTripQgdmFs7J20IOykkeyalO2VmOyngCDslYrsnLzrqbQgJ18n66GcIOyymOumrCAoPT4gaeunjCDsgqzsmqntlZjroKTripQg6rK97JqwKVxyXG4vLyAoKShyZXR1cm4pIOyViOyXkCB7fSAoPT4g6rCd7LK0IOuwmO2ZmClcclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbiAgLmZpbGwoMClcclxuICAubWFwKChfLCBpKSA9PiAoe1xyXG4gICAgaWQ6IGkgKyAxLFxyXG4gICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAgLyogaeulvCBtaWxsaXNlY29uZOuhnCDrsJTqvrwg65KkIOuLpOyLnCA2MOydhCDqs7HtlaggLT4gJzHrtoQnIOuLqOychOuhnCDspp3qsIAgKi8sXHJcbiAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YCxcclxuICB9KSlcclxuICAucmV2ZXJzZSgpOyAvKiDstZzqt7wg7Iic7ISc66GcIOywje2eiOuPhOuhnSAoU05TKSAgKi9cclxuXHJcbi8vIGNvbnN0IG1zZ3MgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4vLyAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzIC8qIOy0nSAxM+yekOumrCDtlYTsmpQgKi8sXHJcbi8vICAgICB0ZXh0LCAnMSBtb2NrIHRleHQnXHJcbi8vICAgfSxcclxuLy8gXTtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgLy8gaW5wdXTqsJLsnYQg7KCc7Lac7ZWY66m0IOyDiOq4gCDsg53shLEg65iQ64qUIOq4sOyhtCDquIAg7IiY7KCVID0+IOy0iOq4sOqwkuyduCDquLjsnbQgNTDsnZgg64yT6riA67Cw7Je07J2AICfrs4DtlZjripQg7JqU7IaMJ+qwgCDrkKggPT4gc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcclxuXHJcbiAgLy8g7IOI6riAIOyDneyEse2VmOuKlCDtlajsiJhcclxuICBjb25zdCBvbkNyZWF0ZSA9ICh0ZXh0KSA9PiB7XHJcbiAgICAvLyDsg4jquIAg6rCd7LK066W8IOq1rOyEsVxyXG4gICAgY29uc3QgbmV3TXNnID0ge1xyXG4gICAgICAvLyDsnbTsoJzripQgbWFw7Jy866GcIOyWu+ydgCBpZOqwgCDslYTri4wg6riw7KG0IOuMk+q4gOuwsOyXtOydmCDquLjsnbTrpbwg7J207JqpICg9PiBrZXnsmYAgdGV4dCDsmIbsl5Ag64KY7YOA64KY64qUIOyduOuNseyKpClcclxuICAgICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpIC8qIO2YhOyerCDrgqDsp5wg67CPIOyLnOqwhCAqLyxcclxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25VcGRhdGUgPSAoaWQsIHRleHQpID0+IHtcclxuICAgICAgLy8g7IiY7KCV7ZWgIEl0ZW3snZgg7J24642x7Iqk66W8IGZpbmRJbmRleOuhnCDssL7snYxcclxuICAgICAgLy8gZmluZEluZGV4OiDrsLDsl7TrqZTshJzrk5wgLT4g67Cw7Je07J2EIOuPjOuptOyEnCDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3snZggJ2lkJ+ulvCDrsJjtmZggKGNmLiBmaWx0ZXI6IO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3rp4wg672R7JWE7IScICfsg4gg67Cw7Je0J+uhnCDrsJjtmZgpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAvLyDssL7ripQgaWTqsIAg7JeG7Jy866m0KC0xKSDquLDsobQg64yT6riA67Cw7Je0IOq3uOuMgOuhnCDrsJjtmZhcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyDtirnsoJUgSXRlbeydmCB0ZXh066W8IGlucHV06rCS7Jy866GcIOuwlOq/iFxyXG4gICAgICBsZXQgY29weSA9IHsgLi4ubXNncyB9O1xyXG4gICAgICBjb3B5LmlkID0gaWQ7XHJcbiAgICAgIGNvcHkudGV4dCA9IHRleHQ7XHJcbiAgICAgIHNldE1zZ3MoW2NvcHksIC4uLm1zZ3NdKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g64yT6riA67Cw7Je07JeQIHNldHRlciDtlajsiJjsmYAgc3ByZWFkIOyXsOyCsOyekOulvCDsnbTsmqntlZjsl6wg7IOI6riAIOqwneyytOulvCDstpTqsIBcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J21lc3NhZ2VzJz5cclxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICAgIDxNc2dJdGVtIGtleT17eC5pZH0gey4uLnh9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXNnSW5wdXQiLCJNc2dJdGVtIiwiVXNlcklkcyIsImdldFJhbWRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwicmV2ZXJzZSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJjb3B5IiwieCJdLCJzb3VyY2VSb290IjoiIn0=