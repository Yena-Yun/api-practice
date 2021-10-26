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

  // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값인 길이 50의 댓글배열은 '변하는' 요소가 됨 => state로 선언
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(originalMsgs),
      msgs = _useState[0],
      setMsgs = _useState[1]; // 수정할 글 id ('변동' 가능하므로 state로 선언)


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
  }; // 글 수정하는 함수 (** input값 text와 함께 어느 글을 수정할 것인지 알려주는 id도 필요)


  var onUpdate = function onUpdate(id, text) {
    // setter에 기존 댓글배열(msgs)을 받아와서 진행
    setMsgs(function (msgs) {
      // targetIndex 구하기
      // 수정할 Item의 targetIndex를 findIndex(배열메서드)로 찾음
      // findIndex: 배열을 돌면서 특정 조건을 만족하는 item의 '인덱스'를 반환 (cf. filter: 특정 조건을 만족하는 item들만 골라 '새 배열'로 반환)
      var targetIndex = msgs.findIndex(function (msg) {
        return msg.id === id;
      }); // (예외처리) 찾는 Index가 없으면(-1) 기존 배열 그대로 반환

      if (targetIndex < 0) return msgs; // ** 수정 진행하기
      // 기존 댓글배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열 생성 (copy)

      var newMsgs = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs); // 새 배열에서 splice를 이용해 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 item(3항)을 넣음
      // 새로운 item: targetIndex에 있는 기존 내용들은 그대로 넣고 text만 새걸로 교체


      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text: text
      })); // 수정된 새 배열 반환 (-> setter에 들어가 msgs가 통째로 교체됨)

      return newMsgs;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return (
          /*#__PURE__*/
          // 여기서는 {...x}로 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
          // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
            onUpdate: onUpdate,
            startEdit: function startEdit() {
              return setEditingId(x.id);
            },
            isEditing: editingId === x.id
          }), x.id, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGZiMjMzZDllNTAxODU4YjA0MmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNRyxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQixFQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEIsRUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUNsQkMsSUFEa0IsQ0FDYixDQURhLEVBRWxCQyxHQUZrQixDQUVkLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDZEMsSUFBQUEsRUFBRSxFQUFFRCxDQUFDLEdBQUcsQ0FETTtBQUVkRSxJQUFBQSxNQUFNLEVBQUVYLGVBQWUsRUFGVDtBQUdkWSxJQUFBQSxTQUFTLEVBQUUsZ0JBQWdCSCxDQUFDLEdBQUcsSUFBSixHQUFXO0FBQUc7QUFIM0I7QUFJZEksSUFBQUEsSUFBSSxZQUFLSixDQUFDLEdBQUcsQ0FBVDtBQUpVLEdBQVg7QUFBQSxDQUZjLEVBUWxCSyxPQVJrQixFQUFyQjtBQVFjO0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBQ0Esa0JBQXdCbkIsK0NBQVEsQ0FBQ1EsWUFBRCxDQUFoQztBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQUZvQixDQUdwQjs7O0FBQ0EsbUJBQWtDckIsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT3NCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEIsaUJBSm9CLENBTXBCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDUCxJQUFELEVBQVU7QUFDekI7QUFDQSxRQUFNUSxNQUFNLEdBQUc7QUFDYjtBQUNBWCxNQUFBQSxFQUFFLEVBQUVNLElBQUksQ0FBQ00sTUFBTCxHQUFjLENBRkw7QUFHYlgsTUFBQUEsTUFBTSxFQUFFWCxlQUFlLEVBSFY7QUFJYlksTUFBQUEsU0FBUyxFQUFFVyxJQUFJLENBQUNDLEdBQUw7QUFBVztBQUpUO0FBS2JYLE1BQUFBLElBQUksWUFBS0csSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBbkIsY0FBd0JULElBQXhCO0FBTFMsS0FBZixDQUZ5QixDQVV6Qjs7QUFDQUksSUFBQUEsT0FBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSxjQUFXSyxNQUFYLDhJQUFzQkwsSUFBdEI7QUFBQSxLQUFELENBQVA7QUFDRCxHQVpELENBUG9CLENBcUJwQjs7O0FBQ0EsTUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2YsRUFBRCxFQUFLRyxJQUFMLEVBQWM7QUFDN0I7QUFDQUksSUFBQUEsT0FBTyxDQUFDLFVBQUNELElBQUQsRUFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxVQUFNVSxXQUFXLEdBQUdWLElBQUksQ0FBQ1csU0FBTCxDQUFlLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNsQixFQUFKLEtBQVdBLEVBQXBCO0FBQUEsT0FBZixDQUFwQixDQUpnQixDQU1oQjs7QUFDQSxVQUFJZ0IsV0FBVyxHQUFHLENBQWxCLEVBQXFCLE9BQU9WLElBQVAsQ0FQTCxDQVNoQjtBQUNBOztBQUNBLFVBQU1hLE9BQU8sR0FBRyxxSUFBSWIsSUFBUCxDQUFiLENBWGdCLENBYWhCO0FBQ0E7OztBQUNBYSxNQUFBQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUosV0FBZixFQUE0QixDQUE1QixrQ0FDS1YsSUFBSSxDQUFDVSxXQUFELENBRFQ7QUFFRWIsUUFBQUEsSUFBSSxFQUFFQTtBQUZSLFVBZmdCLENBb0JoQjs7QUFDQSxhQUFPZ0IsT0FBUDtBQUNELEtBdEJNLENBQVA7QUF1QkQsR0F6QkQ7O0FBMkJBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVUO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR0osSUFBSSxDQUFDVCxHQUFMLENBQVMsVUFBQ3dCLENBQUQ7QUFBQTtBQUFBO0FBQ1I7QUFDQTtBQUNBLHdFQUFDLDZDQUFELGtDQUF3QkEsQ0FBeEI7QUFBMkIsb0JBQVEsRUFBRU4sUUFBckM7QUFBK0MscUJBQVMsRUFBRTtBQUFBLHFCQUFNTixZQUFZLENBQUNZLENBQUMsQ0FBQ3JCLEVBQUgsQ0FBbEI7QUFBQSxhQUExRDtBQUFvRixxQkFBUyxFQUFFUSxTQUFTLEtBQUthLENBQUMsQ0FBQ3JCO0FBQS9HLGNBQWNxQixDQUFDLENBQUNyQixFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFZRCxDQTdERDs7R0FBTUs7O0tBQUFBO0FBK0ROLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUIOuwsOyXtFxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J107XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQgKOuRmCDspJHsl5Ag7ZWY64KYKSDrnpzrjaTtlZjqsowg64Sj6riwXHJcbi8vIFVzZXJJZHMg67Cw7Je07J2YIOyduOuNseyKpOyXkCDrnpzrjaQg7ZWo7IiYIOuEo+q4sFxyXG4vLyAy6rCc67+Q7J28IOuVjOuKlCBNYXRoLnJvdW5k66eMIOyymOumrCAtPiAwIOuYkOuKlCAxXHJcbmNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XHJcblxyXG4vLyAz6rCcIOydtOyDgeydvCDrlYzripQgTWF0aC5yYW5kb20oKSDrkqTsl5Ag67Cw7Je07J2YIOq4uOydtCDqs7HtlZjquLBcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBVc2VySWRzLmxlbmd0aCldO1xyXG5cclxuLy8gQXJyYXkoNTApOiDqs7XqsITsnbQgNTDqsJzsnbgg67Cw7Je0IOyDneyEsVxyXG4vLyAuZmlsbCgwKTogNTDqsJzsnZgg6rO16rCE7J2EIOyVhOustCDqsJLsnLzroZzrgpgg7LGE7JuAXHJcbi8vIC5tYXAodmFsLCBpKTogbWFw7Jy866GcIOq6vOuCtOuKlCB2YWzsnbQg7KSR7JqU7ZWY7KeAIOyViuycvOuptCAnXyfroZwg7LKY66asICg9PiBp66eMIOyCrOyaqe2VmOugpOuKlCDqsr3smrApXHJcbi8vICgpKHJldHVybikg7JWI7JeQIHt9ICg9PiDqsJ3ssrQg67CY7ZmYKVxyXG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcclxuICAuZmlsbCgwKVxyXG4gIC5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBpZDogaSArIDEsXHJcbiAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCAvKiBp66W8IG1pbGxpc2Vjb25k66GcIOuwlOq+vCDrkqQg64uk7IucIDYw7J2EIOqzse2VqCAtPiAnMeu2hCcg64uo7JyE66GcIOymneqwgCAqLyxcclxuICAgIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgLFxyXG4gIH0pKVxyXG4gIC5yZXZlcnNlKCk7IC8qIOy1nOq3vCDsiJzshJzroZwg7LCN7Z6I64+E66GdIChTTlMpICAqL1xyXG5cclxuLy8gY29uc3QgbXNncyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpZDogMSxcclxuLy8gICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgLyog7LSdIDEz7J6Q66asIO2VhOyalCAqLyxcclxuLy8gICAgIHRleHQsICcxIG1vY2sgdGV4dCdcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAvLyBpbnB1dOqwkuydhCDsoJzstpztlZjrqbQg7IOI6riAIOyDneyEsSDrmJDripQg6riw7KG0IOq4gCDsiJjsoJUgPT4g7LSI6riw6rCS7J24IOq4uOydtCA1MOydmCDrjJPquIDrsLDsl7TsnYAgJ+uzgO2VmOuKlCcg7JqU7IaM6rCAIOuQqCA9PiBzdGF0ZeuhnCDshKDslrhcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xyXG4gIC8vIOyImOygle2VoCDquIAgaWQgKCfrs4Drj5knIOqwgOuKpe2VmOuvgOuhnCBzdGF0ZeuhnCDshKDslrgpXHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyDsg4jquIAg7IOd7ISx7ZWY64qUIO2VqOyImFxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcclxuICAgIC8vIOyDiOq4gCDqsJ3ssrTrpbwg6rWs7ISxXHJcbiAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgIC8vIOydtOygnOuKlCBtYXDsnLzroZwg7Ja77J2AIGlk6rCAIOyVhOuLjCDquLDsobQg64yT6riA67Cw7Je07J2YIOq4uOydtOulvCDsnbTsmqkgKD0+IGtleeyZgCB0ZXh0IOyYhuyXkCDrgpjtg4DrgpjripQg7J24642x7IqkKVxyXG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCkgLyog7ZiE7J6sIOuCoOynnCDrsI8g7Iuc6rCEICovLFxyXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDrjJPquIDrsLDsl7Tsl5Agc2V0dGVyIO2VqOyImOyZgCBzcHJlYWQg7Jew7IKw7J6Q66W8IOydtOyaqe2VmOyXrCDsg4jquIAg6rCd7LK066W8IOy2lOqwgFxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIC8vIOq4gCDsiJjsoJXtlZjripQg7ZWo7IiYICgqKiBpbnB1dOqwkiB0ZXh07JmAIO2VqOq7mCDslrTripAg6riA7J2EIOyImOygle2VoCDqsoPsnbjsp4Ag7JWM66Ck7KO864qUIGlk64+EIO2VhOyalClcclxuICBjb25zdCBvblVwZGF0ZSA9IChpZCwgdGV4dCkgPT4ge1xyXG4gICAgLy8gc2V0dGVy7JeQIOq4sOyhtCDrjJPquIDrsLDsl7QobXNncynsnYQg67Cb7JWE7JmA7IScIOynhO2WiVxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICAvLyB0YXJnZXRJbmRleCDqtaztlZjquLBcclxuICAgICAgLy8g7IiY7KCV7ZWgIEl0ZW3snZggdGFyZ2V0SW5kZXjrpbwgZmluZEluZGV4KOuwsOyXtOuplOyEnOuTnCnroZwg7LC+7J2MXHJcbiAgICAgIC8vIGZpbmRJbmRleDog67Cw7Je07J2EIOuPjOuptOyEnCDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCBpdGVt7J2YICfsnbjrjbHsiqQn66W8IOuwmO2ZmCAoY2YuIGZpbHRlcjog7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeuTpOunjCDqs6jrnbwgJ+yDiCDrsLDsl7Qn66GcIOuwmO2ZmClcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuXHJcbiAgICAgIC8vICjsmIjsmbjsspjrpqwpIOywvuuKlCBJbmRleOqwgCDsl4bsnLzrqbQoLTEpIOq4sOyhtCDrsLDsl7Qg6re464yA66GcIOuwmO2ZmFxyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuXHJcbiAgICAgIC8vICoqIOyImOyglSDsp4TtlontlZjquLBcclxuICAgICAgLy8g6riw7KG0IOuMk+q4gOuwsOyXtOydhCBzcHJlYWTroZwg7Y687LmcIOuSpCDri6Tsi5wgW13sl5Ag64Sj7Ja0IOyDiCDrsLDsl7Qg7IOd7ISxIChjb3B5KVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG5cclxuICAgICAgLy8g7IOIIOuwsOyXtOyXkOyEnCBzcGxpY2Xrpbwg7J207Jqp7ZW0IHRhcmdldEluZGV467aA7YSwIDHqsJwoZGVsZXRlQ291bnQp66W8IOyngOyasOqzoCDqt7gg7J6Q66as7JeQIOyDiOuhnOyatCBpdGVtKDPtla0p7J2EIOuEo+ydjFxyXG4gICAgICAvLyDsg4jroZzsmrQgaXRlbTogdGFyZ2V0SW5kZXjsl5Ag7J6I64qUIOq4sOyhtCDrgrTsmqnrk6TsnYAg6re464yA66GcIOuEo+qzoCB0ZXh066eMIOyDiOqxuOuhnCDqtZDssrRcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcclxuICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOyImOygleuQnCDsg4gg67Cw7Je0IOuwmO2ZmCAoLT4gc2V0dGVy7JeQIOuTpOyWtOqwgCBtc2dz6rCAIO2GteynuOuhnCDqtZDssrTrkKgpXHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdtZXNzYWdlcyc+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAvLyDsl6zquLDshJzripQgey4uLnh966GcIOyghOu2gCDrhKPqs6AgTXNnSXRlbeyXkOyEnCDsk7gg65WM64qUIOydvOu2gOunjCDqs6jrnbwg7IKs7JqpIOqwgOuKpVxyXG4gICAgICAgICAgLy8g7IiY7KCV7JeQIO2VhOyalO2VnCBvblVwZGF0ZSwgc3RhcnRFZGl0LCBpc0VkaXRpbmfsnYQg66+466asIOuEo+yWtOykjFxyXG4gICAgICAgICAgPE1zZ0l0ZW0ga2V5PXt4LmlkfSB7Li4ueH0gb25VcGRhdGU9e29uVXBkYXRlfSBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX0gaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXNnSW5wdXQiLCJNc2dJdGVtIiwiVXNlcklkcyIsImdldFJhbWRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwicmV2ZXJzZSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwieCJdLCJzb3VyY2VSb290IjoiIn0=