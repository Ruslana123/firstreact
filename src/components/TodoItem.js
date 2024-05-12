import {useDispatch} from "react-redux";
import {deleteTodo, toggleStatus} from "../store/slices/todosSlise";

const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleStatus(id))}/>
            <span>{title}</span>
            <button className="delete" onClick={() => dispatch(deleteTodo(id))}>Delete</button>
        </li>
    )
}

export default TodoItem