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
  onDelete,
  myId
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
  }, void 0, false) : text, myId === userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // 유저아이디 배열



const UserIds = ['roy', 'jay']; // 유저아이디 (둘 중에 하나) 랜덤하게 넣기
// UserIds 배열의 인덱스에 랜덤 함수 넣기
// 2개뿐일 때는 Math.round만 처리 -> 0 또는 1
// const getRamdomUserId = () => UserIds[Math.round(Math.random())];
// 3개 이상일 때는 Math.random() 뒤에 배열의 길이 곱하기
// const getRamdomUserId = () => UserIds[Math.round(Math.random() * UserIds.length)];
// // Array(50): 공간이 50개인 배열 생성
// // .fill(0): 50개의 공간을 아무 값으로나 채움
// // .map(val, i): map으로 꺼내는 val이 중요하지 않으면 '_'로 처리 (=> i만 사용하려는 경우)
// // ()(return) 안에 {} (=> 객체 반환)
// const originalMsgs = Array(50)
//   .fill(0)
//   .map((_, i) => ({
//     id: i + 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 + i * 1000 * 60 /* i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> '1분' 단위로 증가하며 시간이 찍힘 */,
//     text: `${i + 1} mock text`,
//   }))
//   .reverse(); /* 최근 순서로 찍히도록 (SNS)  */
// 만든 배열을 console에 JSON.stringify로 찍어서 json 파일에 복붙 가능
// console.log(originalMsgs);
// console.log(JSON.stringify(originalMsgs)); // 배열 하나에 객체 여러 개 = json 형태로 만들어줌

