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
// GET 메서드로 '/'(route, 경로)에 핸들러(콜백함수) 실행 (하나하나의 route가 api 명령어가 됨)
// app.get('/', (req, res) => {
//   res.send('ok');
// });

// 서버의 최상단(index.js)에 route(messages.js, users.js) 연결
// ** 반복되는 부분을 함수로 만들고 싶다면
// 반복되는 부분(forEach 이하)은 그대로 두고, 바뀌는 기점이 되는 부분을 변수(routes)로 변경하고, 그 변수 안에 바뀌어서 각각 들어갈 요소들(messagesRoute, usersRoute) 담기
const routes = [...messagesRoute, ...usersRoute];

// routes 배열을 돌면서 (routes = messagesRoute 또는 usersRoute, 각각의 경우도 '배열')
routes.forEach(({ method, route, handler }) => {
  /* 배열 안의 각 객체당 method, route, handler 키에 해당하는 value들을 props로 받아옴 */

  // app 객체에 각 route의 method, route, handler 키의 value값을 전달
  app[method](route, handler);
});

// 서버 경로
app.listen(8000, () => {
  console.log('server listening on 8000...');
});
