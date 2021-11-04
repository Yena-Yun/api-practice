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
 // Input창 입력값을 MsgList에서는 'onCreate'에 쓰고 MsgItem에서는 'onUpdate'에 사용
// 두 메서드를 'mutate'로 뭉뚱그려 선언하고 'mutate'에 두 함수 실행에 필요한 값들 전달 (어떤 값이 전달되느냐에 따라 다른 함수 실행)
// (id = undefined: id값 받아오는데 없을 수도 있음 => MsgItem에서 수정버튼이 눌려 넘어온 id가 있을 경우 mutate를 통해 id가 전달 -> MsgList에서 onUpdate 실행)
// text = '': 입력된 텍스트가 없을 수도 있음 - 사용자가 아무 것도 작성하지 않고 완료버튼 누른 경우)



const MsgInput = ({
  mutate,
  text = '',
  id = undefined
}) => {
  // onChange, onInput 방법 외에 useRef를 이용하는 방법이 있음
  // input창(textarea)을 useRef로 가리켜서 변수로 받고, 변수.current.value로 input의 입력값을 가져옴
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // 완료버튼 누르면 동작

  const onSubmit = e => {
    e.preventDefault();
    /* 새로고침 방지 */

    e.stopPropagation();
    /* 이벤트 버블링 방지 */
    // Ref로 input창에 입력된 값을 가져옴

    const text = textRef.current.value; // input창 초기화

    textRef.current.value = ''; // MsgList에 mutate를 통해 input값(text) 전달
    // (** 수정일 경우 id가 넘어오면 onUpdate, id가 없으면 onCreate 실행)

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
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
      lineNumber: 37,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\82108\\Desktop\\api-practice\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // 유저아이디 배열
// const UserIds = ['roy', 'jay'];
// 유저아이디 (둘 중에 하나) 랜덤하게 넣는 함수
// UserIds 배열 인덱스 자리([])에 랜덤함수 넣기
// 2개일 때 (뒤에 배열의 길이 곱하지 않음)
// const getRamdomUserId = () => UserIds[Math.round(Math.random())];
// 3개 이상일 때
// const getRamdomUserId = () => UserIds[Math.round(Math.random() * UserIds.length)];
// // Array(50): 공간이 50개인 배열 생성
// // .fill(0): 50개의 공간을 아무 값으로나 채움
// // .map(val, i): map으로 꺼내는 val이 중요하지 않으면 '_'로 처리 (=> i만 사용하려는 경우)
// // ()(return문) 안에 {} (=> 객체 반환)
// const originalMsgs = Array(50)
//   .fill(0)
//   .map((_, i) => ({
//     id: i + 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 + i * 1000 * 60 /* 기본 13자리 + i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> 1'분' 단위로 증가하며 시간이 찍힘 */,
//     text: `${i + 1} mock text`,
//   }))
//   .reverse(); /* 최근 순서로 찍히도록 */
// 만든 originalMsgs 배열을 JSON.stringify로 감싸서 콘솔에 찍으면 json 형태가 됨 (=> json 파일에 바로 복붙해서 사용 가능)
// console.log(originalMsgs);
// console.log(JSON.stringify(originalMsgs)); // JSON.stringify: 배열 안에 객체 여러 개인 json 형태로 만들어줌




const MsgList = () => {
  // useRouter를 사용하여 쿼리에 담긴 문자열을 받음
  // 주소창 query('?') 뒤에 붙은 userId(roy)를 useRouter로 받음
  // 원래는 const route = useRouter() + route.query.userId로 꺼내쓰지만 여기서는 destructuring 문법 사용
  const {
    query: {
      userId = ''
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값 originalMsgs 배열은 '변하는' 요소가 됨 => state로 선언

  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 수정할 글 id도 '변하는' 요소이므로 state로 선언

  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // ** 무한스크롤

  const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // useInfiniteScroll: intersectingObserver를 쓰는 hook
  // fetchMoreEl가 화면상에 노출됐을 때(= null이 아닐 때)는 intersecting이 true가 되고 그렇지 않을 땐 false

  const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_5__.default)(fetchMoreEl); // 마지막 인덱스가 1일 때 빈 배열을 계속 호출하는 것 방지

  const {
    0: hasNext,
    1: setHasNext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // 새글 생성하기 함수

  const onCreate = async text => {
    // 서버에 text를 보내서 새 메시지를 생성하고 그 반환값을 res.data로 받아옴
    // text: input 입력값
    // userId: useRouter로 가져온 userId + 해당 userId에 따라 글 생성 시 작성자가 달라짐
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('post', '/messages', {
      text,
      userId
    }); // 서버에서 받아온 값이 없으면 에러처리

    if (!newMsg) throw Error('Something is wrong'); // // 새글 객체를 구성
    // const newMsg = {
    //   // 이제는 map으로 얻은 i가 아닌 기존 msgs 배열(state)의 길이를 이용
    //   id: msgs.length + 1,
    //   userId: getRamdomUserId(),
    //   timestamp: Date.now() /* 현재 날짜 및 시간 */,
    //   text: `${msgs.length + 1} ${text}`,
    // };
    // setMsgs로 msgs 배열에 새 메시지 추가

    setMsgs(msgs => [newMsg, ...msgs]);
  }; // 글 수정하는 함수 (** id 필요: 어느 글을 수정할 것인지)


  const onUpdate = async (text, id) => {
    // 수정된 메시지: 서버에 text와 userId를 보내서 수정된 메시지를 res.data로 받아옴
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('put', `/messages/${id}`, {
      text,
      userId
    }); // 서버에서 받아온 값이 없으면 에러처리

    if (!newMsg) throw Error('Something is wrong'); // 수정된 메시지를 msgs 배열의 targetIndex번째에 추가

    setMsgs(msgs => {
      // 수정할 글의 인덱스(targetIndex)
      // findIndex(배열메서드): 배열을 돌면서 특정 조건을 만족하는 요소의 '인덱스' 반환 (cf. filter: 특정 조건을 만족하는 요소들을 모아 '새 배열'로 반환)
      const targetIndex = msgs.findIndex(msg => msg.id === id); // targetIndex가 없으면(-1) 기존 msgs 배열 그대로 반환

      if (targetIndex < 0) return msgs; // ** targetIndex로 배열 수정 진행
      // 기존 배열 복사: 기존 msgs 배열을 spread로 펼친 뒤 다시 []에 넣어 새로운 배열 사본 생성

      const newMsgs = [...msgs]; // 사본 배열에 수정 진행: splice로 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 요소(3항의 객체)을 넣음
      // (새로운 item - targetIndex번째 기존 내용들 그대로, text만 새 걸로 교체)
      // newMsgs.splice(targetIndex, 1, {
      //   ...msgs[targetIndex],
      //   text: text,
      // });
      // 배열에 splice로 targetIndex부터 1개를 지우고 그 자리에 수정된 메시지(newMsg) 추가

      newMsgs.splice(targetIndex, 1, newMsg); // 수정된 새 배열 반환 (=> setMsgs에 들어가지면서 msgs 통째로 교체)

      return newMsgs;
    }); // 수정이 끝나면 실행 (editingId를 다시 null로 바꿈)

    doneEdit();
  }; // 글 삭제하는 함수


  const onDelete = async id => {
    // 삭제하는 글의 id 외에 해당 글의 'userId'도 서버에 보냄 => 이때 'params'로 보내고, 서버에서는 query로 받음
    // { params: { userId } }: url 뒤에 ?userId=roy에서 roy 부분 (url에 `/messages/${id}?userId={userId}`라고 보내도 동일)
    const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('delete', `/messages/${id}`, {
      params: {
        userId
      }
    }); // console.log(typeof receivedId, typeof id); // number, string (=> messages.json에서 id가 문자열로 되어있음)

    setMsgs(msgs => {
      // ** 삭제한 내용이 뷰에 반영이 안되는 경우 --> type이 안 맞는 것일 수 있음 (콘솔로 두 아이디를 출력해보고 한쪽을 다른 쪽에 맞춰주기)
      const targetIndex = msgs.findIndex(msg => msg.id === String(receivedId));
      if (targetIndex < 0) return msgs; // ** 삭제 진행 (item 추가 없는 거 빼고 수정 과정과 동일)

      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  }; // 수정이 완료됨을 알리는 함수: editingId를 null로 바꿈 (=> isEditing이 false로 변환되어 기존의 text를 대체하던 MsgInput 뷰가 사라지고 수정된 text로 다시 교체)


  const doneEdit = () => setEditingId(null); // ** 서버에서 메시지를 불러오는 함수 (originalMsgs 필요없어짐)


  const getMessages = async () => {
    var _msgs;

    // msgs[msgs.length - 1]이 처음에는 없을 수도 있어서 뒤에 '?' 붙이고 || '' (cursor가 빈 값으로 갈 수 있게끔) 예외처리
    const newMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)('get', '/messages', {
      params: {
        cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
      }
    }); // 마지막 인덱스가 1일 때 뒤에 빈 배열 계속 받아오는 것 방지
    // get으로 받아온 메시지가 없으면 hasNext를 false로 전환

    if (newMsgs.length === 0) {
      setHasNext(false); // 더 이상 추가해줄 데이터가 없으므로 getMessages 종료

      return;
    }

    setMsgs(msgs => [...msgs, ...newMsgs]);
  }; // // 최초 페이지 접속 시 무조건 1번 실행
  // // ** useEffect 내에서는 async/await를 직접 호출하지 않아야 함
  // // => await를 호출하는 부분을 함수(getMessages()로 따로 빼고 거기에 async도 붙여주기
  // useEffect(() => {
  //   // 전체 메시지 불러오기
  //   getMessages();
  // }, []);
  // useEffect 여러 개 사용 가능


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // intersecting과 hasNext가 둘 다 true일 때만 getMessages() 호출
    if (intersecting && hasNext) getMessages(); // intersecting이 바뀔 때마다 실행
  }, [intersecting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x =>
      /*#__PURE__*/
      // {...x}로 객체의 각 key를 전부 넣고 MsgItem에서 쓸 때는 일부만 골라서 사용 가능
      // '수정'에 필요한 onUpdate, startEdit, isEditing 요소들을 props로 미리 넣어준다.
      // 수정 실행 시, 수정할 글의 id를 editingId에 설정하는 startEdit과, 렌더링 중인 요소 중 editingId와 id가 일치하는 요소가 있는지를 알려주는 isEditing은 여기서 바로 처리 (따로 useState로 선언하지 않음)
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        onDelete: () => onDelete(x.id)
        /* onDelete는 여기서 바로 실행 */
        ,
        myId: userId
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
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
 // axios의 기본 baseURL을 지정 (=> url 앞에 자동으로 붙음)

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = 'http://localhost:8000';
/* 서버 url */
// 전달된 method, url, ...rest를 axios로 처리하여 서버에서 응답(res) 받아오는 함수

const fetcher = async (method, url, ...rest) => {
  const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest); // 받아온 응답에서 data를 꺼내 반환

  return res.data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);
/*
get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config]) //post와 put은 get, delete와 달리 data가 추가됨
put: axios.put(url, data[, config])
*/

/***/ }),

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // targetEl = MsgList의 fetchMoreEl(무한스크롤이 실행되는 기준인 div)

const useInfiniteScroll = targetEl => {
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: intersecting,
    1: setIntersecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 옵저버 생성
  // MsgList에서 메시지 내용이 바뀔 때마다 observer가 매번 호출되는 것 방지하기 위해서 조건문을 붙이고 + useCallback으로 감싸줌

  const getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // observerRef.current값이 없으면
    if (!observerRef.current) {
      // observerRef.current에 IntersectionObserver 값을 넣어줌 (초기화)
      observerRef.current = new IntersectionObserver(entries => // setIntersecting 안의 내용: entries 중에서 일부가 하나라도 있으면...
      setIntersecting( // entry가 하나뿐이어도 형태는 '배열' - entries의 첫번째 인자 'entries[0]' 또는
      // some 사용 - intersecting한 게 하나라도 있으면 true 반환
      // Array.some: 배열 내의 단 한 개의 요소라도 조건을 만족하면 true 반환
      entries.some(entry => entry.isIntersecting)));
    } // observerRef.current값이 있을 경우에는 아무 것도 하지 않고 그대로 반환


    return observerRef.current; //observerRef.current가 바뀔 때만 실행
  }, [observerRef.current]); // observe 명령을 내려줘야 - 감시할 대상 지정

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // targetEl.current가 존재할 경우 해당 요소를 감시(observe)
    // ** useCallback이 있으면 변수를 '함수'로 받아야 함
    // getObserver()를 최초로 실행할 때는 observerRef.current가 null이기 때문에 getObserver 안의 if문이 실행되고 이후로는 계속 observerRef.current(만들어진 옵저버)를 그대로 반환
    if (targetEl.current) getObserver().observe(targetEl.current); // targetEl.current가 화면상에 더 이상 존재하지 않을 경우

    return () => {
      // 옵저버 연결을 끊음
      getObserver().disconnect();
    }; // targetEl.current의 내용이 바뀔 때만 useEffect 안의 동작이 이루어짐
  }, [targetEl.current]);
  return intersecting;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDNUQsT0FBbkIsQ0FoQm9DLENBa0JwQztBQUNELEdBbkI4QixFQW1CNUIsQ0FBQzRELFdBQVcsQ0FBQzVELE9BQWIsQ0FuQjRCLENBQS9CLENBTnNDLENBMkJ0Qzs7QUFDQW1CLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBLFFBQUl3QyxRQUFRLENBQUMzRCxPQUFiLEVBQXNCOEQsV0FBVyxHQUFHTSxPQUFkLENBQXNCVCxRQUFRLENBQUMzRCxPQUEvQixFQUpSLENBTWQ7O0FBQ0EsV0FBTyxNQUFNO0FBQ1g7QUFDQThELE1BQUFBLFdBQVcsR0FBR08sVUFBZDtBQUNELEtBSEQsQ0FQYyxDQVlkO0FBQ0QsR0FiUSxFQWFOLENBQUNWLFFBQVEsQ0FBQzNELE9BQVYsQ0FiTSxDQUFUO0FBZUEsU0FBTzhCLFlBQVA7QUFDRCxDQTVDRDs7QUE4Q0EsaUVBQWVSLGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7Ozs7QUFFQSxNQUFNZ0QsSUFBSSxHQUFHLG1CQUNYO0FBQUEsMEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLGdCQURGOztBQU9BLGlFQUFlQSxJQUFmOzs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBJbnB1dOywvSDsnoXroKXqsJLsnYQgTXNnTGlzdOyXkOyEnOuKlCAnb25DcmVhdGUn7JeQIOyTsOqzoCBNc2dJdGVt7JeQ7ISc64qUICdvblVwZGF0ZSfsl5Ag7IKs7JqpXHJcbi8vIOuRkCDrqZTshJzrk5zrpbwgJ211dGF0ZSfroZwg662J65qx6re466CkIOyEoOyWuO2VmOqzoCAnbXV0YXRlJ+yXkCDrkZAg7ZWo7IiYIOyLpO2WieyXkCDtlYTsmpTtlZwg6rCS65OkIOyghOuLrCAo7Ja065akIOqwkuydtCDsoITri6zrkJjripDrg5Dsl5Ag65Sw6528IOuLpOuluCDtlajsiJgg7Iuk7ZaJKVxyXG4vLyAoaWQgPSB1bmRlZmluZWQ6IGlk6rCSIOuwm+yVhOyYpOuKlOuNsCDsl4bsnYQg7IiY64+EIOyeiOydjCA9PiBNc2dJdGVt7JeQ7IScIOyImOygleuyhO2KvOydtCDriIzroKQg64SY7Ja07JioIGlk6rCAIOyeiOydhCDqsr3smrAgbXV0YXRl66W8IO2Gte2VtCBpZOqwgCDsoITri6wgLT4gTXNnTGlzdOyXkOyEnCBvblVwZGF0ZSDsi6TtlokpXHJcbi8vIHRleHQgPSAnJzog7J6F66Cl65CcIO2FjeyKpO2KuOqwgCDsl4bsnYQg7IiY64+EIOyeiOydjCAtIOyCrOyaqeyekOqwgCDslYTrrLQg6rKD64+EIOyekeyEse2VmOyngCDslYrqs6Ag7JmE66OM67KE7Yq8IOuIhOuluCDqsr3smrApXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCB0ZXh0ID0gJycsIGlkID0gdW5kZWZpbmVkIH0pID0+IHtcclxuICAvLyBvbkNoYW5nZSwgb25JbnB1dCDrsKnrspUg7Jm47JeQIHVzZVJlZuulvCDsnbTsmqntlZjripQg67Cp67KV7J20IOyeiOydjFxyXG4gIC8vIGlucHV07LC9KHRleHRhcmVhKeydhCB1c2VSZWbroZwg6rCA66as7Lyc7IScIOuzgOyImOuhnCDrsJvqs6AsIOuzgOyImC5jdXJyZW50LnZhbHVl66GcIGlucHV07J2YIOyeheugpeqwkuydhCDqsIDsoLjsmLRcclxuICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAvLyDsmYTro4zrsoTtirwg64iE66W066m0IOuPmeyekVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLyog7IOI66Gc6rOg7LmoIOuwqeyngCAqL1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLyog7J2067Kk7Yq4IOuyhOu4lOungSDrsKnsp4AgKi9cclxuXHJcbiAgICAvLyBSZWbroZwgaW5wdXTssL3sl5Ag7J6F66Cl65CcIOqwkuydhCDqsIDsoLjsmLRcclxuICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAvLyBpbnB1dOywvSDstIjquLDtmZRcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgLy8gTXNnTGlzdOyXkCBtdXRhdGXrpbwg7Ya17ZW0IGlucHV06rCSKHRleHQpIOyghOuLrFxyXG4gICAgLy8gKCoqIOyImOygleydvCDqsr3smrAgaWTqsIAg64SY7Ja07Jik66m0IG9uVXBkYXRlLCBpZOqwgCDsl4bsnLzrqbQgb25DcmVhdGUg7Iuk7ZaJKVxyXG4gICAgbXV0YXRlKHRleHQsIGlkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdtZXNzYWdlc19faW5wdXQnIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IGRlZmF1bHRWYWx1ZT17dGV4dH0gcGxhY2Vob2xkZXI9J+uCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuJyAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+7JmE66OMPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xyXG4iLCJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHsgaWQsIHVzZXJJZCwgdGltZXN0YW1wLCB0ZXh0LCBvblVwZGF0ZSwgaXNFZGl0aW5nLCBzdGFydEVkaXQsIG9uRGVsZXRlLCBteUlkIH0pID0+IChcclxuICA8bGkgY2xhc3NOYW1lPSdtZXNzYWdlc19faXRlbSc+XHJcbiAgICA8aDM+XHJcbiAgICAgIHt1c2VySWR9eycgJ31cclxuICAgICAgPHN1Yj5cclxuICAgICAgICB7Lyog7IOB7JyEIOy7tO2PrOuEjO2KuCBNc2dMaXN07JeQ7IScIHRpbWVzdGFtcCjsi6TsoJwg64Kg7Kec6rCSKeydhCDqtaztlojqs6AsIO2VmOychCBNc2dJdGVt7JeQ7ISc64qUIOuCoOynnOydmCDtmJXtg5zrp4wg7J6h7JWE7KO86riwICovfVxyXG4gICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcclxuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgaG91cjEyOiB0cnVlIC8qIOyYpOyghCDsmKTtm4TroZwg6rWs67aEICovLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3N1Yj5cclxuICAgIDwvaDM+XHJcblxyXG4gICAgey8qIGlzRWRpdGluZ+ydtCB0cnVl6rCAIOuQmOuptCB0ZXh0IOuMgOyLoCBNc2dJbnB1dOywvSDroIzrjZTrp4EgKi99XHJcbiAgICB7LyogTXNnTGlzdOyXkOyEnCBtYXDsnLzroZwg6rq864K07KC4IOyghOuLrOuQnCBpZOyZgCDtlajqu5ggbXV0YXRl7JeQIG9uVXBkYXRlIOyghOuLrCAqL31cclxuICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApIDogKFxyXG4gICAgICB0ZXh0XHJcbiAgICApfVxyXG5cclxuICAgIHsvKiB1cmzsl5Ag7KCB7Z6MIHVzZXJJZOyZgCDrp4jsmrDsiqTrpbwg7Jis66awIOq4gOydmCB1c2VySWTqsIAg6rCZ7J2EIOuVjCDsiJjsoJUv7IKt7KCcIOuyhO2KvCDrgpjtg4DrgqggKi99XHJcbiAgICB7bXlJZCA9PT0gdXNlcklkICYmIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2VzX19idXR0b25zJz5cclxuICAgICAgICB7Lyog7IiY7KCV67KE7Yq8IO2BtOumrSDsi5wgc3RhcnRFZGl0KO2VqOyImCkg7Iuk7ZaJIFxyXG4gICAgICAgICAgPT4gbWFw7Jy866GcIOuPjOuNmCB4IOykkSDsiJjsoJXrsoTtirzsnbQg64iM66awIHjsnZggaWTqsIAgZWRpdGluZ0lk7JeQIOyEpOygleuQqCBcclxuICAgICAgICAgID0+IO2YhOyerCDssKjroYDsl5DshJwg64+M6rOgIOyeiOuNmCB47J2YIGlk6rCAIGVkaXRpbmdJZOyZgCDsnbzsuZjtlZjrqbQgaXNFZGl0aW5n7J20IHRydWXroZwg67OA7ZmYXHJcbiAgICAgICAgICA9PiB0ZXh0IOuMgOyLoCBNc2dJbnB1dOywvSDroIzrjZTrp4EgKi99XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnO1xyXG5cclxuLy8g7Jyg7KCA7JWE7J2065SUIOuwsOyXtFxyXG4vLyBjb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J107XHJcblxyXG4vLyDsnKDsoIDslYTsnbTrlJQgKOuRmCDspJHsl5Ag7ZWY64KYKSDrnpzrjaTtlZjqsowg64Sj64qUIO2VqOyImFxyXG4vLyBVc2VySWRzIOuwsOyXtCDsnbjrjbHsiqQg7J6Q66asKFtdKeyXkCDrnpzrjaTtlajsiJgg64Sj6riwXHJcbi8vIDLqsJzsnbwg65WMICjrkqTsl5Ag67Cw7Je07J2YIOq4uOydtCDqs7HtlZjsp4Ag7JWK7J2MKVxyXG4vLyBjb25zdCBnZXRSYW1kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG4vLyAz6rCcIOydtOyDgeydvCDrlYxcclxuLy8gY29uc3QgZ2V0UmFtZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBVc2VySWRzLmxlbmd0aCldO1xyXG5cclxuLy8gLy8gQXJyYXkoNTApOiDqs7XqsITsnbQgNTDqsJzsnbgg67Cw7Je0IOyDneyEsVxyXG4vLyAvLyAuZmlsbCgwKTogNTDqsJzsnZgg6rO16rCE7J2EIOyVhOustCDqsJLsnLzroZzrgpgg7LGE7JuAXHJcbi8vIC8vIC5tYXAodmFsLCBpKTogbWFw7Jy866GcIOq6vOuCtOuKlCB2YWzsnbQg7KSR7JqU7ZWY7KeAIOyViuycvOuptCAnXyfroZwg7LKY66asICg9PiBp66eMIOyCrOyaqe2VmOugpOuKlCDqsr3smrApXHJcbi8vIC8vICgpKHJldHVybuusuCkg7JWI7JeQIHt9ICg9PiDqsJ3ssrQg67CY7ZmYKVxyXG4vLyBjb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MClcclxuLy8gICAuZmlsbCgwKVxyXG4vLyAgIC5tYXAoKF8sIGkpID0+ICh7XHJcbi8vICAgICBpZDogaSArIDEsXHJcbi8vICAgICB1c2VySWQ6IGdldFJhbWRvbVVzZXJJZCgpLFxyXG4vLyAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCAvKiDquLDrs7ggMTPsnpDrpqwgKyBp66W8IG1pbGxpc2Vjb25k66GcIOuwlOq+vCDrkqQg64uk7IucIDYw7J2EIOqzse2VqCAtPiAxJ+u2hCcg64uo7JyE66GcIOymneqwgO2VmOupsCDsi5zqsITsnbQg7LCN7Z6YICovLFxyXG4vLyAgICAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGAsXHJcbi8vICAgfSkpXHJcbi8vICAgLnJldmVyc2UoKTsgLyog7LWc6re8IOyInOyEnOuhnCDssI3tnojrj4TroZ0gKi9cclxuXHJcbi8vIOunjOuToCBvcmlnaW5hbE1zZ3Mg67Cw7Je07J2EIEpTT04uc3RyaW5naWZ566GcIOqwkOyLuOyEnCDsvZjshpTsl5Ag7LCN7Jy866m0IGpzb24g7ZiV7YOc6rCAIOuQqCAoPT4ganNvbiDtjIzsnbzsl5Ag67CU66GcIOuzteu2me2VtOyEnCDsgqzsmqkg6rCA64qlKVxyXG4vLyBjb25zb2xlLmxvZyhvcmlnaW5hbE1zZ3MpO1xyXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTsgLy8gSlNPTi5zdHJpbmdpZnk6IOuwsOyXtCDslYjsl5Ag6rCd7LK0IOyXrOufrCDqsJzsnbgganNvbiDtmJXtg5zroZwg66eM65Ok7Ja07KSMXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIC8vIHVzZVJvdXRlcuulvCDsgqzsmqntlZjsl6wg7L+866as7JeQIOuLtOq4tCDrrLjsnpDsl7TsnYQg67Cb7J2MXHJcbiAgLy8g7KO87IaM7LC9IHF1ZXJ5KCc/Jykg65Kk7JeQIOu2meydgCB1c2VySWQocm95KeulvCB1c2VSb3V0ZXLroZwg67Cb7J2MXHJcbiAgLy8g7JuQ656Y64qUIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCkgKyByb3V0ZS5xdWVyeS51c2VySWTroZwg6rq864K07JOw7KeA66eMIOyXrOq4sOyEnOuKlCBkZXN0cnVjdHVyaW5nIOusuOuylSDsgqzsmqlcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyB1c2VySWQgPSAnJyB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gaW5wdXTqsJLsnYQg7KCc7Lac7ZWY66m0IOyDiOq4gCDsg53shLEg65iQ64qUIOq4sOyhtCDquIAg7IiY7KCVID0+IOy0iOq4sOqwkiBvcmlnaW5hbE1zZ3Mg67Cw7Je07J2AICfrs4DtlZjripQnIOyalOyGjOqwgCDrkKggPT4gc3RhdGXroZwg7ISg7Ja4XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIOyImOygle2VoCDquIAgaWTrj4QgJ+uzgO2VmOuKlCcg7JqU7IaM7J2066+A66GcIHN0YXRl66GcIOyEoOyWuFxyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gKiog66y07ZWc7Iqk7YGs66GkXHJcbiAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgLy8gdXNlSW5maW5pdGVTY3JvbGw6IGludGVyc2VjdGluZ09ic2VydmVy66W8IOyTsOuKlCBob29rXHJcbiAgLy8gZmV0Y2hNb3JlRWzqsIAg7ZmU66m07IOB7JeQIOuFuOy2nOuQkOydhCDrlYwoPSBudWxs7J20IOyVhOuLkCDrlYwp64qUIGludGVyc2VjdGluZ+ydtCB0cnVl6rCAIOuQmOqzoCDqt7jroIfsp4Ag7JWK7J2EIOuVkCBmYWxzZVxyXG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKTtcclxuICAvLyDrp4jsp4Drp4kg7J24642x7Iqk6rCAIDHsnbwg65WMIOu5iCDrsLDsl7TsnYQg6rOE7IaNIO2YuOy2nO2VmOuKlCDqsoMg67Cp7KeAXHJcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vIOyDiOq4gCDsg53shLHtlZjquLAg7ZWo7IiYXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xyXG4gICAgLy8g7ISc67KE7JeQIHRleHTrpbwg67O064K07IScIOyDiCDrqZTsi5zsp4Drpbwg7IOd7ISx7ZWY6rOgIOq3uCDrsJjtmZjqsJLsnYQgcmVzLmRhdGHroZwg67Cb7JWE7Ji0XHJcbiAgICAvLyB0ZXh0OiBpbnB1dCDsnoXroKXqsJJcclxuICAgIC8vIHVzZXJJZDogdXNlUm91dGVy66GcIOqwgOyguOyYqCB1c2VySWQgKyDtlbTri7kgdXNlcklk7JeQIOuUsOudvCDquIAg7IOd7ISxIOyLnCDsnpHshLHsnpDqsIAg64us65287KeQXHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIC8vIOyEnOuyhOyXkOyEnCDrsJvslYTsmKgg6rCS7J20IOyXhuycvOuptCDsl5Drn6zsspjrpqxcclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignU29tZXRoaW5nIGlzIHdyb25nJyk7XHJcblxyXG4gICAgLy8gLy8g7IOI6riAIOqwneyytOulvCDqtazshLFcclxuICAgIC8vIGNvbnN0IG5ld01zZyA9IHtcclxuICAgIC8vICAgLy8g7J207KCc64qUIG1hcOycvOuhnCDslrvsnYAgaeqwgCDslYTri4wg6riw7KG0IG1zZ3Mg67Cw7Je0KHN0YXRlKeydmCDquLjsnbTrpbwg7J207JqpXHJcbiAgICAvLyAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAvLyAgIHVzZXJJZDogZ2V0UmFtZG9tVXNlcklkKCksXHJcbiAgICAvLyAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSAvKiDtmITsnqwg64Kg7KecIOuwjyDsi5zqsIQgKi8sXHJcbiAgICAvLyAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIHNldE1zZ3ProZwgbXNncyDrsLDsl7Tsl5Ag7IOIIOuplOyLnOyngCDstpTqsIBcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICAvLyDquIAg7IiY7KCV7ZWY64qUIO2VqOyImCAoKiogaWQg7ZWE7JqUOiDslrTripAg6riA7J2EIOyImOygle2VoCDqsoPsnbjsp4ApXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgIC8vIOyImOygleuQnCDrqZTsi5zsp4A6IOyEnOuyhOyXkCB0ZXh07JmAIHVzZXJJZOulvCDrs7TrgrTshJwg7IiY7KCV65CcIOuplOyLnOyngOulvCByZXMuZGF0YeuhnCDrsJvslYTsmLRcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuXHJcbiAgICAvLyDshJzrsoTsl5DshJwg67Cb7JWE7JioIOqwkuydtCDsl4bsnLzrqbQg7JeQ65+s7LKY66asXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZycpO1xyXG5cclxuICAgIC8vIOyImOygleuQnCDrqZTsi5zsp4DrpbwgbXNncyDrsLDsl7TsnZggdGFyZ2V0SW5kZXjrsojsp7jsl5Ag7LaU6rCAXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIC8vIOyImOygle2VoCDquIDsnZgg7J24642x7IqkKHRhcmdldEluZGV4KVxyXG4gICAgICAvLyBmaW5kSW5kZXgo67Cw7Je066mU7ISc65OcKTog67Cw7Je07J2EIOuPjOuptOyEnCDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCDsmpTshozsnZggJ+yduOuNseyKpCcg67CY7ZmYIChjZi4gZmlsdGVyOiDtirnsoJUg7KGw6rG07J2EIOunjOyhse2VmOuKlCDsmpTshozrk6TsnYQg66qo7JWEICfsg4gg67Cw7Je0J+uhnCDrsJjtmZgpXHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAvLyB0YXJnZXRJbmRleOqwgCDsl4bsnLzrqbQoLTEpIOq4sOyhtCBtc2dzIOuwsOyXtCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiogdGFyZ2V0SW5kZXjroZwg67Cw7Je0IOyImOyglSDsp4TtlolcclxuICAgICAgLy8g6riw7KG0IOuwsOyXtCDrs7Xsgqw6IOq4sOyhtCBtc2dzIOuwsOyXtOydhCBzcHJlYWTroZwg7Y687LmcIOuSpCDri6Tsi5wgW13sl5Ag64Sj7Ja0IOyDiOuhnOyatCDrsLDsl7Qg7IKs67O4IOyDneyEsVxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG5cclxuICAgICAgLy8g7IKs67O4IOuwsOyXtOyXkCDsiJjsoJUg7KeE7ZaJOiBzcGxpY2XroZwgdGFyZ2V0SW5kZXjrtoDthLAgMeqwnChkZWxldGVDb3VudCnrpbwg7KeA7Jqw6rOgIOq3uCDsnpDrpqzsl5Ag7IOI66Gc7Jq0IOyalOyGjCgz7ZWt7J2YIOqwneyytCnsnYQg64Sj7J2MXHJcbiAgICAgIC8vICjsg4jroZzsmrQgaXRlbSAtIHRhcmdldEluZGV467KI7Ke4IOq4sOyhtCDrgrTsmqnrk6Qg6re464yA66GcLCB0ZXh066eMIOyDiCDqsbjroZwg6rWQ7LK0KVxyXG4gICAgICAvLyBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAvLyAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAvLyAgIHRleHQ6IHRleHQsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgLy8g67Cw7Je07JeQIHNwbGljZeuhnCB0YXJnZXRJbmRleOu2gO2EsCAx6rCc66W8IOyngOyasOqzoCDqt7gg7J6Q66as7JeQIOyImOygleuQnCDrqZTsi5zsp4AobmV3TXNnKSDstpTqsIBcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XHJcblxyXG4gICAgICAvLyDsiJjsoJXrkJwg7IOIIOuwsOyXtCDrsJjtmZggKD0+IHNldE1zZ3Psl5Ag65Ok7Ja06rCA7KeA66m07IScIG1zZ3Mg7Ya17Ke466GcIOq1kOyytClcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDsiJjsoJXsnbQg64Gd64KY66m0IOyLpO2WiSAoZWRpdGluZ0lk66W8IOuLpOyLnCBudWxs66GcIOuwlOq/iClcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgLy8g6riAIOyCreygnO2VmOuKlCDtlajsiJhcclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgLy8g7IKt7KCc7ZWY64qUIOq4gOydmCBpZCDsmbjsl5Ag7ZW064u5IOq4gOydmCAndXNlcklkJ+uPhCDshJzrsoTsl5Ag67O064OEID0+IOydtOuVjCAncGFyYW1zJ+uhnCDrs7TrgrTqs6AsIOyEnOuyhOyXkOyEnOuKlCBxdWVyeeuhnCDrsJvsnYxcclxuICAgIC8vIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH06IHVybCDrkqTsl5AgP3VzZXJJZD1yb3nsl5DshJwgcm95IOu2gOu2hCAodXJs7JeQIGAvbWVzc2FnZXMvJHtpZH0/dXNlcklkPXt1c2VySWR9YOudvOqzoCDrs7TrgrTrj4Qg64+Z7J28KVxyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiByZWNlaXZlZElkLCB0eXBlb2YgaWQpOyAvLyBudW1iZXIsIHN0cmluZyAoPT4gbWVzc2FnZXMuanNvbuyXkOyEnCBpZOqwgCDrrLjsnpDsl7TroZwg65CY7Ja07J6I7J2MKVxyXG5cclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgLy8gKiog7IKt7KCc7ZWcIOuCtOyaqeydtCDrt7Dsl5Ag67CY7JiB7J20IOyViOuQmOuKlCDqsr3smrAgLS0+IHR5cGXsnbQg7JWIIOunnuuKlCDqsoPsnbwg7IiYIOyeiOydjCAo7L2Y7IaU66GcIOuRkCDslYTsnbTrlJTrpbwg7Lac66Cl7ZW067O06rOgIO2VnOyqveydhCDri6Trpbgg7Kq97JeQIOunnuy2sOyjvOq4sClcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IFN0cmluZyhyZWNlaXZlZElkKSk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG5cclxuICAgICAgLy8gKiog7IKt7KCcIOynhO2WiSAoaXRlbSDstpTqsIAg7JeG64qUIOqxsCDrubzqs6Ag7IiY7KCVIOqzvOygleqzvCDrj5nsnbwpXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyDsiJjsoJXsnbQg7JmE66OM65Co7J2EIOyVjOumrOuKlCDtlajsiJg6IGVkaXRpbmdJZOulvCBudWxs66GcIOuwlOq/iCAoPT4gaXNFZGl0aW5n7J20IGZhbHNl66GcIOuzgO2ZmOuQmOyWtCDquLDsobTsnZggdGV4dOulvCDrjIDssrTtlZjrjZggTXNnSW5wdXQg67ew6rCAIOyCrOudvOyngOqzoCDsiJjsoJXrkJwgdGV4dOuhnCDri6Tsi5wg6rWQ7LK0KVxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICAvLyAqKiDshJzrsoTsl5DshJwg66mU7Iuc7KeA66W8IOu2iOufrOyYpOuKlCDtlajsiJggKG9yaWdpbmFsTXNncyDtlYTsmpTsl4bslrTsp5ApXHJcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBtc2dzW21zZ3MubGVuZ3RoIC0gMV3snbQg7LKY7J2M7JeQ64qUIOyXhuydhCDsiJjrj4Qg7J6I7Ja07IScIOuSpOyXkCAnPycg67aZ7J206rOgIHx8ICcnIChjdXJzb3LqsIAg67mIIOqwkuycvOuhnCDqsIgg7IiYIOyeiOqyjOuBlCkg7JiI7Jm47LKY66asXHJcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHsgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCAnJyB9IH0pO1xyXG5cclxuICAgIC8vIOuniOyngOuniSDsnbjrjbHsiqTqsIAgMeydvCDrlYwg65Kk7JeQIOu5iCDrsLDsl7Qg6rOE7IaNIOuwm+yVhOyYpOuKlCDqsoMg67Cp7KeAXHJcbiAgICAvLyBnZXTsnLzroZwg67Cb7JWE7JioIOuplOyLnOyngOqwgCDsl4bsnLzrqbQgaGFzTmV4dOulvCBmYWxzZeuhnCDsoITtmZhcclxuICAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRIYXNOZXh0KGZhbHNlKTtcclxuICAgICAgLy8g642UIOydtOyDgSDstpTqsIDtlbTspIQg642w7J207YSw6rCAIOyXhuycvOuvgOuhnCBnZXRNZXNzYWdlcyDsooXro4xcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gLy8g7LWc7LSIIO2OmOydtOyngCDsoJHsho0g7IucIOustOyhsOqxtCAx67KIIOyLpO2WiVxyXG4gIC8vIC8vICoqIHVzZUVmZmVjdCDrgrTsl5DshJzripQgYXN5bmMvYXdhaXTrpbwg7KeB7KCRIO2YuOy2nO2VmOyngCDslYrslYTslbwg7ZWoXHJcbiAgLy8gLy8gPT4gYXdhaXTrpbwg7Zi47Lac7ZWY64qUIOu2gOu2hOydhCDtlajsiJgoZ2V0TWVzc2FnZXMoKeuhnCDrlLDroZwg67m86rOgIOqxsOq4sOyXkCBhc3luY+uPhCDrtpnsl6zso7zquLBcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgLy8g7KCE7LK0IOuplOyLnOyngCDrtojrn6zsmKTquLBcclxuICAvLyAgIGdldE1lc3NhZ2VzKCk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3Qg7Jes65+sIOqwnCDsgqzsmqkg6rCA64qlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGludGVyc2VjdGluZ+qzvCBoYXNOZXh06rCAIOuRmCDri6QgdHJ1ZeydvCDrlYzrp4wgZ2V0TWVzc2FnZXMoKSDtmLjstpxcclxuICAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TWVzc2FnZXMoKTtcclxuICAgIC8vIGludGVyc2VjdGluZ+ydtCDrsJTrgJQg65WM66eI64ukIOyLpO2WiVxyXG4gIH0sIFtpbnRlcnNlY3RpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdtZXNzYWdlcyc+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAvLyB7Li4ueH3roZwg6rCd7LK07J2YIOqwgSBrZXnrpbwg7KCE67aAIOuEo+qzoCBNc2dJdGVt7JeQ7IScIOyTuCDrlYzripQg7J2867aA66eMIOqzqOudvOyEnCDsgqzsmqkg6rCA64qlXHJcbiAgICAgICAgICAvLyAn7IiY7KCVJ+yXkCDtlYTsmpTtlZwgb25VcGRhdGUsIHN0YXJ0RWRpdCwgaXNFZGl0aW5nIOyalOyGjOuTpOydhCBwcm9wc+uhnCDrr7jrpqwg64Sj7Ja07KSA64ukLlxyXG4gICAgICAgICAgLy8g7IiY7KCVIOyLpO2WiSDsi5wsIOyImOygle2VoCDquIDsnZggaWTrpbwgZWRpdGluZ0lk7JeQIOyEpOygle2VmOuKlCBzdGFydEVkaXTqs7wsIOugjOuNlOungSDspJHsnbgg7JqU7IaMIOykkSBlZGl0aW5nSWTsmYAgaWTqsIAg7J287LmY7ZWY64qUIOyalOyGjOqwgCDsnojripTsp4Drpbwg7JWM66Ck7KO864qUIGlzRWRpdGluZ+ydgCDsl6zquLDshJwg67CU66GcIOyymOumrCAo65Sw66GcIHVzZVN0YXRl66GcIOyEoOyWuO2VmOyngCDslYrsnYwpXHJcbiAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSAvKiBvbkRlbGV0ZeuKlCDsl6zquLDshJwg67CU66GcIOyLpO2WiSAqL1xyXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgey8qIOydtCBkaXbqsIAg7ZmU66m07IOB7JeQIOuCmO2DgOuCrOydhCDrlYwg64uk7J2MIOuNsOydtO2EsOulvCDrtojrn6zsmKTrj4TroZ0g7ZWoICjrrLTtlZzsiqTtgazroaQpICovfVxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbi8vIGF4aW9z7J2YIOq4sOuzuCBiYXNlVVJM7J2EIOyngOyglSAoPT4gdXJsIOyVnuyXkCDsnpDrj5nsnLzroZwg67aZ7J2MKVxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7IC8qIOyEnOuyhCB1cmwgKi9cclxuXHJcbi8vIOyghOuLrOuQnCBtZXRob2QsIHVybCwgLi4ucmVzdOulvCBheGlvc+uhnCDsspjrpqztlZjsl6wg7ISc67KE7JeQ7IScIOydkeuLtShyZXMpIOuwm+yVhOyYpOuKlCDtlajsiJhcclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChtZXRob2QsIHVybCwgLi4ucmVzdCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCAuLi5yZXN0KTtcclxuICAvLyDrsJvslYTsmKgg7J2R64u17JeQ7IScIGRhdGHrpbwg6rq864K0IOuwmO2ZmFxyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7XHJcblxyXG4vKlxyXG5nZXQ6IGF4aW9zLmdldCh1cmxbLCBjb25maWddKVxyXG5kZWxldGU6IGF4aW9zLmRlbGV0ZSh1cmxbLCBjb25maWddKVxyXG5wb3N0OiBheGlvcy5wb3N0KHVybCwgZGF0YVssIGNvbmZpZ10pIC8vcG9zdOyZgCBwdXTsnYAgZ2V0LCBkZWxldGXsmYAg64us66asIGRhdGHqsIAg7LaU6rCA65CoXHJcbnB1dDogYXhpb3MucHV0KHVybCwgZGF0YVssIGNvbmZpZ10pXHJcbiovXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyB0YXJnZXRFbCA9IE1zZ0xpc3TsnZggZmV0Y2hNb3JlRWwo66y07ZWc7Iqk7YGs66Gk7J20IOyLpO2WieuQmOuKlCDquLDspIDsnbggZGl2KVxyXG5jb25zdCB1c2VJbmZpbml0ZVNjcm9sbCA9ICh0YXJnZXRFbCkgPT4ge1xyXG4gIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtpbnRlcnNlY3RpbmcsIHNldEludGVyc2VjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIOyYteyggOuyhCDsg53shLFcclxuICAvLyBNc2dMaXN07JeQ7IScIOuplOyLnOyngCDrgrTsmqnsnbQg67CU64CUIOuVjOuniOuLpCBvYnNlcnZlcuqwgCDrp6Trsogg7Zi47Lac65CY64qUIOqygyDrsKnsp4DtlZjquLAg7JyE7ZW07IScIOyhsOqxtOusuOydhCDrtpnsnbTqs6AgKyB1c2VDYWxsYmFja+ycvOuhnCDqsJDsi7jspIxcclxuICBjb25zdCBnZXRPYnNlcnZlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vIG9ic2VydmVyUmVmLmN1cnJlbnTqsJLsnbQg7JeG7Jy866m0XHJcbiAgICBpZiAoIW9ic2VydmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgLy8gb2JzZXJ2ZXJSZWYuY3VycmVudOyXkCBJbnRlcnNlY3Rpb25PYnNlcnZlciDqsJLsnYQg64Sj7Ja07KSMICjstIjquLDtmZQpXHJcbiAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+XHJcbiAgICAgICAgLy8gc2V0SW50ZXJzZWN0aW5nIOyViOydmCDrgrTsmqk6IGVudHJpZXMg7KSR7JeQ7IScIOydvOu2gOqwgCDtlZjrgpjrnbzrj4Qg7J6I7Jy866m0Li4uXHJcbiAgICAgICAgc2V0SW50ZXJzZWN0aW5nKFxyXG4gICAgICAgICAgLy8gZW50cnnqsIAg7ZWY64KY67+Q7J207Ja064+EIO2Yle2DnOuKlCAn67Cw7Je0JyAtIGVudHJpZXPsnZgg7LKr67KI7Ke4IOyduOyekCAnZW50cmllc1swXScg65iQ64qUXHJcbiAgICAgICAgICAvLyBzb21lIOyCrOyaqSAtIGludGVyc2VjdGluZ+2VnCDqsowg7ZWY64KY652864+EIOyeiOycvOuptCB0cnVlIOuwmO2ZmFxyXG4gICAgICAgICAgLy8gQXJyYXkuc29tZTog67Cw7Je0IOuCtOydmCDri6gg7ZWcIOqwnOydmCDsmpTshozrnbzrj4Qg7KGw6rG07J2EIOunjOyhse2VmOuptCB0cnVlIOuwmO2ZmFxyXG4gICAgICAgICAgZW50cmllcy5zb21lKChlbnRyeSkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9ic2VydmVyUmVmLmN1cnJlbnTqsJLsnbQg7J6I7J2EIOqyveyasOyXkOuKlCDslYTrrLQg6rKD64+EIO2VmOyngCDslYrqs6Ag6re464yA66GcIOuwmO2ZmFxyXG4gICAgcmV0dXJuIG9ic2VydmVyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgLy9vYnNlcnZlclJlZi5jdXJyZW506rCAIOuwlOuAlCDrlYzrp4wg7Iuk7ZaJXHJcbiAgfSwgW29ic2VydmVyUmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgLy8gb2JzZXJ2ZSDrqoXroLnsnYQg64K066Ck7KSY7JW8IC0g6rCQ7Iuc7ZWgIOuMgOyDgSDsp4DsoJVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gdGFyZ2V0RWwuY3VycmVudOqwgCDsobTsnqztlaAg6rK97JqwIO2VtOuLuSDsmpTshozrpbwg6rCQ7IucKG9ic2VydmUpXHJcbiAgICAvLyAqKiB1c2VDYWxsYmFja+ydtCDsnojsnLzrqbQg67OA7IiY66W8ICftlajsiJgn66GcIOuwm+yVhOyVvCDtlahcclxuICAgIC8vIGdldE9ic2VydmVyKCnrpbwg7LWc7LSI66GcIOyLpO2Wie2VoCDrlYzripQgb2JzZXJ2ZXJSZWYuY3VycmVudOqwgCBudWxs7J206riwIOuVjOusuOyXkCBnZXRPYnNlcnZlciDslYjsnZggaWbrrLjsnbQg7Iuk7ZaJ65CY6rOgIOydtO2bhOuhnOuKlCDqs4Tsho0gb2JzZXJ2ZXJSZWYuY3VycmVudCjrp4zrk6TslrTsp4Qg7Ji17KCA67KEKeulvCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpO1xyXG5cclxuICAgIC8vIHRhcmdldEVsLmN1cnJlbnTqsIAg7ZmU66m07IOB7JeQIOuNlCDsnbTsg4Eg7KG07J6s7ZWY7KeAIOyViuydhCDqsr3smrBcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIOyYteyggOuyhCDsl7DqsrDsnYQg64GK7J2MXHJcbiAgICAgIGdldE9ic2VydmVyKCkuZGlzY29ubmVjdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyB0YXJnZXRFbC5jdXJyZW507J2YIOuCtOyaqeydtCDrsJTrgJQg65WM66eMIHVzZUVmZmVjdCDslYjsnZgg64+Z7J6R7J20IOydtOujqOyWtOynkFxyXG4gIH0sIFt0YXJnZXRFbC5jdXJyZW50XSk7XHJcblxyXG4gIHJldHVybiBpbnRlcnNlY3Rpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbmZpbml0ZVNjcm9sbDtcclxuIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxoMT5TSU1QTEUgU05TPC9oMT5cclxuICAgIDxNc2dMaXN0IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwidGV4dCIsImlkIiwidW5kZWZpbmVkIiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsInZhbHVlIiwiTXNnSXRlbSIsInVzZXJJZCIsInRpbWVzdGFtcCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0Iiwib25EZWxldGUiLCJteUlkIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZmV0Y2hlciIsInVzZUluZmluaXRlU2Nyb2xsIiwiTXNnTGlzdCIsInF1ZXJ5IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJmZXRjaE1vcmVFbCIsImludGVyc2VjdGluZyIsImhhc05leHQiLCJzZXRIYXNOZXh0Iiwib25DcmVhdGUiLCJuZXdNc2ciLCJFcnJvciIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsIlN0cmluZyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibWV0aG9kIiwidXJsIiwicmVzdCIsInJlcyIsImRhdGEiLCJ1c2VDYWxsYmFjayIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJzZXRJbnRlcnNlY3RpbmciLCJnZXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==