import React, {useState} from 'react';
import TodoList from "./TodoList";

function Todos({todos, onCreate, onToggle}) {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        // 새로고침 방지
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요..."
                    value={text}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList
                todos={todos}
                onToggle={onToggle}
            />
        </div>
    );
}

export default React.memo(Todos);