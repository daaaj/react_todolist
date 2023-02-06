function AddTodo({ addTodo, children }) {
    return <button onClick={addTodo}>{children}</button>;
}
export default AddTodo;
