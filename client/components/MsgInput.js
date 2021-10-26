import { useRef } from 'react';

// input의 내용을 MsgList에서는 'create'에 쓸 거고 MsgItem에서는 'update'에 쓸 예정
// 각각의 경우에 수행할 메서드가 다름 => 'mutate'로 뭉뚱그려 선언하고 그 안에 input값 전달
const MsgInput = ({ mutate }) => {
  const textRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    // 받아온 mutate(상위 메서드들)에 text를 전달
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
