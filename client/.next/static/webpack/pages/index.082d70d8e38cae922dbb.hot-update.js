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

  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_9__.default)(fetchMoreEl); // ?????? ???????????? ??????

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
  }(); // ?????? ????????? ?????? ??? ??????
  // ** useEffect ???????????? async/await??? ?????? ???????????? ????????? ???
  // => await??? ???????????? ????????? ??????(getMessages()??? ?????? ?????? ????????? async??? ????????????


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // ?????? ????????? ????????????
    getMessages();
  }, []); // useEffect ?????? ??? ?????? ??????

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // intersecting??? ?????? ?????? getMessages() ??????
    if (intersecting) getMessages(); // intersecting??? ?????? ????????? ??????
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDgyZDcwZDhlMzhjYWU5MjJkYmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbUJBRUlMLHNEQUFTLEVBRmI7QUFBQSx5Q0FDRU0sS0FERixDQUNXQyxNQURYO0FBQUEsTUFDV0EsTUFEWCxzQ0FDb0IsRUFEcEIseUJBSm9CLENBUXBCOzs7QUFDQSxrQkFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9XLElBQVA7QUFBQSxNQUFhQyxPQUFiLGdCQVRvQixDQVVwQjs7O0FBQ0EsbUJBQWtDWiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPYSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQVhvQixDQWFwQjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHYiw2Q0FBTSxDQUFDLElBQUQsQ0FBMUIsQ0Fkb0IsQ0FlcEI7QUFDQTs7QUFDQSxNQUFNYyxZQUFZLEdBQUdULGlFQUFpQixDQUFDUSxXQUFELENBQXRDLENBakJvQixDQW1CcEI7O0FBQ0EsTUFBTUUsUUFBUTtBQUFBLHVSQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSU1aLGlEQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRVksZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRUixnQkFBQUEsTUFBTSxFQUFOQTtBQUFSLGVB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Q0FBRDtBQUFBO0FBQUE7QUFDUjtBQUNBO0FBQ0E7QUFDQSx5RUFBQyw2Q0FBRCxrQ0FFTUEsQ0FGTjtBQUdFLG9CQUFRLEVBQUVoQixRQUhaO0FBSUUscUJBQVMsRUFBRTtBQUFBLHFCQUFNUCxZQUFZLENBQUN1QixDQUFDLENBQUNmLEVBQUgsQ0FBbEI7QUFBQSxhQUpiO0FBS0UscUJBQVMsRUFBRVQsU0FBUyxLQUFLd0IsQ0FBQyxDQUFDZixFQUw3QjtBQU1FLG9CQUFRLEVBQUU7QUFBQSxxQkFBTU8sU0FBUSxDQUFDUSxDQUFDLENBQUNmLEVBQUgsQ0FBZDtBQUFBO0FBQXNCO0FBTmxDO0FBT0UsZ0JBQUksRUFBRVo7QUFQUixjQUNPMkIsQ0FBQyxDQUFDZixFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFvQkU7QUFBSyxTQUFHLEVBQUVQO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBLGtCQURGO0FBd0JELENBckpEOztHQUFNUDtVQU1BTCxvREFXaUJJOzs7S0FqQmpCQztBQXVKTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcic7XHJcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQg67Cw7Je0XHJcbi8vIGNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCAo65GYIOykkeyXkCDtlZjrgpgpIOuenOuNpO2VmOqyjCDrhKPripQg7ZWo7IiYXHJcbi8vIFVzZXJJZHMg67Cw7Je0IOyduOuNseyKpCDsnpDrpqwoW10p7JeQIOuenOuNpO2VqOyImCDrhKPquLBcclxuLy8gMuqwnOydvCDrlYwgKOuSpOyXkCDrsLDsl7TsnZgg6ri47J20IOqzse2VmOyngCDslYrsnYwpXHJcbi8vIGNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XHJcbi8vIDPqsJwg7J207IOB7J28IOuVjFxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIFVzZXJJZHMubGVuZ3RoKV07XHJcblxyXG4vLyAvLyBBcnJheSg1MCk6IOqzteqwhOydtCA1MOqwnOyduCDrsLDsl7Qg7IOd7ISxXHJcbi8vIC8vIC5maWxsKDApOiA1MOqwnOydmCDqs7XqsITsnYQg7JWE66y0IOqwkuycvOuhnOuCmCDssYTsm4BcclxuLy8gLy8gLm1hcCh2YWwsIGkpOiBtYXDsnLzroZwg6rq864K064qUIHZhbOydtCDspJHsmpTtlZjsp4Ag7JWK7Jy866m0ICdfJ+uhnCDsspjrpqwgKD0+IGnrp4wg7IKs7Jqp7ZWY66Ck64qUIOqyveyasClcclxuLy8gLy8gKCkocmV0dXJu66y4KSDslYjsl5Age30gKD0+IOqwneyytCDrsJjtmZgpXHJcbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4vLyAgIC5maWxsKDApXHJcbi8vICAgLm1hcCgoXywgaSkgPT4gKHtcclxuLy8gICAgIGlkOiBpICsgMSxcclxuLy8gICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwIC8qIOq4sOuzuCAxM+yekOumrCArIGnrpbwgbWlsbGlzZWNvbmTroZwg67CU6r68IOuSpCDri6Tsi5wgNjDsnYQg6rOx7ZWoIC0+IDEn67aEJyDri6jsnITroZwg7Kad6rCA7ZWY66mwIOyLnOqwhOydtCDssI3tnpggKi8sXHJcbi8vICAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YCxcclxuLy8gICB9KSlcclxuLy8gICAucmV2ZXJzZSgpOyAvKiDstZzqt7wg7Iic7ISc66GcIOywje2eiOuPhOuhnSAqL1xyXG5cclxuLy8g66eM65OgIG9yaWdpbmFsTXNncyDrsLDsl7TsnYQgSlNPTi5zdHJpbmdpZnnroZwg6rCQ7Iu47IScIOy9mOyGlOyXkCDssI3snLzrqbQganNvbiDtmJXtg5zqsIAg65CoICg9PiBqc29uIO2MjOydvOyXkCDrsJTroZwg67O167aZ7ZW07IScIOyCrOyaqSDqsIDriqUpXHJcbi8vIGNvbnNvbGUubG9nKG9yaWdpbmFsTXNncyk7XHJcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTXNncykpOyAvLyBKU09OLnN0cmluZ2lmeTog67Cw7Je0IOyViOyXkCDqsJ3ssrQg7Jes65+sIOqwnOyduCBqc29uIO2Yle2DnOuhnCDrp4zrk6TslrTspIxcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgLy8gdXNlUm91dGVy66W8IOyCrOyaqe2VmOyXrCDsv7zrpqzsl5Ag64u06ri0IOusuOyekOyXtOydhCDrsJvsnYxcclxuICAvLyDso7zshozssL0gcXVlcnkoJz8nKSDrkqTsl5Ag67aZ7J2AIHVzZXJJZChyb3kp66W8IHVzZVJvdXRlcuuhnCDrsJvsnYxcclxuICAvLyDsm5DrnpjripQgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKSArIHJvdXRlLnF1ZXJ5LnVzZXJJZOuhnCDqurzrgrTsk7Dsp4Drp4wg7Jes6riw7ISc64qUIGRlc3RydWN0dXJpbmcg66y467KVIOyCrOyaqVxyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBpbnB1dOqwkuydhCDsoJzstpztlZjrqbQg7IOI6riAIOyDneyEsSDrmJDripQg6riw7KG0IOq4gCDsiJjsoJUgPT4g7LSI6riw6rCSIG9yaWdpbmFsTXNncyDrsLDsl7TsnYAgJ+uzgO2VmOuKlCcg7JqU7IaM6rCAIOuQqCA9PiBzdGF0ZeuhnCDshKDslrhcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8g7IiY7KCV7ZWgIOq4gCBpZOuPhCAn67OA7ZWY64qUJyDsmpTshozsnbTrr4DroZwgc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyAqKiDrrLTtlZzsiqTtgazroaRcclxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcclxuICAvLyB1c2VJbmZpbml0ZVNjcm9sbDogaW50ZXJzZWN0aW5nT2JzZXJ2ZXLrpbwg7JOw64qUIGhvb2tcclxuICAvLyBmZXRjaE1vcmVFbOqwgCDtmZTrqbTsg4Hsl5Ag64W47Lac65CQ7J2EIOuVjCg9IG51bGzsnbQg7JWE64uQIOuVjCnripQgaW50ZXJzZWN0aW5n7J20IHRydWXqsIAg65CY6rOgIOq3uOugh+yngCDslYrsnYQg65WQIGZhbHNlXHJcbiAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpO1xyXG5cclxuICAvLyDsg4jquIAg7IOd7ISx7ZWY6riwIO2VqOyImFxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgKHRleHQpID0+IHtcclxuICAgIC8vIOyEnOuyhOyXkCB0ZXh066W8IOuztOuCtOyEnCDsg4gg66mU7Iuc7KeA66W8IOyDneyEse2VmOqzoCDqt7gg67CY7ZmY6rCS7J2EIHJlcy5kYXRh66GcIOuwm+yVhOyYtFxyXG4gICAgLy8gdGV4dDogaW5wdXQg7J6F66Cl6rCSXHJcbiAgICAvLyB1c2VySWQ6IHVzZVJvdXRlcuuhnCDqsIDsoLjsmKggdXNlcklkICsg7ZW064u5IHVzZXJJZOyXkCDrlLDrnbwg6riAIOyDneyEsSDsi5wg7J6R7ISx7J6Q6rCAIOuLrOudvOynkFxyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuXHJcbiAgICAvLyDshJzrsoTsl5DshJwg67Cb7JWE7JioIOqwkuydtCDsl4bsnLzrqbQg7JeQ65+s7LKY66asXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZycpO1xyXG5cclxuICAgIC8vIC8vIOyDiOq4gCDqsJ3ssrTrpbwg6rWs7ISxXHJcbiAgICAvLyBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAvLyAgIC8vIOydtOygnOuKlCBtYXDsnLzroZwg7Ja77J2AIGnqsIAg7JWE64uMIOq4sOyhtCBtc2dzIOuwsOyXtChzdGF0ZSnsnZgg6ri47J2066W8IOydtOyaqVxyXG4gICAgLy8gICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgLy8gICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgLy8gICB0aW1lc3RhbXA6IERhdGUubm93KCkgLyog7ZiE7J6sIOuCoOynnCDrsI8g7Iuc6rCEICovLFxyXG4gICAgLy8gICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBzZXRNc2dz66GcIG1zZ3Mg67Cw7Je07JeQIOyDiCDrqZTsi5zsp4Ag7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyImOygle2VmOuKlCDtlajsiJggKCoqIGlkIO2VhOyalDog7Ja064qQIOq4gOydhCDsiJjsoJXtlaAg6rKD7J247KeAKVxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICAvLyDsiJjsoJXrkJwg66mU7Iuc7KeAOiDshJzrsoTsl5AgdGV4dOyZgCB1c2VySWTrpbwg67O064K07IScIOyImOygleuQnCDrqZTsi5zsp4DrpbwgcmVzLmRhdGHroZwg67Cb7JWE7Ji0XHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcblxyXG4gICAgLy8g7ISc67KE7JeQ7IScIOuwm+yVhOyYqCDqsJLsnbQg7JeG7Jy866m0IOyXkOufrOyymOumrFxyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdTb21ldGhpbmcgaXMgd3JvbmcnKTtcclxuXHJcbiAgICAvLyDsiJjsoJXrkJwg66mU7Iuc7KeA66W8IG1zZ3Mg67Cw7Je07J2YIHRhcmdldEluZGV467KI7Ke47JeQIOy2lOqwgFxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICAvLyDsiJjsoJXtlaAg6riA7J2YIOyduOuNseyKpCh0YXJnZXRJbmRleClcclxuICAgICAgLy8gZmluZEluZGV4KOuwsOyXtOuplOyEnOuTnCk6IOuwsOyXtOydhCDrj4zrqbTshJwg7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQg7JqU7IaM7J2YICfsnbjrjbHsiqQnIOuwmO2ZmCAoY2YuIGZpbHRlcjog7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQg7JqU7IaM65Ok7J2EIOuqqOyVhCAn7IOIIOuwsOyXtCfroZwg67CY7ZmYKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgLy8gdGFyZ2V0SW5kZXjqsIAg7JeG7Jy866m0KC0xKSDquLDsobQgbXNncyDrsLDsl7Qg6re464yA66GcIOuwmO2ZmFxyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuXHJcbiAgICAgIC8vICoqIHRhcmdldEluZGV466GcIOuwsOyXtCDsiJjsoJUg7KeE7ZaJXHJcbiAgICAgIC8vIOq4sOyhtCDrsLDsl7Qg67O17IKsOiDquLDsobQgbXNncyDrsLDsl7TsnYQgc3ByZWFk66GcIO2OvOy5nCDrkqQg64uk7IucIFtd7JeQIOuEo+yWtCDsg4jroZzsmrQg67Cw7Je0IOyCrOuzuCDsg53shLFcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuXHJcbiAgICAgIC8vIOyCrOuzuCDrsLDsl7Tsl5Ag7IiY7KCVIOynhO2WiTogc3BsaWNl66GcIHRhcmdldEluZGV467aA7YSwIDHqsJwoZGVsZXRlQ291bnQp66W8IOyngOyasOqzoCDqt7gg7J6Q66as7JeQIOyDiOuhnOyatCDsmpTshowoM+2VreydmCDqsJ3ssrQp7J2EIOuEo+ydjFxyXG4gICAgICAvLyAo7IOI66Gc7Jq0IGl0ZW0gLSB0YXJnZXRJbmRleOuyiOynuCDquLDsobQg64K07Jqp65OkIOq3uOuMgOuhnCwgdGV4dOunjCDsg4gg6rG466GcIOq1kOyytClcclxuICAgICAgLy8gbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgLy8gICAuLi5tc2dzW3RhcmdldEluZGV4XSxcclxuICAgICAgLy8gICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIC8vIOuwsOyXtOyXkCBzcGxpY2XroZwgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnOulvCDsp4DsmrDqs6Ag6re4IOyekOumrOyXkCDsiJjsoJXrkJwg66mU7Iuc7KeAKG5ld01zZykg7LaU6rCAXHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xyXG5cclxuICAgICAgLy8g7IiY7KCV65CcIOyDiCDrsLDsl7Qg67CY7ZmYICg9PiBzZXRNc2dz7JeQIOuTpOyWtOqwgOyngOuptOyEnCBtc2dzIO2GteynuOuhnCDqtZDssrQpXHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g7IiY7KCV7J20IOuBneuCmOuptCDsi6TtlokgKGVkaXRpbmdJZOulvCDri6Tsi5wgbnVsbOuhnCDrsJTqv4gpXHJcbiAgICBkb25lRWRpdCgpO1xyXG4gIH07XHJcblxyXG4gIC8vIOq4gCDsgq3soJztlZjripQg7ZWo7IiYXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIC8vIOyCreygnO2VmOuKlCDquIDsnZggaWQg7Jm47JeQIO2VtOuLuSDquIDsnZggJ3VzZXJJZCfrj4Qg7ISc67KE7JeQIOuztOuDhCA9PiDsnbTrlYwgJ3BhcmFtcyfroZwg67O064K06rOgLCDshJzrsoTsl5DshJzripQgcXVlcnnroZwg67Cb7J2MXHJcbiAgICAvLyB7IHBhcmFtczogeyB1c2VySWQgfSB9OiB1cmwg65Kk7JeQID91c2VySWQ9cm957JeQ7IScIHJveSDrtoDrtoQgKHVybOyXkCBgL21lc3NhZ2VzLyR7aWR9P3VzZXJJZD17dXNlcklkfWDrnbzqs6Ag67O064K064+EIOuPmeydvClcclxuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHsgdXNlcklkIH0gfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgcmVjZWl2ZWRJZCwgdHlwZW9mIGlkKTsgLy8gbnVtYmVyLCBzdHJpbmcgKD0+IG1lc3NhZ2VzLmpzb27sl5DshJwgaWTqsIAg66y47J6Q7Je066GcIOuQmOyWtOyeiOydjClcclxuXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIC8vICoqIOyCreygnO2VnCDrgrTsmqnsnbQg67ew7JeQIOuwmOyYgeydtCDslYjrkJjripQg6rK97JqwIC0tPiB0eXBl7J20IOyViCDrp57ripQg6rKD7J28IOyImCDsnojsnYwgKOy9mOyGlOuhnCDrkZAg7JWE7J2065SU66W8IOy2nOugpe2VtOuztOqzoCDtlZzsqr3snYQg64uk66W4IOyqveyXkCDrp57strDso7zquLApXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBTdHJpbmcocmVjZWl2ZWRJZCkpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuXHJcbiAgICAgIC8vICoqIOyCreygnCDsp4TtlokgKGl0ZW0g7LaU6rCAIOyXhuuKlCDqsbAg67m86rOgIOyImOyglSDqs7zsoJXqs7wg64+Z7J28KVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7IiY7KCV7J20IOyZhOujjOuQqOydhCDslYzrpqzripQg7ZWo7IiYOiBlZGl0aW5nSWTrpbwgbnVsbOuhnCDrsJTqv4ggKD0+IGlzRWRpdGluZ+ydtCBmYWxzZeuhnCDrs4DtmZjrkJjslrQg6riw7KG07J2YIHRleHTrpbwg64yA7LK07ZWY642YIE1zZ0lucHV0IOu3sOqwgCDsgqzrnbzsp4Dqs6Ag7IiY7KCV65CcIHRleHTroZwg64uk7IucIOq1kOyytClcclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgLy8g7KGw7ZqM7ZWY6riwOiDsoITssrQg66mU7Iuc7KeAIOu2iOufrOyYpOuKlCDtlajsiJggKG9yaWdpbmFsTXNncyDtlYTsmpTsl4bslrTsp5ApXHJcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBtc2dzW21zZ3MubGVuZ3RoIC0gMV3snbQg7LKY7J2M7JeQ64qUIOyXhuydhCDsiJjrj4Qg7J6I7Ja07IScIOuSpOyXkCAnPycg67aZ7J206rOgIHx8ICcnIChjdXJzb3LqsIAg67mIIOqwkuycvOuhnCDqsIgg7IiYIOyeiOqyjOuBlCkg7JiI7Jm47LKY66asXHJcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHsgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCAnJyB9IH0pO1xyXG4gICAgc2V0TXNncyhuZXdNc2dzKTtcclxuICB9O1xyXG5cclxuICAvLyDstZzstIgg7Y6Y7J207KeAIOuhnOuTnCDrlYwg7Iuk7ZaJXHJcbiAgLy8gKiogdXNlRWZmZWN0IOuCtOyXkOyEnOuKlCBhc3luYy9hd2FpdOulvCDsp4HsoJEg7Zi47Lac7ZWY7KeAIOyViuyVhOyVvCDtlahcclxuICAvLyA9PiBhd2FpdOulvCDtmLjstpztlZjripQg67aA67aE7J2EIO2VqOyImChnZXRNZXNzYWdlcygp66GcIOuUsOuhnCDrubzqs6Ag6rGw6riw7JeQIGFzeW5j64+EIOu2meyXrOyjvOq4sFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDsoITssrQg66mU7Iuc7KeAIOu2iOufrOyYpOq4sFxyXG4gICAgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCDsl6zrn6wg6rCcIOyCrOyaqSDqsIDriqVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gaW50ZXJzZWN0aW5n7J20IOyeiOydhCDrlYzrp4wgZ2V0TWVzc2FnZXMoKSDtmLjstpxcclxuICAgIGlmIChpbnRlcnNlY3RpbmcpIGdldE1lc3NhZ2VzKCk7XHJcbiAgICAvLyBpbnRlcnNlY3RpbmfsnbQg67CU64CUIOuVjOuniOuLpCDsi6TtlolcclxuICB9LCBbaW50ZXJzZWN0aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgLy8gey4uLnh966GcIOqwneyytOydmCDqsIEga2V566W8IOyghOu2gCDrhKPqs6AgTXNnSXRlbeyXkOyEnCDsk7gg65WM64qUIOydvOu2gOunjCDqs6jrnbzshJwg7IKs7JqpIOqwgOuKpVxyXG4gICAgICAgICAgLy8gJ+yImOyglSfsl5Ag7ZWE7JqU7ZWcIG9uVXBkYXRlLCBzdGFydEVkaXQsIGlzRWRpdGluZyDsmpTshozrk6TsnYQgcHJvcHProZwg66+466asIOuEo+yWtOykgOuLpC5cclxuICAgICAgICAgIC8vIOyImOyglSDsi6Ttlokg7IucLCDsiJjsoJXtlaAg6riA7J2YIGlk66W8IGVkaXRpbmdJZOyXkCDshKTsoJXtlZjripQgc3RhcnRFZGl06rO8LCDroIzrjZTrp4Eg7KSR7J24IOyalOyGjCDspJEgZWRpdGluZ0lk7JmAIGlk6rCAIOydvOy5mO2VmOuKlCDsmpTshozqsIAg7J6I64qU7KeA66W8IOyVjOugpOyjvOuKlCBpc0VkaXRpbmfsnYAg7Jes6riw7IScIOuwlOuhnCDsspjrpqwgKOuUsOuhnCB1c2VTdGF0ZeuhnCDshKDslrjtlZjsp4Ag7JWK7J2MKVxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gLyogb25EZWxldGXripQg7Jes6riw7IScIOuwlOuhnCDsi6TtlokgKi9cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIHsvKiDsnbQgZGl26rCAIO2ZlOuptOyDgeyXkCDrgpjtg4DrgqzsnYQg65WMIOuLpOydjCDrjbDsnbTthLDrpbwg67aI65+s7Jik64+E66GdIO2VqCAo66y07ZWc7Iqk7YGs66GkKSAqL31cclxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVJvdXRlciIsIk1zZ0lucHV0IiwiTXNnSXRlbSIsImZldGNoZXIiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwiZmV0Y2hNb3JlRWwiLCJpbnRlcnNlY3RpbmciLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicGFyYW1zIiwicmVjZWl2ZWRJZCIsIlN0cmluZyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCJdLCJzb3VyY2VSb290IjoiIn0=