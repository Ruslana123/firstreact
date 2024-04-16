import React, { useState } from 'react';

import "./todo.css";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed}
            } else {
                return todo;
            }

        }));
    }

    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    return (
        <div>
            <h2>Що треба зробити</h2>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

function TodoItem({todo, toggleTodo}) {
    const completedTodo = todo.completed ? "completed" : "";
    return (
        <li className={completedTodo} onClick={() => toggleTodo(todo.id)}>
            {todo.text}
        </li>
    )
}

function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const hendleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) {
            return;
        } else {
            addTodo(text);
            setText("");
        }
    }
    const hendleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form onSubmit={hendleSubmit}>
            <input type="text" value={text} placeholder="Введіть нову справу" onChange={hendleChange}/>
            <button type="submit">Додати</button>
        </form>

    )
}

export default TodoList;