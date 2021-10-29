import { v4 } from 'uuid';
import { readDB, writeDB } from '../dbController.js';

// db에서 messages를 읽어옴 (여기서 'messages'는 target값)
const getMsgs = () => readDB('messages');
// 변경된 messages 배열(data)을 db에 저장
const setMsgs = (data) => writeDB('messages', data);

const messagesRoute = [
  {
    // GET MESSAGES (전체 메시지 조회)
    method: 'get',
    route: '/messages',
    handler: (req, res) => {
      const msgs = getMsgs();
      res.send(msgs);
    },
  },
  {
    // GET MESSAGE (특정 메시지 조회)
    method: 'get',
    route: '/messages/:id',
    handler: ({ params: { id } }, res) => {
      // 못 찾을 때를 대비해 try/catch
      try {
        const msgs = getMsgs();
        // find(배열메서드): 조건에 일치하는 요소 하나만 가져옴
        const msg = msgs.find((m) => m.id === id);
        if (!msg) throw Error('not found');
        res.send(msg);
      } catch (err) {
        res.status(404).send({ error: err });
      }
    },
  },
  {
    // CREATE MESSAGE
    method: 'post',
    route: '/messages',
    // req에는 body, params, query가 있는데 그중에 body 사용
    handler: ({ body }, res) => {
      // db에서 기존 배열 읽어오기
      const msgs = getMsgs();

      // 새 메시지 생성
      const newMsg = {
        id: v4() /* uuid로 고유한 id값 생성 */,
        text: body.text,
        userId: body.userId,
        timestamp: Date.now(),
      };

      msgs.unshift(newMsg); // 기존 배열에 새 메시지 추가
      setMsgs(msgs); // 새 메시지가 추가된 배열을 setMsgs를 통해 DB에 write

      // post에 대한 응답은 만들어진 새 메시지 하나만 보내줌
      res.send(newMsg);
    },
  },
  {
    // UPDATE MESSAGE
    method: 'put',
    route: '/messages/:id',
    handler: ({ body, params: { id } }, res) => {
      // 수정 중에 서버와 클라이언트 간 id가 안 맞을 수도 있는 경우를 try/catch로 대비
      try {
        // db에서 기존 배열 읽어오기
        const msgs = getMsgs();

        // 수정할 글의 인덱스
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        console.log(targetIndex);

        // targetIndex가 없는 경우 (-1)
        if (targetIndex < 0) throw '메시지가 없습니다.';
        // targetIndex의 userId가 body에 들어오는 userId와 다른 경우
        if (msgs[targetIndex].userId !== body.userId) throw '사용자가 다릅니다.';

        // (위의 에러들을 모두 통과한 경우) 새 메시지 생성
        // (text만 교체하고 나머지는 그대로 유지)
        const newMsg = {
          ...msgs[targetIndex],
          text: body.text,
        };

        // 기존 배열 수정: splice로 새 메시지 삽입
        msgs.splice(targetIndex, 1, newMsg);
        // 수정된 배열을 setMsgs에 넣어 db에 저장
        setMsgs(msgs);

        // 응답은 만들어진 새로 변경된 메시지를 보내줌
        res.send(newMsg);
      } catch (err) {
        console.error('수정에 실패하였습니다');
        res.status(500).send({ error: err });
      }
    },
  },
  {
    // DELETE MESSAGE
    method: 'delete',
    route: '/messages/:id',
    // params의 {id}: MsgList fetcher의 `/messages/${id}` 뒤에 붙은 id
    // query의 {userId}: MsgList fetcher의 params로 넘어온 userId
    handler: ({ params: { id }, query: { userId } }, res) => {
      try {
        const msgs = getMsgs();
        // 삭제할 글의 인덱스
        const targetIndex = msgs.findIndex((msg) => msg.id === id);

        if (targetIndex < 0) throw '메시지가 없습니다.';
        if (msgs[targetIndex].userId !== userId) throw '사용자가 다릅니다.';

        // (위의 에러들을 모두 통과한 경우)
        // 기존 배열 수정: splice로 삭제
        msgs.splice(targetIndex, 1);

        // 삭제가 완료된 배열을 setMsgs에 넣어 db에 저장
        setMsgs(msgs);

        // 응답은 id 반환 (해당 id의 글이 삭제됐다는 의미) => MsgList에서 receivedId로 받음
        res.send(id);
      } catch (err) {
        // 삭제 실패 시에는 500번 에러를 던지고 err 내용을 보냄
        res.status(500).send({ error: err });
      }
    },
  },
];

export default messagesRoute;
