(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // App: next가 서버사이드렌더링(SSR)을 하기 위해 필요한 컴포넌트
// (기본적으로 작성 공식이 정해져 있음)



const App = ({
  Component,
  pageProps
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 43
}, undefined);

App.getInitialProps = async ({
  ctx,
  Component
}) => {
  var _Component$getInitial;

  // 각 Component 별로 getInitialProps가 정의가 되어 있으면 ctx를 넘김
  const pageProps = await ((_Component$getInitial = Component.getInitialProps) === null || _Component$getInitial === void 0 ? void 0 : _Component$getInitial.call(Component, ctx)); // pageProps를 props로 넘김 => App에서 Component와 함께 받아서 Component 안에 props로 넣어줌

  return {
    pageProps
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBO0FBQ0E7Ozs7QUFDQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBRCxrQkFBOEIsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTFDOztBQUVBRixHQUFHLENBQUNHLGVBQUosR0FBc0IsT0FBTztBQUFFQyxFQUFBQSxHQUFGO0FBQU9ILEVBQUFBO0FBQVAsQ0FBUCxLQUE4QjtBQUFBOztBQUNsRDtBQUNBLFFBQU1DLFNBQVMsR0FBRyxnQ0FBTUQsU0FBUyxDQUFDRSxlQUFoQiwwREFBTSwyQkFBQUYsU0FBUyxFQUFtQkcsR0FBbkIsQ0FBZixDQUFsQixDQUZrRCxDQUdsRDs7QUFDQSxTQUFPO0FBQUVGLElBQUFBO0FBQUYsR0FBUDtBQUNELENBTEQ7O0FBT0EsaUVBQWVGLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRWJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuXHJcbi8vIEFwcDogbmV4dOqwgCDshJzrsoTsgqzsnbTrk5zroIzrjZTrp4EoU1NSKeydhCDtlZjquLAg7JyE7ZW0IO2VhOyalO2VnCDsu7Ttj6zrhIztirhcclxuLy8gKOq4sOuzuOyggeycvOuhnCDsnpHshLEg6rO17Iud7J20IOygle2VtOyguCDsnojsnYwpXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcblxyXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCBDb21wb25lbnQgfSkgPT4ge1xyXG4gIC8vIOqwgSBDb21wb25lbnQg67OE66GcIGdldEluaXRpYWxQcm9wc+qwgCDsoJXsnZjqsIAg65CY7Ja0IOyeiOycvOuptCBjdHjrpbwg64SY6rmAXHJcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcz8uKGN0eCk7XHJcbiAgLy8gcGFnZVByb3Bz66W8IHByb3Bz66GcIOuEmOq5gCA9PiBBcHDsl5DshJwgQ29tcG9uZW507JmAIO2VqOq7mCDrsJvslYTshJwgQ29tcG9uZW50IOyViOyXkCBwcm9wc+uhnCDrhKPslrTspIxcclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwic291cmNlUm9vdCI6IiJ9