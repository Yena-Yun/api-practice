import MsgItem from './MsgItem';

// 유저아이디 배열
const UserIds = ['roy', 'jay'];

// 유저아이디 (둘 중에 하나) 랜덤하게 넣기
// Math.round 처리 -> 0 또는 1
const getRamdomUserId = () => UserIds[Math.round(Math.random())];

// Array(50): 공간이 50개인 배열 생성
// .fill(0): 50개의 공간을 아무 값으로나 채움
// .map(val, i): map으로 꺼내는 val이 중요하지 않으면 '_'로 처리 (여기서는 i만 사용하므로)
// ()(return) 안에 {} (=> 객체 반환)
const msgs = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    userId: getRamdomUserId(),
    timestamp: 1234567890123 + i * 1000 * 60 /* i를 millisecond로 바꾼 뒤 다시 60을 곱함 -> '1분' 단위로 증가 */,
    text: `${i + 1} mock text`,
  }))
  .reverse(); /* SNS니까 최근 순서로 찍히도록 */

// const msgs = [
//   {
//     id: 1,
//     userId: getRamdomUserId(),
//     timestamp: 1234567890123 /* 총 13자리 필요 */,
//     text, '1 mock text'
//   },
// ];

const MsgList = () => (
  <ul className='messages'>
    {msgs.map((x) => (
      <MsgItem key={x.id} {...x} />
    ))}
  </ul>
);

export default MsgList;