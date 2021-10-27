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
 // Input창에 입력된 내용을 MsgList에서는 'onCreate'에 쓰고 MsgItem에서는 'onUpdate'에 사용 + 두 메서드를 'mutate'로 뭉뚱그려 선언하고 mutate에 두 메서드 실행에 필요한 값들 전달
// (id = undefined: id값 받아오는데 없을 수도 있음 => MsgItem에서 수정버튼이 눌려서 넘어온 id가 있을 경우 mutate를 통해 id가 전달되어 MsgList 레벨에서 onUpdate 실행 / text = '': 입력된 텍스트가 없을 수도 있음)



const MsgInput = ({
  mutate,
  text = '',
  id = undefined
}) => {
  // onChange, onInput 방법 외에 useRef를 이용하는 방법이 있음
  // input창(textarea)을 useRef로 가리켜서 변수로 받음 => 변수.current.value = input 입력값
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // 완료버튼 누르면 동작

  const onSubmit = e => {
    e.preventDefault();
    /* 새로고침 방지 */

    e.stopPropagation();
    /* 이벤트 버블링 방지 */
    // input창에 입력된 값을 가져옴

    const text = textRef.current.value; // input창 초기화

    textRef.current.value = ''; // MsgList에 mutate를 통해 input값(text) 전달
    // (수정버튼이 눌려서 MsgInput에 id가 넘어오면 onUpdate가 실행되고 넘어온 id가 없으면 onCreate(생성) 실행)

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
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
  /* i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> '1분' 단위로 증가하며 시간이 찍힘 */
  ,
  text: `${i + 1} mock text`
})).reverse();
/* 최근 순서로 찍히도록 (SNS)  */
// console.log(originalMsgs);

