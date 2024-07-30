// src/redux/slices/todoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ ...action.payload, status: 'upcoming' });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, updatedTodo } = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.todos[index] = { ...state.todos[index], ...updatedTodo };
            }
        },
        toggleTodoCompletion: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.status = todo.status === 'completed' ? 'upcoming' : 'completed';
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo, toggleTodoCompletion } = todoSlice.actions;

export default todoSlice.reducer;
