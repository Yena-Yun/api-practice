import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MsgInput from './MsgInput';
import MsgItem from './MsgItem';
import fetcher from '../fetcher';

// 유저아이디 배열
// const UserIds = ['roy', 'jay'];

// 유저아이디 (둘 중에 하나) 랜덤하게 넣기
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
    query: { userId = '' },
  } = useRouter();

  // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값인 길이 50의 댓글배열은 '변하는' 요소가 됨 => state로 선언
  const [msgs, setMsgs] = useState([]);
  // 수정할 글 id ('변동' 가능하므로 state로 선언)
  const [editingId, setEditingId] = useState(null);

  // 새글 생성하는 함수
  const onCreate = async (text) => {
    // 서버에 작성된 새 글을 보냄
    // text(input 입력값)가 들어오면 주소창 query(?userId='')에 붙은 userId(roy, jay)에 따라 글 생성 시 작성자가 달라짐 (예: url이 http://localhost:3000/?userId=roy일 때 댓글 쓰면 작성자가 roy로 뜸 )
    const newMsg = await fetcher('post', '/messages', { text, userId });

    // (예외처리) 작성된 내용이 없으면 throw error
    if (!newMsg) throw Error('Something is wrong');

    // // 새글 객체를 구성
    // const newMsg = {
    //   // 이제는 map으로 얻은 id가 아닌 기존 msgs 배열의 길이를 이용
    //   id: msgs.length + 1,
    //   userId: getRamdomUserId(),
    //   timestamp: Date.now() /* 현재 날짜 및 시간 */,
    //   text: `${msgs.length + 1} ${text}`,
    // };

    // msgs 배열에 setter 함수와 spread 연산자를 이용하여 새글 객체를 추가
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  // 글 수정하는 함수 (** input값 text와 함께 어느 글을 수정할 것인지 알려주는 id 필요)
  const onUpdate = async (text, id) => {
    // 서버를 통해 수정된 새 메시지로 교체(put)
    const newMsg = await fetcher('put', `/messages/${id}`, { text, userId });

    // (예외처리) 서버에 보낼 메시지가 없다면 throw error
    if (!newMsg) throw Error('Something is wrong');

    // setter에 기존 msgs 배열을 받아와서 진행
    setMsgs((msgs) => {
      // targetIndex 구하기
      // 수정할 Item의 targetIndex를 findIndex(배열메서드)로 찾음
      // findIndex: 배열을 돌면서 특정 조건을 만족하는 item의 '인덱스'를 반환 (cf. filter: 특정 조건을 만족하는 item들만 골라 '새 배열'로 반환)
      const targetIndex = msgs.findIndex((msg) => msg.id === id);

      // (예외처리) 찾는 Index가 없으면(-1) 기존 배열 그대로 반환
      if (targetIndex < 0) return msgs;

      // ** 수정 진행하기
      // 1. 기존 배열 복사: 기존 msgs 배열을 spread로 펼친 뒤 다시 []에 넣어 새 배열 생성
      const newMsgs = [...msgs];

      // 2. 복사한 배열로 수정: splice를 이용해 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 item(3항)을 넣음
      // (새로운 item - targetIndex에 있는 기존 내용들은 그대로 넣고 text만 새걸로 교체)
      // newMsgs.splice(targetIndex, 1, {
      //   ...msgs[targetIndex],
      //   text: text,
      // });

      // 서버에서 온 newMsg 데이터를 넣어줌
      newMsgs.splice(targetIndex, 1, newMsg);

      // 3. 수정된 새 배열 반환 (-> setter에 들어가 msgs 통째로 교체)
      return newMsgs;
    });

    // 수정이 끝나면 실행 (editingId를 다시 null로 바꿈)
    doneEdit();
  };

  const onDelete = async (id) => {
    // 삭제하는 글의 id 외에 해당 글의 'userId'도 서버에 보내야 함 => 이때 'params'로 보내고 받는 쪽에서는 query로 받음
    // { params: { userId } }: url 뒤에 ? userId = roy 라고 들어가는 부분
    // params: { userId }를 빼고 `/messages/${id}?userId={userId}`라고 보내도 동일
    const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } });
    console.log(typeof receivedId, typeof id); // number, string (=> messages.json에서 현재 id가 문자열로 되어있어서)

    setMsgs((msgs) => {
      // 삭제한 내용이 뷰에 반영이 안되는 경우 --> id의 type이 안 맞는 것일 수 있음 (콘솔로 두 아이디를 출력해보고 한쪽을 다른 쪽에 맞춰준다)
      const targetIndex = msgs.findIndex((msg) => msg.id === String(receivedId));
      if (targetIndex < 0) return msgs;

      // ** 삭제 진행 (수정에서 item 추가하는 부분만 없음)
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  // 수정이 완료됨을 알려줌: editingId를 null로 바꿈 => isEditing이 false로 전환 => 기존에 있던 text를 대체하던 MsgInput 뷰가 사라지고 수정된 text로 다시 대체
  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    const msgs = await fetcher('get', '/messages');
    setMsgs(msgs);
  };

  // 최초 페이지 로드 시에만 실행
  // useEffect 내에서는 async/await를 직접 호출하지 않아야 함 => await를 호출하는 부분을 함수로 따로 빼서 거기에 async도 붙여주기
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className='messages'>
        {msgs.map((x) => (
          // {...x}로 객체의 각 key를 전부 넣고 MsgItem에서 쓸 때는 일부만 골라 사용 가능
          // 수정에 필요한 onUpdate, startEdit, isEditing을 미리 넣어줌
          // (수정 버튼이 눌리면 수정할 글의 id를 editingId에 설정하는 startEdit과, 렌더링 중인 item 중 editingId와 id가 일치하는 item이 있는지를 알려주는 isEditing은 따로 useState로 선언하지 않고 jsx에서 바로 처리)
          <MsgItem
            key={x.id}
            {...x}
            onUpdate={onUpdate}
            startEdit={() => setEditingId(x.id)}
            isEditing={editingId === x.id}
            onDelete={() => onDelete(x.id)} /* onDelete는 여기서 바로 실행 */
            myId={userId}
          />
        ))}
      </ul>
    </>
  );
};

export default MsgList;
