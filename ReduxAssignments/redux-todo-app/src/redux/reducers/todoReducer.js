// src/redux/reducers/todoReducer.js

import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_TODO_COMPLETION } from '../actions/todoActions';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { ...action.payload, status: 'upcoming' }]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, ...action.payload.updatedTodo } : todo
                )
            };
        case TOGGLE_TODO_COMPLETION:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, status: todo.status === 'completed' ? 'upcoming' : 'completed' } : todo
                )
            };
        default:
            return state;
    }
};

export default todoReducer;
