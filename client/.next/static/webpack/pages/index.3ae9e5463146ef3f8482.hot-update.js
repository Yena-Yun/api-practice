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
      setEditingId = _useState2[1]; // ** 무한스크롤


  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // useInfiniteScroll: intersectingObserver를 쓰는 hook
  // fetchMoreEl가 화면상에 노출됐을 때(= null이 아닐 때)는 intersecting이 true가 되고 그렇지 않을 땐 false

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
              setMsgs(function (msgs) {
                return [].concat((0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs), (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMsgs));
              });

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
      lineNumber: 163,
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
            lineNumber: 169,
            columnNumber: 11
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FlOWU1NDYzMTQ2ZWYzZjg0ODIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbUJBRUlMLHNEQUFTLEVBRmI7QUFBQSx5Q0FDRU0sS0FERixDQUNXQyxNQURYO0FBQUEsTUFDV0EsTUFEWCxzQ0FDb0IsRUFEcEIseUJBSm9CLENBUXBCOzs7QUFDQSxrQkFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9XLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQVRvQixDQVVwQjs7O0FBQ0EsbUJBQWtDWiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPYSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQVhvQixDQWFwQjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHYiw2Q0FBTSxDQUFDLElBQUQsQ0FBMUIsQ0Fkb0IsQ0FlcEI7QUFDQTs7QUFDQSxNQUFNYyxZQUFZLEdBQUdULGlFQUFpQixDQUFDUSxXQUFELENBQXRDLENBakJvQixDQW1CcEI7O0FBQ0EsTUFBTUUsUUFBUTtBQUFBLHVSQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSU1aLGlEQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRVksZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRUixnQkFBQUEsTUFBTSxFQUFOQTtBQUFSLGVB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LFVBQWQ7QUFBQSxnQkFDR04sSUFBSSxDQUFDeUIsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQTtBQUFBO0FBQ1I7QUFDQTtBQUNBO0FBQ0EseUVBQUMsNkNBQUQsa0NBRU1BLENBRk47QUFHRSxvQkFBUSxFQUFFaEIsUUFIWjtBQUlFLHFCQUFTLEVBQUU7QUFBQSxxQkFBTVAsWUFBWSxDQUFDdUIsQ0FBQyxDQUFDZixFQUFILENBQWxCO0FBQUEsYUFKYjtBQUtFLHFCQUFTLEVBQUVULFNBQVMsS0FBS3dCLENBQUMsQ0FBQ2YsRUFMN0I7QUFNRSxvQkFBUSxFQUFFO0FBQUEscUJBQU1PLFNBQVEsQ0FBQ1EsQ0FBQyxDQUFDZixFQUFILENBQWQ7QUFBQTtBQUFzQjtBQU5sQztBQU9FLGdCQUFJLEVBQUVaO0FBUFIsY0FDTzJCLENBQUMsQ0FBQ2YsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBb0JFO0FBQUssU0FBRyxFQUFFUDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQSxrQkFERjtBQXdCRCxDQXJKRDs7R0FBTVA7VUFNQUwsb0RBV2lCSTs7O0tBakJqQkM7QUF1Sk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUIOuwsOyXtFxyXG4vLyBjb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J107XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQgKOuRmCDspJHsl5Ag7ZWY64KYKSDrnpzrjaTtlZjqsowg64Sj64qUIO2VqOyImFxyXG4vLyBVc2VySWRzIOuwsOyXtCDsnbjrjbHsiqQg7J6Q66asKFtdKeyXkCDrnpzrjaTtlajsiJgg64Sj6riwXHJcbi8vIDLqsJzsnbwg65WMICjrkqTsl5Ag67Cw7Je07J2YIOq4uOydtCDqs7HtlZjsp4Ag7JWK7J2MKVxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG4vLyAz6rCcIOydtOyDgeydvCDrlYxcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBVc2VySWRzLmxlbmd0aCldO1xyXG5cclxuLy8gLy8gQXJyYXkoNTApOiDqs7XqsITsnbQgNTDqsJzsnbgg67Cw7Je0IOyDneyEsVxyXG4vLyAvLyAuZmlsbCgwKTogNTDqsJzsnZgg6rO16rCE7J2EIOyVhOustCDqsJLsnLzroZzrgpgg7LGE7JuAXHJcbi8vIC8vIC5tYXAodmFsLCBpKTogbWFw7Jy866GcIOq6vOuCtOuKlCB2YWzsnbQg7KSR7JqU7ZWY7KeAIOyViuycvOuptCAnXyfroZwg7LKY66asICg9PiBp66eMIOyCrOyaqe2VmOugpOuKlCDqsr3smrApXHJcbi8vIC8vICgpKHJldHVybuusuCkg7JWI7JeQIHt9ICg9PiDqsJ3ssrQg67CY7ZmYKVxyXG4vLyBjb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcclxuLy8gICAuZmlsbCgwKVxyXG4vLyAgIC5tYXAoKF8sIGkpID0+ICh7XHJcbi8vICAgICBpZDogaSArIDEsXHJcbi8vICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4vLyAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCAvKiDquLDrs7ggMTPsnpDrpqwgKyBp66W8IG1pbGxpc2Vjb25k66GcIOuwlOq+vCDrkqQg64uk7IucIDYw7J2EIOqzse2VqCAtPiAxJ+u2hCcg64uo7JyE66GcIOymneqwgO2VmOupsCDsi5zqsITsnbQg7LCN7Z6YICovLFxyXG4vLyAgICAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGAsXHJcbi8vICAgfSkpXHJcbi8vICAgLnJldmVyc2UoKTsgLyog7LWc6re8IOyInOyEnOuhnCDssI3tnojrj4TroZ0gKi9cclxuXHJcbi8vIOunjOuToCBvcmlnaW5hbE1zZ3Mg67Cw7Je07J2EIEpTT04uc3RyaW5naWZ566GcIOqwkOyLuOyEnCDsvZjshpTsl5Ag7LCN7Jy866m0IGpzb24g7ZiV7YOc6rCAIOuQqCAoPT4ganNvbiDtjIzsnbzsl5Ag67CU66GcIOuzteu2me2VtOyEnCDsgqzsmqkg6rCA64qlKVxyXG4vLyBjb25zb2xlLmxvZyhvcmlnaW5hbE1zZ3MpO1xyXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTsgLy8gSlNPTi5zdHJpbmdpZnk6IOuwsOyXtCDslYjsl5Ag6rCd7LK0IOyXrOufrCDqsJzsnbgganNvbiDtmJXtg5zroZwg66eM65Ok7Ja07KSMXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIC8vIHVzZVJvdXRlcuulvCDsgqzsmqntlZjsl6wg7L+866as7JeQIOuLtOq4tCDrrLjsnpDsl7TsnYQg67Cb7J2MXHJcbiAgLy8g7KO87IaM7LC9IHF1ZXJ5KCc/Jykg65Kk7JeQIOu2meydgCB1c2VySWQocm95KeulvCB1c2VSb3V0ZXLroZwg67Cb7J2MXHJcbiAgLy8g7JuQ656Y64qUIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCkgKyByb3V0ZS5xdWVyeS51c2VySWTroZwg6rq864K07JOw7KeA66eMIOyXrOq4sOyEnOuKlCBkZXN0cnVjdHVyaW5nIOusuOuylSDsgqzsmqlcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyB1c2VySWQgPSAnJyB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gaW5wdXTqsJLsnYQg7KCc7Lac7ZWY66m0IOyDiOq4gCDsg53shLEg65iQ64qUIOq4sOyhtCDquIAg7IiY7KCVID0+IOy0iOq4sOqwkiBvcmlnaW5hbE1zZ3Mg67Cw7Je07J2AICfrs4DtlZjripQnIOyalOyGjOqwgCDrkKggPT4gc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIOyImOygle2VoCDquIAgaWTrj4QgJ+uzgO2VmOuKlCcg7JqU7IaM7J2066+A66GcIHN0YXRl66GcIOyEoOyWuFxyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gKiog66y07ZWc7Iqk7YGs66GkXHJcbiAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgLy8gdXNlSW5maW5pdGVTY3JvbGw6IGludGVyc2VjdGluZ09ic2VydmVy66W8IOyTsOuKlCBob29rXHJcbiAgLy8gZmV0Y2hNb3JlRWzqsIAg7ZmU66m07IOB7JeQIOuFuOy2nOuQkOydhCDrlYwoPSBudWxs7J20IOyVhOuLkCDrlYwp64qUIGludGVyc2VjdGluZ+ydtCB0cnVl6rCAIOuQmOqzoCDqt7jroIfsp4Ag7JWK7J2EIOuVkCBmYWxzZVxyXG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKTtcclxuXHJcbiAgLy8g7IOI6riAIOyDneyEse2VmOq4sCDtlajsiJhcclxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XHJcbiAgICAvLyDshJzrsoTsl5AgdGV4dOulvCDrs7TrgrTshJwg7IOIIOuplOyLnOyngOulvCDsg53shLHtlZjqs6Ag6re4IOuwmO2ZmOqwkuydhCByZXMuZGF0YeuhnCDrsJvslYTsmLRcclxuICAgIC8vIHRleHQ6IGlucHV0IOyeheugpeqwklxyXG4gICAgLy8gdXNlcklkOiB1c2VSb3V0ZXLroZwg6rCA7KC47JioIHVzZXJJZCArIO2VtOuLuSB1c2VySWTsl5Ag65Sw6528IOq4gCDsg53shLEg7IucIOyekeyEseyekOqwgCDri6zrnbzsp5BcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XHJcblxyXG4gICAgLy8g7ISc67KE7JeQ7IScIOuwm+yVhOyYqCDqsJLsnbQg7JeG7Jy866m0IOyXkOufrOyymOumrFxyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdTb21ldGhpbmcgaXMgd3JvbmcnKTtcclxuXHJcbiAgICAvLyAvLyDsg4jquIAg6rCd7LK066W8IOq1rOyEsVxyXG4gICAgLy8gY29uc3QgbmV3TXNnID0ge1xyXG4gICAgLy8gICAvLyDsnbTsoJzripQgbWFw7Jy866GcIOyWu+ydgCBp6rCAIOyVhOuLjCDquLDsobQgbXNncyDrsLDsl7Qoc3RhdGUp7J2YIOq4uOydtOulvCDsnbTsmqlcclxuICAgIC8vICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgIC8vICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuICAgIC8vICAgdGltZXN0YW1wOiBEYXRlLm5vdygpIC8qIO2YhOyerCDrgqDsp5wg67CPIOyLnOqwhCAqLyxcclxuICAgIC8vICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gc2V0TXNnc+uhnCBtc2dzIOuwsOyXtOyXkCDsg4gg66mU7Iuc7KeAIOy2lOqwgFxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIC8vIOq4gCDsiJjsoJXtlZjripQg7ZWo7IiYICgqKiBpZCDtlYTsmpQ6IOyWtOuKkCDquIDsnYQg7IiY7KCV7ZWgIOqyg+yduOyngClcclxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgLy8g7IiY7KCV65CcIOuplOyLnOyngDog7ISc67KE7JeQIHRleHTsmYAgdXNlcklk66W8IOuztOuCtOyEnCDsiJjsoJXrkJwg66mU7Iuc7KeA66W8IHJlcy5kYXRh66GcIOuwm+yVhOyYtFxyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIC8vIOyEnOuyhOyXkOyEnCDrsJvslYTsmKgg6rCS7J20IOyXhuycvOuptCDsl5Drn6zsspjrpqxcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignU29tZXRoaW5nIGlzIHdyb25nJyk7XHJcblxyXG4gICAgLy8g7IiY7KCV65CcIOuplOyLnOyngOulvCBtc2dzIOuwsOyXtOydmCB0YXJnZXRJbmRleOuyiOynuOyXkCDstpTqsIBcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8g7IiY7KCV7ZWgIOq4gOydmCDsnbjrjbHsiqQodGFyZ2V0SW5kZXgpXHJcbiAgICAgIC8vIGZpbmRJbmRleCjrsLDsl7TrqZTshJzrk5wpOiDrsLDsl7TsnYQg64+M66m07IScIO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIOyalOyGjOydmCAn7J24642x7IqkJyDrsJjtmZggKGNmLiBmaWx0ZXI6IO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIOyalOyGjOuTpOydhCDrqqjslYQgJ+yDiCDrsLDsl7Qn66GcIOuwmO2ZmClcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuXHJcbiAgICAgIC8vIHRhcmdldEluZGV46rCAIOyXhuycvOuptCgtMSkg6riw7KG0IG1zZ3Mg67Cw7Je0IOq3uOuMgOuhnCDrsJjtmZhcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiB0YXJnZXRJbmRleOuhnCDrsLDsl7Qg7IiY7KCVIOynhO2WiVxyXG4gICAgICAvLyDquLDsobQg67Cw7Je0IOuzteyCrDog6riw7KG0IG1zZ3Mg67Cw7Je07J2EIHNwcmVhZOuhnCDtjrzsuZwg65KkIOuLpOyLnCBbXeyXkCDrhKPslrQg7IOI66Gc7Jq0IOuwsOyXtCDsgqzrs7gg7IOd7ISxXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcblxyXG4gICAgICAvLyDsgqzrs7gg67Cw7Je07JeQIOyImOyglSDsp4Ttlok6IHNwbGljZeuhnCB0YXJnZXRJbmRleOu2gO2EsCAx6rCcKGRlbGV0ZUNvdW50KeulvCDsp4DsmrDqs6Ag6re4IOyekOumrOyXkCDsg4jroZzsmrQg7JqU7IaMKDPtla3snZgg6rCd7LK0KeydhCDrhKPsnYxcclxuICAgICAgLy8gKOyDiOuhnOyatCBpdGVtIC0gdGFyZ2V0SW5kZXjrsojsp7gg6riw7KG0IOuCtOyaqeuTpCDqt7jrjIDroZwsIHRleHTrp4wg7IOIIOqxuOuhnCDqtZDssrQpXHJcbiAgICAgIC8vIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XHJcbiAgICAgIC8vICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgIC8vICAgdGV4dDogdGV4dCxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAvLyDrsLDsl7Tsl5Agc3BsaWNl66GcIHRhcmdldEluZGV467aA7YSwIDHqsJzrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IiY7KCV65CcIOuplOyLnOyngChuZXdNc2cpIOy2lOqwgFxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKTtcclxuXHJcbiAgICAgIC8vIOyImOygleuQnCDsg4gg67Cw7Je0IOuwmO2ZmCAoPT4gc2V0TXNnc+yXkCDrk6TslrTqsIDsp4DrqbTshJwgbXNncyDthrXsp7jroZwg6rWQ7LK0KVxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOyImOygleydtCDrgZ3rgpjrqbQg7Iuk7ZaJIChlZGl0aW5nSWTrpbwg64uk7IucIG51bGzroZwg67CU6r+IKVxyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICAvLyDquIAg7IKt7KCc7ZWY64qUIO2VqOyImFxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAvLyDsgq3soJztlZjripQg6riA7J2YIGlkIOyZuOyXkCDtlbTri7kg6riA7J2YICd1c2VySWQn64+EIOyEnOuyhOyXkCDrs7Trg4QgPT4g7J2065WMICdwYXJhbXMn66GcIOuztOuCtOqzoCwg7ISc67KE7JeQ7ISc64qUIHF1ZXJ566GcIOuwm+ydjFxyXG4gICAgLy8geyBwYXJhbXM6IHsgdXNlcklkIH0gfTogdXJsIOuSpOyXkCA/dXNlcklkPXJveeyXkOyEnCByb3kg67aA67aEICh1cmzsl5AgYC9tZXNzYWdlcy8ke2lkfT91c2VySWQ9e3VzZXJJZH1g65286rOgIOuztOuCtOuPhCDrj5nsnbwpXHJcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIHJlY2VpdmVkSWQsIHR5cGVvZiBpZCk7IC8vIG51bWJlciwgc3RyaW5nICg9PiBtZXNzYWdlcy5qc29u7JeQ7IScIGlk6rCAIOusuOyekOyXtOuhnCDrkJjslrTsnojsnYwpXHJcblxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICAvLyAqKiDsgq3soJztlZwg64K07Jqp7J20IOu3sOyXkCDrsJjsmIHsnbQg7JWI65CY64qUIOqyveyasCAtLT4gdHlwZeydtCDslYgg66ee64qUIOqyg+ydvCDsiJgg7J6I7J2MICjsvZjshpTroZwg65GQIOyVhOydtOuUlOulvCDstpzroKXtlbTrs7Tqs6Ag7ZWc7Kq97J2EIOuLpOuluCDsqr3sl5Ag66ee7Law7KO86riwKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gU3RyaW5nKHJlY2VpdmVkSWQpKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsgq3soJwg7KeE7ZaJIChpdGVtIOy2lOqwgCDsl4bripQg6rGwIOu5vOqzoCDsiJjsoJUg6rO87KCV6rO8IOuPmeydvClcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIOyImOygleydtCDsmYTro4zrkKjsnYQg7JWM66as64qUIO2VqOyImDogZWRpdGluZ0lk66W8IG51bGzroZwg67CU6r+IICg9PiBpc0VkaXRpbmfsnbQgZmFsc2XroZwg67OA7ZmY65CY7Ja0IOq4sOyhtOydmCB0ZXh066W8IOuMgOyytO2VmOuNmCBNc2dJbnB1dCDrt7DqsIAg7IKs65287KeA6rOgIOyImOygleuQnCB0ZXh066GcIOuLpOyLnCDqtZDssrQpXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIC8vIOyhsO2ajO2VmOq4sDog7KCE7LK0IOuplOyLnOyngCDrtojrn6zsmKTripQg7ZWo7IiYIChvcmlnaW5hbE1zZ3Mg7ZWE7JqU7JeG7Ja07KeQKVxyXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gbXNnc1ttc2dzLmxlbmd0aCAtIDFd7J20IOyymOydjOyXkOuKlCDsl4bsnYQg7IiY64+EIOyeiOyWtOyEnCDrkqTsl5AgJz8nIOu2meydtOqzoCB8fCAnJyAoY3Vyc29y6rCAIOu5iCDqsJLsnLzroZwg6rCIIOyImCDsnojqsozrgZQpIOyYiOyZuOyymOumrFxyXG4gICAgY29uc3QgbmV3TXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnLCB7IHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgJycgfSB9KTtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7LWc7LSIIO2OmOydtOyngCDroZzrk5wg65WMIOyLpO2WiVxyXG4gIC8vICoqIHVzZUVmZmVjdCDrgrTsl5DshJzripQgYXN5bmMvYXdhaXTrpbwg7KeB7KCRIO2YuOy2nO2VmOyngCDslYrslYTslbwg7ZWoXHJcbiAgLy8gPT4gYXdhaXTrpbwg7Zi47Lac7ZWY64qUIOu2gOu2hOydhCDtlajsiJgoZ2V0TWVzc2FnZXMoKeuhnCDrlLDroZwg67m86rOgIOqxsOq4sOyXkCBhc3luY+uPhCDrtpnsl6zso7zquLBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8g7KCE7LK0IOuplOyLnOyngCDrtojrn6zsmKTquLBcclxuICAgIGdldE1lc3NhZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3Qg7Jes65+sIOqwnCDsgqzsmqkg6rCA64qlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGludGVyc2VjdGluZ+ydtCDsnojsnYQg65WM66eMIGdldE1lc3NhZ2VzKCkg7Zi47LacXHJcbiAgICBpZiAoaW50ZXJzZWN0aW5nKSBnZXRNZXNzYWdlcygpO1xyXG4gICAgLy8gaW50ZXJzZWN0aW5n7J20IOuwlOuAlCDrlYzrp4jri6Qg7Iuk7ZaJXHJcbiAgfSwgW2ludGVyc2VjdGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J21lc3NhZ2VzJz5cclxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICAgIC8vIHsuLi54feuhnCDqsJ3ssrTsnZgg6rCBIGtleeulvCDsoITrtoAg64Sj6rOgIE1zZ0l0ZW3sl5DshJwg7JO4IOuVjOuKlCDsnbzrtoDrp4wg6rOo65287IScIOyCrOyaqSDqsIDriqVcclxuICAgICAgICAgIC8vICfsiJjsoJUn7JeQIO2VhOyalO2VnCBvblVwZGF0ZSwgc3RhcnRFZGl0LCBpc0VkaXRpbmcg7JqU7IaM65Ok7J2EIHByb3Bz66GcIOuvuOumrCDrhKPslrTspIDri6QuXHJcbiAgICAgICAgICAvLyDsiJjsoJUg7Iuk7ZaJIOyLnCwg7IiY7KCV7ZWgIOq4gOydmCBpZOulvCBlZGl0aW5nSWTsl5Ag7ISk7KCV7ZWY64qUIHN0YXJ0RWRpdOqzvCwg66CM642U66eBIOykkeyduCDsmpTshowg7KSRIGVkaXRpbmdJZOyZgCBpZOqwgCDsnbzsuZjtlZjripQg7JqU7IaM6rCAIOyeiOuKlOyngOulvCDslYzroKTso7zripQgaXNFZGl0aW5n7J2AIOyXrOq4sOyEnCDrsJTroZwg7LKY66asICjrlLDroZwgdXNlU3RhdGXroZwg7ISg7Ja47ZWY7KeAIOyViuydjClcclxuICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9IC8qIG9uRGVsZXRl64qUIOyXrOq4sOyEnCDrsJTroZwg7Iuk7ZaJICovXHJcbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICB7Lyog7J20IGRpduqwgCDtmZTrqbTsg4Hsl5Ag64KY7YOA64Ks7J2EIOuVjCDri6TsnYwg642w7J207YSw66W8IOu2iOufrOyYpOuPhOuhnSDtlaggKOustO2VnOyKpO2BrOuhpCkgKi99XHJcbiAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJmZXRjaGVyIiwidXNlSW5maW5pdGVTY3JvbGwiLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VySWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInBhcmFtcyIsInJlY2VpdmVkSWQiLCJTdHJpbmciLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsIm1hcCIsIngiXSwic291cmNlUm9vdCI6IiJ9