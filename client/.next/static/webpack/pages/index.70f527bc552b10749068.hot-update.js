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
      lineNumber: 87,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzBmNTI3YmM1NTJiMTA3NDkwNjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNRyxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQixFQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEIsRUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUNsQkMsSUFEa0IsQ0FDYixDQURhLEVBRWxCQyxHQUZrQixDQUVkLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDZEMsSUFBQUEsRUFBRSxFQUFFRCxDQUFDLEdBQUcsQ0FETTtBQUVkRSxJQUFBQSxNQUFNLEVBQUVYLGVBQWUsRUFGVDtBQUdkWSxJQUFBQSxTQUFTLEVBQUUsZ0JBQWdCSCxDQUFDLEdBQUcsSUFBSixHQUFXO0FBQUc7QUFIM0I7QUFJZEksSUFBQUEsSUFBSSxZQUFLSixDQUFDLEdBQUcsQ0FBVDtBQUpVLEdBQVg7QUFBQSxDQUZjLEVBUWxCSyxPQVJrQixFQUFyQjtBQVFjO0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBQ0Esa0JBQXdCbkIsK0NBQVEsQ0FBQ1EsWUFBRCxDQUFoQztBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQUZvQixDQUlwQjs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0wsSUFBRCxFQUFVO0FBQ3pCO0FBQ0EsUUFBTU0sTUFBTSxHQUFHO0FBQ2I7QUFDQVQsTUFBQUEsRUFBRSxFQUFFTSxJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUZMO0FBR2JULE1BQUFBLE1BQU0sRUFBRVgsZUFBZSxFQUhWO0FBSWJZLE1BQUFBLFNBQVMsRUFBRVMsSUFBSSxDQUFDQyxHQUFMO0FBQVc7QUFKVDtBQUtiVCxNQUFBQSxJQUFJLFlBQUtHLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQW5CLGNBQXdCUCxJQUF4QjtBQUxTLEtBQWYsQ0FGeUIsQ0FVekI7O0FBQ0FJLElBQUFBLE9BQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsY0FBV0csTUFBWCw4SUFBc0JILElBQXRCO0FBQUEsS0FBRCxDQUFQO0FBQ0QsR0FaRCxDQUxvQixDQW1CcEI7OztBQUNBLE1BQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNiLEVBQUQsRUFBS0csSUFBTCxFQUFjO0FBQzdCO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQyxVQUFDRCxJQUFELEVBQVU7QUFDaEI7QUFDQTtBQUNBLFVBQU1RLFdBQVcsR0FBR1IsSUFBSSxDQUFDUyxTQUFMLENBQWUsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ2hCLEVBQUosS0FBV0EsRUFBcEI7QUFBQSxPQUFmLENBQXBCLENBSGdCLENBS2hCOztBQUNBLFVBQUljLFdBQVcsR0FBRyxDQUFsQixFQUFxQixPQUFPUixJQUFQLENBTkwsQ0FRaEI7QUFDQTs7QUFDQSxVQUFNVyxPQUFPLEdBQUcscUlBQUlYLElBQVAsQ0FBYixDQVZnQixDQVloQjtBQUNBOzs7QUFDQVcsTUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFdBQWYsRUFBNEIsQ0FBNUIsa0NBQ0tSLElBQUksQ0FBQ1EsV0FBRCxDQURUO0FBRUVYLFFBQUFBLElBQUksRUFBRUE7QUFGUixVQWRnQixDQW1CaEI7O0FBQ0EsYUFBT2MsT0FBUDtBQUNELEtBckJNLENBQVA7QUFzQkQsR0F4QkQ7O0FBMEJBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVUO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR0YsSUFBSSxDQUFDVCxHQUFMLENBQVMsVUFBQ3NCLENBQUQ7QUFBQSw0QkFDUiw4REFBQyw2Q0FBRCxrQ0FBd0JBLENBQXhCO0FBQTJCLGtCQUFRLEVBQUVOO0FBQXJDLFlBQWNNLENBQUMsQ0FBQ25CLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFVRCxDQXhERDs7R0FBTUs7O0tBQUFBO0FBMEROLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUIOuwsOyXtFxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J107XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQgKOuRmCDspJHsl5Ag7ZWY64KYKSDrnpzrjaTtlZjqsowg64Sj6riwXHJcbi8vIFVzZXJJZHMg67Cw7Je07J2YIOyduOuNseyKpOyXkCDrnpzrjaQg7ZWo7IiYIOuEo+q4sFxyXG4vLyAy6rCc67+Q7J28IOuVjOuKlCBNYXRoLnJvdW5k66eMIOyymOumrCAtPiAwIOuYkOuKlCAxXHJcbmNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XHJcblxyXG4vLyAz6rCcIOydtOyDgeydvCDrlYzripQgTWF0aC5yYW5kb20oKSDrkqTsl5Ag67Cw7Je07J2YIOq4uOydtCDqs7HtlZjquLBcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBVc2VySWRzLmxlbmd0aCldO1xyXG5cclxuLy8gQXJyYXkoNTApOiDqs7XqsITsnbQgNTDqsJzsnbgg67Cw7Je0IOyDneyEsVxyXG4vLyAuZmlsbCgwKTogNTDqsJzsnZgg6rO16rCE7J2EIOyVhOustCDqsJLsnLzroZzrgpgg7LGE7JuAXHJcbi8vIC5tYXAodmFsLCBpKTogbWFw7Jy866GcIOq6vOuCtOuKlCB2YWzsnbQg7KSR7JqU7ZWY7KeAIOyViuycvOuptCAnXyfroZwg7LKY66asICg9PiBp66eMIOyCrOyaqe2VmOugpOuKlCDqsr3smrApXHJcbi8vICgpKHJldHVybikg7JWI7JeQIHt9ICg9PiDqsJ3ssrQg67CY7ZmYKVxyXG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcclxuICAuZmlsbCgwKVxyXG4gIC5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBpZDogaSArIDEsXHJcbiAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCAvKiBp66W8IG1pbGxpc2Vjb25k66GcIOuwlOq+vCDrkqQg64uk7IucIDYw7J2EIOqzse2VqCAtPiAnMeu2hCcg64uo7JyE66GcIOymneqwgCAqLyxcclxuICAgIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgLFxyXG4gIH0pKVxyXG4gIC5yZXZlcnNlKCk7IC8qIOy1nOq3vCDsiJzshJzroZwg7LCN7Z6I64+E66GdIChTTlMpICAqL1xyXG5cclxuLy8gY29uc3QgbXNncyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpZDogMSxcclxuLy8gICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgLyog7LSdIDEz7J6Q66asIO2VhOyalCAqLyxcclxuLy8gICAgIHRleHQsICcxIG1vY2sgdGV4dCdcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAvLyBpbnB1dOqwkuydhCDsoJzstpztlZjrqbQg7IOI6riAIOyDneyEsSDrmJDripQg6riw7KG0IOq4gCDsiJjsoJUgPT4g7LSI6riw6rCS7J24IOq4uOydtCA1MOydmCDrjJPquIDrsLDsl7TsnYAgJ+uzgO2VmOuKlCDsmpTshown6rCAIOuQqCA9PiBzdGF0ZeuhnCDshKDslrhcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xyXG5cclxuICAvLyDsg4jquIAg7IOd7ISx7ZWY64qUIO2VqOyImFxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcclxuICAgIC8vIOyDiOq4gCDqsJ3ssrTrpbwg6rWs7ISxXHJcbiAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgIC8vIOydtOygnOuKlCBtYXDsnLzroZwg7Ja77J2AIGlk6rCAIOyVhOuLjCDquLDsobQg64yT6riA67Cw7Je07J2YIOq4uOydtOulvCDsnbTsmqkgKD0+IGtleeyZgCB0ZXh0IOyYhuyXkCDrgpjtg4DrgpjripQg7J24642x7IqkKVxyXG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCkgLyog7ZiE7J6sIOuCoOynnCDrsI8g7Iuc6rCEICovLFxyXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDrjJPquIDrsLDsl7Tsl5Agc2V0dGVyIO2VqOyImOyZgCBzcHJlYWQg7Jew7IKw7J6Q66W8IOydtOyaqe2VmOyXrCDsg4jquIAg6rCd7LK066W8IOy2lOqwgFxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIC8vIOq4gCDsiJjsoJXtlZjripQg7ZWo7IiYXHJcbiAgY29uc3Qgb25VcGRhdGUgPSAoaWQsIHRleHQpID0+IHtcclxuICAgIC8vIHNldHRlcuyXkCDquLDsobQg64yT6riA67Cw7Je0KG1zZ3Mp7J2EIOuwm+yVhOyZgOyEnCDsp4TtlolcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8g7IiY7KCV7ZWgIEl0ZW3snZgg7J24642x7IqkKHRhcmdldEluZGV4KeulvCBmaW5kSW5kZXjroZwg7LC+7J2MXHJcbiAgICAgIC8vIGZpbmRJbmRleOuKlCDrsLDsl7TrqZTshJzrk5w6IOuwsOyXtOydhCDrj4zrqbTshJwg7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeydmCDsnbjrjbHsiqTrpbwg67CY7ZmYIChjZi4gZmlsdGVyOiDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCBpdGVt65Ok7J2EIOu9keyVhCAn7IOIIOuwsOyXtCfroZwg67CY7ZmYKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgLy8gKOyYiOyZuOyymOumrCkg7LC+64qUIGlk6rCAIOyXhuycvOuptCgtMSkg6riw7KG0IOuwsOyXtCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiog7IiY7KCV7ZWY6riwXHJcbiAgICAgIC8vIOq4sOyhtCDrjJPquIDrsLDsl7TsnYQgc3ByZWFk66GcIO2OvOy5nCDrkqQg64uk7IucIFtd7JeQIOuEo+yWtCDsg4gg67Cw7Je066GcIOunjOuTpiAoY29weSlcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuXHJcbiAgICAgIC8vIOyDiCDrsLDsl7Tsl5DshJwgc3BsaWNl66W8IOydtOyaqe2VtCB0YXJnZXRJbmRleOuyiOynuOu2gO2EsCAx6rCcKGRlbGV0ZUNvdW50KeulvCDsp4DsmrDqs6Ag6re4IOyekOumrOyXkCDsg4jroZzsmrQgaXRlbSgz7ZWtKeydhCDrhKPsnYxcclxuICAgICAgLy8g7IOI66Gc7Jq0IGl0ZW06IHRhcmdldEluZGV467KI7Ke47J2YIOq4sOyhtCDrgrTsmqnsnYAg6re464yA66GcIOuEo+qzoCB0ZXh066eMIOq1kOyytFxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g7IiY7KCV65CcIOyDiCDrsLDsl7TsnYQg67CY7ZmYIChzZXR0ZXLsl5Ag65Ok7Ja06rCAIG1zZ3PqsIAg6rWQ7LK065CoKVxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgPE1zZ0l0ZW0ga2V5PXt4LmlkfSB7Li4ueH0gb25VcGRhdGU9e29uVXBkYXRlfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1zZ0lucHV0IiwiTXNnSXRlbSIsIlVzZXJJZHMiLCJnZXRSYW1kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsInJldmVyc2UiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsIngiXSwic291cmNlUm9vdCI6IiJ9