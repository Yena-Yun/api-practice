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







 // ??????????????? ??????
// const UserIds = ['roy', 'jay'];
// ??????????????? (??? ?????? ??????) ???????????? ?????? ??????
// UserIds ?????? ????????? ??????([])??? ???????????? ??????
// 2?????? ??? (?????? ????????? ?????? ????????? ??????)
// const getRamdomUserId = () => UserIds[Math.round(Math.random())];
// 3??? ????????? ???
// const getRamdomUserId = () => UserIds[Math.round(Math.random() * UserIds.length)];
// // Array(50): ????????? 50?????? ?????? ??????
// // .fill(0): 50?????? ????????? ?????? ???????????? ??????
// // .map(val, i): map?????? ????????? val??? ???????????? ????????? '_'??? ?????? (=> i??? ??????????????? ??????)
// // ()(return???) ?????? {} (=> ?????? ??????)
// const originalMsgs = Array(50)
//   .fill(0)
//   .map((_, i) => ({
//     id: i + 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 + i * 1000 * 60 /* ?????? 13?????? + i??? millisecond??? ?????? ??? ?????? 60??? ?????? -> 1'???' ????????? ???????????? ????????? ?????? */,
//     text: `${i + 1} mock text`,
//   }))
//   .reverse(); /* ?????? ????????? ???????????? */
// ?????? originalMsgs ????????? JSON.stringify??? ????????? ????????? ????????? json ????????? ??? (=> json ????????? ?????? ???????????? ?????? ??????)
// console.log(originalMsgs);
// console.log(JSON.stringify(originalMsgs)); // JSON.stringify: ?????? ?????? ?????? ?????? ?????? json ????????? ????????????




