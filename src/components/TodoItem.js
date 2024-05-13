import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../store/slices/todosSlise";

const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))}/>
            <span>{title}</span>
            <button className="delete" onClick={() => dispatch(removeTodo({id}))}>Delete</button>
        </li>
    )
}

export default TodoItem