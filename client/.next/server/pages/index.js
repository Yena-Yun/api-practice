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
    // 삭제하는 글의 id 외에 해당 글의 'userId'도 서버에서 받아와야 함 => 이때 'params' 사용
    // { params: { userId } }: url 뒤에 ? userId = roy 라고 들어가는 부분
    // params: { userId }를 빼고 `/messages/${id}?userId={userId}`라고 보내도 동일
    const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('delete', `/messages/${id}`, {
      params: {
        userId
      }
    });
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId);
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
      lineNumber: 141,
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
        lineNumber: 147,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUNqRCxFQUFILENBSi9CO0FBS0UsaUJBQVMsRUFBRWtDLFNBQVMsS0FBS2UsQ0FBQyxDQUFDakQsRUFMN0I7QUFNRSxnQkFBUSxFQUFFLE1BQU1lLFFBQVEsQ0FBQ2tDLENBQUMsQ0FBQ2pELEVBQUg7QUFBUTtBQU5sQztBQU9FLFlBQUksRUFBRVU7QUFQUixVQUNPdUMsQ0FBQyxDQUFDakQsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLGtCQURGO0FBcUJELENBNUhEOztBQThIQSxpRUFBZThCLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MvSkE7O0FBQ0FvQiwrREFBQSxHQUF5Qix1QkFBekIsRUFFQTs7QUFDQSxNQUFNdEIsT0FBTyxHQUFHLE9BQU95QixNQUFQLEVBQWVDLEdBQWYsRUFBb0IsR0FBR0MsSUFBdkIsS0FBZ0M7QUFDOUMsUUFBTUMsR0FBRyxHQUFHLE1BQU1OLDhDQUFLLENBQUNHLE1BQUQsQ0FBTCxDQUFjQyxHQUFkLEVBQW1CLEdBQUdDLElBQXRCLENBQWxCLENBRDhDLENBQ0M7O0FBQy9DLFNBQU9DLEdBQUcsQ0FBQ0MsSUFBWDtBQUNELENBSEQ7O0FBS0EsaUVBQWU3QixPQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7QUFFQSxNQUFNOEIsSUFBSSxHQUFHLG1CQUNYO0FBQUEsMEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLGdCQURGOztBQU9BLGlFQUFlQSxJQUFmOzs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBJbnB1dOywveyXkCDsnoXroKXrkJwg64K07Jqp7J2EIE1zZ0xpc3Tsl5DshJzripQgJ29uQ3JlYXRlJ+yXkCDsk7Dqs6AgTXNnSXRlbeyXkOyEnOuKlCAnb25VcGRhdGUn7JeQIOyCrOyaqSArIOuRkCDrqZTshJzrk5zrpbwgJ211dGF0ZSfroZwg662J65qx6re466CkIOyEoOyWuO2VmOqzoCBtdXRhdGXsl5Ag65GQIOuplOyEnOuTnCDsi6Ttlonsl5Ag7ZWE7JqU7ZWcIOqwkuuTpCDsoITri6xcclxuLy8gKGlkID0gdW5kZWZpbmVkOiBpZOqwkiDrsJvslYTsmKTripTrjbAg7JeG7J2EIOyImOuPhCDsnojsnYwgPT4gTXNnSXRlbeyXkOyEnCDsiJjsoJXrsoTtirzsnbQg64iM66Ck7IScIOuEmOyWtOyYqCBpZOqwgCDsnojsnYQg6rK97JqwIG11dGF0ZeulvCDthrXtlbQgaWTqsIAg7KCE64us65CY7Ja0IE1zZ0xpc3Qg66CI67Ko7JeQ7IScIG9uVXBkYXRlIOyLpO2WiSAvIHRleHQgPSAnJzog7J6F66Cl65CcIO2FjeyKpO2KuOqwgCDsl4bsnYQg7IiY64+EIOyeiOydjClcclxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xyXG4gIC8vIG9uQ2hhbmdlLCBvbklucHV0IOuwqeuylSDsmbjsl5AgdXNlUmVm66W8IOydtOyaqe2VmOuKlCDrsKnrspXsnbQg7J6I7J2MXHJcbiAgLy8gaW5wdXTssL0odGV4dGFyZWEp7J2EIHVzZVJlZuuhnCDqsIDrpqzsvJzshJwg67OA7IiY66GcIOuwm+ydjCA9PiDrs4DsiJguY3VycmVudC52YWx1ZSA9IGlucHV0IOyeheugpeqwklxyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIOyZhOujjOuyhO2KvCDriITrpbTrqbQg64+Z7J6RXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvKiDsg4jroZzqs6Dsuagg67Cp7KeAICovXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvKiDsnbTrsqTtirgg67KE67iU66eBIOuwqeyngCAqL1xyXG5cclxuICAgIC8vIGlucHV07LC97JeQIOyeheugpeuQnCDqsJLsnYQg6rCA7KC47Ji0XHJcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgLy8gaW5wdXTssL0g7LSI6riw7ZmUXHJcbiAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgIC8vIE1zZ0xpc3Tsl5AgbXV0YXRl66W8IO2Gte2VtCBpbnB1dOqwkih0ZXh0KSDsoITri6xcclxuICAgIC8vICjsiJjsoJXrsoTtirzsnbQg64iM66Ck7IScIE1zZ0lucHV07JeQIGlk6rCAIOuEmOyWtOyYpOuptCBvblVwZGF0ZeqwgCDsi6TtlonrkJjqs6Ag64SY7Ja07JioIGlk6rCAIOyXhuycvOuptCBvbkNyZWF0ZSjsg53shLEpIOyLpO2WiSlcclxuICAgIG11dGF0ZSh0ZXh0LCBpZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nbWVzc2FnZXNfX2lucHV0JyBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICA8dGV4dGFyZWEgcmVmPXt0ZXh0UmVmfSBkZWZhdWx0VmFsdWU9e3RleHR9IHBsYWNlaG9sZGVyPSfrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULicgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPuyZhOujjDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcclxuIiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xyXG5cclxuY29uc3QgTXNnSXRlbSA9ICh7IGlkLCB1c2VySWQsIHRpbWVzdGFtcCwgdGV4dCwgb25VcGRhdGUsIGlzRWRpdGluZywgc3RhcnRFZGl0LCBvbkRlbGV0ZSwgbXlJZCB9KSA9PiAoXHJcbiAgPGxpIGNsYXNzTmFtZT0nbWVzc2FnZXNfX2l0ZW0nPlxyXG4gICAgPGgzPlxyXG4gICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgIDxzdWI+XHJcbiAgICAgICAgey8qIOyDgeychCDsu7Ttj6zrhIztirggTXNnTGlzdOyXkOyEnCB0aW1lc3RhbXAo7Iuk7KCcIOuCoOynnOqwkinsnYQg6rWs7ZaI6rOgLCDtlZjsnIQg7Lu07Y+s64SM7Yq4IE1zZ0l0ZW3sl5DshJzripQg64Kg7Kec7J2YIO2Yle2DnOunjCDsnqHslYTso7zquLAgKi99XHJcbiAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcclxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICBob3VyMTI6IHRydWUgLyog7Jik7KCEIOyYpO2bhOuhnCDqtazrtoQgKi8sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvc3ViPlxyXG4gICAgPC9oMz5cclxuXHJcbiAgICB7LyogaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m0IHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSAqL31cclxuICAgIHsvKiBNc2dMaXN07JeQ7IScIG1hcOycvOuhnCDqurzrgrTsoLgg7KCE64us65CcIGlk7JmAIO2VqOq7mCBtdXRhdGXsl5Agb25VcGRhdGUg7KCE64usICovfVxyXG4gICAge2lzRWRpdGluZyA/IChcclxuICAgICAgPD5cclxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIHRleHRcclxuICAgICl9XHJcblxyXG4gICAgey8qIHVybOyXkCDsoIHtnowgdXNlcklk7JmAIGhvdmVy7ZWcIGl0ZW3snZggdXNlcklk6rCAIOqwmeydhCDrlYzrp4wg7IiY7KCVL+yCreygnCDrsoTtirwg64KY7YOA64KoICovfVxyXG4gICAge215SWQgPT09IHVzZXJJZCAmJiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlc19fYnV0dG9ucyc+XHJcbiAgICAgICAgey8qIOyImOygleuyhO2KvCDtgbTrpq0g7IucIHN0YXJ0RWRpdCjtlajsiJgpIOyLpO2WiSA9PiBtYXDsnLzroZwg64+M642YIHgg7KSRIOyImOygleuyhO2KvOydtCDriIzrprAgeOydmCBpZOqwgCBlZGl0aW5nSWTsl5Ag7ISk7KCV65CoID0+IO2YhOyerCDssKjroYDsl5DshJwg64+M6rOgIOyeiOuNmCB47J2YIGlk6rCAIGVkaXRpbmdJZOyZgCDsnbzsuZjtlZjrqbQgaXNFZGl0aW5n7J20IHRydWXqsIAg65CY66m07IScIHRleHQg64yA7IugIE1zZ0lucHV07LC9IOugjOuNlOungSAqL31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+7IKt7KCcPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKX1cclxuICA8L2xpPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUIOuwsOyXtFxyXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J107XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQgKOuRmCDspJHsl5Ag7ZWY64KYKSDrnpzrjaTtlZjqsowg64Sj6riwXHJcbi8vIFVzZXJJZHMg67Cw7Je07J2YIOyduOuNseyKpOyXkCDrnpzrjaQg7ZWo7IiYIOuEo+q4sFxyXG4vLyAy6rCc67+Q7J28IOuVjOuKlCBNYXRoLnJvdW5k66eMIOyymOumrCAtPiAwIOuYkOuKlCAxXHJcbi8vIGNvbnN0IGdldFJhbWRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XHJcblxyXG4vLyAz6rCcIOydtOyDgeydvCDrlYzripQgTWF0aC5yYW5kb20oKSDrkqTsl5Ag67Cw7Je07J2YIOq4uOydtCDqs7HtlZjquLBcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBVc2VySWRzLmxlbmd0aCldO1xyXG5cclxuLy8gLy8gQXJyYXkoNTApOiDqs7XqsITsnbQgNTDqsJzsnbgg67Cw7Je0IOyDneyEsVxyXG4vLyAvLyAuZmlsbCgwKTogNTDqsJzsnZgg6rO16rCE7J2EIOyVhOustCDqsJLsnLzroZzrgpgg7LGE7JuAXHJcbi8vIC8vIC5tYXAodmFsLCBpKTogbWFw7Jy866GcIOq6vOuCtOuKlCB2YWzsnbQg7KSR7JqU7ZWY7KeAIOyViuycvOuptCAnXyfroZwg7LKY66asICg9PiBp66eMIOyCrOyaqe2VmOugpOuKlCDqsr3smrApXHJcbi8vIC8vICgpKHJldHVybikg7JWI7JeQIHt9ICg9PiDqsJ3ssrQg67CY7ZmYKVxyXG4vLyBjb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcclxuLy8gICAuZmlsbCgwKVxyXG4vLyAgIC5tYXAoKF8sIGkpID0+ICh7XHJcbi8vICAgICBpZDogaSArIDEsXHJcbi8vICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4vLyAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCAvKiBp66W8IG1pbGxpc2Vjb25k66GcIOuwlOq+vCDrkqQg64uk7IucIDYw7J2EIOqzse2VqCAtPiAnMeu2hCcg64uo7JyE66GcIOymneqwgO2VmOupsCDsi5zqsITsnbQg7LCN7Z6YICovLFxyXG4vLyAgICAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGAsXHJcbi8vICAgfSkpXHJcbi8vICAgLnJldmVyc2UoKTsgLyog7LWc6re8IOyInOyEnOuhnCDssI3tnojrj4TroZ0gKFNOUykgICovXHJcblxyXG4vLyDrp4zrk6Ag67Cw7Je07J2EIGNvbnNvbGXsl5AgSlNPTi5zdHJpbmdpZnnroZwg7LCN7Ja07IScIGpzb24g7YyM7J287JeQIOuzteu2mSDqsIDriqVcclxuLy8gY29uc29sZS5sb2cob3JpZ2luYWxNc2dzKTtcclxuLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxNc2dzKSk7IC8vIOuwsOyXtCDtlZjrgpjsl5Ag6rCd7LK0IOyXrOufrCDqsJwgPSBqc29uIO2Yle2DnOuhnCDrp4zrk6TslrTspIxcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnk6IHsgdXNlcklkID0gJycgfSxcclxuICB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIGlucHV06rCS7J2EIOygnOy2nO2VmOuptCDsg4jquIAg7IOd7ISxIOuYkOuKlCDquLDsobQg6riAIOyImOyglSA9PiDstIjquLDqsJLsnbgg6ri47J20IDUw7J2YIOuMk+q4gOuwsOyXtOydgCAn67OA7ZWY64qUJyDsmpTshozqsIAg65CoID0+IHN0YXRl66GcIOyEoOyWuFxyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyDsiJjsoJXtlaAg6riAIGlkICgn67OA64+ZJyDqsIDriqXtlZjrr4DroZwgc3RhdGXroZwg7ISg7Ja4KVxyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8g7IOI6riAIOyDneyEse2VmOuKlCDtlajsiJhcclxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XHJcbiAgICAvLyDshJzrsoTsl5Ag7J6R7ISx65CcIOyDiCDquIDsnYQg67O064OEXHJcbiAgICAvLyB0ZXh0KGlucHV0IOyeheugpeqwkinqsIAg65Ok7Ja07Jik66m0IOyjvOyGjOywvSBxdWVyeSg/dXNlcklkPScnKeyXkCDrtpnsnYAgdXNlcklkKHJveSwgamF5KeyXkCDrlLDrnbwg6riAIOyDneyEsSDsi5wg7J6R7ISx7J6Q6rCAIOuLrOudvOynkCAo7JiIOiB1cmzsnbQgaHR0cDovL2xvY2FsaG9zdDozMDAwLz91c2VySWQ9cm957J28IOuVjCDrjJPquIAg7JOw66m0IOyekeyEseyekOqwgCByb3nroZwg65y4IClcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XHJcblxyXG4gICAgLy8gKOyYiOyZuOyymOumrCkg7J6R7ISx65CcIOuCtOyaqeydtCDsl4bsnLzrqbQgdGhyb3cgZXJyb3JcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignU29tZXRoaW5nIGlzIHdyb25nJyk7XHJcblxyXG4gICAgLy8gLy8g7IOI6riAIOqwneyytOulvCDqtazshLFcclxuICAgIC8vIGNvbnN0IG5ld01zZyA9IHtcclxuICAgIC8vICAgLy8g7J207KCc64qUIG1hcOycvOuhnCDslrvsnYAgaWTqsIAg7JWE64uMIOq4sOyhtCBtc2dzIOuwsOyXtOydmCDquLjsnbTrpbwg7J207JqpXHJcbiAgICAvLyAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAvLyAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbiAgICAvLyAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSAvKiDtmITsnqwg64Kg7KecIOuwjyDsi5zqsIQgKi8sXHJcbiAgICAvLyAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIG1zZ3Mg67Cw7Je07JeQIHNldHRlciDtlajsiJjsmYAgc3ByZWFkIOyXsOyCsOyekOulvCDsnbTsmqntlZjsl6wg7IOI6riAIOqwneyytOulvCDstpTqsIBcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICAvLyDquIAg7IiY7KCV7ZWY64qUIO2VqOyImCAoKiogaW5wdXTqsJIgdGV4dOyZgCDtlajqu5gg7Ja064qQIOq4gOydhCDsiJjsoJXtlaAg6rKD7J247KeAIOyVjOugpOyjvOuKlCBpZCDtlYTsmpQpXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgIC8vIOyEnOuyhOulvCDthrXtlbQg7IiY7KCV65CcIOyDiCDrqZTsi5zsp4DroZwg6rWQ7LK0KHB1dClcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuXHJcbiAgICAvLyAo7JiI7Jm47LKY66asKSDshJzrsoTsl5Ag67O064K8IOuplOyLnOyngOqwgCDsl4bri6TrqbQgdGhyb3cgZXJyb3JcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignU29tZXRoaW5nIGlzIHdyb25nJyk7XHJcblxyXG4gICAgLy8gc2V0dGVy7JeQIOq4sOyhtCBtc2dzIOuwsOyXtOydhCDrsJvslYTsmYDshJwg7KeE7ZaJXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIC8vIHRhcmdldEluZGV4IOq1rO2VmOq4sFxyXG4gICAgICAvLyDsiJjsoJXtlaAgSXRlbeydmCB0YXJnZXRJbmRleOulvCBmaW5kSW5kZXgo67Cw7Je066mU7ISc65OcKeuhnCDssL7snYxcclxuICAgICAgLy8gZmluZEluZGV4OiDrsLDsl7TsnYQg64+M66m07IScIO2KueyglSDsobDqsbTsnYQg66eM7KGx7ZWY64qUIGl0ZW3snZggJ+yduOuNseyKpCfrpbwg67CY7ZmYIChjZi4gZmlsdGVyOiDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCBpdGVt65Ok66eMIOqzqOudvCAn7IOIIOuwsOyXtCfroZwg67CY7ZmYKVxyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgLy8gKOyYiOyZuOyymOumrCkg7LC+64qUIEluZGV46rCAIOyXhuycvOuptCgtMSkg6riw7KG0IOuwsOyXtCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiog7IiY7KCVIOynhO2Wie2VmOq4sFxyXG4gICAgICAvLyAxLiDquLDsobQg67Cw7Je0IOuzteyCrDog6riw7KG0IG1zZ3Mg67Cw7Je07J2EIHNwcmVhZOuhnCDtjrzsuZwg65KkIOuLpOyLnCBbXeyXkCDrhKPslrQg7IOIIOuwsOyXtCDsg53shLFcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuXHJcbiAgICAgIC8vIDIuIOuzteyCrO2VnCDrsLDsl7TroZwg7IiY7KCVOiBzcGxpY2Xrpbwg7J207Jqp7ZW0IHRhcmdldEluZGV467aA7YSwIDHqsJwoZGVsZXRlQ291bnQp66W8IOyngOyasOqzoCDqt7gg7J6Q66as7JeQIOyDiOuhnOyatCBpdGVtKDPtla0p7J2EIOuEo+ydjFxyXG4gICAgICAvLyAo7IOI66Gc7Jq0IGl0ZW0gLSB0YXJnZXRJbmRleOyXkCDsnojripQg6riw7KG0IOuCtOyaqeuTpOydgCDqt7jrjIDroZwg64Sj6rOgIHRleHTrp4wg7IOI6rG466GcIOq1kOyytClcclxuICAgICAgLy8gbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgLy8gICAuLi5tc2dzW3RhcmdldEluZGV4XSxcclxuICAgICAgLy8gICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIC8vIOyEnOuyhOyXkOyEnCDsmKggbmV3TXNnIOuNsOydtO2EsOulvCDrhKPslrTspIxcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XHJcblxyXG4gICAgICAvLyAzLiDsiJjsoJXrkJwg7IOIIOuwsOyXtCDrsJjtmZggKC0+IHNldHRlcuyXkCDrk6TslrTqsIAgbXNncyDthrXsp7jroZwg6rWQ7LK0KVxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOyImOygleydtCDrgZ3rgpjrqbQg7Iuk7ZaJIChlZGl0aW5nSWTrpbwg64uk7IucIG51bGzroZwg67CU6r+IKVxyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgLy8g7IKt7KCc7ZWY64qUIOq4gOydmCBpZCDsmbjsl5Ag7ZW064u5IOq4gOydmCAndXNlcklkJ+uPhCDshJzrsoTsl5DshJwg67Cb7JWE7JmA7JW8IO2VqCA9PiDsnbTrlYwgJ3BhcmFtcycg7IKs7JqpXHJcbiAgICAvLyB7IHBhcmFtczogeyB1c2VySWQgfSB9OiB1cmwg65Kk7JeQID8gdXNlcklkID0gcm95IOudvOqzoCDrk6TslrTqsIDripQg67aA67aEXHJcbiAgICAvLyBwYXJhbXM6IHsgdXNlcklkIH3rpbwg67m86rOgIGAvbWVzc2FnZXMvJHtpZH0/dXNlcklkPXt1c2VySWR9YOudvOqzoCDrs7TrgrTrj4Qg64+Z7J28XHJcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH0pO1xyXG5cclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuXHJcbiAgICAgIC8vICoqIOyCreygnCDsp4TtlokgKOyImOygleyXkOyEnCBpdGVtIOy2lOqwgO2VmOuKlCDrtoDrtoTrp4wg7JeG7J2MKVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7IiY7KCV7J20IOyZhOujjOuQqOydhCDslYzroKTspIw6IGVkaXRpbmdJZOulvCBudWxs66GcIOuwlOq/iCA9PiBpc0VkaXRpbmfsnbQgZmFsc2XroZwg7KCE7ZmYID0+IOq4sOyhtOyXkCDsnojrjZggdGV4dOulvCDrjIDssrTtlZjrjZggTXNnSW5wdXQg67ew6rCAIOyCrOudvOyngOqzoCDsiJjsoJXrkJwgdGV4dOuhnCDri6Tsi5wg64yA7LK0XHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnKTtcclxuICAgIHNldE1zZ3MobXNncyk7XHJcbiAgfTtcclxuXHJcbiAgLy8g7LWc7LSIIO2OmOydtOyngCDroZzrk5wg7Iuc7JeQ66eMIOyLpO2WiVxyXG4gIC8vIHVzZUVmZmVjdCDrgrTsl5DshJzripQgYXN5bmMvYXdhaXTrpbwg7KeB7KCRIO2YuOy2nO2VmOyngCDslYrslYTslbwg7ZWoID0+IGF3YWl066W8IO2YuOy2nO2VmOuKlCDrtoDrtoTsnYQg7ZWo7IiY66GcIOuUsOuhnCDrubzshJwg6rGw6riw7JeQIGFzeW5j64+EIOu2meyXrOyjvOq4sFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRNZXNzYWdlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdtZXNzYWdlcyc+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAvLyB7Li4ueH3roZwg6rCd7LK07J2YIOqwgSBrZXnrpbwg7KCE67aAIOuEo+qzoCBNc2dJdGVt7JeQ7IScIOyTuCDrlYzripQg7J2867aA66eMIOqzqOudvCDsgqzsmqkg6rCA64qlXHJcbiAgICAgICAgICAvLyDsiJjsoJXsl5Ag7ZWE7JqU7ZWcIG9uVXBkYXRlLCBzdGFydEVkaXQsIGlzRWRpdGluZ+ydhCDrr7jrpqwg64Sj7Ja07KSMXHJcbiAgICAgICAgICAvLyAo7IiY7KCVIOuyhO2KvOydtCDriIzrpqzrqbQg7IiY7KCV7ZWgIOq4gOydmCBpZOulvCBlZGl0aW5nSWTsl5Ag7ISk7KCV7ZWY64qUIHN0YXJ0RWRpdOqzvCwg66CM642U66eBIOykkeyduCBpdGVtIOykkSBlZGl0aW5nSWTsmYAgaWTqsIAg7J287LmY7ZWY64qUIGl0ZW3snbQg7J6I64qU7KeA66W8IOyVjOugpOyjvOuKlCBpc0VkaXRpbmfsnYAg65Sw66GcIHVzZVN0YXRl66GcIOyEoOyWuO2VmOyngCDslYrqs6AganN47JeQ7IScIOuwlOuhnCDsspjrpqwpXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSAvKiBvbkRlbGV0ZeuKlCDsl6zquLDshJwg67CU66GcIOyLpO2WiSAqL1xyXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vLyBiYXNlVVJM7J2EIOyngOyglSAodXJsIOyVnuyXkCDsnpDrj5nsnLzroZwg67aZ7J2MKVxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XHJcblxyXG4vLyBheGlvc+ulvCDthrXtlbQg7ISc67KE7JeQ7IScIOydkeuLteydhCDrsJvslYTsmKTripQg6rG4IGZldGNoZXIg7ZWo7IiY66GcIOyymOumrFxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKG1ldGhvZCwgdXJsLCAuLi5yZXN0KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIC4uLnJlc3QpOyAvLyDrjbDsnbTthLDqsIAg7ZWY64KY66eMIOuTpOyWtOyZgOuPhCDsspjrpqzrkJjrj4TroZ0gc3ByZWFkXHJcbiAgcmV0dXJuIHJlcy5kYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlcjtcclxuXHJcbi8qXHJcbmdldDogYXhpb3MuZ2V0KHVybFssIGNvbmZpZ10pXHJcbmRlbGV0ZTogYXhpb3MuZGVsZXRlKHVybFssIGNvbmZpZ10pXHJcbnBvc3Q6IGF4aW9zLnBvc3QodXJsLCBkYXRhWywgY29uZmlnXSkgLy9wb3N07JmAIHB1dOydgCBnZXQsIGRlbGV0ZeyZgCDri6zrpqwgZGF0YeqwgCDtlZjrgpgg642UIOuTpOyWtOyYtFxyXG5wdXQ6IGF4aW9zLnB1dCh1cmwsIGRhdGFbLCBjb25maWddKVxyXG4qL1xyXG4iLCJpbXBvcnQgTXNnTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01zZ0xpc3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgPE1zZ0xpc3QgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsIm15SWQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwiVXNlcklkcyIsIk1zZ0xpc3QiLCJxdWVyeSIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJuZXdNc2ciLCJFcnJvciIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsImdldE1lc3NhZ2VzIiwibWFwIiwieCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibWV0aG9kIiwidXJsIiwicmVzdCIsInJlcyIsImRhdGEiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==