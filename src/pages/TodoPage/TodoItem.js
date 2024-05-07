import {connect} from "react-redux";
import {deleteTodo} from "../../store/actions";

function TodoItem({todo, deleteTodo}) {
    const handleDeleteTodo = (id) => {
        deleteTodo(id);

    }
    return (

        <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>

    )
}

const mapDispatchToProps = {

    deleteTodo,
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);