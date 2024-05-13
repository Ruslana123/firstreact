import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            return data;
            console.log(data)
        } catch (error) {
            return rejectWithValue(error.message);
        }


    }
);

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {

            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
            state.status = "loading";
            state.error = null;

            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "resolved";
                state.todos = action.payload;
            })

            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;

            });

    }

});

export const {addTodo, removeTodo, toggleTodoComplete} = todosSlice.actions;
export default todosSlice.reducer;