"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


 // baseURL을 지정 (url 앞에 자동으로 붙음)

(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = 'http://localhost:8000';
/* 서버 url */
// axios를 통해 서버에서 응답을 받아오는 걸 fetcher 함수로 처리

var fetcher = /*#__PURE__*/function () {
  var _ref = (0,C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(method, url) {
    var _len,
        rest,
        _key,
        res,
        _args = arguments;

    return C_Users_82108_Desktop_api_practice_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            for (_len = _args.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              rest[_key - 2] = _args[_key];
            }

            _context.next = 3;
            return (axios__WEBPACK_IMPORTED_MODULE_2___default())[method].apply((axios__WEBPACK_IMPORTED_MODULE_2___default()), [url].concat(rest));

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetcher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (fetcher);
/*
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config]) //post와 put은 get, delete와 달리 data가 하나 더 들어옴
put: axios.put(url, data[, config])
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTYzOGY1MTYxNzQ2YWQ1NTdkZTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQUEsK0RBQUEsR0FBeUIsdUJBQXpCO0FBQWtEO0FBRWxEOztBQUNBLElBQU1HLE9BQU87QUFBQSxxUkFBRyxpQkFBT0MsTUFBUCxFQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUF1QkMsSUFBdkI7QUFBdUJBLGNBQUFBLElBQXZCO0FBQUE7O0FBQUE7QUFBQSxtQkFDSU4sOENBQUssQ0FBQ0ksTUFBRCxDQUFMLE9BQUFKLDhDQUFLLEdBQVNLLEdBQVQsU0FBaUJDLElBQWpCLEVBRFQ7O0FBQUE7QUFDUkMsWUFBQUEsR0FEUTtBQUFBLDZDQUVQQSxHQUFHLENBQUNDLElBRkc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEwsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQUtBLCtEQUFlQSxPQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZldGNoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbi8vIGJhc2VVUkzsnYQg7KeA7KCVICh1cmwg7JWe7JeQIOyekOuPmeycvOuhnCDrtpnsnYwpXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJzsgLyog7ISc67KEIHVybCAqL1xyXG5cclxuLy8gYXhpb3Prpbwg7Ya17ZW0IOyEnOuyhOyXkOyEnCDsnZHri7XsnYQg67Cb7JWE7Jik64qUIOqxuCBmZXRjaGVyIO2VqOyImOuhnCDsspjrpqxcclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChtZXRob2QsIHVybCwgLi4ucmVzdCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCAuLi5yZXN0KTsgLy8g642w7J207YSw6rCAIO2VmOuCmOunjCDrk6TslrTsmYDrj4Qg7LKY66as65CY64+E66GdIHNwcmVhZFxyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7XHJcblxyXG4vKlxyXG5nZXQ6IGF4aW9zLmdldCh1cmxbLCBjb25maWddKVxyXG5kZWxldGU6IGF4aW9zLmRlbGV0ZSh1cmxbLCBjb25maWddKVxyXG5wb3N0OiBheGlvcy5wb3N0KHVybCwgZGF0YVssIGNvbmZpZ10pIC8vcG9zdOyZgCBwdXTsnYAgZ2V0LCBkZWxldGXsmYAg64us66asIGRhdGHqsIAg7ZWY64KYIOuNlCDrk6TslrTsmLRcclxucHV0OiBheGlvcy5wdXQodXJsLCBkYXRhWywgY29uZmlnXSlcclxuKi9cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiZmV0Y2hlciIsIm1ldGhvZCIsInVybCIsInJlc3QiLCJyZXMiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==