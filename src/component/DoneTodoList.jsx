import Button from './Button';

function doneTodoList({ list, deleteTodo, returnTodo }) {
    return (
        <div key={list.num} className="todo">
            <span className="todo_title">{list.title}</span>
            <span className="todo_content">{list.content}</span>
            <div className="todo_btn">
                <Button className={'delete_btn'} onClick={() => deleteTodo(list.num)} name={'삭제하기'}></Button>
                <Button className={'done_btn'} onClick={() => returnTodo(list.num)} name={'취소'}></Button>
            </div>
        </div>
    );
}
export default doneTodoList;
