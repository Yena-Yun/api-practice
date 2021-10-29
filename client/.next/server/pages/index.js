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
// const UserIds = ['roy', 'jay'];
// 유저아이디 (둘 중에 하나) 랜덤하게 넣기
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
    console.log(typeof receivedId, typeof id); // number, string (=> messages.json에서 현재 id가 문자열로 되어있어서)

    setMsgs(msgs => {
      // 삭제한 내용이 뷰에 반영이 안되는 경우 --> id의 type이 안 맞는 것일 수 있음 (콘솔로 두 아이디를 출력해보고 한쪽을 다른 쪽에 맞춰준다)
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

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = 'http://localhost:8000';
/* 서버 url */
// axios를 통해 서버에서 응답을 받아오는 걸 fetcher 함수로 처리

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9mZXRjaGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIElucHV07LC97JeQIOyeheugpeuQnCDrgrTsmqnsnYQgTXNnTGlzdOyXkOyEnOuKlCAnb25DcmVhdGUn7JeQIOyTsOqzoCBNc2dJdGVt7JeQ7ISc64qUICdvblVwZGF0ZSfsl5Ag7IKs7JqpICsg65GQIOuplOyEnOuTnOulvCAnbXV0YXRlJ+uhnCDrrYnrmrHqt7jroKQg7ISg7Ja47ZWY6rOgIG11dGF0ZeyXkCDrkZAg66mU7ISc65OcIOyLpO2WieyXkCDtlYTsmpTtlZwg6rCS65OkIOyghOuLrFxyXG4vLyAoaWQgPSB1bmRlZmluZWQ6IGlk6rCSIOuwm+yVhOyYpOuKlOuNsCDsl4bsnYQg7IiY64+EIOyeiOydjCA9PiBNc2dJdGVt7JeQ7IScIOyImOygleuyhO2KvOydtCDriIzroKTshJwg64SY7Ja07JioIGlk6rCAIOyeiOydhCDqsr3smrAgbXV0YXRl66W8IO2Gte2VtCBpZOqwgCDsoITri6zrkJjslrQgTXNnTGlzdCDroIjrsqjsl5DshJwgb25VcGRhdGUg7Iuk7ZaJIC8gdGV4dCA9ICcnOiDsnoXroKXrkJwg7YWN7Iqk7Yq46rCAIOyXhuydhCDsiJjrj4Qg7J6I7J2MKVxyXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgdGV4dCA9ICcnLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgLy8gb25DaGFuZ2UsIG9uSW5wdXQg67Cp67KVIOyZuOyXkCB1c2VSZWbrpbwg7J207Jqp7ZWY64qUIOuwqeuyleydtCDsnojsnYxcclxuICAvLyBpbnB1dOywvSh0ZXh0YXJlYSnsnYQgdXNlUmVm66GcIOqwgOumrOy8nOyEnCDrs4DsiJjroZwg67Cb7J2MID0+IOuzgOyImC5jdXJyZW50LnZhbHVlID0gaW5wdXQg7J6F66Cl6rCSXHJcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8g7JmE66OM67KE7Yq8IOuIhOultOuptCDrj5nsnpFcclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8qIOyDiOuhnOqzoOy5qCDrsKnsp4AgKi9cclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8qIOydtOuypO2KuCDrsoTruJTrp4Eg67Cp7KeAICovXHJcblxyXG4gICAgLy8gaW5wdXTssL3sl5Ag7J6F66Cl65CcIOqwkuydhCDqsIDsoLjsmLRcclxuICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAvLyBpbnB1dOywvSDstIjquLDtmZRcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgLy8gTXNnTGlzdOyXkCBtdXRhdGXrpbwg7Ya17ZW0IGlucHV06rCSKHRleHQpIOyghOuLrFxyXG4gICAgLy8gKOyImOygleuyhO2KvOydtCDriIzroKTshJwgTXNnSW5wdXTsl5AgaWTqsIAg64SY7Ja07Jik66m0IG9uVXBkYXRl6rCAIOyLpO2WieuQmOqzoCDrhJjslrTsmKggaWTqsIAg7JeG7Jy866m0IG9uQ3JlYXRlKOyDneyEsSkg7Iuk7ZaJKVxyXG4gICAgbXV0YXRlKHRleHQsIGlkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdtZXNzYWdlc19faW5wdXQnIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9J+uCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuJyAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+7JmE66OMPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xyXG4iLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHsgaWQsIHVzZXJJZCwgdGltZXN0YW1wLCB0ZXh0LCBvblVwZGF0ZSwgaXNFZGl0aW5nLCBzdGFydEVkaXQsIG9uRGVsZXRlLCBteUlkIH0pID0+IChcclxuICA8bGkgY2xhc3NOYW1lPSdtZXNzYWdlc19faXRlbSc+XHJcbiAgICA8aDM+XHJcbiAgICAgIHt1c2VySWR9eycgJ31cclxuICAgICAgPHN1Yj5cclxuICAgICAgICB7Lyog7IOB7JyEIOy7tO2PrOuEjO2KuCBNc2dMaXN07JeQ7IScIHRpbWVzdGFtcCjsi6TsoJwg64Kg7Kec6rCSKeydhCDqtaztlojqs6AsIO2VmOychCDsu7Ttj6zrhIztirggTXNnSXRlbeyXkOyEnOuKlCDrgqDsp5zsnZgg7ZiV7YOc66eMIOyeoeyVhOyjvOq4sCAqL31cclxuICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS1InLCB7XHJcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxyXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSAvKiDsmKTsoIQg7Jik7ZuE66GcIOq1rOu2hCAqLyxcclxuICAgICAgICB9KX1cclxuICAgICAgPC9zdWI+XHJcbiAgICA8L2gzPlxyXG5cclxuICAgIHsvKiBpc0VkaXRpbmfsnbQgdHJ1ZeqwgCDrkJjrqbQgdGV4dCDrjIDsi6AgTXNnSW5wdXTssL0g66CM642U66eBICovfVxyXG4gICAgey8qIE1zZ0xpc3Tsl5DshJwgbWFw7Jy866GcIOq6vOuCtOyguCDsoITri6zrkJwgaWTsmYAg7ZWo6ruYIG11dGF0ZeyXkCBvblVwZGF0ZSDsoITri6wgKi99XHJcbiAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uVXBkYXRlfSB0ZXh0PXt0ZXh0fSBpZD17aWR9IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKSA6IChcclxuICAgICAgdGV4dFxyXG4gICAgKX1cclxuXHJcbiAgICB7LyogdXJs7JeQIOygge2ejCB1c2VySWTsmYAgaG92ZXLtlZwgaXRlbeydmCB1c2VySWTqsIAg6rCZ7J2EIOuVjOunjCDsiJjsoJUv7IKt7KCcIOuyhO2KvCDrgpjtg4DrgqggKi99XHJcbiAgICB7bXlJZCA9PT0gdXNlcklkICYmIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzX19idXR0b25zJz5cclxuICAgICAgICB7Lyog7IiY7KCV67KE7Yq8IO2BtOumrSDsi5wgc3RhcnRFZGl0KO2VqOyImCkg7Iuk7ZaJID0+IG1hcOycvOuhnCDrj4zrjZggeCDspJEg7IiY7KCV67KE7Yq87J20IOuIjOumsCB47J2YIGlk6rCAIGVkaXRpbmdJZOyXkCDshKTsoJXrkKggPT4g7ZiE7J6sIOywqOuhgOyXkOyEnCDrj4zqs6Ag7J6I642YIHjsnZggaWTqsIAgZWRpdGluZ0lk7JmAIOydvOy5mO2VmOuptCBpc0VkaXRpbmfsnbQgdHJ1ZeqwgCDrkJjrqbTshJwgdGV4dCDrjIDsi6AgTXNnSW5wdXTssL0g66CM642U66eBICovfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApfVxyXG4gIDwvbGk+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcic7XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQg67Cw7Je0XHJcbi8vIGNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcclxuXHJcbi8vIOycoOyggOyVhOydtOuUlCAo65GYIOykkeyXkCDtlZjrgpgpIOuenOuNpO2VmOqyjCDrhKPquLBcclxuLy8gVXNlcklkcyDrsLDsl7TsnZgg7J24642x7Iqk7JeQIOuenOuNpCDtlajsiJgg64Sj6riwXHJcbi8vIDLqsJzrv5Dsnbwg65WM64qUIE1hdGgucm91bmTrp4wg7LKY66asIC0+IDAg65iQ64qUIDFcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcclxuXHJcbi8vIDPqsJwg7J207IOB7J28IOuVjOuKlCBNYXRoLnJhbmRvbSgpIOuSpOyXkCDrsLDsl7TsnZgg6ri47J20IOqzse2VmOq4sFxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIFVzZXJJZHMubGVuZ3RoKV07XHJcblxyXG4vLyAvLyBBcnJheSg1MCk6IOqzteqwhOydtCA1MOqwnOyduCDrsLDsl7Qg7IOd7ISxXHJcbi8vIC8vIC5maWxsKDApOiA1MOqwnOydmCDqs7XqsITsnYQg7JWE66y0IOqwkuycvOuhnOuCmCDssYTsm4BcclxuLy8gLy8gLm1hcCh2YWwsIGkpOiBtYXDsnLzroZwg6rq864K064qUIHZhbOydtCDspJHsmpTtlZjsp4Ag7JWK7Jy866m0ICdfJ+uhnCDsspjrpqwgKD0+IGnrp4wg7IKs7Jqp7ZWY66Ck64qUIOqyveyasClcclxuLy8gLy8gKCkocmV0dXJuKSDslYjsl5Age30gKD0+IOqwneyytCDrsJjtmZgpXHJcbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4vLyAgIC5maWxsKDApXHJcbi8vICAgLm1hcCgoXywgaSkgPT4gKHtcclxuLy8gICAgIGlkOiBpICsgMSxcclxuLy8gICAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwIC8qIGnrpbwgbWlsbGlzZWNvbmTroZwg67CU6r68IOuSpCDri6Tsi5wgNjDsnYQg6rOx7ZWoIC0+ICcx67aEJyDri6jsnITroZwg7Kad6rCA7ZWY66mwIOyLnOqwhOydtCDssI3tnpggKi8sXHJcbi8vICAgICB0ZXh0OiBgJHtpICsgMX0gbW9jayB0ZXh0YCxcclxuLy8gICB9KSlcclxuLy8gICAucmV2ZXJzZSgpOyAvKiDstZzqt7wg7Iic7ISc66GcIOywje2eiOuPhOuhnSAoU05TKSAgKi9cclxuXHJcbi8vIOunjOuToCDrsLDsl7TsnYQgY29uc29sZeyXkCBKU09OLnN0cmluZ2lmeeuhnCDssI3slrTshJwganNvbiDtjIzsnbzsl5Ag67O167aZIOqwgOuKpVxyXG4vLyBjb25zb2xlLmxvZyhvcmlnaW5hbE1zZ3MpO1xyXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTsgLy8g67Cw7Je0IO2VmOuCmOyXkCDqsJ3ssrQg7Jes65+sIOqwnCA9IGpzb24g7ZiV7YOc66GcIOunjOuTpOyWtOykjFxyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyB1c2VySWQgPSAnJyB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gaW5wdXTqsJLsnYQg7KCc7Lac7ZWY66m0IOyDiOq4gCDsg53shLEg65iQ64qUIOq4sOyhtCDquIAg7IiY7KCVID0+IOy0iOq4sOqwkuyduCDquLjsnbQgNTDsnZgg64yT6riA67Cw7Je07J2AICfrs4DtlZjripQnIOyalOyGjOqwgCDrkKggPT4gc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIOyImOygle2VoCDquIAgaWQgKCfrs4Drj5knIOqwgOuKpe2VmOuvgOuhnCBzdGF0ZeuhnCDshKDslrgpXHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyDsg4jquIAg7IOd7ISx7ZWY64qUIO2VqOyImFxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgKHRleHQpID0+IHtcclxuICAgIC8vIOyEnOuyhOyXkCDsnpHshLHrkJwg7IOIIOq4gOydhCDrs7Trg4RcclxuICAgIC8vIHRleHQoaW5wdXQg7J6F66Cl6rCSKeqwgCDrk6TslrTsmKTrqbQg7KO87IaM7LC9IHF1ZXJ5KD91c2VySWQ9Jycp7JeQIOu2meydgCB1c2VySWQocm95LCBqYXkp7JeQIOuUsOudvCDquIAg7IOd7ISxIOyLnCDsnpHshLHsnpDqsIAg64us65287KeQICjsmIg6IHVybOydtCBodHRwOi8vbG9jYWxob3N0OjMwMDAvP3VzZXJJZD1yb3nsnbwg65WMIOuMk+q4gCDsk7DrqbQg7J6R7ISx7J6Q6rCAIHJveeuhnCDrnLggKVxyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuXHJcbiAgICAvLyAo7JiI7Jm47LKY66asKSDsnpHshLHrkJwg64K07Jqp7J20IOyXhuycvOuptCB0aHJvdyBlcnJvclxyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdTb21ldGhpbmcgaXMgd3JvbmcnKTtcclxuXHJcbiAgICAvLyAvLyDsg4jquIAg6rCd7LK066W8IOq1rOyEsVxyXG4gICAgLy8gY29uc3QgbmV3TXNnID0ge1xyXG4gICAgLy8gICAvLyDsnbTsoJzripQgbWFw7Jy866GcIOyWu+ydgCBpZOqwgCDslYTri4wg6riw7KG0IG1zZ3Mg67Cw7Je07J2YIOq4uOydtOulvCDsnbTsmqlcclxuICAgIC8vICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgIC8vICAgdXNlcklkOiBnZXRSYW1kb21Vc2VySWQoKSxcclxuICAgIC8vICAgdGltZXN0YW1wOiBEYXRlLm5vdygpIC8qIO2YhOyerCDrgqDsp5wg67CPIOyLnOqwhCAqLyxcclxuICAgIC8vICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gbXNncyDrsLDsl7Tsl5Agc2V0dGVyIO2VqOyImOyZgCBzcHJlYWQg7Jew7IKw7J6Q66W8IOydtOyaqe2VmOyXrCDsg4jquIAg6rCd7LK066W8IOy2lOqwgFxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIC8vIOq4gCDsiJjsoJXtlZjripQg7ZWo7IiYICgqKiBpbnB1dOqwkiB0ZXh07JmAIO2VqOq7mCDslrTripAg6riA7J2EIOyImOygle2VoCDqsoPsnbjsp4Ag7JWM66Ck7KO864qUIGlkIO2VhOyalClcclxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgLy8g7ISc67KE66W8IO2Gte2VtCDsiJjsoJXrkJwg7IOIIOuplOyLnOyngOuhnCDqtZDssrQocHV0KVxyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIC8vICjsmIjsmbjsspjrpqwpIOyEnOuyhOyXkCDrs7Trgrwg66mU7Iuc7KeA6rCAIOyXhuuLpOuptCB0aHJvdyBlcnJvclxyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdTb21ldGhpbmcgaXMgd3JvbmcnKTtcclxuXHJcbiAgICAvLyBzZXR0ZXLsl5Ag6riw7KG0IG1zZ3Mg67Cw7Je07J2EIOuwm+yVhOyZgOyEnCDsp4TtlolcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8gdGFyZ2V0SW5kZXgg6rWs7ZWY6riwXHJcbiAgICAgIC8vIOyImOygle2VoCBJdGVt7J2YIHRhcmdldEluZGV466W8IGZpbmRJbmRleCjrsLDsl7TrqZTshJzrk5wp66GcIOywvuydjFxyXG4gICAgICAvLyBmaW5kSW5kZXg6IOuwsOyXtOydhCDrj4zrqbTshJwg7Yq57KCVIOyhsOqxtOydhCDrp4zsobHtlZjripQgaXRlbeydmCAn7J24642x7IqkJ+ulvCDrsJjtmZggKGNmLiBmaWx0ZXI6IO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3rk6Trp4wg6rOo6528ICfsg4gg67Cw7Je0J+uhnCDrsJjtmZgpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAvLyAo7JiI7Jm47LKY66asKSDssL7ripQgSW5kZXjqsIAg7JeG7Jy866m0KC0xKSDquLDsobQg67Cw7Je0IOq3uOuMgOuhnCDrsJjtmZhcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsiJjsoJUg7KeE7ZaJ7ZWY6riwXHJcbiAgICAgIC8vIDEuIOq4sOyhtCDrsLDsl7Qg67O17IKsOiDquLDsobQgbXNncyDrsLDsl7TsnYQgc3ByZWFk66GcIO2OvOy5nCDrkqQg64uk7IucIFtd7JeQIOuEo+yWtCDsg4gg67Cw7Je0IOyDneyEsVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG5cclxuICAgICAgLy8gMi4g67O17IKs7ZWcIOuwsOyXtOuhnCDsiJjsoJU6IHNwbGljZeulvCDsnbTsmqntlbQgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnChkZWxldGVDb3VudCnrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IOI66Gc7Jq0IGl0ZW0oM+2VrSnsnYQg64Sj7J2MXHJcbiAgICAgIC8vICjsg4jroZzsmrQgaXRlbSAtIHRhcmdldEluZGV47JeQIOyeiOuKlCDquLDsobQg64K07Jqp65Ok7J2AIOq3uOuMgOuhnCDrhKPqs6AgdGV4dOunjCDsg4jqsbjroZwg6rWQ7LK0KVxyXG4gICAgICAvLyBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAvLyAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAvLyAgIHRleHQ6IHRleHQsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgLy8g7ISc67KE7JeQ7IScIOyYqCBuZXdNc2cg642w7J207YSw66W8IOuEo+yWtOykjFxyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKTtcclxuXHJcbiAgICAgIC8vIDMuIOyImOygleuQnCDsg4gg67Cw7Je0IOuwmO2ZmCAoLT4gc2V0dGVy7JeQIOuTpOyWtOqwgCBtc2dzIO2GteynuOuhnCDqtZDssrQpXHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g7IiY7KCV7J20IOuBneuCmOuptCDsi6TtlokgKGVkaXRpbmdJZOulvCDri6Tsi5wgbnVsbOuhnCDrsJTqv4gpXHJcbiAgICBkb25lRWRpdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAvLyDsgq3soJztlZjripQg6riA7J2YIGlkIOyZuOyXkCDtlbTri7kg6riA7J2YICd1c2VySWQn64+EIOyEnOuyhOyXkCDrs7TrgrTslbwg7ZWoID0+IOydtOuVjCAncGFyYW1zJ+uhnCDrs7TrgrTqs6Ag67Cb64qUIOyqveyXkOyEnOuKlCBxdWVyeeuhnCDrsJvsnYxcclxuICAgIC8vIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH06IHVybCDrkqTsl5AgPyB1c2VySWQgPSByb3kg65286rOgIOuTpOyWtOqwgOuKlCDrtoDrtoRcclxuICAgIC8vIHBhcmFtczogeyB1c2VySWQgfeulvCDrubzqs6AgYC9tZXNzYWdlcy8ke2lkfT91c2VySWQ9e3VzZXJJZH1g65286rOgIOuztOuCtOuPhCDrj5nsnbxcclxuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHsgdXNlcklkIH0gfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgcmVjZWl2ZWRJZCwgdHlwZW9mIGlkKTsgLy8gbnVtYmVyLCBzdHJpbmcgKD0+IG1lc3NhZ2VzLmpzb27sl5DshJwg7ZiE7J6sIGlk6rCAIOusuOyekOyXtOuhnCDrkJjslrTsnojslrTshJwpXHJcblxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICAvLyDsgq3soJztlZwg64K07Jqp7J20IOu3sOyXkCDrsJjsmIHsnbQg7JWI65CY64qUIOqyveyasCAtLT4gaWTsnZggdHlwZeydtCDslYgg66ee64qUIOqyg+ydvCDsiJgg7J6I7J2MICjsvZjshpTroZwg65GQIOyVhOydtOuUlOulvCDstpzroKXtlbTrs7Tqs6Ag7ZWc7Kq97J2EIOuLpOuluCDsqr3sl5Ag66ee7Law7KSA64ukKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gU3RyaW5nKHJlY2VpdmVkSWQpKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcblxyXG4gICAgICAvLyAqKiDsgq3soJwg7KeE7ZaJICjsiJjsoJXsl5DshJwgaXRlbSDstpTqsIDtlZjripQg67aA67aE66eMIOyXhuydjClcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIOyImOygleydtCDsmYTro4zrkKjsnYQg7JWM66Ck7KSMOiBlZGl0aW5nSWTrpbwgbnVsbOuhnCDrsJTqv4ggPT4gaXNFZGl0aW5n7J20IGZhbHNl66GcIOyghO2ZmCA9PiDquLDsobTsl5Ag7J6I642YIHRleHTrpbwg64yA7LK07ZWY642YIE1zZ0lucHV0IOu3sOqwgCDsgqzrnbzsp4Dqs6Ag7IiY7KCV65CcIHRleHTroZwg64uk7IucIOuMgOyytFxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJyk7XHJcbiAgICBzZXRNc2dzKG1zZ3MpO1xyXG4gIH07XHJcblxyXG4gIC8vIOy1nOy0iCDtjpjsnbTsp4Ag66Gc65OcIOyLnOyXkOunjCDsi6TtlolcclxuICAvLyB1c2VFZmZlY3Qg64K07JeQ7ISc64qUIGFzeW5jL2F3YWl066W8IOyngeygkSDtmLjstpztlZjsp4Ag7JWK7JWE7JW8IO2VqCA9PiBhd2FpdOulvCDtmLjstpztlZjripQg67aA67aE7J2EIO2VqOyImOuhnCDrlLDroZwg67m87IScIOqxsOq4sOyXkCBhc3luY+uPhCDrtpnsl6zso7zquLBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT0nbWVzc2FnZXMnPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgLy8gey4uLnh966GcIOqwneyytOydmCDqsIEga2V566W8IOyghOu2gCDrhKPqs6AgTXNnSXRlbeyXkOyEnCDsk7gg65WM64qUIOydvOu2gOunjCDqs6jrnbwg7IKs7JqpIOqwgOuKpVxyXG4gICAgICAgICAgLy8g7IiY7KCV7JeQIO2VhOyalO2VnCBvblVwZGF0ZSwgc3RhcnRFZGl0LCBpc0VkaXRpbmfsnYQg66+466asIOuEo+yWtOykjFxyXG4gICAgICAgICAgLy8gKOyImOyglSDrsoTtirzsnbQg64iM66as66m0IOyImOygle2VoCDquIDsnZggaWTrpbwgZWRpdGluZ0lk7JeQIOyEpOygle2VmOuKlCBzdGFydEVkaXTqs7wsIOugjOuNlOungSDspJHsnbggaXRlbSDspJEgZWRpdGluZ0lk7JmAIGlk6rCAIOydvOy5mO2VmOuKlCBpdGVt7J20IOyeiOuKlOyngOulvCDslYzroKTso7zripQgaXNFZGl0aW5n7J2AIOuUsOuhnCB1c2VTdGF0ZeuhnCDshKDslrjtlZjsp4Ag7JWK6rOgIGpzeOyXkOyEnCDrsJTroZwg7LKY66asKVxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gLyogb25EZWxldGXripQg7Jes6riw7IScIOuwlOuhnCDsi6TtlokgKi9cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gYmFzZVVSTOydhCDsp4DsoJUgKHVybCDslZ7sl5Ag7J6Q64+Z7Jy866GcIOu2meydjClcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnOyAvKiDshJzrsoQgdXJsICovXHJcblxyXG4vLyBheGlvc+ulvCDthrXtlbQg7ISc67KE7JeQ7IScIOydkeuLteydhCDrsJvslYTsmKTripQg6rG4IGZldGNoZXIg7ZWo7IiY66GcIOyymOumrFxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKG1ldGhvZCwgdXJsLCAuLi5yZXN0KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIC4uLnJlc3QpOyAvLyDrjbDsnbTthLDqsIAg7ZWY64KY66eMIOuTpOyWtOyZgOuPhCDsspjrpqzrkJjrj4TroZ0gc3ByZWFkXHJcbiAgcmV0dXJuIHJlcy5kYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjtcclxuXHJcbi8qXHJcbmdldDogYXhpb3MuZ2V0KHVybFssIGNvbmZpZ10pXHJcbmRlbGV0ZTogYXhpb3MuZGVsZXRlKHVybFssIGNvbmZpZ10pXHJcbnBvc3Q6IGF4aW9zLnBvc3QodXJsLCBkYXRhWywgY29uZmlnXSkgLy9wb3N07JmAIHB1dOydgCBnZXQsIGRlbGV0ZeyZgCDri6zrpqwgZGF0YeqwgCDtlZjrgpgg642UIOuTpOyWtOyYtFxyXG5wdXQ6IGF4aW9zLnB1dCh1cmwsIGRhdGFbLCBjb25maWddKVxyXG4qL1xyXG4iLCJpbXBvcnQgTXNnTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01zZ0xpc3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgPE1zZ0xpc3QgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsIm15SWQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwiTXNnTGlzdCIsInF1ZXJ5IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsIkVycm9yIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJyZWNlaXZlZElkIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsIlN0cmluZyIsImdldE1lc3NhZ2VzIiwibWFwIiwieCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibWV0aG9kIiwidXJsIiwicmVzdCIsInJlcyIsImRhdGEiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==