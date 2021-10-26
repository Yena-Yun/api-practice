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
  text = '',
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
      defaultValue: text,
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
  startEdit,
  onDelete
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
      text: text,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
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


  const onUpdate = (text, id) => {
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
    }); // 수정이 끝나면 실행

    doneEdit();
  };

  const onDelete = id => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs; // ** 삭제 진행하기
      // 기존 댓글배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열 생성 (copy)

      const newMsgs = [...msgs]; // 새 배열에서 splice를 이용해 targetIndex부터 1개(deleteCount)를 지움

      newMsgs.splice(targetIndex, 1); // 삭제된 새 배열 반환 (-> setter에 들어가 msgs가 통째로 교체됨)

      return newMsgs;
    });
  }; // 수정이 완료됨을 알려주는 메서드 (editingId를 null로 바꿔서 isEditing을 false로 바꿈 => MsgInput이 사라지고 수정된 text로 대체)


  const doneEdit = () => setEditingId(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
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
        isEditing: editingId === x.id,
        onDelete: () => onDelete(x.id)
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEZBLGlFQUFlcUMsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcElBOzs7O0FBRUEsTUFBTWdCLElBQUksR0FBRyxtQkFDWDtBQUFBLDBCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxnQkFERjs7QUFPQSxpRUFBZUEsSUFBZjs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbnB1dOydmCDrgrTsmqnsnYQgTXNnTGlzdOyXkOyEnOuKlCAnY3JlYXRlJ+yXkCDsk7gg6rGw6rOgIE1zZ0l0ZW3sl5DshJzripQgJ3VwZGF0ZSfsl5Ag7JO4IOyYiOyglVxyXG4vLyDqsIHqsIHsnZgg6rK97Jqw7JeQIOyImO2Wie2VoCDrqZTshJzrk5zqsIAg64uk66aEID0+ICdtdXRhdGUn66GcIOutieuaseq3uOugpCDshKDslrjtlZjqs6Ag6re4IOyViOyXkCBpbnB1dOqwkiDsoITri6xcclxuLy8gKGlkID0gdW5kZWZpbmVkOiBpZOqwkiDrsJvslYTsmKTripTrjbAg7JeG7J2EIOyImOuPhCDsnojsnYwgPT4gTXNnSXRlbeyXkOyEnCDsiJjsoJXrsoTtirzsnbQg64iM66Ck7IScIOuEmOyWtOyYqCBpZOqwgCDsnojsnYQg6rK97JqwIG11dGF0ZeulvCDthrXtlbQgaWTqsIAg7KCE64us65CY7Ja0IE1zZ0xpc3Qg66CI67Ko7JeQ7IScIG9uVXBkYXRlIOyLpO2WiSlcclxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xyXG4gIC8vIG9uQ2hhbmdlLCBvbklucHV0IOuwqeuylSDsmbjsl5AgdXNlUmVm66W8IOydtOyaqe2VmOuKlCDrsKnrspXsnbQg7J6I7J2MXHJcbiAgLy8gaW5wdXTssL0odGV4dGFyZWEp7J2EIHVzZVJlZuuhnCAn6rCA66as7YK0J1xyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIG9uU3VibWl0IO2VqOyImOuKlCDtlYTsmpRcclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAvLyDsg4jroZzqs6Dsuagg67Cp7KeAXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyDsnbTrsqTtirgg67KE67iU66eBIOuwqeyngFxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAvLyBpbnB1dOywveyXkCDsnoXroKXrkJwg6rCSXHJcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgLy8gKOqwkiDqsIDsoLjsmKTqs6Ag64KY66m0KSBpbnB1dOywvSDstIjquLDtmZRcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgLy8gTXNnTGlzdOyXkCBtdXRhdGXrpbwg7Ya17ZW0IGlucHV06rCSKHRleHQpIOyghOuLrFxyXG4gICAgLy8gKOyImOygleuyhO2KvOydtCDriIzroKTshJwgTXNnSW5wdXTsl5AgaWTqsIAg64SY7Ja07Jik66m0IG9uVXBkYXRl6rCAIOyLpO2WieuQmOqzoCDrhJjslrTsmKggaWTqsIAg7JeG7Jy866m0IG9uQ3JlYXRlKOyDneyEsSnsnLzroZwg7Iuk7ZaJ65CoKVxyXG4gICAgbXV0YXRlKHRleHQsIGlkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdtZXNzYWdlc19faW5wdXQnIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9J+uCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuJyAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+7JmE66OMPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xyXG4iLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHsgaWQsIHVzZXJJZCwgdGltZXN0YW1wLCB0ZXh0LCBvblVwZGF0ZSwgaXNFZGl0aW5nLCBzdGFydEVkaXQsIG9uRGVsZXRlIH0pID0+IChcclxuICA8bGkgY2xhc3NOYW1lPSdtZXNzYWdlc19faXRlbSc+XHJcbiAgICA8aDM+XHJcbiAgICAgIHt1c2VySWR9eycgJ31cclxuICAgICAgPHN1Yj5cclxuICAgICAgICB7Lyog7IOB7JyE7JeQ7IScIHRpbWVzdGFtcCjsi6TsoJwg64Kg7Kec6rCSKeydhCDqtaztlZjqs6Ag7ZWY7JyE7JeQ7ISc64qUIOuCoOynnOydmCDtmJXtg5zrp4wg7J6h7JWE7KO86riwICovfVxyXG4gICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcclxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgaG91cjEyOiB0cnVlIC8qIOyYpOyghCDsmKTtm4TroZwg6rWs67aEICovLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3N1Yj5cclxuICAgIDwvaDM+XHJcblxyXG4gICAgey8qIGlzRWRpdGluZ+ydtCB0cnVl6rCAIOuQmOuptCB0ZXh0IOuMgOyLoCBNc2dJbnB1dOywvSDroIzrjZTrp4EgKi99XHJcbiAgICB7LyogTXNnTGlzdOyXkOyEnCBtYXDsnLzroZwg6rq864K07KC4IOyghOuLrOuQnCBpZOyZgCDtlajqu5ggbXV0YXRlIHByb3Bz7JeQIG9uVXBkYXRlIOyghOuLrCA9PiB0ZXh07JmAIGlk6rCAIO2VqOq7mCBtdXRhdGXsl5Ag65Ok7Ja06rCA66m07IScIG9uQ3JlYXRlIOuMgOyLoCBvblVwZGF0ZSDtlajsiJjqsIAg7Iuk7ZaJ65CoICovfVxyXG4gICAge2lzRWRpdGluZyA/IChcclxuICAgICAgPD5cclxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIHRleHRcclxuICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzX19idXR0b25zJz5cclxuICAgICAgey8qIOyImOygleuyhO2KvCDtgbTrpq0g7IucIHN0YXJ0RWRpdCDsi6Ttloko7Zmc7ISx7ZmUKSA9PiBtYXDsnLzroZwg64+M642YIHgoaXRlbSkg7KSRIOyImOygleuyhO2KvOydtCDriIzrprAgeOydmCBpZOqwgCBlZGl0aW5nSWTsl5Ag65Ok7Ja06rCQID0+IGVkaXRpbmdJZOyZgCDtmITsnqwg7LCo66GA7JeQ7IScIOuPjOqzoCDsnojrjZggeOydmCBpZOqwgCDsnbzsuZjtlZjrqbQgaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m07IScIHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSovfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQg67Cw7Je0XHJcbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCAo65GYIOykkeyXkCDtlZjrgpgpIOuenOuNpO2VmOqyjCDrhKPquLBcclxuLy8gVXNlcklkcyDrsLDsl7TsnZgg7J24642x7Iqk7JeQIOuenOuNpCDtlajsiJgg64Sj6riwXHJcbi8vIDLqsJzrv5Dsnbwg65WM64qUIE1hdGgucm91bmTrp4wg7LKY66asIC0+IDAg65iQ64qUIDFcclxuY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcclxuXHJcbi8vIDPqsJwg7J207IOB7J28IOuVjOuKlCBNYXRoLnJhbmRvbSgpIOuSpOyXkCDrsLDsl7TsnZgg6ri47J20IOqzse2VmOq4sFxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIFVzZXJJZHMubGVuZ3RoKV07XHJcblxyXG4vLyBBcnJheSg1MCk6IOqzteqwhOydtCA1MOqwnOyduCDrsLDsl7Qg7IOd7ISxXHJcbi8vIC5maWxsKDApOiA1MOqwnOydmCDqs7XqsITsnYQg7JWE66y0IOqwkuycvOuhnOuCmCDssYTsm4BcclxuLy8gLm1hcCh2YWwsIGkpOiBtYXDsnLzroZwg6rq864K064qUIHZhbOydtCDspJHsmpTtlZjsp4Ag7JWK7Jy866m0ICdfJ+uhnCDsspjrpqwgKD0+IGnrp4wg7IKs7Jqp7ZWY66Ck64qUIOqyveyasClcclxuLy8gKCkocmV0dXJuKSDslYjsl5Age30gKD0+IOqwneyytCDrsJjtmZgpXHJcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4gIC5maWxsKDApXHJcbiAgLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiBpICsgMSxcclxuICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwIC8qIGnrpbwgbWlsbGlzZWNvbmTroZwg67CU6r68IOuSpCDri6Tsi5wgNjDsnYQg6rOx7ZWoIC0+ICcx67aEJyDri6jsnITroZwg7Kad6rCAICovLFxyXG4gICAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGAsXHJcbiAgfSkpXHJcbiAgLnJldmVyc2UoKTsgLyog7LWc6re8IOyInOyEnOuhnCDssI3tnojrj4TroZ0gKFNOUykgICovXHJcblxyXG4vLyBjb25zdCBtc2dzID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAxLFxyXG4vLyAgICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuLy8gICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyAvKiDstJ0gMTPsnpDrpqwg7ZWE7JqUICovLFxyXG4vLyAgICAgdGV4dCwgJzEgbW9jayB0ZXh0J1xyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIC8vIGlucHV06rCS7J2EIOygnOy2nO2VmOuptCDsg4jquIAg7IOd7ISxIOuYkOuKlCDquLDsobQg6riAIOyImOyglSA9PiDstIjquLDqsJLsnbgg6ri47J20IDUw7J2YIOuMk+q4gOuwsOyXtOydgCAn67OA7ZWY64qUJyDsmpTshozqsIAg65CoID0+IHN0YXRl66GcIOyEoOyWuFxyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncyk7XHJcbiAgLy8g7IiY7KCV7ZWgIOq4gCBpZCAoJ+uzgOuPmScg6rCA64ql7ZWY66+A66GcIHN0YXRl66GcIOyEoOyWuClcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIOyDiOq4gCDsg53shLHtlZjripQg7ZWo7IiYXHJcbiAgY29uc3Qgb25DcmVhdGUgPSAodGV4dCkgPT4ge1xyXG4gICAgLy8g7IOI6riAIOqwneyytOulvCDqtazshLFcclxuICAgIGNvbnN0IG5ld01zZyA9IHtcclxuICAgICAgLy8g7J207KCc64qUIG1hcOycvOuhnCDslrvsnYAgaWTqsIAg7JWE64uMIOq4sOyhtCDrjJPquIDrsLDsl7TsnZgg6ri47J2066W8IOydtOyaqSAoPT4ga2V57JmAIHRleHQg7JiG7JeQIOuCmO2DgOuCmOuKlCDsnbjrjbHsiqQpXHJcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSAvKiDtmITsnqwg64Kg7KecIOuwjyDsi5zqsIQgKi8sXHJcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOuMk+q4gOuwsOyXtOyXkCBzZXR0ZXIg7ZWo7IiY7JmAIHNwcmVhZCDsl7DsgrDsnpDrpbwg7J207Jqp7ZWY7JesIOyDiOq4gCDqsJ3ssrTrpbwg7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyImOygle2VmOuKlCDtlajsiJggKCoqIGlucHV06rCSIHRleHTsmYAg7ZWo6ruYIOyWtOuKkCDquIDsnYQg7IiY7KCV7ZWgIOqyg+yduOyngCDslYzroKTso7zripQgaWTrj4Qg7ZWE7JqUKVxyXG4gIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XHJcbiAgICAvLyBzZXR0ZXLsl5Ag6riw7KG0IOuMk+q4gOuwsOyXtChtc2dzKeydhCDrsJvslYTsmYDshJwg7KeE7ZaJXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIC8vIHRhcmdldEluZGV4IOq1rO2VmOq4sFxyXG4gICAgICAvLyDsiJjsoJXtlaAgSXRlbeydmCB0YXJnZXRJbmRleOulvCBmaW5kSW5kZXgo67Cw7Je066mU7ISc65OcKeuhnCDssL7snYxcclxuICAgICAgLy8gZmluZEluZGV4OiDrsLDsl7TsnYQg64+M66m07IScIO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3snZggJ+yduOuNseyKpCfrpbwg67CY7ZmYIChjZi4gZmlsdGVyOiDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCBpdGVt65Ok66eMIOqzqOudvCAn7IOIIOuwsOyXtCfroZwg67CY7ZmYKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgLy8gKOyYiOyZuOyymOumrCkg7LC+64qUIEluZGV46rCAIOyXhuycvOuptCgtMSkg6riw7KG0IOuwsOyXtCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiog7IiY7KCVIOynhO2Wie2VmOq4sFxyXG4gICAgICAvLyDquLDsobQg64yT6riA67Cw7Je07J2EIHNwcmVhZOuhnCDtjrzsuZwg65KkIOuLpOyLnCBbXeyXkCDrhKPslrQg7IOIIOuwsOyXtCDsg53shLEgKGNvcHkpXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcblxyXG4gICAgICAvLyDsg4gg67Cw7Je07JeQ7IScIHNwbGljZeulvCDsnbTsmqntlbQgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnChkZWxldGVDb3VudCnrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IOI66Gc7Jq0IGl0ZW0oM+2VrSnsnYQg64Sj7J2MXHJcbiAgICAgIC8vIOyDiOuhnOyatCBpdGVtOiB0YXJnZXRJbmRleOyXkCDsnojripQg6riw7KG0IOuCtOyaqeuTpOydgCDqt7jrjIDroZwg64Sj6rOgIHRleHTrp4wg7IOI6rG466GcIOq1kOyytFxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g7IiY7KCV65CcIOyDiCDrsLDsl7Qg67CY7ZmYICgtPiBzZXR0ZXLsl5Ag65Ok7Ja06rCAIG1zZ3PqsIAg7Ya17Ke466GcIOq1kOyytOuQqClcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDsiJjsoJXsnbQg64Gd64KY66m0IOyLpO2WiVxyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuXHJcbiAgICAgIC8vICoqIOyCreygnCDsp4TtlontlZjquLBcclxuICAgICAgLy8g6riw7KG0IOuMk+q4gOuwsOyXtOydhCBzcHJlYWTroZwg7Y687LmcIOuSpCDri6Tsi5wgW13sl5Ag64Sj7Ja0IOyDiCDrsLDsl7Qg7IOd7ISxIChjb3B5KVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG5cclxuICAgICAgLy8g7IOIIOuwsOyXtOyXkOyEnCBzcGxpY2Xrpbwg7J207Jqp7ZW0IHRhcmdldEluZGV467aA7YSwIDHqsJwoZGVsZXRlQ291bnQp66W8IOyngOybgFxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcblxyXG4gICAgICAvLyDsgq3soJzrkJwg7IOIIOuwsOyXtCDrsJjtmZggKC0+IHNldHRlcuyXkCDrk6TslrTqsIAgbXNnc+qwgCDthrXsp7jroZwg6rWQ7LK065CoKVxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIOyImOygleydtCDsmYTro4zrkKjsnYQg7JWM66Ck7KO864qUIOuplOyEnOuTnCAoZWRpdGluZ0lk66W8IG51bGzroZwg67CU6r+U7IScIGlzRWRpdGluZ+ydhCBmYWxzZeuhnCDrsJTqv4ggPT4gTXNnSW5wdXTsnbQg7IKs65287KeA6rOgIOyImOygleuQnCB0ZXh066GcIOuMgOyytClcclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdtZXNzYWdlcyc+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAvLyDsl6zquLDshJzripQgey4uLnh966GcIOyghOu2gCDrhKPqs6AgTXNnSXRlbeyXkOyEnCDsk7gg65WM64qUIOydvOu2gOunjCDqs6jrnbwg7IKs7JqpIOqwgOuKpVxyXG4gICAgICAgICAgLy8g7IiY7KCV7JeQIO2VhOyalO2VnCBvblVwZGF0ZSwgc3RhcnRFZGl0LCBpc0VkaXRpbmfsnYQg66+466asIOuEo+yWtOykjFxyXG4gICAgICAgICAgLy8gKOyImOygleydtCDsi5zsnpHrkJjslrQg7IiY7KCV7ZWgIOq4gOydmCBpZOulvCDsg4HsnIQgc3RhdGUoZWRpdGluZ0lkKeuhnCDqsIDsoLjsmKTripQgc3RhcnRFZGl06rO8LCDroIzrjZTrp4Eg7KSR7J24IGl0ZW0g7KSRIGVkaXRpbmdJZOyZgCBpZOqwgCDsnbzsuZjtlZjripQgaXRlbeydtCDsnojripTsp4Ag7Jes67aA66W8IOyVjOumrOuKlCBpc0VkaXRpbmfsnYAg65Sw66GcIHVzZVN0YXRl66GcIOyEoOyWuO2VmOyngCB4KVxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxoMT5TSU1QTEUgU05TPC9oMT5cclxuICAgIDxNc2dMaXN0IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwidGV4dCIsImlkIiwidW5kZWZpbmVkIiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsInZhbHVlIiwiTXNnSXRlbSIsInVzZXJJZCIsInRpbWVzdGFtcCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0Iiwib25EZWxldGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlU3RhdGUiLCJVc2VySWRzIiwiZ2V0UmFtZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJyZXZlcnNlIiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJub3ciLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIngiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==