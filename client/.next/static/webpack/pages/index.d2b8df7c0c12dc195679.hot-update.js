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
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // 유저아이디 배열
// const UserIds = ['roy', 'jay'];
// 유저아이디 (둘 중에 하나) 랜덤하게 넣는 함수
// UserIds 배열 인덱스 자리([])에 랜덤함수 넣기
// 2개일 때 (뒤에 배열의 길이 곱하지 않음)
// const getRamdomUserId = () => UserIds[Math.round(Math.random())];
// 3개 이상일 때
// const getRamdomUserId = () => UserIds[Math.round(Math.random() * UserIds.length)];
// // Array(50): 공간이 50개인 배열 생성
// // .fill(0): 50개의 공간을 아무 값으로나 채움
// // .map(val, i): map으로 꺼내는 val이 중요하지 않으면 '_'로 처리 (=> i만 사용하려는 경우)
// // ()(return문) 안에 {} (=> 객체 반환)
// const originalMsgs = Array(50)
//   .fill(0)
//   .map((_, i) => ({
//     id: i + 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 + i * 1000 * 60 /* 기본 13자리 + i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> 1'분' 단위로 증가하며 시간이 찍힘 */,
//     text: `${i + 1} mock text`,
//   }))
//   .reverse(); /* 최근 순서로 찍히도록 */
// 만든 originalMsgs 배열을 JSON.stringify로 감싸서 콘솔에 찍으면 json 형태가 됨 (=> json 파일에 바로 복붙해서 사용 가능)
// console.log(originalMsgs);
// console.log(JSON.stringify(originalMsgs)); // JSON.stringify: 배열 안에 객체 여러 개인 json 형태로 만들어줌




