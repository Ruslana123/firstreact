import React from "react";
import "./todos.css";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todo, deleteTodoById} = this.props;
        return(
            <div className="todo-item">
                <div className="todo-title">{todo.title}</div>
                <div className="todo-description">{todo.description}</div>
                <div className="todo-delete"
                     onClick={() => deleteTodoById(todo.id)}>Delete</div>

            </div>

        )
    }
}

export default TodoItem;