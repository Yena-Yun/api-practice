"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



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
      setMsgs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1]; // 새글 생성하는 함수


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
    }; // 댓글배열에 setter 함수와 spread 연산자를 이용하여 새글 객체를 추가

    setMsgs(function (msgs) {
      return [newMsg].concat((0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs));
    });
  }; // 글 수정하는 함수


  var onUpdate = function onUpdate(id, text) {
    // setter에 기존 댓글배열(msgs)을 받아와서 진행
    setMsgs(function (msgs) {
      // 수정할 Item의 인덱스(targetIndex)를 findIndex로 찾음
      // findIndex는 배열메서드: 배열을 돌면서 특정 조건을 만족하는 item의 인덱스를 반환 (cf. filter: 특정 조건을 만족하는 item들을 뽑아 '새 배열'로 반환)
      var targetIndex = msgs.findIndex(function (msg) {
        return msg.id === id;
      }); // (예외처리) 찾는 id가 없으면(-1) 기존 배열 그대로 반환

      if (targetIndex < 0) return msgs; // ** 수정하기
      // 기존 댓글배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열로 만듦 (copy)

      var newMsgs = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs); // 새 배열에서 splice를 이용해 targetIndex번째부터 1개(deleteCount)를 지우고 그 자리에 새로운 item(3항)을 넣음
      // 새로운 item: targetIndex번째의 기존 내용은 그대로 넣고 text만 교체


      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text: text
      })); // 수정된 새 배열을 반환 (setter에 들어가 msgs가 교체됨)

      return newMsgs;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return (
          /*#__PURE__*/
          // 여기서는 {...x}로 전부 다 넣고 MsgItem에서 쓸 때는 일부만 빼서 사용 가능
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
            onUpdate: onUpdate,
            isEditing: isEditing
          }), x.id, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "01fMYNZrB/VzC7UxNBW1xkTAcyg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmNjNWRhNGQ4NDUwYjQ2MGE0NTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNRyxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQixFQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEIsRUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUNsQkMsSUFEa0IsQ0FDYixDQURhLEVBRWxCQyxHQUZrQixDQUVkLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDZEMsSUFBQUEsRUFBRSxFQUFFRCxDQUFDLEdBQUcsQ0FETTtBQUVkRSxJQUFBQSxNQUFNLEVBQUVYLGVBQWUsRUFGVDtBQUdkWSxJQUFBQSxTQUFTLEVBQUUsZ0JBQWdCSCxDQUFDLEdBQUcsSUFBSixHQUFXO0FBQUc7QUFIM0I7QUFJZEksSUFBQUEsSUFBSSxZQUFLSixDQUFDLEdBQUcsQ0FBVDtBQUpVLEdBQVg7QUFBQSxDQUZjLEVBUWxCSyxPQVJrQixFQUFyQjtBQVFjO0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBQ0Esa0JBQXdCbkIsK0NBQVEsQ0FBQ1EsWUFBRCxDQUFoQztBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLG1CQUFrQ3JCLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9zQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQUpvQixDQU1wQjs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1AsSUFBRCxFQUFVO0FBQ3pCO0FBQ0EsUUFBTVEsTUFBTSxHQUFHO0FBQ2I7QUFDQVgsTUFBQUEsRUFBRSxFQUFFTSxJQUFJLENBQUNNLE1BQUwsR0FBYyxDQUZMO0FBR2JYLE1BQUFBLE1BQU0sRUFBRVgsZUFBZSxFQUhWO0FBSWJZLE1BQUFBLFNBQVMsRUFBRVcsSUFBSSxDQUFDQyxHQUFMO0FBQVc7QUFKVDtBQUtiWCxNQUFBQSxJQUFJLFlBQUtHLElBQUksQ0FBQ00sTUFBTCxHQUFjLENBQW5CLGNBQXdCVCxJQUF4QjtBQUxTLEtBQWYsQ0FGeUIsQ0FVekI7O0FBQ0FJLElBQUFBLE9BQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsY0FBV0ssTUFBWCw4SUFBc0JMLElBQXRCO0FBQUEsS0FBRCxDQUFQO0FBQ0QsR0FaRCxDQVBvQixDQXFCcEI7OztBQUNBLE1BQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNmLEVBQUQsRUFBS0csSUFBTCxFQUFjO0FBQzdCO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQyxVQUFDRCxJQUFELEVBQVU7QUFDaEI7QUFDQTtBQUNBLFVBQU1VLFdBQVcsR0FBR1YsSUFBSSxDQUFDVyxTQUFMLENBQWUsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ2xCLEVBQUosS0FBV0EsRUFBcEI7QUFBQSxPQUFmLENBQXBCLENBSGdCLENBS2hCOztBQUNBLFVBQUlnQixXQUFXLEdBQUcsQ0FBbEIsRUFBcUIsT0FBT1YsSUFBUCxDQU5MLENBUWhCO0FBQ0E7O0FBQ0EsVUFBTWEsT0FBTyxHQUFHLHFJQUFJYixJQUFQLENBQWIsQ0FWZ0IsQ0FZaEI7QUFDQTs7O0FBQ0FhLE1BQUFBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSixXQUFmLEVBQTRCLENBQTVCLGtDQUNLVixJQUFJLENBQUNVLFdBQUQsQ0FEVDtBQUVFYixRQUFBQSxJQUFJLEVBQUVBO0FBRlIsVUFkZ0IsQ0FtQmhCOztBQUNBLGFBQU9nQixPQUFQO0FBQ0QsS0FyQk0sQ0FBUDtBQXNCRCxHQXhCRDs7QUEwQkEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw4Q0FBRDtBQUFVLFlBQU0sRUFBRVQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBLGdCQUNHSixJQUFJLENBQUNULEdBQUwsQ0FBUyxVQUFDd0IsQ0FBRDtBQUFBO0FBQUE7QUFDUjtBQUNBLHdFQUFDLDZDQUFELGtDQUF3QkEsQ0FBeEI7QUFBMkIsb0JBQVEsRUFBRU4sUUFBckM7QUFBK0MscUJBQVMsRUFBRU87QUFBMUQsY0FBY0QsQ0FBQyxDQUFDckIsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZRO0FBQUEsT0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBV0QsQ0EzREQ7O0dBQU1LOztLQUFBQTtBQTZETiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCDrsLDsl7RcclxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUICjrkZgg7KSR7JeQIO2VmOuCmCkg656c642k7ZWY6rKMIOuEo+q4sFxyXG4vLyBVc2VySWRzIOuwsOyXtOydmCDsnbjrjbHsiqTsl5Ag656c642kIO2VqOyImCDrhKPquLBcclxuLy8gMuqwnOu/kOydvCDrlYzripQgTWF0aC5yb3VuZOunjCDsspjrpqwgLT4gMCDrmJDripQgMVxyXG5jb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG5cclxuLy8gM+qwnCDsnbTsg4Hsnbwg65WM64qUIE1hdGgucmFuZG9tKCkg65Kk7JeQIOuwsOyXtOydmCDquLjsnbQg6rOx7ZWY6riwXHJcbi8vIGNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogVXNlcklkcy5sZW5ndGgpXTtcclxuXHJcbi8vIEFycmF5KDUwKTog6rO16rCE7J20IDUw6rCc7J24IOuwsOyXtCDsg53shLFcclxuLy8gLmZpbGwoMCk6IDUw6rCc7J2YIOqzteqwhOydhCDslYTrrLQg6rCS7Jy866Gc64KYIOyxhOybgFxyXG4vLyAubWFwKHZhbCwgaSk6IG1hcOycvOuhnCDqurzrgrTripQgdmFs7J20IOykkeyalO2VmOyngCDslYrsnLzrqbQgJ18n66GcIOyymOumrCAoPT4gaeunjCDsgqzsmqntlZjroKTripQg6rK97JqwKVxyXG4vLyAoKShyZXR1cm4pIOyViOyXkCB7fSAoPT4g6rCd7LK0IOuwmO2ZmClcclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbiAgLmZpbGwoMClcclxuICAubWFwKChfLCBpKSA9PiAoe1xyXG4gICAgaWQ6IGkgKyAxLFxyXG4gICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAgLyogaeulvCBtaWxsaXNlY29uZOuhnCDrsJTqvrwg65KkIOuLpOyLnCA2MOydhCDqs7HtlaggLT4gJzHrtoQnIOuLqOychOuhnCDspp3qsIAgKi8sXHJcbiAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YCxcclxuICB9KSlcclxuICAucmV2ZXJzZSgpOyAvKiDstZzqt7wg7Iic7ISc66GcIOywje2eiOuPhOuhnSAoU05TKSAgKi9cclxuXHJcbi8vIGNvbnN0IG1zZ3MgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4vLyAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzIC8qIOy0nSAxM+yekOumrCDtlYTsmpQgKi8sXHJcbi8vICAgICB0ZXh0LCAnMSBtb2NrIHRleHQnXHJcbi8vICAgfSxcclxuLy8gXTtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgLy8gaW5wdXTqsJLsnYQg7KCc7Lac7ZWY66m0IOyDiOq4gCDsg53shLEg65iQ64qUIOq4sOyhtCDquIAg7IiY7KCVID0+IOy0iOq4sOqwkuyduCDquLjsnbQgNTDsnZgg64yT6riA67Cw7Je07J2AICfrs4DtlZjripQg7JqU7IaMJ+qwgCDrkKggPT4gc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcclxuXHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyDsg4jquIAg7IOd7ISx7ZWY64qUIO2VqOyImFxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcclxuICAgIC8vIOyDiOq4gCDqsJ3ssrTrpbwg6rWs7ISxXHJcbiAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgIC8vIOydtOygnOuKlCBtYXDsnLzroZwg7Ja77J2AIGlk6rCAIOyVhOuLjCDquLDsobQg64yT6riA67Cw7Je07J2YIOq4uOydtOulvCDsnbTsmqkgKD0+IGtleeyZgCB0ZXh0IOyYhuyXkCDrgpjtg4DrgpjripQg7J24642x7IqkKVxyXG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCkgLyog7ZiE7J6sIOuCoOynnCDrsI8g7Iuc6rCEICovLFxyXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDrjJPquIDrsLDsl7Tsl5Agc2V0dGVyIO2VqOyImOyZgCBzcHJlYWQg7Jew7IKw7J6Q66W8IOydtOyaqe2VmOyXrCDsg4jquIAg6rCd7LK066W8IOy2lOqwgFxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIC8vIOq4gCDsiJjsoJXtlZjripQg7ZWo7IiYXHJcbiAgY29uc3Qgb25VcGRhdGUgPSAoaWQsIHRleHQpID0+IHtcclxuICAgIC8vIHNldHRlcuyXkCDquLDsobQg64yT6riA67Cw7Je0KG1zZ3Mp7J2EIOuwm+yVhOyZgOyEnCDsp4TtlolcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8g7IiY7KCV7ZWgIEl0ZW3snZgg7J24642x7IqkKHRhcmdldEluZGV4KeulvCBmaW5kSW5kZXjroZwg7LC+7J2MXHJcbiAgICAgIC8vIGZpbmRJbmRleOuKlCDrsLDsl7TrqZTshJzrk5w6IOuwsOyXtOydhCDrj4zrqbTshJwg7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeydmCDsnbjrjbHsiqTrpbwg67CY7ZmYIChjZi4gZmlsdGVyOiDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCBpdGVt65Ok7J2EIOu9keyVhCAn7IOIIOuwsOyXtCfroZwg67CY7ZmYKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgLy8gKOyYiOyZuOyymOumrCkg7LC+64qUIGlk6rCAIOyXhuycvOuptCgtMSkg6riw7KG0IOuwsOyXtCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiog7IiY7KCV7ZWY6riwXHJcbiAgICAgIC8vIOq4sOyhtCDrjJPquIDrsLDsl7TsnYQgc3ByZWFk66GcIO2OvOy5nCDrkqQg64uk7IucIFtd7JeQIOuEo+yWtCDsg4gg67Cw7Je066GcIOunjOuTpiAoY29weSlcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuXHJcbiAgICAgIC8vIOyDiCDrsLDsl7Tsl5DshJwgc3BsaWNl66W8IOydtOyaqe2VtCB0YXJnZXRJbmRleOuyiOynuOu2gO2EsCAx6rCcKGRlbGV0ZUNvdW50KeulvCDsp4DsmrDqs6Ag6re4IOyekOumrOyXkCDsg4jroZzsmrQgaXRlbSgz7ZWtKeydhCDrhKPsnYxcclxuICAgICAgLy8g7IOI66Gc7Jq0IGl0ZW06IHRhcmdldEluZGV467KI7Ke47J2YIOq4sOyhtCDrgrTsmqnsnYAg6re464yA66GcIOuEo+qzoCB0ZXh066eMIOq1kOyytFxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g7IiY7KCV65CcIOyDiCDrsLDsl7TsnYQg67CY7ZmYIChzZXR0ZXLsl5Ag65Ok7Ja06rCAIG1zZ3PqsIAg6rWQ7LK065CoKVxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgLy8g7Jes6riw7ISc64qUIHsuLi54feuhnCDsoITrtoAg64ukIOuEo+qzoCBNc2dJdGVt7JeQ7IScIOyTuCDrlYzripQg7J2867aA66eMIOu5vOyEnCDsgqzsmqkg6rCA64qlXHJcbiAgICAgICAgICA8TXNnSXRlbSBrZXk9e3guaWR9IHsuLi54fSBvblVwZGF0ZT17b25VcGRhdGV9IGlzRWRpdGluZz17aXNFZGl0aW5nfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1zZ0lucHV0IiwiTXNnSXRlbSIsIlVzZXJJZHMiLCJnZXRSYW1kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsInJldmVyc2UiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsIngiLCJpc0VkaXRpbmciXSwic291cmNlUm9vdCI6IiJ9