const MsgList = () => {
  const {
    query: {
      userId = ''
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값인 길이 50의 댓글배열은 '변하는' 요소가 됨 => state로 선언

  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 수정할 글 id ('변동' 가능하므로 state로 선언)

  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // 새글 생성하는 함수

  const onCreate = async text => {
    // 서버에 작성된 새 글을 보냄
    // text(input 입력값)가 들어오면 주소창 query(?userId='')에 붙은 userId(roy, jay)에 따라 글 생성 시 작성자가 달라짐 (예: url이 http://localhost:3000/?userId=roy일 때 댓글 쓰면 작성자가 roy로 뜸 )
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('post', '/messages', {
      text,
      userId
    }); // (예외처리) 작성된 내용이 없으면 throw error

    if (!newMsg) throw Error('Something is wrong'); // // 새글 객체를 구성
    // const newMsg = {
    //   // 이제는 map으로 얻은 id가 아닌 기존 msgs 배열의 길이를 이용
    //   id: msgs.length + 1,
    //   userId: getRamdomUserId(),
    //   timestamp: Date.now() /* 현재 날짜 및 시간 */,
    //   text: `${msgs.length + 1} ${text}`,
    // };
    // msgs 배열에 setter 함수와 spread 연산자를 이용하여 새글 객체를 추가

    setMsgs(msgs => [newMsg, ...msgs]);
  }; // 글 수정하는 함수 (** input값 text와 함께 어느 글을 수정할 것인지 알려주는 id 필요)


  const onUpdate = async (text, id) => {
    // 서버를 통해 수정된 새 메시지로 교체(put)
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('put', `/messages/${id}`, {
      text,
      userId
    }); // (예외처리) 서버에 보낼 메시지가 없다면 throw error

    if (!newMsg) throw Error('Something is wrong'); // setter에 기존 msgs 배열을 받아와서 진행

    setMsgs(msgs => {
      // targetIndex 구하기
      // 수정할 Item의 targetIndex를 findIndex(배열메서드)로 찾음
      // findIndex: 배열을 돌면서 특정 조건을 만족하는 item의 '인덱스'를 반환 (cf. filter: 특정 조건을 만족하는 item들만 골라 '새 배열'로 반환)
      const targetIndex = msgs.findIndex(msg => msg.id === id); // (예외처리) 찾는 Index가 없으면(-1) 기존 배열 그대로 반환

      if (targetIndex < 0) return msgs; // ** 수정 진행하기
      // 1. 기존 배열 복사: 기존 msgs 배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열 생성

      const newMsgs = [...msgs]; // 2. 복사한 배열로 수정: splice를 이용해 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 item(3항)을 넣음
      // (새로운 item - targetIndex에 있는 기존 내용들은 그대로 넣고 text만 새걸로 교체)
      // newMsgs.splice(targetIndex, 1, {
      //   ...msgs[targetIndex],
      //   text: text,
      // });
      // 서버에서 온 newMsg 데이터를 넣어줌

      newMsgs.splice(targetIndex, 1, newMsg); // 3. 수정된 새 배열 반환 (-> setter에 들어가 msgs 통째로 교체)

      return newMsgs;
    }); // 수정이 끝나면 실행 (editingId를 다시 null로 바꿈)

    doneEdit();
  };

  const onDelete = async id => {
    // 삭제하는 글의 id 외에 해당 글의 'userId'도 서버에 보내야 함 => 이때 'params'로 보내고 받는 쪽에서는 query로 받음
    // { params: { userId } }: url 뒤에 ? userId = roy 라고 들어가는 부분
    // params: { userId }를 빼고 `/messages/${id}?userId={userId}`라고 보내도 동일
    const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('delete', `/messages/${id}`, {
      params: {
        userId
      }
    });
    console.log(typeof receivedId, typeof id); // (messages.json에서 현재 id가 문자열로 되어있음)

    setMsgs(msgs => {
      // 삭제한 내용이 뷰에 반영이 안되는 경우 --> id의 type이 안 맞는 것일 수 있음 (콘솔로 비교하는 두 아이디를 출력해보고 한쪽을 다른 쪽에 맞춰준다)
      const targetIndex = msgs.findIndex(msg => msg.id === String(receivedId));
      if (targetIndex < 0) return msgs; // ** 삭제 진행 (수정에서 item 추가하는 부분만 없음)

      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  }; // 수정이 완료됨을 알려줌: editingId를 null로 바꿈 => isEditing이 false로 전환 => 기존에 있던 text를 대체하던 MsgInput 뷰가 사라지고 수정된 text로 다시 대체


  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    const msgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('get', '/messages');
    setMsgs(msgs);
  }; // 최초 페이지 로드 시에만 실행
  // useEffect 내에서는 async/await를 직접 호출하지 않아야 함 => await를 호출하는 부분을 함수로 따로 빼서 거기에 async도 붙여주기


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getMessages();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x =>
      /*#__PURE__*/
      // {...x}로 객체의 각 key를 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
      // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
      // (수정 버튼이 눌리면 수정할 글의 id를 editingId에 설정하는 startEdit과, 렌더링 중인 item 중 editingId와 id가 일치하는 item이 있는지를 알려주는 isEditing은 따로 useState로 선언하지 않고 jsx에서 바로 처리)
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        onDelete: () => onDelete(x.id)
        /* onDelete는 여기서 바로 실행 */
        ,
        myId: userId
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // baseURL을 지정 (url 앞에 자동으로 붙음)

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = 'http://localhost:8000'; // axios를 통해 서버에서 응답을 받아오는 걸 fetcher 함수로 처리

const fetcher = async (method, url, ...rest) => {
  const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest); // 데이터가 하나만 들어와도 처리되도록 spread

  return res.data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);
/*
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config]) //post와 put은 get, delete와 달리 data가 하나 더 들어옴
put: axios.put(url, data[, config])
*/

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gSW5wdXTssL3sl5Ag7J6F66Cl65CcIOuCtOyaqeydhCBNc2dMaXN07JeQ7ISc64qUICdvbkNyZWF0ZSfsl5Ag7JOw6rOgIE1zZ0l0ZW3sl5DshJzripQgJ29uVXBkYXRlJ+yXkCDsgqzsmqkgKyDrkZAg66mU7ISc65Oc66W8ICdtdXRhdGUn66GcIOutieuaseq3uOugpCDshKDslrjtlZjqs6AgbXV0YXRl7JeQIOuRkCDrqZTshJzrk5wg7Iuk7ZaJ7JeQIO2VhOyalO2VnCDqsJLrk6Qg7KCE64usXHJcbi8vIChpZCA9IHVuZGVmaW5lZDogaWTqsJIg67Cb7JWE7Jik64qU642wIOyXhuydhCDsiJjrj4Qg7J6I7J2MID0+IE1zZ0l0ZW3sl5DshJwg7IiY7KCV67KE7Yq87J20IOuIjOugpOyEnCDrhJjslrTsmKggaWTqsIAg7J6I7J2EIOqyveyasCBtdXRhdGXrpbwg7Ya17ZW0IGlk6rCAIOyghOuLrOuQmOyWtCBNc2dMaXN0IOugiOuyqOyXkOyEnCBvblVwZGF0ZSDsi6TtlokgLyB0ZXh0ID0gJyc6IOyeheugpeuQnCDthY3siqTtirjqsIAg7JeG7J2EIOyImOuPhCDsnojsnYwpXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCB0ZXh0ID0gJycsIGlkID0gdW5kZWZpbmVkIH0pID0+IHtcclxuICAvLyBvbkNoYW5nZSwgb25JbnB1dCDrsKnrspUg7Jm47JeQIHVzZVJlZuulvCDsnbTsmqntlZjripQg67Cp67KV7J20IOyeiOydjFxyXG4gIC8vIGlucHV07LC9KHRleHRhcmVhKeydhCB1c2VSZWbroZwg6rCA66as7Lyc7IScIOuzgOyImOuhnCDrsJvsnYwgPT4g67OA7IiYLmN1cnJlbnQudmFsdWUgPSBpbnB1dCDsnoXroKXqsJJcclxuICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAvLyDsmYTro4zrsoTtirwg64iE66W066m0IOuPmeyekVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLyog7IOI66Gc6rOg7LmoIOuwqeyngCAqL1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLyog7J2067Kk7Yq4IOuyhOu4lOungSDrsKnsp4AgKi9cclxuXHJcbiAgICAvLyBpbnB1dOywveyXkCDsnoXroKXrkJwg6rCS7J2EIOqwgOyguOyYtFxyXG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIC8vIGlucHV07LC9IOy0iOq4sO2ZlFxyXG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAvLyBNc2dMaXN07JeQIG11dGF0ZeulvCDthrXtlbQgaW5wdXTqsJIodGV4dCkg7KCE64usXHJcbiAgICAvLyAo7IiY7KCV67KE7Yq87J20IOuIjOugpOyEnCBNc2dJbnB1dOyXkCBpZOqwgCDrhJjslrTsmKTrqbQgb25VcGRhdGXqsIAg7Iuk7ZaJ65CY6rOgIOuEmOyWtOyYqCBpZOqwgCDsl4bsnLzrqbQgb25DcmVhdGUo7IOd7ISxKSDsi6TtlokpXHJcbiAgICBtdXRhdGUodGV4dCwgaWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9J21lc3NhZ2VzX19pbnB1dCcgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPHRleHRhcmVhIHJlZj17dGV4dFJlZn0gZGVmYXVsdFZhbHVlPXt0ZXh0fSBwbGFjZWhvbGRlcj0n64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC4nIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz7smYTro4w8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQ7XHJcbiIsImltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyBpZCwgdXNlcklkLCB0aW1lc3RhbXAsIHRleHQsIG9uVXBkYXRlLCBpc0VkaXRpbmcsIHN0YXJ0RWRpdCwgb25EZWxldGUsIG15SWQgfSkgPT4gKFxyXG4gIDxsaSBjbGFzc05hbWU9J21lc3NhZ2VzX19pdGVtJz5cclxuICAgIDxoMz5cclxuICAgICAge3VzZXJJZH17JyAnfVxyXG4gICAgICA8c3ViPlxyXG4gICAgICAgIHsvKiDsg4HsnIQg7Lu07Y+s64SM7Yq4IE1zZ0xpc3Tsl5DshJwgdGltZXN0YW1wKOyLpOygnCDrgqDsp5zqsJIp7J2EIOq1rO2WiOqzoCwg7ZWY7JyEIOy7tO2PrOuEjO2KuCBNc2dJdGVt7JeQ7ISc64qUIOuCoOynnOydmCDtmJXtg5zrp4wg7J6h7JWE7KO86riwICovfVxyXG4gICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcclxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgaG91cjEyOiB0cnVlIC8qIOyYpOyghCDsmKTtm4TroZwg6rWs67aEICovLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3N1Yj5cclxuICAgIDwvaDM+XHJcblxyXG4gICAgey8qIGlzRWRpdGluZ+ydtCB0cnVl6rCAIOuQmOuptCB0ZXh0IOuMgOyLoCBNc2dJbnB1dOywvSDroIzrjZTrp4EgKi99XHJcbiAgICB7LyogTXNnTGlzdOyXkOyEnCBtYXDsnLzroZwg6rq864K07KC4IOyghOuLrOuQnCBpZOyZgCDtlajqu5ggbXV0YXRl7JeQIG9uVXBkYXRlIOyghOuLrCAqL31cclxuICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApIDogKFxyXG4gICAgICB0ZXh0XHJcbiAgICApfVxyXG5cclxuICAgIHsvKiB1cmzsl5Ag7KCB7Z6MIHVzZXJJZOyZgCBob3Zlcu2VnCBpdGVt7J2YIHVzZXJJZOqwgCDqsJnsnYQg65WM66eMIOyImOyglS/sgq3soJwg67KE7Yq8IOuCmO2DgOuCqCAqL31cclxuICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZXNfX2J1dHRvbnMnPlxyXG4gICAgICAgIHsvKiDsiJjsoJXrsoTtirwg7YG066atIOyLnCBzdGFydEVkaXQo7ZWo7IiYKSDsi6TtlokgPT4gbWFw7Jy866GcIOuPjOuNmCB4IOykkSDsiJjsoJXrsoTtirzsnbQg64iM66awIHjsnZggaWTqsIAgZWRpdGluZ0lk7JeQIOyEpOygleuQqCA9PiDtmITsnqwg7LCo66GA7JeQ7IScIOuPjOqzoCDsnojrjZggeOydmCBpZOqwgCBlZGl0aW5nSWTsmYAg7J287LmY7ZWY66m0IGlzRWRpdGluZ+ydtCB0cnVl6rCAIOuQmOuptOyEnCB0ZXh0IOuMgOyLoCBNc2dJbnB1dOywvSDroIzrjZTrp4EgKi99XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJztcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCDrsLDsl7RcclxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUICjrkZgg7KSR7JeQIO2VmOuCmCkg656c642k7ZWY6rKMIOuEo+q4sFxyXG4vLyBVc2VySWRzIOuwsOyXtOydmCDsnbjrjbHsiqTsl5Ag656c642kIO2VqOyImCDrhKPquLBcclxuLy8gMuqwnOu/kOydvCDrlYzripQgTWF0aC5yb3VuZOunjCDsspjrpqwgLT4gMCDrmJDripQgMVxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG5cclxuLy8gM+qwnCDsnbTsg4Hsnbwg65WM64qUIE1hdGgucmFuZG9tKCkg65Kk7JeQIOuwsOyXtOydmCDquLjsnbQg6rOx7ZWY6riwXHJcbi8vIGNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogVXNlcklkcy5sZW5ndGgpXTtcclxuXHJcbi8vIC8vIEFycmF5KDUwKTog6rO16rCE7J20IDUw6rCc7J24IOuwsOyXtCDsg53shLFcclxuLy8gLy8gLmZpbGwoMCk6IDUw6rCc7J2YIOqzteqwhOydhCDslYTrrLQg6rCS7Jy866Gc64KYIOyxhOybgFxyXG4vLyAvLyAubWFwKHZhbCwgaSk6IG1hcOycvOuhnCDqurzrgrTripQgdmFs7J20IOykkeyalO2VmOyngCDslYrsnLzrqbQgJ18n66GcIOyymOumrCAoPT4gaeunjCDsgqzsmqntlZjroKTripQg6rK97JqwKVxyXG4vLyAvLyAoKShyZXR1cm4pIOyViOyXkCB7fSAoPT4g6rCd7LK0IOuwmO2ZmClcclxuLy8gY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbi8vICAgLmZpbGwoMClcclxuLy8gICAubWFwKChfLCBpKSA9PiAoe1xyXG4vLyAgICAgaWQ6IGkgKyAxLFxyXG4vLyAgICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuLy8gICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAgLyogaeulvCBtaWxsaXNlY29uZOuhnCDrsJTqvrwg65KkIOuLpOyLnCA2MOydhCDqs7HtlaggLT4gJzHrtoQnIOuLqOychOuhnCDspp3qsIDtlZjrqbAg7Iuc6rCE7J20IOywje2emCAqLyxcclxuLy8gICAgIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgLFxyXG4vLyAgIH0pKVxyXG4vLyAgIC5yZXZlcnNlKCk7IC8qIOy1nOq3vCDsiJzshJzroZwg7LCN7Z6I64+E66GdIChTTlMpICAqL1xyXG5cclxuLy8g66eM65OgIOuwsOyXtOydhCBjb25zb2xl7JeQIEpTT04uc3RyaW5naWZ566GcIOywjeyWtOyEnCBqc29uIO2MjOydvOyXkCDrs7Xrtpkg6rCA64qlXHJcbi8vIGNvbnNvbGUubG9nKG9yaWdpbmFsTXNncyk7XHJcbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9yaWdpbmFsTXNncykpOyAvLyDrsLDsl7Qg7ZWY64KY7JeQIOqwneyytCDsl6zrn6wg6rCcID0ganNvbiDtmJXtg5zroZwg66eM65Ok7Ja07KSMXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBpbnB1dOqwkuydhCDsoJzstpztlZjrqbQg7IOI6riAIOyDneyEsSDrmJDripQg6riw7KG0IOq4gCDsiJjsoJUgPT4g7LSI6riw6rCS7J24IOq4uOydtCA1MOydmCDrjJPquIDrsLDsl7TsnYAgJ+uzgO2VmOuKlCcg7JqU7IaM6rCAIOuQqCA9PiBzdGF0ZeuhnCDshKDslrhcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8g7IiY7KCV7ZWgIOq4gCBpZCAoJ+uzgOuPmScg6rCA64ql7ZWY66+A66GcIHN0YXRl66GcIOyEoOyWuClcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIOyDiOq4gCDsg53shLHtlZjripQg7ZWo7IiYXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xyXG4gICAgLy8g7ISc67KE7JeQIOyekeyEseuQnCDsg4gg6riA7J2EIOuztOuDhFxyXG4gICAgLy8gdGV4dChpbnB1dCDsnoXroKXqsJIp6rCAIOuTpOyWtOyYpOuptCDso7zshozssL0gcXVlcnkoP3VzZXJJZD0nJynsl5Ag67aZ7J2AIHVzZXJJZChyb3ksIGpheSnsl5Ag65Sw6528IOq4gCDsg53shLEg7IucIOyekeyEseyekOqwgCDri6zrnbzsp5AgKOyYiDogdXJs7J20IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8/dXNlcklkPXJveeydvCDrlYwg64yT6riAIOyTsOuptCDsnpHshLHsnpDqsIAgcm9566GcIOucuCApXHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIC8vICjsmIjsmbjsspjrpqwpIOyekeyEseuQnCDrgrTsmqnsnbQg7JeG7Jy866m0IHRocm93IGVycm9yXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZycpO1xyXG5cclxuICAgIC8vIC8vIOyDiOq4gCDqsJ3ssrTrpbwg6rWs7ISxXHJcbiAgICAvLyBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAvLyAgIC8vIOydtOygnOuKlCBtYXDsnLzroZwg7Ja77J2AIGlk6rCAIOyVhOuLjCDquLDsobQgbXNncyDrsLDsl7TsnZgg6ri47J2066W8IOydtOyaqVxyXG4gICAgLy8gICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgLy8gICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4gICAgLy8gICB0aW1lc3RhbXA6IERhdGUubm93KCkgLyog7ZiE7J6sIOuCoOynnCDrsI8g7Iuc6rCEICovLFxyXG4gICAgLy8gICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBtc2dzIOuwsOyXtOyXkCBzZXR0ZXIg7ZWo7IiY7JmAIHNwcmVhZCDsl7DsgrDsnpDrpbwg7J207Jqp7ZWY7JesIOyDiOq4gCDqsJ3ssrTrpbwg7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyImOygle2VmOuKlCDtlajsiJggKCoqIGlucHV06rCSIHRleHTsmYAg7ZWo6ruYIOyWtOuKkCDquIDsnYQg7IiY7KCV7ZWgIOqyg+yduOyngCDslYzroKTso7zripQgaWQg7ZWE7JqUKVxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICAvLyDshJzrsoTrpbwg7Ya17ZW0IOyImOygleuQnCDsg4gg66mU7Iuc7KeA66GcIOq1kOyytChwdXQpXHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcblxyXG4gICAgLy8gKOyYiOyZuOyymOumrCkg7ISc67KE7JeQIOuztOuCvCDrqZTsi5zsp4DqsIAg7JeG64uk66m0IHRocm93IGVycm9yXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZycpO1xyXG5cclxuICAgIC8vIHNldHRlcuyXkCDquLDsobQgbXNncyDrsLDsl7TsnYQg67Cb7JWE7JmA7IScIOynhO2WiVxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICAvLyB0YXJnZXRJbmRleCDqtaztlZjquLBcclxuICAgICAgLy8g7IiY7KCV7ZWgIEl0ZW3snZggdGFyZ2V0SW5kZXjrpbwgZmluZEluZGV4KOuwsOyXtOuplOyEnOuTnCnroZwg7LC+7J2MXHJcbiAgICAgIC8vIGZpbmRJbmRleDog67Cw7Je07J2EIOuPjOuptOyEnCDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCBpdGVt7J2YICfsnbjrjbHsiqQn66W8IOuwmO2ZmCAoY2YuIGZpbHRlcjog7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeuTpOunjCDqs6jrnbwgJ+yDiCDrsLDsl7Qn66GcIOuwmO2ZmClcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuXHJcbiAgICAgIC8vICjsmIjsmbjsspjrpqwpIOywvuuKlCBJbmRleOqwgCDsl4bsnLzrqbQoLTEpIOq4sOyhtCDrsLDsl7Qg6re464yA66GcIOuwmO2ZmFxyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuXHJcbiAgICAgIC8vICoqIOyImOyglSDsp4TtlontlZjquLBcclxuICAgICAgLy8gMS4g6riw7KG0IOuwsOyXtCDrs7Xsgqw6IOq4sOyhtCBtc2dzIOuwsOyXtOydhCBzcHJlYWTroZwg7Y687LmcIOuSpCDri6Tsi5wgW13sl5Ag64Sj7Ja0IOyDiCDrsLDsl7Qg7IOd7ISxXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcblxyXG4gICAgICAvLyAyLiDrs7XsgqztlZwg67Cw7Je066GcIOyImOyglTogc3BsaWNl66W8IOydtOyaqe2VtCB0YXJnZXRJbmRleOu2gO2EsCAx6rCcKGRlbGV0ZUNvdW50KeulvCDsp4DsmrDqs6Ag6re4IOyekOumrOyXkCDsg4jroZzsmrQgaXRlbSgz7ZWtKeydhCDrhKPsnYxcclxuICAgICAgLy8gKOyDiOuhnOyatCBpdGVtIC0gdGFyZ2V0SW5kZXjsl5Ag7J6I64qUIOq4sOyhtCDrgrTsmqnrk6TsnYAg6re464yA66GcIOuEo+qzoCB0ZXh066eMIOyDiOqxuOuhnCDqtZDssrQpXHJcbiAgICAgIC8vIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XHJcbiAgICAgIC8vICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXHJcbiAgICAgIC8vICAgdGV4dDogdGV4dCxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAvLyDshJzrsoTsl5DshJwg7JioIG5ld01zZyDrjbDsnbTthLDrpbwg64Sj7Ja07KSMXHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xyXG5cclxuICAgICAgLy8gMy4g7IiY7KCV65CcIOyDiCDrsLDsl7Qg67CY7ZmYICgtPiBzZXR0ZXLsl5Ag65Ok7Ja06rCAIG1zZ3Mg7Ya17Ke466GcIOq1kOyytClcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDsiJjsoJXsnbQg64Gd64KY66m0IOyLpO2WiSAoZWRpdGluZ0lk66W8IOuLpOyLnCBudWxs66GcIOuwlOq/iClcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIC8vIOyCreygnO2VmOuKlCDquIDsnZggaWQg7Jm47JeQIO2VtOuLuSDquIDsnZggJ3VzZXJJZCfrj4Qg7ISc67KE7JeQIOuztOuCtOyVvCDtlaggPT4g7J2065WMICdwYXJhbXMn66GcIOuztOuCtOqzoCDrsJvripQg7Kq97JeQ7ISc64qUIHF1ZXJ566GcIOuwm+ydjFxyXG4gICAgLy8geyBwYXJhbXM6IHsgdXNlcklkIH0gfTogdXJsIOuSpOyXkCA/IHVzZXJJZCA9IHJveSDrnbzqs6Ag65Ok7Ja06rCA64qUIOu2gOu2hFxyXG4gICAgLy8gcGFyYW1zOiB7IHVzZXJJZCB966W8IOu5vOqzoCBgL21lc3NhZ2VzLyR7aWR9P3VzZXJJZD17dXNlcklkfWDrnbzqs6Ag67O064K064+EIOuPmeydvFxyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KTtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZWNlaXZlZElkLCB0eXBlb2YgaWQpOyAvLyAobWVzc2FnZXMuanNvbuyXkOyEnCDtmITsnqwgaWTqsIAg66y47J6Q7Je066GcIOuQmOyWtOyeiOydjClcclxuXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIC8vIOyCreygnO2VnCDrgrTsmqnsnbQg67ew7JeQIOuwmOyYgeydtCDslYjrkJjripQg6rK97JqwIC0tPiBpZOydmCB0eXBl7J20IOyViCDrp57ripQg6rKD7J28IOyImCDsnojsnYwgKOy9mOyGlOuhnCDruYTqtZDtlZjripQg65GQIOyVhOydtOuUlOulvCDstpzroKXtlbTrs7Tqs6Ag7ZWc7Kq97J2EIOuLpOuluCDsqr3sl5Ag66ee7Law7KSA64ukKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gU3RyaW5nKHJlY2VpdmVkSWQpKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsgq3soJwg7KeE7ZaJICjsiJjsoJXsl5DshJwgaXRlbSDstpTqsIDtlZjripQg67aA67aE66eMIOyXhuydjClcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIOyImOygleydtCDsmYTro4zrkKjsnYQg7JWM66Ck7KSMOiBlZGl0aW5nSWTrpbwgbnVsbOuhnCDrsJTqv4ggPT4gaXNFZGl0aW5n7J20IGZhbHNl66GcIOyghO2ZmCA9PiDquLDsobTsl5Ag7J6I642YIHRleHTrpbwg64yA7LK07ZWY642YIE1zZ0lucHV0IOu3sOqwgCDsgqzrnbzsp4Dqs6Ag7IiY7KCV65CcIHRleHTroZwg64uk7IucIOuMgOyytFxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJyk7XHJcbiAgICBzZXRNc2dzKG1zZ3MpO1xyXG4gIH07XHJcblxyXG4gIC8vIOy1nOy0iCDtjpjsnbTsp4Ag66Gc65OcIOyLnOyXkOunjCDsi6TtlolcclxuICAvLyB1c2VFZmZlY3Qg64K07JeQ7ISc64qUIGFzeW5jL2F3YWl066W8IOyngeygkSDtmLjstpztlZjsp4Ag7JWK7JWE7JW8IO2VqCA9PiBhd2FpdOulvCDtmLjstpztlZjripQg67aA67aE7J2EIO2VqOyImOuhnCDrlLDroZwg67m87IScIOqxsOq4sOyXkCBhc3luY+uPhCDrtpnsl6zso7zquLBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgLy8gey4uLnh966GcIOqwneyytOydmCDqsIEga2V566W8IOyghOu2gCDrhKPqs6AgTXNnSXRlbeyXkOyEnCDsk7gg65WM64qUIOydvOu2gOunjCDqs6jrnbwg7IKs7JqpIOqwgOuKpVxyXG4gICAgICAgICAgLy8g7IiY7KCV7JeQIO2VhOyalO2VnCBvblVwZGF0ZSwgc3RhcnRFZGl0LCBpc0VkaXRpbmfsnYQg66+466asIOuEo+yWtOykjFxyXG4gICAgICAgICAgLy8gKOyImOyglSDrsoTtirzsnbQg64iM66as66m0IOyImOygle2VoCDquIDsnZggaWTrpbwgZWRpdGluZ0lk7JeQIOyEpOygle2VmOuKlCBzdGFydEVkaXTqs7wsIOugjOuNlOungSDspJHsnbggaXRlbSDspJEgZWRpdGluZ0lk7JmAIGlk6rCAIOydvOy5mO2VmOuKlCBpdGVt7J20IOyeiOuKlOyngOulvCDslYzroKTso7zripQgaXNFZGl0aW5n7J2AIOuUsOuhnCB1c2VTdGF0ZeuhnCDshKDslrjtlZjsp4Ag7JWK6rOgIGpzeOyXkOyEnCDrsJTroZwg7LKY66asKVxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gLyogb25EZWxldGXripQg7Jes6riw7IScIOuwlOuhnCDsi6TtlokgKi9cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gYmFzZVVSTOydhCDsp4DsoJUgKHVybCDslZ7sl5Ag7J6Q64+Z7Jy866GcIOu2meydjClcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnO1xyXG5cclxuLy8gYXhpb3Prpbwg7Ya17ZW0IOyEnOuyhOyXkOyEnCDsnZHri7XsnYQg67Cb7JWE7Jik64qUIOqxuCBmZXRjaGVyIO2VqOyImOuhnCDsspjrpqxcclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChtZXRob2QsIHVybCwgLi4ucmVzdCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCAuLi5yZXN0KTsgLy8g642w7J207YSw6rCAIO2VmOuCmOunjCDrk6TslrTsmYDrj4Qg7LKY66as65CY64+E66GdIHNwcmVhZFxyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7XHJcblxyXG4vKlxyXG5nZXQ6IGF4aW9zLmdldCh1cmxbLCBjb25maWddKVxyXG5kZWxldGU6IGF4aW9zLmRlbGV0ZSh1cmxbLCBjb25maWddKVxyXG5wb3N0OiBheGlvcy5wb3N0KHVybCwgZGF0YVssIGNvbmZpZ10pIC8vcG9zdOyZgCBwdXTsnYAgZ2V0LCBkZWxldGXsmYAg64us66asIGRhdGHqsIAg7ZWY64KYIOuNlCDrk6TslrTsmLRcclxucHV0OiBheGlvcy5wdXQodXJsLCBkYXRhWywgY29uZmlnXSlcclxuKi9cclxuIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxoMT5TSU1QTEUgU05TPC9oMT5cclxuICAgIDxNc2dMaXN0IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwidGV4dCIsImlkIiwidW5kZWZpbmVkIiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsInZhbHVlIiwiTXNnSXRlbSIsInVzZXJJZCIsInRpbWVzdGFtcCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0Iiwib25EZWxldGUiLCJteUlkIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZmV0Y2hlciIsIlVzZXJJZHMiLCJNc2dMaXN0IiwicXVlcnkiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwiRXJyb3IiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiU3RyaW5nIiwiZ2V0TWVzc2FnZXMiLCJtYXAiLCJ4IiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJtZXRob2QiLCJ1cmwiLCJyZXN0IiwicmVzIiwiZGF0YSIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9