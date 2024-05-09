import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlise"

export default configureStore({
    reducer: {
        todos: todosReducer,

    }
})