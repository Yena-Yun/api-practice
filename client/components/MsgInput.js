import { useRef } from 'react';

// Input창에 입력된 내용을 MsgList에서는 'onCreate'에 쓰고 MsgItem에서는 'onUpdate'에 사용 + 두 메서드를 'mutate'로 뭉뚱그려 선언하고 mutate에 두 메서드 실행에 필요한 값들 전달
// (id = undefined: id값 받아오는데 없을 수도 있음 => MsgItem에서 수정버튼이 눌려서 넘어온 id가 있을 경우 mutate를 통해 id가 전달되어 MsgList 레벨에서 onUpdate 실행 / text = '': 입력된 텍스트가 없을 수도 있음)
const MsgInput = ({ mutate, text = '', id = undefined }) => {
  // onChange, onInput 방법 외에 useRef를 이용하는 방법이 있음
  // input창(textarea)을 useRef로 가리켜서 변수로 받음 => 변수.current.value = input 입력값
  const textRef = useRef(null);

  // 완료버튼 누르면 동작
  const onSubmit = (e) => {
    e.preventDefault(); /* 새로고침 방지 */
    e.stopPropagation(); /* 이벤트 버블링 방지 */

    // input창에 입력된 값을 가져옴
    const text = textRef.current.value;
    // input창 초기화
    textRef.current.value = '';
    // MsgList에 mutate를 통해 input값(text) 전달
    // (수정버튼이 눌려서 MsgInput에 id가 넘어오면 onUpdate가 실행되고 넘어온 id가 없으면 onCreate(생성) 실행)
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
