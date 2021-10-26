import MsgInput from './MsgInput';

const MsgItem = ({ id, userId, timestamp, text, onUpdate, isEditing, startEdit, onDelete }) => (
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

    {/* isEditing이 true가 되면 text 대신 MsgInput창 렌더링 */}
    {/* MsgList에서 map으로 꺼내져 전달된 id와 함께 mutate props에 onUpdate 전달 => text와 id가 함께 mutate에 들어가면서 onCreate 대신 onUpdate 함수가 실행됨 */}
    {isEditing ? (
      <>
        <MsgInput mutate={onUpdate} text={text} id={id} />
      </>
    ) : (
      text
    )}

    <div className='messages__buttons'>
      {/* 수정버튼 클릭 시 startEdit 실행(활성화) => map으로 돌던 x(item) 중 수정버튼이 눌린 x의 id가 editingId에 들어감 => editingId와 현재 차례에서 돌고 있던 x의 id가 일치하면 isEditing이 true가 되면서 text 대신 MsgInput창 렌더링*/}
      <button onClick={startEdit}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  </li>
);

export default MsgItem;