console.log(JSON.stringify(originalMsgs)); // 배열 하나에 객체 여러 개 = json 형태로 만들어줌

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
      // 이제는 map으로 얻은 id가 아닌 기존 msgs 배열의 길이를 이용
      id: msgs.length + 1,
      userId: getRamdomUserId(),
      timestamp: Date.now()
      /* 현재 날짜 및 시간 */
      ,
      text: `${msgs.length + 1} ${text}`
    }; // msgs 배열에 setter 함수와 spread 연산자를 이용하여 새글 객체를 추가

    setMsgs(msgs => [newMsg, ...msgs]);
  }; // 글 수정하는 함수 (** input값 text와 함께 어느 글을 수정할 것인지 알려주는 id 필요)


  const onUpdate = (text, id) => {
    // setter에 기존 msgs 배열을 받아와서 진행
    setMsgs(msgs => {
      // targetIndex 구하기
      // 수정할 Item의 targetIndex를 findIndex(배열메서드)로 찾음
      // findIndex: 배열을 돌면서 특정 조건을 만족하는 item의 '인덱스'를 반환 (cf. filter: 특정 조건을 만족하는 item들만 골라 '새 배열'로 반환)
      const targetIndex = msgs.findIndex(msg => msg.id === id); // (예외처리) 찾는 Index가 없으면(-1) 기존 배열 그대로 반환

      if (targetIndex < 0) return msgs; // ** 수정 진행하기
      // 1. 기존 배열 복사: 기존 msgs 배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열 생성

      const newMsgs = [...msgs]; // 2. 복사한 배열로 수정: splice를 이용해 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 item(3항)을 넣음
      // (새로운 item - targetIndex에 있는 기존 내용들은 그대로 넣고 text만 새걸로 교체)

      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text: text
      })); // 3. 수정된 새 배열 반환 (-> setter에 들어가 msgs 통째로 교체)

      return newMsgs;
    }); // 수정이 끝나면 실행 (editingId를 다시 null로 바꿈)

    doneEdit();
  };

  const onDelete = id => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs; // ** 삭제 진행 (수정에서 item 추가하는 부분만 없음)

      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  }; // 수정이 완료됨을 알려줌: editingId를 null로 바꿈 => isEditing이 false로 전환 => 기존에 있던 text를 대체하던 MsgInput 뷰가 사라지고 수정된 text로 다시 대체


  const doneEdit = () => setEditingId(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x =>
      /*#__PURE__*/
      // {...x}로 객체의 각 key를 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
      // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
      // (수정 버튼이 눌리면 수정할 글의 id를 editingId에 설정하는 startEdit과, 렌더링 중인 item 중 editingId와 id가 일치하는 item이 있는지를 알려주는 isEditing은 따로 useState로 선언하지 않고 jsx에서 바로 처리)
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        onDelete: () => onDelete(x.id)
        /* onDelete는 여기서 바로 실행 */

      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFleUMsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhBOzs7O0FBRUEsTUFBTWdCLElBQUksR0FBRyxtQkFDWDtBQUFBLDBCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxnQkFERjs7QUFPQSxpRUFBZUEsSUFBZjs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBJbnB1dOywveyXkCDsnoXroKXrkJwg64K07Jqp7J2EIE1zZ0xpc3Tsl5DshJzripQgJ29uQ3JlYXRlJ+yXkCDsk7Dqs6AgTXNnSXRlbeyXkOyEnOuKlCAnb25VcGRhdGUn7JeQIOyCrOyaqSArIOuRkCDrqZTshJzrk5zrpbwgJ211dGF0ZSfroZwg662J65qx6re466CkIOyEoOyWuO2VmOqzoCBtdXRhdGXsl5Ag65GQIOuplOyEnOuTnCDsi6Ttlonsl5Ag7ZWE7JqU7ZWcIOqwkuuTpCDsoITri6xcclxuLy8gKGlkID0gdW5kZWZpbmVkOiBpZOqwkiDrsJvslYTsmKTripTrjbAg7JeG7J2EIOyImOuPhCDsnojsnYwgPT4gTXNnSXRlbeyXkOyEnCDsiJjsoJXrsoTtirzsnbQg64iM66Ck7IScIOuEmOyWtOyYqCBpZOqwgCDsnojsnYQg6rK97JqwIG11dGF0ZeulvCDthrXtlbQgaWTqsIAg7KCE64us65CY7Ja0IE1zZ0xpc3Qg66CI67Ko7JeQ7IScIG9uVXBkYXRlIOyLpO2WiSAvIHRleHQgPSAnJzog7J6F66Cl65CcIO2FjeyKpO2KuOqwgCDsl4bsnYQg7IiY64+EIOyeiOydjClcclxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xyXG4gIC8vIG9uQ2hhbmdlLCBvbklucHV0IOuwqeuylSDsmbjsl5AgdXNlUmVm66W8IOydtOyaqe2VmOuKlCDrsKnrspXsnbQg7J6I7J2MXHJcbiAgLy8gaW5wdXTssL0odGV4dGFyZWEp7J2EIHVzZVJlZuuhnCDqsIDrpqzsvJzshJwg67OA7IiY66GcIOuwm+ydjCA9PiDrs4DsiJguY3VycmVudC52YWx1ZSA9IGlucHV0IOyeheugpeqwklxyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIOyZhOujjOuyhO2KvCDriITrpbTrqbQg64+Z7J6RXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvKiDsg4jroZzqs6Dsuagg67Cp7KeAICovXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvKiDsnbTrsqTtirgg67KE67iU66eBIOuwqeyngCAqL1xyXG5cclxuICAgIC8vIGlucHV07LC97JeQIOyeheugpeuQnCDqsJLsnYQg6rCA7KC47Ji0XHJcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgLy8gaW5wdXTssL0g7LSI6riw7ZmUXHJcbiAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgIC8vIE1zZ0xpc3Tsl5AgbXV0YXRl66W8IO2Gte2VtCBpbnB1dOqwkih0ZXh0KSDsoITri6xcclxuICAgIC8vICjsiJjsoJXrsoTtirzsnbQg64iM66Ck7IScIE1zZ0lucHV07JeQIGlk6rCAIOuEmOyWtOyYpOuptCBvblVwZGF0ZeqwgCDsi6TtlonrkJjqs6Ag64SY7Ja07JioIGlk6rCAIOyXhuycvOuptCBvbkNyZWF0ZSjsg53shLEpIOyLpO2WiSlcclxuICAgIG11dGF0ZSh0ZXh0LCBpZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nbWVzc2FnZXNfX2lucHV0JyBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICA8dGV4dGFyZWEgcmVmPXt0ZXh0UmVmfSBkZWZhdWx0VmFsdWU9e3RleHR9IHBsYWNlaG9sZGVyPSfrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULicgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPuyZhOujjDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcclxuIiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5cclxuY29uc3QgTXNnSXRlbSA9ICh7IGlkLCB1c2VySWQsIHRpbWVzdGFtcCwgdGV4dCwgb25VcGRhdGUsIGlzRWRpdGluZywgc3RhcnRFZGl0LCBvbkRlbGV0ZSB9KSA9PiAoXHJcbiAgPGxpIGNsYXNzTmFtZT0nbWVzc2FnZXNfX2l0ZW0nPlxyXG4gICAgPGgzPlxyXG4gICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgIDxzdWI+XHJcbiAgICAgICAgey8qIOyDgeychCDsu7Ttj6zrhIztirggTXNnTGlzdOyXkOyEnCB0aW1lc3RhbXAo7Iuk7KCcIOuCoOynnOqwkinsnYQg6rWs7ZaI6rOgLCDtlZjsnIQg7Lu07Y+s64SM7Yq4IE1zZ0l0ZW3sl5DshJzripQg64Kg7Kec7J2YIO2Yle2DnOunjCDsnqHslYTso7zquLAgKi99XHJcbiAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICBob3VyMTI6IHRydWUgLyog7Jik7KCEIOyYpO2bhOuhnCDqtazrtoQgKi8sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvc3ViPlxyXG4gICAgPC9oMz5cclxuXHJcbiAgICB7LyogaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m0IHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSAqL31cclxuICAgIHsvKiBNc2dMaXN07JeQ7IScIG1hcOycvOuhnCDqurzrgrTsoLgg7KCE64us65CcIGlk7JmAIO2VqOq7mCBtdXRhdGXsl5Agb25VcGRhdGUg7KCE64usICovfVxyXG4gICAge2lzRWRpdGluZyA/IChcclxuICAgICAgPD5cclxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIHRleHRcclxuICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzX19idXR0b25zJz5cclxuICAgICAgey8qIOyImOygleuyhO2KvCDtgbTrpq0g7IucIHN0YXJ0RWRpdCjtlajsiJgpIOyLpO2WiSA9PiBtYXDsnLzroZwg64+M642YIHgg7KSRIOyImOygleuyhO2KvOydtCDriIzrprAgeOydmCBpZOqwgCBlZGl0aW5nSWTsl5Ag7ISk7KCV65CoID0+IO2YhOyerCDssKjroYDsl5DshJwg64+M6rOgIOyeiOuNmCB47J2YIGlk6rCAIGVkaXRpbmdJZOyZgCDsnbzsuZjtlZjrqbQgaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m07IScIHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSAqL31cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUIOuwsOyXtFxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J107XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQgKOuRmCDspJHsl5Ag7ZWY64KYKSDrnpzrjaTtlZjqsowg64Sj6riwXHJcbi8vIFVzZXJJZHMg67Cw7Je07J2YIOyduOuNseyKpOyXkCDrnpzrjaQg7ZWo7IiYIOuEo+q4sFxyXG4vLyAy6rCc67+Q7J28IOuVjOuKlCBNYXRoLnJvdW5k66eMIOyymOumrCAtPiAwIOuYkOuKlCAxXHJcbmNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XHJcblxyXG4vLyAz6rCcIOydtOyDgeydvCDrlYzripQgTWF0aC5yYW5kb20oKSDrkqTsl5Ag67Cw7Je07J2YIOq4uOydtCDqs7HtlZjquLBcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBVc2VySWRzLmxlbmd0aCldO1xyXG5cclxuLy8gQXJyYXkoNTApOiDqs7XqsITsnbQgNTDqsJzsnbgg67Cw7Je0IOyDneyEsVxyXG4vLyAuZmlsbCgwKTogNTDqsJzsnZgg6rO16rCE7J2EIOyVhOustCDqsJLsnLzroZzrgpgg7LGE7JuAXHJcbi8vIC5tYXAodmFsLCBpKTogbWFw7Jy866GcIOq6vOuCtOuKlCB2YWzsnbQg7KSR7JqU7ZWY7KeAIOyViuycvOuptCAnXyfroZwg7LKY66asICg9PiBp66eMIOyCrOyaqe2VmOugpOuKlCDqsr3smrApXHJcbi8vICgpKHJldHVybikg7JWI7JeQIHt9ICg9PiDqsJ3ssrQg67CY7ZmYKVxyXG5jb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcclxuICAuZmlsbCgwKVxyXG4gIC5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBpZDogaSArIDEsXHJcbiAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCAvKiBp66W8IG1pbGxpc2Vjb25k66GcIOuwlOq+vCDrkqQg64uk7IucIDYw7J2EIOqzse2VqCAtPiAnMeu2hCcg64uo7JyE66GcIOymneqwgO2VmOupsCDsi5zqsITsnbQg7LCN7Z6YICovLFxyXG4gICAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGAsXHJcbiAgfSkpXHJcbiAgLnJldmVyc2UoKTsgLyog7LWc6re8IOyInOyEnOuhnCDssI3tnojrj4TroZ0gKFNOUykgICovXHJcblxyXG4vLyBjb25zb2xlLmxvZyhvcmlnaW5hbE1zZ3MpO1xyXG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTsgLy8g67Cw7Je0IO2VmOuCmOyXkCDqsJ3ssrQg7Jes65+sIOqwnCA9IGpzb24g7ZiV7YOc66GcIOunjOuTpOyWtOykjFxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAvLyBpbnB1dOqwkuydhCDsoJzstpztlZjrqbQg7IOI6riAIOyDneyEsSDrmJDripQg6riw7KG0IOq4gCDsiJjsoJUgPT4g7LSI6riw6rCS7J24IOq4uOydtCA1MOydmCDrjJPquIDrsLDsl7TsnYAgJ+uzgO2VmOuKlCcg7JqU7IaM6rCAIOuQqCA9PiBzdGF0ZeuhnCDshKDslrhcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xyXG4gIC8vIOyImOygle2VoCDquIAgaWQgKCfrs4Drj5knIOqwgOuKpe2VmOuvgOuhnCBzdGF0ZeuhnCDshKDslrgpXHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyDsg4jquIAg7IOd7ISx7ZWY64qUIO2VqOyImFxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcclxuICAgIC8vIOyDiOq4gCDqsJ3ssrTrpbwg6rWs7ISxXHJcbiAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgIC8vIOydtOygnOuKlCBtYXDsnLzroZwg7Ja77J2AIGlk6rCAIOyVhOuLjCDquLDsobQgbXNncyDrsLDsl7TsnZgg6ri47J2066W8IOydtOyaqVxyXG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCkgLyog7ZiE7J6sIOuCoOynnCDrsI8g7Iuc6rCEICovLFxyXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBtc2dzIOuwsOyXtOyXkCBzZXR0ZXIg7ZWo7IiY7JmAIHNwcmVhZCDsl7DsgrDsnpDrpbwg7J207Jqp7ZWY7JesIOyDiOq4gCDqsJ3ssrTrpbwg7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyImOygle2VmOuKlCDtlajsiJggKCoqIGlucHV06rCSIHRleHTsmYAg7ZWo6ruYIOyWtOuKkCDquIDsnYQg7IiY7KCV7ZWgIOqyg+yduOyngCDslYzroKTso7zripQgaWQg7ZWE7JqUKVxyXG4gIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XHJcbiAgICAvLyBzZXR0ZXLsl5Ag6riw7KG0IG1zZ3Mg67Cw7Je07J2EIOuwm+yVhOyZgOyEnCDsp4TtlolcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8gdGFyZ2V0SW5kZXgg6rWs7ZWY6riwXHJcbiAgICAgIC8vIOyImOygle2VoCBJdGVt7J2YIHRhcmdldEluZGV466W8IGZpbmRJbmRleCjrsLDsl7TrqZTshJzrk5wp66GcIOywvuydjFxyXG4gICAgICAvLyBmaW5kSW5kZXg6IOuwsOyXtOydhCDrj4zrqbTshJwg7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeydmCAn7J24642x7IqkJ+ulvCDrsJjtmZggKGNmLiBmaWx0ZXI6IO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3rk6Trp4wg6rOo6528ICfsg4gg67Cw7Je0J+uhnCDrsJjtmZgpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAvLyAo7JiI7Jm47LKY66asKSDssL7ripQgSW5kZXjqsIAg7JeG7Jy866m0KC0xKSDquLDsobQg67Cw7Je0IOq3uOuMgOuhnCDrsJjtmZhcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsiJjsoJUg7KeE7ZaJ7ZWY6riwXHJcbiAgICAgIC8vIDEuIOq4sOyhtCDrsLDsl7Qg67O17IKsOiDquLDsobQgbXNncyDrsLDsl7TsnYQgc3ByZWFk66GcIO2OvOy5nCDrkqQg64uk7IucIFtd7JeQIOuEo+yWtCDsg4gg67Cw7Je0IOyDneyEsVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG5cclxuICAgICAgLy8gMi4g67O17IKs7ZWcIOuwsOyXtOuhnCDsiJjsoJU6IHNwbGljZeulvCDsnbTsmqntlbQgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnChkZWxldGVDb3VudCnrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IOI66Gc7Jq0IGl0ZW0oM+2VrSnsnYQg64Sj7J2MXHJcbiAgICAgIC8vICjsg4jroZzsmrQgaXRlbSAtIHRhcmdldEluZGV47JeQIOyeiOuKlCDquLDsobQg64K07Jqp65Ok7J2AIOq3uOuMgOuhnCDrhKPqs6AgdGV4dOunjCDsg4jqsbjroZwg6rWQ7LK0KVxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4g7IiY7KCV65CcIOyDiCDrsLDsl7Qg67CY7ZmYICgtPiBzZXR0ZXLsl5Ag65Ok7Ja06rCAIG1zZ3Mg7Ya17Ke466GcIOq1kOyytClcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDsiJjsoJXsnbQg64Gd64KY66m0IOyLpO2WiSAoZWRpdGluZ0lk66W8IOuLpOyLnCBudWxs66GcIOuwlOq/iClcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoaWQpID0+IHtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsgq3soJwg7KeE7ZaJICjsiJjsoJXsl5DshJwgaXRlbSDstpTqsIDtlZjripQg67aA67aE66eMIOyXhuydjClcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIOyImOygleydtCDsmYTro4zrkKjsnYQg7JWM66Ck7KSMOiBlZGl0aW5nSWTrpbwgbnVsbOuhnCDrsJTqv4ggPT4gaXNFZGl0aW5n7J20IGZhbHNl66GcIOyghO2ZmCA9PiDquLDsobTsl5Ag7J6I642YIHRleHTrpbwg64yA7LK07ZWY642YIE1zZ0lucHV0IOu3sOqwgCDsgqzrnbzsp4Dqs6Ag7IiY7KCV65CcIHRleHTroZwg64uk7IucIOuMgOyytFxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J21lc3NhZ2VzJz5cclxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICAgIC8vIHsuLi54feuhnCDqsJ3ssrTsnZgg6rCBIGtleeulvCDsoITrtoAg64Sj6rOgIE1zZ0l0ZW3sl5DshJwg7JO4IOuVjOuKlCDsnbzrtoDrp4wg6rOo6528IOyCrOyaqSDqsIDriqVcclxuICAgICAgICAgIC8vIOyImOygleyXkCDtlYTsmpTtlZwgb25VcGRhdGUsIHN0YXJ0RWRpdCwgaXNFZGl0aW5n7J2EIOuvuOumrCDrhKPslrTspIxcclxuICAgICAgICAgIC8vICjsiJjsoJUg67KE7Yq87J20IOuIjOumrOuptCDsiJjsoJXtlaAg6riA7J2YIGlk66W8IGVkaXRpbmdJZOyXkCDshKTsoJXtlZjripQgc3RhcnRFZGl06rO8LCDroIzrjZTrp4Eg7KSR7J24IGl0ZW0g7KSRIGVkaXRpbmdJZOyZgCBpZOqwgCDsnbzsuZjtlZjripQgaXRlbeydtCDsnojripTsp4Drpbwg7JWM66Ck7KO864qUIGlzRWRpdGluZ+ydgCDrlLDroZwgdXNlU3RhdGXroZwg7ISg7Ja47ZWY7KeAIOyViuqzoCBqc3jsl5DshJwg67CU66GcIOyymOumrClcclxuICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9IC8qIG9uRGVsZXRl64qUIOyXrOq4sOyEnCDrsJTroZwg7Iuk7ZaJICovXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiIsImltcG9ydCBNc2dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTXNnTGlzdCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8aDE+U0lNUExFIFNOUzwvaDE+XHJcbiAgICA8TXNnTGlzdCAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm9uRGVsZXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsInVzZVN0YXRlIiwiVXNlcklkcyIsImdldFJhbWRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwicmV2ZXJzZSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJub3ciLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIngiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==