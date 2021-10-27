import express from 'express';
import cors from 'cors';
import messagesRoute from './routes/messages.js';
import usersRoute from './routes/users.js';

// express를 실행해서 app 만들기
const app = express();

// 기본 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); /* express에서 json 형태로 사용하겠다고 선언 */

// cors 설정
app.use(
  cors({
    origin: 'http://localhost:3000' /* 클라이언트 경로 */,
    credentials: true,
  })
);

// 예시
// GET 메서드로 '/'(route)에 핸들러(콜백) 실행 (하나하나의 route가 api 명령어가 됨)
// app.get('/', (req, res) => {
//   res.send('ok');
// });

const routes = [...messagesRoute, ...usersRoute];

// ** 반복되는 부분을 함수로 만들고 싶다면
// 반복되는 부분(forEach 이하)은 그대로 두고 바뀌는 기점이 되는 부분을 변수(routes)로 변경한 뒤 그 변수 안에 바뀔 요소들을 담는다
routes.forEach(({ method, route, handler }) => {
  // express로 만든 app이 객체인듯 -> 배열 내에서 method 키값([])으로 가져옴
  app[method](route, handler);
});

// 서버 경로
app.listen(8000, () => {
  console.log('server listening on 8000...');
});
