import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";

import {addTodo, fetchTodos} from "./store/slices/todosSlise"

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({text}))

  };

  useEffect(() => {
      dispatch(fetchTodos());
  }, [dispatch]);
  return (
      <div className="app">
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
        <TodoList />

      </div>
  );
}

export default App;
