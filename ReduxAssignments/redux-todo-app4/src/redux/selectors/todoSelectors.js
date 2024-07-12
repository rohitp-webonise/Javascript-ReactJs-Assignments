// src/redux/selectors/todoSelectors.js

import { createSelector } from '@reduxjs/toolkit';

const selectTodosState = state => state.todos.todos;

export const selectUpcomingTodos = createSelector(
    [selectTodosState],
    todos => todos.upcoming
);

export const selectCompletedTodos = createSelector(
    [selectTodosState],
    todos => todos.completed
);

export const selectTodoById = (todoId) => createSelector(
    [selectTodosState],
    todos => [...todos.upcoming, ...todos.completed].find(todo => todo.id === todoId)
);
