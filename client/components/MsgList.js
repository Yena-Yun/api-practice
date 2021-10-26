import { useState } from 'react';
import MsgInput from './MsgInput';
import MsgItem from './MsgItem';

// 유저아이디 배열
const UserIds = ['roy', 'jay'];

// 유저아이디 (둘 중에 하나) 랜덤하게 넣기
// UserIds 배열의 인덱스에 랜덤 함수 넣기
// 2개뿐일 때는 Math.round만 처리 -> 0 또는 1
const getRamdomUserId = () => UserIds[Math.round(Math.random())];

// 3개 이상일 때는 Math.random() 뒤에 배열의 길이 곱하기
// const getRamdomUserId = () => UserIds[Math.round(Math.random() * UserIds.length)];

// Array(50): 공간이 50개인 배열 생성
// .fill(0): 50개의 공간을 아무 값으로나 채움
// .map(val, i): map으로 꺼내는 val이 중요하지 않으면 '_'로 처리 (=> i만 사용하려는 경우)
// ()(return) 안에 {} (=> 객체 반환)
const originalMsgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    userId: getRamdomUserId(),
    timestamp: 1234567890123 + i * 1000 * 60 /* i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> '1분' 단위로 증가 */,
    text: `${i + 1} mock text`,
  }))
  .reverse(); /* 최근 순서로 찍히도록 (SNS)  */

// const msgs = [
//   {
//     id: 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 /* 총 13자리 필요 */,
//     text, '1 mock text'
//   },
// ];

const MsgList = () => {
  // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값인 길이 50의 댓글배열은 '변하는' 요소가 됨 => state로 선언
  const [msgs, setMsgs] = useState(originalMsgs);
  // 수정할 글 id ('변동' 가능하므로 state로 선언)
  const [editingId, setEditingId] = useState(null);

  // 새글 생성하는 함수
  const onCreate = (text) => {
    // 새글 객체를 구성
    const newMsg = {
      // 이제는 map으로 얻은 id가 아닌 기존 댓글배열의 길이를 이용 (=> key와 text 옆에 나타나는 인덱스)
      id: msgs.length + 1,
      userId: getRamdomUserId(),
      timestamp: Date.now() /* 현재 날짜 및 시간 */,
      text: `${msgs.length + 1} ${text}`,
    };

    // 댓글배열에 setter 함수와 spread 연산자를 이용하여 새글 객체를 추가
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  // 글 수정하는 함수 (** input값 text와 함께 어느 글을 수정할 것인지 알려주는 id도 필요)
  const onUpdate = (id, text) => {
    // setter에 기존 댓글배열(msgs)을 받아와서 진행
    setMsgs((msgs) => {
      // targetIndex 구하기
      // 수정할 Item의 targetIndex를 findIndex(배열메서드)로 찾음
      // findIndex: 배열을 돌면서 특정 조건을 만족하는 item의 '인덱스'를 반환 (cf. filter: 특정 조건을 만족하는 item들만 골라 '새 배열'로 반환)
      const targetIndex = msgs.findIndex((msg) => msg.id === id);

      // (예외처리) 찾는 Index가 없으면(-1) 기존 배열 그대로 반환
      if (targetIndex < 0) return msgs;

      // ** 수정 진행하기
      // 기존 댓글배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열 생성 (copy)
      const newMsgs = [...msgs];

      // 새 배열에서 splice를 이용해 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 item(3항)을 넣음
      // 새로운 item: targetIndex에 있는 기존 내용들은 그대로 넣고 text만 새걸로 교체
      newMsgs.splice(targetIndex, 1, {
        ...msgs[targetIndex],
        text: text,
      });

      // 수정된 새 배열 반환 (-> setter에 들어가 msgs가 통째로 교체됨)
      return newMsgs;
    });
  };

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className='messages'>
        {msgs.map((x) => (
          // 여기서는 {...x}로 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
          // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
          // (수정이 시작되어 수정할 글의 id를 상위 state(editingId)로 가져오는 startEdit과, 렌더링 중인 item 중 editingId와 id가 일치하는 item이 있는지 여부를 알리는 isEditing은 따로 useState로 선언하지 x)
          <MsgItem key={x.id} {...x} onUpdate={onUpdate} startEdit={() => setEditingId(x.id)} isEditing={editingId === x.id} />
        ))}
      </ul>
    </>
  );
};

export default MsgList;
