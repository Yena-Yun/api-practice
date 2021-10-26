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



const MsgInput = ({
  mutate,
  id = undefined
}) => {
  // onChange, onInput 방법 외에 useRef를 이용하는 방법이 있음
  // input창(textarea)을 useRef로 '가리킴'
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // onSubmit 함수는 필요

  const onSubmit = e => {
    // 새로고침 방지
    e.preventDefault(); // 이벤트 버블링 방지

    e.stopPropagation(); // input창에 입력된 값

    const text = textRef.current.value; // (값 가져오고 나면) input창 초기화

    textRef.current.value = ''; // MsgList에 mutate를 통해 input값(text) 전달
    // (수정버튼이 눌려서 MsgInput에 id가 넘어오면 onUpdate가 실행되고 넘어온 id가 없으면 onCreate(생성)으로 실행됨)

    mutate(text, id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
      ref: textRef,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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




const MsgItem = ({
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  isEditing,
  startEdit
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
    children: [userId, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("sub", {
      children: new Date(timestamp).toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
        /* 오전 오후로 구분 */

      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_0__.default, {
      mutate: onUpdate,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "messages__buttons",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // 유저아이디 배열



const UserIds = ['roy', 'jay']; // 유저아이디 (둘 중에 하나) 랜덤하게 넣기
// UserIds 배열의 인덱스에 랜덤 함수 넣기
// 2개뿐일 때는 Math.round만 처리 -> 0 또는 1

const getRamdomUserId = () => UserIds[Math.round(Math.random())]; // 3개 이상일 때는 Math.random() 뒤에 배열의 길이 곱하기
// const getRamdomUserId = () => UserIds[Math.round(Math.random() * UserIds.length)];
// Array(50): 공간이 50개인 배열 생성
// .fill(0): 50개의 공간을 아무 값으로나 채움
// .map(val, i): map으로 꺼내는 val이 중요하지 않으면 '_'로 처리 (=> i만 사용하려는 경우)
// ()(return) 안에 {} (=> 객체 반환)


const originalMsgs = Array(50).fill(0).map((_, i) => ({
  id: i + 1,
  userId: getRamdomUserId(),
  timestamp: 1234567890123 + i * 1000 * 60
  /* i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> '1분' 단위로 증가 */
  ,
  text: `${i + 1} mock text`
})).reverse();
/* 최근 순서로 찍히도록 (SNS)  */
// const msgs = [
//   {
//     id: 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 /* 총 13자리 필요 */,
//     text, '1 mock text'
//   },
// ];

const MsgList = () => {
  // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값인 길이 50의 댓글배열은 '변하는' 요소가 됨 => state로 선언
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(originalMsgs); // 수정할 글 id ('변동' 가능하므로 state로 선언)

  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // 새글 생성하는 함수

  const onCreate = text => {
    // 새글 객체를 구성
    const newMsg = {
      // 이제는 map으로 얻은 id가 아닌 기존 댓글배열의 길이를 이용 (=> key와 text 옆에 나타나는 인덱스)
      id: msgs.length + 1,
      userId: getRamdomUserId(),
      timestamp: Date.now()
      /* 현재 날짜 및 시간 */
      ,
      text: `${msgs.length + 1} ${text}`
    }; // 댓글배열에 setter 함수와 spread 연산자를 이용하여 새글 객체를 추가

    setMsgs(msgs => [newMsg, ...msgs]);
  }; // 글 수정하는 함수 (** input값 text와 함께 어느 글을 수정할 것인지 알려주는 id도 필요)


  const onUpdate = (id, text) => {
    // setter에 기존 댓글배열(msgs)을 받아와서 진행
    setMsgs(msgs => {
      // targetIndex 구하기
      // 수정할 Item의 targetIndex를 findIndex(배열메서드)로 찾음
      // findIndex: 배열을 돌면서 특정 조건을 만족하는 item의 '인덱스'를 반환 (cf. filter: 특정 조건을 만족하는 item들만 골라 '새 배열'로 반환)
      const targetIndex = msgs.findIndex(msg => msg.id === id); // (예외처리) 찾는 Index가 없으면(-1) 기존 배열 그대로 반환

      if (targetIndex < 0) return msgs; // ** 수정 진행하기
      // 기존 댓글배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열 생성 (copy)

      const newMsgs = [...msgs]; // 새 배열에서 splice를 이용해 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 item(3항)을 넣음
      // 새로운 item: targetIndex에 있는 기존 내용들은 그대로 넣고 text만 새걸로 교체

      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text: text
      })); // 수정된 새 배열 반환 (-> setter에 들어가 msgs가 통째로 교체됨)

      return newMsgs;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x =>
      /*#__PURE__*/
      // 여기서는 {...x}로 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
      // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
      // (수정이 시작되어 수정할 글의 id를 상위 state(editingId)로 가져오는 startEdit과, 렌더링 중인 item 중 editingId와 id가 일치하는 item이 있는지 여부를 알리는 isEditing은 따로 useState로 선언하지 x)
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFFLE1BQU00QixZQUFZLENBQUNVLENBQUMsQ0FBQ25ELEVBQUgsQ0FBNUU7QUFBb0YsaUJBQVMsRUFBRXdDLFNBQVMsS0FBS1csQ0FBQyxDQUFDbkQ7QUFBL0csVUFBY21ELENBQUMsQ0FBQ25ELEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFhRCxDQTlERDs7QUFnRUEsaUVBQWVxQyxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7Ozs7QUFFQSxNQUFNZSxJQUFJLEdBQUcsbUJBQ1g7QUFBQSwwQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsZ0JBREY7O0FBT0EsaUVBQWVBLElBQWY7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW5wdXTsnZgg64K07Jqp7J2EIE1zZ0xpc3Tsl5DshJzripQgJ2NyZWF0ZSfsl5Ag7JO4IOqxsOqzoCBNc2dJdGVt7JeQ7ISc64qUICd1cGRhdGUn7JeQIOyTuCDsmIjsoJVcclxuLy8g6rCB6rCB7J2YIOqyveyasOyXkCDsiJjtlontlaAg66mU7ISc65Oc6rCAIOuLpOumhCA9PiAnbXV0YXRlJ+uhnCDrrYnrmrHqt7jroKQg7ISg7Ja47ZWY6rOgIOq3uCDslYjsl5AgaW5wdXTqsJIg7KCE64usXHJcbi8vIChpZCA9IHVuZGVmaW5lZDogaWTqsJIg67Cb7JWE7Jik64qU642wIOyXhuydhCDsiJjrj4Qg7J6I7J2MID0+IE1zZ0l0ZW3sl5DshJwg7IiY7KCV67KE7Yq87J20IOuIjOugpOyEnCDrhJjslrTsmKggaWTqsIAg7J6I7J2EIOqyveyasCBtdXRhdGXrpbwg7Ya17ZW0IGlk6rCAIOyghOuLrOuQmOyWtCBNc2dMaXN0IOugiOuyqOyXkOyEnCBvblVwZGF0ZSDsi6TtlokpXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgLy8gb25DaGFuZ2UsIG9uSW5wdXQg67Cp67KVIOyZuOyXkCB1c2VSZWbrpbwg7J207Jqp7ZWY64qUIOuwqeuyleydtCDsnojsnYxcclxuICAvLyBpbnB1dOywvSh0ZXh0YXJlYSnsnYQgdXNlUmVm66GcICfqsIDrpqztgrQnXHJcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gb25TdWJtaXQg7ZWo7IiY64qUIO2VhOyalFxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIC8vIOyDiOuhnOqzoOy5qCDrsKnsp4BcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIOydtOuypO2KuCDrsoTruJTrp4Eg67Cp7KeAXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIC8vIGlucHV07LC97JeQIOyeheugpeuQnCDqsJJcclxuICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAvLyAo6rCSIOqwgOyguOyYpOqzoCDrgpjrqbQpIGlucHV07LC9IOy0iOq4sO2ZlFxyXG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAvLyBNc2dMaXN07JeQIG11dGF0ZeulvCDthrXtlbQgaW5wdXTqsJIodGV4dCkg7KCE64usXHJcbiAgICAvLyAo7IiY7KCV67KE7Yq87J20IOuIjOugpOyEnCBNc2dJbnB1dOyXkCBpZOqwgCDrhJjslrTsmKTrqbQgb25VcGRhdGXqsIAg7Iuk7ZaJ65CY6rOgIOuEmOyWtOyYqCBpZOqwgCDsl4bsnLzrqbQgb25DcmVhdGUo7IOd7ISxKeycvOuhnCDsi6TtlonrkKgpXHJcbiAgICBtdXRhdGUodGV4dCwgaWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9J21lc3NhZ2VzX19pbnB1dCcgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPHRleHRhcmVhIHJlZj17dGV4dFJlZn0gcGxhY2Vob2xkZXI9J+uCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuJyAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+7JmE66OMPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xyXG4iLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHsgaWQsIHVzZXJJZCwgdGltZXN0YW1wLCB0ZXh0LCBvblVwZGF0ZSwgaXNFZGl0aW5nLCBzdGFydEVkaXQgfSkgPT4gKFxyXG4gIDxsaSBjbGFzc05hbWU9J21lc3NhZ2VzX19pdGVtJz5cclxuICAgIDxoMz5cclxuICAgICAge3VzZXJJZH17JyAnfVxyXG4gICAgICA8c3ViPlxyXG4gICAgICAgIHsvKiDsg4HsnITsl5DshJwgdGltZXN0YW1wKOyLpOygnCDrgqDsp5zqsJIp7J2EIOq1rO2VmOqzoCDtlZjsnITsl5DshJzripQg64Kg7Kec7J2YIO2Yle2DnOunjCDsnqHslYTso7zquLAgKi99XHJcbiAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICBob3VyMTI6IHRydWUgLyog7Jik7KCEIOyYpO2bhOuhnCDqtazrtoQgKi8sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvc3ViPlxyXG4gICAgPC9oMz5cclxuXHJcbiAgICB7LyogaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m0IHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSAqL31cclxuICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIE1zZ0xpc3Tsl5DshJwgbWFw7Jy866GcIOq6vOuCtOyguCDsoITri6zrkJwgaWTsmYAg7ZWo6ruYIG11dGF0ZSBwcm9wc+yXkCBvblVwZGF0ZSDsoITri6wgPT4gdGV4dOyZgCBpZOqwgCDtlajqu5ggbXV0YXRl7JeQIOuTpOyWtOqwgOuptOyEnCBvbkNyZWF0ZSDrjIDsi6Agb25VcGRhdGUg7ZWo7IiY6rCAIOyLpO2WieuQqCAqL31cclxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gaWQ9e2lkfSAvPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIHRleHRcclxuICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzX19idXR0b25zJz5cclxuICAgICAgey8qIOyImOygleuyhO2KvCDtgbTrpq0g7IucIHN0YXJ0RWRpdCDsi6Ttloko7Zmc7ISx7ZmUKSA9PiBtYXDsnLzroZwg64+M642YIHgoaXRlbSkg7KSRIOyImOygleuyhO2KvOydtCDriIzrprAgeOydmCBpZOqwgCBlZGl0aW5nSWTsl5Ag65Ok7Ja06rCQID0+IGVkaXRpbmdJZOyZgCDtmITsnqwg7LCo66GA7JeQ7IScIOuPjOqzoCDsnojrjZggeOydmCBpZOqwgCDsnbzsuZjtlZjrqbQgaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m07IScIHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSovfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCDrsLDsl7RcclxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUICjrkZgg7KSR7JeQIO2VmOuCmCkg656c642k7ZWY6rKMIOuEo+q4sFxyXG4vLyBVc2VySWRzIOuwsOyXtOydmCDsnbjrjbHsiqTsl5Ag656c642kIO2VqOyImCDrhKPquLBcclxuLy8gMuqwnOu/kOydvCDrlYzripQgTWF0aC5yb3VuZOunjCDsspjrpqwgLT4gMCDrmJDripQgMVxyXG5jb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG5cclxuLy8gM+qwnCDsnbTsg4Hsnbwg65WM64qUIE1hdGgucmFuZG9tKCkg65Kk7JeQIOuwsOyXtOydmCDquLjsnbQg6rOx7ZWY6riwXHJcbi8vIGNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogVXNlcklkcy5sZW5ndGgpXTtcclxuXHJcbi8vIEFycmF5KDUwKTog6rO16rCE7J20IDUw6rCc7J24IOuwsOyXtCDsg53shLFcclxuLy8gLmZpbGwoMCk6IDUw6rCc7J2YIOqzteqwhOydhCDslYTrrLQg6rCS7Jy866Gc64KYIOyxhOybgFxyXG4vLyAubWFwKHZhbCwgaSk6IG1hcOycvOuhnCDqurzrgrTripQgdmFs7J20IOykkeyalO2VmOyngCDslYrsnLzrqbQgJ18n66GcIOyymOumrCAoPT4gaeunjCDsgqzsmqntlZjroKTripQg6rK97JqwKVxyXG4vLyAoKShyZXR1cm4pIOyViOyXkCB7fSAoPT4g6rCd7LK0IOuwmO2ZmClcclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbiAgLmZpbGwoMClcclxuICAubWFwKChfLCBpKSA9PiAoe1xyXG4gICAgaWQ6IGkgKyAxLFxyXG4gICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAgLyogaeulvCBtaWxsaXNlY29uZOuhnCDrsJTqvrwg65KkIOuLpOyLnCA2MOydhCDqs7HtlaggLT4gJzHrtoQnIOuLqOychOuhnCDspp3qsIAgKi8sXHJcbiAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YCxcclxuICB9KSlcclxuICAucmV2ZXJzZSgpOyAvKiDstZzqt7wg7Iic7ISc66GcIOywje2eiOuPhOuhnSAoU05TKSAgKi9cclxuXHJcbi8vIGNvbnN0IG1zZ3MgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4vLyAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzIC8qIOy0nSAxM+yekOumrCDtlYTsmpQgKi8sXHJcbi8vICAgICB0ZXh0LCAnMSBtb2NrIHRleHQnXHJcbi8vICAgfSxcclxuLy8gXTtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgLy8gaW5wdXTqsJLsnYQg7KCc7Lac7ZWY66m0IOyDiOq4gCDsg53shLEg65iQ64qUIOq4sOyhtCDquIAg7IiY7KCVID0+IOy0iOq4sOqwkuyduCDquLjsnbQgNTDsnZgg64yT6riA67Cw7Je07J2AICfrs4DtlZjripQnIOyalOyGjOqwgCDrkKggPT4gc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcclxuICAvLyDsiJjsoJXtlaAg6riAIGlkICgn67OA64+ZJyDqsIDriqXtlZjrr4DroZwgc3RhdGXroZwg7ISg7Ja4KVxyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8g7IOI6riAIOyDneyEse2VmOuKlCDtlajsiJhcclxuICBjb25zdCBvbkNyZWF0ZSA9ICh0ZXh0KSA9PiB7XHJcbiAgICAvLyDsg4jquIAg6rCd7LK066W8IOq1rOyEsVxyXG4gICAgY29uc3QgbmV3TXNnID0ge1xyXG4gICAgICAvLyDsnbTsoJzripQgbWFw7Jy866GcIOyWu+ydgCBpZOqwgCDslYTri4wg6riw7KG0IOuMk+q4gOuwsOyXtOydmCDquLjsnbTrpbwg7J207JqpICg9PiBrZXnsmYAgdGV4dCDsmIbsl5Ag64KY7YOA64KY64qUIOyduOuNseyKpClcclxuICAgICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpIC8qIO2YhOyerCDrgqDsp5wg67CPIOyLnOqwhCAqLyxcclxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgIH07XHJcblxyXG4gICAgLy8g64yT6riA67Cw7Je07JeQIHNldHRlciDtlajsiJjsmYAgc3ByZWFkIOyXsOyCsOyekOulvCDsnbTsmqntlZjsl6wg7IOI6riAIOqwneyytOulvCDstpTqsIBcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICAvLyDquIAg7IiY7KCV7ZWY64qUIO2VqOyImCAoKiogaW5wdXTqsJIgdGV4dOyZgCDtlajqu5gg7Ja064qQIOq4gOydhCDsiJjsoJXtlaAg6rKD7J247KeAIOyVjOugpOyjvOuKlCBpZOuPhCDtlYTsmpQpXHJcbiAgY29uc3Qgb25VcGRhdGUgPSAoaWQsIHRleHQpID0+IHtcclxuICAgIC8vIHNldHRlcuyXkCDquLDsobQg64yT6riA67Cw7Je0KG1zZ3Mp7J2EIOuwm+yVhOyZgOyEnCDsp4TtlolcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8gdGFyZ2V0SW5kZXgg6rWs7ZWY6riwXHJcbiAgICAgIC8vIOyImOygle2VoCBJdGVt7J2YIHRhcmdldEluZGV466W8IGZpbmRJbmRleCjrsLDsl7TrqZTshJzrk5wp66GcIOywvuydjFxyXG4gICAgICAvLyBmaW5kSW5kZXg6IOuwsOyXtOydhCDrj4zrqbTshJwg7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeydmCAn7J24642x7IqkJ+ulvCDrsJjtmZggKGNmLiBmaWx0ZXI6IO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3rk6Trp4wg6rOo6528ICfsg4gg67Cw7Je0J+uhnCDrsJjtmZgpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAvLyAo7JiI7Jm47LKY66asKSDssL7ripQgSW5kZXjqsIAg7JeG7Jy866m0KC0xKSDquLDsobQg67Cw7Je0IOq3uOuMgOuhnCDrsJjtmZhcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsiJjsoJUg7KeE7ZaJ7ZWY6riwXHJcbiAgICAgIC8vIOq4sOyhtCDrjJPquIDrsLDsl7TsnYQgc3ByZWFk66GcIO2OvOy5nCDrkqQg64uk7IucIFtd7JeQIOuEo+yWtCDsg4gg67Cw7Je0IOyDneyEsSAoY29weSlcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuXHJcbiAgICAgIC8vIOyDiCDrsLDsl7Tsl5DshJwgc3BsaWNl66W8IOydtOyaqe2VtCB0YXJnZXRJbmRleOu2gO2EsCAx6rCcKGRlbGV0ZUNvdW50KeulvCDsp4DsmrDqs6Ag6re4IOyekOumrOyXkCDsg4jroZzsmrQgaXRlbSgz7ZWtKeydhCDrhKPsnYxcclxuICAgICAgLy8g7IOI66Gc7Jq0IGl0ZW06IHRhcmdldEluZGV47JeQIOyeiOuKlCDquLDsobQg64K07Jqp65Ok7J2AIOq3uOuMgOuhnCDrhKPqs6AgdGV4dOunjCDsg4jqsbjroZwg6rWQ7LK0XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XHJcbiAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDsiJjsoJXrkJwg7IOIIOuwsOyXtCDrsJjtmZggKC0+IHNldHRlcuyXkCDrk6TslrTqsIAgbXNnc+qwgCDthrXsp7jroZwg6rWQ7LK065CoKVxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgLy8g7Jes6riw7ISc64qUIHsuLi54feuhnCDsoITrtoAg64Sj6rOgIE1zZ0l0ZW3sl5DshJwg7JO4IOuVjOuKlCDsnbzrtoDrp4wg6rOo6528IOyCrOyaqSDqsIDriqVcclxuICAgICAgICAgIC8vIOyImOygleyXkCDtlYTsmpTtlZwgb25VcGRhdGUsIHN0YXJ0RWRpdCwgaXNFZGl0aW5n7J2EIOuvuOumrCDrhKPslrTspIxcclxuICAgICAgICAgIC8vICjsiJjsoJXsnbQg7Iuc7J6R65CY7Ja0IOyImOygle2VoCDquIDsnZggaWTrpbwg7IOB7JyEIHN0YXRlKGVkaXRpbmdJZCnroZwg6rCA7KC47Jik64qUIHN0YXJ0RWRpdOqzvCwg66CM642U66eBIOykkeyduCBpdGVtIOykkSBlZGl0aW5nSWTsmYAgaWTqsIAg7J287LmY7ZWY64qUIGl0ZW3snbQg7J6I64qU7KeAIOyXrOu2gOulvCDslYzrpqzripQgaXNFZGl0aW5n7J2AIOuUsOuhnCB1c2VTdGF0ZeuhnCDshKDslrjtlZjsp4AgeClcclxuICAgICAgICAgIDxNc2dJdGVtIGtleT17eC5pZH0gey4uLnh9IG9uVXBkYXRlPXtvblVwZGF0ZX0gc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiIsImltcG9ydCBNc2dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTXNnTGlzdCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8aDE+U0lNUExFIFNOUzwvaDE+XHJcbiAgICA8TXNnTGlzdCAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsImlkIiwidW5kZWZpbmVkIiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGV4dCIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJ1c2VTdGF0ZSIsIlVzZXJJZHMiLCJnZXRSYW1kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsInJldmVyc2UiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIm5vdyIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsIngiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==