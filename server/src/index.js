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

// 서버의 최상단(index)에 routes 연결
// ** 반복되는 부분을 함수로 만들고 싶다면, 반복되는 부분(forEach 이하)은 그대로 두고, 바뀌는 기점이 되는 부분을 변수(routes)로 변경한 뒤 그 변수의 배열 안에 바뀌는 요소들(messagesRoute, usersRoute, ...) 담기
const routes = [...messagesRoute, ...usersRoute];

// routes 배열에서 각 json 파일에서 내보낸 두 변수(messagesRoute(messages.js)와 usersRoute(users.js))를 돌면서
routes.forEach(({ method, route, handler }) => {
  // app 객체에 각 route의 method, route, handler를 전달
  app[method](route, handler);
});

// 서버 경로
app.listen(8000, () => {
  console.log('server listening on 8000...');
});
