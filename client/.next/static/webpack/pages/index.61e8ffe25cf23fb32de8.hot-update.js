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


  var onUpdate = function onUpdate(text, id) {
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
    }); // 수정이 끝나면 실행

    doneEdit();
  }; // 수정이 완료됨을 알려주는 메서드 (editingId를 null로 바꿔서 isEditing을 false로 바꿈 => MsgInput이 사라지고 수정된 text로 대체)


  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return (
          /*#__PURE__*/
          // 여기서는 {...x}로 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
          // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
          // (수정이 시작되어 수정할 글의 id를 상위 state(editingId)로 가져오는 startEdit과, 렌더링 중인 item 중 editingId와 id가 일치하는 item이 있는지 여부를 알리는 isEditing은 따로 useState로 선언하지 x)
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
            onUpdate: onUpdate,
            startEdit: function startEdit() {
              return setEditingId(x.id);
            },
            isEditing: editingId === x.id
          }), x.id, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjFlOGZmZTI1Y2YyM2ZiMzJkZTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNRyxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQixFQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEVBQVgsQ0FBRCxDQUFiO0FBQUEsQ0FBeEIsRUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUQsQ0FBTCxDQUNsQkMsSUFEa0IsQ0FDYixDQURhLEVBRWxCQyxHQUZrQixDQUVkLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVc7QUFDZEMsSUFBQUEsRUFBRSxFQUFFRCxDQUFDLEdBQUcsQ0FETTtBQUVkRSxJQUFBQSxNQUFNLEVBQUVYLGVBQWUsRUFGVDtBQUdkWSxJQUFBQSxTQUFTLEVBQUUsZ0JBQWdCSCxDQUFDLEdBQUcsSUFBSixHQUFXO0FBQUc7QUFIM0I7QUFJZEksSUFBQUEsSUFBSSxZQUFLSixDQUFDLEdBQUcsQ0FBVDtBQUpVLEdBQVg7QUFBQSxDQUZjLEVBUWxCSyxPQVJrQixFQUFyQjtBQVFjO0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBQ0Esa0JBQXdCbkIsK0NBQVEsQ0FBQ1EsWUFBRCxDQUFoQztBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQUZvQixDQUdwQjs7O0FBQ0EsbUJBQWtDckIsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUEsTUFBT3NCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEIsaUJBSm9CLENBTXBCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDUCxJQUFELEVBQVU7QUFDekI7QUFDQSxRQUFNUSxNQUFNLEdBQUc7QUFDYjtBQUNBWCxNQUFBQSxFQUFFLEVBQUVNLElBQUksQ0FBQ00sTUFBTCxHQUFjLENBRkw7QUFHYlgsTUFBQUEsTUFBTSxFQUFFWCxlQUFlLEVBSFY7QUFJYlksTUFBQUEsU0FBUyxFQUFFVyxJQUFJLENBQUNDLEdBQUw7QUFBVztBQUpUO0FBS2JYLE1BQUFBLElBQUksWUFBS0csSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBbkIsY0FBd0JULElBQXhCO0FBTFMsS0FBZixDQUZ5QixDQVV6Qjs7QUFDQUksSUFBQUEsT0FBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSxjQUFXSyxNQUFYLDhJQUFzQkwsSUFBdEI7QUFBQSxLQUFELENBQVA7QUFDRCxHQVpELENBUG9CLENBcUJwQjs7O0FBQ0EsTUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1osSUFBRCxFQUFPSCxFQUFQLEVBQWM7QUFDN0I7QUFDQU8sSUFBQUEsT0FBTyxDQUFDLFVBQUNELElBQUQsRUFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxVQUFNVSxXQUFXLEdBQUdWLElBQUksQ0FBQ1csU0FBTCxDQUFlLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNsQixFQUFKLEtBQVdBLEVBQXBCO0FBQUEsT0FBZixDQUFwQixDQUpnQixDQU1oQjs7QUFDQSxVQUFJZ0IsV0FBVyxHQUFHLENBQWxCLEVBQXFCLE9BQU9WLElBQVAsQ0FQTCxDQVNoQjtBQUNBOztBQUNBLFVBQU1hLE9BQU8sR0FBRyxxSUFBSWIsSUFBUCxDQUFiLENBWGdCLENBYWhCO0FBQ0E7OztBQUNBYSxNQUFBQSxPQUFPLENBQUNDLE1BQVIsQ0FBZUosV0FBZixFQUE0QixDQUE1QixrQ0FDS1YsSUFBSSxDQUFDVSxXQUFELENBRFQ7QUFFRWIsUUFBQUEsSUFBSSxFQUFFQTtBQUZSLFVBZmdCLENBb0JoQjs7QUFDQSxhQUFPZ0IsT0FBUDtBQUNELEtBdEJNLENBQVAsQ0FGNkIsQ0EwQjdCOztBQUNBRSxJQUFBQSxRQUFRO0FBQ1QsR0E1QkQsQ0F0Qm9CLENBb0RwQjs7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNWixZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLEdBQWpCOztBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR0osSUFBSSxDQUFDVCxHQUFMLENBQVMsVUFBQ3lCLENBQUQ7QUFBQTtBQUFBO0FBQ1I7QUFDQTtBQUNBO0FBQ0Esd0VBQUMsNkNBQUQsa0NBQXdCQSxDQUF4QjtBQUEyQixvQkFBUSxFQUFFUCxRQUFyQztBQUErQyxxQkFBUyxFQUFFO0FBQUEscUJBQU1OLFlBQVksQ0FBQ2EsQ0FBQyxDQUFDdEIsRUFBSCxDQUFsQjtBQUFBLGFBQTFEO0FBQW9GLHFCQUFTLEVBQUVRLFNBQVMsS0FBS2MsQ0FBQyxDQUFDdEI7QUFBL0csY0FBY3NCLENBQUMsQ0FBQ3RCLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQWFELENBcEVEOztHQUFNSzs7S0FBQUE7QUFzRU4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQg67Cw7Je0XHJcbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCAo65GYIOykkeyXkCDtlZjrgpgpIOuenOuNpO2VmOqyjCDrhKPquLBcclxuLy8gVXNlcklkcyDrsLDsl7TsnZgg7J24642x7Iqk7JeQIOuenOuNpCDtlajsiJgg64Sj6riwXHJcbi8vIDLqsJzrv5Dsnbwg65WM64qUIE1hdGgucm91bmTrp4wg7LKY66asIC0+IDAg65iQ64qUIDFcclxuY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcclxuXHJcbi8vIDPqsJwg7J207IOB7J28IOuVjOuKlCBNYXRoLnJhbmRvbSgpIOuSpOyXkCDrsLDsl7TsnZgg6ri47J20IOqzse2VmOq4sFxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIFVzZXJJZHMubGVuZ3RoKV07XHJcblxyXG4vLyBBcnJheSg1MCk6IOqzteqwhOydtCA1MOqwnOyduCDrsLDsl7Qg7IOd7ISxXHJcbi8vIC5maWxsKDApOiA1MOqwnOydmCDqs7XqsITsnYQg7JWE66y0IOqwkuycvOuhnOuCmCDssYTsm4BcclxuLy8gLm1hcCh2YWwsIGkpOiBtYXDsnLzroZwg6rq864K064qUIHZhbOydtCDspJHsmpTtlZjsp4Ag7JWK7Jy866m0ICdfJ+uhnCDsspjrpqwgKD0+IGnrp4wg7IKs7Jqp7ZWY66Ck64qUIOqyveyasClcclxuLy8gKCkocmV0dXJuKSDslYjsl5Age30gKD0+IOqwneyytCDrsJjtmZgpXHJcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4gIC5maWxsKDApXHJcbiAgLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiBpICsgMSxcclxuICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwIC8qIGnrpbwgbWlsbGlzZWNvbmTroZwg67CU6r68IOuSpCDri6Tsi5wgNjDsnYQg6rOx7ZWoIC0+ICcx67aEJyDri6jsnITroZwg7Kad6rCAICovLFxyXG4gICAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGAsXHJcbiAgfSkpXHJcbiAgLnJldmVyc2UoKTsgLyog7LWc6re8IOyInOyEnOuhnCDssI3tnojrj4TroZ0gKFNOUykgICovXHJcblxyXG4vLyBjb25zdCBtc2dzID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAxLFxyXG4vLyAgICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuLy8gICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyAvKiDstJ0gMTPsnpDrpqwg7ZWE7JqUICovLFxyXG4vLyAgICAgdGV4dCwgJzEgbW9jayB0ZXh0J1xyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIC8vIGlucHV06rCS7J2EIOygnOy2nO2VmOuptCDsg4jquIAg7IOd7ISxIOuYkOuKlCDquLDsobQg6riAIOyImOyglSA9PiDstIjquLDqsJLsnbgg6ri47J20IDUw7J2YIOuMk+q4gOuwsOyXtOydgCAn67OA7ZWY64qUJyDsmpTshozqsIAg65CoID0+IHN0YXRl66GcIOyEoOyWuFxyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncyk7XHJcbiAgLy8g7IiY7KCV7ZWgIOq4gCBpZCAoJ+uzgOuPmScg6rCA64ql7ZWY66+A66GcIHN0YXRl66GcIOyEoOyWuClcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIOyDiOq4gCDsg53shLHtlZjripQg7ZWo7IiYXHJcbiAgY29uc3Qgb25DcmVhdGUgPSAodGV4dCkgPT4ge1xyXG4gICAgLy8g7IOI6riAIOqwneyytOulvCDqtazshLFcclxuICAgIGNvbnN0IG5ld01zZyA9IHtcclxuICAgICAgLy8g7J207KCc64qUIG1hcOycvOuhnCDslrvsnYAgaWTqsIAg7JWE64uMIOq4sOyhtCDrjJPquIDrsLDsl7TsnZgg6ri47J2066W8IOydtOyaqSAoPT4ga2V57JmAIHRleHQg7JiG7JeQIOuCmO2DgOuCmOuKlCDsnbjrjbHsiqQpXHJcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSAvKiDtmITsnqwg64Kg7KecIOuwjyDsi5zqsIQgKi8sXHJcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOuMk+q4gOuwsOyXtOyXkCBzZXR0ZXIg7ZWo7IiY7JmAIHNwcmVhZCDsl7DsgrDsnpDrpbwg7J207Jqp7ZWY7JesIOyDiOq4gCDqsJ3ssrTrpbwg7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyImOygle2VmOuKlCDtlajsiJggKCoqIGlucHV06rCSIHRleHTsmYAg7ZWo6ruYIOyWtOuKkCDquIDsnYQg7IiY7KCV7ZWgIOqyg+yduOyngCDslYzroKTso7zripQgaWTrj4Qg7ZWE7JqUKVxyXG4gIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XHJcbiAgICAvLyBzZXR0ZXLsl5Ag6riw7KG0IOuMk+q4gOuwsOyXtChtc2dzKeydhCDrsJvslYTsmYDshJwg7KeE7ZaJXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIC8vIHRhcmdldEluZGV4IOq1rO2VmOq4sFxyXG4gICAgICAvLyDsiJjsoJXtlaAgSXRlbeydmCB0YXJnZXRJbmRleOulvCBmaW5kSW5kZXgo67Cw7Je066mU7ISc65OcKeuhnCDssL7snYxcclxuICAgICAgLy8gZmluZEluZGV4OiDrsLDsl7TsnYQg64+M66m07IScIO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3snZggJ+yduOuNseyKpCfrpbwg67CY7ZmYIChjZi4gZmlsdGVyOiDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCBpdGVt65Ok66eMIOqzqOudvCAn7IOIIOuwsOyXtCfroZwg67CY7ZmYKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgLy8gKOyYiOyZuOyymOumrCkg7LC+64qUIEluZGV46rCAIOyXhuycvOuptCgtMSkg6riw7KG0IOuwsOyXtCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiog7IiY7KCVIOynhO2Wie2VmOq4sFxyXG4gICAgICAvLyDquLDsobQg64yT6riA67Cw7Je07J2EIHNwcmVhZOuhnCDtjrzsuZwg65KkIOuLpOyLnCBbXeyXkCDrhKPslrQg7IOIIOuwsOyXtCDsg53shLEgKGNvcHkpXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcblxyXG4gICAgICAvLyDsg4gg67Cw7Je07JeQ7IScIHNwbGljZeulvCDsnbTsmqntlbQgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnChkZWxldGVDb3VudCnrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IOI66Gc7Jq0IGl0ZW0oM+2VrSnsnYQg64Sj7J2MXHJcbiAgICAgIC8vIOyDiOuhnOyatCBpdGVtOiB0YXJnZXRJbmRleOyXkCDsnojripQg6riw7KG0IOuCtOyaqeuTpOydgCDqt7jrjIDroZwg64Sj6rOgIHRleHTrp4wg7IOI6rG466GcIOq1kOyytFxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g7IiY7KCV65CcIOyDiCDrsLDsl7Qg67CY7ZmYICgtPiBzZXR0ZXLsl5Ag65Ok7Ja06rCAIG1zZ3PqsIAg7Ya17Ke466GcIOq1kOyytOuQqClcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDsiJjsoJXsnbQg64Gd64KY66m0IOyLpO2WiVxyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICAvLyDsiJjsoJXsnbQg7JmE66OM65Co7J2EIOyVjOugpOyjvOuKlCDrqZTshJzrk5wgKGVkaXRpbmdJZOulvCBudWxs66GcIOuwlOq/lOyEnCBpc0VkaXRpbmfsnYQgZmFsc2XroZwg67CU6r+IID0+IE1zZ0lucHV07J20IOyCrOudvOyngOqzoCDsiJjsoJXrkJwgdGV4dOuhnCDrjIDssrQpXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgLy8g7Jes6riw7ISc64qUIHsuLi54feuhnCDsoITrtoAg64Sj6rOgIE1zZ0l0ZW3sl5DshJwg7JO4IOuVjOuKlCDsnbzrtoDrp4wg6rOo6528IOyCrOyaqSDqsIDriqVcclxuICAgICAgICAgIC8vIOyImOygleyXkCDtlYTsmpTtlZwgb25VcGRhdGUsIHN0YXJ0RWRpdCwgaXNFZGl0aW5n7J2EIOuvuOumrCDrhKPslrTspIxcclxuICAgICAgICAgIC8vICjsiJjsoJXsnbQg7Iuc7J6R65CY7Ja0IOyImOygle2VoCDquIDsnZggaWTrpbwg7IOB7JyEIHN0YXRlKGVkaXRpbmdJZCnroZwg6rCA7KC47Jik64qUIHN0YXJ0RWRpdOqzvCwg66CM642U66eBIOykkeyduCBpdGVtIOykkSBlZGl0aW5nSWTsmYAgaWTqsIAg7J287LmY7ZWY64qUIGl0ZW3snbQg7J6I64qU7KeAIOyXrOu2gOulvCDslYzrpqzripQgaXNFZGl0aW5n7J2AIOuUsOuhnCB1c2VTdGF0ZeuhnCDshKDslrjtlZjsp4AgeClcclxuICAgICAgICAgIDxNc2dJdGVtIGtleT17eC5pZH0gey4uLnh9IG9uVXBkYXRlPXtvblVwZGF0ZX0gc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1zZ0lucHV0IiwiTXNnSXRlbSIsIlVzZXJJZHMiLCJnZXRSYW1kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsInJldmVyc2UiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwieCJdLCJzb3VyY2VSb290IjoiIn0=