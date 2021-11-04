"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();

 // targetEl = MsgList의 fetchMoreEl(무한스크롤이 실행되는 기준인 div)

var useInfiniteScroll = function useInfiniteScroll(targetEl) {
  _s();

  var observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      intersecting = _useState[0],
      setIntersecting = _useState[1]; // 옵저버 생성
  // MsgList에서 메시지 내용이 바뀔 때마다 observer가 매번 호출되는 것 방지하기 위해서 조건문을 붙이고 + useCallback으로 감싸줌


  var getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // observerRef.current값이 없으면
    if (!observerRef.current) {
      // IntersectionObserver 실행
      new IntersectionObserver(function (entries) {
        return (// setIntersecting 안의 내용: entries 중에서 일부가 하나라도 있으면...
          setIntersecting( // entry가 하나뿐이어도 형태는 '배열' - entries의 첫번째 인자 'entries[0]' 또는
          // some 사용 - intersecting한 게 하나라도 있으면 true 반환
          // Array.some: 배열 내의 단 한 개의 요소라도 조건을 만족하면 true 반환
          entries.some(function (entry) {
            return entry.isIntersecting;
          }))
        );
      });
    } // observerRef.current값이 있으면 해당 값 그대로 반환


    return observerRef.current; //observerRef.current가 바뀔 때만 실행
  }, [observerRef.current]); // observe 명령을 내려줘야 - 감시할 대상 지정

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // targetEl.current가 존재할 경우 해당 요소를 감시(observe)
    // ** useCallback이 있으면 변수를 '함수'로 받아야 함
    // getObserver()를 최초로 실행할 때는 observerRef.current가 null이기 때문에 getObserver 안의 if문이 실행되고 이후로는 계속 observerRef.current(만들어진 옵저버)를 그대로 반환
    if (targetEl.current) getObserver().observe(targetEl.current); // useInfiniteScroll이 더 이상 화면 상에 존재하지 않게 될 경우

    return function () {
      // observer 연결을 끊음
      getObserver().disconnect();
    }; // targetEl.current의 내용이 바뀔 때에 한해서 useEffect 내부 코드가 실행됨
  }, [targetEl.current]);
  return intersecting;
};

_s(useInfiniteScroll, "wgJwkE67wQsXc1eiCmrL0CTwPqc=");

