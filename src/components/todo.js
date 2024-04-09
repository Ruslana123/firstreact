import React from "react";
import TodoItem from "./Todoitem";
import "./todos.css";



class  Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "first todo",
                    description: "Creat first todo dnfnfnfnfgnx",
                },
                {
                    id: 2,
                    title: "Second todo",
                    description: "Creat second todo",
                },
                {
                    id: 3,
                    title: "Third todo",
                    description: "Creat third todo",
                },
                {
                    id: 4,
                    title: "Forth todo",
                    description: "Creat forth todo",
                },
                {
                    id: 5,
                    title: "Fifth todo",
                    description: "Creat fifth todo",
                }


            ]

            newTodo: "",



        }


        this.deleteTodoById = this.deleteById.bind(this);
        this.addNewTodo = this.hendleAddTodo.bind(this);

    }

    deleteById(id)  {
        console.log(id);
        this.setState({
            todos: this.state.todos.filter(todo => todo.id != id)
        })
    }

    hendleAddTodo () {
         const newTodo = {
             title: this.state.newTodo,
             description: "Description",
             id: this.state.todos.length,
         };

         this.setState( {
             newTodo: "",
             todos: [...this.state.todos, newTodo]
         })
    }



    render() {
        return (
            <div className="todo-wrapper">
                <div className="todo-header">Todo</div>
                <input onChange={(event) => {
                    console.log(event.target.value);
                }}
                />
                <div className="add-todo" onClick={this.addNewTodo}>Add new todo</div>
                {this.state.todos.map(todo=> {
                    return(
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodoById = {this.deleteTodoById}
                        />
                );
                })}

            </div>
        )
    }
}

export default Todo;