var MsgList = function MsgList() {
  _s();

  // useRouter를 사용하여 쿼리에 담긴 문자열을 받음
  // 주소창 query('?') 뒤에 붙은 userId(roy)를 useRouter로 받음
  // 원래는 const route = useRouter() + route.query.userId로 꺼내쓰지만 여기서는 destructuring 문법 사용
  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(),
      _useRouter$query$user = _useRouter.query.userId,
      userId = _useRouter$query$user === void 0 ? '' : _useRouter$query$user; // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값 originalMsgs 배열은 '변하는' 요소가 됨 => state로 선언


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      msgs = _useState[0],
      setMsgs = _useState[1]; // 수정할 글 id도 '변하는' 요소이므로 state로 선언


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1];

  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // import해온 useInfiniteScroll에 fetchMoreEl를 넣어 실행하면 그때그때 true 또는 false를 받아옴

  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_9__.default)(fetchMoreEl); // 새글 생성하기 함수

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
              //   // 이제는 map으로 얻은 i가 아닌 기존 msgs 배열(state)의 길이를 이용
              //   id: msgs.length + 1,
              //   userId: getRamdomUserId(),
              //   timestamp: Date.now() /* 현재 날짜 및 시간 */,
              //   text: `${msgs.length + 1} ${text}`,
              // };
              // setMsgs로 msgs 배열에 새 메시지 추가
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
  }(); // 글 수정하는 함수 (** id 필요: 어느 글을 수정할 것인지)


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
              // 수정된 메시지를 msgs 배열의 targetIndex번째에 추가
              setMsgs(function (msgs) {
                // 수정할 글의 인덱스(targetIndex)
                // findIndex(배열메서드): 배열을 돌면서 특정 조건을 만족하는 요소의 '인덱스' 반환 (cf. filter: 특정 조건을 만족하는 요소들을 모아 '새 배열'로 반환)
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === id;
                }); // targetIndex가 없으면(-1) 기존 msgs 배열 그대로 반환

                if (targetIndex < 0) return msgs; // ** targetIndex로 배열 수정 진행
                // 기존 배열 복사: 기존 msgs 배열을 spread로 펼친 뒤 다시 []에 넣어 새로운 배열 사본 생성

                var newMsgs = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs); // 사본 배열에 수정 진행: splice로 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 요소(3항의 객체)을 넣음
                // (새로운 item - targetIndex번째 기존 내용들 그대로, text만 새 걸로 교체)
                // newMsgs.splice(targetIndex, 1, {
                //   ...msgs[targetIndex],
                //   text: text,
                // });
                // 배열에 splice로 targetIndex부터 1개를 지우고 그 자리에 수정된 메시지(newMsg) 추가


                newMsgs.splice(targetIndex, 1, newMsg); // 수정된 새 배열 반환 (=> setMsgs에 들어가지면서 msgs 통째로 교체)

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
  }(); // 글 삭제하는 함수


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
              // console.log(typeof receivedId, typeof id); // number, string (=> messages.json에서 id가 문자열로 되어있음)
              setMsgs(function (msgs) {
                // ** 삭제한 내용이 뷰에 반영이 안되는 경우 --> type이 안 맞는 것일 수 있음 (콘솔로 두 아이디를 출력해보고 한쪽을 다른 쪽에 맞춰주기)
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === String(receivedId);
                });
                if (targetIndex < 0) return msgs; // ** 삭제 진행 (item 추가 없는 거 빼고 수정 과정과 동일)

                var newMsgs = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs);

                newMsgs.splice(targetIndex, 1);
                return newMsgs;
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDelete(_x4) {
      return _ref3.apply(this, arguments);
    };
  }(); // 수정이 완료됨을 알리는 함수: editingId를 null로 바꿈 (=> isEditing이 false로 변환되어 기존의 text를 대체하던 MsgInput 뷰가 사라지고 수정된 text로 다시 교체)


  var doneEdit = function doneEdit() {
    return setEditingId(null);
  }; // 조회하기: 전체 메시지 불러오는 함수 (originalMsgs 필요없어짐)


  var getMessages = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
      var _msgs;

      var newMsgs;
      return C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_8__.default)('get', '/messages', {
                params: {
                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
                }
              });

            case 2:
              newMsgs = _context4.sent;
              setMsgs(newMsgs);

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
  }(); // 최초 페이지 로드 때 실행
  // ** useEffect 내에서는 async/await를 직접 호출하지 않아야 함
  // => await를 호출하는 부분을 함수(getMessages()로 따로 빼고 거기에 async도 붙여주기


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // 전체 메시지 불러오기
    getMessages();
  }, []); // useEffect 여러 개 사용 가능

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // intersecting이 있을 때만 getMessages() 호출
    if (intersecting) getMessages(); // intersecting이 바뀔 때마다 실행
  }, [intersecting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_6__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return (
          /*#__PURE__*/
          // {...x}로 객체의 각 key를 전부 넣고 MsgItem에서 쓸 때는 일부만 골라서 사용 가능
          // '수정'에 필요한 onUpdate, startEdit, isEditing 요소들을 props로 미리 넣어준다.
          // 수정 실행 시, 수정할 글의 id를 editingId에 설정하는 startEdit과, 렌더링 중인 요소 중 editingId와 id가 일치하는 요소가 있는지를 알려주는 isEditing은 여기서 바로 처리 (따로 useState로 선언하지 않음)
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, x), {}, {
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
            lineNumber: 166,
            columnNumber: 11
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "rqXZIpXHsVjflDtSMf5DEPS37n8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_9__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDJiOGRmN2MwYzEyZGMxOTU2NzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbUJBRUlMLHNEQUFTLEVBRmI7QUFBQSx5Q0FDRU0sS0FERixDQUNXQyxNQURYO0FBQUEsTUFDV0EsTUFEWCxzQ0FDb0IsRUFEcEIseUJBSm9CLENBUXBCOzs7QUFDQSxrQkFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9XLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQVRvQixDQVVwQjs7O0FBQ0EsbUJBQWtDWiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPYSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLFdBQVcsR0FBR2IsNkNBQU0sQ0FBQyxJQUFELENBQTFCLENBWm9CLENBYXBCOztBQUNBLE1BQU1jLFlBQVksR0FBR1QsaUVBQWlCLENBQUNRLFdBQUQsQ0FBdEMsQ0Fkb0IsQ0FnQnBCOztBQUNBLE1BQU1FLFFBQVE7QUFBQSx1UkFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUlNWixpREFBTyxDQUFDLE1BQUQsRUFBUyxXQUFULEVBQXNCO0FBQUVZLGdCQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUVIsZ0JBQUFBLE1BQU0sRUFBTkE7QUFBUixlQUF0QixDQUpiOztBQUFBO0FBSVRT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QUFDQTtBQUNBO0FBQ0EseUVBQUMsNkNBQUQsa0NBRU1BLENBRk47QUFHRSxvQkFBUSxFQUFFaEIsUUFIWjtBQUlFLHFCQUFTLEVBQUU7QUFBQSxxQkFBTVAsWUFBWSxDQUFDdUIsQ0FBQyxDQUFDZixFQUFILENBQWxCO0FBQUEsYUFKYjtBQUtFLHFCQUFTLEVBQUVULFNBQVMsS0FBS3dCLENBQUMsQ0FBQ2YsRUFMN0I7QUFNRSxvQkFBUSxFQUFFO0FBQUEscUJBQU1PLFNBQVEsQ0FBQ1EsQ0FBQyxDQUFDZixFQUFILENBQWQ7QUFBQTtBQUFzQjtBQU5sQztBQU9FLGdCQUFJLEVBQUVaO0FBUFIsY0FDTzJCLENBQUMsQ0FBQ2YsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBb0JFO0FBQUssU0FBRyxFQUFFUDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQSxrQkFERjtBQXdCRCxDQWxKRDs7R0FBTVA7VUFNQUwsb0RBUWlCSTs7O0tBZGpCQztBQW9KTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcic7XHJcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQg67Cw7Je0XHJcbi8vIGNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCAo65GYIOykkeyXkCDtlZjrgpgpIOuenOuNpO2VmOqyjCDrhKPripQg7ZWo7IiYXHJcbi8vIFVzZXJJZHMg67Cw7Je0IOyduOuNseyKpCDsnpDrpqwoW10p7JeQIOuenOuNpO2VqOyImCDrhKPquLBcclxuLy8gMuqwnOydvCDrlYwgKOuSpOyXkCDrsLDsl7TsnZgg6ri47J20IOqzse2VmOyngCDslYrsnYwpXHJcbi8vIGNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XHJcbi8vIDPqsJwg7J207IOB7J28IOuVjFxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIFVzZXJJZHMubGVuZ3RoKV07XHJcblxyXG4vLyAvLyBBcnJheSg1MCk6IOqzteqwhOydtCA1MOqwnOyduCDrsLDsl7Qg7IOd7ISxXHJcbi8vIC8vIC5maWxsKDApOiA1MOqwnOydmCDqs7XqsITsnYQg7JWE66y0IOqwkuycvOuhnOuCmCDssYTsm4BcclxuLy8gLy8gLm1hcCh2YWwsIGkpOiBtYXDsnLzroZwg6rq864K064qUIHZhbOydtCDspJHsmpTtlZjsp4Ag7JWK7Jy866m0ICdfJ+uhnCDsspjrpqwgKD0+IGnrp4wg7IKs7Jqp7ZWY66Ck64qUIOqyveyasClcclxuLy8gLy8gKCkocmV0dXJu66y4KSDslYjsl5Age30gKD0+IOqwneyytCDrsJjtmZgpXHJcbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4vLyAgIC5maWxsKDApXHJcbi8vICAgLm1hcCgoXywgaSkgPT4gKHtcclxuLy8gICAgIGlkOiBpICsgMSxcclxuLy8gICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwIC8qIOq4sOuzuCAxM+yekOumrCArIGnrpbwgbWlsbGlzZWNvbmTroZwg67CU6r68IOuSpCDri6Tsi5wgNjDsnYQg6rOx7ZWoIC0+IDEn67aEJyDri6jsnITroZwg7Kad6rCA7ZWY66mwIOyLnOqwhOydtCDssI3tnpggKi8sXHJcbi8vICAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YCxcclxuLy8gICB9KSlcclxuLy8gICAucmV2ZXJzZSgpOyAvKiDstZzqt7wg7Iic7ISc66GcIOywje2eiOuPhOuhnSAqL1xyXG5cclxuLy8g66eM65OgIG9yaWdpbmFsTXNncyDrsLDsl7TsnYQgSlNPTi5zdHJpbmdpZnnroZwg6rCQ7Iu47IScIOy9mOyGlOyXkCDssI3snLzrqbQganNvbiDtmJXtg5zqsIAg65CoICg9PiBqc29uIO2MjOydvOyXkCDrsJTroZwg67O167aZ7ZW07IScIOyCrOyaqSDqsIDriqUpXHJcbi8vIGNvbnNvbGUubG9nKG9yaWdpbmFsTXNncyk7XHJcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTXNncykpOyAvLyBKU09OLnN0cmluZ2lmeTog67Cw7Je0IOyViOyXkCDqsJ3ssrQg7Jes65+sIOqwnOyduCBqc29uIO2Yle2DnOuhnCDrp4zrk6TslrTspIxcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgLy8gdXNlUm91dGVy66W8IOyCrOyaqe2VmOyXrCDsv7zrpqzsl5Ag64u06ri0IOusuOyekOyXtOydhCDrsJvsnYxcclxuICAvLyDso7zshozssL0gcXVlcnkoJz8nKSDrkqTsl5Ag67aZ7J2AIHVzZXJJZChyb3kp66W8IHVzZVJvdXRlcuuhnCDrsJvsnYxcclxuICAvLyDsm5DrnpjripQgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKSArIHJvdXRlLnF1ZXJ5LnVzZXJJZOuhnCDqurzrgrTsk7Dsp4Drp4wg7Jes6riw7ISc64qUIGRlc3RydWN0dXJpbmcg66y467KVIOyCrOyaqVxyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBpbnB1dOqwkuydhCDsoJzstpztlZjrqbQg7IOI6riAIOyDneyEsSDrmJDripQg6riw7KG0IOq4gCDsiJjsoJUgPT4g7LSI6riw6rCSIG9yaWdpbmFsTXNncyDrsLDsl7TsnYAgJ+uzgO2VmOuKlCcg7JqU7IaM6rCAIOuQqCA9PiBzdGF0ZeuhnCDshKDslrhcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8g7IiY7KCV7ZWgIOq4gCBpZOuPhCAn67OA7ZWY64qUJyDsmpTshozsnbTrr4DroZwgc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpO1xyXG4gIC8vIGltcG9ydO2VtOyYqCB1c2VJbmZpbml0ZVNjcm9sbOyXkCBmZXRjaE1vcmVFbOulvCDrhKPslrQg7Iuk7ZaJ7ZWY66m0IOq3uOuVjOq3uOuVjCB0cnVlIOuYkOuKlCBmYWxzZeulvCDrsJvslYTsmLRcclxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XHJcblxyXG4gIC8vIOyDiOq4gCDsg53shLHtlZjquLAg7ZWo7IiYXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xyXG4gICAgLy8g7ISc67KE7JeQIHRleHTrpbwg67O064K07IScIOyDiCDrqZTsi5zsp4Drpbwg7IOd7ISx7ZWY6rOgIOq3uCDrsJjtmZjqsJLsnYQgcmVzLmRhdGHroZwg67Cb7JWE7Ji0XHJcbiAgICAvLyB0ZXh0OiBpbnB1dCDsnoXroKXqsJJcclxuICAgIC8vIHVzZXJJZDogdXNlUm91dGVy66GcIOqwgOyguOyYqCB1c2VySWQgKyDtlbTri7kgdXNlcklk7JeQIOuUsOudvCDquIAg7IOd7ISxIOyLnCDsnpHshLHsnpDqsIAg64us65287KeQXHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIC8vIOyEnOuyhOyXkOyEnCDrsJvslYTsmKgg6rCS7J20IOyXhuycvOuptCDsl5Drn6zsspjrpqxcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignU29tZXRoaW5nIGlzIHdyb25nJyk7XHJcblxyXG4gICAgLy8gLy8g7IOI6riAIOqwneyytOulvCDqtazshLFcclxuICAgIC8vIGNvbnN0IG5ld01zZyA9IHtcclxuICAgIC8vICAgLy8g7J207KCc64qUIG1hcOycvOuhnCDslrvsnYAgaeqwgCDslYTri4wg6riw7KG0IG1zZ3Mg67Cw7Je0KHN0YXRlKeydmCDquLjsnbTrpbwg7J207JqpXHJcbiAgICAvLyAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAvLyAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbiAgICAvLyAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSAvKiDtmITsnqwg64Kg7KecIOuwjyDsi5zqsIQgKi8sXHJcbiAgICAvLyAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIHNldE1zZ3ProZwgbXNncyDrsLDsl7Tsl5Ag7IOIIOuplOyLnOyngCDstpTqsIBcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICAvLyDquIAg7IiY7KCV7ZWY64qUIO2VqOyImCAoKiogaWQg7ZWE7JqUOiDslrTripAg6riA7J2EIOyImOygle2VoCDqsoPsnbjsp4ApXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgIC8vIOyImOygleuQnCDrqZTsi5zsp4A6IOyEnOuyhOyXkCB0ZXh07JmAIHVzZXJJZOulvCDrs7TrgrTshJwg7IiY7KCV65CcIOuplOyLnOyngOulvCByZXMuZGF0YeuhnCDrsJvslYTsmLRcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuXHJcbiAgICAvLyDshJzrsoTsl5DshJwg67Cb7JWE7JioIOqwkuydtCDsl4bsnLzrqbQg7JeQ65+s7LKY66asXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZycpO1xyXG5cclxuICAgIC8vIOyImOygleuQnCDrqZTsi5zsp4DrpbwgbXNncyDrsLDsl7TsnZggdGFyZ2V0SW5kZXjrsojsp7jsl5Ag7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIC8vIOyImOygle2VoCDquIDsnZgg7J24642x7IqkKHRhcmdldEluZGV4KVxyXG4gICAgICAvLyBmaW5kSW5kZXgo67Cw7Je066mU7ISc65OcKTog67Cw7Je07J2EIOuPjOuptOyEnCDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCDsmpTshozsnZggJ+yduOuNseyKpCcg67CY7ZmYIChjZi4gZmlsdGVyOiDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCDsmpTshozrk6TsnYQg66qo7JWEICfsg4gg67Cw7Je0J+uhnCDrsJjtmZgpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAvLyB0YXJnZXRJbmRleOqwgCDsl4bsnLzrqbQoLTEpIOq4sOyhtCBtc2dzIOuwsOyXtCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiogdGFyZ2V0SW5kZXjroZwg67Cw7Je0IOyImOyglSDsp4TtlolcclxuICAgICAgLy8g6riw7KG0IOuwsOyXtCDrs7Xsgqw6IOq4sOyhtCBtc2dzIOuwsOyXtOydhCBzcHJlYWTroZwg7Y687LmcIOuSpCDri6Tsi5wgW13sl5Ag64Sj7Ja0IOyDiOuhnOyatCDrsLDsl7Qg7IKs67O4IOyDneyEsVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG5cclxuICAgICAgLy8g7IKs67O4IOuwsOyXtOyXkCDsiJjsoJUg7KeE7ZaJOiBzcGxpY2XroZwgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnChkZWxldGVDb3VudCnrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IOI66Gc7Jq0IOyalOyGjCgz7ZWt7J2YIOqwneyytCnsnYQg64Sj7J2MXHJcbiAgICAgIC8vICjsg4jroZzsmrQgaXRlbSAtIHRhcmdldEluZGV467KI7Ke4IOq4sOyhtCDrgrTsmqnrk6Qg6re464yA66GcLCB0ZXh066eMIOyDiCDqsbjroZwg6rWQ7LK0KVxyXG4gICAgICAvLyBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAvLyAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAvLyAgIHRleHQ6IHRleHQsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgLy8g67Cw7Je07JeQIHNwbGljZeuhnCB0YXJnZXRJbmRleOu2gO2EsCAx6rCc66W8IOyngOyasOqzoCDqt7gg7J6Q66as7JeQIOyImOygleuQnCDrqZTsi5zsp4AobmV3TXNnKSDstpTqsIBcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XHJcblxyXG4gICAgICAvLyDsiJjsoJXrkJwg7IOIIOuwsOyXtCDrsJjtmZggKD0+IHNldE1zZ3Psl5Ag65Ok7Ja06rCA7KeA66m07IScIG1zZ3Mg7Ya17Ke466GcIOq1kOyytClcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDsiJjsoJXsnbQg64Gd64KY66m0IOyLpO2WiSAoZWRpdGluZ0lk66W8IOuLpOyLnCBudWxs66GcIOuwlOq/iClcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyCreygnO2VmOuKlCDtlajsiJhcclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgLy8g7IKt7KCc7ZWY64qUIOq4gOydmCBpZCDsmbjsl5Ag7ZW064u5IOq4gOydmCAndXNlcklkJ+uPhCDshJzrsoTsl5Ag67O064OEID0+IOydtOuVjCAncGFyYW1zJ+uhnCDrs7TrgrTqs6AsIOyEnOuyhOyXkOyEnOuKlCBxdWVyeeuhnCDrsJvsnYxcclxuICAgIC8vIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH06IHVybCDrkqTsl5AgP3VzZXJJZD1yb3nsl5DshJwgcm95IOu2gOu2hCAodXJs7JeQIGAvbWVzc2FnZXMvJHtpZH0/dXNlcklkPXt1c2VySWR9YOudvOqzoCDrs7TrgrTrj4Qg64+Z7J28KVxyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiByZWNlaXZlZElkLCB0eXBlb2YgaWQpOyAvLyBudW1iZXIsIHN0cmluZyAoPT4gbWVzc2FnZXMuanNvbuyXkOyEnCBpZOqwgCDrrLjsnpDsl7TroZwg65CY7Ja07J6I7J2MKVxyXG5cclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8gKiog7IKt7KCc7ZWcIOuCtOyaqeydtCDrt7Dsl5Ag67CY7JiB7J20IOyViOuQmOuKlCDqsr3smrAgLS0+IHR5cGXsnbQg7JWIIOunnuuKlCDqsoPsnbwg7IiYIOyeiOydjCAo7L2Y7IaU66GcIOuRkCDslYTsnbTrlJTrpbwg7Lac66Cl7ZW067O06rOgIO2VnOyqveydhCDri6Trpbgg7Kq97JeQIOunnuy2sOyjvOq4sClcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IFN0cmluZyhyZWNlaXZlZElkKSk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiog7IKt7KCcIOynhO2WiSAoaXRlbSDstpTqsIAg7JeG64qUIOqxsCDrubzqs6Ag7IiY7KCVIOqzvOygleqzvCDrj5nsnbwpXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyDsiJjsoJXsnbQg7JmE66OM65Co7J2EIOyVjOumrOuKlCDtlajsiJg6IGVkaXRpbmdJZOulvCBudWxs66GcIOuwlOq/iCAoPT4gaXNFZGl0aW5n7J20IGZhbHNl66GcIOuzgO2ZmOuQmOyWtCDquLDsobTsnZggdGV4dOulvCDrjIDssrTtlZjrjZggTXNnSW5wdXQg67ew6rCAIOyCrOudvOyngOqzoCDsiJjsoJXrkJwgdGV4dOuhnCDri6Tsi5wg6rWQ7LK0KVxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICAvLyDsobDtmoztlZjquLA6IOyghOyytCDrqZTsi5zsp4Ag67aI65+s7Jik64qUIO2VqOyImCAob3JpZ2luYWxNc2dzIO2VhOyalOyXhuyWtOynkClcclxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIG1zZ3NbbXNncy5sZW5ndGggLSAxXeydtCDsspjsnYzsl5DripQg7JeG7J2EIOyImOuPhCDsnojslrTshJwg65Kk7JeQICc/JyDrtpnsnbTqs6AgfHwgJycgKGN1cnNvcuqwgCDruYgg6rCS7Jy866GcIOqwiCDsiJgg7J6I6rKM64GUKSDsmIjsmbjsspjrpqxcclxuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywgeyBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH0gfSk7XHJcbiAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gIH07XHJcblxyXG4gIC8vIOy1nOy0iCDtjpjsnbTsp4Ag66Gc65OcIOuVjCDsi6TtlolcclxuICAvLyAqKiB1c2VFZmZlY3Qg64K07JeQ7ISc64qUIGFzeW5jL2F3YWl066W8IOyngeygkSDtmLjstpztlZjsp4Ag7JWK7JWE7JW8IO2VqFxyXG4gIC8vID0+IGF3YWl066W8IO2YuOy2nO2VmOuKlCDrtoDrtoTsnYQg7ZWo7IiYKGdldE1lc3NhZ2VzKCnroZwg65Sw66GcIOu5vOqzoCDqsbDquLDsl5AgYXN5bmPrj4Qg67aZ7Jes7KO86riwXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIOyghOyytCDrqZTsi5zsp4Ag67aI65+s7Jik6riwXHJcbiAgICBnZXRNZXNzYWdlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0IOyXrOufrCDqsJwg7IKs7JqpIOqwgOuKpVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpbnRlcnNlY3RpbmfsnbQg7J6I7J2EIOuVjOunjCBnZXRNZXNzYWdlcygpIO2YuOy2nFxyXG4gICAgaWYgKGludGVyc2VjdGluZykgZ2V0TWVzc2FnZXMoKTtcclxuICAgIC8vIGludGVyc2VjdGluZ+ydtCDrsJTrgJQg65WM66eI64ukIOyLpO2WiVxyXG4gIH0sIFtpbnRlcnNlY3RpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdtZXNzYWdlcyc+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAvLyB7Li4ueH3roZwg6rCd7LK07J2YIOqwgSBrZXnrpbwg7KCE67aAIOuEo+qzoCBNc2dJdGVt7JeQ7IScIOyTuCDrlYzripQg7J2867aA66eMIOqzqOudvOyEnCDsgqzsmqkg6rCA64qlXHJcbiAgICAgICAgICAvLyAn7IiY7KCVJ+yXkCDtlYTsmpTtlZwgb25VcGRhdGUsIHN0YXJ0RWRpdCwgaXNFZGl0aW5nIOyalOyGjOuTpOydhCBwcm9wc+uhnCDrr7jrpqwg64Sj7Ja07KSA64ukLlxyXG4gICAgICAgICAgLy8g7IiY7KCVIOyLpO2WiSDsi5wsIOyImOygle2VoCDquIDsnZggaWTrpbwgZWRpdGluZ0lk7JeQIOyEpOygle2VmOuKlCBzdGFydEVkaXTqs7wsIOugjOuNlOungSDspJHsnbgg7JqU7IaMIOykkSBlZGl0aW5nSWTsmYAgaWTqsIAg7J287LmY7ZWY64qUIOyalOyGjOqwgCDsnojripTsp4Drpbwg7JWM66Ck7KO864qUIGlzRWRpdGluZ+ydgCDsl6zquLDshJwg67CU66GcIOyymOumrCAo65Sw66GcIHVzZVN0YXRl66GcIOyEoOyWuO2VmOyngCDslYrsnYwpXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSAvKiBvbkRlbGV0ZeuKlCDsl6zquLDshJwg67CU66GcIOyLpO2WiSAqL1xyXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgey8qIOydtCBkaXbqsIAg7ZmU66m07IOB7JeQIOuCmO2DgOuCrOydhCDrlYwg64uk7J2MIOuNsOydtO2EsOulvCDrtojrn6zsmKTrj4TroZ0g7ZWoICjrrLTtlZzsiqTtgazroaQpICovfVxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwiTXNnSW5wdXQiLCJNc2dJdGVtIiwiZmV0Y2hlciIsInVzZUluZmluaXRlU2Nyb2xsIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJmZXRjaE1vcmVFbCIsImludGVyc2VjdGluZyIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJwYXJhbXMiLCJyZWNlaXZlZElkIiwiU3RyaW5nIiwiZ2V0TWVzc2FnZXMiLCJjdXJzb3IiLCJsZW5ndGgiLCJtYXAiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==