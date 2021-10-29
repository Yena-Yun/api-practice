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
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
// const getRamdomUserId = () => UserIds[Math.round(Math.random())];
// 3개 이상일 때는 Math.random() 뒤에 배열의 길이 곱하기
// const getRamdomUserId = () => UserIds[Math.round(Math.random() * UserIds.length)];
// // Array(50): 공간이 50개인 배열 생성
// // .fill(0): 50개의 공간을 아무 값으로나 채움
// // .map(val, i): map으로 꺼내는 val이 중요하지 않으면 '_'로 처리 (=> i만 사용하려는 경우)
// // ()(return) 안에 {} (=> 객체 반환)
// const originalMsgs = Array(50)
//   .fill(0)
//   .map((_, i) => ({
//     id: i + 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 + i * 1000 * 60 /* i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> '1분' 단위로 증가하며 시간이 찍힘 */,
//     text: `${i + 1} mock text`,
//   }))
//   .reverse(); /* 최근 순서로 찍히도록 (SNS)  */
// 만든 배열을 console에 JSON.stringify로 찍어서 json 파일에 복붙 가능
// console.log(originalMsgs);
// console.log(JSON.stringify(originalMsgs)); // 배열 하나에 객체 여러 개 = json 형태로 만들어줌

var MsgList = function MsgList() {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(),
      _useRouter$query$user = _useRouter.query.userId,
      userId = _useRouter$query$user === void 0 ? '' : _useRouter$query$user; // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값인 길이 50의 댓글배열은 '변하는' 요소가 됨 => state로 선언


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      msgs = _useState[0],
      setMsgs = _useState[1]; // 수정할 글 id ('변동' 가능하므로 state로 선언)


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1]; // 새글 생성하는 함수


  var onCreate = /*#__PURE__*/function () {
    var _ref = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(text) {
      var newMsg;
      return C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('post', '/messages', {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context.sent;

              if (newMsg) {
                _context.next = 5;
                break;
              }

              throw Error('Something is wrong');

            case 5:
              // // 새글 객체를 구성
              // const newMsg = {
              //   // 이제는 map으로 얻은 id가 아닌 기존 msgs 배열의 길이를 이용
              //   id: msgs.length + 1,
              //   userId: getRamdomUserId(),
              //   timestamp: Date.now() /* 현재 날짜 및 시간 */,
              //   text: `${msgs.length + 1} ${text}`,
              // };
              // msgs 배열에 setter 함수와 spread 연산자를 이용하여 새글 객체를 추가
              setMsgs(function (msgs) {
                return [newMsg].concat((0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs));
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onCreate(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // 글 수정하는 함수 (** input값 text와 함께 어느 글을 수정할 것인지 알려주는 id 필요)


  var onUpdate = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(text, id) {
      var newMsg;
      return C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('put', "/messages/".concat(id), {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context2.sent;

              if (newMsg) {
                _context2.next = 5;
                break;
              }

              throw Error('Something is wrong');

            case 5:
              // setter에 기존 msgs 배열을 받아와서 진행
              setMsgs(function (msgs) {
                // targetIndex 구하기
                // 수정할 Item의 targetIndex를 findIndex(배열메서드)로 찾음
                // findIndex: 배열을 돌면서 특정 조건을 만족하는 item의 '인덱스'를 반환 (cf. filter: 특정 조건을 만족하는 item들만 골라 '새 배열'로 반환)
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === id;
                }); // (예외처리) 찾는 Index가 없으면(-1) 기존 배열 그대로 반환

                if (targetIndex < 0) return msgs; // ** 수정 진행하기
                // 1. 기존 배열 복사: 기존 msgs 배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열 생성

                var newMsgs = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs); // 2. 복사한 배열로 수정: splice를 이용해 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 item(3항)을 넣음
                // (새로운 item - targetIndex에 있는 기존 내용들은 그대로 넣고 text만 새걸로 교체)
                // newMsgs.splice(targetIndex, 1, {
                //   ...msgs[targetIndex],
                //   text: text,
                // });
                // 서버에서 온 newMsg 데이터를 넣어줌


                newMsgs.splice(targetIndex, 1, newMsg); // 3. 수정된 새 배열 반환 (-> setter에 들어가 msgs 통째로 교체)

                return newMsgs;
              }); // 수정이 끝나면 실행 (editingId를 다시 null로 바꿈)

              doneEdit();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onUpdate(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var _onDelete = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(id) {
      var receivedId;
      return C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('delete', "/messages/".concat(id), {
                params: {
                  userId: userId
                }
              });

            case 2:
              receivedId = _context3.sent;
              console.log(typeof receivedId, typeof id);
              setMsgs(function (msgs) {
                // 삭제한 내용이 뷰에 반영이 안되는 경우 --> id의 type이 안 맞는 것일 수 있음 (콘솔로 비교하는 두 아이디를 출력해보고 한쪽을 다른 쪽에 맞춰준다)
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === String(receivedId);
                });
                if (targetIndex < 0) return msgs; // ** 삭제 진행 (수정에서 item 추가하는 부분만 없음)

                var newMsgs = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);

                newMsgs.splice(targetIndex, 1);
                return newMsgs;
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDelete(_x4) {
      return _ref3.apply(this, arguments);
    };
  }(); // 수정이 완료됨을 알려줌: editingId를 null로 바꿈 => isEditing이 false로 전환 => 기존에 있던 text를 대체하던 MsgInput 뷰가 사라지고 수정된 text로 다시 대체


  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };

  var getMessages = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
      var msgs;
      return C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('get', '/messages');

            case 2:
              msgs = _context4.sent;
              setMsgs(msgs);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getMessages() {
      return _ref4.apply(this, arguments);
    };
  }(); // 최초 페이지 로드 시에만 실행
  // useEffect 내에서는 async/await를 직접 호출하지 않아야 함 => await를 호출하는 부분을 함수로 따로 빼서 거기에 async도 붙여주기


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getMessages();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_6__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return (
          /*#__PURE__*/
          // {...x}로 객체의 각 key를 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
          // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
          // (수정 버튼이 눌리면 수정할 글의 id를 editingId에 설정하는 startEdit과, 렌더링 중인 item 중 editingId와 id가 일치하는 item이 있는지를 알려주는 isEditing은 따로 useState로 선언하지 않고 jsx에서 바로 처리)
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, x), {}, {
            onUpdate: onUpdate,
            startEdit: function startEdit() {
              return setEditingId(x.id);
            },
            isEditing: editingId === x.id,
            onDelete: function onDelete() {
              return _onDelete(x.id);
            }
            /* onDelete는 여기서 바로 실행 */
            ,
            myId: userId
          }), x.id, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 11
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "yP5C80UtWE9N8+DRHVJysV2BSmk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDlkYTEyNjI2MjZhMDVjNWE0YmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7Ozs7QUFDQSxJQUFNTSxPQUFPLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFoQixFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsbUJBRUlMLHNEQUFTLEVBRmI7QUFBQSx5Q0FDRU0sS0FERixDQUNXQyxNQURYO0FBQUEsTUFDV0EsTUFEWCxzQ0FDb0IsRUFEcEIseUJBRG9CLENBS3BCOzs7QUFDQSxrQkFBd0JULCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9VLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQU5vQixDQU9wQjs7O0FBQ0EsbUJBQWtDWCwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPWSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQVJvQixDQVVwQjs7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLHVSQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR01WLGlEQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRVUsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRTixnQkFBQUEsTUFBTSxFQUFOQTtBQUFSLGVBQXRCLENBSGI7O0FBQUE7QUFHVE8sY0FBQUEsTUFIUzs7QUFBQSxrQkFNVkEsTUFOVTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFNSUMsS0FBSyxDQUFDLG9CQUFELENBTlQ7O0FB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QUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFxQkQsQ0E5SEQ7O0dBQU1aO1VBR0FMOzs7S0FIQUs7QUFnSU4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJztcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCDrsLDsl7RcclxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUICjrkZgg7KSR7JeQIO2VmOuCmCkg656c642k7ZWY6rKMIOuEo+q4sFxyXG4vLyBVc2VySWRzIOuwsOyXtOydmCDsnbjrjbHsiqTsl5Ag656c642kIO2VqOyImCDrhKPquLBcclxuLy8gMuqwnOu/kOydvCDrlYzripQgTWF0aC5yb3VuZOunjCDsspjrpqwgLT4gMCDrmJDripQgMVxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG5cclxuLy8gM+qwnCDsnbTsg4Hsnbwg65WM64qUIE1hdGgucmFuZG9tKCkg65Kk7JeQIOuwsOyXtOydmCDquLjsnbQg6rOx7ZWY6riwXHJcbi8vIGNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogVXNlcklkcy5sZW5ndGgpXTtcclxuXHJcbi8vIC8vIEFycmF5KDUwKTog6rO16rCE7J20IDUw6rCc7J24IOuwsOyXtCDsg53shLFcclxuLy8gLy8gLmZpbGwoMCk6IDUw6rCc7J2YIOqzteqwhOydhCDslYTrrLQg6rCS7Jy866Gc64KYIOyxhOybgFxyXG4vLyAvLyAubWFwKHZhbCwgaSk6IG1hcOycvOuhnCDqurzrgrTripQgdmFs7J20IOykkeyalO2VmOyngCDslYrsnLzrqbQgJ18n66GcIOyymOumrCAoPT4gaeunjCDsgqzsmqntlZjroKTripQg6rK97JqwKVxyXG4vLyAvLyAoKShyZXR1cm4pIOyViOyXkCB7fSAoPT4g6rCd7LK0IOuwmO2ZmClcclxuLy8gY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbi8vICAgLmZpbGwoMClcclxuLy8gICAubWFwKChfLCBpKSA9PiAoe1xyXG4vLyAgICAgaWQ6IGkgKyAxLFxyXG4vLyAgICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuLy8gICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAgLyogaeulvCBtaWxsaXNlY29uZOuhnCDrsJTqvrwg65KkIOuLpOyLnCA2MOydhCDqs7HtlaggLT4gJzHrtoQnIOuLqOychOuhnCDspp3qsIDtlZjrqbAg7Iuc6rCE7J20IOywje2emCAqLyxcclxuLy8gICAgIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgLFxyXG4vLyAgIH0pKVxyXG4vLyAgIC5yZXZlcnNlKCk7IC8qIOy1nOq3vCDsiJzshJzroZwg7LCN7Z6I64+E66GdIChTTlMpICAqL1xyXG5cclxuLy8g66eM65OgIOuwsOyXtOydhCBjb25zb2xl7JeQIEpTT04uc3RyaW5naWZ566GcIOywjeyWtOyEnCBqc29uIO2MjOydvOyXkCDrs7Xrtpkg6rCA64qlXHJcbi8vIGNvbnNvbGUubG9nKG9yaWdpbmFsTXNncyk7XHJcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTXNncykpOyAvLyDrsLDsl7Qg7ZWY64KY7JeQIOqwneyytCDsl6zrn6wg6rCcID0ganNvbiDtmJXtg5zroZwg66eM65Ok7Ja07KSMXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBpbnB1dOqwkuydhCDsoJzstpztlZjrqbQg7IOI6riAIOyDneyEsSDrmJDripQg6riw7KG0IOq4gCDsiJjsoJUgPT4g7LSI6riw6rCS7J24IOq4uOydtCA1MOydmCDrjJPquIDrsLDsl7TsnYAgJ+uzgO2VmOuKlCcg7JqU7IaM6rCAIOuQqCA9PiBzdGF0ZeuhnCDshKDslrhcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8g7IiY7KCV7ZWgIOq4gCBpZCAoJ+uzgOuPmScg6rCA64ql7ZWY66+A66GcIHN0YXRl66GcIOyEoOyWuClcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIOyDiOq4gCDsg53shLHtlZjripQg7ZWo7IiYXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xyXG4gICAgLy8g7ISc67KE7JeQIOyekeyEseuQnCDsg4gg6riA7J2EIOuztOuDhFxyXG4gICAgLy8gdGV4dChpbnB1dCDsnoXroKXqsJIp6rCAIOuTpOyWtOyYpOuptCDso7zshozssL0gcXVlcnkoP3VzZXJJZD0nJynsl5Ag67aZ7J2AIHVzZXJJZChyb3ksIGpheSnsl5Ag65Sw6528IOq4gCDsg53shLEg7IucIOyekeyEseyekOqwgCDri6zrnbzsp5AgKOyYiDogdXJs7J20IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8/dXNlcklkPXJveeydvCDrlYwg64yT6riAIOyTsOuptCDsnpHshLHsnpDqsIAgcm9566GcIOucuCApXHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIC8vICjsmIjsmbjsspjrpqwpIOyekeyEseuQnCDrgrTsmqnsnbQg7JeG7Jy866m0IHRocm93IGVycm9yXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZycpO1xyXG5cclxuICAgIC8vIC8vIOyDiOq4gCDqsJ3ssrTrpbwg6rWs7ISxXHJcbiAgICAvLyBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAvLyAgIC8vIOydtOygnOuKlCBtYXDsnLzroZwg7Ja77J2AIGlk6rCAIOyVhOuLjCDquLDsobQgbXNncyDrsLDsl7TsnZgg6ri47J2066W8IOydtOyaqVxyXG4gICAgLy8gICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgLy8gICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgLy8gICB0aW1lc3RhbXA6IERhdGUubm93KCkgLyog7ZiE7J6sIOuCoOynnCDrsI8g7Iuc6rCEICovLFxyXG4gICAgLy8gICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBtc2dzIOuwsOyXtOyXkCBzZXR0ZXIg7ZWo7IiY7JmAIHNwcmVhZCDsl7DsgrDsnpDrpbwg7J207Jqp7ZWY7JesIOyDiOq4gCDqsJ3ssrTrpbwg7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyImOygle2VmOuKlCDtlajsiJggKCoqIGlucHV06rCSIHRleHTsmYAg7ZWo6ruYIOyWtOuKkCDquIDsnYQg7IiY7KCV7ZWgIOqyg+yduOyngCDslYzroKTso7zripQgaWQg7ZWE7JqUKVxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICAvLyDshJzrsoTrpbwg7Ya17ZW0IOyImOygleuQnCDsg4gg66mU7Iuc7KeA66GcIOq1kOyytChwdXQpXHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcblxyXG4gICAgLy8gKOyYiOyZuOyymOumrCkg7ISc67KE7JeQIOuztOuCvCDrqZTsi5zsp4DqsIAg7JeG64uk66m0IHRocm93IGVycm9yXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZycpO1xyXG5cclxuICAgIC8vIHNldHRlcuyXkCDquLDsobQgbXNncyDrsLDsl7TsnYQg67Cb7JWE7JmA7IScIOynhO2WiVxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICAvLyB0YXJnZXRJbmRleCDqtaztlZjquLBcclxuICAgICAgLy8g7IiY7KCV7ZWgIEl0ZW3snZggdGFyZ2V0SW5kZXjrpbwgZmluZEluZGV4KOuwsOyXtOuplOyEnOuTnCnroZwg7LC+7J2MXHJcbiAgICAgIC8vIGZpbmRJbmRleDog67Cw7Je07J2EIOuPjOuptOyEnCDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCBpdGVt7J2YICfsnbjrjbHsiqQn66W8IOuwmO2ZmCAoY2YuIGZpbHRlcjog7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeuTpOunjCDqs6jrnbwgJ+yDiCDrsLDsl7Qn66GcIOuwmO2ZmClcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuXHJcbiAgICAgIC8vICjsmIjsmbjsspjrpqwpIOywvuuKlCBJbmRleOqwgCDsl4bsnLzrqbQoLTEpIOq4sOyhtCDrsLDsl7Qg6re464yA66GcIOuwmO2ZmFxyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuXHJcbiAgICAgIC8vICoqIOyImOyglSDsp4TtlontlZjquLBcclxuICAgICAgLy8gMS4g6riw7KG0IOuwsOyXtCDrs7Xsgqw6IOq4sOyhtCBtc2dzIOuwsOyXtOydhCBzcHJlYWTroZwg7Y687LmcIOuSpCDri6Tsi5wgW13sl5Ag64Sj7Ja0IOyDiCDrsLDsl7Qg7IOd7ISxXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcblxyXG4gICAgICAvLyAyLiDrs7XsgqztlZwg67Cw7Je066GcIOyImOyglTogc3BsaWNl66W8IOydtOyaqe2VtCB0YXJnZXRJbmRleOu2gO2EsCAx6rCcKGRlbGV0ZUNvdW50KeulvCDsp4DsmrDqs6Ag6re4IOyekOumrOyXkCDsg4jroZzsmrQgaXRlbSgz7ZWtKeydhCDrhKPsnYxcclxuICAgICAgLy8gKOyDiOuhnOyatCBpdGVtIC0gdGFyZ2V0SW5kZXjsl5Ag7J6I64qUIOq4sOyhtCDrgrTsmqnrk6TsnYAg6re464yA66GcIOuEo+qzoCB0ZXh066eMIOyDiOqxuOuhnCDqtZDssrQpXHJcbiAgICAgIC8vIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XHJcbiAgICAgIC8vICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgIC8vICAgdGV4dDogdGV4dCxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAvLyDshJzrsoTsl5DshJwg7JioIG5ld01zZyDrjbDsnbTthLDrpbwg64Sj7Ja07KSMXHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xyXG5cclxuICAgICAgLy8gMy4g7IiY7KCV65CcIOyDiCDrsLDsl7Qg67CY7ZmYICgtPiBzZXR0ZXLsl5Ag65Ok7Ja06rCAIG1zZ3Mg7Ya17Ke466GcIOq1kOyytClcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDsiJjsoJXsnbQg64Gd64KY66m0IOyLpO2WiSAoZWRpdGluZ0lk66W8IOuLpOyLnCBudWxs66GcIOuwlOq/iClcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIC8vIOyCreygnO2VmOuKlCDquIDsnZggaWQg7Jm47JeQIO2VtOuLuSDquIDsnZggJ3VzZXJJZCfrj4Qg7ISc67KE7JeQIOuztOuCtOyVvCDtlaggPT4g7J2065WMICdwYXJhbXMn66GcIOuztOuCtOqzoCDrsJvripQg7Kq97JeQ7ISc64qUIHF1ZXJ566GcIOuwm+ydjFxyXG4gICAgLy8geyBwYXJhbXM6IHsgdXNlcklkIH0gfTogdXJsIOuSpOyXkCA/IHVzZXJJZCA9IHJveSDrnbzqs6Ag65Ok7Ja06rCA64qUIOu2gOu2hFxyXG4gICAgLy8gcGFyYW1zOiB7IHVzZXJJZCB966W8IOu5vOqzoCBgL21lc3NhZ2VzLyR7aWR9P3VzZXJJZD17dXNlcklkfWDrnbzqs6Ag67O064K064+EIOuPmeydvFxyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZWNlaXZlZElkLCB0eXBlb2YgaWQpO1xyXG5cclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8g7IKt7KCc7ZWcIOuCtOyaqeydtCDrt7Dsl5Ag67CY7JiB7J20IOyViOuQmOuKlCDqsr3smrAgLS0+IGlk7J2YIHR5cGXsnbQg7JWIIOunnuuKlCDqsoPsnbwg7IiYIOyeiOydjCAo7L2Y7IaU66GcIOu5hOq1kO2VmOuKlCDrkZAg7JWE7J2065SU66W8IOy2nOugpe2VtOuztOqzoCDtlZzsqr3snYQg64uk66W4IOyqveyXkCDrp57strDspIDri6QpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBTdHJpbmcocmVjZWl2ZWRJZCkpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuXHJcbiAgICAgIC8vICoqIOyCreygnCDsp4TtlokgKOyImOygleyXkOyEnCBpdGVtIOy2lOqwgO2VmOuKlCDrtoDrtoTrp4wg7JeG7J2MKVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7IiY7KCV7J20IOyZhOujjOuQqOydhCDslYzroKTspIw6IGVkaXRpbmdJZOulvCBudWxs66GcIOuwlOq/iCA9PiBpc0VkaXRpbmfsnbQgZmFsc2XroZwg7KCE7ZmYID0+IOq4sOyhtOyXkCDsnojrjZggdGV4dOulvCDrjIDssrTtlZjrjZggTXNnSW5wdXQg67ew6rCAIOyCrOudvOyngOqzoCDsiJjsoJXrkJwgdGV4dOuhnCDri6Tsi5wg64yA7LK0XHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnKTtcclxuICAgIHNldE1zZ3MobXNncyk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7LWc7LSIIO2OmOydtOyngCDroZzrk5wg7Iuc7JeQ66eMIOyLpO2WiVxyXG4gIC8vIHVzZUVmZmVjdCDrgrTsl5DshJzripQgYXN5bmMvYXdhaXTrpbwg7KeB7KCRIO2YuOy2nO2VmOyngCDslYrslYTslbwg7ZWoID0+IGF3YWl066W8IO2YuOy2nO2VmOuKlCDrtoDrtoTsnYQg7ZWo7IiY66GcIOuUsOuhnCDrubzshJwg6rGw6riw7JeQIGFzeW5j64+EIOu2meyXrOyjvOq4sFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRNZXNzYWdlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdtZXNzYWdlcyc+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAvLyB7Li4ueH3roZwg6rCd7LK07J2YIOqwgSBrZXnrpbwg7KCE67aAIOuEo+qzoCBNc2dJdGVt7JeQ7IScIOyTuCDrlYzripQg7J2867aA66eMIOqzqOudvCDsgqzsmqkg6rCA64qlXHJcbiAgICAgICAgICAvLyDsiJjsoJXsl5Ag7ZWE7JqU7ZWcIG9uVXBkYXRlLCBzdGFydEVkaXQsIGlzRWRpdGluZ+ydhCDrr7jrpqwg64Sj7Ja07KSMXHJcbiAgICAgICAgICAvLyAo7IiY7KCVIOuyhO2KvOydtCDriIzrpqzrqbQg7IiY7KCV7ZWgIOq4gOydmCBpZOulvCBlZGl0aW5nSWTsl5Ag7ISk7KCV7ZWY64qUIHN0YXJ0RWRpdOqzvCwg66CM642U66eBIOykkeyduCBpdGVtIOykkSBlZGl0aW5nSWTsmYAgaWTqsIAg7J287LmY7ZWY64qUIGl0ZW3snbQg7J6I64qU7KeA66W8IOyVjOugpOyjvOuKlCBpc0VkaXRpbmfsnYAg65Sw66GcIHVzZVN0YXRl66GcIOyEoOyWuO2VmOyngCDslYrqs6AganN47JeQ7IScIOuwlOuhnCDsspjrpqwpXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSAvKiBvbkRlbGV0ZeuKlCDsl6zquLDshJwg67CU66GcIOyLpO2WiSAqL1xyXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk1zZ0lucHV0IiwiTXNnSXRlbSIsImZldGNoZXIiLCJVc2VySWRzIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicGFyYW1zIiwicmVjZWl2ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJTdHJpbmciLCJnZXRNZXNzYWdlcyIsIm1hcCIsIngiXSwic291cmNlUm9vdCI6IiJ9