/* harmony default export */ __webpack_exports__["default"] = (useInfiniteScroll);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTE4ODVmYzMyNzRhMWQwNDc1MTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQSxJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLFFBQUQsRUFBYztBQUFBOztBQUN0QyxNQUFNQyxXQUFXLEdBQUdILDZDQUFNLENBQUMsSUFBRCxDQUExQjs7QUFDQSxrQkFBd0NILCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQU9PLFlBQVA7QUFBQSxNQUFxQkMsZUFBckIsZ0JBRnNDLENBSXRDO0FBQ0E7OztBQUNBLE1BQU1DLFdBQVcsR0FBR1Asa0RBQVcsQ0FBQyxZQUFNO0FBQ3BDO0FBQ0EsUUFBSSxDQUFDSSxXQUFXLENBQUNJLE9BQWpCLEVBQTBCO0FBQ3hCO0FBQ0EsVUFBSUMsb0JBQUosQ0FBeUIsVUFBQ0MsT0FBRDtBQUFBLGVBQ3ZCO0FBQ0FKLFVBQUFBLGVBQWUsRUFDYjtBQUNBO0FBQ0E7QUFDQUksVUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsVUFBQ0MsS0FBRDtBQUFBLG1CQUFXQSxLQUFLLENBQUNDLGNBQWpCO0FBQUEsV0FBYixDQUphO0FBRlE7QUFBQSxPQUF6QjtBQVNELEtBYm1DLENBZXBDOzs7QUFDQSxXQUFPVCxXQUFXLENBQUNJLE9BQW5CLENBaEJvQyxDQWtCcEM7QUFDRCxHQW5COEIsRUFtQjVCLENBQUNKLFdBQVcsQ0FBQ0ksT0FBYixDQW5CNEIsQ0FBL0IsQ0FOc0MsQ0EyQnRDOztBQUNBVCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxRQUFJSSxRQUFRLENBQUNLLE9BQWIsRUFBc0JELFdBQVcsR0FBR08sT0FBZCxDQUFzQlgsUUFBUSxDQUFDSyxPQUEvQixFQUpSLENBTWQ7O0FBQ0EsV0FBTyxZQUFNO0FBQ1g7QUFDQUQsTUFBQUEsV0FBVyxHQUFHUSxVQUFkO0FBQ0QsS0FIRCxDQVBjLENBV2Q7QUFDRCxHQVpRLEVBWU4sQ0FBQ1osUUFBUSxDQUFDSyxPQUFWLENBWk0sQ0FBVDtBQWNBLFNBQU9ILFlBQVA7QUFDRCxDQTNDRDs7R0FBTUg7O0FBNkNOLCtEQUFlQSxpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gdGFyZ2V0RWwgPSBNc2dMaXN07J2YIGZldGNoTW9yZUVsKOustO2VnOyKpO2BrOuhpOydtCDsi6TtlonrkJjripQg6riw7KSA7J24IGRpdilcclxuY29uc3QgdXNlSW5maW5pdGVTY3JvbGwgPSAodGFyZ2V0RWwpID0+IHtcclxuICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaW50ZXJzZWN0aW5nLCBzZXRJbnRlcnNlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyDsmLXsoIDrsoQg7IOd7ISxXHJcbiAgLy8gTXNnTGlzdOyXkOyEnCDrqZTsi5zsp4Ag64K07Jqp7J20IOuwlOuAlCDrlYzrp4jri6Qgb2JzZXJ2ZXLqsIAg66ek67KIIO2YuOy2nOuQmOuKlCDqsoMg67Cp7KeA7ZWY6riwIOychO2VtOyEnCDsobDqsbTrrLjsnYQg67aZ7J206rOgICsgdXNlQ2FsbGJhY2vsnLzroZwg6rCQ7Iu47KSMXHJcbiAgY29uc3QgZ2V0T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBvYnNlcnZlclJlZi5jdXJyZW506rCS7J20IOyXhuycvOuptFxyXG4gICAgaWYgKCFvYnNlcnZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIC8vIEludGVyc2VjdGlvbk9ic2VydmVyIOyLpO2WiVxyXG4gICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+XHJcbiAgICAgICAgLy8gc2V0SW50ZXJzZWN0aW5nIOyViOydmCDrgrTsmqk6IGVudHJpZXMg7KSR7JeQ7IScIOydvOu2gOqwgCDtlZjrgpjrnbzrj4Qg7J6I7Jy866m0Li4uXHJcbiAgICAgICAgc2V0SW50ZXJzZWN0aW5nKFxyXG4gICAgICAgICAgLy8gZW50cnnqsIAg7ZWY64KY67+Q7J207Ja064+EIO2Yle2DnOuKlCAn67Cw7Je0JyAtIGVudHJpZXPsnZgg7LKr67KI7Ke4IOyduOyekCAnZW50cmllc1swXScg65iQ64qUXHJcbiAgICAgICAgICAvLyBzb21lIOyCrOyaqSAtIGludGVyc2VjdGluZ+2VnCDqsowg7ZWY64KY652864+EIOyeiOycvOuptCB0cnVlIOuwmO2ZmFxyXG4gICAgICAgICAgLy8gQXJyYXkuc29tZTog67Cw7Je0IOuCtOydmCDri6gg7ZWcIOqwnOydmCDsmpTshozrnbzrj4Qg7KGw6rG07J2EIOunjOyhse2VmOuptCB0cnVlIOuwmO2ZmFxyXG4gICAgICAgICAgZW50cmllcy5zb21lKChlbnRyeSkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9ic2VydmVyUmVmLmN1cnJlbnTqsJLsnbQg7J6I7Jy866m0IO2VtOuLuSDqsJIg6re464yA66GcIOuwmO2ZmFxyXG4gICAgcmV0dXJuIG9ic2VydmVyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgLy9vYnNlcnZlclJlZi5jdXJyZW506rCAIOuwlOuAlCDrlYzrp4wg7Iuk7ZaJXHJcbiAgfSwgW29ic2VydmVyUmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgLy8gb2JzZXJ2ZSDrqoXroLnsnYQg64K066Ck7KSY7JW8IC0g6rCQ7Iuc7ZWgIOuMgOyDgSDsp4DsoJVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gdGFyZ2V0RWwuY3VycmVudOqwgCDsobTsnqztlaAg6rK97JqwIO2VtOuLuSDsmpTshozrpbwg6rCQ7IucKG9ic2VydmUpXHJcbiAgICAvLyAqKiB1c2VDYWxsYmFja+ydtCDsnojsnLzrqbQg67OA7IiY66W8ICftlajsiJgn66GcIOuwm+yVhOyVvCDtlahcclxuICAgIC8vIGdldE9ic2VydmVyKCnrpbwg7LWc7LSI66GcIOyLpO2Wie2VoCDrlYzripQgb2JzZXJ2ZXJSZWYuY3VycmVudOqwgCBudWxs7J206riwIOuVjOusuOyXkCBnZXRPYnNlcnZlciDslYjsnZggaWbrrLjsnbQg7Iuk7ZaJ65CY6rOgIOydtO2bhOuhnOuKlCDqs4Tsho0gb2JzZXJ2ZXJSZWYuY3VycmVudCjrp4zrk6TslrTsp4Qg7Ji17KCA67KEKeulvCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpO1xyXG5cclxuICAgIC8vIHVzZUluZmluaXRlU2Nyb2xs7J20IOuNlCDsnbTsg4Eg7ZmU66m0IOyDgeyXkCDsobTsnqztlZjsp4Ag7JWK6rKMIOuQoCDqsr3smrBcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIG9ic2VydmVyIOyXsOqysOydhCDrgYrsnYxcclxuICAgICAgZ2V0T2JzZXJ2ZXIoKS5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gICAgLy8gdGFyZ2V0RWwuY3VycmVudOydmCDrgrTsmqnsnbQg67CU64CUIOuVjOyXkCDtlZztlbTshJwgdXNlRWZmZWN0IOuCtOu2gCDsvZTrk5zqsIAg7Iuk7ZaJ65CoXHJcbiAgfSwgW3RhcmdldEVsLmN1cnJlbnRdKTtcclxuXHJcbiAgcmV0dXJuIGludGVyc2VjdGluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUluZmluaXRlU2Nyb2xsO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZUluZmluaXRlU2Nyb2xsIiwidGFyZ2V0RWwiLCJvYnNlcnZlclJlZiIsImludGVyc2VjdGluZyIsInNldEludGVyc2VjdGluZyIsImdldE9ic2VydmVyIiwiY3VycmVudCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9