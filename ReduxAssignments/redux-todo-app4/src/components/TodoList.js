

import React from 'react';
import { useSelector } from 'react-redux';
import { selectUpcomingTodos } from '../redux/selectors/todoSelectors';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(selectUpcomingTodos);

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
