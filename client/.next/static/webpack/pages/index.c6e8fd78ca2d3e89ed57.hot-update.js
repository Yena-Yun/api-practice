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
      // observerRef.current에 IntersectionObserver 값을 넣어줌
      observerRef.current = new IntersectionObserver(function (entries) {
        return (// setIntersecting 안의 내용: entries 중에서 일부가 하나라도 있으면...
          setIntersecting( // entry가 하나뿐이어도 형태는 '배열' - entries의 첫번째 인자 'entries[0]' 또는
          // some 사용 - intersecting한 게 하나라도 있으면 true 반환
          // Array.some: 배열 내의 단 한 개의 요소라도 조건을 만족하면 true 반환
          entries.some(function (entry) {
            return entry.isIntersecting;
          }))
        );
      });
    } // observerRef.current값이 있을 경우에는 아무 것도 하지 않고 그대로 반환


    return observerRef.current; //observerRef.current가 바뀔 때만 실행
  }, [observerRef.current]); // observe 명령을 내려줘야 - 감시할 대상 지정

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // targetEl.current가 존재할 경우 해당 요소를 감시(observe)
    // ** useCallback이 있으면 변수를 '함수'로 받아야 함
    // getObserver()를 최초로 실행할 때는 observerRef.current가 null이기 때문에 getObserver 안의 if문이 실행되고 이후로는 계속 observerRef.current(만들어진 옵저버)를 그대로 반환
    if (targetEl.current) getObserver().observe(targetEl.current); // targetEl.current가 화면상에 더 이상 존재하지 않을 경우

    return function () {
      // 옵저버 연결을 끊음
      getObserver().disconnect();
    }; // targetEl.current의 내용이 바뀔 때만 useEffect 안의 동작이 이루어짐
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzZlOGZkNzhjYTJkM2U4OWVkNTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQSxJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLFFBQUQsRUFBYztBQUFBOztBQUN0QyxNQUFNQyxXQUFXLEdBQUdILDZDQUFNLENBQUMsSUFBRCxDQUExQjs7QUFDQSxrQkFBd0NILCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQU9PLFlBQVA7QUFBQSxNQUFxQkMsZUFBckIsZ0JBRnNDLENBSXRDO0FBQ0E7OztBQUNBLE1BQU1DLFdBQVcsR0FBR1Asa0RBQVcsQ0FBQyxZQUFNO0FBQ3BDO0FBQ0EsUUFBSSxDQUFDSSxXQUFXLENBQUNJLE9BQWpCLEVBQTBCO0FBQ3hCO0FBQ0FKLE1BQUFBLFdBQVcsQ0FBQ0ksT0FBWixHQUFzQixJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFEO0FBQUEsZUFDN0M7QUFDQUosVUFBQUEsZUFBZSxFQUNiO0FBQ0E7QUFDQTtBQUNBSSxVQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxVQUFDQyxLQUFEO0FBQUEsbUJBQVdBLEtBQUssQ0FBQ0MsY0FBakI7QUFBQSxXQUFiLENBSmE7QUFGOEI7QUFBQSxPQUF6QixDQUF0QjtBQVNELEtBYm1DLENBZXBDOzs7QUFDQSxXQUFPVCxXQUFXLENBQUNJLE9BQW5CLENBaEJvQyxDQWtCcEM7QUFDRCxHQW5COEIsRUFtQjVCLENBQUNKLFdBQVcsQ0FBQ0ksT0FBYixDQW5CNEIsQ0FBL0IsQ0FOc0MsQ0EyQnRDOztBQUNBVCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxRQUFJSSxRQUFRLENBQUNLLE9BQWIsRUFBc0JELFdBQVcsR0FBR08sT0FBZCxDQUFzQlgsUUFBUSxDQUFDSyxPQUEvQixFQUpSLENBTWQ7O0FBQ0EsV0FBTyxZQUFNO0FBQ1g7QUFDQUQsTUFBQUEsV0FBVyxHQUFHUSxVQUFkO0FBQ0QsS0FIRCxDQVBjLENBWWQ7QUFDRCxHQWJRLEVBYU4sQ0FBQ1osUUFBUSxDQUFDSyxPQUFWLENBYk0sQ0FBVDtBQWVBLFNBQU9ILFlBQVA7QUFDRCxDQTVDRDs7R0FBTUg7O0FBOENOLCtEQUFlQSxpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gdGFyZ2V0RWwgPSBNc2dMaXN07J2YIGZldGNoTW9yZUVsKOustO2VnOyKpO2BrOuhpOydtCDsi6TtlonrkJjripQg6riw7KSA7J24IGRpdilcclxuY29uc3QgdXNlSW5maW5pdGVTY3JvbGwgPSAodGFyZ2V0RWwpID0+IHtcclxuICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaW50ZXJzZWN0aW5nLCBzZXRJbnRlcnNlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyDsmLXsoIDrsoQg7IOd7ISxXHJcbiAgLy8gTXNnTGlzdOyXkOyEnCDrqZTsi5zsp4Ag64K07Jqp7J20IOuwlOuAlCDrlYzrp4jri6Qgb2JzZXJ2ZXLqsIAg66ek67KIIO2YuOy2nOuQmOuKlCDqsoMg67Cp7KeA7ZWY6riwIOychO2VtOyEnCDsobDqsbTrrLjsnYQg67aZ7J206rOgICsgdXNlQ2FsbGJhY2vsnLzroZwg6rCQ7Iu47KSMXHJcbiAgY29uc3QgZ2V0T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBvYnNlcnZlclJlZi5jdXJyZW506rCS7J20IOyXhuycvOuptFxyXG4gICAgaWYgKCFvYnNlcnZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIC8vIG9ic2VydmVyUmVmLmN1cnJlbnTsl5AgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIg6rCS7J2EIOuEo+yWtOykjFxyXG4gICAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PlxyXG4gICAgICAgIC8vIHNldEludGVyc2VjdGluZyDslYjsnZgg64K07JqpOiBlbnRyaWVzIOykkeyXkOyEnCDsnbzrtoDqsIAg7ZWY64KY652864+EIOyeiOycvOuptC4uLlxyXG4gICAgICAgIHNldEludGVyc2VjdGluZyhcclxuICAgICAgICAgIC8vIGVudHJ56rCAIO2VmOuCmOu/kOydtOyWtOuPhCDtmJXtg5zripQgJ+uwsOyXtCcgLSBlbnRyaWVz7J2YIOyyq+uyiOynuCDsnbjsnpAgJ2VudHJpZXNbMF0nIOuYkOuKlFxyXG4gICAgICAgICAgLy8gc29tZSDsgqzsmqkgLSBpbnRlcnNlY3RpbmftlZwg6rKMIO2VmOuCmOudvOuPhCDsnojsnLzrqbQgdHJ1ZSDrsJjtmZhcclxuICAgICAgICAgIC8vIEFycmF5LnNvbWU6IOuwsOyXtCDrgrTsnZgg64uoIO2VnCDqsJzsnZgg7JqU7IaM652864+EIOyhsOqxtOydhCDrp4zsobHtlZjrqbQgdHJ1ZSDrsJjtmZhcclxuICAgICAgICAgIGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvYnNlcnZlclJlZi5jdXJyZW506rCS7J20IOyeiOydhCDqsr3smrDsl5DripQg7JWE66y0IOqyg+uPhCDtlZjsp4Ag7JWK6rOgIOq3uOuMgOuhnCDrsJjtmZhcclxuICAgIHJldHVybiBvYnNlcnZlclJlZi5jdXJyZW50O1xyXG5cclxuICAgIC8vb2JzZXJ2ZXJSZWYuY3VycmVudOqwgCDrsJTrgJQg65WM66eMIOyLpO2WiVxyXG4gIH0sIFtvYnNlcnZlclJlZi5jdXJyZW50XSk7XHJcblxyXG4gIC8vIG9ic2VydmUg66qF66C57J2EIOuCtOugpOykmOyVvCAtIOqwkOyLnO2VoCDrjIDsg4Eg7KeA7KCVXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHRhcmdldEVsLmN1cnJlbnTqsIAg7KG07J6s7ZWgIOqyveyasCDtlbTri7kg7JqU7IaM66W8IOqwkOyLnChvYnNlcnZlKVxyXG4gICAgLy8gKiogdXNlQ2FsbGJhY2vsnbQg7J6I7Jy866m0IOuzgOyImOulvCAn7ZWo7IiYJ+uhnCDrsJvslYTslbwg7ZWoXHJcbiAgICAvLyBnZXRPYnNlcnZlcigp66W8IOy1nOy0iOuhnCDsi6TtlontlaAg65WM64qUIG9ic2VydmVyUmVmLmN1cnJlbnTqsIAgbnVsbOydtOq4sCDrlYzrrLjsl5AgZ2V0T2JzZXJ2ZXIg7JWI7J2YIGlm66y47J20IOyLpO2WieuQmOqzoCDsnbTtm4TroZzripQg6rOE7IaNIG9ic2VydmVyUmVmLmN1cnJlbnQo66eM65Ok7Ja07KeEIOyYteyggOuyhCnrpbwg6re464yA66GcIOuwmO2ZmFxyXG4gICAgaWYgKHRhcmdldEVsLmN1cnJlbnQpIGdldE9ic2VydmVyKCkub2JzZXJ2ZSh0YXJnZXRFbC5jdXJyZW50KTtcclxuXHJcbiAgICAvLyB0YXJnZXRFbC5jdXJyZW506rCAIO2ZlOuptOyDgeyXkCDrjZQg7J207IOBIOyhtOyerO2VmOyngCDslYrsnYQg6rK97JqwXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyDsmLXsoIDrsoQg7Jew6rKw7J2EIOuBiuydjFxyXG4gICAgICBnZXRPYnNlcnZlcigpLmRpc2Nvbm5lY3QoKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gdGFyZ2V0RWwuY3VycmVudOydmCDrgrTsmqnsnbQg67CU64CUIOuVjOunjCB1c2VFZmZlY3Qg7JWI7J2YIOuPmeyekeydtCDsnbTro6jslrTsp5BcclxuICB9LCBbdGFyZ2V0RWwuY3VycmVudF0pO1xyXG5cclxuICByZXR1cm4gaW50ZXJzZWN0aW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pdGVTY3JvbGw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlSW5maW5pdGVTY3JvbGwiLCJ0YXJnZXRFbCIsIm9ic2VydmVyUmVmIiwiaW50ZXJzZWN0aW5nIiwic2V0SW50ZXJzZWN0aW5nIiwiZ2V0T2JzZXJ2ZXIiLCJjdXJyZW50IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic29tZSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwiZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=