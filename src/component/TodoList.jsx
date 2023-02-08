import Button from './Button';

function TodoList({ list, deleteTodo, doneTodo }) {
    return (
        <div key={list.num} className="todo">
            <span className="todo_title">{list.title}</span>
            <span className="todo_content">{list.content}</span>
            <div className="todo_btn">
                {/* 삭제 클릭시 num 인자값으로 넘기기! */}
                {/* <button className="delete_btn" onClick={() => deleteTodo(list.num)}>삭제하기</button> */}
                <Button className={'delete_btn'} onClick={() => deleteTodo(list.num)} name={'삭제하기'}></Button>
                {/* 완료 클릭시 num 인자값으로 넘기기! */}
                <Button className={'done_btn'} onClick={() => doneTodo(list.num)} name={'완료'}></Button>
            </div>
        </div>
    );
}
export default TodoList;
