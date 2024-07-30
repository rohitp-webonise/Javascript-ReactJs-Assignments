// src/redux/actions/todoActions.js

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO_COMPLETION = 'TOGGLE_TODO_COMPLETION';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
});

export const updateTodo = (id, updatedTodo) => ({
    type: UPDATE_TODO,
    payload: { id, updatedTodo }
});

export const toggleTodoCompletion = (id) => ({
    type: TOGGLE_TODO_COMPLETION,
    payload: id
});
