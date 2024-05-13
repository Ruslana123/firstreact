import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlise"

export const store =  configureStore({
    reducer: {
        todos: todosReducer,

    }
})