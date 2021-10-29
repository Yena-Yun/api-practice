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
// const UserIds = ['roy', 'jay'];
// 유저아이디 (둘 중에 하나) 랜덤하게 넣기
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
              console.log(typeof receivedId, typeof id); // number, string (=> messages.json에서 현재 id가 문자열로 되어있어서)

              setMsgs(function (msgs) {
                // 삭제한 내용이 뷰에 반영이 안되는 경우 --> id의 type이 안 맞는 것일 수 있음 (콘솔로 두 아이디를 출력해보고 한쪽을 다른 쪽에 맞춰준다)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTUxZGIyOTgwOWU4ODZkZGVjMzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsbUJBRUlKLHNEQUFTLEVBRmI7QUFBQSx5Q0FDRUssS0FERixDQUNXQyxNQURYO0FBQUEsTUFDV0EsTUFEWCxzQ0FDb0IsRUFEcEIseUJBRG9CLENBS3BCOzs7QUFDQSxrQkFBd0JSLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9TLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQU5vQixDQU9wQjs7O0FBQ0EsbUJBQWtDViwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPVyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQVJvQixDQVVwQjs7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLHVSQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR01ULGlEQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRVMsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRTixnQkFBQUEsTUFBTSxFQUFOQTtBQUFSLGVBQXRCLENBSGI7O0FBQUE7QUFHVE8sY0FBQUEsTUFIUzs7QUFBQSxrQkFNVkEsTUFOVTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFNSUMsS0FBSyxDQUFDLG9CQUFELENBTlQ7O0FBQUE7QUFRZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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YUFGRjtBQUFBLGtCQURGO0FBcUJELENBOUhEOztHQUFNWjtVQUdBSjs7O0tBSEFJO0FBZ0lOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcic7XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQg67Cw7Je0XHJcbi8vIGNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCAo65GYIOykkeyXkCDtlZjrgpgpIOuenOuNpO2VmOqyjCDrhKPquLBcclxuLy8gVXNlcklkcyDrsLDsl7TsnZgg7J24642x7Iqk7JeQIOuenOuNpCDtlajsiJgg64Sj6riwXHJcbi8vIDLqsJzrv5Dsnbwg65WM64qUIE1hdGgucm91bmTrp4wg7LKY66asIC0+IDAg65iQ64qUIDFcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcclxuXHJcbi8vIDPqsJwg7J207IOB7J28IOuVjOuKlCBNYXRoLnJhbmRvbSgpIOuSpOyXkCDrsLDsl7TsnZgg6ri47J20IOqzse2VmOq4sFxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIFVzZXJJZHMubGVuZ3RoKV07XHJcblxyXG4vLyAvLyBBcnJheSg1MCk6IOqzteqwhOydtCA1MOqwnOyduCDrsLDsl7Qg7IOd7ISxXHJcbi8vIC8vIC5maWxsKDApOiA1MOqwnOydmCDqs7XqsITsnYQg7JWE66y0IOqwkuycvOuhnOuCmCDssYTsm4BcclxuLy8gLy8gLm1hcCh2YWwsIGkpOiBtYXDsnLzroZwg6rq864K064qUIHZhbOydtCDspJHsmpTtlZjsp4Ag7JWK7Jy866m0ICdfJ+uhnCDsspjrpqwgKD0+IGnrp4wg7IKs7Jqp7ZWY66Ck64qUIOqyveyasClcclxuLy8gLy8gKCkocmV0dXJuKSDslYjsl5Age30gKD0+IOqwneyytCDrsJjtmZgpXHJcbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4vLyAgIC5maWxsKDApXHJcbi8vICAgLm1hcCgoXywgaSkgPT4gKHtcclxuLy8gICAgIGlkOiBpICsgMSxcclxuLy8gICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwIC8qIGnrpbwgbWlsbGlzZWNvbmTroZwg67CU6r68IOuSpCDri6Tsi5wgNjDsnYQg6rOx7ZWoIC0+ICcx67aEJyDri6jsnITroZwg7Kad6rCA7ZWY66mwIOyLnOqwhOydtCDssI3tnpggKi8sXHJcbi8vICAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YCxcclxuLy8gICB9KSlcclxuLy8gICAucmV2ZXJzZSgpOyAvKiDstZzqt7wg7Iic7ISc66GcIOywje2eiOuPhOuhnSAoU05TKSAgKi9cclxuXHJcbi8vIOunjOuToCDrsLDsl7TsnYQgY29uc29sZeyXkCBKU09OLnN0cmluZ2lmeeuhnCDssI3slrTshJwganNvbiDtjIzsnbzsl5Ag67O167aZIOqwgOuKpVxyXG4vLyBjb25zb2xlLmxvZyhvcmlnaW5hbE1zZ3MpO1xyXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTsgLy8g67Cw7Je0IO2VmOuCmOyXkCDqsJ3ssrQg7Jes65+sIOqwnCA9IGpzb24g7ZiV7YOc66GcIOunjOuTpOyWtOykjFxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyB1c2VySWQgPSAnJyB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gaW5wdXTqsJLsnYQg7KCc7Lac7ZWY66m0IOyDiOq4gCDsg53shLEg65iQ64qUIOq4sOyhtCDquIAg7IiY7KCVID0+IOy0iOq4sOqwkuyduCDquLjsnbQgNTDsnZgg64yT6riA67Cw7Je07J2AICfrs4DtlZjripQnIOyalOyGjOqwgCDrkKggPT4gc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIOyImOygle2VoCDquIAgaWQgKCfrs4Drj5knIOqwgOuKpe2VmOuvgOuhnCBzdGF0ZeuhnCDshKDslrgpXHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyDsg4jquIAg7IOd7ISx7ZWY64qUIO2VqOyImFxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgKHRleHQpID0+IHtcclxuICAgIC8vIOyEnOuyhOyXkCDsnpHshLHrkJwg7IOIIOq4gOydhCDrs7Trg4RcclxuICAgIC8vIHRleHQoaW5wdXQg7J6F66Cl6rCSKeqwgCDrk6TslrTsmKTrqbQg7KO87IaM7LC9IHF1ZXJ5KD91c2VySWQ9Jycp7JeQIOu2meydgCB1c2VySWQocm95LCBqYXkp7JeQIOuUsOudvCDquIAg7IOd7ISxIOyLnCDsnpHshLHsnpDqsIAg64us65287KeQICjsmIg6IHVybOydtCBodHRwOi8vbG9jYWxob3N0OjMwMDAvP3VzZXJJZD1yb3nsnbwg65WMIOuMk+q4gCDsk7DrqbQg7J6R7ISx7J6Q6rCAIHJveeuhnCDrnLggKVxyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuXHJcbiAgICAvLyAo7JiI7Jm47LKY66asKSDsnpHshLHrkJwg64K07Jqp7J20IOyXhuycvOuptCB0aHJvdyBlcnJvclxyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdTb21ldGhpbmcgaXMgd3JvbmcnKTtcclxuXHJcbiAgICAvLyAvLyDsg4jquIAg6rCd7LK066W8IOq1rOyEsVxyXG4gICAgLy8gY29uc3QgbmV3TXNnID0ge1xyXG4gICAgLy8gICAvLyDsnbTsoJzripQgbWFw7Jy866GcIOyWu+ydgCBpZOqwgCDslYTri4wg6riw7KG0IG1zZ3Mg67Cw7Je07J2YIOq4uOydtOulvCDsnbTsmqlcclxuICAgIC8vICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgIC8vICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuICAgIC8vICAgdGltZXN0YW1wOiBEYXRlLm5vdygpIC8qIO2YhOyerCDrgqDsp5wg67CPIOyLnOqwhCAqLyxcclxuICAgIC8vICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gbXNncyDrsLDsl7Tsl5Agc2V0dGVyIO2VqOyImOyZgCBzcHJlYWQg7Jew7IKw7J6Q66W8IOydtOyaqe2VmOyXrCDsg4jquIAg6rCd7LK066W8IOy2lOqwgFxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIC8vIOq4gCDsiJjsoJXtlZjripQg7ZWo7IiYICgqKiBpbnB1dOqwkiB0ZXh07JmAIO2VqOq7mCDslrTripAg6riA7J2EIOyImOygle2VoCDqsoPsnbjsp4Ag7JWM66Ck7KO864qUIGlkIO2VhOyalClcclxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgLy8g7ISc67KE66W8IO2Gte2VtCDsiJjsoJXrkJwg7IOIIOuplOyLnOyngOuhnCDqtZDssrQocHV0KVxyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIC8vICjsmIjsmbjsspjrpqwpIOyEnOuyhOyXkCDrs7Trgrwg66mU7Iuc7KeA6rCAIOyXhuuLpOuptCB0aHJvdyBlcnJvclxyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdTb21ldGhpbmcgaXMgd3JvbmcnKTtcclxuXHJcbiAgICAvLyBzZXR0ZXLsl5Ag6riw7KG0IG1zZ3Mg67Cw7Je07J2EIOuwm+yVhOyZgOyEnCDsp4TtlolcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8gdGFyZ2V0SW5kZXgg6rWs7ZWY6riwXHJcbiAgICAgIC8vIOyImOygle2VoCBJdGVt7J2YIHRhcmdldEluZGV466W8IGZpbmRJbmRleCjrsLDsl7TrqZTshJzrk5wp66GcIOywvuydjFxyXG4gICAgICAvLyBmaW5kSW5kZXg6IOuwsOyXtOydhCDrj4zrqbTshJwg7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeydmCAn7J24642x7IqkJ+ulvCDrsJjtmZggKGNmLiBmaWx0ZXI6IO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3rk6Trp4wg6rOo6528ICfsg4gg67Cw7Je0J+uhnCDrsJjtmZgpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAvLyAo7JiI7Jm47LKY66asKSDssL7ripQgSW5kZXjqsIAg7JeG7Jy866m0KC0xKSDquLDsobQg67Cw7Je0IOq3uOuMgOuhnCDrsJjtmZhcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsiJjsoJUg7KeE7ZaJ7ZWY6riwXHJcbiAgICAgIC8vIDEuIOq4sOyhtCDrsLDsl7Qg67O17IKsOiDquLDsobQgbXNncyDrsLDsl7TsnYQgc3ByZWFk66GcIO2OvOy5nCDrkqQg64uk7IucIFtd7JeQIOuEo+yWtCDsg4gg67Cw7Je0IOyDneyEsVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG5cclxuICAgICAgLy8gMi4g67O17IKs7ZWcIOuwsOyXtOuhnCDsiJjsoJU6IHNwbGljZeulvCDsnbTsmqntlbQgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnChkZWxldGVDb3VudCnrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IOI66Gc7Jq0IGl0ZW0oM+2VrSnsnYQg64Sj7J2MXHJcbiAgICAgIC8vICjsg4jroZzsmrQgaXRlbSAtIHRhcmdldEluZGV47JeQIOyeiOuKlCDquLDsobQg64K07Jqp65Ok7J2AIOq3uOuMgOuhnCDrhKPqs6AgdGV4dOunjCDsg4jqsbjroZwg6rWQ7LK0KVxyXG4gICAgICAvLyBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAvLyAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAvLyAgIHRleHQ6IHRleHQsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgLy8g7ISc67KE7JeQ7IScIOyYqCBuZXdNc2cg642w7J207YSw66W8IOuEo+yWtOykjFxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKTtcclxuXHJcbiAgICAgIC8vIDMuIOyImOygleuQnCDsg4gg67Cw7Je0IOuwmO2ZmCAoLT4gc2V0dGVy7JeQIOuTpOyWtOqwgCBtc2dzIO2GteynuOuhnCDqtZDssrQpXHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g7IiY7KCV7J20IOuBneuCmOuptCDsi6TtlokgKGVkaXRpbmdJZOulvCDri6Tsi5wgbnVsbOuhnCDrsJTqv4gpXHJcbiAgICBkb25lRWRpdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAvLyDsgq3soJztlZjripQg6riA7J2YIGlkIOyZuOyXkCDtlbTri7kg6riA7J2YICd1c2VySWQn64+EIOyEnOuyhOyXkCDrs7TrgrTslbwg7ZWoID0+IOydtOuVjCAncGFyYW1zJ+uhnCDrs7TrgrTqs6Ag67Cb64qUIOyqveyXkOyEnOuKlCBxdWVyeeuhnCDrsJvsnYxcclxuICAgIC8vIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH06IHVybCDrkqTsl5AgPyB1c2VySWQgPSByb3kg65286rOgIOuTpOyWtOqwgOuKlCDrtoDrtoRcclxuICAgIC8vIHBhcmFtczogeyB1c2VySWQgfeulvCDrubzqs6AgYC9tZXNzYWdlcy8ke2lkfT91c2VySWQ9e3VzZXJJZH1g65286rOgIOuztOuCtOuPhCDrj5nsnbxcclxuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHsgdXNlcklkIH0gfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgcmVjZWl2ZWRJZCwgdHlwZW9mIGlkKTsgLy8gbnVtYmVyLCBzdHJpbmcgKD0+IG1lc3NhZ2VzLmpzb27sl5DshJwg7ZiE7J6sIGlk6rCAIOusuOyekOyXtOuhnCDrkJjslrTsnojslrTshJwpXHJcblxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICAvLyDsgq3soJztlZwg64K07Jqp7J20IOu3sOyXkCDrsJjsmIHsnbQg7JWI65CY64qUIOqyveyasCAtLT4gaWTsnZggdHlwZeydtCDslYgg66ee64qUIOqyg+ydvCDsiJgg7J6I7J2MICjsvZjshpTroZwg65GQIOyVhOydtOuUlOulvCDstpzroKXtlbTrs7Tqs6Ag7ZWc7Kq97J2EIOuLpOuluCDsqr3sl5Ag66ee7Law7KSA64ukKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gU3RyaW5nKHJlY2VpdmVkSWQpKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsgq3soJwg7KeE7ZaJICjsiJjsoJXsl5DshJwgaXRlbSDstpTqsIDtlZjripQg67aA67aE66eMIOyXhuydjClcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIOyImOygleydtCDsmYTro4zrkKjsnYQg7JWM66Ck7KSMOiBlZGl0aW5nSWTrpbwgbnVsbOuhnCDrsJTqv4ggPT4gaXNFZGl0aW5n7J20IGZhbHNl66GcIOyghO2ZmCA9PiDquLDsobTsl5Ag7J6I642YIHRleHTrpbwg64yA7LK07ZWY642YIE1zZ0lucHV0IOu3sOqwgCDsgqzrnbzsp4Dqs6Ag7IiY7KCV65CcIHRleHTroZwg64uk7IucIOuMgOyytFxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJyk7XHJcbiAgICBzZXRNc2dzKG1zZ3MpO1xyXG4gIH07XHJcblxyXG4gIC8vIOy1nOy0iCDtjpjsnbTsp4Ag66Gc65OcIOyLnOyXkOunjCDsi6TtlolcclxuICAvLyB1c2VFZmZlY3Qg64K07JeQ7ISc64qUIGFzeW5jL2F3YWl066W8IOyngeygkSDtmLjstpztlZjsp4Ag7JWK7JWE7JW8IO2VqCA9PiBhd2FpdOulvCDtmLjstpztlZjripQg67aA67aE7J2EIO2VqOyImOuhnCDrlLDroZwg67m87IScIOqxsOq4sOyXkCBhc3luY+uPhCDrtpnsl6zso7zquLBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgLy8gey4uLnh966GcIOqwneyytOydmCDqsIEga2V566W8IOyghOu2gCDrhKPqs6AgTXNnSXRlbeyXkOyEnCDsk7gg65WM64qUIOydvOu2gOunjCDqs6jrnbwg7IKs7JqpIOqwgOuKpVxyXG4gICAgICAgICAgLy8g7IiY7KCV7JeQIO2VhOyalO2VnCBvblVwZGF0ZSwgc3RhcnRFZGl0LCBpc0VkaXRpbmfsnYQg66+466asIOuEo+yWtOykjFxyXG4gICAgICAgICAgLy8gKOyImOyglSDrsoTtirzsnbQg64iM66as66m0IOyImOygle2VoCDquIDsnZggaWTrpbwgZWRpdGluZ0lk7JeQIOyEpOygle2VmOuKlCBzdGFydEVkaXTqs7wsIOugjOuNlOungSDspJHsnbggaXRlbSDspJEgZWRpdGluZ0lk7JmAIGlk6rCAIOydvOy5mO2VmOuKlCBpdGVt7J20IOyeiOuKlOyngOulvCDslYzroKTso7zripQgaXNFZGl0aW5n7J2AIOuUsOuhnCB1c2VTdGF0ZeuhnCDshKDslrjtlZjsp4Ag7JWK6rOgIGpzeOyXkOyEnCDrsJTroZwg7LKY66asKVxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gLyogb25EZWxldGXripQg7Jes6riw7IScIOuwlOuhnCDsi6TtlokgKi9cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJmZXRjaGVyIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicGFyYW1zIiwicmVjZWl2ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJTdHJpbmciLCJnZXRNZXNzYWdlcyIsIm1hcCIsIngiXSwic291cmNlUm9vdCI6IiJ9