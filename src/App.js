import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addNewTodo, fetchTodos} from "./store/slices/todosSlise"

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const {status, error} = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addNewTodo(text))

  };

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);

  return (
      <div className="app">
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
        {status === "loading" && <h2>Loading...</h2>}
        {error && <h2>An error occured: {error}</h2>}
        <TodoList />

      </div>
  );
}

export default App;
