import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import MsgInput from './MsgInput';
import MsgItem from './MsgItem';
import fetcher from '../fetcher';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

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
    query: { userId = '' },
  } = useRouter();

  // input값을 제출하면 새글 생성 또는 기존 글 수정 => 초기값 originalMsgs 배열은 '변하는' 요소가 됨 => state로 선언
  const [msgs, setMsgs] = useState([]);
  // 수정할 글 id도 '변하는' 요소이므로 state로 선언
  const [editingId, setEditingId] = useState(null);

  // ** 무한스크롤
  const fetchMoreEl = useRef(null);
  // useInfiniteScroll: intersectingObserver를 쓰는 hook
  // fetchMoreEl가 화면상에 노출됐을 때(= null이 아닐 때)는 intersecting이 true가 되고 그렇지 않을 땐 false
  const intersecting = useInfiniteScroll(fetchMoreEl);
  // 마지막 인덱스가 1일 때 빈 배열을 계속 호출하는 것 방지
  const [hasNext, setHasNext] = useState(true);

  // 새글 생성하기 함수
  const onCreate = async (text) => {
    // 서버에 text를 보내서 새 메시지를 생성하고 그 반환값을 res.data로 받아옴
    // text: input 입력값
    // userId: useRouter로 가져온 userId + 해당 userId에 따라 글 생성 시 작성자가 달라짐
    const newMsg = await fetcher('post', '/messages', { text, userId });

    // 서버에서 받아온 값이 없으면 에러처리
    if (!newMsg) throw Error('Something is wrong');

    // // 새글 객체를 구성
    // const newMsg = {
    //   // 이제는 map으로 얻은 i가 아닌 기존 msgs 배열(state)의 길이를 이용
    //   id: msgs.length + 1,
    //   userId: getRamdomUserId(),
    //   timestamp: Date.now() /* 현재 날짜 및 시간 */,
    //   text: `${msgs.length + 1} ${text}`,
    // };

    // setMsgs로 msgs 배열에 새 메시지 추가
    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  // 글 수정하는 함수 (** id 필요: 어느 글을 수정할 것인지)
  const onUpdate = async (text, id) => {
    // 수정된 메시지: 서버에 text와 userId를 보내서 수정된 메시지를 res.data로 받아옴
    const newMsg = await fetcher('put', `/messages/${id}`, { text, userId });

    // 서버에서 받아온 값이 없으면 에러처리
    if (!newMsg) throw Error('Something is wrong');

    // 수정된 메시지를 msgs 배열의 targetIndex번째에 추가
    setMsgs((msgs) => {
      // 수정할 글의 인덱스(targetIndex)
      // findIndex(배열메서드): 배열을 돌면서 특정 조건을 만족하는 요소의 '인덱스' 반환 (cf. filter: 특정 조건을 만족하는 요소들을 모아 '새 배열'로 반환)
      const targetIndex = msgs.findIndex((msg) => msg.id === id);

      // targetIndex가 없으면(-1) 기존 msgs 배열 그대로 반환
      if (targetIndex < 0) return msgs;

      // ** targetIndex로 배열 수정 진행
      // 기존 배열 복사: 기존 msgs 배열을 spread로 펼친 뒤 다시 []에 넣어 새로운 배열 사본 생성
      const newMsgs = [...msgs];

      // 사본 배열에 수정 진행: splice로 targetIndex부터 1개(deleteCount)를 지우고 그 자리에 새로운 요소(3항의 객체)을 넣음
      // (새로운 item - targetIndex번째 기존 내용들 그대로, text만 새 걸로 교체)
      // newMsgs.splice(targetIndex, 1, {
      //   ...msgs[targetIndex],
      //   text: text,
      // });

      // 배열에 splice로 targetIndex부터 1개를 지우고 그 자리에 수정된 메시지(newMsg) 추가
      newMsgs.splice(targetIndex, 1, newMsg);

      // 수정된 새 배열 반환 (=> setMsgs에 들어가지면서 msgs 통째로 교체)
      return newMsgs;
    });

    // 수정이 끝나면 실행 (editingId를 다시 null로 바꿈)
    doneEdit();
  };

  // 글 삭제하는 함수
  const onDelete = async (id) => {
    // 삭제하는 글의 id 외에 해당 글의 'userId'도 서버에 보냄 => 이때 'params'로 보내고, 서버에서는 query로 받음
    // { params: { userId } }: url 뒤에 ?userId=roy에서 roy 부분 (url에 `/messages/${id}?userId={userId}`라고 보내도 동일)
    const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } });
    // console.log(typeof receivedId, typeof id); // number, string (=> messages.json에서 id가 문자열로 되어있음)

    setMsgs((msgs) => {
      // ** 삭제한 내용이 뷰에 반영이 안되는 경우 --> type이 안 맞는 것일 수 있음 (콘솔로 두 아이디를 출력해보고 한쪽을 다른 쪽에 맞춰주기)
      const targetIndex = msgs.findIndex((msg) => msg.id === String(receivedId));
      if (targetIndex < 0) return msgs;

      // ** 삭제 진행 (item 추가 없는 거 빼고 수정 과정과 동일)
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  // 수정이 완료됨을 알리는 함수: editingId를 null로 바꿈 (=> isEditing이 false로 변환되어 기존의 text를 대체하던 MsgInput 뷰가 사라지고 수정된 text로 다시 교체)
  const doneEdit = () => setEditingId(null);

  // ** 서버에서 메시지를 불러오는 함수 (originalMsgs 필요없어짐)
  const getMessages = async () => {
    // msgs[msgs.length - 1]이 처음에는 없을 수도 있어서 뒤에 '?' 붙이고 || '' (cursor가 빈 값으로 갈 수 있게끔) 예외처리
    const newMsgs = await fetcher('get', '/messages', { params: { cursor: msgs[msgs.length - 1]?.id || '' } });

    // 마지막 인덱스가 1일 때 뒤에 빈 배열 계속 받아오는 것 방지
    // get으로 받아온 메시지가 없으면 hasNext를 false로 전환
    if (newMsgs.length === 0) {
      setHasNext(false);
      // 더 이상 추가해줄 데이터가 없으므로 getMessages 종료
      return;
    }

    setMsgs((msgs) => [...msgs, ...newMsgs]);
  };

  // // 최초 페이지 접속 시 무조건 1번 실행
  // // ** useEffect 내에서는 async/await를 직접 호출하지 않아야 함
  // // => await를 호출하는 부분을 함수(getMessages()로 따로 빼고 거기에 async도 붙여주기
  // useEffect(() => {
  //   // 전체 메시지 불러오기
  //   getMessages();
  // }, []);

  // useEffect 여러 개 사용 가능
  useEffect(() => {
    // intersecting과 hasNext가 둘 다 true일 때만 getMessages() 호출
    if (intersecting && hasNext) getMessages();
    // intersecting이 바뀔 때마다 실행
  }, [intersecting]);

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className='messages'>
        {msgs.map((x) => (
          // {...x}로 객체의 각 key를 전부 넣고 MsgItem에서 쓸 때는 일부만 골라서 사용 가능
          // '수정'에 필요한 onUpdate, startEdit, isEditing 요소들을 props로 미리 넣어준다.
          // 수정 실행 시, 수정할 글의 id를 editingId에 설정하는 startEdit과, 렌더링 중인 요소 중 editingId와 id가 일치하는 요소가 있는지를 알려주는 isEditing은 여기서 바로 처리 (따로 useState로 선언하지 않음)
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

      {/* 이 div가 화면상에 나타났을 때 다음 데이터를 불러오도록 함 (무한스크롤) */}
      <div ref={fetchMoreEl} />
    </>
  );
};

export default MsgList;
