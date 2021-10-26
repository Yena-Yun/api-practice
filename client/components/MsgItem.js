const MsgItem = ({ userId, timestamp, text }) => (
  <li className='messages__item'>
    <h3>
      {userId}{' '}
      <sub>
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
