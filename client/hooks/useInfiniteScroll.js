import { useState, useEffect, useCallback, useRef } from 'react';

// targetEl = MsgList의 fetchMoreEl(무한스크롤이 실행되는 기준인 div)
const useInfiniteScroll = (targetEl) => {
  const observerRef = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  // 옵저버 생성
  // MsgList에서 메시지 내용이 바뀔 때마다 observer가 매번 호출되는 것 방지하기 위해서 조건문을 붙이고 + useCallback으로 감싸줌
  const getObserver = useCallback(() => {
    // observerRef.current값이 없으면
    if (!observerRef.current) {
      // observerRef.current에 IntersectionObserver 값을 넣어줌 (초기화)
      observerRef.current = new IntersectionObserver((entries) =>
        // setIntersecting 안의 내용: entries 중에서 일부가 하나라도 있으면...
        setIntersecting(
          // entry가 하나뿐이어도 형태는 '배열' - entries의 첫번째 인자 'entries[0]' 또는
          // some 사용 - intersecting한 게 하나라도 있으면 true 반환
          // Array.some: 배열 내의 단 한 개의 요소라도 조건을 만족하면 true 반환
          entries.some((entry) => entry.isIntersecting)
        )
      );
    }

    // observerRef.current값이 있을 경우에는 아무 것도 하지 않고 그대로 반환
    return observerRef.current;

    //observerRef.current가 바뀔 때만 실행
  }, [observerRef.current]);

  // observe 명령을 내려줘야 - 감시할 대상 지정
  useEffect(() => {
    // targetEl.current가 존재할 경우 해당 요소를 감시(observe)
    // ** useCallback이 있으면 변수를 '함수'로 받아야 함
    // getObserver()를 최초로 실행할 때는 observerRef.current가 null이기 때문에 getObserver 안의 if문이 실행되고 이후로는 계속 observerRef.current(만들어진 옵저버)를 그대로 반환
    if (targetEl.current) getObserver().observe(targetEl.current);

    // targetEl.current가 화면상에 더 이상 존재하지 않을 경우
    return () => {
      // 옵저버 연결을 끊음
      getObserver().disconnect();
    };

    // targetEl.current의 내용이 바뀔 때만 useEffect 안의 동작이 이루어짐
  }, [targetEl.current]);

  return intersecting;
};

export default useInfiniteScroll;
