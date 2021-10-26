import { useRef } from 'react';

// input의 내용을 MsgList에서는 'create'에 쓸 거고 MsgItem에서는 'update'에 쓸 예정
// 각각의 경우에 수행할 메서드가 다름 => 'mutate'로 뭉뚱그려 선언하고 그 안에 input값 전달
// (id = undefined: id값 받아오는데 없을 수도 있음 => MsgItem에서 수정버튼이 눌려서 넘어온 id가 있을 경우 mutate를 통해 id가 전달되어 MsgList 레벨에서 onUpdate 실행)
const MsgInput = ({ mutate, text = '', id = undefined }) => {
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
    // MsgList에 mutate를 통해 input값(text) 전달
    // (수정버튼이 눌려서 MsgInput에 id가 넘어오면 onUpdate가 실행되고 넘어온 id가 없으면 onCreate(생성)으로 실행됨)
    mutate(text, id);
  };

  return (
    <form className='messages__input' onSubmit={onSubmit}>
      <textarea ref={textRef} defaultValue={text} placeholder='내용을 입력하세요.' />
      <button type='submit'>완료</button>
    </form>
  );
};

export default MsgInput;