var MsgList = function MsgList() {
  _s();

  // useRouter??? ???????????? ????????? ?????? ???????????? ??????
  // ????????? query('?') ?????? ?????? userId(roy)??? useRouter??? ??????
  // ????????? const route = useRouter() + route.query.userId??? ??????????????? ???????????? destructuring ?????? ??????
  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(),
      _useRouter$query$user = _useRouter.query.userId,
      userId = _useRouter$query$user === void 0 ? '' : _useRouter$query$user; // input?????? ???????????? ?????? ?????? ?????? ?????? ??? ?????? => ????????? originalMsgs ????????? '?????????' ????????? ??? => state??? ??????


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      msgs = _useState[0],
      setMsgs = _useState[1]; // ????????? ??? id??? '?????????' ??????????????? state??? ??????


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1]; // ** ???????????????


  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // useInfiniteScroll: intersectingObserver??? ?????? hook
  // fetchMoreEl??? ???????????? ???????????? ???(= null??? ?????? ???)??? intersecting??? true??? ?????? ????????? ?????? ??? false

  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_9__.default)(fetchMoreEl); // ????????? ???????????? 1??? ??? ??? ????????? ?????? ???????????? ??? ??????

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      hasNext = _useState3[0],
      setHasNext = _useState3[1]; // ?????? ???????????? ??????


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
              // // ?????? ????????? ??????
              // const newMsg = {
              //   // ????????? map?????? ?????? i??? ?????? ?????? msgs ??????(state)??? ????????? ??????
              //   id: msgs.length + 1,
              //   userId: getRamdomUserId(),
              //   timestamp: Date.now() /* ?????? ?????? ??? ?????? */,
              //   text: `${msgs.length + 1} ${text}`,
              // };
              // setMsgs??? msgs ????????? ??? ????????? ??????
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
  }(); // ??? ???????????? ?????? (** id ??????: ?????? ?????? ????????? ?????????)


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
              // ????????? ???????????? msgs ????????? targetIndex????????? ??????
              setMsgs(function (msgs) {
                // ????????? ?????? ?????????(targetIndex)
                // findIndex(???????????????): ????????? ????????? ?????? ????????? ???????????? ????????? '?????????' ?????? (cf. filter: ?????? ????????? ???????????? ???????????? ?????? '??? ??????'??? ??????)
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === id;
                }); // targetIndex??? ?????????(-1) ?????? msgs ?????? ????????? ??????

                if (targetIndex < 0) return msgs; // ** targetIndex??? ?????? ?????? ??????
                // ?????? ?????? ??????: ?????? msgs ????????? spread??? ?????? ??? ?????? []??? ?????? ????????? ?????? ?????? ??????

                var newMsgs = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs); // ?????? ????????? ?????? ??????: splice??? targetIndex?????? 1???(deleteCount)??? ????????? ??? ????????? ????????? ??????(3?????? ??????)??? ??????
                // (????????? item - targetIndex?????? ?????? ????????? ?????????, text??? ??? ?????? ??????)
                // newMsgs.splice(targetIndex, 1, {
                //   ...msgs[targetIndex],
                //   text: text,
                // });
                // ????????? splice??? targetIndex?????? 1?????? ????????? ??? ????????? ????????? ?????????(newMsg) ??????


                newMsgs.splice(targetIndex, 1, newMsg); // ????????? ??? ?????? ?????? (=> setMsgs??? ?????????????????? msgs ????????? ??????)

                return newMsgs;
              }); // ????????? ????????? ?????? (editingId??? ?????? null??? ??????)

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
  }(); // ??? ???????????? ??????


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
              // console.log(typeof receivedId, typeof id); // number, string (=> messages.json?????? id??? ???????????? ????????????)
              setMsgs(function (msgs) {
                // ** ????????? ????????? ?????? ????????? ????????? ?????? --> type??? ??? ?????? ?????? ??? ?????? (????????? ??? ???????????? ??????????????? ????????? ?????? ?????? ????????????)
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === String(receivedId);
                });
                if (targetIndex < 0) return msgs; // ** ?????? ?????? (item ?????? ?????? ??? ?????? ?????? ????????? ??????)

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
  }(); // ????????? ???????????? ????????? ??????: editingId??? null??? ?????? (=> isEditing??? false??? ???????????? ????????? text??? ???????????? MsgInput ?????? ???????????? ????????? text??? ?????? ??????)


  var doneEdit = function doneEdit() {
    return setEditingId(null);
  }; // ????????????: ?????? ????????? ???????????? ?????? (originalMsgs ???????????????)


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
              // ** ????????? ???????????? 1??? ??? ?????? ??? ?????? ?????? ???????????? ??? ??????
              // get?????? ????????? ???????????? ????????? hasNext??? false??? ??????
              if (newMsgs.length === 0) setHasNext(false);
              setMsgs(function (msgs) {
                return [].concat((0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs), (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newMsgs));
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getMessages() {
      return _ref4.apply(this, arguments);
    };
  }(); // // ?????? ????????? ?????? ??? ????????? 1??? ??????
  // // ** useEffect ???????????? async/await??? ?????? ???????????? ????????? ???
  // // => await??? ???????????? ????????? ??????(getMessages()??? ?????? ?????? ????????? async??? ????????????
  // useEffect(() => {
  //   // ?????? ????????? ????????????
  //   getMessages();
  // }, []);
  // useEffect ?????? ??? ?????? ??????


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // intersecting??? hasNext??? ??? ??? true??? ?????? getMessages() ??????
    if (intersecting && hasNext) getMessages(); // intersecting??? ?????? ????????? ??????
  }, [intersecting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_6__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return (
          /*#__PURE__*/
          // {...x}??? ????????? ??? key??? ?????? ?????? MsgItem?????? ??? ?????? ????????? ????????? ?????? ??????
          // '??????'??? ????????? onUpdate, startEdit, isEditing ???????????? props??? ?????? ????????????.
          // ?????? ?????? ???, ????????? ?????? id??? editingId??? ???????????? startEdit???, ????????? ?????? ?????? ??? editingId??? id??? ???????????? ????????? ???????????? ???????????? isEditing??? ????????? ?????? ?????? (?????? useState??? ???????????? ??????)
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, x), {}, {
            onUpdate: onUpdate,
            startEdit: function startEdit() {
              return setEditingId(x.id);
            },
            isEditing: editingId === x.id,
            onDelete: function onDelete() {
              return _onDelete(x.id);
            }
            /* onDelete??? ????????? ?????? ?????? */
            ,
            myId: userId
          }), x.id, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 11
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "t2F/HMDCnnQZQPEEO/cAn1JgVLQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDY3YmFhOTY0YTliNDkzN2ZiMTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbUJBRUlMLHNEQUFTLEVBRmI7QUFBQSx5Q0FDRU0sS0FERixDQUNXQyxNQURYO0FBQUEsTUFDV0EsTUFEWCxzQ0FDb0IsRUFEcEIseUJBSm9CLENBUXBCOzs7QUFDQSxrQkFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9XLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQVRvQixDQVVwQjs7O0FBQ0EsbUJBQWtDWiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPYSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQVhvQixDQWFwQjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHYiw2Q0FBTSxDQUFDLElBQUQsQ0FBMUIsQ0Fkb0IsQ0FlcEI7QUFDQTs7QUFDQSxNQUFNYyxZQUFZLEdBQUdULGlFQUFpQixDQUFDUSxXQUFELENBQXRDLENBakJvQixDQWtCcEI7O0FBQ0EsbUJBQThCZiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFBQSxNQUFPaUIsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQixpQkFuQm9CLENBcUJwQjs7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLHVSQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSU1kLGlEQUFP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QUNuQixZQUFELENBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUEsNEJBQ0UsK0RBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVHO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR1IsSUFBSSxDQUFDMkIsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQTtBQUFBO0FBQ1I7QUFDQTtBQUNBO0FBQ0EseUVBQUMsNkNBQUQsa0NBRU1BLENBRk47QUFHRSxvQkFBUSxFQUFFaEIsUUFIWjtBQUlFLHFCQUFTLEVBQUU7QUFBQSxxQkFBTVQsWUFBWSxDQUFDeUIsQ0FBQyxDQUFDZixFQUFILENBQWxCO0FBQUEsYUFKYjtBQUtFLHFCQUFTLEVBQUVYLFNBQVMsS0FBSzBCLENBQUMsQ0FBQ2YsRUFMN0I7QUFNRSxvQkFBUSxFQUFFO0FBQUEscUJBQU1PLFNBQVEsQ0FBQ1EsQ0FBQyxDQUFDZixFQUFILENBQWQ7QUFBQTtBQUFzQjtBQU5sQztBQU9FLGdCQUFJLEVBQUVkO0FBUFIsY0FDTzZCLENBQUMsQ0FBQ2YsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBb0JFO0FBQUssU0FBRyxFQUFFVDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQkY7QUFBQSxrQkFERjtBQXdCRCxDQTVKRDs7R0FBTVA7VUFNQUwsb0RBV2lCSTs7O0tBakJqQkM7QUE4Sk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUIOuwsOyXtFxyXG4vLyBjb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J107XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQgKOuRmCDspJHsl5Ag7ZWY64KYKSDrnpzrjaTtlZjqsowg64Sj64qUIO2VqOyImFxyXG4vLyBVc2VySWRzIOuwsOyXtCDsnbjrjbHsiqQg7J6Q66asKFtdKeyXkCDrnpzrjaTtlajsiJgg64Sj6riwXHJcbi8vIDLqsJzsnbwg65WMICjrkqTsl5Ag67Cw7Je07J2YIOq4uOydtCDqs7HtlZjsp4Ag7JWK7J2MKVxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG4vLyAz6rCcIOydtOyDgeydvCDrlYxcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBVc2VySWRzLmxlbmd0aCldO1xyXG5cclxuLy8gLy8gQXJyYXkoNTApOiDqs7XqsITsnbQgNTDqsJzsnbgg67Cw7Je0IOyDneyEsVxyXG4vLyAvLyAuZmlsbCgwKTogNTDqsJzsnZgg6rO16rCE7J2EIOyVhOustCDqsJLsnLzroZzrgpgg7LGE7JuAXHJcbi8vIC8vIC5tYXAodmFsLCBpKTogbWFw7Jy866GcIOq6vOuCtOuKlCB2YWzsnbQg7KSR7JqU7ZWY7KeAIOyViuycvOuptCAnXyfroZwg7LKY66asICg9PiBp66eMIOyCrOyaqe2VmOugpOuKlCDqsr3smrApXHJcbi8vIC8vICgpKHJldHVybuusuCkg7JWI7JeQIHt9ICg9PiDqsJ3ssrQg67CY7ZmYKVxyXG4vLyBjb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcclxuLy8gICAuZmlsbCgwKVxyXG4vLyAgIC5tYXAoKF8sIGkpID0+ICh7XHJcbi8vICAgICBpZDogaSArIDEsXHJcbi8vICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4vLyAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCAvKiDquLDrs7ggMTPsnpDrpqwgKyBp66W8IG1pbGxpc2Vjb25k66GcIOuwlOq+vCDrkqQg64uk7IucIDYw7J2EIOqzse2VqCAtPiAxJ+u2hCcg64uo7JyE66GcIOymneqwgO2VmOupsCDsi5zqsITsnbQg7LCN7Z6YICovLFxyXG4vLyAgICAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGAsXHJcbi8vICAgfSkpXHJcbi8vICAgLnJldmVyc2UoKTsgLyog7LWc6re8IOyInOyEnOuhnCDssI3tnojrj4TroZ0gKi9cclxuXHJcbi8vIOunjOuToCBvcmlnaW5hbE1zZ3Mg67Cw7Je07J2EIEpTT04uc3RyaW5naWZ566GcIOqwkOyLuOyEnCDsvZjshpTsl5Ag7LCN7Jy866m0IGpzb24g7ZiV7YOc6rCAIOuQqCAoPT4ganNvbiDtjIzsnbzsl5Ag67CU66GcIOuzteu2me2VtOyEnCDsgqzsmqkg6rCA64qlKVxyXG4vLyBjb25zb2xlLmxvZyhvcmlnaW5hbE1zZ3MpO1xyXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTsgLy8gSlNPTi5zdHJpbmdpZnk6IOuwsOyXtCDslYjsl5Ag6rCd7LK0IOyXrOufrCDqsJzsnbgganNvbiDtmJXtg5zroZwg66eM65Ok7Ja07KSMXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIC8vIHVzZVJvdXRlcuulvCDsgqzsmqntlZjsl6wg7L+866as7JeQIOuLtOq4tCDrrLjsnpDsl7TsnYQg67Cb7J2MXHJcbiAgLy8g7KO87IaM7LC9IHF1ZXJ5KCc/Jykg65Kk7JeQIOu2meydgCB1c2VySWQocm95KeulvCB1c2VSb3V0ZXLroZwg67Cb7J2MXHJcbiAgLy8g7JuQ656Y64qUIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCkgKyByb3V0ZS5xdWVyeS51c2VySWTroZwg6rq864K07JOw7KeA66eMIOyXrOq4sOyEnOuKlCBkZXN0cnVjdHVyaW5nIOusuOuylSDsgqzsmqlcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyB1c2VySWQgPSAnJyB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gaW5wdXTqsJLsnYQg7KCc7Lac7ZWY66m0IOyDiOq4gCDsg53shLEg65iQ64qUIOq4sOyhtCDquIAg7IiY7KCVID0+IOy0iOq4sOqwkiBvcmlnaW5hbE1zZ3Mg67Cw7Je07J2AICfrs4DtlZjripQnIOyalOyGjOqwgCDrkKggPT4gc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIOyImOygle2VoCDquIAgaWTrj4QgJ+uzgO2VmOuKlCcg7JqU7IaM7J2066+A66GcIHN0YXRl66GcIOyEoOyWuFxyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gKiog66y07ZWc7Iqk7YGs66GkXHJcbiAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgLy8gdXNlSW5maW5pdGVTY3JvbGw6IGludGVyc2VjdGluZ09ic2VydmVy66W8IOyTsOuKlCBob29rXHJcbiAgLy8gZmV0Y2hNb3JlRWzqsIAg7ZmU66m07IOB7JeQIOuFuOy2nOuQkOydhCDrlYwoPSBudWxs7J20IOyVhOuLkCDrlYwp64qUIGludGVyc2VjdGluZ+ydtCB0cnVl6rCAIOuQmOqzoCDqt7jroIfsp4Ag7JWK7J2EIOuVkCBmYWxzZVxyXG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKTtcclxuICAvLyDrp4jsp4Drp4kg7J24642x7Iqk6rCAIDHsnbwg65WMIOu5iCDrsLDsl7TsnYQg6rOE7IaNIO2YuOy2nO2VmOuKlCDqsoMg67Cp7KeAXHJcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vIOyDiOq4gCDsg53shLHtlZjquLAg7ZWo7IiYXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xyXG4gICAgLy8g7ISc67KE7JeQIHRleHTrpbwg67O064K07IScIOyDiCDrqZTsi5zsp4Drpbwg7IOd7ISx7ZWY6rOgIOq3uCDrsJjtmZjqsJLsnYQgcmVzLmRhdGHroZwg67Cb7JWE7Ji0XHJcbiAgICAvLyB0ZXh0OiBpbnB1dCDsnoXroKXqsJJcclxuICAgIC8vIHVzZXJJZDogdXNlUm91dGVy66GcIOqwgOyguOyYqCB1c2VySWQgKyDtlbTri7kgdXNlcklk7JeQIOuUsOudvCDquIAg7IOd7ISxIOyLnCDsnpHshLHsnpDqsIAg64us65287KeQXHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIC8vIOyEnOuyhOyXkOyEnCDrsJvslYTsmKgg6rCS7J20IOyXhuycvOuptCDsl5Drn6zsspjrpqxcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignU29tZXRoaW5nIGlzIHdyb25nJyk7XHJcblxyXG4gICAgLy8gLy8g7IOI6riAIOqwneyytOulvCDqtazshLFcclxuICAgIC8vIGNvbnN0IG5ld01zZyA9IHtcclxuICAgIC8vICAgLy8g7J207KCc64qUIG1hcOycvOuhnCDslrvsnYAgaeqwgCDslYTri4wg6riw7KG0IG1zZ3Mg67Cw7Je0KHN0YXRlKeydmCDquLjsnbTrpbwg7J207JqpXHJcbiAgICAvLyAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAvLyAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbiAgICAvLyAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSAvKiDtmITsnqwg64Kg7KecIOuwjyDsi5zqsIQgKi8sXHJcbiAgICAvLyAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIHNldE1zZ3ProZwgbXNncyDrsLDsl7Tsl5Ag7IOIIOuplOyLnOyngCDstpTqsIBcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICAvLyDquIAg7IiY7KCV7ZWY64qUIO2VqOyImCAoKiogaWQg7ZWE7JqUOiDslrTripAg6riA7J2EIOyImOygle2VoCDqsoPsnbjsp4ApXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgIC8vIOyImOygleuQnCDrqZTsi5zsp4A6IOyEnOuyhOyXkCB0ZXh07JmAIHVzZXJJZOulvCDrs7TrgrTshJwg7IiY7KCV65CcIOuplOyLnOyngOulvCByZXMuZGF0YeuhnCDrsJvslYTsmLRcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuXHJcbiAgICAvLyDshJzrsoTsl5DshJwg67Cb7JWE7JioIOqwkuydtCDsl4bsnLzrqbQg7JeQ65+s7LKY66asXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZycpO1xyXG5cclxuICAgIC8vIOyImOygleuQnCDrqZTsi5zsp4DrpbwgbXNncyDrsLDsl7TsnZggdGFyZ2V0SW5kZXjrsojsp7jsl5Ag7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIC8vIOyImOygle2VoCDquIDsnZgg7J24642x7IqkKHRhcmdldEluZGV4KVxyXG4gICAgICAvLyBmaW5kSW5kZXgo67Cw7Je066mU7ISc65OcKTog67Cw7Je07J2EIOuPjOuptOyEnCDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCDsmpTshozsnZggJ+yduOuNseyKpCcg67CY7ZmYIChjZi4gZmlsdGVyOiDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCDsmpTshozrk6TsnYQg66qo7JWEICfsg4gg67Cw7Je0J+uhnCDrsJjtmZgpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAvLyB0YXJnZXRJbmRleOqwgCDsl4bsnLzrqbQoLTEpIOq4sOyhtCBtc2dzIOuwsOyXtCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiogdGFyZ2V0SW5kZXjroZwg67Cw7Je0IOyImOyglSDsp4TtlolcclxuICAgICAgLy8g6riw7KG0IOuwsOyXtCDrs7Xsgqw6IOq4sOyhtCBtc2dzIOuwsOyXtOydhCBzcHJlYWTroZwg7Y687LmcIOuSpCDri6Tsi5wgW13sl5Ag64Sj7Ja0IOyDiOuhnOyatCDrsLDsl7Qg7IKs67O4IOyDneyEsVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG5cclxuICAgICAgLy8g7IKs67O4IOuwsOyXtOyXkCDsiJjsoJUg7KeE7ZaJOiBzcGxpY2XroZwgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnChkZWxldGVDb3VudCnrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IOI66Gc7Jq0IOyalOyGjCgz7ZWt7J2YIOqwneyytCnsnYQg64Sj7J2MXHJcbiAgICAgIC8vICjsg4jroZzsmrQgaXRlbSAtIHRhcmdldEluZGV467KI7Ke4IOq4sOyhtCDrgrTsmqnrk6Qg6re464yA66GcLCB0ZXh066eMIOyDiCDqsbjroZwg6rWQ7LK0KVxyXG4gICAgICAvLyBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAvLyAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAvLyAgIHRleHQ6IHRleHQsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgLy8g67Cw7Je07JeQIHNwbGljZeuhnCB0YXJnZXRJbmRleOu2gO2EsCAx6rCc66W8IOyngOyasOqzoCDqt7gg7J6Q66as7JeQIOyImOygleuQnCDrqZTsi5zsp4AobmV3TXNnKSDstpTqsIBcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XHJcblxyXG4gICAgICAvLyDsiJjsoJXrkJwg7IOIIOuwsOyXtCDrsJjtmZggKD0+IHNldE1zZ3Psl5Ag65Ok7Ja06rCA7KeA66m07IScIG1zZ3Mg7Ya17Ke466GcIOq1kOyytClcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDsiJjsoJXsnbQg64Gd64KY66m0IOyLpO2WiSAoZWRpdGluZ0lk66W8IOuLpOyLnCBudWxs66GcIOuwlOq/iClcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyCreygnO2VmOuKlCDtlajsiJhcclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgLy8g7IKt7KCc7ZWY64qUIOq4gOydmCBpZCDsmbjsl5Ag7ZW064u5IOq4gOydmCAndXNlcklkJ+uPhCDshJzrsoTsl5Ag67O064OEID0+IOydtOuVjCAncGFyYW1zJ+uhnCDrs7TrgrTqs6AsIOyEnOuyhOyXkOyEnOuKlCBxdWVyeeuhnCDrsJvsnYxcclxuICAgIC8vIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH06IHVybCDrkqTsl5AgP3VzZXJJZD1yb3nsl5DshJwgcm95IOu2gOu2hCAodXJs7JeQIGAvbWVzc2FnZXMvJHtpZH0/dXNlcklkPXt1c2VySWR9YOudvOqzoCDrs7TrgrTrj4Qg64+Z7J28KVxyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiByZWNlaXZlZElkLCB0eXBlb2YgaWQpOyAvLyBudW1iZXIsIHN0cmluZyAoPT4gbWVzc2FnZXMuanNvbuyXkOyEnCBpZOqwgCDrrLjsnpDsl7TroZwg65CY7Ja07J6I7J2MKVxyXG5cclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8gKiog7IKt7KCc7ZWcIOuCtOyaqeydtCDrt7Dsl5Ag67CY7JiB7J20IOyViOuQmOuKlCDqsr3smrAgLS0+IHR5cGXsnbQg7JWIIOunnuuKlCDqsoPsnbwg7IiYIOyeiOydjCAo7L2Y7IaU66GcIOuRkCDslYTsnbTrlJTrpbwg7Lac66Cl7ZW067O06rOgIO2VnOyqveydhCDri6Trpbgg7Kq97JeQIOunnuy2sOyjvOq4sClcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IFN0cmluZyhyZWNlaXZlZElkKSk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiog7IKt7KCcIOynhO2WiSAoaXRlbSDstpTqsIAg7JeG64qUIOqxsCDrubzqs6Ag7IiY7KCVIOqzvOygleqzvCDrj5nsnbwpXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyDsiJjsoJXsnbQg7JmE66OM65Co7J2EIOyVjOumrOuKlCDtlajsiJg6IGVkaXRpbmdJZOulvCBudWxs66GcIOuwlOq/iCAoPT4gaXNFZGl0aW5n7J20IGZhbHNl66GcIOuzgO2ZmOuQmOyWtCDquLDsobTsnZggdGV4dOulvCDrjIDssrTtlZjrjZggTXNnSW5wdXQg67ew6rCAIOyCrOudvOyngOqzoCDsiJjsoJXrkJwgdGV4dOuhnCDri6Tsi5wg6rWQ7LK0KVxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICAvLyDsobDtmoztlZjquLA6IOyghOyytCDrqZTsi5zsp4Ag67aI65+s7Jik64qUIO2VqOyImCAob3JpZ2luYWxNc2dzIO2VhOyalOyXhuyWtOynkClcclxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIG1zZ3NbbXNncy5sZW5ndGggLSAxXeydtCDsspjsnYzsl5DripQg7JeG7J2EIOyImOuPhCDsnojslrTshJwg65Kk7JeQICc/JyDrtpnsnbTqs6AgfHwgJycgKGN1cnNvcuqwgCDruYgg6rCS7Jy866GcIOqwiCDsiJgg7J6I6rKM64GUKSDsmIjsmbjsspjrpqxcclxuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywgeyBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH0gfSk7XHJcblxyXG4gICAgLy8gKiog66eI7KeA66eJIOyduOuNseyKpOqwgCAx7J28IOuVjCDrkqTsl5Ag67mIIOuwsOyXtCDqs4Tsho0g67Cb7JWE7Jik64qUIOqygyDrsKnsp4BcclxuICAgIC8vIGdldOycvOuhnCDrsJvslYTsmKgg66mU7Iuc7KeA6rCAIOyXhuycvOuptCBoYXNOZXh066W8IGZhbHNl66GcIOyghO2ZmFxyXG4gICAgaWYgKG5ld01zZ3MubGVuZ3RoID09PSAwKSBzZXRIYXNOZXh0KGZhbHNlKTtcclxuXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pO1xyXG4gIH07XHJcblxyXG4gIC8vIC8vIOy1nOy0iCDtjpjsnbTsp4Ag7KCR7IaNIOyLnCDrrLTsobDqsbQgMeuyiCDsi6TtlolcclxuICAvLyAvLyAqKiB1c2VFZmZlY3Qg64K07JeQ7ISc64qUIGFzeW5jL2F3YWl066W8IOyngeygkSDtmLjstpztlZjsp4Ag7JWK7JWE7JW8IO2VqFxyXG4gIC8vIC8vID0+IGF3YWl066W8IO2YuOy2nO2VmOuKlCDrtoDrtoTsnYQg7ZWo7IiYKGdldE1lc3NhZ2VzKCnroZwg65Sw66GcIOu5vOqzoCDqsbDquLDsl5AgYXN5bmPrj4Qg67aZ7Jes7KO86riwXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIC8vIOyghOyytCDrqZTsi5zsp4Ag67aI65+s7Jik6riwXHJcbiAgLy8gICBnZXRNZXNzYWdlcygpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0IOyXrOufrCDqsJwg7IKs7JqpIOqwgOuKpVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpbnRlcnNlY3Rpbmfqs7wgaGFzTmV4dOqwgCDrkZgg64ukIHRydWXsnbwg65WM66eMIGdldE1lc3NhZ2VzKCkg7Zi47LacXHJcbiAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHQpIGdldE1lc3NhZ2VzKCk7XHJcbiAgICAvLyBpbnRlcnNlY3RpbmfsnbQg67CU64CUIOuVjOuniOuLpCDsi6TtlolcclxuICB9LCBbaW50ZXJzZWN0aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgLy8gey4uLnh966GcIOqwneyytOydmCDqsIEga2V566W8IOyghOu2gCDrhKPqs6AgTXNnSXRlbeyXkOyEnCDsk7gg65WM64qUIOydvOu2gOunjCDqs6jrnbzshJwg7IKs7JqpIOqwgOuKpVxyXG4gICAgICAgICAgLy8gJ+yImOyglSfsl5Ag7ZWE7JqU7ZWcIG9uVXBkYXRlLCBzdGFydEVkaXQsIGlzRWRpdGluZyDsmpTshozrk6TsnYQgcHJvcHProZwg66+466asIOuEo+yWtOykgOuLpC5cclxuICAgICAgICAgIC8vIOyImOyglSDsi6Ttlokg7IucLCDsiJjsoJXtlaAg6riA7J2YIGlk66W8IGVkaXRpbmdJZOyXkCDshKTsoJXtlZjripQgc3RhcnRFZGl06rO8LCDroIzrjZTrp4Eg7KSR7J24IOyalOyGjCDspJEgZWRpdGluZ0lk7JmAIGlk6rCAIOydvOy5mO2VmOuKlCDsmpTshozqsIAg7J6I64qU7KeA66W8IOyVjOugpOyjvOuKlCBpc0VkaXRpbmfsnYAg7Jes6riw7IScIOuwlOuhnCDsspjrpqwgKOuUsOuhnCB1c2VTdGF0ZeuhnCDshKDslrjtlZjsp4Ag7JWK7J2MKVxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gLyogb25EZWxldGXripQg7Jes6riw7IScIOuwlOuhnCDsi6TtlokgKi9cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIHsvKiDsnbQgZGl26rCAIO2ZlOuptOyDgeyXkCDrgpjtg4DrgqzsnYQg65WMIOuLpOydjCDrjbDsnbTthLDrpbwg67aI65+s7Jik64+E66GdIO2VqCAo66y07ZWc7Iqk7YGs66GkKSAqL31cclxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVJvdXRlciIsIk1zZ0lucHV0IiwiTXNnSXRlbSIsImZldGNoZXIiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwiZmV0Y2hNb3JlRWwiLCJpbnRlcnNlY3RpbmciLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJwYXJhbXMiLCJyZWNlaXZlZElkIiwiU3RyaW5nIiwiZ2V0TWVzc2FnZXMiLCJjdXJzb3IiLCJsZW5ndGgiLCJtYXAiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==