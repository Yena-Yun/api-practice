const MsgItem = ({ userId, timestamp, text }) => (
  <li className='messages__item'>
    <h3>
      {userId}{' '}
      <sub>
        {/* 상위에서 timestamp(실제 날짜값)을 구하고 하위에서는 날짜의 형태만 잡아주기 */}
        {new Date(timestamp).toLocaleString('ko-KR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true /* 오전 오후로 구분 */,
        })}
      </sub>
    </h3>

    {text}
  </li>
);

export default MsgItem;
