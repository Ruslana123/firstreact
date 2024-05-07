import {ADD_TODO, REMOVE_TODO} from "./actions";

const initialState = {
    todos: [
        {
           id: 1,
           title: "First todo",
        },
        {
            id: 2,
            title: "Second todo",
        }
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: new Date(),
                        title: action.payload.title
                    }
                ]
            };
        case  REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.payload.id
                })
            }
        default:
            return state

    }

}

export default reducer;