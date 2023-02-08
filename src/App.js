import { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import DoneTodoList from './component/DoneTodoList';
import Button from './component/Button';

function App() {
    const [todoList, setTodoList] = useState([
        {
            num: 1,
            title: '아아악',
            content: '아아아아아악',
            done: 0,
        },
        {
            num: 2,
            title: '으으으으으으ㅡ악',
            content: '으으응으으으으으악',
            done: 0,
        },
    ]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleChange = (e) => {
        setTitle(e.target.value);
    };
    const contentChange = (e) => {
        setContent(e.target.value);
    };
    // 추가하기
    const addTodo = () => {
        // input값 비워져있으면 추가 안되게!!
        if (title != '' && content != '') {
            const newTodo = {
                // 난수 발생시켜주기
                num: Date.now(),
                title: title,
                content: content,
                done: 0,
            };
            setTodoList([...todoList, newTodo]);
            // input 비워주기
            setTitle('');
            setContent('');
        }
    };
    // 삭제하기
    const deleteTodo = (num) => {
        // filter로 num꺼빼고 화면에 보여주기!!
        const deleteTodoList = todoList.filter((list) => list.num != num);
        setTodoList([...deleteTodoList]);
    };

    // 완료하기
    const doneTodo = (num) => {
        // 안에 값 바꾸기!!!!
        setTodoList(todoList.map((list) => (list.num == num ? { ...list, done: 1 } : list)));

        //console.log(todoList);
    };
    // 취소하기
    const returnTodo = (num) => {
        /*
        const returnTodoList = todoList.filter((list) => list.num == num);
        returnTodoList.map((list) => {
            list.done = 0;
        });
        setTodoList([...todoList, returnTodoList]);
        */
        setTodoList(todoList.map((list) => (list.num == num ? { ...list, done: 0 } : list)));
    };
    return (
        <div className="App">
            <div className="header">
                <div>My Todo List</div>
                <div>React</div>
            </div>
            <div className="addArea">
                <div className="addLeft">
                    <div className="add_title_content">
                        <span>제목</span>
                        <input value={title} onChange={titleChange} />
                    </div>
                    <div className="add_title_content">
                        <span>내용</span>
                        <input value={content} onChange={contentChange} />
                    </div>
                </div>
                <div className="addRight">
                    {/* <button onClick={addButton}>추가하기</button> */}
                    <Button onClick={addTodo} name={'추가하기'}></Button>
                </div>
            </div>
            <div className="working">Working..🔥</div>
            <div className="todo_area">
                {/* todo는 리스트니깐 map으로 꺼낼수있지요?? */}
                {todoList
                    .filter((list) => list.done == 0)
                    .map((list, i) => {
                        return <TodoList key={i} list={list} deleteTodo={deleteTodo} doneTodo={doneTodo}></TodoList>;
                    })}
            </div>

            <div className="done">Done..!🎉</div>
            <div className="todo_area">
                {todoList
                    .filter((list) => list.done == 1)
                    .map((list, i) => {
                        return <DoneTodoList key={i} list={list} deleteTodo={deleteTodo} returnTodo={returnTodo}></DoneTodoList>;
                    })}
            </div>
        </div>
    );
}

export default App;
