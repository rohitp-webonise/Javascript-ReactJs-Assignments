// src/redux/actions/todoActions.js

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO_COMPLETION = 'TOGGLE_TODO_COMPLETION';

export const addTodo = (todo) => (dispatch) => {
    dispatch({
        type: ADD_TODO,
        payload: todo
    });
};

export const removeTodo = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_TODO,
        payload: id
    });
};

export const updateTodo = (id, updatedTodo) => (dispatch) => {
    dispatch({
        type: UPDATE_TODO,
        payload: { id, updatedTodo }
    });
};

export const toggleTodoCompletion = (id) => (dispatch) => {
    dispatch({
        type: TOGGLE_TODO_COMPLETION,
        payload: id
    });
};
