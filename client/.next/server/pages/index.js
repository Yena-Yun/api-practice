"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgInput.js";
 // input의 내용을 MsgList에서는 'create'에 쓸 거고 MsgItem에서는 'update'에 쓸 예정
// 각각의 경우에 수행할 메서드가 다름 => 'mutate'로 뭉뚱그려 선언하고 그 안에 input값 전달
// (id = undefined: id값 받아오는데 없을 수도 있음 => MsgItem에서 수정버튼이 눌려서 넘어온 id가 있을 경우 mutate를 통해 id가 전달되어 MsgList 레벨에서 onUpdate 실행)



const MsgInput = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: "messages__input",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgItem.js";



const MsgItem = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
    children: [userId, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("sub", {
      children: " "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 16
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgList.js";


 // 유저아이디 배열



const UserIds = ['roy', 'jay'];

const MsgList = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x =>
      /*#__PURE__*/
      // 여기서는 {...x}로 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
      // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
      // (수정이 시작되어 수정할 글의 id를 상위 state(editingId)로 가져오는 startEdit과, 렌더링 중인 item 중 editingId와 id가 일치하는 item이 있는지 여부를 알리는 isEditing은 따로 useState로 선언하지 x)
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\pages\\index.js";




const Home = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBO0FBQ0E7QUFDQTs7OztBQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFBLDRCQUNFO0FBQVUsaUJBQVcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBUEQ7O0FBU0EsaUVBQWVBLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsbUJBQ2Q7QUFBSSxXQUFTLEVBQUMsZ0JBQWQ7QUFBQSwwQkFDRTtBQUFBLGVBQ0dDLE1BREgsb0JBQ1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDRCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBaUJBLGlFQUFlRCxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtDQUdBOzs7O0FBQ0EsTUFBTUcsT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBaEI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDcEIsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBLGdCQUNHQyxJQUFJLENBQUNDLEdBQUwsQ0FBVUMsQ0FBRDtBQUFBO0FBQ1I7QUFDQTtBQUNBO0FBQ0Esb0VBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxrQkFERjtBQWFELENBZEQ7O0FBZ0JBLGlFQUFlSCxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7Ozs7QUFFQSxNQUFNSSxJQUFJLEdBQUcsbUJBQ1g7QUFBQSwwQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsZ0JBREY7O0FBT0EsaUVBQWVBLElBQWY7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW5wdXTsnZgg64K07Jqp7J2EIE1zZ0xpc3Tsl5DshJzripQgJ2NyZWF0ZSfsl5Ag7JO4IOqxsOqzoCBNc2dJdGVt7JeQ7ISc64qUICd1cGRhdGUn7JeQIOyTuCDsmIjsoJVcclxuLy8g6rCB6rCB7J2YIOqyveyasOyXkCDsiJjtlontlaAg66mU7ISc65Oc6rCAIOuLpOumhCA9PiAnbXV0YXRlJ+uhnCDrrYnrmrHqt7jroKQg7ISg7Ja47ZWY6rOgIOq3uCDslYjsl5AgaW5wdXTqsJIg7KCE64usXHJcbi8vIChpZCA9IHVuZGVmaW5lZDogaWTqsJIg67Cb7JWE7Jik64qU642wIOyXhuydhCDsiJjrj4Qg7J6I7J2MID0+IE1zZ0l0ZW3sl5DshJwg7IiY7KCV67KE7Yq87J20IOuIjOugpOyEnCDrhJjslrTsmKggaWTqsIAg7J6I7J2EIOqyveyasCBtdXRhdGXrpbwg7Ya17ZW0IGlk6rCAIOyghOuLrOuQmOyWtCBNc2dMaXN0IOugiOuyqOyXkOyEnCBvblVwZGF0ZSDsi6TtlokpXHJcbmNvbnN0IE1zZ0lucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9J21lc3NhZ2VzX19pbnB1dCc+XHJcbiAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj0n64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC4nIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz7smYTro4w8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQ7XHJcbiIsImltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoKSA9PiAoXHJcbiAgPGxpIGNsYXNzTmFtZT0nbWVzc2FnZXNfX2l0ZW0nPlxyXG4gICAgPGgzPlxyXG4gICAgICB7dXNlcklkfSA8c3ViPnsvKiDsg4HsnITsl5DshJwgdGltZXN0YW1wKOyLpOygnCDrgqDsp5zqsJIp7J2EIOq1rO2VmOqzoCDtlZjsnITsl5DshJzripQg64Kg7Kec7J2YIO2Yle2DnOunjCDsnqHslYTso7zquLAgKi99IDwvc3ViPlxyXG4gICAgPC9oMz5cclxuXHJcbiAgICB7LyogaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m0IHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSAqL31cclxuICAgIHsvKiBNc2dMaXN07JeQ7IScIG1hcOycvOuhnCDqurzrgrTsoLgg7KCE64us65CcIGlk7JmAIO2VqOq7mCBtdXRhdGUgcHJvcHPsl5Agb25VcGRhdGUg7KCE64usID0+IHRleHTsmYAgaWTqsIAg7ZWo6ruYIG11dGF0ZeyXkCDrk6TslrTqsIDrqbTshJwgb25DcmVhdGUg64yA7IugIG9uVXBkYXRlIO2VqOyImOqwgCDsi6TtlonrkKggKi99XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzX19idXR0b25zJz5cclxuICAgICAgey8qIOyImOygleuyhO2KvCDtgbTrpq0g7IucIHN0YXJ0RWRpdCDsi6Ttloko7Zmc7ISx7ZmUKSA9PiBtYXDsnLzroZwg64+M642YIHgoaXRlbSkg7KSRIOyImOygleuyhO2KvOydtCDriIzrprAgeOydmCBpZOqwgCBlZGl0aW5nSWTsl5Ag65Ok7Ja06rCQID0+IGVkaXRpbmdJZOyZgCDtmITsnqwg7LCo66GA7JeQ7IScIOuPjOqzoCDsnojrjZggeOydmCBpZOqwgCDsnbzsuZjtlZjrqbQgaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m07IScIHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSovfVxyXG4gICAgICA8YnV0dG9uPuyImOyglTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uPuyCreygnDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQg67Cw7Je0XHJcbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdtZXNzYWdlcyc+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAvLyDsl6zquLDshJzripQgey4uLnh966GcIOyghOu2gCDrhKPqs6AgTXNnSXRlbeyXkOyEnCDsk7gg65WM64qUIOydvOu2gOunjCDqs6jrnbwg7IKs7JqpIOqwgOuKpVxyXG4gICAgICAgICAgLy8g7IiY7KCV7JeQIO2VhOyalO2VnCBvblVwZGF0ZSwgc3RhcnRFZGl0LCBpc0VkaXRpbmfsnYQg66+466asIOuEo+yWtOykjFxyXG4gICAgICAgICAgLy8gKOyImOygleydtCDsi5zsnpHrkJjslrQg7IiY7KCV7ZWgIOq4gOydmCBpZOulvCDsg4HsnIQgc3RhdGUoZWRpdGluZ0lkKeuhnCDqsIDsoLjsmKTripQgc3RhcnRFZGl06rO8LCDroIzrjZTrp4Eg7KSR7J24IGl0ZW0g7KSRIGVkaXRpbmdJZOyZgCBpZOqwgCDsnbzsuZjtlZjripQgaXRlbeydtCDsnojripTsp4Ag7Jes67aA66W8IOyVjOumrOuKlCBpc0VkaXRpbmfsnYAg65Sw66GcIHVzZVN0YXRl66GcIOyEoOyWuO2VmOyngCB4KVxyXG4gICAgICAgICAgPE1zZ0l0ZW0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xyXG4iLCJpbXBvcnQgTXNnTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01zZ0xpc3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgPE1zZ0xpc3QgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJNc2dJdGVtIiwidXNlcklkIiwidXNlU3RhdGUiLCJVc2VySWRzIiwiTXNnTGlzdCIsIm1zZ3MiLCJtYXAiLCJ4IiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=