function TodoList({ list, deleteTodo, doneTodo }) {
    return (
        <div key={list.num} className="todo">
            <span className="todo_title">{list.title}</span>
            <span className="todo_content">{list.content}</span>
            <div className="todo_btn">
                {/* 삭제 클릭시 num 인자값으로 넘기기! */}
                <button className="delete_btn" onClick={() => deleteTodo(list.num)}>
                    삭제하기
                </button>
                {/* 완료 클릭시 num 인자값으로 넘기기! */}
                <button className="done_btn" onClick={() => doneTodo(list.num)}>
                    완료
                </button>
            </div>
        </div>
    );
}
export default TodoList;
