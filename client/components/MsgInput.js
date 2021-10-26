import { useRef } from 'react';

// input의 내용을 MsgList에서는 'create'에 쓸 거고 MsgItem에서는 'update'에 쓸 예정
// 각각의 경우에 수행할 메서드가 다름 => 'mutate'로 뭉뚱그려 선언하고 그 안에 input값 전달
const MsgInput = ({ mutate }) => {
  // onChange, onInput 방법 외에 useRef를 이용하는 방법이 있음
  // input창(textarea)을 useRef로 '가리킴'
  const textRef = useRef(null);

  // onSubmit 함수는 필요
  const onSubmit = (e) => {
    // 새로고침 방지
    e.preventDefault();
    // 이벤트 버블링 방지
    e.stopPropagation();

    // input창에 입력된 값
    const text = textRef.current.value;
    // (값 가져오고 나면) input창 초기화
    textRef.current.value = '';

    // 받아온 상위 메서드(mutate)에 input값 전달
    mutate(text);
  };

  return (
    <form className='messages__input' onSubmit={onSubmit}>
      <textarea ref={textRef} placeholder='내용을 입력하세요.' />
      <button type='submit'>완료</button>
    </form>
  );
};

export default MsgInput;
