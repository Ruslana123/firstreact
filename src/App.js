import {useState} from "react";
import {useDispatch} from "react-redux";

import {addTodo} from "./store/slices/todosSlise"

import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
      dispatch(addTodo({text}))

  };
  return (
    <div className="app">
      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
      <TodoList />

    </div>
  );
}

export default App;
