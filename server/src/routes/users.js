import { readDB, writeDB } from '../dbController.js';

const getUsers = () => readDB('users');
const setUsers = (data) => writeDB('users', data);

const usersRoute = [
  {
    // GET USERS (전체 유저 조회)
    method: 'get',
    route: '/users',
    handler: (req, res) => {
      const users = getUsers();
      res.send(users);
    },
  },
  {
    // GET USER (특정 유저 조회)
    method: 'get',
    route: '/users/:id',
    handler: ({ params: { id } }, res) => {
      // 못 찾을 때를 대비해 try/catch
      try {
        const users = getUsers();
        // users.json는 배열이 아니라 객체로 되어 있기 때문에 바로 id로 접근 가능
        const user = users[id];
        if (!user) throw Error('사용자가 없습니다.');
        res.send(user);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    // CREATE USER
    method: 'post',
    route: '/users',
    // req에는 body, params, query가 있는데 그중에 body 사용
    handler: ({ body }, res) => {
      const users = getUsers();
      // 새 유저 생성
      const newUser = {
        nickname: body.nickname,
      };
      users.unshift(newUser); // 기존 배열에 새 메시지 추가
      setUsers(users); // 새 메시지가 추가된 배열을 setMsgs를 통해 DB에 write

      // post에 대한 응답은 만들어진 새 메시지 하나만 보내줌
      res.send(newUser);
    },
  },
  {
    // UPDATE USER
    method: 'put',
    route: '/users/:id',
    handler: ({ body, params: { id } }, res) => {
      // 수정 중에 서버와 클라이언트 간 id가 안 맞을 수도 있는 경우를 try/catch로 대비
      try {
        const users = getUsers();
        const targetIndex = users.findIndex((user) => user.id === id);

        if (targetIndex < 0) throw '유저가 없습니다.';
        if (users[targetIndex].id !== body.id) throw '유저가 다릅니다.';

        // (위의 에러들을 모두 통과한 경우) 새 유저 생성
        const newUser = {
          ...user[targetIndex],
          nickname: body.nickname,
        };

        // 기존 배열 수정: splice로 새 메시지 삽입
        users.splice(targetIndex, 1, newUser);
        // 수정된 배열을 setMsgs에 넣어 db에 저장
        setUsers(users);

        // 응답은 newUser 새로 변경된 메시지를 보내줌
        res.send(newUser);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    // DELETE USER
    method: 'delete',
    route: '/users/:id',
    handler: ({ body, params: { id } }, res) => {
      try {
        const users = getUsers();
        const targetIndex = users.findIndex((user) => user.id === id);

        if (targetIndex < 0) throw '유저가 없습니다.';
        if (users[targetIndex].id !== body.id) throw '유저가 다릅니다.';

        // (위의 에러들을 모두 통과한 경우)
        // 기존 배열 수정: splice로 삭제
        users.splice(targetIndex, 1);
        // 수정된 배열을 setUsers에 넣어 db에 저장
        setUsers(users);

        // 응답은 id만 넘겨주기 (삭제가 성공했을 때 성공했다는 의미로 '이 id가 지워졌다'고 알려줌)
        res.send(id);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
];

export default usersRoute;
