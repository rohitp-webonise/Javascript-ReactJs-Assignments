// src/redux/slices/todoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: {
            upcoming: [],
            completed: []
        }
    },
    reducers: {
        addTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos.upcoming.push({ id, text, status: 'upcoming' });
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos.upcoming = state.todos.upcoming.filter(todo => todo.id !== id);
            state.todos.completed = state.todos.completed.filter(todo => todo.id !== id);
        },
        updateTodo: (state, action) => {
            const { id, updatedTodo } = action.payload;
            const allTodos = [...state.todos.upcoming, ...state.todos.completed];
            const index = allTodos.findIndex(todo => todo.id === id);

            if (index !== -1) {
                const updated = { ...allTodos[index], ...updatedTodo };
                if (updated.status === 'completed') {
                    state.todos.completed = [
                        ...state.todos.completed.filter(todo => todo.id !== id),
                        updated
                    ];
                } else {
                    state.todos.upcoming = [
                        ...state.todos.upcoming.filter(todo => todo.id !== id),
                        updated
                    ];
                }
            }
        },
        toggleTodoCompletion: (state, action) => {
            const id = action.payload;
            const indexInUpcoming = state.todos.upcoming.findIndex(todo => todo.id === id);
            const indexInCompleted = state.todos.completed.findIndex(todo => todo.id === id);

            if (indexInUpcoming !== -1) {
                const todo = state.todos.upcoming[indexInUpcoming];
                state.todos.upcoming.splice(indexInUpcoming, 1);
                state.todos.completed.push({ ...todo, status: 'completed' });
            } else if (indexInCompleted !== -1) {
                const todo = state.todos.completed[indexInCompleted];
                state.todos.completed.splice(indexInCompleted, 1);
                state.todos.upcoming.push({ ...todo, status: 'upcoming' });
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo, toggleTodoCompletion } = todoSlice.actions;

export default todoSlice.reducer;
