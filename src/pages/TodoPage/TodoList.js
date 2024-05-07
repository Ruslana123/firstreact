
import {connect} from "react-redux";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";



function TodoList({todos}) {





    console.log(todos);

    return(
        <div>
            TodoList
            <TodoInput />


            <ul>
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} />

                )}

            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});



export default connect(mapStateToProps)(TodoList)