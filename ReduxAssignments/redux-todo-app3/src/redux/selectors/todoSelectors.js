
import { createSelector } from '@reduxjs/toolkit';

const todosSelector = state => state.todos.todos;

export const selectTodos = createSelector(
    [todosSelector],
    (todos) => todos
);

export const selectTodoById = (todoId) => createSelector(
    [todosSelector],
    (todos) => todos.find(todo => todo.id === todoId)
);
