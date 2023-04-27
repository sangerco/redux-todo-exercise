const INITIAL_STATE = {
    todos: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'ADD_TODO') {
        return {
            ...state, 
            todos: [
                ...state.todos, {...action.todo}
            ]
        };
    }
    if (action.type === 'DELETE_TODO') {
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id)
        };
    }

    return state;
}

export default rootReducer;