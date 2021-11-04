import MsgInput from './MsgInput';

const MsgItem = ({ id, userId, timestamp, text, onUpdate, isEditing, startEdit, onDelete, myId }) => (
  <li className='messages__item'>
    <h3>
      {userId}{' '}
      <sub>
        {/* 상위 컴포넌트 MsgList에서 timestamp(실제 날짜값)을 구했고, 하위 MsgItem에서는 날짜의 형태만 잡아주기 */}
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

    {/* isEditing이 true가 되면 text 대신 MsgInput창 렌더링 */}
    {/* MsgList에서 map으로 꺼내져 전달된 id와 함께 mutate에 onUpdate 전달 */}
    {isEditing ? (
      <>
        <MsgInput mutate={onUpdate} text={text} id={id} />
      </>
    ) : (
      text
    )}

    {/* url에 적힌 userId와 마우스를 올린 글의 userId가 같을 때 수정/삭제 버튼 나타남 */}
    {myId === userId && (
      <div className='messages__buttons'>
        {/* 수정버튼 클릭 시 startEdit(함수) 실행 
          => map으로 돌던 x 중 수정버튼이 눌린 x의 id가 editingId에 설정됨 
          => 현재 차례에서 돌고 있던 x의 id가 editingId와 일치하면 isEditing이 true로 변환
          => text 대신 MsgInput창 렌더링 */}
        <button onClick={startEdit}>수정</button>
        <button onClick={onDelete}>삭제</button>
      </div>
    )}
  </li>
);

export default MsgItem;
