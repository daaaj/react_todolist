function doneTodoList({ list, deleteTodo, returnTodo }) {
    return (
        <div key={list.num} className="todo">
            <span className="todo_title">{list.title}</span>
            <span className="todo_content">{list.content}</span>
            <div className="todo_btn">
                <button className="delete_btn" onClick={() => deleteTodo(list.num)}>
                    삭제하기
                </button>
                <button className="done_btn" onClick={() => returnTodo(list.num)}>
                    취소
                </button>
            </div>
        </div>
    );
}
export default doneTodoList;
